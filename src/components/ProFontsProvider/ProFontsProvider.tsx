"use client";

import { PropsWithChildren, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { service } from "@/service";
import { applyDataKeyAndStyle } from "@/utils/apply-data-key-and-style";
import { applyImportUrlAndStyle } from "@/utils/apply-import-url-and-style";

interface Props extends PropsWithChildren {}

const ProFontsProvider: React.FC<Props> = ({ children }) => {
  const proFontsQuery = useQuery({
    queryKey: ["pro-fonts"],
    queryFn: service.proFont.getAll,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  useEffect(() => {
    if (proFontsQuery.data) {
      applyImportUrlAndStyle(proFontsQuery.data.src, "pro_fonts_src");
      applyDataKeyAndStyle(
        "ui-font",
        proFontsQuery.data.ui,
        "pro_ui_font_style"
      );
      applyDataKeyAndStyle(
        "reading-font",
        proFontsQuery.data.reading,
        "pro_reading_font_style"
      );
    }
  }, [proFontsQuery]);

  return <>{children}</>;
};

export { ProFontsProvider };
