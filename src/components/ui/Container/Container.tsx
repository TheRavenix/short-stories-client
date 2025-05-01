import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Container.module.scss";

interface ContainerProps extends ComponentProps<"div"> {
  withPaddingBlock?: boolean;
  withContentSpacing?: boolean;
  spacing?: "none" | "lg" | "xl";
}

const Container: React.FC<ContainerProps> = ({
  className,
  withPaddingBlock = false,
  withContentSpacing = false,
  spacing = "none",
  ...rest
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        withPaddingBlock && styles.withPaddingBlock,
        withContentSpacing && styles.withContentSpacing,
        styles[spacing],
        className
      )}
      {...rest}
    />
  );
};

export { Container, type ContainerProps };
