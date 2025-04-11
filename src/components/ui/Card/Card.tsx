import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Card.module.scss";
import { P, Span } from "../Typography";

type CardVariant = "default" | "primary";

interface CardProps extends ComponentProps<"div"> {
  variant?: CardVariant;
  withPadding?: boolean;
}

const Card: React.FC<CardProps> = ({
  className,
  variant = "default",
  withPadding = false,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        styles.card,
        styles[variant],
        withPadding && styles.withPadding,
        className
      )}
      {...rest}
    />
  );
};

interface CardTitleProps extends ComponentProps<"span"> {}

const CardTitle: React.FC<CardTitleProps> = ({ className, ...rest }) => {
  return (
    <Span
      size="lg"
      weight="bold"
      transform="capitalize"
      className={clsx(styles.cardTitle, className)}
      {...rest}
    />
  );
};

interface CardDescriptionProps extends ComponentProps<"p"> {}

const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  ...rest
}) => {
  return (
    <P
      variant="gray"
      className={clsx(styles.cardDescription, className)}
      {...rest}
    />
  );
};

interface CardHeaderProps extends ComponentProps<"div"> {}

const CardHeader: React.FC<CardHeaderProps> = ({ className, ...rest }) => {
  return <div className={clsx(styles.cardHeader, className)} {...rest} />;
};

interface CardContentProps extends ComponentProps<"div"> {}

const CardContent: React.FC<CardContentProps> = ({ className, ...rest }) => {
  return <div className={clsx(styles.cardContent, className)} {...rest} />;
};

interface CardFooterProps extends ComponentProps<"div"> {}

const CardFooter: React.FC<CardFooterProps> = ({ className, ...rest }) => {
  return <div className={clsx(styles.cardFooter, className)} {...rest} />;
};

export {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
};
