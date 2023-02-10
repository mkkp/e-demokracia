///////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// ------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#self.value)+'actions/'+#pageActionPathSuffix(#self.key,#self.value)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx.hbs
// Action name: edemokracia::admin::Admin::edemokracia::admin::Debate::pros#RowView
// Action owner name: edemokracia::admin::Admin.debates#View
// Action DataElement name: pros
// Action DataElement owner name: edemokracia::admin::Debate
// Action DataElement target name: edemokracia::admin::Pro
// Owner Page name: edemokracia::admin::Admin.debates#View
// Action: ViewAction

import type { JudoIdentifiable } from '@judo/data-api-common';
import type {
  AdminProStored,
  AdminProQueryCustomizer,
  AdminDebate,
  AdminPro,
  AdminDebateStored,
} from '../../../../../../../generated/data-api';
import { useJudoNavigation } from '../../../../../../../components';

export type RowViewProsAction = () => (entry: JudoIdentifiable<AdminPro>) => Promise<void>;

export const useRowViewProsAction: RowViewProsAction = () => {
  const { navigate } = useJudoNavigation();

  return async function (entry: JudoIdentifiable<AdminPro>) {
    navigate(`admin/debate/pros/view/${entry.__signedIdentifier}`);
  };
};