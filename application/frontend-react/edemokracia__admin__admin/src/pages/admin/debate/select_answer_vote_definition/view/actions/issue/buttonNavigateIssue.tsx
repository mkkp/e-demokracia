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
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminSelectAnswerVoteDefinition,
  AdminSelectAnswerVoteDefinitionStored,
} from '~/generated/data-api';
import { routeToAdminSelectAnswerVoteDefinitionIssueView } from '~/routes';

export const BUTTON_NAVIGATE_ISSUE_ACTION_INTERFACE_KEY = 'ButtonNavigateIssueAction';
export type ButtonNavigateIssueAction = () => (
  owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
  target: JudoIdentifiable<AdminIssue>,
) => Promise<void>;

export const useButtonNavigateIssueAction: ButtonNavigateIssueAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<ButtonNavigateIssueAction>(
    `(${OBJECTCLASS}=${BUTTON_NAVIGATE_ISSUE_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminIssue>,
  ) {
    navigate(routeToAdminSelectAnswerVoteDefinitionIssueView(target.__signedIdentifier));
  };
};