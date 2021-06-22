import React from "react";
import cn from "classnames";

import { Box, Text } from "../../common";

export function Header() {
  return (
    <React.Fragment>
      <Box>
        <Box>
          <Text as="h1">Header Left</Text>
        </Box>
        <Box>
          <Text>Header Right</Text>
        </Box>
      </Box>
      <Box>
        <Text>Header Bottom</Text>
      </Box>
    </React.Fragment>
  );
}
