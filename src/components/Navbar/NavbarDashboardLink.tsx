"use client";

import { LinkProps } from "next/link";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";

import { NavbarLink } from "./NavbarLink";
import { useAuthStore } from "@/stores/auth";
import { useProfile } from "@/hooks/profile";

type Props = Omit<LinkProps, 'href'> &
  Omit<ComponentProps<'a'>, 'children'>

export function NavbarDashboardLink({ className, href, ...rest }: Props) {
  const pathName = usePathname()
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const { profile } = useProfile()

  if (!isAuthenticated || profile?.role !== 'admin') {
    return null
  }

  return (
    <NavbarLink
      className={className}
      href='/dashboard'
      data-active={pathName === '/dashboard'}
      {...rest}
    >
      Dashboard
    </NavbarLink>
  )
}
