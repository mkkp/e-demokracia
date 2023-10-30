//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: ClearAction

import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { useErrorHandler, ERROR_PROCESSOR_HOOK_INTERFACE_KEY } from '~/utilities';
import { ServiceIssue } from '~/generated/data-api';
import { serviceIssueServiceForClassImpl } from '~/generated/data-axios';

export type TableClearCategoriesAction = () => (
  owner: JudoIdentifiable<ServiceIssue>,
  successCallback: () => void,
) => Promise<void>;

export const useTableClearCategoriesAction: TableClearCategoriesAction = () => {
  const handleActionError = useErrorHandler<JudoIdentifiable<ServiceIssue>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=ClearAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();

  return async function tableClearCategoriesAction(owner: JudoIdentifiable<ServiceIssue>, successCallback: () => void) {
    try {
      await serviceIssueServiceForClassImpl.setCategories(
        { __signedIdentifier: owner.__signedIdentifier } as JudoIdentifiable<ServiceIssue>,
        [],
      );

      successCallback();
    } catch (error) {
      handleActionError(error);
    }
  };
};
