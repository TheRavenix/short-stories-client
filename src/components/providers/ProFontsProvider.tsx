"use client";

import { PropsWithChildren, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { applyImportUrlAndStyle } from "@/utils/apply-import-url-and-style";
import { applyDataKeyAndStyle } from "@/utils/apply-data-key-and-style";
import { services } from "@/services";

interface Props extends PropsWithChildren {}

const ProFontsProvider: React.FC<Props> = ({ children }) => {
  const { data } = useQuery({
    queryKey: ["pro-fonts"],
    queryFn: services.proFont.getAll,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60 * 24,
  });

  useEffect(() => {
    if (data) {
      applyImportUrlAndStyle(data.src, "pro_fonts_src");
      applyDataKeyAndStyle("ui-font", data.ui, "pro_ui_font_style");
      applyDataKeyAndStyle(
        "reading-font",
        data.reading,
        "pro_reading_font_style"
      );
    }
  }, [data]);

  return <>{children}</>;
};

export { ProFontsProvider };
