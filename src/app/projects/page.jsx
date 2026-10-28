"use client";

import { useState } from "react";
import Link from "next/link";
import { allProjects } from "../constant/data";


export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Retail Fuel Station",
    "Industrial",
    "EV Charging",
  ];

  const filtered =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === filter);

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
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-5 py-2 hover:bg-[#b8962e]/10 text-sm font-semibold transition ${
                filter === category
                  ? "bg-amber-500 text-[#1b2a5e]"
                  : "border border-slate-300 bg-white text-slate-600 hover:border-amber-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <div
              key={project.name}
              className="rounded-3xl border border-[#b8962e] bg-white p-8 shadow-sm duration-300 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
                {project.category}
              </span>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                {project.name}
              </h3>

              <p className="mt-3 text-slate-600">{project.loc}</p>

              <span className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                {project.tag}
              </span>
            </div>
          ))}
        </div>
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
            Our founder's extensive experience in managing oil storage depots,
            pipelines, and blending plants reinforces Civtech Solution's
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
