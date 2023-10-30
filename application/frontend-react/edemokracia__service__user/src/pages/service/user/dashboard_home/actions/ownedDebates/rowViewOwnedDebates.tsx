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
  ServiceDashboard,
  ServiceDashboardStored,
  ServiceDebate,
  ServiceDebateQueryCustomizer,
  ServiceDebateStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { routeToServiceDashboardOwnedDebatesView } from '~/routes';

export const ROW_VIEW_OWNED_DEBATES_ACTION_INTERFACE_KEY = 'RowViewOwnedDebatesAction';
export type RowViewOwnedDebatesAction = () => (
  owner: JudoIdentifiable<ServiceDashboard>,
  entry: ServiceDebateStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowViewOwnedDebatesAction: RowViewOwnedDebatesAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewOwnedDebatesAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_OWNED_DEBATES_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (
    owner: JudoIdentifiable<ServiceDashboard>,
    entry: ServiceDebateStored,
    successCallback: () => void,
  ) {
    closeAllDialogs();
    navigate(routeToServiceDashboardOwnedDebatesView(entry.__signedIdentifier));
  };
};
