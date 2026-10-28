import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonClass } from "@/components/ui";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-navy-950 pt-20 text-white">
      <div className="bg-grid fade-mask absolute inset-0 -z-10" />
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="font-mono text-sm font-semibold tracking-[0.3em] text-gold-400">
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
