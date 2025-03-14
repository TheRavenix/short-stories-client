import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Container.module.scss";

interface Props extends ComponentProps<"div"> {
  withPaddingBlock?: boolean;
}

const Container: React.FC<Props> = ({
  className,
  withPaddingBlock = false,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        withPaddingBlock && styles.withPaddingBlock,
        className
      )}
      {...rest}
    />
  );
};

export { Container };
