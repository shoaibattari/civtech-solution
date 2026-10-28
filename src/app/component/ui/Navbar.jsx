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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-950 shadow-2xl"
            : "bg-slate-950/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
              CS
            </div> */}
            <div className="h-12 w-12 border-4 border-[#b8962e] rounded-full ">
              <Image src={"/logo.png"} width={"50"} height={"50"} className="rounded-full object-cover" alt="logo" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">CIVTECH SOLUTION</h2>
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
                className={`transition ${
                  pathname === item.href
                    ? "text-blue-400"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMob(true)}
            className="text-3xl text-white md:hidden"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-slate-950 transition-transform duration-300 ${
          mob ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6">
          <h2 className="text-xl font-bold text-white">CIVTECH SOLUTION</h2>

          <button onClick={() => setMob(false)} className="text-3xl text-white">
            ✕
          </button>
        </div>

        <div className="px-6">
          {PAGES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMob(false)}
              className="block border-b border-white/10 py-4 text-lg text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
