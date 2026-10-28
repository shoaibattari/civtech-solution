import { Factory } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import ProjectGrid from "@/components/ProjectGrid";
import SectionHeading from "@/components/SectionHeading";
import { industrialPortfolio } from "@/lib/data";

export const metadata = {
  title: "Projects",
  description:
    "Shell Pakistan fuel stations, Hascol oil depots and blending plants, and Pakistan’s first commercial DC fast charger — the Civtech Solution portfolio.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        current="Projects"
        eyebrow="Our work"
        title="Our"
        highlight="projects"
        description="A portfolio of fuel stations, industrial facilities and EV infrastructure across Pakistan."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <ProjectGrid />
      </section>

      {/* Industrial portfolio */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Industrial portfolio"
            title="Oil storage depots & blending plants"
            description="Our founder’s extensive experience managing oil storage depots, pipelines and blending plants underpins Civtech’s capability on complex engineering work."
          />
          <ul className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industrialPortfolio.map((item) => (
              <li
                key={`${item.name}-${item.scope}`}
                className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-gold-400">
                  <Factory className="size-6" strokeWidth={1.75} aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold text-navy-950">
                    {item.name}
                  </span>
                  <span className="block text-sm text-slate-600">
                    {item.scope}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
