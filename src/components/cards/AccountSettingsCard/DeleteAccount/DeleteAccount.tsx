"use client";

import styles from "./DeleteAccount.module.scss";

import { DeleteAccountDialog } from "./DeleteAccountDialog";
import { DeleteAccountDrawer } from "./DeleteAccountDrawer";

import { useIsMobile } from "@/hooks/use-media-utils";

interface Props {}

const DeleteAccount: React.FC<Props> = () => {
  const isMobile = useIsMobile();

  return isMobile ? <DeleteAccountDrawer /> : <DeleteAccountDialog />;
};

export { DeleteAccount };
