//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForViewDialogs(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: RemoveAction

import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { useErrorHandler, ERROR_PROCESSOR_HOOK_INTERFACE_KEY } from '~/utilities';
import {
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/generated/data-api';
import { serviceServiceUserServiceForClassImpl } from '~/generated/data-axios';

export type RowRemoveActivityCountiesAction = () => (
  owner: JudoIdentifiable<ServiceServiceUser>,
  selected: ServiceCountyStored,
  successCallback: () => void,
  errorCallback?: (error: any) => void,
) => Promise<void>;

export const useRowRemoveActivityCountiesAction: RowRemoveActivityCountiesAction = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleActionError = useErrorHandler<JudoIdentifiable<ServiceServiceUser>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=RowRemoveAction))`,
  );

  return async function rowRemoveActivityCountiesAction(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: ServiceCountyStored,
    successCallback: () => void,
    errorCallback?: (error: any) => void,
  ) {
    try {
      await serviceServiceUserServiceForClassImpl.removeActivityCounties(
        { __signedIdentifier: owner.__signedIdentifier } as JudoIdentifiable<ServiceServiceUser>,
        [selected],
      );

      successCallback();
    } catch (error) {
      if (errorCallback) {
        errorCallback(error);
      } else {
        handleActionError(error);
      }
    }
  };
};