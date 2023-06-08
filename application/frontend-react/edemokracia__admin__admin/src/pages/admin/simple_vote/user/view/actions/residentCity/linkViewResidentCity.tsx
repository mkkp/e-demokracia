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
  AdminCity,
  AdminCityQueryCustomizer,
  AdminCityStored,
  AdminUser,
  AdminUserStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { routeToAdminUserResidentCityView } from '~/routes';

export const LINK_VIEW_RESIDENT_CITY_ACTION_INTERFACE_KEY = 'LinkViewResidentCityAction';
export type LinkViewResidentCityAction = () => (
  owner: JudoIdentifiable<AdminUser>,
  entry: AdminCityStored,
) => Promise<void>;

export const useLinkViewResidentCityAction: LinkViewResidentCityAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<LinkViewResidentCityAction>(
    `(${OBJECTCLASS}=${LINK_VIEW_RESIDENT_CITY_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminUser>, entry: AdminCityStored) {
    navigate(routeToAdminUserResidentCityView(entry.__signedIdentifier));
  };
};
