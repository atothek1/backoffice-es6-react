import {
  CRM,
  Empty,
  Forbidden403,
  NotFound404,
  Quickstart,
  Unauthorized401
} from "../pages";

export function getRoutes(url = "") {
  return [
    {
      id: "route:quickstart",
      path: `${url}/quickstart`,
      component: Quickstart,
      exact: true,
      nav: {
        label: "Quickstart",
        icon: "faBolt"
      }
    },
    {
      id: "route:campaigns",
      path: `${url}/campaigns`,
      component: Empty,
      nav: {
        label: "Campaigns",
        icon: "faFire"
      }
    },
    {
      id: "route:crm",
      path: `${url}/crm`,
      component: CRM,
      nav: {
        label: "CRM",
        icon: "faUserTie"
      }
    },
    {
      id: "route:showroom",
      path: `${url}/showroom`,
      component: Empty,
      nav: {
        label: "Showroom",
        icon: "faEye"
      }
    },
    {
      id: "route:availability",
      path: `${url}/availability`,
      component: Empty,
      nav: {
        label: "Availability",
        icon: "faMapMarkerAlt"
      }
    },
    {
      id: "route:401",
      path: `${url}/401`,
      component: Unauthorized401,
      exact: true
    },
    {
      id: "route:403",
      path: `${url}/403`,
      component: Forbidden403,
      exact: true
    },
    {
      id: "route:404",
      path: `${url}/404`,
      component: NotFound404,
      exact: true
    },
    {
      id: "redirect:quickstart",
      from: `${url}/`,
      to: `${url}/quickstart`,
      exact: true
    },
    // fallback 404 for non matching routes, redirects to the /404 path
    {
      id: "route:fallback",
      to: `${url}/404`
    }
  ];
}
