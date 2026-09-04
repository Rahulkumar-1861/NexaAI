"use client";

interface RightPanelProps {
  categoryName: string | null;
  onSuggestionClick?: (suggestion: string) => void;
  onOpenUpgrade?: () => void;
}

const suggestions = [
  {
    icon: "draw",
    title: "Concept Sketching",
    description: "I need to brainstorm a few concept sketches for a clean, text-first SAAS pricing model. What layout principles should I follow?",
  },
  {
    icon: "view_quilt",
    title: "Style Mapping",
    description: "Map out a stylistic aesthetic based on deep indigo and glassmorphism targeting a premium architectural feel.",
  },
  {
    icon: "font_download",
    title: "Typography Ideas",
    description: "Suggest a typography pairing similar to Manrope and Inter, aiming for high legibility and strong editorial contrast.",
  },
];

export default function RightPanel({
  categoryName,
  onSuggestionClick,
  onOpenUpgrade,
}: RightPanelProps) {
  return (
    <div className="flex flex-col h-full bg-surface-bright py-8 px-6 overflow-y-auto w-full border-l border-outline-variant/5">
      <div className="space-y-10 flex-1">
        
        {/* Topic Insights */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mb-6">
            Topic Insights
          </h3>
          <div className="bg-surface-container-lowest p-6 rounded-[1.5rem] border border-outline-variant/10 shadow-sm transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-fixed/40 flex flex-shrink-0 items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  bolt
                </span>
              </div>
              <p className="font-bold text-[13px] text-on-surface">
                {categoryName || "Visual Trends"}
              </p>
            </div>
            <p className="text-[11px] font-medium text-on-surface-variant leading-relaxed">
              Creative flows are currently favoring high-contrast dark modes with kinetic typography and minimal gradients.
            </p>
          </div>
        </div>

        {/* Suggestions */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mb-6">
            Suggestions
          </h3>
          <div className="space-y-1.5">
            {suggestions.map((item) => (
              <button
                key={item.title}
                onClick={() => onSuggestionClick?.(item.description)}
                className="flex items-center gap-4 w-full p-2.5 rounded-xl hover:bg-surface-container-low transition-colors text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-container-high flex flex-shrink-0 items-center justify-center transition-colors shadow-sm border border-outline-variant/5 group-hover:bg-primary-fixed/50">
                  <span className="material-symbols-outlined text-on-surface-variant text-[16px] transition-colors group-hover:text-primary">
                    {item.icon}
                  </span>
                </div>
                <span className="text-[12px] font-bold text-on-surface group-hover:text-primary transition-colors">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Rahul Pro CTA strictly matching Screenshot 2 */}
      <div className="mt-8 shrink-0">
        <div className="bg-[#3525cd] p-8 rounded-[1.5rem] text-white shadow-xl flex flex-col">
          <p className="text-[9px] font-bold uppercase tracking-widest mb-3 opacity-80">
            Rahul Pro
          </p>
          <p className="text-[13px] font-bold leading-snug mb-6">
            Experience lightning-fast reasoning and deeper creative insights.
          </p>
          <button 
            onClick={onOpenUpgrade}
            className="w-full bg-white text-[#3525cd] py-2.5 rounded-xl text-[12px] font-bold transition-transform hover:scale-[1.02] active:scale-95 shadow-md"
          >
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}
