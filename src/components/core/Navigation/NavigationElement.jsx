import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import cn from "classnames";
import { Box, FontIcon, Text } from "../../common";
import { Navigation } from "./index";

import styles from "./styles.scss";

export function NavigationElement({ item, index }) {
  const { id, path, label, icon = "faHashtag", paths, roles } = item;

  const active = !!useRouteMatch(path);

  const subNavigation = paths ? (
    <Box className={cn(styles.subNavigation)} column>
      <Navigation data={paths} />
    </Box>
  ) : null;

  const linkClassNames = cn(styles.NavigationElement, {
    [styles.active]: active
  });

  const iconClassNames = cn(styles.icon, {
    [styles.blankIcon]: icon === "faHashtag"
  });

  return (
    <React.Fragment>
      <Link to={path} className={linkClassNames}>
        <FontIcon icon={icon} size="1x" className={iconClassNames} />
        <Text>{label}</Text>
      </Link>
      {subNavigation}
    </React.Fragment>
  );
}
