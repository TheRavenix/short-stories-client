"use client";

import { ErrorFallback, ErrorFallbackProps } from "@/components/ErrorFallback";

interface Props extends ErrorFallbackProps {}

const LibraryStoriesSectionError: React.FC<Props> = (props) => {
  return <ErrorFallback {...props} />;
};

export { LibraryStoriesSectionError };
