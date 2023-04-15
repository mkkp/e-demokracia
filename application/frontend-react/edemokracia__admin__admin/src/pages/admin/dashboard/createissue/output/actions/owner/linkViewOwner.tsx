//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#self.value)+'actions/'+#pageActionPathSuffix(#self.key,#self.value)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Base URL: mvn:hu.blackbelt.judo.generator:judo-ui-react:1.0.0.20230413_041932_3a0d360a_develop
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: ViewAction

import type { JudoIdentifiable } from '@judo/data-api-common';
import type {
  AdminIssue,
  AdminIssueStored,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminUser,
} from '../../../../../../../generated/data-api';
import { useJudoNavigation } from '../../../../../../../components';

export type LinkViewOwnerAction = () => (entry: JudoIdentifiable<AdminUser>) => Promise<void>;

export const useLinkViewOwnerAction: LinkViewOwnerAction = () => {
  const { navigate } = useJudoNavigation();

  return async function (entry: JudoIdentifiable<AdminUser>) {
    navigate(`admin/issue/owner/view/${entry.__signedIdentifier}`);
  };
};