"use client";

import { Category } from "@/types";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SidebarProps {
  categories: Category[];
  activeCategory: Category | null;
  onCategorySelect: (category: Category) => void;
  onNewChat: () => void;
  onOpenSettings?: () => void;
  onOpenFAQ?: () => void;
}

export default function Sidebar({
  categories,
  activeCategory,
  onCategorySelect,
  onNewChat,
  onOpenSettings,
  onOpenFAQ,
}: SidebarProps) {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <div className="flex flex-col h-full bg-surface-bright py-6 transition-all font-body text-[13px] font-medium w-full">
      {/* Brand & Logo */}
      <div className="px-6 mb-8">
        <Link href="/" className="font-headline text-lg font-bold text-primary tracking-tight">
          Nexa AI
        </Link>
        <div className="mt-8">
          <h2 className="text-on-surface font-bold text-sm">Topics</h2>
          <p className="text-on-surface-variant text-[11px] mt-0.5">
            Select a conversation stream
          </p>
        </div>
      </div>

      {/* Category list */}
      <nav className="flex-1 overflow-y-auto space-y-0.5">
        {categories.map((category) => {
          const isActive = activeCategory?.id === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category)}
              className={`flex items-center gap-4 w-full py-3 px-6 transition-colors ${
                isActive
                  ? "bg-primary/5 border-l-[3px] border-primary text-on-surface font-bold"
                  : "text-on-surface-variant hover:bg-surface-container/50 hover:text-on-surface border-l-[3px] border-transparent"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[20px] ${
                  isActive ? "text-primary" : "text-on-surface-variant/70 group-hover:text-on-surface"
                }`}
              >
                {category.icon}
              </span>
              <span>{category.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="px-5 mt-auto space-y-4">
        {/* New Chat button (solid blue like Screenshot 2) */}
        <button
          onClick={onNewChat}
          className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold shadow-sm hover:brightness-110 active:scale-95 transition-all text-[13px]"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>New Chat</span>
        </button>

        <div className="pt-2 space-y-1">
          <button 
            onClick={onOpenSettings}
            className="flex w-full items-center gap-4 py-2.5 px-2 text-on-surface-variant hover:text-on-surface transition-colors text-[13px] font-medium rounded-lg hover:bg-surface-container/40"
          >
            <span className="material-symbols-outlined text-[20px] opacity-60">
              settings
            </span>
            <span>Settings</span>
          </button>
          
          <button 
            onClick={onOpenFAQ}
            className="flex w-full items-center gap-4 py-2.5 px-2 text-on-surface-variant hover:text-on-surface transition-colors text-[13px] font-medium rounded-lg hover:bg-surface-container/40"
          >
            <span className="material-symbols-outlined text-[20px] opacity-60">
              help
            </span>
            <span>Help</span>
          </button>

          {/* Hidden sign out trick for testing since screenshot doesn't explicitly show it */}
          <button
            onClick={handleSignOut}
            className="flex w-full items-center gap-4 py-2.5 px-2 text-on-surface-variant hover:text-error transition-colors text-[13px] font-medium rounded-lg hover:bg-error-container/20"
          >
            <span className="material-symbols-outlined text-[20px] opacity-60">
              logout
            </span>
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
