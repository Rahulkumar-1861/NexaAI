"use client";
import { DefaultChatTransport } from "ai";
import { useState, useRef, useEffect, useMemo, FormEvent } from "react";
import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";
import { Category } from "@/types";
import { createClient } from "@/lib/supabase/client";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import InputBar from "./InputBar";

interface ChatAreaProps {
  activeCategory: Category | null;
  conversationId: string | null;
  onConversationCreated: (id: string) => void;
  userId: string;
  activeSuggestion?: string | null;
  onSuggestionConsumed?: () => void;
  isSidebarVisible: boolean;
  isRightPanelVisible: boolean;
  onToggleSidebar: () => void;
  onToggleRightPanel: () => void;
}

export default function ChatArea({
  activeCategory,
  conversationId,
  onConversationCreated,
  userId,
  activeSuggestion,
  onSuggestionConsumed,
  isSidebarVisible,
  isRightPanelVisible,
  onToggleSidebar,
  onToggleRightPanel,
}: ChatAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const supabase = createClient();
  const conversationIdRef = useRef(conversationId);
  const [input, setInput] = useState("");

  // Keep ref in sync
  useEffect(() => {
    conversationIdRef.current = conversationId;
  }, [conversationId]);

  const { messages, setMessages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
      body: {
        systemPrompt: activeCategory?.system_prompt,
      },
    }),
    onFinish: async ({ message }) => {
      const textContent = message.parts
        ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
        .map((p) => p.text)
        .join("");
      if (conversationIdRef.current && textContent && userId !== "dev-user") {
        await supabase.from("messages").insert({
          conversation_id: conversationIdRef.current,
          role: "assistant",
          content: textContent,
        });
      }
    },
  });

  const isLoading = status === "streaming" || status === "submitted";

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Clear messages when category changes
  useEffect(() => {
    setMessages([]);
    setInput("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory?.id]);

  // Load existing messages when conversation changes
  useEffect(() => {
    const loadMessages = async () => {
      if (!conversationId) {
        setMessages([]);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("messages")
          .select("*")
          .eq("conversation_id", conversationId)
          .order("created_at", { ascending: true });

        if (error) throw error;

        if (data && data.length > 0) {
          setMessages(
            data.map((msg) => ({
              id: msg.id,
              role: msg.role as "user" | "assistant",
              content: msg.content,
              createdAt: new Date(msg.created_at),
              parts: [{ type: "text" as const, text: msg.content }],
            }))
          );
        }
      } catch (err) {
        console.error("Supabase loadMessages error:", err);
      }
    };

    loadMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversationId]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const messageContent = input;
    setInput("");

    let currentConvId = conversationIdRef.current;

    // Create conversation if none exists (Skip if dev-user)
    if (!currentConvId && activeCategory && userId !== "dev-user") {
      const { data } = await supabase
        .from("conversations")
        .insert({
          user_id: userId,
          category_id: activeCategory.id,
        })
        .select()
        .single();

      if (data) {
        currentConvId = data.id;
        conversationIdRef.current = data.id;
        onConversationCreated(data.id);
      }
    }

    // Save user message to Supabase (Skip if dev-user)
    if (currentConvId && userId !== "dev-user") {
      await supabase.from("messages").insert({
        conversation_id: currentConvId,
        role: "user",
        content: messageContent,
      });
    }

    // Send to AI using sendMessage
    sendMessage({ text: messageContent });
  };

  const handleNewChat = () => {
    setMessages([]);
    setInput("");
    conversationIdRef.current = null;
    onConversationCreated("");
  };

  // Consume suggestion if it comes in from props
  useEffect(() => {
    if (activeSuggestion) {
      setInput(activeSuggestion);
      onSuggestionConsumed?.();
    }
  }, [activeSuggestion, setInput, onSuggestionConsumed]);

  const handlePolishPrompt = async (currentInput: string) => {
    try {
      const response = await fetch("/api/polish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: currentInput }),
      });
      const data = await response.json();
      if (data.polished) {
        setInput(data.polished);
      }
    } catch (err) {
      console.error("Failed to polish prompt", err);
    }
  };

  const getMessageText = (message: (typeof messages)[0]): string => {
    return message.parts
      .filter((p): p is { type: "text"; text: string } => p.type === "text")
      .map((p) => p.text)
      .join("");
  };

  return (
    <main className="flex-1 flex flex-col relative bg-surface-bright">
      {/* Sidebar Toggles */}
      <div className="absolute top-6 left-6 z-[60] flex gap-2">
        {!isSidebarVisible && (
          <button 
            onClick={onToggleSidebar}
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-sm border border-outline-variant/10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:scale-110 active:scale-95"
            title="Show Sidebar"
          >
            <span className="material-symbols-outlined text-[20px]">menu</span>
          </button>
        )}
      </div>

      <div className="absolute top-6 right-6 z-[60] flex gap-2">
        {!isRightPanelVisible && (
          <button 
            onClick={onToggleRightPanel}
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-sm border border-outline-variant/10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:scale-110 active:scale-95"
            title="Show Info"
          >
            <span className="material-symbols-outlined text-[20px]">info</span>
          </button>
        )}
      </div>

      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[60] flex gap-4">
        {isSidebarVisible && (
          <button 
            onClick={onToggleSidebar}
            className="px-4 py-2 rounded-full bg-surface-container-low/50 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 hover:text-primary transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            Hide Topics
          </button>
        )}
        {isRightPanelVisible && (
          <button 
            onClick={onToggleRightPanel}
            className="px-4 py-2 rounded-full bg-surface-container-low/50 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 hover:text-primary transition-all flex items-center gap-2"
          >
            Hide Insights
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </button>
        )}
      </div>

      {/* Chat History Area */}
      <section
        ref={scrollRef}
        className="flex-1 overflow-y-auto chat-scroll pt-20 pb-8 px-8 md:px-16 lg:px-24"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          {messages.length === 0 ? (
            <div className="flex h-[60vh] flex-col items-center justify-center text-center">
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[2.5rem] bg-primary-fixed/30 shadow-inner">
                <span className="material-symbols-outlined text-primary text-5xl">
                  {activeCategory?.icon || "auto_awesome"}
                </span>
              </div>
              <h3 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">
                {activeCategory?.name || "Nexa AI"}
              </h3>
              <p className="mt-4 max-w-sm text-[14px] font-medium text-on-surface-variant/50 leading-relaxed">
                Send a prompt below to establish a neural connection.
              </p>
            </div>
          ) : (
            <>
              {/* Date Indicator (Session Start) */}
              <div className="flex justify-center mb-10 pt-4">
                <span className="bg-surface-container-low px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 border border-outline-variant/10 shadow-sm">
                  Conversation Started
                </span>
              </div>

              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  role={message.role as "user" | "assistant"}
                  content={getMessageText(message)}
                  createdAt={
                    (message as any).createdAt
                      ? new Date((message as any).createdAt).toISOString()
                      : undefined
                  }
                />
              ))}

              {isLoading &&
                messages.length > 0 &&
                messages[messages.length - 1].role === "user" && (
                  <TypingIndicator />
                )}
            </>
          )}
        </div>
      </section>

      {/* Message Input Area */}
      <InputBar
        input={input}
        onInputChange={setInput}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        onNewChat={handleNewChat}
        onPolishPrompt={handlePolishPrompt}
      />
    </main>
  );
}
