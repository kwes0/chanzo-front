import { useMemo } from "react";
import { useNews } from "../../hooks/NewsContext";

const tabs = [
  { id: "clusters", label: "Clustered Articles" },
  { id: "singleArticles", label: "Single Articles" },
];

export default function Masthead() {
  const { activeView, setActiveView } = useNews();
  const dateline = useMemo(
    () =>
      new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    [],
  );

  return (
    <header className="sticky top-0 z-20 border-b-2 border-ink bg-cream">
      <div className="mast-grid grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] border-b border-rule md:min-h-16 md:grid-cols-[1fr_auto_1fr]">
        {/* Application title */}
        <div className="grid-in-brand flex flex-col items-center justify-center border-b border-rule px-4 py-3 text-center md:border-b-0 md:px-8">
          <div className="font-display text-[34px] font-semibold leading-none tracking-[0.04em] md:text-[40px]">
            Ch<span className="text-blue font-bold">a</span>nzo
          </div>
          <div className="font-mono text-[7px] uppercase tracking-[0.16em] text-ink-4 md:text-[8.5px] md:tracking-[0.22em]">
            Every story / Every side
          </div>
        </div>
        {/* Application dateline */}
        <div className="grid-in-meta flex flex-col items-start justify-center gap-1.5 border-r border-rule px-3.5 py-3 text-left md:flex-row md:items-center md:gap-4 md:px-5 md:py-0">
          <div className="font-mono text-[8px] leading-relaxed tracking-[0.06em] text-ink-4 md:text-[9px]">
            {dateline}
            <br />
            Nairobi, Kenya
          </div>
        </div>
        {/* Active tab toggle */}
        <div className="grid-in-tabs flex items-center justify-end px-3.5 py-2.5 md:border-l md:border-rule md:px-5 md:py-0">
          <div className="flex max-w-full overflow-hidden rounded-[3px] border border-rule-2">
            {tabs.map((tab) => (
              <button
                className={`border-r border-rule-2 px-2.5 py-1.5 font-mono text-[8px] font-medium uppercase tracking-[0.08em] last:border-r-0 md:min-w-[122px] md:px-3.5 md:text-[9px] ${
                  activeView === tab.id
                    ? "bg-blue text-blue-pale"
                    : "text-ink-3 hover:bg-cream-2 hover:text-ink"
                }`}
                key={tab.id}
                onClick={() => setActiveView(tab.id)}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
