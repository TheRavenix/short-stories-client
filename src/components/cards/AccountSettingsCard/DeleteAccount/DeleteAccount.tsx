"use client";

import { DeleteAccountDialog } from "./DeleteAccountDialog";
import { DeleteAccountDrawer } from "./DeleteAccountDrawer";

import { useIsMobile } from "@/hooks";

interface Props {}

const DeleteAccount: React.FC<Props> = () => {
  const isMobile = useIsMobile();

  return isMobile ? <DeleteAccountDrawer /> : <DeleteAccountDialog />;
};

export { DeleteAccount };
