import { BadgeCheck, ShieldCheck } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { missionVision, values } from "@/lib/data";
import { company } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description:
    "Civtech Solution — derived from “Civil” and “Technical” — is a PEC C4 registered civil engineering, construction and project management company in Karachi.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        current="About"
        eyebrow="Who we are"
        title="About"
        highlight="Civtech"
        description="Derived from “Civil” and “Technical” — our name reflects our commitment to comprehensive civil, construction and technical excellence."
      />

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy-900 p-10 text-white sm:p-14">
              <div className="bg-grid absolute inset-0 -z-10" />
              <div className="absolute -right-20 -top-20 -z-10 size-72 rounded-full bg-gold-500/20 blur-3xl" />
              <blockquote className="text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
                “We shape the future and redefine possibilities.”
              </blockquote>
              <p className="mt-6 text-slate-400">
                Founded with passion, driven by precision.
              </p>
            </div>
            <div className="absolute -bottom-8 right-6 rounded-3xl bg-gold-500 px-8 py-6 text-navy-950 shadow-xl sm:-right-6">
              <p className="text-5xl font-bold tracking-tight">
                {company.yearsExperience}+
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider">
                Years experience
              </p>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Our story" title="Company overview" />
            <p className="mt-8 text-lg leading-relaxed text-slate-700">
              At Civtech Solution, we pride ourselves on delivering expertly
              crafted solutions and smartly managed projects. We specialise in
              construction services and project management, executing every
              project with precision, innovation and a client-focused approach.
            </p>
            <p className="mt-6 leading-relaxed text-slate-600">
              The company grew out of a deep passion for managing complex
              projects. Construction has always been at the heart of that
              interest — Civtech was founded to bring high-quality, efficient
              project delivery to the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2">
          {missionVision.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.label}
                className="rounded-[2rem] border border-slate-200 bg-white p-10 sm:p-12"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-gold-50 text-gold-700 ring-1 ring-gold-500/20">
                  <Icon className="size-7" strokeWidth={1.75} aria-hidden />
                </span>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-gold-700">
                  {item.label}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-950">
                  {item.title}
                </h2>
                <p className="mt-5 leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <SectionHeading
          align="center"
          eyebrow="What we stand for"
          title="Our core values"
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article
                key={value.title}
                className="group rounded-3xl border border-slate-200 p-8 transition duration-300 hover:border-navy-800 hover:bg-navy-800"
              >
                <Icon
                  className="size-8 text-gold-600 transition group-hover:text-gold-400"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="mt-6 text-xl font-semibold text-navy-950 transition group-hover:text-white">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600 transition group-hover:text-slate-300">
                  {value.desc}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* PEC certification */}
      <section className="px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 rounded-[2rem] bg-gold-50 p-10 ring-1 ring-gold-500/20 sm:flex-row sm:p-14">
          <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-navy-800 text-gold-400">
            <ShieldCheck className="size-8" aria-hidden />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-700">
              Official certification
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy-950 sm:text-3xl">
              Pakistan Engineering Council — {company.pec.category} Category
            </h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              Civtech is registered with the Pakistan Engineering Council under
              the {company.pec.category} category, assuring reliable,
              high-standard civil engineering, construction and consultancy
              services.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 font-medium text-navy-800">
              <BadgeCheck className="size-5 text-gold-600" aria-hidden />
              Licence No. {company.pec.licence} · {company.pec.fields}{" "}
              specialisation fields
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
