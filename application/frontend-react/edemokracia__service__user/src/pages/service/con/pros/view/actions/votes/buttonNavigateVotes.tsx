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
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useJudoNavigation } from '~/components';
import {
  ServicePro,
  ServiceProStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
} from '~/generated/data-api';
import { routeToServiceProVotesTable } from '~/routes';

export const BUTTON_NAVIGATE_VOTES_ACTION_INTERFACE_KEY = 'ButtonNavigateVotesAction';
export type ButtonNavigateVotesAction = () => (owner: JudoIdentifiable<ServicePro>) => Promise<void>;

export const useButtonNavigateVotesAction: ButtonNavigateVotesAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<ButtonNavigateVotesAction>(
    `(${OBJECTCLASS}=${BUTTON_NAVIGATE_VOTES_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<ServicePro>) {
    navigate(routeToServiceProVotesTable(owner.__signedIdentifier));
  };
};
