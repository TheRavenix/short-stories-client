"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { service } from "@/service";

interface Options {
  redirectTo?: string;
  onSuccess?: () => void;
}

export function useRedirectIfAuthenticated(options?: Options) {
  const router = useRouter();
  const query = useQuery({
    queryKey: ["redirect-if-authenticated"],
    queryFn: service.user.getStatus,
    staleTime: 0,
    gcTime: 0,
  });

  useEffect(() => {
    if (query.isSuccess) {
      options?.onSuccess?.() || router.replace(options?.redirectTo || "/");
    }
  }, [query.isSuccess]);

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    isAuthenticated: query.isSuccess,
    error: query.error,
    data: query.data,
    refetch: query.refetch,
  };
}
