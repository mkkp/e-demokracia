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
  AdminCounty,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminUser,
  AdminUserStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { routeToAdminUserResidentCountyView } from '~/routes';

export const LINK_VIEW_RESIDENT_COUNTY_ACTION_INTERFACE_KEY = 'LinkViewResidentCountyAction';
export type LinkViewResidentCountyAction = () => (
  owner: JudoIdentifiable<AdminUser>,
  entry: AdminCountyStored,
  successCallback: () => void,
) => Promise<void>;

export const useLinkViewResidentCountyAction: LinkViewResidentCountyAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<LinkViewResidentCountyAction>(
    `(${OBJECTCLASS}=${LINK_VIEW_RESIDENT_COUNTY_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminUser>, entry: AdminCountyStored, successCallback: () => void) {
    closeAllDialogs();
    navigate(routeToAdminUserResidentCountyView(entry.__signedIdentifier));
  };
};
