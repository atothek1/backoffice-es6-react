import React from "react";
import { List } from "../../common";

import { NavigationElement } from "./NavigationElement";

export function Navigation({ data }) {
  return <List data={data} component={NavigationElement} />;
}
