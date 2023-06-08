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
  AdminVoteDefinition,
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { routeToAdminAdminVoteDefinitionsView } from '~/routes';

export const ROW_VIEW_VOTE_DEFINITIONS_ACTION_INTERFACE_KEY = 'RowViewVoteDefinitionsAction';
export type RowViewVoteDefinitionsAction = () => (entry: AdminVoteDefinitionStored) => Promise<void>;

export const useRowViewVoteDefinitionsAction: RowViewVoteDefinitionsAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewVoteDefinitionsAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_VOTE_DEFINITIONS_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (entry: AdminVoteDefinitionStored) {
    navigate(routeToAdminAdminVoteDefinitionsView(entry.__signedIdentifier));
  };
};
