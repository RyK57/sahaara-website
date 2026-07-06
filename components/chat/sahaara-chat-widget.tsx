"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChatMessageContent } from "@/components/chat/chat-message-content";
import { springSnappy } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const welcomeMessage: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I'm the SAHAARA assistant. Ask me about our mission, initiatives, leadership, volunteering, or health resources — I can point you to the right page.",
};

export function SahaaraChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, loading]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: ChatMessage = { role: "user", content: text };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.filter(
            (m, i) => !(i === 0 && m.role === "assistant"),
          ),
        }),
      });

      const data = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Request failed");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message ?? "" },
      ]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={springSnappy}
            className="flex h-[min(42rem,calc(100vh-5rem))] w-[min(32rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border bg-primary px-4 py-3">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">
                    SAHAARA Assistant
                  </p>
                  <p className="text-xs text-primary-foreground/70">
                    Ask about our programs & mission
                  </p>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                disableMotion
                onClick={() => setOpen(false)}
                className="text-primary-foreground hover:bg-accent hover:text-accent-foreground"
                aria-label="Close chat"
              >
                <X className="size-4" />
              </Button>
            </div>

            <div
              ref={scrollRef}
              className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={cn(
                    "max-w-[92%] rounded-2xl px-4 py-3",
                    message.role === "user"
                      ? "ml-auto bg-accent text-accent-foreground"
                      : "mr-auto bg-muted text-foreground",
                  )}
                >
                  {message.role === "assistant" ? (
                    <ChatMessageContent content={message.content} />
                  ) : (
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">
                      {message.content}
                    </p>
                  )}
                </div>
              ))}

              {loading && (
                <div className="mr-auto flex items-center gap-2 rounded-2xl bg-muted px-3.5 py-2.5 text-sm text-muted-foreground">
                  <Loader2 className="size-4 animate-spin" />
                  Thinking…
                </div>
              )}

              {error && (
                <p className="text-center text-xs text-destructive">{error}</p>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-border bg-background p-3"
            >
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={1}
                  placeholder="Ask about SAHAARA…"
                  disabled={loading}
                  className="max-h-24 min-h-10 flex-1 resize-none rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="accent"
                  disabled={loading || !input.trim()}
                  aria-label="Send message"
                >
                  <Send className="size-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          type="button"
          size="icon"
          variant="cta"
          onClick={() => setOpen((v) => !v)}
          className="size-16 rounded-full shadow-lg"
          aria-label={open ? "Close SAHAARA chat" : "Open SAHAARA chat"}
        >
          {open ? (
            <X className="size-7" />
          ) : (
            <MessageCircle className="size-7" />
          )}
        </Button>
      </motion.div>
    </div>
  );
}
