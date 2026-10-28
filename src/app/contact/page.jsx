import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Talk to Civtech Solution about your construction, project management or EV charging project. Office in Gulberg Town, Karachi.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: company.phone.display,
    href: company.phone.href,
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: UserRound,
    label: "CEO direct",
    value: company.ceoEmail,
    href: `mailto:${company.ceoEmail}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: `${company.address.street}, ${company.address.city}`,
    href: company.address.mapsUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        current="Contact"
        eyebrow="Get in touch"
        title="Let’s build something"
        highlight="together"
        description="We welcome enquiries for new projects and collaborations. Send us the details and we’ll respond within one business day."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold tracking-tight text-navy-950">
              Contact information
            </h2>
            <ul className="mt-8 space-y-4">
              {channels.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="group flex items-center gap-5 rounded-2xl border border-slate-200 p-5 transition hover:border-gold-500/50 hover:shadow-lg hover:shadow-navy-900/5"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-800 transition group-hover:bg-navy-800 group-hover:text-gold-400">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-slate-500">
                        {label}
                      </span>
                      <span className="block break-words font-semibold text-navy-950">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-slate-300 transition group-hover:text-gold-600"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-4 rounded-2xl bg-gold-50 p-6 ring-1 ring-gold-500/20">
              <ShieldCheck
                className="size-6 shrink-0 text-gold-700"
                aria-hidden
              />
              <div>
                <p className="font-semibold text-navy-950">
                  PEC {company.pec.category} · Licence No. {company.pec.licence}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  Pakistan Engineering Council certified contractor covering
                  general building works, infrastructure development and{" "}
                  {company.pec.fields} specialisation fields.
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-navy-900/5 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-navy-950">
                Send us a message
              </h2>
              <p className="mt-2 text-slate-600">
                Fields marked optional can be left blank.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
