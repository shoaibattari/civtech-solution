"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { buttonClass } from "./ui";
import { company, navLinks } from "@/lib/site";

function subscribeToScroll(callback) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

const isScrolled = () => window.scrollY > 24;
const isScrolledOnServer = () => false;

function isActive(pathname, href) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    isScrolled,
    isScrolledOnServer,
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-navy-950/90 shadow-lg shadow-navy-950/20 backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-950"
        >
          Skip to content
        </a>

        <nav
          aria-label="Main"
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6"
        >
          <Logo preload />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "text-gold-400"
                        : "text-slate-200 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold-400" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Link href="/contact" className={buttonClass("primary", "py-2.5")}>
              Get a Quote
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-full p-2 text-white transition hover:bg-white/10 lg:hidden"
          >
            <Menu className="size-6" aria-hidden />
          </button>
        </nav>
      </header>

      {/* Mobile menu — kept outside <header>: its backdrop-filter would trap fixed children */}
      <div
        className={`fixed inset-0 z-[60] bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-navy-950 shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <span className="text-sm font-semibold tracking-widest text-slate-400">
            MENU
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="rounded-full p-2 text-white transition hover:bg-white/10"
          >
            <X className="size-6" aria-hidden />
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-6 py-4">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between border-b border-white/5 py-4 text-lg font-medium transition ${
                    active ? "text-gold-400" : "text-white hover:text-gold-300"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="space-y-3 border-t border-white/10 p-6">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={buttonClass("primary", "w-full")}
          >
            Get a Quote
          </Link>
          <a
            href={company.phone.href}
            className={buttonClass("outline", "w-full")}
          >
            <Phone className="size-4" aria-hidden />
            {company.phone.display}
          </a>
        </div>
      </div>
    </>
  );
}
