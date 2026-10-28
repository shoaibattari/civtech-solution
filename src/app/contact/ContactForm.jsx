"use client";

import { useState } from "react";

const COMPANY_EMAIL = "Info@civtechsolution.com";

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20";

export default function ContactForm({ projectTypes }) {
  const [sent, setSent] = useState(false);

  // No email backend yet: open the visitor's mail app with the enquiry pre-filled
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = `${data.get("firstName")} ${data.get("lastName")}`.trim();

    const subject = `Project Enquiry: ${data.get("projectType")} (${name})`;
    const body = [
      `Name: ${name}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Project Type: ${data.get("projectType")}`,
      "",
      "Project Details:",
      data.get("details"),
    ].join("\n");

    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="text-sm font-medium text-slate-600">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Ahmed"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="lastName" className="text-sm font-medium text-slate-600">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Khan"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-slate-600">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-slate-600">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+92-xxx-xxxxxxx"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="projectType" className="text-sm font-medium text-slate-600">
          Project Type
        </label>
        <select id="projectType" name="projectType" className={inputClass}>
          {projectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="details" className="text-sm font-medium text-slate-600">
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          required
          placeholder="Tell us about your project requirements, location, and timeline..."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-amber-500 py-3 font-semibold text-[#1b2a5e] transition hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b2a5e]"
      >
        Send Message
      </button>

      <p role="status" className="text-sm text-slate-600">
        {sent &&
          `Your email app should open with the message ready. If it doesn't, email us directly at ${COMPANY_EMAIL}.`}
      </p>
    </form>
  );
}
