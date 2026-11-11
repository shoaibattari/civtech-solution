import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Quote,
  ShieldCheck,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import ProcessSteps from "@/components/ProcessSteps";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TrustLogos from "@/components/TrustLogos";
import { buttonClass, serviceAccents } from "@/components/ui";
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

const evHighlights = [
  { icon: Zap, label: "DC Fast Charge", detail: "High-output EV bays" },
  { icon: Sun, label: "Solar Canopy", detail: "Clean canopy generation" },
  { icon: Sparkles, label: "Retail Hub", detail: "Integrated urban forecourt" },
];

export default function HomePage() {
  const coreServices = services.filter((service) => service.featured);
  const specialisedServices = services.filter((service) => !service.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-975 pt-20 text-white">
        <Image
          src="/images/hero-civtech.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-30 object-cover object-[70%_center] lg:object-center"
        />
        <div
          className="absolute inset-0 -z-20 bg-gradient-to-r from-navy-975 via-navy-975/78 via-36% to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 top-0 -z-20 h-28 bg-gradient-to-b from-navy-975/75 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-20 h-28 bg-gradient-to-t from-navy-975 to-transparent"
          aria-hidden
        />
        <div
          className="bg-blueprint fade-mask absolute inset-0 -z-10 opacity-35"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-24 top-1/3 -z-10 size-[28rem] rounded-full bg-gold-400/10 blur-3xl"
          aria-hidden
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-28 pt-12 lg:grid-cols-12 lg:gap-8 lg:pb-36 lg:pt-20">
          <div className="lg:col-span-6 xl:col-span-6">
            <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-gold-400/35 bg-navy-975/70 px-4 py-1.5 text-sm font-medium text-gold-200 shadow-[0_0_24px_rgba(242,188,56,0.12)] backdrop-blur-md">
              <BadgeCheck className="size-4 text-gold-400" aria-hidden />
              PEC Registered · {company.pec.category} Category
            </p>

            <h1 className="mt-7 animate-fade-up text-4xl font-bold leading-[1.06] tracking-tight [animation-delay:80ms] sm:text-6xl xl:text-[4.25rem]">
              Expertly Crafted,
              <br />
              <span className="bg-gradient-to-r from-gold-200 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                Smartly Managed.
              </span>
            </h1>

            <div
              className="mt-4 h-px w-64 animate-fade-up bg-gradient-to-r from-gold-400/75 via-gold-300/35 to-transparent shadow-[0_0_18px_rgba(242,188,56,0.55)] [animation-delay:120ms]"
              aria-hidden
            />

            <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-slate-200/90 [animation-delay:160ms] sm:text-lg">
              Civil engineering and construction for oil &amp; gas, power,
              industrial and residential clients across Pakistan — planned,
              built and supervised by one accountable team.
            </p>

            <div className="mt-9 flex animate-fade-up flex-col gap-4 [animation-delay:240ms] sm:flex-row">
              <Link href="/contact" className={buttonClass("primary", "px-7 py-3.5")}>
                Start Your Project
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link href="/projects" className={buttonClass("outline", "px-7 py-3.5")}>
                View Our Projects
              </Link>
            </div>

            <TrustLogos />
          </div>

          <div className="animate-fade-up [animation-delay:200ms] lg:col-span-5 lg:col-start-8">
            <div className="glass-panel rounded-3xl p-6 sm:p-7">
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Our Core Services
              </h2>
              <div
                className="mt-2.5 h-0.5 w-11 rounded-full bg-gradient-to-r from-gold-300 to-gold-500"
                aria-hidden
              />

              <ul className="mt-5 space-y-3">
                {coreServices.map((service) => {
                  const Icon = service.icon;
                  const accent =
                    serviceAccents[service.accent] ?? serviceAccents.amber;

                  return (
                    <li key={service.slug}>
                      <Link
                        href={`/services#${service.slug}`}
                        className="glass-row group flex items-center gap-4 rounded-2xl p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-gold-400/45 hover:bg-white/[0.08]"
                      >
                        <span
                          className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${accent.hero}`}
                        >
                          <Icon className="size-6" strokeWidth={1.8} aria-hidden />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-[15px] font-semibold text-white transition group-hover:text-gold-200">
                            {service.title}
                          </span>
                          <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-slate-300/90">
                            {service.heroDesc ?? service.desc}
                          </span>
                        </span>

                        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-slate-300 transition duration-300 group-hover:border-gold-300 group-hover:bg-gold-400 group-hover:text-navy-975">
                          <ArrowRight className="size-4" aria-hidden />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Key figures" className="relative z-20 -mt-14 px-6">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-slate-200/80 rounded-3xl bg-white/95 shadow-2xl shadow-navy-975/15 ring-1 ring-slate-200/80 backdrop-blur-xl lg:grid-cols-4 lg:divide-x">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse p-6 text-center sm:p-8"
            >
              <dt className="mt-2 text-sm text-slate-600">{stat.label}</dt>
              <dd className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Technical capabilities */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <SectionHeading
          eyebrow="Full-spectrum capabilities"
          title="Specialised engineering & technical delivery"
          description="Beyond turnkey construction, our multidisciplinary teams handle every technical, structural, mechanical and estimating discipline in-house."
          action={
            <Link href="/services" className={buttonClass("dark", "shrink-0")}>
              All {services.length} services
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialisedServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}

          <Link
            href="/services"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-navy-800 bg-navy-975 p-8 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:border-gold-400/50"
          >
            <div className="bg-blueprint absolute inset-0 opacity-45" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3.5 py-1 text-xs font-semibold text-gold-300">
                <ShieldCheck className="size-3.5" aria-hidden />
                PEC {company.pec.category} · {company.pec.fields} Fields
              </span>
              <h3 className="mt-6 text-2xl font-bold tracking-tight">
                One accountable partner from concept to handover
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Explore our complete suite of residential, commercial, energy
                and technical engineering capabilities.
              </p>
            </div>

            <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition group-hover:text-gold-200">
              View full service catalogue
              <ArrowUpRight className="size-4" aria-hidden />
            </span>
          </Link>
        </div>
      </section>

      {/* Pioneering EV & Energy Showcase */}
      <section className="relative isolate overflow-hidden bg-navy-975 py-24 text-white lg:py-32">
        <div className="bg-blueprint fade-mask absolute inset-0 -z-10 opacity-65" />
        <div
          className="pointer-events-none absolute -right-40 top-1/4 -z-10 size-[34rem] rounded-full bg-emerald-500/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 bottom-0 -z-10 size-[28rem] rounded-full bg-gold-400/12 blur-3xl"
          aria-hidden
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/15 bg-navy-900 shadow-2xl">
              <Image
                src="/images/project-ev-charging.jpg"
                alt="Commercial solar-canopy DC fast charging station with electric vehicle at twilight"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-975/80 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy-975/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
                <Zap className="size-3.5" aria-hidden />
                DHA Karachi · Commercial EV Hub
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
              <span className="h-px w-8 bg-gold-400" />
              Pioneering Milestone
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Pakistan’s first commercial DC fast charging station
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Engineered and delivered with solar canopies, high-capacity power
              infrastructure and retail integration in DHA Karachi — setting the
              blueprint for commercial EV mobility nationwide.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {evHighlights.map(({ icon: Icon, label, detail }) => (
                <li
                  key={label}
                  className="glass-row rounded-2xl p-4 backdrop-blur-md"
                >
                  <Icon className="size-5 text-gold-300" aria-hidden />
                  <p className="mt-3 text-sm font-semibold text-white">
                    {label}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">{detail}</p>
                </li>
              ))}
            </ul>

            <Link
              href="/projects"
              className={buttonClass("primary", "mt-9")}
            >
              Explore the portfolio
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
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
      <section className="relative isolate overflow-hidden bg-navy-975 py-24 text-white lg:py-32">
        <div className="bg-blueprint fade-mask absolute inset-0 -z-10 opacity-50" />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl"
          aria-hidden
        />
        <figure className="mx-auto max-w-4xl px-6 text-center">
          <Quote className="mx-auto size-12 text-gold-400" aria-hidden />
          <blockquote className="mt-8 text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
            “{founder.quote}”
          </blockquote>
          <figcaption className="mt-10">
            <p className="font-semibold text-white">{founder.name}</p>
            <p className="mt-1 text-sm text-gold-300">{founder.role}</p>
          </figcaption>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 transition hover:text-gold-200"
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
