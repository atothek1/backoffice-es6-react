import React, { useCallback } from "react";
import cn from "classnames";
import { Button, FontIcon } from "../../common";
import { getIconByType } from "./utils";

import styles from "./styles.scss";

export function Action({ type, onClick }) {
  const icon = getIconByType(type);
  const handleClick = useCallback(
    (event) => {
      if (onClick && typeof onClick === "function") {
        onClick(event, type);
      }
    },
    [type, onClick]
  );
  return (
    <Button variant="link" onClick={handleClick} className={cn(styles.Action)}>
      <FontIcon icon={icon} />
    </Button>
  );
}
