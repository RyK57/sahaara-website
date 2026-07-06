import { chatMaxMessageLength } from "@/lib/chat/config";

const onTopicPattern =
  /\b(sahaara|volunteer|donat|screening|workshop|initiative|leadership|research|prana|masala|south asian|heart|cardio|diabetes|blood pressure|hypertension|cholesterol|berkeley|contact|get involved|resources|media|support|nonprofit|temple|livermore|cooking|health|mission|board|ceo|cofounder)\b/i;

const offTopicPatterns: RegExp[] = [
  /\b(homework|assignment|coursework|worksheet|exam prep|write my essay|do my essay)\b/i,
  /\b(solve (this|the) (math|equation|problem|calculus|algebra|physics|chemistry))\b/i,
  /\b(leetcode|coding interview|debug (this|my) code|write (me )?(a )?(python|javascript|java|code))\b/i,
  /\b(ignore (all )?previous|jailbreak|dan mode|act as (a )?gpt)\b/i,
  /\b(write (me )?(a )?(poem|story|song|rap)|tell me a joke)\b/i,
  /\b(chatgpt|openai|claude|gemini)\b/i,
  /\b(stock tips|crypto|betting|gambling)\b/i,
];

export function validateChatMessage(content: string): {
  allowed: boolean;
  reason?: string;
} {
  const text = content.trim();

  if (!text) {
    return { allowed: false, reason: "Please enter a message." };
  }

  if (text.length > chatMaxMessageLength) {
    return {
      allowed: false,
      reason: `Message is too long. Please keep it under ${chatMaxMessageLength} characters.`,
    };
  }

  const greetingOnly =
    /^(hi|hello|hey|yo|sup|thanks|thank you|ok|okay)[!.?\s]*$/i.test(text);

  if (greetingOnly || onTopicPattern.test(text)) {
    return { allowed: true };
  }

  for (const pattern of offTopicPatterns) {
    if (pattern.test(text)) {
      return {
        allowed: false,
        reason:
          "I can only help with SAHAARA, our programs, and South Asian cardiovascular health. Try asking about volunteering, initiatives, or health resources.",
      };
    }
  }

  return { allowed: true };
}
