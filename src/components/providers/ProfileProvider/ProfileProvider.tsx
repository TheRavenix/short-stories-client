"use client";

import { PropsWithChildren, useEffect } from "react";

import { useAuthStore } from "@/stores/auth";
import { useProfile } from "@/hooks/profile";

interface Props extends PropsWithChildren {}

const ProfileProvider: React.FC<Props> = ({ children }) => {
  const { profile, isSuccess } = useProfile();
  const setIsAuthenticated = useAuthStore((s) => s.setIsAuthenticated);

  useEffect(() => {
    if (isSuccess) {
      setIsAuthenticated(true);
    }
  }, [profile, isSuccess]);

  return <>{children}</>;
};

export { ProfileProvider };
