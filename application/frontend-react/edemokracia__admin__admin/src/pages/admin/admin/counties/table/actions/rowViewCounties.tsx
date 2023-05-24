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
import type { AdminCounty, AdminCountyQueryCustomizer, AdminCountyStored } from '~/generated/data-api';
import { useJudoNavigation } from '~/components';

export const ROW_VIEW_COUNTIES_ACTION_INTERFACE_KEY = 'RowViewCountiesAction';
export type RowViewCountiesAction = () => (entry: AdminCountyStored) => Promise<void>;

export const useRowViewCountiesAction: RowViewCountiesAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewCountiesAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_COUNTIES_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (entry: AdminCountyStored) {
    navigate(`admin/admin/counties/view/${entry.__signedIdentifier}`);
  };
};
