"use client";

import { useAdminGuard } from "@/hooks/auth";

interface Props {}

const AdminPageGuard: React.FC<Props> = () => {
  useAdminGuard();

  return null;
};

export { AdminPageGuard };
