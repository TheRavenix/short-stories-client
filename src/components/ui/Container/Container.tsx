import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Container.module.scss";

interface Props extends ComponentProps<"div"> {
  withPaddingBlock?: boolean;
  withContentSpacing?: boolean;
}

const Container: React.FC<Props> = ({
  className,
  withPaddingBlock = false,
  withContentSpacing = false,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        withPaddingBlock && styles.withPaddingBlock,
        withContentSpacing && styles.withContentSpacing,
        className
      )}
      {...rest}
    />
  );
};

export { Container };
