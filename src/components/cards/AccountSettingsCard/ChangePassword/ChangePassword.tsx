"use client";

import { ChangePasswordDialog } from "./ChangePasswordDialog";
import { ChangePasswordDrawer } from "./ChangePasswordDrawer";

import { useIsMobile } from "@/hooks/media";

interface Props {}

const ChangePassword: React.FC<Props> = () => {
  const isMobile = useIsMobile();

  return isMobile ? <ChangePasswordDrawer /> : <ChangePasswordDialog />;
};

export { ChangePassword };
