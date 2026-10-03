"use client";

import { EditNameDialog } from "./EditNameDialog";
import { EditNameDrawer } from "./EditNameDrawer";
import { useIsMobile } from "@/hooks/media/use-media-utils";

export function EditName() {
  const isMobile = useIsMobile()
  return isMobile ? <EditNameDrawer /> : <EditNameDialog />
}
