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
  AdminCityStored,
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { routeToAdminCityDistrictsView } from '~/routes';

export const ROW_VIEW_DISTRICTS_ACTION_INTERFACE_KEY = 'RowViewDistrictsAction';
export type RowViewDistrictsAction = () => (
  owner: JudoIdentifiable<AdminCity>,
  entry: AdminDistrictStored,
) => Promise<void>;

export const useRowViewDistrictsAction: RowViewDistrictsAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewDistrictsAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_DISTRICTS_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminCity>, entry: AdminDistrictStored) {
    navigate(routeToAdminCityDistrictsView(entry.__signedIdentifier));
  };
};
