import Link from "next/link";
import { allProjects } from "../constant/data";
import ProjectFilter from "./ProjectFilter";

export const metadata = {
  title: "Projects",
  description:
    "Fuel stations, oil depots, blending plants and Pakistan's first DC fast EV charger, delivered by Civtech Solution.",
};

export default function ProjectsPage() {
  return (
    <main className="animate-fade-up">
      {/* Hero */}
      <section className="bg-[#1b2a5e] text-white pt-24">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm text-slate-300">
            <Link href="/">Home</Link> › Projects
          </p>

          <h1 className="text-5xl font-bold lg:text-7xl">
            Our <span className="text-amber-400">Projects</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            A portfolio of transformative projects across fuel stations,
            industrial facilities, and EV infrastructure.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <ProjectFilter projects={allProjects} />
      </section>

      {/* Industrial Portfolio */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Industrial Portfolio
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Oil Storage Depots & Blending Plants
          </h2>

          <p className="mt-6 max-w-4xl text-lg text-slate-600">
            Our founder’s extensive experience in managing oil storage depots,
            pipelines, and blending plants reinforces Civtech Solution’s
            capability in delivering complex engineering projects.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Hascol Lube Blending Plant — Base Oil Tanks",
              "Hascol Lube Blending Plant — Admin Building",
              "Hascol Lube Blending Plant — Blending Kettles",
              "Hascol Thallian Depot",
              "Hascol Kotla Jam Depot",
              "Hascol Sahiwal Depot",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#1b2a5e] p-8">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                  Industrial Project
                </div>

                <h3 className="text-lg font-semibold text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
