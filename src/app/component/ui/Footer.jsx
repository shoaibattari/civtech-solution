import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Residential Construction",
    "Commercial Construction",
    "Project Management",
    "EV Charging",
    "Fuel Stations",
    "Engineering Surveys",
  ];

  return (
    <footer className="bg-[#0f1a3a] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 border-4 border-[#b8962e] rounded-full ">
              <Image
                src={"/logo.png"}
                width={"50"}
                height={"50"}
                className="rounded-full object-cover"
                alt="logo"
              />
            </div>

            <div>
              <h2 className="text-lg font-bold">CIVTECH SOLUTION</h2>
              <p className="text-xs tracking-wider text-amber-400">
                Expertly Crafted, Smartly Managed
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-300">
            Pakistan’s premier civil engineering & construction company.
            Building legacies, shaping futures.
          </p>

          <div className="mt-6">
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-xs text-amber-300">
              PEC C4 Registered
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-400">
            Navigation
          </h3>

          <ul className="space-y-3 text-sm text-slate-300">
            {pages.map((page) => (
              <li key={page.name}>
                <Link
                  href={page.href}
                  className="transition hover:text-amber-400"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-400">
            Services
          </h3>

          <ul className="space-y-3 text-sm text-slate-300">
            {services.map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="transition hover:text-amber-400"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-400">
            Contact
          </h3>

          <div className="space-y-2 text-sm text-slate-300">
            <p>B-280, Block 10, Gulberg Town</p>
            <p>Karachi, Pakistan</p>

            <p className="mt-4 text-amber-400">
              <a
                href="tel:+923332088924"
                className="transition hover:text-white"
              >
                +92-333-2088924
              </a>
            </p>
            <p className="text-amber-400">
              <a
                href="mailto:Info@civtechsolution.com"
                className="transition hover:text-white"
              >
                Info@civtechsolution.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-6 text-sm text-slate-400 md:flex-row">
          <p>© 2026 Civtech Solution. All rights reserved.</p>
          <p>
            Powered by:{" "}
            <a
              href="https://www.facebook.com/creatomationstudio"
              className="transition hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creatomation Studio
            </a>
          </p>
          <p>Expertly Crafted, Smartly Managed</p>
        </div>
      </div>
    </footer>
  );
}
