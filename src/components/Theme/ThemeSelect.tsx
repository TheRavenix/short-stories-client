"use client";

import { useQuery } from "@tanstack/react-query";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";
import { queryClient } from "../QueryProvider";

import { useThemeStore } from "@/stores/theme";

import { removeHyphen } from "@/utils/remove-hyphen";
import { capitalize } from "@/utils/capitalize";
import { ProThemeResponse } from "@/service/pro-theme";
import { ProfileType } from "@/service/user";

interface Props {}

const ThemeSelect: React.FC<Props> = () => {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);
  const userPlan = queryClient.getQueryData<ProfileType>(["profile"])?.plan;
  const proThemes = queryClient.getQueryData<ProThemeResponse>(["pro-themes"]);

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel variant="primary">Free</SelectLabel>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
        </SelectGroup>
        {userPlan === "pro" && (
          <SelectGroup>
            <SelectLabel variant="primary">Pro</SelectLabel>
            {proThemes &&
              Object.keys(proThemes).map((name) => {
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

export { ThemeSelect };
