"use client";

import { useRef, useEffect, FormEvent, KeyboardEvent, useState } from "react";

interface InputBarProps {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
  isLoading: boolean;
  onNewChat: () => void;
  onPolishPrompt: (currentInput: string) => Promise<void>;
}

export default function InputBar({
  input,
  onInputChange,
  onSubmit,
  isLoading,
  onNewChat,
  onPolishPrompt,
}: InputBarProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isPolishing, setIsPolishing] = useState(false);
  const [polishError, setPolishError] = useState<string | null>(null);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = `${Math.min(el.scrollHeight, 150)}px`;
    }
  }, [input]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isLoading && !isPolishing) {
        onSubmit(e as unknown as FormEvent);
      }
    }
  };

  const handlePolish = async () => {
    if (!input.trim() || isPolishing) return;
    setIsPolishing(true);
    setPolishError(null);
    try {
      await onPolishPrompt(input);
    } catch (e: any) {
      setPolishError(e.message || "Polish failed.");
    } finally {
      setIsPolishing(false);
    }
  };

  return (
    <footer className="shrink-0 w-full px-8 md:px-16 lg:px-24 pt-4 pb-6 bg-surface-bright">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={onSubmit} className="relative w-full">
          {/* Main Floating Container */}
          <div className="bg-white/95 backdrop-blur-3xl p-3 pl-8 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] flex items-end gap-4 transition-shadow focus-within:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message Nexa AI..."
              rows={1}
              className="flex-1 resize-none bg-transparent py-4 text-[15px] font-medium text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none border-none outline-none leading-relaxed"
              disabled={isLoading || isPolishing}
            />

            {/* Solid Blue Send Button matching Screenshot 2 */}
            <button
              type="submit"
              disabled={!input.trim() || isLoading || isPolishing}
              className="bg-primary text-white w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full shadow-md active:scale-95 transition-all hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed mb-0.5"
            >
              <span className="material-symbols-outlined text-[24px]">
                send
              </span>
            </button>
          </div>

          {/* Error Message for Polish Prompt */}
          {polishError && (
             <div className="mt-3 text-center text-xs font-bold text-error bg-error-container/50 py-2 border border-error/20 rounded-full animate-in fade-in max-w-sm mx-auto">
                Warning: {polishError}. Is your Groq API key set correctly?
             </div>
          )}

          {/* Sub-Actions */}
          <div className="mt-5 flex justify-center gap-4 items-start">
            <div className="flex flex-col items-center gap-1.5">
              <button
                type="button"
                onClick={handlePolish}
                disabled={!input.trim() || isPolishing || isLoading}
                className="bg-surface-container-lowest border border-outline-variant/10 px-6 py-2.5 rounded-full text-[11px] font-bold text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2.5 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <span 
                  className={`material-symbols-outlined text-[16px] group-hover:text-primary transition-colors ${isPolishing ? "animate-spin" : ""}`}
                >
                  {isPolishing ? "progress_activity" : "auto_fix"}
                </span>
                {isPolishing ? "POLISHING..." : "Polish Prompt"}
              </button>
              <span className="text-[10px] text-primary/80 font-bold tracking-wide">Upcoming feature</span>
            </div>
            <button
              type="button"
              onClick={onNewChat}
              className="bg-surface-container-lowest border border-outline-variant/10 px-6 py-2.5 rounded-full text-[11px] font-bold text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2.5 shadow-sm group mt-0"
            >
              <span className="material-symbols-outlined text-[16px] group-hover:text-primary transition-colors">
                lightbulb
              </span>
              New Topic
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
}
