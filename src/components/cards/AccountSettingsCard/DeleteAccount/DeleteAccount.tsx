"use client";

import { DeleteAccountDialog } from "./DeleteAccountDialog";
import { DeleteAccountDrawer } from "./DeleteAccountDrawer";
import { useIsMobile } from "@/hooks/media/use-media-utils";

export function DeleteAccount() {
  const isMobile = useIsMobile()
  return isMobile ? <DeleteAccountDrawer /> : <DeleteAccountDialog />
}
