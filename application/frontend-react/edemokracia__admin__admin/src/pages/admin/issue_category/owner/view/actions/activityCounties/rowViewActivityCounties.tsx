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
import { routeToAdminUserActivityCountiesView } from '~/routes';

export const ROW_VIEW_ACTIVITY_COUNTIES_ACTION_INTERFACE_KEY = 'RowViewActivityCountiesAction';
export type RowViewActivityCountiesAction = () => (
  owner: JudoIdentifiable<AdminUser>,
  entry: AdminCountyStored,
) => Promise<void>;

export const useRowViewActivityCountiesAction: RowViewActivityCountiesAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewActivityCountiesAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_ACTIVITY_COUNTIES_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminUser>, entry: AdminCountyStored) {
    navigate(routeToAdminUserActivityCountiesView(entry.__signedIdentifier));
  };
};
