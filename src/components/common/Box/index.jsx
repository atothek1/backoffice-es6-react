import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./styles.scss";

function InnerBox(
  {
    as = "div",
    children,
    column = false,
    justifyContent = null,
    alignItems = null,
    className = null
  },
  ref
) {
  // validate as prop to be a valid tag name or comp type
  const Comp = as;
  const justifyStyle = !!justifyContent && `justify__${justifyContent}`;
  const alignStyle = !!alignItems && `align__${alignItems}`;
  const classes = cn(
    styles.Box,
    {
      [styles.col]: column,
      [styles[justifyStyle]]: justifyContent !== null,
      [styles[alignStyle]]: alignItems !== null
    },
    className
  );
  return (
    <Comp ref={ref} className={classes}>
      {children}
    </Comp>
  );
}
export const Box = forwardRef(InnerBox);
