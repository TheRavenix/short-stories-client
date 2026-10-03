"use client";

import { useEffect } from "react";

type Props = {
  toggleTo?: boolean
  toggleBackOnUnMount?: boolean
}

export function ToggleNavbarFixed({
  toggleTo = false,
  toggleBackOnUnMount = true
}: Props) {
  useEffect(() => {
    const navBar = document.querySelector('[data-nav-fixed]')

    if (!(navBar instanceof Element)) {
      return
    }

    navBar.setAttribute('data-nav-fixed', String(toggleTo))

    return () => {
      if (toggleBackOnUnMount !== undefined && toggleBackOnUnMount) {
        navBar.setAttribute('data-nav-fixed', String(!toggleTo))
      }
    }
  }, [])

  return null
}
