import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IntelligencePage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col pt-20">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-24 pb-16 px-6 max-w-[1280px] mx-auto md:px-12 xl:px-24 fade-in-up">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight text-on-surface leading-[1.05] mb-6 max-w-3xl">
            Linguistic insight that <span className="text-primary">feels premium.</span>
          </h1>
          <p className="text-[17px] text-on-surface-variant font-medium leading-relaxed max-w-2xl">
            Experience a digital partner that masters the nuance of human thought. From deep semantic analysis to sophisticated summarization, Nexa AI redefines text intelligence.
          </p>
        </section>

        {/* Intelligence Grid */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-24 pb-32">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-min">
            
            {/* Contextual Text Synthesis (Spans 2 cols) */}
            <div className="md:col-span-2 bg-surface-container-lowest p-8 lg:p-10 rounded-[2rem] shadow-sm border border-outline-variant/10 fade-in-up flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex flex-shrink-0 items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">
                  insights
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Contextual Text Synthesis</h3>
              <p className="text-sm text-on-surface-variant font-medium leading-relaxed mb-8 max-w-xl">
                Summarize vast libraries of text with human-level comprehension. Our engine identifies key themes, sentiment shifts, and logical connections across millions of tokens.
              </p>
              {/* Mock Dashboard Graphic */}
              <div className="w-full bg-inverse-surface rounded-2xl h-64 mt-auto overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                <div className="flex h-full w-full items-end justify-center gap-2 p-6 pb-0 opacity-40">
                   {/* Abstract bars */}
                   {[40, 70, 45, 90, 65, 30, 80, 50, 100, 60, 40, 80].map((h, i) => (
                     <div key={i} className="w-full bg-secondary-container rounded-t-sm" style={{height: `${h}%`}} />
                   ))}
                </div>
              </div>
            </div>

            {/* Semantic Support (Tall thin card) */}
            <div className="bg-surface-container-low p-8 lg:p-10 rounded-[2rem] shadow-sm border border-outline-variant/10 fade-in-up flex flex-col" style={{animationDelay: "0.1s"}}>
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex flex-shrink-0 items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-2xl">
                  forum
                </span>
              </div>
              <div className="mt-auto pt-32">
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Semantic Support</h3>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed mb-8">
                  Personalized communication refinement. Real-time advice for tone adjustments, clarity improvements, and persuasive structural mapping.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    <span className="text-[11px] font-bold text-on-surface uppercase tracking-wider">Intent Alignment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    <span className="text-[11px] font-bold text-on-surface uppercase tracking-wider">Tone Mapping</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Language Mastery */}
            <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-[2rem] shadow-sm border border-outline-variant/10 fade-in-up" style={{animationDelay: "0.2s"}}>
              <div className="w-10 h-10 rounded-xl bg-tertiary-fixed-dim/30 flex flex-shrink-0 items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-xl">
                  translate
                </span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Language Mastery</h3>
              <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                Instant, high-fidelity translation across 85 languages. Context-aware processing that captures nuance, slang, and cultural tone.
              </p>
            </div>

            {/* Knowledge Synthesis */}
            <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-[2rem] shadow-sm border border-outline-variant/10 fade-in-up" style={{animationDelay: "0.3s"}}>
              <div className="w-10 h-10 rounded-xl bg-primary-fixed/30 flex flex-shrink-0 items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-xl">
                  library_books
                </span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Knowledge Synthesis</h3>
              <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                Connect disjointed information sources into a coherent knowledge base. Our AI extracts meaningful insights from purely textual data streams.
              </p>
            </div>

            {/* Cognitive Analysis */}
            <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-[2rem] shadow-sm border border-outline-variant/10 fade-in-up" style={{animationDelay: "0.4s"}}>
              <div className="w-10 h-10 rounded-xl bg-secondary-fixed/50 flex flex-shrink-0 items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-xl">
                  psychology
                </span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Cognitive Analysis</h3>
              <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                Go beyond keywords. Understand the underlying psychological patterns and emotional drivers behind every paragraph and statement.
              </p>
            </div>

            {/* Large Bottom Callout */}
            <div className="md:col-span-3 bg-gradient-to-r from-primary to-primary-container p-10 lg:p-16 rounded-[2rem] shadow-[0_20px_40px_rgba(53,37,205,0.15)] fade-in-up flex flex-col md:flex-row items-center gap-12 overflow-hidden relative" style={{animationDelay: "0.5s"}}>
              <div className="relative z-10 md:w-1/2 text-on-primary">
                <span className="inline-block bg-white/10 backdrop-blur text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-white/20">
                  Semantic Velocity
                </span>
                <h3 className="font-headline text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
                  Zero-latency reading for high-stakes intelligence.
                </h3>
                <p className="text-white/80 text-sm font-medium leading-relaxed mb-8">
                  Our proprietary linguistic fabric processes text at 1.2 petabits per second, ensuring your analysis is always deep, accurate, and instant.
                </p>
                <div className="inline-block bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-3.5 rounded-xl text-sm font-bold shadow-lg">
                  Powered by advanced language models
                </div>
              </div>
              
              <div className="relative z-10 md:w-1/2 w-full h-64 bg-inverse-surface rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* Abstract glowing lines mock graphic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/40 via-primary/10 to-transparent blur-md"></div>
                  {/* Rotating starburst abstract */}
                  <div className="absolute w-[200%] h-[200%] border-[2px] border-dashed border-secondary/20 rounded-full animate-[spin_60s_linear_infinite]" />
                  <div className="absolute w-[150%] h-[150%] border-[1px] border-dashed border-primary-fixed/30 rounded-full animate-[spin_40s_linear_infinite]" />
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
