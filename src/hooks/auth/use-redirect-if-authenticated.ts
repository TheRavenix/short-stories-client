"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useProfileStatus } from "../profile";

interface Options {
  redirectTo?: string;
  onSuccess?: () => void;
}

export function useRedirectIfAuthenticated(options?: Options) {
  const router = useRouter();
  const profileStatus = useProfileStatus();

  useEffect(() => {
    if (profileStatus.isSuccess) {
      options?.onSuccess?.() || router.replace(options?.redirectTo || "/");
    }
  }, [profileStatus.isSuccess]);

  return profileStatus;
}
