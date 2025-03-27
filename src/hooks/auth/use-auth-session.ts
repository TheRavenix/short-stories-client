"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { service } from "@/service";

interface Options {
  redirectTo?: string;
  onError?: () => void;
}

function useAuthSession(options?: Options) {
  const router = useRouter();
  const query = useQuery({
    queryKey: ["auth-session"],
    queryFn: service.user.getStatus,
    staleTime: 0,
    gcTime: 0,
    retry: false,
  });

  useEffect(() => {
    if (query.isError) {
      options?.onError?.() || router.replace(options?.redirectTo || "/sign-in");
    }
  }, [query.isError]);

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    isAuthenticated: query.isSuccess,
    error: query.error,
    data: query.data,
    refetch: query.refetch,
  };
}

export { useAuthSession };
