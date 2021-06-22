import { useQuery } from "../../common";
import { FETCH_ACCOUNT_GQL } from "../../../queries";
import { useMemo } from "react";

function getImage(idx) {
  const imgIdx = (idx % 16) + 1;
  return `/public/assets/users/users-${imgIdx}.svg`;
}
let __id = 0;
export function useFetchAccounts(filter) {
  const query = useQuery(FETCH_ACCOUNT_GQL, { variables: { filter } });
  const result = useMemo(() => {
    const data = !query.data
      ? undefined
      : query.data.accounts.edges.map((item, index) => {
          return {
            ...item.node,
            image: getImage(index),
            countryCode: item.node.address.country.code
          };
        });
    return { ...query, data };
  }, [query]);
  return result;
}
