"use client";

import styles from "./EditName.module.scss";

import { EditNameDialog } from "./EditNameDialog";
import { EditNameDrawer } from "./EditNameDrawer";

import { useIsMobile } from "@/hooks";

interface Props {}

const EditName: React.FC<Props> = () => {
  const isMobile = useIsMobile();

  return isMobile ? <EditNameDrawer /> : <EditNameDialog />;
};

export { EditName };
