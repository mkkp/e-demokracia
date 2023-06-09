//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: NavigateToPageAction

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { JudoIdentifiable } from '@judo/data-api-common';
import { useJudoNavigation } from '~/components';
import {
  AdminPro,
  AdminProStored,
  AdminSimpleVote,
  AdminSimpleVoteQueryCustomizer,
  AdminSimpleVoteStored,
} from '~/generated/data-api';
import { routeToAdminProVotesTable } from '~/routes';

export const BUTTON_NAVIGATE_VOTES_ACTION_INTERFACE_KEY = 'ButtonNavigateVotesAction';
export type ButtonNavigateVotesAction = () => (owner: JudoIdentifiable<AdminPro>) => Promise<void>;

export const useButtonNavigateVotesAction: ButtonNavigateVotesAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<ButtonNavigateVotesAction>(
    `(${OBJECTCLASS}=${BUTTON_NAVIGATE_VOTES_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminPro>) {
    navigate(routeToAdminProVotesTable(owner.__signedIdentifier));
  };
};
