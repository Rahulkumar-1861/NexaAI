"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      setLoading(false);
      return;
    }

    const { error: updateError } = await supabase.auth.updateUser({
      password,
    });

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
    } else {
      router.push("/chat");
      router.refresh();
    }
  };

  return (
    <div className="w-full max-w-[440px] px-6 sm:px-10 py-12 rounded-[2rem] bg-surface-container-lowest shadow-[0_20px_40px_rgba(25,28,30,0.06)] border border-outline-variant/10 fade-in-up md:ml-12 lg:ml-24">
      {/* Brand Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary-fixed/50 flex flex-shrink-0 items-center justify-center">
            <span className="material-symbols-outlined text-primary text-xl">
              lock_reset
            </span>
          </div>
          <h1 className="font-headline text-xl font-bold tracking-tight text-on-surface">
            Nexa AI
          </h1>
        </div>
        <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface leading-tight">
          Secure new password.
        </h2>
        <p className="mt-2 text-sm text-on-surface-variant font-medium">
          Create a strong password for your Nexa AI workspace.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleUpdatePassword} className="space-y-6">
        <div>
          <label
            htmlFor="new-password"
            className="mb-2 block text-xs font-bold uppercase tracking-widest text-on-surface-variant/60"
          >
            New Password
          </label>
          <input
            id="new-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="w-full rounded-2xl bg-surface-container-low px-5 py-4 text-sm font-medium text-on-surface placeholder:text-on-surface-variant/40 border-[1px] border-transparent focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="confirm-password"
            className="mb-2 block text-xs font-bold uppercase tracking-widest text-on-surface-variant/60"
          >
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="w-full rounded-2xl bg-surface-container-low px-5 py-4 text-sm font-medium text-on-surface placeholder:text-on-surface-variant/40 border-[1px] border-transparent focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all focus:outline-none"
          />
        </div>

        {error && (
          <div className="rounded-2xl bg-error-container/50 px-5 py-3 text-sm font-medium text-error border border-error/10">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !password || !confirmPassword}
          className="w-full rounded-2xl bg-gradient-to-r from-primary to-primary-container py-4 text-sm font-bold text-on-primary shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed group"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined animate-spin text-lg">
                progress_activity
              </span>
              Securing...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Update Password
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </span>
          )}
        </button>
      </form>
    </div>
  );
}
