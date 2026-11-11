export default function TrustLogos() {
  return (
    <div className="mt-10 animate-fade-up [animation-delay:320ms]">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
        Delivering projects for
      </p>

      <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-4">
        <li className="flex items-center gap-2.5">
          <svg
            viewBox="0 0 36 34"
            className="size-7 shrink-0"
            aria-hidden="true"
          >
            <path
              d="M18 3C10.2 3 4 9.1 4 16.5c0 4.2 1.8 7.6 4.7 10l2.2 4.5h14.2l2.2-4.5c2.9-2.4 4.7-5.8 4.7-10C32 9.1 25.8 3 18 3Z"
              fill="#fbbf24"
              stroke="#dc2626"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M18 4.5V29M12.5 5.8 15.6 29M23.5 5.8 20.4 29M7.6 10.2 13.4 28.5M28.4 10.2 22.6 28.5"
              stroke="#dc2626"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xs font-semibold leading-tight text-slate-100">
            Shell
            <span className="block text-[11px] font-normal text-slate-300">
              Pakistan
            </span>
          </span>
        </li>

        <li aria-hidden="true" className="hidden h-7 w-px bg-white/15 sm:block" />

        <li className="flex items-center gap-2.5">
          <svg
            viewBox="0 0 32 34"
            className="size-7 shrink-0"
            aria-hidden="true"
          >
            <path
              d="M16 3C16 3 6 13.2 6 20.8 6 26.5 10.5 31 16 31s10-4.5 10-10.2C26 13.2 16 3 16 3Z"
              fill="#0284c7"
            />
            <path
              d="M16 11.5c0 0-5 5.4-5 9.6 0 2.9 2.2 5.2 5 5.2s5-2.3 5-5.2c0-4.2-5-9.6-5-9.6Z"
              fill="#38bdf8"
            />
            <circle cx="16" cy="22" r="2.3" fill="#08132d" />
          </svg>
          <span className="text-sm font-semibold tracking-tight text-slate-100">
            Hascol
          </span>
        </li>

        <li aria-hidden="true" className="hidden h-7 w-px bg-white/15 sm:block" />

        <li className="flex items-center gap-2.5">
          <svg
            viewBox="0 0 32 32"
            className="size-7 shrink-0"
            aria-hidden="true"
          >
            <rect
              x="4"
              y="6"
              width="14"
              height="22"
              rx="2"
              fill="#818cf8"
              fillOpacity="0.28"
              stroke="#a5b4fc"
              strokeWidth="1.6"
            />
            <rect
              x="16"
              y="12"
              width="12"
              height="16"
              rx="2"
              fill="#6366f1"
              fillOpacity="0.35"
              stroke="#c7d2fe"
              strokeWidth="1.6"
            />
            <path
              d="M8 11h2M12 11h2M8 15h2M12 15h2M8 19h2M12 19h2M20 17h2M20 21h2"
              stroke="#e0e7ff"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xs font-medium leading-tight text-slate-200">
            Industrial &amp;
            <span className="block text-slate-300">Residential Clients</span>
          </span>
        </li>
      </ul>
    </div>
  );
}
