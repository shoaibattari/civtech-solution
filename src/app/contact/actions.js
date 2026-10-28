"use server";

import { contactProjectTypes } from "@/lib/data";
import { company } from "@/lib/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData, name) {
  return String(formData.get(name) ?? "").trim();
}

function validate(values) {
  const errors = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(values.email))
    errors.email = "Please enter a valid email address.";
  if (values.phone && !/^[+\d][\d\s-]{6,}$/.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!contactProjectTypes.includes(values.projectType)) {
    errors.projectType = "Please choose a project type.";
  }
  if (values.message.length < 10) {
    errors.message = "Please tell us a little more about your project.";
  }
  if (values.message.length > 5000)
    errors.message = "Please keep your message under 5,000 characters.";
  return errors;
}

async function sendEmail(values) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("RESEND_API_KEY is not configured");
    }
    console.info(
      "[contact] RESEND_API_KEY not set — enquiry not emailed:",
      values,
    );
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.CONTACT_FROM_EMAIL ??
        "Civtech Website <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? company.email,
      reply_to: values.email,
      subject: `New enquiry: ${values.projectType} — ${values.name}`,
      text: [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone || "—"}`,
        `Project type: ${values.projectType}`,
        "",
        values.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Resend responded ${response.status}: ${await response.text()}`,
    );
  }
}

export async function submitEnquiry(prevState, formData) {
  const values = {
    name: field(formData, "name"),
    email: field(formData, "email"),
    phone: field(formData, "phone"),
    projectType: field(formData, "projectType"),
    message: field(formData, "message"),
  };

  // Honeypot: real visitors never see or fill this field.
  if (field(formData, "company_website")) {
    return { status: "success", values: {} };
  }

  const errors = validate(values);
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
      values,
    };
  }

  try {
    await sendEmail(values);
  } catch (error) {
    console.error("[contact] Failed to send enquiry:", error);
    return {
      status: "error",
      message: `Sorry, we couldn’t send your message. Please email us at ${company.email} or call ${company.phone.display}.`,
      values,
    };
  }

  return { status: "success", values: {} };
}
