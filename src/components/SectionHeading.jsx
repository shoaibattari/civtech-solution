export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  action,
}) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div
      className={`flex flex-col gap-6 ${
        centered
          ? "items-center text-center"
          : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={centered ? "max-w-3xl" : "max-w-2xl"}>
        {eyebrow && (
          <p
            className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] ${
              centered ? "justify-center" : ""
            } ${dark ? "text-gold-400" : "text-gold-700"}`}
          >
            <span
              className={`h-px w-8 ${dark ? "bg-gold-400" : "bg-gold-600"}`}
            />
            {eyebrow}
          </p>
        )}
        <h2
          className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
            dark ? "text-white" : "text-navy-950"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-5 text-lg leading-relaxed ${
              dark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
