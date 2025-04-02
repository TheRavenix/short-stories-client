"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useProfileStatus } from "../profile";

interface Options {
  redirectTo?: string;
  onError?: () => void;
}

export function useAdminGuard(options?: Options) {
  const router = useRouter();
  const profileStatus = useProfileStatus();

  useEffect(() => {
    if (
      profileStatus.isError ||
      (profileStatus.isSuccess && profileStatus.status?.role !== "admin")
    ) {
      options?.onError?.() || router.replace(options?.redirectTo || "/");
    }
  }, [profileStatus.status, profileStatus.isError, profileStatus.isSuccess]);

  return profileStatus;
}
