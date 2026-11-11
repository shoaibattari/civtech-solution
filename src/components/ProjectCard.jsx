import Image from "next/image";
import { Factory, Fuel, MapPin, Zap } from "lucide-react";

const categoryStyles = {
  "Fuel Stations": { icon: Fuel, badge: "text-gold-300" },
  Industrial: { icon: Factory, badge: "text-sky-300" },
  "EV Charging": { icon: Zap, badge: "text-emerald-300" },
};

export default function ProjectCard({ project }) {
  const { icon: Icon, badge } =
    categoryStyles[project.category] ?? categoryStyles["Fuel Stations"];

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-2xl hover:shadow-navy-900/12">
      <div className="relative flex h-52 items-end overflow-hidden bg-navy-950 p-5">
        {project.image && (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-975 via-navy-975/45 to-navy-975/20" />
        <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-xl border border-white/15 bg-navy-975/60 backdrop-blur-md">
          <Icon className={`size-5 ${badge}`} strokeWidth={1.75} aria-hidden />
        </span>

        <span
          className={`relative rounded-full border border-white/15 bg-navy-975/75 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-md ${badge}`}
        >
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-navy-950 transition group-hover:text-navy-800">
          {project.name}
        </h3>
        <p className="mt-2 flex items-start gap-2 text-sm text-slate-600">
          <MapPin
            className="mt-0.5 size-4 shrink-0 text-gold-600"
            aria-hidden
          />
          {project.location}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-800 ring-1 ring-navy-100">
            {project.client}
          </span>
          {project.highlight && (
            <span className="rounded-full bg-gold-50 px-3 py-1 text-xs font-medium text-gold-700 ring-1 ring-gold-500/25">
              {project.highlight}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
