import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/5">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-24 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-headline text-lg font-black tracking-tight text-on-surface group-hover:text-primary transition-colors">
            Nexa AI
          </span>
        </Link>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/#features" className="text-[13px] font-bold text-on-surface-variant/70 hover:text-on-surface transition-colors">
            Features
          </Link>
          <Link href="/intelligence" className="text-[13px] font-bold text-on-surface-variant/70 hover:text-on-surface transition-colors">
            Capabilities
          </Link>
          <Link href="/pricing" className="text-[13px] font-bold text-on-surface-variant/70 hover:text-on-surface transition-colors">
            Pricing
          </Link>
          <Link href="/chat" className="text-[13px] font-bold text-on-surface-variant/70 hover:text-on-surface transition-colors">
            Chat
          </Link>
        </div>

        {/* Auth Actions */}
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-[13px] font-bold text-on-surface hover:text-primary transition-colors hidden sm:block">
            Sign In
          </Link>
          <Link href="/signup" className="h-10 px-5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full text-[13px] font-bold flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
