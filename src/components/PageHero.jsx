import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  current,
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-20 text-white">
      <div className="bg-grid fade-mask absolute inset-0 -z-10" />
      <div className="absolute -right-32 -top-32 -z-10 size-[28rem] rounded-full bg-gold-500/15 blur-3xl" />
      <div className="absolute -left-40 bottom-0 -z-10 size-[24rem] rounded-full bg-navy-600/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:pb-28 lg:pt-24">
        <nav aria-label="Breadcrumb" className="animate-fade-up">
          <ol className="flex items-center gap-1.5 text-sm text-slate-400">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="text-gold-300">
              {current}
            </li>
          </ol>
        </nav>

        {eyebrow && (
          <p className="mt-8 animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-gold-400 [animation-delay:80ms]">
            {eyebrow}
          </p>
        )}

        <h1 className="mt-4 max-w-4xl animate-fade-up text-4xl font-bold tracking-tight [animation-delay:120ms] sm:text-5xl lg:text-6xl">
          {title}{" "}
          {highlight && <span className="text-gold-400">{highlight}</span>}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-300 [animation-delay:200ms]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
