"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChatMessageBubble } from "@/components/chat/chat-message-bubble";
import { ChatSuggestionChips } from "@/components/chat/chat-suggestion-chips";
import { ChatThinkingIndicator } from "@/components/chat/chat-thinking-indicator";
import { mergeRetrievalStep, readChatStream } from "@/lib/chat/read-stream";
import type { RetrievalStep } from "@/lib/chat/retrieval/types";
import { starterQuestions } from "@/lib/chat/suggested-questions";
import { defaultTransition, springSnappy } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  followUps?: string[];
}

const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I'm the SAHAARA assistant. Ask me about our mission, initiatives, leadership, volunteering, or health resources — I can point you to the right page.",
};

function isEmptyChat(messages: ChatMessage[]) {
  return messages.length === 1 && messages[0]?.role === "assistant";
}

function createMessageId() {
  return crypto.randomUUID();
}

export function SahaaraChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [retrievalSteps, setRetrievalSteps] = useState<RetrievalStep[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const lastAssistantIndex = messages.findLastIndex((m) => m.role === "assistant");
  const showStarterQuestions = isEmptyChat(messages) && !loading;
  const lastAssistantFollowUps =
    !loading && lastAssistantIndex >= 0 && !isEmptyChat(messages)
      ? messages[lastAssistantIndex]?.followUps
      : undefined;

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, open, loading, lastAssistantFollowUps, retrievalSteps, isGenerating]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: "user",
      content: trimmed,
    };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setError(null);
    setLoading(true);
    setRetrievalSteps([]);
    setIsGenerating(false);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .filter((m) => m.id !== "welcome")
            .map(({ role, content }) => ({ role, content })),
        }),
      });

      await readChatStream(response, {
        onToolStep: (step) => {
          setRetrievalSteps((prev) => mergeRetrievalStep(prev, step));
        },
        onGenerating: () => {
          setIsGenerating(true);
        },
        onDone: (message, followUps) => {
          setMessages((prev) => [
            ...prev,
            {
              id: createMessageId(),
              role: "assistant",
              content: message,
              followUps,
            },
          ]);
        },
        onError: (errorMessage) => {
          setError(errorMessage);
        },
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    } finally {
      setLoading(false);
      setIsGenerating(false);
      setRetrievalSteps([]);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    void sendMessage(input);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendMessage(input);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={springSnappy}
            className="flex h-[min(42rem,calc(100vh-5rem))] w-[min(32rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.05 }}
              className="flex items-center justify-between gap-3 border-b border-border bg-primary px-4 py-3"
            >
              <div className="flex items-center gap-2.5">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ ...springSnappy, delay: 0.1 }}
                >
                  <Image
                    src="/logo.png"
                    alt=""
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </motion.div>
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
            </motion.div>

            <div
              ref={scrollRef}
              className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4"
            >
              <AnimatePresence initial={false} mode="popLayout">
                {messages.map((message) => (
                  <ChatMessageBubble
                    key={message.id}
                    role={message.role}
                    content={message.content}
                  />
                ))}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {showStarterQuestions && (
                  <ChatSuggestionChips
                    key="starters"
                    label="Try asking"
                    questions={[...starterQuestions]}
                    onSelect={(question) => void sendMessage(question)}
                    disabled={loading}
                  />
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {lastAssistantFollowUps && lastAssistantFollowUps.length > 0 && (
                  <ChatSuggestionChips
                    key="follow-ups"
                    label="Follow up"
                    questions={lastAssistantFollowUps}
                    onSelect={(question) => void sendMessage(question)}
                    disabled={loading}
                  />
                )}
              </AnimatePresence>

              <AnimatePresence>
                {loading && (
                  <ChatThinkingIndicator
                    steps={retrievalSteps}
                    isGenerating={isGenerating}
                  />
                )}
              </AnimatePresence>

              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={defaultTransition}
                    className="text-center text-xs text-destructive"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.12 }}
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
                  className={cn(
                    "max-h-24 min-h-10 flex-1 resize-none rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring",
                    loading && "opacity-60",
                  )}
                />
                <motion.div
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: loading ? 1 : 0.95 }}
                  transition={springSnappy}
                >
                  <Button
                    type="submit"
                    size="icon"
                    variant="accent"
                    disabled={loading || !input.trim()}
                    aria-label="Send message"
                  >
                    <Send className="size-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={springSnappy}
      >
        <Button
          type="button"
          size="icon"
          variant="cta"
          onClick={() => setOpen((v) => !v)}
          className="size-16 rounded-full shadow-lg"
          aria-label={open ? "Close SAHAARA chat" : "Open SAHAARA chat"}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.18 }}
              className="flex items-center justify-center"
            >
              {open ? (
                <X className="size-7" />
              ) : (
                <MessageCircle className="size-7" />
              )}
            </motion.span>
          </AnimatePresence>
        </Button>
      </motion.div>
    </div>
  );
}
