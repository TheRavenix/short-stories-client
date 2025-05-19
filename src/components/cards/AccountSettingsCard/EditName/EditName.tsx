"use client";

import { EditNameDialog } from "./EditNameDialog";
import { EditNameDrawer } from "./EditNameDrawer";

import { useIsMobile } from "@/hooks/media";

interface Props {}

const EditName: React.FC<Props> = () => {
  const isMobile = useIsMobile();

  return isMobile ? <EditNameDrawer /> : <EditNameDialog />;
};

export { EditName };
