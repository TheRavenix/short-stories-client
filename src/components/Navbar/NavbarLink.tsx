"use client";

import Link, { LinkProps } from "next/link";
import { ComponentProps } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.scss";

type Props = LinkProps & ComponentProps<"a"> & {};

const NavbarLink: React.FC<Props> = ({ className, href, ...rest }) => {
  const pathName = usePathname();

  return (
    <Link
      className={clsx(styles.link, className)}
      href={href}
      data-active={pathName === href}
      {...rest}
    />
  );
};

export { NavbarLink };
