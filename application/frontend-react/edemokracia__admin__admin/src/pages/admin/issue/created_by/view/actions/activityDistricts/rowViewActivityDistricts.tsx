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
import { routeToAdminUserActivityDistrictsView } from '~/routes';

export const ROW_VIEW_ACTIVITY_DISTRICTS_ACTION_INTERFACE_KEY = 'RowViewActivityDistrictsAction';
export type RowViewActivityDistrictsAction = () => (
  owner: JudoIdentifiable<AdminUser>,
  entry: AdminDistrictStored,
) => Promise<void>;

export const useRowViewActivityDistrictsAction: RowViewActivityDistrictsAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewActivityDistrictsAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_ACTIVITY_DISTRICTS_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminUser>, entry: AdminDistrictStored) {
    navigate(routeToAdminUserActivityDistrictsView(entry.__signedIdentifier));
  };
};
