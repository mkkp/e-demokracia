//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/utilities/error-handling.ts'
// Template name: actor/src/utilities/error-handling.ts
// Template file: actor/src/utilities/error-handling.ts.hbs

import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useTrackService } from '@pandino/react-hooks';
import type { SnackbarMessage, OptionsObject, SnackbarKey } from 'notistack';
import { useSnacks } from '~/hooks';
import { exists } from './helper';
import { toastConfig } from '../config';

type EnqueueSnackbarCallback = (message: SnackbarMessage, options?: OptionsObject | undefined) => SnackbarKey;

export interface ErrorHandlingOption<T> {
  /**
   * Callback from a component owning the form data used to set error messages on form inputs. Key-value pair is for
   * form field name and validation error message. Should be called only once per error handler call!
   */
  setValidation?: Dispatch<SetStateAction<Map<keyof T, string>>>;
}

export interface ServerError<T> {
  code: string;
  level: string;
  details: ServerErrorDetails;
  location: keyof T;
}

export interface ServerErrorDetails {
  feature: string;
}

export interface ValidationError {
  message: string;
  location: string;
}

export interface ErrorProcessResult<T> {
  errorToastConfig: OptionsObject;
  toastMessage?: string | undefined;
  validation?: Map<keyof T, string>;
}

export const useErrorHandler = () => {
  const { t } = useTranslation();
  const { showErrorSnack } = useSnacks();

  return <T>(error: any, options?: ErrorHandlingOption<T>, payload?: T) => {
    console.error(error);
    const errorResults: ErrorProcessResult<T> = {
      errorToastConfig: {
        ...toastConfig.error,
        variant: 'error',
      },
    };

    // Checking for negated "instance of AxiosError" yields compile errors for export problems
    if (!(error && typeof error.isAxiosError === 'boolean' && error.isAxiosError === true)) {
      errorResults.toastMessage = t('judo.error.technical', {
        defaultValue: 'Something went wrong. Please contact with the system admins.',
      }) as string;
    } else {
      const response = error.response;

      if (!exists(response)) {
        errorResults.toastMessage = t('judo.error.technical.no-response', {
          defaultValue: 'No response received while processing your request. Please contact with the system admins.',
        }) as string;
      } else if (!response?.status) {
        errorResults.toastMessage = t('judo.error.technical.no-status', {
          defaultValue:
            'Could not determine the result(status) of the operation. Please contact with the system admins.',
        }) as string;
      } else {
        switch (response?.status) {
          case 500:
            errorResults.toastMessage = t('judo.error.internal-server-error', {
              defaultValue: 'An internal server error occurred.',
              error: error.response?.data as ServerError<T>,
            }) as string;
            break;
          case 401:
            errorResults.toastMessage = t('judo.error.unauthenticated', {
              defaultValue: 'Access expired, or you are not authenticated. Please log in / refresh your session!',
              error: error.response?.data as ServerError<T>,
            }) as string;
            break;
          case 403:
            errorResults.toastMessage = t('judo.error.unauthorized', {
              defaultValue: "You don't have permission to run the operation.",
              error: error.response?.data as ServerError<T>,
            }) as string;
            break;
          case 404:
            errorResults.toastMessage = t('judo.error.not-found', {
              defaultValue: 'The item which you are trying to operate on does not exist (could be deleted).',
              error: error.response?.data as ServerError<T>,
              payload,
            }) as string;
            break;
          case 422:
            errorResults.toastMessage = t('judo.error.business-fault', {
              defaultValue: 'An error occurred while processing your request.',
              error: error.response?.data as ServerError<T>,
              payload,
            }) as string;
            break;
          case 400:
            const errorList = response.data as ServerError<T>[];
            errorResults.errorToastConfig = {
              ...errorResults.errorToastConfig,
            };
            errorResults.toastMessage = t('judo.error.validation-failed', {
              defaultValue: 'Please make sure all fields are filled in correctly.',
              error,
              payload,
            }) as string;

            if (exists(errorList[0].location)) {
              errorResults.validation = new Map<keyof T, string>();
              if (typeof options?.setValidation === 'function') {
                errorList.forEach((error) =>
                  errorResults.validation!.set(
                    error.location,
                    t(`judo.error.validation-failed.${error.code}`, {
                      defaultValue: error.code,
                      error,
                      payload,
                    }) as string,
                  ),
                );
              }
            }
            break;
          default:
            errorResults.toastMessage = t('error.unknown', {
              defaultValue: 'An unknown error occurred. Please contact with the system admins.',
            }) as string;
        }
      }
    }

    if (errorResults.toastMessage) {
      showErrorSnack(errorResults.toastMessage, errorResults.errorToastConfig);
    }

    if (typeof options?.setValidation === 'function' && errorResults.validation) {
      options?.setValidation(errorResults.validation);
    }
  };
};

export const isErrorOperationFault = (error: any): boolean => {
  return error?.response?.status === 422;
};
