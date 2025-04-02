import { useQuery } from "@tanstack/react-query";

import { services } from "@/services";

export function useProfileStatus() {
  const { data, isSuccess, isPending, isError, refetch } = useQuery({
    queryKey: ["profile-status"],
    queryFn: services.user.getStatus,
    staleTime: 1000 * 60 * 15, // 15 minutes fresh
    gcTime: 1000 * 60 * 60 * 12, // 12 hours cache
  });
  return { status: data, isLoading: isPending, isSuccess, isError, refetch };
}
