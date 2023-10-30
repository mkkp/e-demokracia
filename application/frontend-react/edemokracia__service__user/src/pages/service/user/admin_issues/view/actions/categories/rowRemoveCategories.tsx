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
  ServiceIssue,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceIssueStored,
} from '~/generated/data-api';
import { serviceIssueServiceForClassImpl } from '~/generated/data-axios';

export type RowRemoveCategoriesAction = () => (
  owner: JudoIdentifiable<ServiceIssue>,
  selected: ServiceIssueCategoryStored,
  successCallback: () => void,
  errorCallback?: (error: any) => void,
) => Promise<void>;

export const useRowRemoveCategoriesAction: RowRemoveCategoriesAction = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleActionError = useErrorHandler<JudoIdentifiable<ServiceIssue>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=RowRemoveAction))`,
  );

  return async function rowRemoveCategoriesAction(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: ServiceIssueCategoryStored,
    successCallback: () => void,
    errorCallback?: (error: any) => void,
  ) {
    try {
      await serviceIssueServiceForClassImpl.removeCategories(
        { __signedIdentifier: owner.__signedIdentifier } as JudoIdentifiable<ServiceIssue>,
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
