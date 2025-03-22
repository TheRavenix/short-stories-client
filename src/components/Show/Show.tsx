import { JSX, memo } from "react";

interface Props {
  when: boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

const Show = memo(({ when, fallback = null, children }: Props) => {
  if (when) return children as JSX.Element;
  return fallback as JSX.Element;
});

export { Show };
