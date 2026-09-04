"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Category } from "@/types";
import { defaultCategories } from "@/lib/categories";
import Sidebar from "@/components/Sidebar";
import ChatArea from "@/components/ChatArea";
import RightPanel from "@/components/RightPanel";

// Import new Modals
import SettingsModal from "@/components/modals/SettingsModal";
import FAQModal from "@/components/modals/FAQModal";
import UpgradeModal from "@/components/modals/UpgradeModal";

export default function ChatPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>("");
  const [loading, setLoading] = useState(true);

  // Modal States
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);

  // Cross-component communication states
  const [activeSuggestion, setActiveSuggestion] = useState<string | null>(null);

  const supabase = createClient();

  useEffect(() => {
    const initialize = async () => {
      // Get user
      const { data: { user } } = await supabase.auth.getUser();
      let currentUser = user;
      
      if (!currentUser) {
        // Fallback for development/rate-limit bypass
        currentUser = { id: "dev-user", email: "admin@ethereal.ai" } as any;
      }
      
      setUserId(currentUser!.id);

      // Try to fetch categories from Supabase
      const { data: dbCategories } = await supabase
        .from("categories")
        .select("*")
        .order("created_at", { ascending: true });

      if (dbCategories && dbCategories.length > 0) {
        setCategories(dbCategories);
        setActiveCategory(dbCategories[0]);
      } else {
        // Fallback: use local categories with generated IDs
        const localCats: Category[] = defaultCategories.map((cat, i) => ({
          ...cat,
          id: `local-${i}`,
        }));
        setCategories(localCats);
        setActiveCategory(localCats[0]);
      }

      setLoading(false);
    };

    initialize();
  }, [supabase]);

  const handleCategorySelect = (category: Category) => {
    setActiveCategory(category);
    setConversationId(null);
  };

  const handleNewChat = () => {
    setConversationId(null);
  };

  const handleConversationCreated = (id: string) => {
    setConversationId(id || null);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setActiveSuggestion(suggestion);
  };

  // Sidebar/Panel visibility states
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isRightPanelVisible, setIsRightPanelVisible] = useState(true);

  if (loading) {
    return (
      <div className="flex xl:items-center justify-center h-full bg-surface">
        <div className="text-center fade-in-up flex flex-col items-center justify-center mt-[30vh] xl:mt-0">
          <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex flex-shrink-0 items-center justify-center animate-pulse mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">
              auto_awesome
            </span>
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant/60 animate-pulse">
          NexaAI Loading...
          </p>eal A
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full overflow-hidden relative bg-surface-bright">
      <div className={`transition-all duration-300 ease-in-out ${isSidebarVisible ? 'w-56' : 'w-0'} overflow-hidden h-full shrink-0 border-r border-outline-variant/5`}>
        <Sidebar
          categories={categories}
          activeCategory={activeCategory}
          onCategorySelect={handleCategorySelect}
          onNewChat={handleNewChat}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onOpenFAQ={() => setIsFAQOpen(true)}
        />
      </div>
      
      <ChatArea
        activeCategory={activeCategory}
        conversationId={conversationId}
        onConversationCreated={handleConversationCreated}
        userId={userId}
        activeSuggestion={activeSuggestion}
        onSuggestionConsumed={() => setActiveSuggestion(null)}
        isSidebarVisible={isSidebarVisible}
        isRightPanelVisible={isRightPanelVisible}
        onToggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)}
        onToggleRightPanel={() => setIsRightPanelVisible(!isRightPanelVisible)}
      />
      
      <div className={`transition-all duration-300 ease-in-out ${isRightPanelVisible ? 'w-72' : 'w-0'} overflow-hidden h-full shrink-0 border-l border-outline-variant/5 hidden xl:block`}>
        <RightPanel
          categoryName={activeCategory?.name || null}
          onSuggestionClick={handleSuggestionClick}
          onOpenUpgrade={() => setIsUpgradeOpen(true)}
        />
      </div>

      {/* Modals Rendering */}
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
      <FAQModal 
        isOpen={isFAQOpen} 
        onClose={() => setIsFAQOpen(false)} 
      />
      <UpgradeModal 
        isOpen={isUpgradeOpen} 
        onClose={() => setIsUpgradeOpen(false)} 
      />
    </div>
  );
}
