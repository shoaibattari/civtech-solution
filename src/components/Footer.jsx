import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import Logo from "./Logo";
import { services } from "@/lib/data";
import { company, navLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-slate-300">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-navy-700/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
            {company.description}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-medium text-gold-300">
            <ShieldCheck className="size-4" aria-hidden />
            PEC {company.pec.category} Registered · Licence{" "}
            {company.pec.licence}
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
            Company
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
            Services
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="transition hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
            Get in touch
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={company.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 transition hover:text-white"
              >
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-gold-400"
                  aria-hidden
                />
                <span>
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.country}
                </span>
              </a>
            </li>
            <li>
              <a
                href={company.phone.href}
                className="flex gap-3 transition hover:text-white"
              >
                <Phone
                  className="mt-0.5 size-4 shrink-0 text-gold-400"
                  aria-hidden
                />
                {company.phone.display}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex gap-3 transition hover:text-white"
              >
                <Mail
                  className="mt-0.5 size-4 shrink-0 text-gold-400"
                  aria-hidden
                />
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>
            Website by{" "}
            <a
              href="https://www.facebook.com/creatomationstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-white"
            >
              Creatomation Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
