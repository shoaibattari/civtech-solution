import SectionHeading from "./SectionHeading";
import { processSteps } from "@/lib/data";

export default function ProcessSteps() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title="From planning to precision"
          description="One accountable team from the first survey to final handover — so nothing falls between the cracks."
        />

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="relative rounded-3xl border border-slate-200 bg-white p-8"
              >
                <span className="absolute right-6 top-6 font-mono text-sm font-semibold text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-navy-800 text-gold-400">
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
