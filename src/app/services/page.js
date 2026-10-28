import React from "react";
import { allServices, } from "../constant/data";
import Link from "next/link";

export const metadata = {
  title: "Services",
  description:
    "Residential and commercial construction, project management, structural design, surveys, quantity estimation and EV charging infrastructure in Pakistan.",
};

const page = () => {
  return (
    <main className="animate-fade-up">
      {/* Hero */}
      <section className="bg-[#1b2a5e] text-white pt-24">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm text-slate-300">
            <Link href="/">Home</Link> › Services
          </p>

          <h1 className="text-5xl font-bold lg:text-7xl">
            Our <span className="text-amber-400">Services</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Comprehensive civil, construction, and technical solutions — from
            residential builds to EV charging infrastructure.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {allServices.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-[#b8962e] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">{service.icon}</div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mb-6 leading-relaxed text-slate-600">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#b8962e] px-3 py-1 text-sm font-medium text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Structures */}
      <section className="bg-[#1b2a5e] py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              Modern Structures
            </span>

            <h2 className="mt-4 text-5xl font-bold text-white">
              Turning Blueprints into{" "}
              <span className="text-amber-400">Reality</span>
            </h2>

            <div className="mt-10 space-y-4">
              {[
                "Minimal Designs",
                "Sustainable Materials",
                "High-Quality Finishes",
                "Durability & Strength",
                "Customizable Layouts",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-amber-400" />

                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Residential", icon: "🏠" },
              { name: "Commercial", icon: "🏢" },
              { name: "Designing", icon: "📐" },
              { name: "Renovation", icon: "🔨" },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-amber-500/20 bg-white/5 p-8 text-center backdrop-blur"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>

                <div className="font-semibold text-amber-400">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Execution */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Expert Execution
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            From Planning to Precision,
            <br />
            We&apos;ve Got You Covered
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {[
            {
              icon: "📋",
              title: "End-to-End Planning",
            },
            {
              icon: "✅",
              title: "Flawless Execution",
            },
            {
              icon: "👷",
              title: "On-Site Supervision",
            },
            {
              icon: "🎯",
              title: "Quality Assurance",
            },
            {
              icon: "🔧",
              title: "Technical Support",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#b8962e] bg-slate-50 p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1b2a5e] text-2xl text-white">
                {item.icon}
              </div>

              <h3 className="font-semibold text-[#1b2a5e]">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
