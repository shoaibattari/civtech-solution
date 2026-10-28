"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectCategories, projects } from "@/lib/data";

const filters = ["All", ...projectCategories];

export default function ProjectGrid() {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-3"
      >
        {filters.map((category) => {
          const count =
            category === "All"
              ? projects.length
              : projects.filter((p) => p.category === category).length;
          const active = filter === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={active}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                active
                  ? "bg-navy-800 text-white shadow-lg shadow-navy-800/20"
                  : "bg-white text-slate-700 ring-1 ring-slate-200 hover:ring-gold-500"
              }`}
            >
              {category}
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  active
                    ? "bg-gold-500 text-navy-950"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} projects
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </>
  );
}
