import React, { createContext, useContext } from "react";
import { layoutContext } from "./context";

export function useLayoutContext() {
  return useContext(layoutContext);
}
