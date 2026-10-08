"use client";

import { ErrorFallback, ErrorFallbackProps } from "@/components/ErrorFallback";

type Props = ErrorFallbackProps

export function LibraryStoriesSectionError(props: Props) {
  return <ErrorFallback {...props} />
}
