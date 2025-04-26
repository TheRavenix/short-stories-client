"use client";

import { LinkProps } from "next/link";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.scss";

import { NavbarLink } from "./NavbarLink";

import { useAuthStore } from "@/stores";

type Props = Omit<LinkProps, "href"> &
  Omit<ComponentProps<"a">, "children"> & {};

const NavbarSettingsLink: React.FC<Props> = ({ className, ...rest }) => {
  const pathName = usePathname();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  if (!isAuthenticated) return null;

  return (
    <NavbarLink
      className={className}
      href="/settings"
      data-active={pathName === "/settings"}
      {...rest}
    >
      Settings
    </NavbarLink>
  );
};

export { NavbarSettingsLink };
