import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { buttonClass } from "./ui";
import { company } from "@/lib/site";

export default function CtaBanner({
  title = "Ready to build something extraordinary?",
  description = "Tell us about your project and our engineers will get back to you with next steps.",
}) {
  return (
    <section className="px-6 py-24">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-navy-900 px-8 py-16 text-center sm:px-16 lg:py-20">
        <div className="bg-grid fade-mask absolute inset-0 -z-10" />
        <div className="absolute -bottom-24 left-1/2 -z-10 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-gold-500/25 blur-3xl" />

        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
          {description}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contact" className={buttonClass("primary")}>
            Start your project
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <a href={company.phone.href} className={buttonClass("outline")}>
            <Phone className="size-4" aria-hidden />
            {company.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
