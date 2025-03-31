"use client";

import { useQuery } from "@tanstack/react-query";

import styles from "./ThemeToggle.module.scss";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";

import { useThemeStore } from "@/stores/theme";
import { useUserStore } from "@/stores/user";
import { service } from "@/service";
import { removeHyphen } from "@/utils/remove-hyphen";
import { capitalize } from "@/utils/capitalize";

interface Props {}

const ThemeToggleSelect: React.FC<Props> = () => {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);
  const userPlan = useUserStore((s) => s.plan);
  const proThemesNamesQuery = useQuery({
    queryKey: ["pro-themes-names"],
    queryFn: service.proTheme.getNames,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger size="sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Free</SelectLabel>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
        </SelectGroup>
        {userPlan === "pro" && (
          <SelectGroup>
            <SelectLabel>Pro</SelectLabel>
            {proThemesNamesQuery.data?.map((name) => {
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

export { ThemeToggleSelect };
