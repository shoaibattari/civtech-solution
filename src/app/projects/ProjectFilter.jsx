"use client";

import { useState } from "react";

export default function ProjectFilter({ projects }) {
  const [filter, setFilter] = useState("All");

  // Build the filter list from the data so no project is left unreachable
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <div
        className="mb-12 flex flex-wrap gap-3"
        role="group"
        aria-label="Filter projects by category"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === category
                ? "bg-amber-500 text-[#1b2a5e]"
                : "border border-slate-300 bg-white text-slate-600 hover:border-amber-500 hover:bg-[#b8962e]/10"
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
            <span className="text-sm font-semibold uppercase tracking-wide text-amber-700">
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
    </>
  );
}
