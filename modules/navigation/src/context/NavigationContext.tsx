import React, { createContext } from "react";
import { Navigation, RouteConfig } from "../types";

const navigationContextValue = {};

const navigationContext = createContext(navigationContextValue);
const { Provider, Consumer } = navigationContext;

export function useNavigation(config, url) {
  // generates Routes and navigation which can be used
}
