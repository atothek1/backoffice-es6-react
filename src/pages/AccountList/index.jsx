import React from "react";
import cn from "classnames";
import { useParams } from "react-router";
import { List, Loader, AccountElement } from "../../components";
import { useFetchAccounts } from "../../hooks/services";

import styles from "./styles.scss";

export function AccountList() {
  const { agencyFilter } = useParams();
  const { loading, data } = useFetchAccounts(agencyFilter);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={cn(styles.AccountList)}>
      <List data={data} component={AccountElement} />
    </div>
  );
}
