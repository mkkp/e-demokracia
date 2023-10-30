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
  ServiceDebate,
  ServiceDebateStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { routeToServiceDebateVoteDefinitionView } from '~/routes';

export const LINK_VIEW_VOTE_DEFINITION_ACTION_INTERFACE_KEY = 'LinkViewVoteDefinitionAction';
export type LinkViewVoteDefinitionAction = () => (
  owner: JudoIdentifiable<ServiceDebate>,
  entry: ServiceVoteDefinitionStored,
  successCallback: () => void,
) => Promise<void>;

export const useLinkViewVoteDefinitionAction: LinkViewVoteDefinitionAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<LinkViewVoteDefinitionAction>(
    `(${OBJECTCLASS}=${LINK_VIEW_VOTE_DEFINITION_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (
    owner: JudoIdentifiable<ServiceDebate>,
    entry: ServiceVoteDefinitionStored,
    successCallback: () => void,
  ) {
    closeAllDialogs();
    navigate(routeToServiceDebateVoteDefinitionView(entry.__signedIdentifier));
  };
};
