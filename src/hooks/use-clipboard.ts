"use client";

import { useRef, useState } from "react";

import { useToastStore } from "@/stores/toast";

const CLIPBOARD_DURATION_MS = 2000;

interface CopyTextOptions {
  text: string;
  message?: string;
}

function useClipboard() {
  const [copied, setCopied] = useState(false);
  const addToast = useToastStore((s) => s.addToast);
  const clipboardTimout = useRef<NodeJS.Timeout>(null!);

  async function copyText(options: CopyTextOptions) {
    if (copied) return;

    try {
      await navigator.clipboard.writeText(options.text);
      setCopied(true);
      addToast({
        title: "Done",
        description: options.message || "Text copied to clipboard.",
        duration: CLIPBOARD_DURATION_MS,
      });

      clearTimeout(clipboardTimout.current);
      clipboardTimout.current = setTimeout(() => {
        setCopied(false);
      }, CLIPBOARD_DURATION_MS);
    } catch (err) {
      addToast({
        title: "Error copying text",
        description: "Failed to copy text",
        duration: CLIPBOARD_DURATION_MS,
      });
    }
  }

  return { copyText, copied };
}

export { useClipboard, type CopyTextOptions };
