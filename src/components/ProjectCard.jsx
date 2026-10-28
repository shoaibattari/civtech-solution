import { Factory, Fuel, MapPin, Zap } from "lucide-react";

const categoryStyles = {
  "Fuel Stations": { icon: Fuel, glow: "from-gold-500/30" },
  Industrial: { icon: Factory, glow: "from-navy-600/60" },
  "EV Charging": { icon: Zap, glow: "from-emerald-400/25" },
};

export default function ProjectCard({ project }) {
  const { icon: Icon, glow } = categoryStyles[project.category];

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-900/10">
      <div className="relative flex h-44 items-end overflow-hidden bg-navy-900 p-6">
        <div className="bg-grid absolute inset-0" />
        <div
          className={`absolute -right-10 -top-10 size-56 rounded-full bg-gradient-to-br ${glow} to-transparent blur-2xl transition duration-500 group-hover:scale-125`}
        />
        <Icon
          className="absolute right-6 top-6 size-16 text-white/15 transition duration-500 group-hover:text-gold-400/40"
          strokeWidth={1.25}
          aria-hidden
        />
        <span className="relative rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-300 backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-navy-950">{project.name}</h3>
        <p className="mt-2 flex items-start gap-2 text-sm text-slate-600">
          <MapPin
            className="mt-0.5 size-4 shrink-0 text-gold-600"
            aria-hidden
          />
          {project.location}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-800">
            {project.client}
          </span>
          {project.highlight && (
            <span className="rounded-full bg-gold-50 px-3 py-1 text-xs font-medium text-gold-700 ring-1 ring-gold-500/20">
              {project.highlight}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
