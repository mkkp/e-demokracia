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
import type { ServiceDebate, ServiceDebateQueryCustomizer, ServiceDebateStored } from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { routeToServiceUserAdminDebatesView } from '~/routes';

export const ROW_VIEW_ADMIN_DEBATES_ACTION_INTERFACE_KEY = 'RowViewAdminDebatesAction';
export type RowViewAdminDebatesAction = () => (
  entry: ServiceDebateStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowViewAdminDebatesAction: RowViewAdminDebatesAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewAdminDebatesAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_ADMIN_DEBATES_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (entry: ServiceDebateStored, successCallback: () => void) {
    closeAllDialogs();
    navigate(routeToServiceUserAdminDebatesView(entry.__signedIdentifier));
  };
};
