import React from "react";
import cn from "classnames";

import { Box, Text } from "..";
import { FontIcon } from "../FontIcon";

import styles from "./styles.scss";

export function Loader() {
  return (
    <Box
      column
      justifyContent="center"
      alignItems="center"
      className={cn(styles.Loader)}
    >
      <FontIcon icon="faSpinner" />
      <Text as="p">Loading</Text>
    </Box>
  );
}
