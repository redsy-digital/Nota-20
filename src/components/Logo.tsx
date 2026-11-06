export function Logo({ className = "h-9 w-auto", textClassName = "text-xl" }: { className?: string; textClassName?: string }) {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none">
      {/* High-tech Academic Emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-[1.5px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/35 transition-all duration-300">
        <div className="w-full h-full bg-[#0B1120] rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle grid pattern inside icon */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:6px_6px] opacity-20" />
          
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 transform group-hover:scale-105 transition-transform duration-300 relative z-10"
          >
            {/* Academic Cap Base */}
            <path
              d="M16 5L3 11L16 17L29 11L16 5Z"
              className="fill-emerald-400 stroke-emerald-300"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Tassel & Cap Body */}
            <path
              d="M8 13.5V20.5C8 23.5 11.5 26 16 26C20.5 26 24 23.5 24 20.5V13.5"
              stroke="#06B6D4"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            {/* Central 20 Emblem */}
            <path
              d="M14 11.5L16 13.5L20 9"
              stroke="#F8FAFC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Brand Name Lockup */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-display font-extrabold tracking-tight text-slate-900 dark:text-white ${textClassName}`}>
            ACADÉMICO <span className="text-emerald-600 dark:text-emerald-400">PRO</span>
          </span>
          <span className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 font-mono">
            AO
          </span>
        </div>
        <span className="text-[10px] tracking-wide text-slate-500 dark:text-slate-400 font-medium mt-0.5">
          Trabalhos Escolares & Académicos
        </span>
      </div>
    </div>
  );
}
