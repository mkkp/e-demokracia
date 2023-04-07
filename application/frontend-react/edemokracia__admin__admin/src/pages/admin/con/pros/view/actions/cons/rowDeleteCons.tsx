///////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// ------------------------------
// Path expression: #pagePath(#self.value)+'actions/'+#pageActionPathSuffix(#self.key,#self.value)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx.hbs
// Action name: edemokracia::admin::Admin::edemokracia::admin::Pro::cons#RowDelete
// Action: DeleteAction

import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { useErrorHandler, ERROR_PROCESSOR_HOOK_INTERFACE_KEY } from '../../../../../../../utilities';
import {
  AdminProStored,
  AdminCon,
  AdminConStored,
  AdminConQueryCustomizer,
  AdminPro,
} from '../../../../../../../generated/data-api';
import { adminProServiceForConsImpl, adminConServiceImpl } from '../../../../../../../generated/data-axios';

export type RowDeleteConsAction = () => (
  owner: JudoIdentifiable<AdminPro>,
  selected: AdminConStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowDeleteConsAction: RowDeleteConsAction = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleActionError = useErrorHandler<JudoIdentifiable<AdminPro>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=RowDeleteAction))`,
  );

  return async function rowDeleteConsAction(
    owner: JudoIdentifiable<AdminPro>,
    selected: AdminConStored,
    successCallback: () => void,
  ) {
    try {
      await adminConServiceImpl.delete(selected);

      successCallback();
    } catch (error) {
      handleActionError(error);
    }
  };
};
