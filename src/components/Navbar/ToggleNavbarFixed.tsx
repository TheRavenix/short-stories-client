"use client";

import { useEffect } from "react";

interface Props {
  toggleTo?: boolean;
  toggleBackOnUnMount?: boolean;
}

const ToggleNavbarFixed: React.FC<Props> = ({
  toggleTo = false,
  toggleBackOnUnMount = true,
}) => {
  useEffect(() => {
    const navBar = document.querySelector("[data-nav-fixed]");

    if (!(navBar instanceof Element)) return;

    navBar.setAttribute("data-nav-fixed", String(toggleTo));

    return () => {
      if (toggleBackOnUnMount) {
        navBar.setAttribute("data-nav-fixed", String(!toggleTo));
      }
    };
  }, []);

  return null;
};

export { ToggleNavbarFixed };
