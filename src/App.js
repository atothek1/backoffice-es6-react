import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/core/Layout";
import cn from "classnames";

import styles from "./styles/index.scss";
import { getRoot } from "./utils/dom";
import { NavigationProvider } from "./context";
import { navigation } from "./resources/navigation";

export function App() {
  useEffect(() => {
    const root = getRoot();
    root.classList.add(cn(styles.App));
  });
  return (
    <Router>
      <NavigationProvider data={navigation}>
        <Layout />
      </NavigationProvider>
    </Router>
  );
}
