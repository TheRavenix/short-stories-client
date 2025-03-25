"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { Tabs } from "../ui/Tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Tabs> {
  paramKey?: string;
}

const SearchParamTabs: React.FC<Props> = ({
  defaultValue,
  paramKey = "tab",
  ...rest
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(
    () => searchParams.get(paramKey) || defaultValue || ""
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set(paramKey, currentTab);
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [currentTab, paramKey, router, searchParams]);

  return <Tabs value={currentTab} onValueChange={setCurrentTab} {...rest} />;
};

export { SearchParamTabs };
