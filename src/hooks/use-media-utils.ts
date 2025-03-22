"use client";

import { MOBILE_MAX_WIDTH } from "@/constants/media-query";
import { useMediaQuery } from "./use-media-query";

const useMinWidth = (minWidth: number, defaultValue?: boolean): boolean => {
  return useMediaQuery(`(min-width: ${minWidth}px)`, { defaultValue });
};

const useMaxWidth = (maxWidth: number, defaultValue?: boolean): boolean => {
  return useMediaQuery(`(max-width: ${maxWidth}px)`, { defaultValue });
};

const useIsMobile = (defaultValue?: boolean) => {
  return useMaxWidth(MOBILE_MAX_WIDTH, defaultValue);
};

const useIsSystemDarkTheme = (): boolean => {
  return useMediaQuery("(prefers-color-scheme: dark)");
};

export { useMinWidth, useMaxWidth, useIsMobile, useIsSystemDarkTheme };
