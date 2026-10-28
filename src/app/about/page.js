import React from "react";
import { missionVision, values } from "../constant/data";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Civtech Solution, a PEC C4 registered civil engineering and construction company in Karachi, Pakistan.",
};

const page = () => {
  return (
    <main className="animate-fade-up">
      {/* Hero */}
      <section className="bg-[#1b2a5e] text-white pt-24">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm text-slate-300">
            <Link href="/">Home</Link> › About Us
          </p>
          <h1 className="text-5xl font-bold lg:text-7xl">
            About <span className="text-amber-400">Civtech</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Derived from “Civil” and “Technical” — our name reflects our
            commitment to comprehensive civil, construction, and technical
            excellence.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative rounded-3xl bg-slate-100 p-12">
            <div className="text-7xl">🏗️</div>

            <blockquote className="mt-8 text-3xl font-bold text-slate-800">
              “We shape the future and redefine possibilities.”
            </blockquote>

            <p className="mt-4 text-slate-600">
              Founded with passion, driven by precision
            </p>

            <div className="absolute -bottom-6 right-4 sm:-right-6 rounded-2xl bg-amber-500 px-8 py-6 text-center text-slate-900">
              <div className="text-4xl font-bold">14+</div>
              <div className="text-sm font-medium">YEARS EXPERIENCE</div>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Our Story
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Our Company Overview
            </h2>

            <div className="mt-4 h-1 w-24 bg-amber-500"></div>

            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              At Civtech Solution, we pride ourselves on delivering expertly
              crafted solutions and smartly managed projects. We specialize in
              construction services and project management, ensuring every
              project is executed with precision, innovation, and a
              client-focused approach.
            </p>

            <p className="mt-6 leading-relaxed text-slate-600">
              The inspiration behind Civtech Solution lies in a deep passion for
              managing complex projects, driven by a strong interest in project
              management. The construction field has always been a major area of
              interest, motivating the establishment of the company to fulfill
              the dream of offering high-quality, efficient project solutions to
              the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {missionVision.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 border-t-4 border-t-amber-500 bg-white p-10"
              >
                <div className="mb-4 text-5xl">{item.icon}</div>

                <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
                  {item.label}
                </span>

                <h3 className="mt-3 text-3xl font-bold text-[#1b2a5e]">
                  {item.title}
                </h3>

                <p className="mt-6 leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            What We Stand For
          </span>

          <h2 className="mt-4 text-5xl font-bold">Our Core Values</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl bg-[#1b2a5e] p-8 text-center"
            >
              <div className="mb-4 text-5xl">{value.icon}</div>

              <h3 className="mb-4 text-2xl font-bold text-white">
                {value.title}
              </h3>

              <p className="leading-relaxed text-slate-300">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PEC Certification */}
      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-amber-500/20 bg-white p-12 text-center shadow-sm">
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Official Certification
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#1b2a5e]">
              Pakistan Engineering Council (PEC) — C4 Category
            </h2>

            <p className="mt-6 leading-relaxed text-slate-600">
              Civtech is registered with the Pakistan Engineering Council under
              C4 Category, ensuring exceptional standards and reliable, high-end
              civil engineering, construction, and consultancy services.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600">
              Licence No. 20691 — covering 12 specialization fields including
              irrigation, general building works, and infrastructure
              development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
