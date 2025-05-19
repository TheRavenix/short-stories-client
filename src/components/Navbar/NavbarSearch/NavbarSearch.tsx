"use client";

import styles from "./NavbarSearch.module.scss";

import { NavbarSearchDrawer } from "./NavbarSearchDrawer";
import { NavbarSearchDialog } from "./NavbarSearchDialog";

import { useIsMobile } from "@/hooks/media";

interface Props {}

const NavbarSearch: React.FC<Props> = () => {
  const isMobile = useIsMobile();

  return isMobile ? <NavbarSearchDrawer /> : <NavbarSearchDialog />;
};

export { NavbarSearch };
