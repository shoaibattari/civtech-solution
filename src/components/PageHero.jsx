import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  current,
  image,
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-975 pt-20 text-white">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            preload
            sizes="100vw"
            className="-z-30 object-cover object-right md:object-center"
          />
          <div
            className="absolute inset-0 -z-20 bg-gradient-to-r from-navy-975 via-navy-975/72 via-38% to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-x-0 top-0 -z-20 h-28 bg-gradient-to-b from-navy-975/75 to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-x-0 bottom-0 -z-20 h-20 bg-gradient-to-t from-navy-975 to-transparent"
            aria-hidden
          />
        </>
      )}

      <div
        className={`bg-blueprint fade-mask absolute inset-0 -z-10 ${
          image ? "opacity-40" : "opacity-100"
        }`}
      />
      <div className="absolute -right-32 -top-32 -z-10 size-[30rem] rounded-full bg-gold-400/12 blur-3xl" />
      <div className="absolute -left-40 bottom-0 -z-10 size-[26rem] rounded-full bg-navy-600/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:pb-28 lg:pt-24">
        <nav aria-label="Breadcrumb" className="animate-fade-up">
          <ol className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-navy-975/60 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="size-3.5 text-slate-400" />
            </li>
            <li aria-current="page" className="text-gold-300">
              {current}
            </li>
          </ol>
        </nav>

        {eyebrow && (
          <p className="mt-8 animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-gold-300 [animation-delay:80ms]">
            {eyebrow}
          </p>
        )}

        <h1 className="mt-4 max-w-4xl animate-fade-up text-4xl font-bold tracking-tight [animation-delay:120ms] sm:text-5xl lg:text-6xl">
          {title}{" "}
          {highlight && (
            <span className="bg-gradient-to-r from-gold-200 via-gold-300 to-gold-500 bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-200/90 [animation-delay:200ms]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
