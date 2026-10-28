import { Building2, CircleCheck, Hammer, House, Ruler } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services, structureFeatures } from "@/lib/data";

export const metadata = {
  title: "Services",
  description:
    "Residential and commercial construction, project management, structural design, mechanical works, surveys, quantity estimation and EV charging infrastructure.",
  alternates: { canonical: "/services" },
};

const sectors = [
  { name: "Residential", icon: House },
  { name: "Commercial", icon: Building2 },
  { name: "Design", icon: Ruler },
  { name: "Renovation", icon: Hammer },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        current="Services"
        eyebrow="What we do"
        title="Our"
        highlight="services"
        description="Comprehensive civil, construction and technical solutions — from residential builds to EV charging infrastructure."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Modern structures */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-24 lg:py-32">
        <div className="bg-grid fade-mask absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Modern structures"
              title="Turning blueprints into reality"
              description="Every build balances how it looks, how long it lasts and how it will be used."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {structureFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-slate-200"
                >
                  <CircleCheck
                    className="size-5 shrink-0 text-gold-400"
                    aria-hidden
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid grid-cols-2 gap-4">
            {sectors.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center transition hover:border-gold-500/40 hover:bg-white/[0.07] sm:p-10"
              >
                <Icon
                  className="size-10 text-gold-400"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="mt-4 font-semibold text-white">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps />

      <CtaBanner title="Have a project in mind?" />
    </>
  );
}
