import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export function FontIcon({ icon, ...restProps }) {
  if (!Icons[icon]) {
    return null;
  }
  return <FontAwesomeIcon icon={Icons[icon]} {...restProps} />;
}
