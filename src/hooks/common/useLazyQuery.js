import { useEffect, useRef, useState } from "react";

export function useLazyQuery(query, options) {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: false
  });
  const requestRef = useRef();
  function getRequestRef() {
    if (!requestRef.current) {
      requestRef.current = {
        state,
        setState,
        execute: (data) => {
          requestRef.current.setState({
            ...state,
            error: false,
            loading: true
          });
          setTimeout(() => {
            requestRef.current.setState({
              error: false,
              data: { status: "SUCCESS" },
              loading: false
            });
          }, 1000);
        },
        dispose: () => {}
      };
    }
    return requestRef.current;
  }
  const request = getRequestRef();
  useEffect(() => request.dispose);
  return [request.execute, state];
}
