"use client";

import { useState } from "react";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UpgradeModal({ isOpen, onClose }: UpgradeModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = () => {
    setLoading(true);
    // Simulate network request for Stripe Checkout or similar
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center fade-in-up">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-md transition-opacity"
        onClick={!loading && !success ? onClose : undefined}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[420px] bg-surface-container-lowest rounded-[2rem] shadow-[0_30px_60px_rgba(53,37,205,0.15)] border border-primary/20 overflow-hidden m-4 flex flex-col group">
        
        {/* Decorative ambient gradient */}
        <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

        {/* Close Button */}
        {!loading && !success && (
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-surface/50 hover:bg-surface-container-high transition-colors z-10"
          >
            <span className="material-symbols-outlined text-on-surface-variant text-sm">
              close
            </span>
          </button>
        )}

        {success ? (
          <div className="p-12 flex flex-col items-center justify-center text-center fade-in-up relative z-10">
            <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary text-3xl">
                auto_awesome
              </span>
            </div>
            <h2 className="font-headline text-2xl font-extrabold text-on-surface mb-2">
              Welcome to Pro
            </h2>
            <p className="text-sm text-on-surface-variant font-medium">
              Your intelligence stream has been upgraded. Please wait while we initialize your new capabilities...
            </p>
          </div>
        ) : (
          <div className="p-10 relative z-10 flex flex-col items-center text-center">
            
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-on-primary text-3xl">
                rocket_launch
              </span>
            </div>

            <h2 className="font-headline text-2xl font-extrabold text-on-surface mb-2">
              Rahul Pro
            </h2>
            <p className="text-sm text-on-surface-variant font-medium mb-8 leading-relaxed max-w-[280px]">
              Unlock lightning-fast reasoning, dedicated servers, and unlimited context windows.
            </p>

            <div className="w-full bg-surface-container-low rounded-2xl p-6 mb-8 text-left space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                <span className="text-sm font-bold text-on-surface">Unlimited Context Length</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                <span className="text-sm font-bold text-on-surface">Priority Reasoning Speeds</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                <span className="text-sm font-bold text-on-surface">Early Access to New Streams</span>
              </div>
            </div>

            <button 
              onClick={handleSubscribe}
              disabled={loading}
              className="w-full relative overflow-hidden bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-xl text-sm font-bold shadow-[0_15px_30px_rgba(53,37,205,0.2)] hover:shadow-[0_20px_40px_rgba(53,37,205,0.3)] transition-all flex justify-center items-center h-[52px]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined animate-spin text-lg">
                    progress_activity
                  </span>
                  Processing...
                </span>
              ) : (
                "Subscribe • $20/mo"
              )}
            </button>
            <p className="text-[11px] text-on-surface-variant/50 font-medium mt-4">
              Cancel anytime. Subject to terms & conditions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
