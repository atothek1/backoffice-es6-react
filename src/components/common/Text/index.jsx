import React from "react";
import cn from "classnames";

import styles from "./styles.scss";

export function Text({
  children,
  as = "span",
  className = null,
  ellipsis = false
}) {
  const Comp = as;
  const classNames = cn(
    styles.Text,
    {
      [styles.ellipsis]: ellipsis
    },
    className
  );
  return <Comp className={classNames}>{children}</Comp>;
}
