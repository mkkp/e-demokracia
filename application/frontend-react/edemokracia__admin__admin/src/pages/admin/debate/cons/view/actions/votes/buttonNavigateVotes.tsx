///////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// ------------------------------
// Path expression: #pagePath(#self.value)+'actions/'+#pageActionPathSuffix(#self.key,#self.value)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx.hbs
// Action name: edemokracia::admin::Admin::edemokracia::admin::Con::votes#ButtonNavigate
// Action: NavigateToPageAction

import { JudoIdentifiable } from '@judo/data-api-common';
import { useJudoNavigation } from '../../../../../../../components';
import {
  AdminCon,
  AdminConStored,
  AdminSimpleVote,
  AdminSimpleVoteStored,
  AdminSimpleVoteQueryCustomizer,
} from '../../../../../../../generated/data-api';

export type ButtonNavigateVotesAction = () => (owner: JudoIdentifiable<AdminCon>) => Promise<void>;

export const useButtonNavigateVotesAction: ButtonNavigateVotesAction = () => {
  const { navigate } = useJudoNavigation();

  return async function (owner: JudoIdentifiable<AdminCon>) {
    navigate(`admin/con/votes/table/${owner.__signedIdentifier}`);
  };
};
