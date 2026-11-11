const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-navy-975 shadow-[0_8px_28px_-4px_rgba(242,188,56,0.45)] hover:brightness-105 hover:shadow-[0_12px_32px_-4px_rgba(242,188,56,0.62)]",
  dark: "bg-navy-800 text-white shadow-sm hover:bg-navy-700",
  outline:
    "border border-white/25 bg-navy-975/45 text-white backdrop-blur-md hover:border-gold-300/60 hover:bg-white/10",
  ghost: "text-navy-800 hover:text-gold-700",
};

export function buttonClass(variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`;
}

export const serviceAccents = {
  cyan: {
    hero: "bg-gradient-to-br from-cyan-400 to-teal-500 text-white shadow-[0_8px_22px_-4px_rgba(34,211,238,0.45)]",
    card: "bg-cyan-50 text-cyan-700 ring-1 ring-cyan-500/20 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-teal-600 group-hover:text-white group-hover:ring-transparent",
    bar: "from-cyan-400 to-teal-500",
  },
  blue: {
    hero: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-[0_8px_22px_-4px_rgba(59,130,246,0.45)]",
    card: "bg-blue-50 text-blue-700 ring-1 ring-blue-500/20 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:text-white group-hover:ring-transparent",
    bar: "from-blue-500 to-indigo-500",
  },
  amber: {
    hero: "bg-gradient-to-br from-gold-300 via-gold-400 to-amber-600 text-navy-975 shadow-[0_8px_22px_-4px_rgba(242,188,56,0.45)]",
    card: "bg-gold-50 text-gold-700 ring-1 ring-gold-500/25 group-hover:bg-gradient-to-br group-hover:from-gold-300 group-hover:to-gold-500 group-hover:text-navy-975 group-hover:ring-transparent",
    bar: "from-gold-300 to-gold-500",
  },
  emerald: {
    hero: "bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-[0_8px_22px_-4px_rgba(16,185,129,0.45)]",
    card: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-500/20 group-hover:bg-gradient-to-br group-hover:from-emerald-400 group-hover:to-green-600 group-hover:text-white group-hover:ring-transparent",
    bar: "from-emerald-400 to-green-500",
  },
};
