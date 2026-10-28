const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/20 hover:bg-gold-400",
  dark: "bg-navy-800 text-white hover:bg-navy-700",
  outline:
    "border border-white/25 text-white hover:border-white/50 hover:bg-white/5",
  ghost: "text-navy-800 hover:text-gold-700",
};

export function buttonClass(variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`;
}
