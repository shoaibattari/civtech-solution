import Link from "next/link";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: "📍",
      label: "Office Address",
      value: "B-280, Block 10, Gulberg Town, Karachi",
    },
    {
      icon: "📞",
      label: "Phone Number",
      value: "+92-333-2088924",
    },
    {
      icon: "📧",
      label: "Email Address",
      value: "Info@civtechsolution.com",
    },
    {
      icon: "📧",
      label: "CEO Direct",
      value: "Wajahat@civtechsolution.com",
    },
  ];

  const projectTypes = [
    "Residential Construction",
    "Commercial Construction",
    "Project Management",
    "Fuel Station / Depot",
    "EV Charging Infrastructure",
    "Renovation & Remodeling",
    "Engineering Survey",
    "Quantity Estimation",
    "Other",
  ];

  return (
    <main className="animate-fade-up">
      {/* Hero */}
      <section className="bg-[#1b2a5e] text-white pt-24">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm text-slate-300">
            <Link href="/">Home</Link> › Contact
          </p>

          <h1 className="text-5xl font-bold lg:text-7xl">
            Get in <span className="text-amber-400">Touch</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            We welcome inquiries for new projects and collaborations.
            Reach out to us today!
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Contact Information
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Let&apos;s Build Something Together
            </h2>

            <div className="mt-4 h-1 w-24 bg-amber-500"></div>

            <div className="mt-12 space-y-8">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4"
                >
                  <div className="text-2xl">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      {item.label}
                    </p>

                    <p className="text-lg font-medium text-slate-900">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* PEC Block */}
            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-lg font-bold text-[#1b2a5e]">
                PEC Registration
              </h3>

              <p className="mt-2 font-semibold text-slate-800">
                C4 Category — Licence No. 20691
              </p>

              <p className="mt-3 text-sm text-slate-600">
                Pakistan Engineering Council certified contractor,
                covering general building works, infrastructure
                development, and 10+ specialization fields.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <h3 className="mb-8 text-2xl font-bold text-[#1b2a5e]">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-600">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Ahmed"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-600">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Khan"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+92-xxx-xxxxxxx"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600">
                  Project Type
                </label>

                <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-400">
                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600">
                  Project Details
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project requirements, location, and timeline..."
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-amber-500 py-3 font-semibold text-[#1b2a5e] transition hover:bg-amber-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}