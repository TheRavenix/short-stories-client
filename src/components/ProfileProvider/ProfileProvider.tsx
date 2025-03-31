"use client";

import { useQuery } from "@tanstack/react-query";
import { PropsWithChildren, useEffect } from "react";

import { service } from "@/service";
import { useAuthStore } from "@/stores/auth";

interface Props extends PropsWithChildren {}

const ProfileProvider: React.FC<Props> = ({ children }) => {
  const profileQuery = useQuery({
    queryKey: ["profile"],
    queryFn: service.user.getProfile,
    staleTime: Infinity,
    gcTime: Infinity,
  });
  const setIsAuthenticated = useAuthStore((s) => s.setIsAuthenticated);

  useEffect(() => {
    if (profileQuery.isSuccess) {
      setIsAuthenticated(true);
    }
  }, [profileQuery]);

  return <>{children}</>;
};

export { ProfileProvider };
