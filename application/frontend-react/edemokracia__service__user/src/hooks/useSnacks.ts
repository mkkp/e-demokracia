import { useSnackbar } from 'notistack';
import type { OptionsObject } from 'notistack';
import { generalToastConfig, toastConfig } from '~/config';

export interface Snacks {
  showSnack: (message: string, options?: OptionsObject) => void;
  showSuccessSnack: (message: string, options?: OptionsObject) => void;
  showWarningSnack: (message: string, options?: OptionsObject) => void;
  showErrorSnack: (message: string, options?: OptionsObject) => void;
}

export const useSnacks: () => Snacks = () => {
  const { enqueueSnackbar } = useSnackbar();

  return {
    showSnack: (message: string, options?: OptionsObject) => {
      enqueueSnackbar(message, { ...generalToastConfig, ...(options ?? {}) });
    },
    showSuccessSnack: (message: string, options?: OptionsObject) => {
      enqueueSnackbar(message, { ...toastConfig.success, ...(options ?? {}) });
    },
    showWarningSnack: (message: string, options?: OptionsObject) => {
      enqueueSnackbar(message, { ...toastConfig.warning, ...(options ?? {}) });
    },
    showErrorSnack: (message: string, options?: OptionsObject) => {
      enqueueSnackbar(message, { ...toastConfig.error, ...(options ?? {}) });
    },
  };
};
