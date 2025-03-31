"use client";

import { LinkProps } from "next/link";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.scss";

import { NavbarLink } from "./NavbarLink";
import { queryClient } from "../QueryProvider";

import { useAuthStore } from "@/stores/auth";
import { ProfileType } from "@/service/user";

type Props = Omit<LinkProps, "href"> &
  Omit<ComponentProps<"a">, "children"> & {};

const NavbarDashboardLink: React.FC<Props> = ({ className, href, ...rest }) => {
  const pathName = usePathname();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const userRole = queryClient.getQueryData<ProfileType>(["profile"])?.role;

  if (!isAuthenticated || userRole !== "admin") return null;

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
