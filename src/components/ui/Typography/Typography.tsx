import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Typography.module.scss";

type Transform = "capitalize" | "uppercase";

interface SharedProps {
  transform?: Transform;
}

type HeadingColor = "foreground" | "primary" | "heading";

interface H1Props extends ComponentProps<"h1">, SharedProps {
  color?: HeadingColor;
}

const H1: React.FC<H1Props> = ({
  className,
  transform,
  color = "heading",
  ...rest
}) => (
  <h1
    className={clsx(
      styles.h1,
      transform && styles[transform],
      color === "heading" ? styles.headingForeground : styles[color],
      className
    )}
    {...rest}
  />
);

interface H2Props extends ComponentProps<"h2">, SharedProps {
  color?: HeadingColor;
}

const H2: React.FC<H2Props> = ({
  className,
  transform,
  color = "foreground",
  ...rest
}) => (
  <h2
    className={clsx(
      styles.h2,
      transform && styles[transform],
      color === "heading" ? styles.headingForeground : styles[color],
      className
    )}
    {...rest}
  />
);

interface H3Props extends ComponentProps<"h3">, SharedProps {
  color?: HeadingColor;
}

const H3: React.FC<H3Props> = ({
  className,
  transform,
  color = "foreground",
  ...rest
}) => (
  <h3
    className={clsx(
      styles.h3,
      transform && styles[transform],
      color === "heading" ? styles.headingForeground : styles[color],
      className
    )}
    {...rest}
  />
);

type FontSize = "base" | "sm" | "md" | "lg" | "xl";
type FontWeight = "normal" | "medium" | "semi-bold" | "bold";
type TextColor = "foreground" | "primary" | "gray";

interface ParagraphProps extends ComponentProps<"p">, SharedProps {
  size?: FontSize;
  weight?: FontWeight;
  color?: TextColor;
}

const P: React.FC<ParagraphProps> = ({
  className,
  size = "base",
  weight = "normal",
  color = "foreground",
  transform,
  ...rest
}) => (
  <p
    className={clsx(
      styles.p,
      styles[size],
      styles[weight],
      styles[color],
      transform && styles[transform],
      className
    )}
    {...rest}
  />
);

interface SpanProps extends ComponentProps<"span">, SharedProps {
  size?: FontSize;
  weight?: FontWeight;
  color?: TextColor;
}

const Span: React.FC<SpanProps> = ({
  className,
  size = "sm",
  weight = "normal",
  color = "foreground",
  transform,
  ...rest
}) => (
  <span
    className={clsx(
      styles.span,
      styles[size],
      styles[weight],
      styles[color],
      transform && styles[transform],
      className
    )}
    {...rest}
  />
);

export { H1, H2, H3, P, Span, type ParagraphProps, type SpanProps };
