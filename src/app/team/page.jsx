import Link from "next/link";

const team = [
  {
    initials: "WA",
    name: "Wajahat Ahmed",
    role: "CEO & Founder",
    qual: "Civil Engineer | PMP Certified",
  },
  {
    initials: "AK",
    name: "Ahmed Khan",
    role: "Project Manager",
    qual: "B.E Civil | 8+ Years Experience",
  },
  {
    initials: "SR",
    name: "Sara Riaz",
    role: "Architect",
    qual: "B.Arch | Interior & Exterior Design",
  },
  {
    initials: "HM",
    name: "Hassan Mehmood",
    role: "Site Engineer",
    qual: "Civil Engineer | Site Execution Expert",
  },
  {
    initials: "ZA",
    name: "Zain Ali",
    role: "Structural Engineer",
    qual: "MSc Structural Engineering",
  },
  {
    initials: "FA",
    name: "Fatima Ali",
    role: "QS Engineer",
    qual: "Quantity Surveying Specialist",
  },
  {
    initials: "UA",
    name: "Usman Ali",
    role: "Electrical Engineer",
    qual: "Power & Infrastructure Systems",
  },
  {
    initials: "NA",
    name: "Nida Ahmed",
    role: "HR & Admin",
    qual: "Management & Operations",
  },
];

export default function TeamPage() {
  return (
    <main className="animate-fade-up">
      {/* HERO */}
      <section className="bg-[#1b2a5e] text-white pt-24">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm text-slate-300">
            <Link href="/">Home</Link> › Team
          </p>

          <h1 className="text-5xl font-bold lg:text-7xl">
            Our <span className="text-amber-400">Team</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Dedicated professionals — architects, engineers,
            project managers, and specialists committed to
            delivering exceptional results.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1b2a5e] text-xl font-bold text-white">
                  {member.initials}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-amber-600">
                  {member.role}
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  {member.qual}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO SECTION */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* CEO Card */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#1b2a5e] text-2xl font-bold text-white">
                WA
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Wajahat Ahmed
              </h3>

              <p className="text-amber-600 font-semibold">
                CEO & Founder
              </p>

              <div className="mt-6 space-y-2 text-sm text-slate-600">
                {[
                  "B.E in Civil Engineering (NED)",
                  "Master's in Project Management (MPM)",
                  "Project Management Professional (PMP)",
                  "14+ Years in Civil Engineering",
                  "Managed 50+ Shell Pakistan Projects",
                ].map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            {/* CEO Content */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
                Founder&apos;s Message
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
                A Legacy Built on Precision, Innovation & Excellence
              </h2>

              <div className="mt-4 h-1 w-24 bg-amber-500"></div>

              <p className="mt-8 text-lg leading-7 text-slate-600">
                At Civtech Solution, we don't just build
                structures — we shape the future and redefine
                possibilities. With 14 years of relentless
                dedication in civil engineering, my journey
                has been one of creating transformative
                solutions across oil & gas, power, industrial,
                and residential sectors.
              </p>

              <p className="mt-6 text-lg leading-7 text-slate-600">
                Collaborating with global pioneers like Shell,
                Siemens, General Electric & Aga Khan, I've
                learned that greatness lies in precision,
                innovation, and an unyielding commitment to
                excellence. Together, let's push boundaries
                and create a future we can all be proud of.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Shell",
                  "Siemens",
                  "General Electric",
                  "Aga Khan",
                  "Hascol",
                  "Meinhardt",
                  "Descon",
                  "AKUH",
                ].map((org) => (
                  <span
                    key={org}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {org}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}