import React, { useMemo } from "react";
import { Redirect, Route, Switch } from "react-router";

export function Routes({ routes }) {
  const elements = useMemo(() => {
    return routes.map((route) => {
      if (route.from || route.to) {
        const redirectProps = {
          to: route.to,
          exact: !!route.exact
        };
        if (route.from) {
          redirectProps.from = route.from;
        }
        return <Redirect key={route.id} {...redirectProps} />;
      }

      const routeProps = { component: route.component, exact: !!route.exact };
      if (route.path) {
        routeProps.path = route.path;
      }
      return <Route key={route.id} {...routeProps} />;
    });
  }, [routes]);
  return <Switch>{elements}</Switch>;
}
