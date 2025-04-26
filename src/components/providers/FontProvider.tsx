"use client";

import { PropsWithChildren, useEffect } from "react";

import { useFontStore } from "@/stores";

interface Props extends PropsWithChildren {}

const FontProvider: React.FC<Props> = ({ children }) => {
  const uiFont = useFontStore((s) => s.uiFont);
  const readingFont = useFontStore((s) => s.readingFont);

  useEffect(() => {
    document.documentElement.setAttribute("data-ui-font", uiFont);
  }, [uiFont]);

  useEffect(() => {
    document.documentElement.setAttribute("data-reading-font", readingFont);
  }, [readingFont]);

  return <>{children}</>;
};

export { FontProvider };
