import { getNavigationFromRoutes } from "../utils/routes";
import { getRoutes } from "./routes";
export const navigation = [
  ...getNavigationFromRoutes(getRoutes()),

  {
    id: "nav:notfoundexample",
    path: "/notfoundexample",
    label: "Not Found Example",
    icon: "faExclamation"
  }
]; /*[
  {
    id: "nav:quickstart",
    path: "/quickstart",
    label: "Quickstart",
    icon: "faBolt"
  },
  {
    id: "nav:campaigns",
    path: "/campaigns",
    label: "Campaigns",
    icon: "faFire"
  },
  {
    id: "nav:crm",
    path: "/crm",
    label: "CRM",
    icon: "faUserTie"
  },
  {
    id: "nav:showroom",
    path: "/showroom",
    label: "Showroom",
    icon: "faEye"
  },
  {
    id: "nav:availability",
    path: "/availability",
    label: "Availability",
    icon: "faMapMarkerAlt"
  }
];
*/
