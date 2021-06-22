import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import { useSubNavigation } from "../../context";
import { Accounts } from "../Accounts";
import { Birthdays } from "../Birthdays";
import { Persons } from "../Persons";
import { navigation } from "./navigaton";

export function CRM() {
  const { path, url } = useRouteMatch();
  useSubNavigation(navigation, path);

  return (
    <Switch>
      <Route path={`${url}/accounts`} component={Accounts} />
      <Route path={`${url}/persons`} component={Persons} />
      <Route path={`${url}/birthdays`} component={Birthdays} />
      <Redirect exact from={url} to={`${url}/accounts`} />
    </Switch>
  );
}
