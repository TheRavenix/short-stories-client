"use client";

import styles from "./NavbarSearch.module.scss";

import { NavbarSearchDrawer } from "./NavbarSearchDrawer";
import { NavbarSearchDialog } from "./NavbarSearchDialog";

import { useIsMobile } from "@/hooks/use-media-utils";

interface Props {}

const NavbarSearch: React.FC<Props> = () => {
  const isMobile = useIsMobile();

  return isMobile ? <NavbarSearchDrawer /> : <NavbarSearchDialog />;
};

export { NavbarSearch };
