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
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminUser,
  AdminUserStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { routeToAdminUserResidentDistrictView } from '~/routes';

export const LINK_VIEW_RESIDENT_DISTRICT_ACTION_INTERFACE_KEY = 'LinkViewResidentDistrictAction';
export type LinkViewResidentDistrictAction = () => (
  owner: JudoIdentifiable<AdminUser>,
  entry: AdminDistrictStored,
  successCallback: () => void,
) => Promise<void>;

export const useLinkViewResidentDistrictAction: LinkViewResidentDistrictAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<LinkViewResidentDistrictAction>(
    `(${OBJECTCLASS}=${LINK_VIEW_RESIDENT_DISTRICT_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminUser>, entry: AdminDistrictStored, successCallback: () => void) {
    closeAllDialogs();
    navigate(routeToAdminUserResidentDistrictView(entry.__signedIdentifier));
  };
};
