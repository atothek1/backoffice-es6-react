import React from "react";
import { Box, FontIcon, Text } from "../../common";
import { Actions } from "./Actions";

import styles from "./styles.scss";

export function Footer({ children, parentName }) {
  const hasAdditionalInfos = !!parentName;
  const parentLink = hasAdditionalInfos && (
    <Box alignItems="center" className={styles.additionlInfo}>
      <FontIcon icon="faChevronRight" size="sm" />
      <Text ellipsis className={styles.additionlInfoText}>
        {parentName}
      </Text>
    </Box>
  );
  return (
    <Box justifyContent="flex-end" className={styles.Footer}>
      {parentLink}
      <Actions>{children}</Actions>
    </Box>
  );
}
