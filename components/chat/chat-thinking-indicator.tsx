"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RetrievalStep } from "@/lib/chat/retrieval/types";
import { defaultTransition, springSnappy } from "@/lib/motion";

interface ChatThinkingIndicatorProps {
  steps: RetrievalStep[];
  isGenerating: boolean;
}

const stepVariants = {
  initial: { opacity: 0, x: -8 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -4, transition: { duration: 0.15 } },
};

export function ChatThinkingIndicator({
  steps,
  isGenerating,
}: ChatThinkingIndicatorProps) {
  if (steps.length === 0 && !isGenerating) return null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.98 }}
      transition={springSnappy}
      className="mr-auto max-w-[92%] rounded-2xl border border-border/60 bg-muted px-3.5 py-2.5 shadow-sm"
    >
      <ul className="space-y-2" aria-live="polite" aria-busy={isGenerating}>
        <AnimatePresence initial={false} mode="popLayout">
          {steps.map((step) => {
            const isDone = step.status === "done";

            return (
              <motion.li
                key={step.id}
                layout
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={defaultTransition}
                className="flex items-center gap-2 overflow-hidden text-sm"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDone ? (
                    <motion.span
                      key="check"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={springSnappy}
                      className="flex shrink-0"
                    >
                      <Check
                        className="size-3.5 text-accent"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="loader"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex shrink-0"
                    >
                      <Loader2
                        className="size-3.5 animate-spin text-accent"
                        aria-hidden
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
                <motion.span
                  key={isDone ? step.result : step.label}
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "leading-snug",
                    isDone ? "text-muted-foreground" : "text-foreground",
                  )}
                >
                  {isDone ? step.result : step.label}
                </motion.span>
              </motion.li>
            );
          })}

          {isGenerating && (
            <motion.li
              key="generating"
              layout
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={defaultTransition}
              className="flex items-center gap-2 text-sm"
            >
              <Loader2
                className="size-3.5 shrink-0 animate-spin text-accent"
                aria-hidden
              />
              <span className="text-foreground">Writing response…</span>
            </motion.li>
          )}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
}
