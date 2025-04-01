"use client";

import { SelectProps } from "@radix-ui/react-select";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { queryClient } from "@/components/QueryProvider";

import { useFontStore } from "@/stores/font";

import { removeHyphen } from "@/utils/remove-hyphen";
import { capitalize } from "@/utils/capitalize";
import { ProfileType } from "@/service/user";
import { ProFontResponse } from "@/service/pro-font";

interface Props extends SelectProps {}

const UiFontSelect: React.FC<Props> = (props) => {
  const userPlan = queryClient.getQueryData<ProfileType>(["profile"])?.plan;
  const uiFont = useFontStore((s) => s.uiFont);
  const setUiFont = useFontStore((s) => s.setUiFont);
  const proUiFonts = queryClient.getQueryData<ProFontResponse>([
    "pro-fonts",
  ])?.ui;

  return (
    <Select value={uiFont} onValueChange={setUiFont}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel variant="primary">Free</SelectLabel>
          <SelectItem value="inter">Inter</SelectItem>
          <SelectItem value="source-sans3">Source Sans 3</SelectItem>
        </SelectGroup>
        {userPlan === "pro" && (
          <SelectGroup>
            <SelectLabel variant="primary">Pro</SelectLabel>
            {proUiFonts &&
              Object.keys(proUiFonts).map((name) => {
                return (
                  <SelectItem key={name} value={name}>
                    {removeHyphen(capitalize(name))}
                  </SelectItem>
                );
              })}
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  );
};

export { UiFontSelect };
