"use client";

import { ProFontResponse } from "@/service/pro-font";
import { queryClient } from "../QueryProvider";
import { FontSelect } from "./FontSelect";

import { useFontStore } from "@/stores/font";

interface Props {}

const UiFontSelect: React.FC<Props> = () => {
  const uiFont = useFontStore((s) => s.uiFont);
  const setUiFont = useFontStore((s) => s.setUiFont);
  const proUiFonts = queryClient.getQueryData<ProFontResponse>([
    "pro-fonts",
  ])?.ui;

  return (
    <FontSelect
      value={uiFont}
      onValueChange={setUiFont}
      proSelectItems={proUiFonts}
    />
  );
};

export { UiFontSelect };
