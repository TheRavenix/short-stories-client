"use client";

import { BugIcon } from "lucide-react";

import { EmptyState } from "../EmptyState";

interface ErrorFallbackProps {
  error: Error;
  reset?: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, reset }) => {
  return <EmptyState icon={<BugIcon />} message={error.message} />;
};

export { ErrorFallback, type ErrorFallbackProps };
