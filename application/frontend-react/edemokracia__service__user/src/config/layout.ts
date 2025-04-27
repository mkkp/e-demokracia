//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/config/layout.ts'
// Template name: actor/src/config/layout.ts
// Template file: actor/src/config/layout.ts.hbs

export const DIVIDER_HEIGHT = 70;
export const DRAWER_WIDTH = 260;
export const MINI_DRAWER_WIDTH = 60;
export const SUBMENU_MIN_WIDTH = 200;

export type I18n = 'en' | 'hu'; // not used yet, will be implemented later, once we need language switching.

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum MenuOrientation {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

export enum ThemeDirection {
  LTR = 'ltr',
  RTL = 'rtl',
}

export type CustomizationActionProps = {
  type: string;
  payload?: CustomizationProps;
};

export type CustomizationProps = {
  i18n: I18n;
  miniDrawer: boolean;
  container: boolean;
  menuOrientation: MenuOrientation;
  mode: ThemeMode;
  header: boolean;
  onChangeContainer: VoidFunction;
  onChangeLocalization: (lang: I18n) => void;
  onChangeMode: (mode: ThemeMode) => void;
  onChangeMiniDrawer: (miniDrawer: boolean) => void;
  onChangeMenuOrientation: (menuOrientation: MenuOrientation) => void;
  onChangeHeader: (header: boolean) => void;
};

export type LayoutConfigProps = {
  i18n: I18n;
  menuOrientation: MenuOrientation;
  miniDrawer: boolean;
  container: boolean;
  mode: ThemeMode;
  header: boolean;
};

export type ScleProps = {
  scaleXs: number;
  scaleSm: number;
  scaleMd: number;
  scaleLg: number;
  scaleXl: number;
};

export const defaultLayoutConfig: LayoutConfigProps = {
  i18n: 'en',
  menuOrientation: MenuOrientation.HORIZONTAL,
  miniDrawer: true,
  container: true,
  mode: ThemeMode.LIGHT,
  header: true,
};

export const defaultScales: ScleProps = {
  scaleXs: 0.75,
  scaleSm: 0.85,
  scaleMd: 0.9,
  scaleLg: 0.95,
  scaleXl: 1.0,
};
