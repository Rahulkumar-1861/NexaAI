import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col pt-20">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-24 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16 fade-in-up">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/50 border border-secondary/10">
              <span className="material-symbols-outlined text-[14px] text-secondary">
                auto_awesome
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                Advanced Linguistic Intelligence
              </span>
            </div>
            
            <h1 className="font-headline text-5xl sm:text-6xl lg:text-[80px] font-extrabold tracking-tight text-on-surface leading-[1.05]">
              Experience the <br />
              <span className="text-primary">NexaAI</span> Flow of <br />
              Language.
            </h1>
            
            <p className="text-lg text-on-surface-variant font-medium max-w-xl leading-relaxed">
              A digital companion that masters your voice, deciphers complex queries, and elevates your writing with fluid, intelligent precision.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/signup" className="h-14 px-8 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-2xl text-[15px] font-bold flex items-center justify-center shadow-[0_15px_30px_rgba(53,37,205,0.2)] hover:shadow-[0_20px_40px_rgba(53,37,205,0.3)] hover:scale-105 active:scale-95 transition-all">
                Get Started Free
              </Link>
              <div className="h-14 px-8 bg-surface-container-lowest border border-outline-variant/20 text-on-surface-variant rounded-2xl text-[15px] font-bold flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">
                  bolt
                </span>
                Instant Access
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg relative">
            {/* Mock abstract geometric visual from screenshot 1 */}
            <div className="w-full aspect-square bg-inverse-surface rounded-[3rem] shadow-2xl relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-surface-tint/5 to-transparent blur-3xl opacity-50" />
              <div className="w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-secondary to-primary mix-blend-screen opacity-80 blur-[80px] animate-pulse" />
              <div className="w-[40%] h-[40%] rounded-full bg-secondary-container absolute mix-blend-overlay rotate-45" />

              {/* Mock floating pill */}
              <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl w-64 shadow-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/70">Active Query</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full w-full mb-2" />
                <div className="h-2 bg-white/10 rounded-full w-2/3" />
                <p className="text-white/50 text-[10px] font-medium mt-3">Generating semantic response...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Logos */}
        <section className="py-12 border-y border-outline-variant/10 bg-surface-container-low/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-24 text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mb-8">Trusted by Modern Enterprises</p>
            <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-30 grayscale saturate-0">
              {['business', 'apartment', 'corporate_fare', 'domain', 'storefront'].map((icon, i) => (
                <span key={i} className="material-symbols-outlined text-4xl">{icon}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Features Header */}
        <section id="features" className="pt-32 pb-16 text-center max-w-3xl mx-auto px-6">
          <h2 className="font-headline text-4xl sm:text-5xl font-extrabold tracking-tight text-on-surface mb-6">
            Built for the Infinite Mind.
          </h2>
          <p className="text-on-surface-variant font-medium leading-relaxed">
            A sophisticated language model designed to amplify your clarity and thought through pure conversation.
          </p>
        </section>

        {/* Feature Grid */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-24 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 - Contextual Dialogue */}
            <div className="lg:col-span-2 bg-surface-container-lowest p-10 rounded-[2rem] border border-outline-variant/10 shadow-sm flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10 mb-12">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed/50 flex flex-shrink-0 items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    chat_bubble
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">Contextual Dialogue</h3>
                <p className="text-on-surface-variant text-sm font-medium leading-relaxed max-w-md">
                  Our engine masters the nuance of every conversation, remembering subtle details to provide responses that feel profoundly human and tailored.
                </p>
              </div>
              
              {/* Graphic Mock */}
              <div className="h-40 w-full rounded-2xl bg-gradient-to-r from-secondary-container to-surface-container relative z-10 overflow-hidden group-hover:scale-105 transition-transform duration-700">
                 <div className="absolute inset-0 flex items-center justify-center mix-blend-overlay opacity-50">
                    <div className="w-64 h-32 bg-white blur-3xl rotate-12" />
                 </div>
              </div>
            </div>

            {/* Card 2 - Privacy First */}
            <div className="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[2rem] shadow-[0_20px_40px_rgba(53,37,205,0.15)] flex flex-col justify-between text-on-primary">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex flex-shrink-0 items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white text-2xl">
                    shield
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-3">Privacy First</h3>
                <p className="text-white/80 text-sm font-medium leading-relaxed">
                  Your conversations are yours alone. Enterprise-grade encryption ensures that every query and answer remains strictly private and secure.
                </p>
              </div>
              <div className="w-full h-12 mt-12 bg-white/10 border border-white/20 text-white font-bold rounded-xl text-sm flex items-center justify-center">
                Enterprise-grade security built-in
              </div>
            </div>

            {/* Below fold 3 sub cards */}
            <div className="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/10 transition-colors hover:bg-surface-container-lowest">
              <span className="material-symbols-outlined text-secondary text-2xl mb-4">edit_document</span>
              <h4 className="font-bold text-on-surface mb-2">Refined Drafting</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Transform rough ideas into polished prose, emails, or reports through intuitive text-based collaboration.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/10 transition-colors hover:bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary text-2xl mb-4">translate</span>
              <h4 className="font-bold text-on-surface mb-2">Nuanced Translation</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Communicate across borders with text translation that preserves tone, intent, and cultural context.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/10 transition-colors hover:bg-surface-container-lowest">
              <span className="material-symbols-outlined text-error text-2xl mb-4">lightbulb</span>
              <h4 className="font-bold text-on-surface mb-2">Ideation Partner</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Break through creative blocks with an AI that brainstorms and iterates on your text in real-time.</p>
            </div>

          </div>
        </section>

        {/* CTA Bottom Target */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-24 mb-32">
          <div className="bg-inverse-surface text-inverse-on-surface p-12 md:p-20 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            
            <h2 className="font-headline text-4xl sm:text-5xl font-extrabold mb-6 relative z-10 text-white">
              Ready to touch the future?
            </h2>
            <p className="text-sm sm:text-base font-medium text-white/70 max-w-xl mx-auto mb-10 relative z-10">
              Join thousands of thinkers who have integrated NexaAI
               AI into their daily ritual of communication.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link href="/signup" className="h-14 px-8 bg-primary text-white rounded-2xl text-[15px] font-bold flex items-center justify-center hover:bg-primary-container hover:scale-105 active:scale-95 transition-all shadow-[0_15px_30px_rgba(53,37,205,0.2)]">
                Start Free Trial
              </Link>
              <div className="h-14 px-8 bg-white/5 border border-white/10 text-white/80 rounded-2xl text-[15px] font-bold flex items-center justify-center">
                No credit card required
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
