## Notes

- use React.lazy for
- integrate routes.js config
- integrate LayoutContext
- refactor NavigationContext
- integrate Modal / multi Layout

## Navigation and Routes

- create a NavigationContext that is taking care of the heavy lifting for routes and navigation
- should take care of Authorization and Authentication as well as public routes like Login Page
- should take care of creating consitent routes and links that are matching
- should be feeded with configurations that can be injected by sub pages

### config schema

enum Role {
GUEST = "guest",
USER = "user",
ADMIN = "admin",
// ...
}

interface Navigation {
readonly label: string;
readonly icon: string;
readonly path?: string;
}

interface RouteConfig {
readonly id: string;
readonly path?: string | string[];
readonly exact?: boolean;
readonly component: React.Componenttype<PageProps>;
readonly navigation: Navigation[];
readonly roles: Role[];
}

/\*
NavigationContext Backup

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
case "INIZIALIZED":
return { ...state, isInitialized: true };
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
case "SET_ACTIVE":
return { ...state, active: action.payload };
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
const r1 = useRef();

function getReference() {
if (!r1.current) {
r1.current = {
state,
setState,
add(navigation, path) {
addSubNavigation(navigation, path);
r1.current.setState({ ...r1.current.state, added: true });
},
remove(navigation, path) {
removeSubNavigation(navigation, path);
r1.current.setState({ ...r1.current.state, removed: true });
},
dispose() {}
};
}
return r1.current;
}
const helpers = getReference();
useEffect(() => helpers.dispose);
return helpers;
}

export function NavigationProvider({ children, data }) {
const [state, dispatch] = useReducer(navigationReducer, {
isInitialized: false,
data
});

useEffect(() => {
if (!state.isInitialized) {
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

      dispatch({ type: "INIZIALIZED" });
    }

}, [state, dispatch]);

const context = useMemo(
() => ({
getData: () => state.data
}),
[state]
);

if (!state.isInitialized) {
return null;
}

return <Provider value={context}>{children}</Provider>;
}

export { Consumer as NavigationConsumer };

\*/
