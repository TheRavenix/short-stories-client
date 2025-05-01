"use client";

import { EditEmailDialog } from "./EditEmailDialog";
import { EditEmailDrawer } from "./EditEmailDrawer";

import { useIsMobile } from "@/hooks";

interface Props {}

const EditEmail: React.FC<Props> = () => {
  const isMobile = useIsMobile();

  return isMobile ? <EditEmailDrawer /> : <EditEmailDialog />;
};

export { EditEmail };
