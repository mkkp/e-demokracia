//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForViewDialogs(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: ClearAction

import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { useErrorHandler, ERROR_PROCESSOR_HOOK_INTERFACE_KEY } from '~/utilities';
import { ServiceServiceUser } from '~/generated/data-api';
import { serviceServiceUserServiceForClassImpl } from '~/generated/data-axios';

export type TableClearActivityDistrictsAction = () => (
  owner: JudoIdentifiable<ServiceServiceUser>,
  successCallback: () => void,
) => Promise<void>;

export const useTableClearActivityDistrictsAction: TableClearActivityDistrictsAction = () => {
  const handleActionError = useErrorHandler<JudoIdentifiable<ServiceServiceUser>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=ClearAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();

  return async function tableClearActivityDistrictsAction(
    owner: JudoIdentifiable<ServiceServiceUser>,
    successCallback: () => void,
  ) {
    try {
      await serviceServiceUserServiceForClassImpl.setActivityDistricts(
        { __signedIdentifier: owner.__signedIdentifier } as JudoIdentifiable<ServiceServiceUser>,
        [],
      );

      successCallback();
    } catch (error) {
      handleActionError(error);
    }
  };
};
