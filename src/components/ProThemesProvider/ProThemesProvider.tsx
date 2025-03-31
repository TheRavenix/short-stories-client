"use client";

import { PropsWithChildren, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { service } from "@/service";
import { applyDataKeyAndStyle } from "@/utils/apply-data-key-and-style";

interface Props extends PropsWithChildren {}

const ProThemesProvider: React.FC<Props> = ({ children }) => {
  const proThemesQuery = useQuery({
    queryKey: ["pro-themes"],
    queryFn: service.proTheme.getAll,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  useEffect(() => {
    if (proThemesQuery.data) {
      applyDataKeyAndStyle("theme", proThemesQuery.data, "pro_themes_style");
    }
  }, [proThemesQuery]);

  return <>{children}</>;
};

export { ProThemesProvider };
