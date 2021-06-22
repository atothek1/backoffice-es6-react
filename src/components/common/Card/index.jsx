import React from "react";
import cn from "classnames";
import { Box } from "../Box";

import styles from "./styles.scss";

export function Card({ children }) {
  return (
    <Box column className={cn(styles.Card)}>
      {children}
    </Box>
  );
}
