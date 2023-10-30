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
  ServiceDebate,
  ServiceDebateQueryCustomizer,
  ServiceDebateStored,
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionStored,
} from '~/generated/data-api';
import { routeToServiceRatingVoteDefinitionDebateView } from '~/routes';

export const BUTTON_NAVIGATE_DEBATE_ACTION_INTERFACE_KEY = 'ButtonNavigateDebateAction';
export type ButtonNavigateDebateAction = () => (
  owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
  target: JudoIdentifiable<ServiceDebate>,
) => Promise<void>;

export const useButtonNavigateDebateAction: ButtonNavigateDebateAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<ButtonNavigateDebateAction>(
    `(${OBJECTCLASS}=${BUTTON_NAVIGATE_DEBATE_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    target: JudoIdentifiable<ServiceDebate>,
  ) {
    navigate(routeToServiceRatingVoteDefinitionDebateView(target.__signedIdentifier));
  };
};
