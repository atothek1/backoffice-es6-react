import React from "react";
import { Box, Text } from "../../common";

import styles from "./styles.scss";

export function Info({ type, name, location, countryCode }) {
  return (
    <Box column className={styles.Info}>
      <Text as="h3" ellipsis>
        {name}
      </Text>
      <Box justifyContent="space-between">
        <Text>{type}</Text>
        <Text>
          {location}&nbsp;{countryCode}
        </Text>
      </Box>
    </Box>
  );
}
