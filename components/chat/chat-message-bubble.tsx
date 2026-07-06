"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { ChatMessageContent } from "@/components/chat/chat-message-content";
import { defaultTransition, springSnappy } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ChatMessageBubbleProps {
  role: "user" | "assistant";
  content: string;
}

const userVariants = {
  initial: { opacity: 0, y: 10, x: 16, scale: 0.97 },
  animate: { opacity: 1, y: 0, x: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.15 } },
};

const assistantVariants = {
  initial: { opacity: 0, y: 10, x: -16, scale: 0.97 },
  animate: { opacity: 1, y: 0, x: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.15 } },
};

export const ChatMessageBubble = forwardRef<
  HTMLDivElement,
  ChatMessageBubbleProps
>(function ChatMessageBubble({ role, content }, ref) {
  const isUser = role === "user";

  return (
    <motion.div
      ref={ref}
      layout
      variants={isUser ? userVariants : assistantVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={isUser ? springSnappy : defaultTransition}
      className={cn(
        "max-w-[92%] rounded-2xl px-4 py-3",
        isUser
          ? "ml-auto bg-accent text-accent-foreground"
          : "mr-auto bg-muted text-foreground",
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.06, duration: 0.25 }}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap text-sm leading-relaxed">{content}</p>
        ) : (
          <ChatMessageContent content={content} />
        )}
      </motion.div>
    </motion.div>
  );
});
