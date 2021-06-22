import { getRoutes } from "./routes";
import { getNavigationFromRoutes } from "../../utils/routes";

export function getNavigation(url) {
  return [...getNavigationFromRoutes(getRoutes(url))];
} /*[
  {
    id: "nav:crm:accounts:filter:all",
    path: "/crm/accounts/all",
    label: "Alle",
    roles: ["admin"]
  },
  {
    id: "nav:crm:accounts:filter:agencygroups",
    path: "/crm/accounts/agencygroups",
    label: "Agenturgruppen",
    roles: ["admin"]
  },
  {
    id: "nav:crm:accounts:filter:agency",
    path: "/crm/accounts/agency",
    label: "Agenturen",
    roles: ["sales"]
  },
  {
    id: "nav:crm:accounts:filter:direct",
    path: "/crm/accounts/direct",
    label: "Direktkunden",
    roles: ["guest"]
  }
];
*/
