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
  AdminSimpleVote,
  AdminSimpleVoteQueryCustomizer,
  AdminSimpleVoteStored,
  AdminUser,
  AdminUserStored,
} from '~/generated/data-api';
import { adminUserServiceForClassImpl } from '~/generated/data-axios';

export type RowRemoveVotesAction = () => (
  owner: JudoIdentifiable<AdminUser>,
  selected: AdminSimpleVoteStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowRemoveVotesAction: RowRemoveVotesAction = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleActionError = useErrorHandler<JudoIdentifiable<AdminUser>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=RowRemoveAction))`,
  );

  return async function rowRemoveVotesAction(
    owner: JudoIdentifiable<AdminUser>,
    selected: AdminSimpleVoteStored,
    successCallback: () => void,
  ) {
    try {
      await adminUserServiceForClassImpl.removeVotes(
        { __signedIdentifier: owner.__signedIdentifier } as JudoIdentifiable<AdminUser>,
        [selected],
      );

      successCallback();
    } catch (error) {
      handleActionError(error);
    }
  };
};
