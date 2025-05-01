import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Form.module.scss";

interface Props extends ComponentProps<"form"> {
  preventDefault?: boolean;
  spacing?: "sm" | "md";
}

const Form: React.FC<Props> = ({
  className,
  preventDefault = true,
  spacing = "sm",
  onSubmit,
  ...rest
}) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (preventDefault) e.preventDefault();
    if (typeof onSubmit === "function") {
      onSubmit(e);
    }
  }

  return (
    <form
      className={clsx(styles.form, styles[spacing], className)}
      onSubmit={handleSubmit}
      {...rest}
    />
  );
};

export { Form };
