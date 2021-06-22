export enum ActionType {
  ADD_NAVIGATION = "actions:ADD_NAVIGATION",
  REMOVE_NAVIGATION = "actions:REMOVE_NAVIGATION"
}

export function addNavigation(paths, url) {
  return { type: ActionType.ADD_NAVIGATION, payload: { paths, url } };
}

export function removeNavigation(paths, url) {
  return { type: ActionType.REMOVE_NAVIGATION, payload: { paths, url } };
}
