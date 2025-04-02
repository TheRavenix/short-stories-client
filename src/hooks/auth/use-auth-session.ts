"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useProfileStatus } from "../profile";

interface Options {
  redirectTo?: string;
  onError?: () => void;
}

export function useAuthSession(options?: Options) {
  const router = useRouter();
  const profileStatus = useProfileStatus();

  useEffect(() => {
    if (profileStatus.isError) {
      options?.onError?.() || router.replace(options?.redirectTo || "/sign-in");
    }
  }, [profileStatus.isError]);

  return profileStatus;
}
