import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col pt-20">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="text-center pt-24 pb-16 px-6 max-w-4xl mx-auto fade-in-up">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight text-on-surface leading-[1.05] mb-6">
            Text-first plans for <span className="text-primary">innovative <br />thinkers.</span>
          </h1>
          <p className="text-[17px] text-on-surface-variant font-medium leading-relaxed max-w-2xl mx-auto">
            Master the art of prompt engineering. Simple, distraction-free text-only service tiers for deep cognitive work.
          </p>

          {/* Toggle */}
          <div className="mt-10 inline-flex items-center bg-surface-container-low rounded-full p-1.5 border border-outline-variant/10">
            <button className="px-6 py-2.5 rounded-full bg-white text-primary text-xs font-bold shadow-sm">
              Monthly
            </button>
            <button className="px-6 py-2.5 rounded-full text-on-surface-variant hover:text-on-surface text-xs font-bold transition-colors">
              Yearly <span className="text-secondary ml-1">-20%</span>
            </button>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-24 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            
            {/* Basic Tier */}
            <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-[2.5rem] border border-outline-variant/10 shadow-sm flex flex-col fade-in-up" style={{animationDelay: "0.1s"}}>
              <div className="mb-8">
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Basic Text</h3>
                <p className="text-sm text-on-surface-variant font-medium">Essential text processing for casual users.</p>
              </div>
              <div className="mb-10">
                <span className="text-6xl font-headline font-black text-on-surface tracking-tighter">$0</span>
                <span className="text-sm text-on-surface-variant font-medium ml-1">/forever</span>
              </div>
              <div className="space-y-4 mb-10 flex-1">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                  <span className="text-sm font-medium text-on-surface">1,000 text queries per month</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                  <span className="text-sm font-medium text-on-surface">Standard 1k context window</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                  <span className="text-sm font-medium text-on-surface">Basic text exports (TXT/MD)</span>
                </div>
              </div>
              <Link href="/signup" className="w-full py-4 rounded-2xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-sm font-bold transition-colors flex justify-center mt-auto">
                Get Started
              </Link>
            </div>

            {/* Pro Tier (Featured) */}
            <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-[2.5rem] border-2 border-primary/20 shadow-[0_30px_60px_rgba(53,37,205,0.1)] flex flex-col relative scale-[1.03] z-10 fade-in-up" style={{animationDelay: "0.2s"}}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                Most Popular
              </div>
              <div className="mb-8 mt-2">
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Pro Text</h3>
                <p className="text-sm text-on-surface-variant font-medium">Advanced linguistic tools for professionals.</p>
              </div>
              <div className="mb-10">
                <span className="text-6xl font-headline font-black text-on-surface tracking-tighter">$19</span>
                <span className="text-sm text-on-surface-variant font-medium ml-1">/mo</span>
              </div>
              <div className="space-y-4 mb-10 flex-1">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span className="text-sm font-bold text-on-surface">Everything in Basic</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span className="text-sm font-medium text-on-surface">Unlimited text interactions</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span className="text-sm font-medium text-on-surface">128k context window support</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span className="text-sm font-medium text-on-surface">Advanced summarization mode</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span className="text-sm font-medium text-on-surface">Priority server access</span>
                </div>
              </div>
              <Link href="/signup" className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-white text-sm font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_20px_rgba(53,37,205,0.2)] flex justify-center mt-auto">
                Choose Pro
              </Link>
            </div>

            {/* Team Tier */}
            <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-[2.5rem] border border-outline-variant/10 shadow-sm flex flex-col fade-in-up" style={{animationDelay: "0.3s"}}>
              <div className="mb-8">
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Team Text</h3>
                <p className="text-sm text-on-surface-variant font-medium">Scalable infrastructure for text workflows.</p>
              </div>
              <div className="mb-10 mt-2">
                <span className="text-5xl font-headline font-black text-on-surface tracking-tighter italic">Custom</span>
              </div>
              <div className="space-y-4 mb-10 flex-1">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                  <span className="text-sm font-bold text-on-surface">Everything in Pro</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                  <span className="text-sm font-medium text-on-surface">Bulk API text processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                  <span className="text-sm font-medium text-on-surface">Data residency controls</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                  <span className="text-sm font-medium text-on-surface">SSO for text security</span>
                </div>
              </div>
              <button className="w-full py-4 rounded-2xl bg-transparent border-2 border-outline-variant/20 hover:border-outline-variant/50 text-on-surface text-sm font-bold transition-colors flex justify-center mt-auto">
                Contact Sales
              </button>
            </div>

          </div>
        </section>

        {/* FAQ Area with Wave Graphic Mock */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-24 pb-32">
          <div className="bg-surface-container-low rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-outline-variant/10">
            <div className="p-12 lg:p-20 lg:w-3/5">
              <h2 className="font-headline text-3xl font-extrabold text-on-surface mb-10">
                Frequently asked questions
              </h2>
              
              <div className="space-y-10">
                <div>
                  <h4 className="font-bold text-on-surface text-lg mb-3">Why text-only plans?</h4>
                  <p className="text-[13px] text-on-surface-variant leading-relaxed font-medium">We believe focus is the ultimate competitive advantage. By specializing in text-only models, we provide higher reliability and faster inference for serious writing and coding tasks.</p>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-lg mb-3">Can I switch plans anytime?</h4>
                  <p className="text-[13px] text-on-surface-variant leading-relaxed font-medium">Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately.</p>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-lg mb-3">Do you offer educational discounts?</h4>
                  <p className="text-[13px] text-on-surface-variant leading-relaxed font-medium">We provide custom pricing for students and researchers. Reach out to our support team for details.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-surface-variant to-surface-dim relative lg:w-2/5 min-h-[300px] overflow-hidden">
               {/* Mock Abstract CSS Wave */}
               <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-overlay">
                  <div className="w-[150%] h-32 bg-white rounded-[100%] blur-3xl rotate-12 -translate-y-10"></div>
                  <div className="w-[150%] h-32 bg-white rounded-[100%] blur-3xl -rotate-12 translate-y-10"></div>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
