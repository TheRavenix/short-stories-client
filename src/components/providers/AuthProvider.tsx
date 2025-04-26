"use client";

import { PropsWithChildren, useEffect } from "react";

import { useAuthStore } from "@/stores";
import { useProfile } from "@/hooks";

interface Props extends PropsWithChildren {}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const { profile, isSuccess } = useProfile();
  const setIsAuthenticated = useAuthStore((s) => s.setIsAuthenticated);

  useEffect(() => {
    if (isSuccess && profile) {
      setIsAuthenticated(true);
    } else setIsAuthenticated(false);
  }, [profile, isSuccess]);

  return <>{children}</>;
};

export { AuthProvider };
