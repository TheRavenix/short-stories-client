"use client";

import { LinkProps } from "next/link";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.scss";

import { NavbarLink } from "./NavbarLink";

import { useAuthStore } from "@/stores/auth";
import { useProfile } from "@/hooks/profile";

type Props = Omit<LinkProps, "href"> &
  Omit<ComponentProps<"a">, "children"> & {};

const NavbarDashboardLink: React.FC<Props> = ({ className, href, ...rest }) => {
  const pathName = usePathname();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const { profile } = useProfile();

  if (!isAuthenticated || profile?.role !== "admin") return null;

  return (
    <NavbarLink
      className={className}
      href="/dashboard"
      data-active={pathName === "/dashboard"}
      {...rest}
    >
      Dashboard
    </NavbarLink>
  );
};

export { NavbarDashboardLink };
