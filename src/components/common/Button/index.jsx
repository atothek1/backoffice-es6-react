import React from "react";
import cn from "classnames";

import styles from "./styles.scss";

export function Button({ children, variant, className, ...restProps }) {
  const classNames = cn(
    styles.Button,
    {
      [styles.link]: variant === "link"
    },
    className
  );
  return (
    <button className={classNames} {...restProps}>
      {children}
    </button>
  );
}
