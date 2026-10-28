import Link from "next/link";
import { projects, services } from "./constant/data";


export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1b2a5e] text-white pt-8 animate-fade-up">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
                PEC Registered · C4 Category
              </span>

              <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-7xl">
                Expertly Crafted,
                <br />
                <span className="text-amber-400">Smartly Managed</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Pakistan's premier civil engineering & construction company
                delivering transformative solutions across oil & gas, power,
                industrial and residential sectors.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-900"
                >
                  Explore Services
                </Link>

                <Link
                  href="/projects"
                  className="rounded-lg border border-white/20 px-6 py-3"
                >
                  View Projects
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="mb-6 text-2xl font-semibold">Our Core Services</h3>

              <div className="space-y-5">
                {services.map((service) => (
                  <div key={service.title} className="flex gap-4">
                    <div className="text-2xl">{service.icon}</div>

                    <div>
                      <h4 className="font-semibold">{service.title}</h4>
                      <p className="text-sm text-slate-300">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-amber-500 py-8 text-center text-slate-900">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold">50+</div>
            <div>Shell Fuel Stations</div>
          </div>

          <div>
            <div className="text-3xl font-bold">14+</div>
            <div>Years Experience</div>
          </div>

          <div>
            <div className="text-3xl font-bold">6+</div>
            <div>Hascol Depots</div>
          </div>

          <div>
            <div className="text-3xl font-bold">1st</div>
            <div>EV DC Fast Charger</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-100 p-10">
            <blockquote className="text-2xl font-semibold">
              "Every project is more than construction — it's a legacy in the
              making."
            </blockquote>

            <p className="mt-4 text-slate-600">— Wajahat Ahmed, CEO</p>
          </div>

          <div>
            <span className="text-amber-600">Our Story</span>

            <h2 className="mt-3 text-4xl font-bold">
              Civil & Technical Excellence Since Day One
            </h2>

            <p className="mt-6 text-slate-600">
              Derived from Civil and Technical, Civtech Solution delivers
              expertly crafted solutions and smartly managed projects.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-block rounded-lg bg-[#1b2a5e] px-6 py-3 text-white"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-4xl font-bold">Our Core Services</h2>

            <Link
              href="/services"
              className="rounded-lg bg-[#1b2a5e] px-5 py-3 text-white"
            >
              View All Services
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-[#b8962e] bg-white p-6"
              >
                <div className="text-4xl">{service.icon}</div>

                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>

                <p className="mt-3 text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-4xl font-bold">Key Projects</h2>

          <Link
            href="/projects"
            className="rounded-lg bg-[#1b2a5e] px-5 py-3 text-white"
          >
            All Projects
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="rounded-2xl border border-[#b8962e] p-6">
              <span className="text-sm text-amber-600">{project.category}</span>

              <h3 className="mt-3 text-xl font-bold">{project.name}</h3>

              <p className="mt-2 text-slate-600">{project.loc}</p>

              <span className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm">
                {project.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1b2a5e] py-24 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-5xl font-bold">
            Ready to Build Something
            <span className="text-amber-400"> Extraordinary?</span>
          </h2>

          <p className="mt-6 text-slate-300">
            Let's turn your vision into reality.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-amber-500 px-8 py-4 font-semibold text-slate-900"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
