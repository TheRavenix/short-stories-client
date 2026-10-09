import { useQuery } from '@tanstack/react-query'

import { getUserProfile, getUserStatus } from '@/services/user'

export function useProfileStatus() {
  const { data, isSuccess, isPending, isError, refetch } = useQuery({
    queryKey: ['profile-status'],
    queryFn: getUserStatus,
    staleTime: 1000 * 60 * 15, // 15 minutes fresh
    gcTime: 1000 * 60 * 60 * 12 // 12 hours cache
  })

  return {
    status: data,
    isLoading: isPending,
    isSuccess,
    isError,
    refetch
  }
}

export function useProfile() {
  const { data, isPending, refetch, isSuccess } = useQuery({
    queryKey: ['profile'],
    queryFn: getUserProfile,
    staleTime: 1000 * 60 * 30, // 30 minutes fresh
    gcTime: 1000 * 60 * 60 * 24 // 24 hours cache
  })
  return {
    profile: data,
    isLoading: isPending,
    isSuccess,
    refetch
  }
}
