"use client";

import { PropsWithChildren, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { service } from "@/service";
import { applyThemes } from "@/utils/apply-themes";

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
      applyThemes(proThemesQuery.data, "pro_themes_style");
    }
  }, [proThemesQuery]);

  return <>{children}</>;
};

export { ProThemesProvider };
