import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Input.module.css";

type InputVariant = "default" | "destructive";

interface Props extends Omit<ComponentProps<"input">, "size"> {
  label: string;
  variant?: InputVariant;
}

const Input: React.FC<Props> = ({
  className,
  label,
  variant = "default",
  ...rest
}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={clsx(
          styles.input,
          variant === "destructive" && styles.inputDestructive,
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

export { Input, type InputVariant };
