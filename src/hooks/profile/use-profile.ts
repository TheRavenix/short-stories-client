"use client";

import { useQuery } from "@tanstack/react-query";

import { services } from "@/services";

export function useProfile() {
  const { data, isPending, refetch, isSuccess } = useQuery({
    queryKey: ["profile"],
    queryFn: services.user.getProfile,
    staleTime: 1000 * 60 * 30, // 30 minutes fresh
    gcTime: 1000 * 60 * 60 * 24, // 24 hours cache
  });
  return { profile: data?.data, isLoading: isPending, isSuccess, refetch };
}
