"use client";

import { AdminGuardOptions, useAdminGuard } from "@/hooks/auth";

interface Props extends AdminGuardOptions {}

const AdminPageGuard: React.FC<Props> = (props) => {
  useAdminGuard(props);

  return null;
};

export { AdminPageGuard };
