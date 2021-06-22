import { useEffect, useState } from "react";

const initState = {
  loading: true,
  data: null,
  error: false
};
let prevFilter = null;
export function useQuery(query, options) {
  const { filter } = options.variables;
  const [state, setState] = useState(initState);

  useEffect(() => {
    if (prevFilter !== null && prevFilter !== filter) {
      setState(initState);
    }

    prevFilter = filter;

    const id = setTimeout(() => {
      setState({
        loading: false,
        data: query,
        error: false
      });
    }, 1500);
    return () => clearTimeout(id);
  }, [filter, query, setState]);
  return state;
}

/*fetch(query).then(async (response) => {
      setState({
        loading: false,
        data: await response.json(),
        error: false
      });
    });*/
