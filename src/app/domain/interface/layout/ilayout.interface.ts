import type { IChildren } from "@/app/domain";

/**
 * @interface ILayout
 * @description Props para el componente Layout de la aplicación.
 */
export interface ILayout extends IChildren {
  isAutentificated: boolean;
}
