import { matchPath } from "react-router";

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

export { navigationReducer };
