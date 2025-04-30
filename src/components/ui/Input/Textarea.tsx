import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Input.module.scss";

import { InputVariant } from ".";

interface Props extends ComponentProps<"textarea"> {
  label: string;
  variant?: InputVariant;
}

const Textarea: React.FC<Props> = ({ className, label, variant, ...rest }) => {
  return (
    <div className={styles.inputContainer}>
      <textarea
        className={clsx(
          styles.textarea,
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

export { Textarea };
