import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Input.module.scss";

type Variant = "default" | "destructive";

type Size = "default" | "sm" | "md" | "lg";

interface Props extends Omit<ComponentProps<"input">, "size"> {
  label: string;
  variant?: Variant;
  size?: Size;
}

const Input: React.FC<Props> = ({
  className,
  label,
  variant = "default",
  size = "default",
  ...rest
}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={clsx(
          styles.input,
          variant === "destructive" && styles.inputDestructive,
          styles[size],
          className
        )}
        placeholder=" "
        {...rest}
      />
      <label
        className={clsx(
          styles.label,
          variant === "destructive" && styles.labelDestructive
        )}
      >
        {label}
      </label>
    </div>
  );
};

export { Input };
