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
  onChangeContainer: VoidFunction;
  onChangeLocalization: (lang: I18n) => void;
  onChangeMode: (mode: ThemeMode) => void;
  onChangeMiniDrawer: (miniDrawer: boolean) => void;
  onChangeMenuOrientation: (menuOrientation: MenuOrientation) => void;
};

export type LayoutConfigProps = {
  i18n: I18n;
  menuOrientation: MenuOrientation;
  miniDrawer: boolean;
  container: boolean;
  mode: ThemeMode;
};

export const defaultLayoutConfig: LayoutConfigProps = {
  i18n: 'en',
  menuOrientation: MenuOrientation.VERTICAL,
  miniDrawer: false,
  container: true,
  mode: ThemeMode.LIGHT,
};
