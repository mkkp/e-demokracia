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
import type { AdminUser, AdminUserQueryCustomizer, AdminUserStored } from '~/generated/data-api';
import { useJudoNavigation } from '~/components';

export const ROW_VIEW_USERS_ACTION_INTERFACE_KEY = 'RowViewUsersAction';
export type RowViewUsersAction = () => (entry: AdminUserStored) => Promise<void>;

export const useRowViewUsersAction: RowViewUsersAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewUsersAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_USERS_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (entry: AdminUserStored) {
    navigate(`admin/admin/users/view/${entry.__signedIdentifier}`);
  };
};
