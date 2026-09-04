import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/10 py-12 mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h4 className="font-headline text-lg font-black text-on-surface mb-2">Nexa AI</h4>
          <p className="text-[11px] text-on-surface-variant font-medium">© 2026 Nexa AI. Developed by Rahul Kumar.</p>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/privacy" className="text-[11px] font-bold text-on-surface-variant/60 hover:text-on-surface transition-colors uppercase tracking-widest">Privacy Policy</Link>
          <Link href="/terms" className="text-[11px] font-bold text-on-surface-variant/60 hover:text-on-surface transition-colors uppercase tracking-widest">Terms of Service</Link>
          <Link href="/status" className="text-[11px] font-bold text-on-surface-variant/60 hover:text-on-surface transition-colors uppercase tracking-widest">API Status</Link>
          <Link href="/contact" className="text-[11px] font-bold text-on-surface-variant/60 hover:text-on-surface transition-colors uppercase tracking-widest">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
