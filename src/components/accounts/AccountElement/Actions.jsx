import React, { useState, useCallback } from "react";

import { Button, FontIcon } from "../../common";
import { ContextActions } from "../../core/ContextActions";

import styles from "./styles.scss";

export function Actions({ children }) {
  const [isContextOpen, setIsContextOpen] = useState(false);
  const handleClose = useCallback(() => {
    setIsContextOpen(!isContextOpen);
  }, [isContextOpen, setIsContextOpen]);

  return (
    <React.Fragment>
      <Button variant="link" onClick={handleClose}>
        <FontIcon icon="faEllipsisH" size="lg" />
      </Button>
      {isContextOpen && (
        <ContextActions
          closeHandler={handleClose}
          className={styles.ContextActions}
        >
          {children}
        </ContextActions>
      )}
    </React.Fragment>
  );
}
