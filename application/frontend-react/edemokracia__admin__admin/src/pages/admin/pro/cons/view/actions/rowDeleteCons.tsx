///////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// ------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#self.value)+'actions/'+#pageActionPathSuffix(#self.key,#self.value)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx.hbs
// Action name: edemokracia::admin::Admin::edemokracia::admin::Con::cons#RowDelete
// Action owner name: edemokracia::admin::Pro.cons#View
// Action DataElement name: cons
// Action DataElement owner name: edemokracia::admin::Con
// Action DataElement target name: edemokracia::admin::Con
// Owner Page name: edemokracia::admin::Pro.cons#View
// Action: DeleteAction

import type { JudoIdentifiable } from '@judo/data-api-common';
import { useSnackbar } from '../../../../../../components';
import { errorHandling } from '../../../../../../utilities';
import { AdminCon, AdminConStored, AdminConQueryCustomizer } from '../../../../../../generated/data-api';
import { adminConServiceForConsImpl, adminConServiceImpl } from '../../../../../../generated/data-axios';

export type RowDeleteConsAction = () => (
  owner: JudoIdentifiable<AdminCon>,
  selected: AdminConStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowDeleteConsAction: RowDeleteConsAction = () => {
  const [enqueueSnackbar] = useSnackbar();

  return async function rowDeleteConsAction(
    owner: JudoIdentifiable<AdminCon>,
    selected: AdminConStored,
    successCallback: () => void,
  ) {
    try {
      await adminConServiceForConsImpl.deleteCons(owner, selected);

      successCallback();
    } catch (error) {
      errorHandling(error, enqueueSnackbar);
    }
  };
};
