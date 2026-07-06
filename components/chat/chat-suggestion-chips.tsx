"use client";

import { AnimatePresence, motion } from "framer-motion";
import { defaultTransition, springSnappy } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ChatSuggestionChipsProps {
  questions: string[];
  onSelect: (question: string) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

const containerVariants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ...defaultTransition,
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
  exit: { opacity: 0, y: 6, transition: { duration: 0.2 } },
};

const chipVariants = {
  initial: { opacity: 0, y: 6, scale: 0.94 },
  animate: { opacity: 1, y: 0, scale: 1, transition: springSnappy },
  exit: { opacity: 0, scale: 0.94, transition: { duration: 0.15 } },
};

export function ChatSuggestionChips({
  questions,
  onSelect,
  disabled = false,
  label = "Suggested",
  className,
}: ChatSuggestionChipsProps) {
  if (questions.length === 0) return null;

  return (
    <motion.div
      layout
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn("mr-auto max-w-[92%]", className)}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.04, duration: 0.2 }}
        className="mb-2 text-xs font-medium text-muted-foreground"
      >
        {label}
      </motion.p>
      <div className="flex flex-wrap gap-2">
        <AnimatePresence mode="popLayout">
          {questions.map((question) => (
            <motion.button
              key={question}
              type="button"
              layout
              variants={chipVariants}
              disabled={disabled}
              onClick={() => onSelect(question)}
              whileHover={disabled ? undefined : { scale: 1.03, y: -1 }}
              whileTap={disabled ? undefined : { scale: 0.97 }}
              transition={springSnappy}
              className={cn(
                "rounded-full border border-border bg-background px-3 py-1.5 text-left text-xs leading-snug text-foreground shadow-sm transition-colors",
                "hover:border-accent hover:bg-accent/5 hover:text-accent",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "disabled:pointer-events-none disabled:opacity-50",
              )}
            >
              {question}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
