import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonClass } from "@/components/ui";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-navy-975 pt-20 text-white">
      <Image
        src="/images/about-engineering.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-30 object-cover opacity-25"
      />
      <div
        className="absolute inset-0 -z-20 bg-gradient-to-b from-navy-975/80 via-navy-975/70 to-navy-975"
        aria-hidden
      />
      <div className="bg-blueprint fade-mask absolute inset-0 -z-10 opacity-50" />
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="font-mono text-sm font-semibold tracking-[0.3em] text-gold-300">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          This page isn’t on the blueprint
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link href="/" className={buttonClass("primary", "mt-10")}>
          <ArrowLeft className="size-4" aria-hidden />
          Back to home
        </Link>
      </div>
    </section>
  );
}
