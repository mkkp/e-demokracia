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
import type { AdminCon, AdminConStored, AdminPro, AdminProQueryCustomizer, AdminProStored } from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { routeToAdminConProsView } from '~/routes';

export const ROW_VIEW_PROS_ACTION_INTERFACE_KEY = 'RowViewProsAction';
export type RowViewProsAction = () => (
  owner: JudoIdentifiable<AdminCon>,
  entry: AdminProStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowViewProsAction: RowViewProsAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewProsAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_PROS_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminCon>, entry: AdminProStored, successCallback: () => void) {
    closeAllDialogs();
    navigate(routeToAdminConProsView(entry.__signedIdentifier));
  };
};
