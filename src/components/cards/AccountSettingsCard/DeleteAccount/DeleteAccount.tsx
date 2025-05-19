"use client";

import { DeleteAccountDialog } from "./DeleteAccountDialog";
import { DeleteAccountDrawer } from "./DeleteAccountDrawer";

import { useIsMobile } from "@/hooks/media";

interface Props {}

const DeleteAccount: React.FC<Props> = () => {
  const isMobile = useIsMobile();

  return isMobile ? <DeleteAccountDrawer /> : <DeleteAccountDialog />;
};

export { DeleteAccount };
