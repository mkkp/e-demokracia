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
  AdminCon,
  AdminConQueryCustomizer,
  AdminConStored,
  AdminDebate,
  AdminDebateStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { routeToAdminDebateConsView } from '~/routes';

export const ROW_VIEW_CONS_ACTION_INTERFACE_KEY = 'RowViewConsAction';
export type RowViewConsAction = () => (owner: JudoIdentifiable<AdminDebate>, entry: AdminConStored) => Promise<void>;

export const useRowViewConsAction: RowViewConsAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewConsAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_CONS_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminDebate>, entry: AdminConStored) {
    navigate(routeToAdminDebateConsView(entry.__signedIdentifier));
  };
};
