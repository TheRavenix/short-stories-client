'use client'

import { useMediaQuery } from './use-media-query'
import { MOBILE_MAX_WIDTH } from '@/constants/media-query'

export function useMinWidth(minWidth: number, defaultValue?: boolean) {
  return useMediaQuery(`(min-width: ${minWidth}px)`, { defaultValue })
}

export function useMaxWidth(maxWidth: number, defaultValue?: boolean) {
  return useMediaQuery(`(max-width: ${maxWidth}px)`, { defaultValue })
}

export function useIsMobile(defaultValue?: boolean) {
  return useMaxWidth(MOBILE_MAX_WIDTH, defaultValue)
}

export function useIsSystemDarkTheme() {
  return useMediaQuery('(prefers-color-scheme: dark)')
}
