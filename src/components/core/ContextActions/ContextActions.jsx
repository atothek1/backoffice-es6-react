import React, { useRef } from "react";
import cn from "classnames";
import { useOnClickOutside } from "../../../hooks/common";
import { Box } from "../../common";

import styles from "./styles.scss";

export function ContextActions({ children, closeHandler, className }) {
  const ref = useRef();
  useOnClickOutside(ref, (event) => {
    closeHandler();
  });
  const classNames = cn(styles.ContextActions, className);
  return (
    <Box ref={ref} justifyContent="space-between" className={classNames}>
      {children}
    </Box>
  );
}
