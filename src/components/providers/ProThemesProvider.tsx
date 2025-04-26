"use client";

import { PropsWithChildren, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { applyDataKeyAndStyle } from "@/utils";
import { services } from "@/services";

interface Props extends PropsWithChildren {}

const ProThemesProvider: React.FC<Props> = ({ children }) => {
  const { data } = useQuery({
    queryKey: ["pro-themes"],
    queryFn: services.proTheme.getAll,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60 * 24,
  });

  useEffect(() => {
    if (data) {
      applyDataKeyAndStyle("theme", data, "pro_themes_style");
    }
  }, [data]);

  return <>{children}</>;
};

export { ProThemesProvider };
