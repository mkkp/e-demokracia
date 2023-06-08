//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: ViewAction

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import type {
  AdminSimpleVote,
  AdminSimpleVoteQueryCustomizer,
  AdminSimpleVoteStored,
  AdminUser,
  AdminUserStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { routeToAdminUserVotesView } from '~/routes';

export const ROW_VIEW_VOTES_ACTION_INTERFACE_KEY = 'RowViewVotesAction';
export type RowViewVotesAction = () => (
  owner: JudoIdentifiable<AdminUser>,
  entry: AdminSimpleVoteStored,
) => Promise<void>;

export const useRowViewVotesAction: RowViewVotesAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewVotesAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_VOTES_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminUser>, entry: AdminSimpleVoteStored) {
    navigate(routeToAdminUserVotesView(entry.__signedIdentifier));
  };
};
