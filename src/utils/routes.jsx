export function getProtectedRoute() {}

export function getNavigationFromRoutes(routes) {
  return routes.reduce((navigation, route) => {
    if (!route.nav) {
      return navigation;
    }
    navigation.push({
      id: route.id,
      path: route.path,
      ...route.nav
    });
    return navigation;
  }, []);
}
