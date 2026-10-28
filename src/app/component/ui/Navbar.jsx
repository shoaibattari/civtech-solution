"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const PAGES = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!mob) return;

    const handleKey = (e) => e.key === "Escape" && setMob(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [mob]);

  return (
    <>
      <nav
        aria-label="Main"
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-950 shadow-2xl"
            : "bg-slate-950/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-12 w-12 border-4 border-[#b8962e] rounded-full ">
              <Image
                src={"/logo.png"}
                width={"50"}
                height={"50"}
                className="rounded-full object-cover"
                alt="Civtech Solution logo"
              />
            </div>

            <div>
              <p className="text-lg font-bold text-white">CIVTECH SOLUTION</p>
              <p className="text-xs text-slate-400">
                Expertly Crafted · Smartly Managed
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 md:flex">
            {PAGES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`transition ${
                  pathname === item.href
                    ? "text-amber-400"
                    : "text-white hover:text-amber-300"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="rounded-lg bg-amber-500 px-5 py-2 font-semibold text-slate-900 transition hover:bg-amber-400"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setMob(true)}
            aria-label="Open menu"
            aria-expanded={mob}
            aria-controls="mobile-menu"
            className="text-3xl text-white md:hidden"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!mob}
        className={`fixed inset-0 z-[60] bg-slate-950 transition-transform duration-300 ${
          mob ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6">
          <p className="text-xl font-bold text-white">CIVTECH SOLUTION</p>

          <button
            type="button"
            onClick={() => setMob(false)}
            aria-label="Close menu"
            className="text-3xl text-white"
          >
            ✕
          </button>
        </div>

        <div className="px-6">
          {PAGES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMob(false)}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`block border-b border-white/10 py-4 text-lg ${
                pathname === item.href ? "text-amber-400" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMob(false)}
            className="mt-8 block rounded-lg bg-amber-500 py-3 text-center font-semibold text-slate-900"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
