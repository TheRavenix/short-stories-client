import clsx from "clsx";

import styles from "./Container.module.scss";

import { ContainerProps } from "./Container";

interface Props extends ContainerProps {}

const CompactContainer: React.FC<Props> = ({
  className,
  withPaddingBlock = false,
  withContentSpacing = false,
  spacing = "none",
  ...rest
}) => {
  return (
    <div
      className={clsx(
        styles.compactContainer,
        withPaddingBlock && styles.withPaddingBlock,
        withContentSpacing && styles.withContentSpacing,
        styles[spacing],
        className
      )}
      {...rest}
    />
  );
};

export { CompactContainer };
