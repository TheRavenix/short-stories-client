"use client";

import { PropsWithChildren, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { applyImportUrlAndStyle } from "@/utils/apply-import-url-and-style";
import { applyDataKeyAndStyle } from "@/utils/apply-data-key-and-style";
import { getAllProFonts } from "@/services/pro-font";

type Props = PropsWithChildren

export function ProFontsProvider({ children }: Props) {
  const { data } = useQuery({
    queryKey: ['pro-fonts'],
    queryFn: getAllProFonts,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60 * 24
  })

  useEffect(() => {
    if (data !== undefined) {
      applyImportUrlAndStyle(data.src, 'pro_fonts_src');
      applyDataKeyAndStyle('ui-font', data.ui, 'pro_ui_font_style');
      applyDataKeyAndStyle(
        'reading-font',
        data.reading,
        'pro_reading_font_style'
      )
    }
  }, [data])

  return <>{children}</>
}
