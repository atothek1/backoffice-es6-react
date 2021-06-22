import { ComponentType } from "react";
import { RouteProps, RedirectProps, RouteComponentProps } from "react-router";

export enum Role {
  GUEST = "guest",
  USER = "user",
  ADMIN = "admin"
}

export interface PageProps extends RouteComponentProps {}

export interface Navigation {
  readonly label: string;
  readonly icon?: string;
  readonly path?: string;
}

export interface RouteConfig
  extends Pick<RouteProps, "path" | "exact" | "component"> {
  readonly id: string;
  readonly navigation: Navigation[];
  readonly roles: Role[];
}

export interface UseNavigation {
  readonly navigation: ReadonlyArray<Navigation>;
  readonly routes: ReadonlyArray<RouteProps | RedirectProps>;
}
