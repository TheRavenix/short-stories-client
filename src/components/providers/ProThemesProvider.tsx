'use client'

import { PropsWithChildren, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import { applyDataKeyAndStyle } from '@/utils/apply-data-key-and-style'
import { getAllProThemes } from '@/services/pro-theme'

type Props = PropsWithChildren

export function ProThemesProvider({ children }: Props) {
  const { data } = useQuery({
    queryKey: ['pro-themes'],
    queryFn: getAllProThemes,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60 * 24
  })

  useEffect(() => {
    if (data !== undefined) {
      applyDataKeyAndStyle('theme', data, 'pro_themes_style')
    }
  }, [data])

  return <>{children}</>
}
