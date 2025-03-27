"use client";

import { useRedirectIfAuthenticated } from "@/hooks/auth";

interface Props {}

const AuthPageGuard: React.FC<Props> = () => {
  useRedirectIfAuthenticated();

  return null;
};

export { AuthPageGuard };
