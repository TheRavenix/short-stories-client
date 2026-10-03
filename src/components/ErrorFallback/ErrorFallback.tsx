"use client";

import { BugIcon } from "lucide-react";

import { EmptyState } from "../EmptyState";

export type ErrorFallbackProps = {
  error: Error
  reset?: () => void
}

export function ErrorFallback({ error }: ErrorFallbackProps) {
  return <EmptyState icon={<BugIcon />} message={error.message} />
}
