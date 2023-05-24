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
import {
  AdminIssue,
  AdminIssueCategory,
  AdminIssueCategoryQueryCustomizer,
  AdminIssueCategoryStored,
  AdminIssueStored,
} from '~/generated/data-api';
import { adminIssueServiceImpl } from '~/generated/data-axios';

export type RowRemoveCategoriesAction = () => (
  owner: JudoIdentifiable<AdminIssue>,
  selected: AdminIssueCategoryStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowRemoveCategoriesAction: RowRemoveCategoriesAction = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleActionError = useErrorHandler<JudoIdentifiable<AdminIssue>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=RowRemoveAction))`,
  );

  return async function rowRemoveCategoriesAction(
    owner: JudoIdentifiable<AdminIssue>,
    selected: AdminIssueCategoryStored,
    successCallback: () => void,
  ) {
    try {
      await adminIssueServiceImpl.removeCategories(
        { __signedIdentifier: owner.__signedIdentifier } as JudoIdentifiable<AdminIssue>,
        [selected],
      );

      successCallback();
    } catch (error) {
      handleActionError(error);
    }
  };
};
