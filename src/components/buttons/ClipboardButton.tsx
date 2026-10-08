"use client";

import { CopyCheckIcon, CopyIcon } from "lucide-react";

import { Button } from "../ui/Button";
import { CopyTextOptions, useClipboard } from "@/hooks/use-clipboard";

type Props = {
  text: string
  message?: string
} & CopyTextOptions

export function ClipboardButton({ text, message }: Props) {
  const { copyText, copied } = useClipboard()

  const handleClick = async () => {
    await copyText({ text, message })
  }

  return (
    <Button variant='ghost' size='icon' onClick={handleClick} disabled={copied}>
      {copied ? <CopyCheckIcon size={20} /> : <CopyIcon size={20} />}
    </Button>
  )
}
