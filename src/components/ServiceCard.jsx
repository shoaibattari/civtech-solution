export default function ServiceCard({ service, showTags = true }) {
  const Icon = service.icon;

  return (
    <article
      id={service.slug}
      className="group relative flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-2xl hover:shadow-navy-900/10"
    >
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />

      <span className="flex size-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-800 transition group-hover:bg-navy-800 group-hover:text-gold-400">
        <Icon className="size-7" strokeWidth={1.75} aria-hidden />
      </span>

      <h3 className="mt-6 text-xl font-semibold text-navy-950">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-slate-600">
        {service.desc}
      </p>

      {showTags && (
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Specialisations">
          {service.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-gold-50 px-3 py-1 text-xs font-medium text-gold-700 ring-1 ring-gold-500/20"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
