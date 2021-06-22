import React, {
  createContext,
  useEffect,
  useMemo,
  useContext,
  useReducer,
  useState,
  useRef
} from "react";
import { matchPath } from "react-router";

const context = createContext({});
const { Consumer, Provider } = context;

let addSubNavigation = null;
let removeSubNavigation = null;

function addSubNavigationByPath(data, paths, path) {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    if (item.paths && item.paths.length > 0) {
      const matched = addSubNavigationByPath(item.paths, paths, path);
      if (matched !== null) {
        return matched;
      }
    }
    const m = matchPath(path, {
      path: item.path
    });
    if (m !== null) {
      item.paths = paths;
      return item;
    }
  }
  return null;
}

function removeSubNavigationByPath(data, paths, path) {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    if (item.paths && item.paths.length > 0) {
      const matched = removeSubNavigationByPath(item.paths, paths, path);
      if (matched !== null) {
        return matched;
      }
    }
    const m = matchPath(path, {
      path: item.path
    });
    if (m !== null) {
      delete item.paths;
      return item;
    }
  }
  return null;
}

function navigationReducer(state, action) {
  switch (action.type) {
    case "ADD_SUB_NAVIGATION":
      const addedItem = addSubNavigationByPath(
        state.data,
        action.payload.paths,
        action.payload.path
      );
      if (addedItem === null) {
        return state;
      }
      return {
        ...state,
        data: state.data
      };
    case "REMOVE_SUB_NAVIGATION":
      const removedItem = removeSubNavigationByPath(
        state.data,
        action.payload.paths,
        action.payload.path
      );
      if (removedItem === null) {
        return state;
      }
      return {
        ...state,
        data: state.data
      };
    default:
      return state;
  }
}
export function useNavigationContext() {
  return useContext(context);
}

export function useSubNavigation(navigation, path, removeOnUnmount = true) {
  useEffect(() => {
    addSubNavigation(navigation, path);
    return () => {
      if (removeOnUnmount) {
        removeSubNavigation(navigation, path);
      }
    };
  }, [navigation, path, removeOnUnmount]);
}

export function useLazySubNavigation() {
  const [state, setState] = useState({ added: false, removed: false });
  const ref = useRef();

  function getReference() {
    if (!ref.current) {
      ref.current = {
        state,
        setState,
        add(navigation, path) {
          addSubNavigation(navigation, path);
          ref.current.setState({ ...ref.current.state, added: true });
        },
        remove(navigation, path) {
          removeSubNavigation(navigation, path);
          ref.current.setState({ ...ref.current.state, removed: true });
        },
        dispose() {}
      };
    }
    return ref.current;
  }
  const helpers = getReference();
  useEffect(() => helpers.dispose);
  return helpers;
}

export function NavigationProvider({ children, data }) {
  const [helpers, setHelpers] = useState({ isInitialized: false });
  const [state, dispatch] = useReducer(navigationReducer, { data });

  useEffect(() => {
    if (!helpers.isInitialized) {
      addSubNavigation = (paths, path) => {
        dispatch({
          type: "ADD_SUB_NAVIGATION",
          payload: { paths, path }
        });
      };
      removeSubNavigation = (paths, path) => {
        dispatch({
          type: "REMOVE_SUB_NAVIGATION",
          payload: { paths, path }
        });
      };
      setHelpers({
        isInitialized: true
      });
    }
  }, [helpers, setHelpers, dispatch]);

  const context = useMemo(
    () => ({
      getData: () => state.data
    }),
    [state]
  );

  if (!helpers.isInitialized) {
    return null;
  }

  return <Provider value={context}>{children}</Provider>;
}

export { Consumer as NavigationConsumer };
