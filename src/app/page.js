import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Quote, Zap } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import ProcessSteps from "@/components/ProcessSteps";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { buttonClass } from "@/components/ui";
import { founder, projects, services } from "@/lib/data";
import { SITE_URL, company, stats } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.name,
  slogan: company.tagline,
  description: company.description,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  telephone: company.phone.href.replace("tel:", ""),
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressCountry: "PK",
  },
  founder: { "@type": "Person", name: founder.name },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950 pt-20 text-white">
        <div className="bg-grid fade-mask absolute inset-0 -z-10" />
        <div className="absolute -right-40 -top-40 -z-10 size-[36rem] rounded-full bg-gold-500/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 -z-10 size-[32rem] rounded-full bg-navy-600/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-32 pt-16 lg:grid-cols-12 lg:pb-40 lg:pt-24">
          <div className="lg:col-span-7">
            <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm font-medium text-gold-300">
              <BadgeCheck className="size-4" aria-hidden />
              PEC Registered · {company.pec.category} Category
            </p>

            <h1 className="mt-8 animate-fade-up text-5xl font-bold leading-[1.05] tracking-tight [animation-delay:80ms] sm:text-6xl lg:text-7xl">
              Expertly crafted.
              <br />
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                Smartly managed.
              </span>
            </h1>

            <p className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-slate-300 [animation-delay:160ms]">
              Civil engineering and construction for oil &amp; gas, power,
              industrial and residential clients across Pakistan — planned,
              built and supervised by one accountable team.
            </p>

            <div className="mt-10 flex animate-fade-up flex-col gap-4 [animation-delay:240ms] sm:flex-row">
              <Link href="/contact" className={buttonClass("primary")}>
                Start your project
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link href="/projects" className={buttonClass("outline")}>
                View our projects
              </Link>
            </div>

            <p className="mt-12 animate-fade-up text-sm text-slate-400 [animation-delay:320ms]">
              Delivering projects for{" "}
              <span className="font-semibold text-white">Shell Pakistan</span>{" "}
              and <span className="font-semibold text-white">Hascol</span>
            </p>
          </div>

          <div className="animate-fade-up [animation-delay:200ms] lg:col-span-5">
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-gold-500 text-navy-950">
                <Zap className="size-7" aria-hidden />
              </span>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
                Pioneering project
              </p>
              <p className="mt-3 text-2xl font-semibold leading-snug">
                Developer of Pakistan’s first commercial DC fast charging
                station
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                Solar canopies and retail integration at DHA Karachi — a
                blueprint for EV infrastructure in the country.
              </p>
              <Link
                href="/projects"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 transition hover:text-gold-100"
              >
                Explore the portfolio
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Key figures" className="relative z-10 -mt-16 px-6">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-slate-200 rounded-3xl bg-white shadow-2xl shadow-navy-950/10 ring-1 ring-slate-200 lg:grid-cols-4 lg:divide-x">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse p-6 text-center sm:p-8"
            >
              <dt className="mt-2 text-sm text-slate-600">{stat.label}</dt>
              <dd className="text-4xl font-bold tracking-tight text-navy-800 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <SectionHeading
          eyebrow="What we do"
          title="Core services"
          description="Engineering, construction and project management under one roof — from a single residence to multi-site fuel and energy infrastructure."
          action={
            <Link href="/services" className={buttonClass("dark", "shrink-0")}>
              All services
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services
            .filter((service) => service.featured)
            .map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                showTags={false}
              />
            ))}
        </div>
      </section>

      <ProcessSteps />

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <SectionHeading
          eyebrow="Our work"
          title="Featured projects"
          description="Fuel retail, industrial depots and Pakistan’s first commercial DC fast charger."
          action={
            <Link href="/projects" className={buttonClass("dark", "shrink-0")}>
              All projects
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
        </div>
      </section>

      {/* Founder quote */}
      <section className="relative isolate overflow-hidden bg-navy-900 py-24 text-white lg:py-32">
        <div className="bg-grid fade-mask absolute inset-0 -z-10" />
        <figure className="mx-auto max-w-4xl px-6 text-center">
          <Quote className="mx-auto size-12 text-gold-500" aria-hidden />
          <blockquote className="mt-8 text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
            “{founder.quote}”
          </blockquote>
          <figcaption className="mt-10">
            <p className="font-semibold text-white">{founder.name}</p>
            <p className="mt-1 text-sm text-gold-400">{founder.role}</p>
          </figcaption>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 transition hover:text-gold-100"
          >
            Read our story
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </figure>
      </section>

      <CtaBanner />
    </>
  );
}
