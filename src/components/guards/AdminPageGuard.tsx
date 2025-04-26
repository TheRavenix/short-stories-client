"use client";

import { useAdminGuard } from "@/hooks";

interface Props {}

const AdminPageGuard: React.FC<Props> = () => {
  useAdminGuard();

  return null;
};

export { AdminPageGuard };
