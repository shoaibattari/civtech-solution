"use client";

import { useActionState } from "react";
import { CircleCheck, CircleAlert, LoaderCircle, Send } from "lucide-react";
import { submitEnquiry } from "@/app/contact/actions";
import { contactProjectTypes } from "@/lib/data";
import { buttonClass } from "./ui";

const initialState = { status: "idle", values: {} };

const inputClass =
  "mt-2 block w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-navy-950 ring-1 ring-slate-200 transition placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 aria-[invalid=true]:ring-red-400";

function Field({ id, label, optional, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy-900">
        {label}
        {optional && (
          <span className="font-normal text-slate-500"> (optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitEnquiry,
    initialState,
  );
  const errors = state.errors ?? {};
  const values = state.values ?? {};

  const a11y = (name) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center py-12 text-center"
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CircleCheck className="size-8" aria-hidden />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-navy-950">Message sent</h3>
        <p className="mt-3 max-w-sm text-slate-600">
          Thank you for reaching out. Our team will get back to you within one
          business day.
        </p>
      </div>
    );
  }

  return (
    // key resets uncontrolled inputs to the values echoed back by the server
    <form
      key={JSON.stringify(values)}
      action={formAction}
      noValidate
      className="space-y-5"
    >
      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="flex gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-200"
        >
          <CircleAlert className="size-5 shrink-0" aria-hidden />
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            defaultValue={values.name}
            className={inputClass}
            {...a11y("name")}
          />
        </Field>

        <Field id="phone" label="Phone" optional error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+92 3xx xxxxxxx"
            defaultValue={values.phone}
            className={inputClass}
            {...a11y("phone")}
          />
        </Field>
      </div>

      <Field id="email" label="Email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
          defaultValue={values.email}
          className={inputClass}
          {...a11y("email")}
        />
      </Field>

      <Field id="projectType" label="Project type" error={errors.projectType}>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue={values.projectType ?? ""}
          className={inputClass}
          {...a11y("projectType")}
        >
          <option value="" disabled>
            Select a project type
          </option>
          {contactProjectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Project details" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your project — scope, location and timeline."
          defaultValue={values.message}
          className={inputClass}
          {...a11y("message")}
        />
      </Field>

      <div aria-hidden className="absolute -left-[9999px] h-0 overflow-hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className={buttonClass("primary", "w-full py-3.5")}
      >
        {pending ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            Send message
            <Send className="size-4" aria-hidden />
          </>
        )}
      </button>
    </form>
  );
}
