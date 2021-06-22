import React, { useMemo } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router";
import { AccountList } from "../AccountList";
import { useSubNavigation } from "../../context";
import { getNavigation } from "./navigation";

export function Accounts() {
  const { path, url } = useRouteMatch();
  const navigation = useMemo(() => {
    return getNavigation(url);
  }, [url]);
  useSubNavigation(navigation, path);
  return (
    <Switch>
      <Route exact path={`${url}/:agencyFilter`} component={AccountList} />
      <Redirect exact to={`${url}/all`} from={`${url}`} />
    </Switch>
  );
}
