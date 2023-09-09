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

export const toastConfig: OptionsObject & { success: OptionsObject; error: OptionsObject } = {
  ...generalToastConfig,
  success: {
    ...generalToastConfig,
    autoHideDuration: 2500,
    variant: 'success',
  },
  error: {
    ...generalToastConfig,
    autoHideDuration: 2500,
    persist: true,
    variant: 'error',
  },
};

export const debounceInputs: number = 500;

export const animationDuration: number = 0.8;

export const delayDuration: number = 0.2;
