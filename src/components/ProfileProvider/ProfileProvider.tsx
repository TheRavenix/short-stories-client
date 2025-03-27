"use client";

import { useQuery } from "@tanstack/react-query";
import { PropsWithChildren, useEffect } from "react";

import { service } from "@/service";
import { useUserStore } from "@/stores/user";
import { useAuthStore } from "@/stores/auth";

interface Props extends PropsWithChildren {}

const ProfileProvider: React.FC<Props> = ({ children }) => {
  const profileQuery = useQuery({
    queryKey: ["profile"],
    queryFn: service.user.getProfile,
    staleTime: 0,
    gcTime: 0,
    retry: false,
  });
  const setFromProfile = useUserStore((s) => s.setFromProfile);
  const setIsAuthenticated = useAuthStore((s) => s.setIsAuthenticated);

  useEffect(() => {
    if (profileQuery.isSuccess) {
      setFromProfile(profileQuery.data);
      setIsAuthenticated(true);
    }
  }, [profileQuery.data, profileQuery.isSuccess]);

  return <>{children}</>;
};

export { ProfileProvider };
