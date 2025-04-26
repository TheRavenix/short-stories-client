"use client";

import { useRedirectIfAuthenticated } from "@/hooks";

interface Props {}

const AuthPageGuard: React.FC<Props> = () => {
  useRedirectIfAuthenticated();

  return null;
};

export { AuthPageGuard };
