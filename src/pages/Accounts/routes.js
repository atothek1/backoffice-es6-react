import { AccountList } from "../AccountList";

export function getRoutes(url = "") {
  return [
    {
      id: "route:crm:accounts:filter:all",
      path: `${url}/all`,
      component: AccountList,
      exact: true,
      nav: {
        label: "Alle"
      }
    },
    {
      id: "route:crm:accounts:filter:agencygroups",
      path: `${url}/agencygroups`,
      component: AccountList,
      exact: true,
      nav: {
        label: "Agenturgruppen"
      }
    },
    {
      id: "route:crm:accounts:filter:agency",
      path: `${url}/agency`,
      component: AccountList,
      exact: true,
      nav: {
        label: "Agenturen"
      }
    },
    {
      id: "route:crm:accounts:filter:direct",
      path: `${url}/direct`,
      component: AccountList,
      exact: true,
      nav: {
        label: "Direktkunden"
      }
    },
    {
      id: "redirect:crm:accounts",
      from: `${url}`,
      to: `${url}/all`,
      exact: true
    }
  ];
}
