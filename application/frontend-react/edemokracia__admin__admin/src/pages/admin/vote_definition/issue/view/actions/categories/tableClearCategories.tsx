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
import { AdminIssue } from '~/generated/data-api';
import { adminIssueServiceImpl } from '~/generated/data-axios';

export type TableClearCategoriesAction = () => (
  owner: JudoIdentifiable<AdminIssue>,
  successCallback: () => void,
) => Promise<void>;

export const useTableClearCategoriesAction: TableClearCategoriesAction = () => {
  const handleActionError = useErrorHandler<JudoIdentifiable<AdminIssue>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=ClearAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();

  return async function tableClearCategoriesAction(owner: JudoIdentifiable<AdminIssue>, successCallback: () => void) {
    try {
      await adminIssueServiceImpl.setCategories(
        { __signedIdentifier: owner.__signedIdentifier } as JudoIdentifiable<AdminIssue>,
        [],
      );

      successCallback();
    } catch (error) {
      handleActionError(error);
    }
  };
};
