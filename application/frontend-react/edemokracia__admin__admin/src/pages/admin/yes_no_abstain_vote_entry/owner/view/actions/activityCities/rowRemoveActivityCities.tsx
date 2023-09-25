//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: RemoveAction

import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { useErrorHandler, ERROR_PROCESSOR_HOOK_INTERFACE_KEY } from '~/utilities';
import { AdminCity, AdminCityQueryCustomizer, AdminCityStored, AdminUser, AdminUserStored } from '~/generated/data-api';
import { adminUserServiceForClassImpl } from '~/generated/data-axios';

export type RowRemoveActivityCitiesAction = () => (
  owner: JudoIdentifiable<AdminUser>,
  selected: AdminCityStored,
  successCallback: () => void,
  errorCallback?: (error: any) => void,
) => Promise<void>;

export const useRowRemoveActivityCitiesAction: RowRemoveActivityCitiesAction = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleActionError = useErrorHandler<JudoIdentifiable<AdminUser>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=RowRemoveAction))`,
  );

  return async function rowRemoveActivityCitiesAction(
    owner: JudoIdentifiable<AdminUser>,
    selected: AdminCityStored,
    successCallback: () => void,
    errorCallback?: (error: any) => void,
  ) {
    try {
      await adminUserServiceForClassImpl.removeActivityCities(
        { __signedIdentifier: owner.__signedIdentifier } as JudoIdentifiable<AdminUser>,
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
