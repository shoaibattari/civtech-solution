import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/site";

export default function Logo({ preload = false }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label={`${company.name} — home`}
    >
      <span className="relative size-11 shrink-0 overflow-hidden rounded-full ring-2 ring-gold-500 transition group-hover:ring-gold-400">
        <Image
          src="/logo.png"
          alt=""
          fill
          sizes="44px"
          preload={preload}
          className="object-cover"
        />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold tracking-wide text-white">
          CIVTECH SOLUTION
        </span>
        <span className="block text-[11px] text-slate-400">
          Expertly Crafted · Smartly Managed
        </span>
      </span>
    </Link>
  );
}
