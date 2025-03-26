"use client";

import styles from "./ChangePassword.module.scss";

import { ChangePasswordDialog } from "./ChangePasswordDialog";
import { ChangePasswordDrawer } from "./ChangePasswordDrawer";

import { useIsMobile } from "@/hooks/use-media-utils";

interface Props {}

const ChangePassword: React.FC<Props> = () => {
  const isMobile = useIsMobile();

  return isMobile ? <ChangePasswordDrawer /> : <ChangePasswordDialog />;
};

export { ChangePassword };
