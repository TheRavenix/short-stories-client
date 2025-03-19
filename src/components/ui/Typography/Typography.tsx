import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Typography.module.scss";

type Transform = "capitalize" | "uppercase";

interface SharedProps {
  transform?: Transform;
}

type HeadingVariant = "foreground" | "primary" | "heading";

interface H1Props extends ComponentProps<"h1">, SharedProps {
  variant?: HeadingVariant;
}

const H1: React.FC<H1Props> = ({
  className,
  transform,
  variant = "heading",
  ...rest
}) => (
  <h1
    className={clsx(
      styles.h1,
      transform && styles[transform],
      variant === "heading" ? styles.headingForeground : styles[variant],
      className
    )}
    {...rest}
  />
);

interface H2Props extends ComponentProps<"h2">, SharedProps {
  variant?: HeadingVariant;
}

const H2: React.FC<H2Props> = ({
  className,
  transform,
  variant = "foreground",
  ...rest
}) => (
  <h2
    className={clsx(
      styles.h2,
      transform && styles[transform],
      variant === "heading" ? styles.headingForeground : styles[variant],
      className
    )}
    {...rest}
  />
);

interface H3Props extends ComponentProps<"h3">, SharedProps {
  variant?: HeadingVariant;
}

const H3: React.FC<H3Props> = ({
  className,
  transform,
  variant = "foreground",
  ...rest
}) => (
  <h3
    className={clsx(
      styles.h3,
      transform && styles[transform],
      variant === "heading" ? styles.headingForeground : styles[variant],
      className
    )}
    {...rest}
  />
);

type FontSize = "xs" | "sm" | "base" | "lg" | "xl" | "xxl";
type FontWeight = "normal" | "medium" | "semi-bold" | "bold";
type TextVariant = "foreground" | "primary" | "gray";

interface ParagraphProps extends ComponentProps<"p">, SharedProps {
  size?: FontSize;
  weight?: FontWeight;
  variant?: TextVariant;
}

const P: React.FC<ParagraphProps> = ({
  className,
  size = "base",
  weight = "normal",
  variant = "foreground",
  transform,
  ...rest
}) => (
  <p
    className={clsx(
      styles.p,
      styles[size],
      styles[weight],
      styles[variant],
      transform && styles[transform],
      className
    )}
    {...rest}
  />
);

interface SpanProps extends ComponentProps<"span">, SharedProps {
  size?: FontSize;
  weight?: FontWeight;
  variant?: TextVariant;
}

const Span: React.FC<SpanProps> = ({
  className,
  size = "sm",
  weight = "normal",
  variant = "foreground",
  transform,
  ...rest
}) => (
  <span
    className={clsx(
      styles.span,
      styles[size],
      styles[weight],
      styles[variant],
      transform && styles[transform],
      className
    )}
    {...rest}
  />
);

export { H1, H2, H3, P, Span, type ParagraphProps, type SpanProps };
