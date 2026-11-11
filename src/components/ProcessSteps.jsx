import SectionHeading from "./SectionHeading";
import { processSteps } from "@/lib/data";

export default function ProcessSteps() {
  return (
    <section className="bg-slate-50 bg-dot-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title="From planning to precision"
          description="One accountable team from the first survey to final handover — so nothing falls between the cracks."
        />

        <ol className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="group relative rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <span className="absolute right-6 top-6 rounded-full bg-slate-100 px-2.5 py-1 font-mono text-xs font-semibold text-slate-500 transition group-hover:bg-gold-50 group-hover:text-gold-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-975 text-gold-300 shadow-lg shadow-navy-900/15">
                  <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {step.desc}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
