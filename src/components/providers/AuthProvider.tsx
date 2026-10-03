"use client";

import { PropsWithChildren, useEffect } from "react";

import { useAuthStore } from "@/stores/auth";
import { useProfile } from "@/hooks/profile";

type Props = PropsWithChildren

export function AuthProvider({ children }: Props) {
  const { profile, isSuccess } = useProfile()
  const setIsAuthenticated = useAuthStore((s) => s.setIsAuthenticated)

  useEffect(() => {
    setIsAuthenticated(isSuccess && profile !== undefined)
  }, [profile, isSuccess])

  return <>{children}</>
}
