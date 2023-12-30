//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/config/general.ts'
// Template name: actor/src/config/general.ts
// Template file: actor/src/config/general.ts.hbs

import type { OptionsObject } from 'notistack';

export const generalToastConfig: OptionsObject = {
  variant: 'default',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
};

export const toastConfig: OptionsObject & { success: OptionsObject; warning: OptionsObject; error: OptionsObject } = {
  ...generalToastConfig,
  success: {
    ...generalToastConfig,
    autoHideDuration: 2500,
    variant: 'success',
  },
  warning: {
    ...generalToastConfig,
    autoHideDuration: 2500,
    variant: 'warning',
  },
  error: {
    ...generalToastConfig,
    autoHideDuration: 5000,
    variant: 'error',
  },
};

export const debounceInputs: number = 500;

export const fadeTimeout: number = 1200;

export const slideTimeout: number = 300;

export const dialogStackCloseDelay: number = 50;
