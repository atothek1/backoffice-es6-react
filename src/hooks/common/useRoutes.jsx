import React, { useMemo } from "react";
import { useRouteMatch } from "react-router";
import { getNavigationFromRoutes } from "../../utils";
import { Routes } from "../../components";

export function useRoutes(routesConfig) {
  const { url } = useRouteMatch();
  const navigation = useMemo(() => {
    return getNavigationFromRoutes(routesConfig, url);
  }, [routesConfig, url]);
  const routes = <Routes routes={routesConfig} />;
  return { routes, navigation };
}
