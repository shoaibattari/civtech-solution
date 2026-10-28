import { CircleCheck } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { founder, team } from "@/lib/data";
import { company } from "@/lib/site";

export const metadata = {
  title: "Our Team",
  description:
    "Meet the engineers, architects and project managers behind Civtech Solution, led by founder and CEO Wajahat Ahmed.",
  alternates: { canonical: "/team" },
};

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        current="Team"
        eyebrow="Our people"
        title="Meet the"
        highlight="team"
        description="Architects, engineers, project managers and specialists committed to delivering exceptional results."
      />

      {/* Founder */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-5">
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy-900 p-10 text-white">
              <div className="bg-grid absolute inset-0 -z-10" />
              <div className="absolute -right-16 -top-16 -z-10 size-64 rounded-full bg-gold-500/20 blur-3xl" />
              <span className="flex size-24 items-center justify-center rounded-full bg-gold-500 text-3xl font-bold text-navy-950 ring-4 ring-white/10">
                {initials(founder.name)}
              </span>
              <h2 className="mt-8 text-3xl font-bold tracking-tight">
                {founder.name}
              </h2>
              <p className="mt-1 font-medium text-gold-400">{founder.role}</p>
              <ul className="mt-8 space-y-3">
                {founder.credentials.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300">
                    <CircleCheck
                      className="size-5 shrink-0 text-gold-400"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Founder’s message"
              title="A legacy built on precision, innovation & excellence"
            />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                At Civtech Solution, we don’t just build structures — we shape
                the future and redefine possibilities. Over{" "}
                {company.yearsExperience} years in civil engineering, my journey
                has been one of creating transformative solutions across oil
                &amp; gas, power, industrial and residential sectors.
              </p>
              <p>
                Working alongside global pioneers like Shell, Siemens, General
                Electric and Aga Khan, I’ve learned that greatness lies in
                precision, innovation and an unyielding commitment to
                excellence. Together, let’s push boundaries and create a future
                we can all be proud of.
              </p>
            </div>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Experience with
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {founder.experienceWith.map((org) => (
                <li
                  key={org}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-navy-800"
                >
                  {org}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            align="center"
            eyebrow="The people"
            title="Our professionals"
          />
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <li
                key={member.name}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <span className="mx-auto flex size-20 items-center justify-center rounded-full bg-navy-50 text-xl font-bold text-navy-800 ring-1 ring-navy-100 transition group-hover:bg-navy-800 group-hover:text-gold-400">
                  {initials(member.name)}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-navy-950">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold-700">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-slate-600">{member.qual}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner title="Work with our team" />
    </>
  );
}
