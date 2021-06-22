import React from "react";
import cn from "classnames";
import { useNavigationContext } from "../../../context";
import { Box } from "../../common";
import { Navigation } from "../Navigation";
import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";

import styles from "./styles.scss";
import { getRoutes } from "../../../resources/routes";
import { useRoutes } from "../../../hooks/common/useRoutes";

export function Layout() {
  const navigation = useNavigationContext().getData();
  const routes = getRoutes();
  // const { navigation: n, routes: r } = useRoutes(routes);

  return (
    <React.Fragment>
      <Box as="nav" column className={cn(styles.Navigation)}>
        <Navigation data={navigation} />
      </Box>
      <Box as="section" column>
        <Box column as="header" className={cn(styles.Header)}>
          <Header />
        </Box>
        <Box as="main" className={cn(styles.Main)}>
          <Main routes={routes} />
        </Box>
        <Box column as="footer" className={cn(styles.Footer)}>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}
