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
  AdminCon,
  AdminConStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import AdminAdminView from '~/pages/admin/con/created_by/view/index';

export const LINK_VIEW_CREATED_BY_ACTION_INTERFACE_KEY = 'LinkViewCreatedByAction';
export type LinkViewCreatedByAction = () => (
  owner: JudoIdentifiable<AdminCon>,
  entry: AdminUserStored,
  successCallback: () => void,
) => Promise<void>;

export const useLinkViewCreatedByAction: LinkViewCreatedByAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<LinkViewCreatedByAction>(
    `(${OBJECTCLASS}=${LINK_VIEW_CREATED_BY_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminCon>, entry: AdminUserStored, successCallback: () => void) {
    createDialog({
      fullWidth: true,
      maxWidth: 'lg',
      onClose: (event: object, reason: string) => {
        if (reason !== 'backdropClick') {
          closeDialog();
        }
      },
      children: (
        <AdminAdminView
          successCallback={() => {
            successCallback();
          }}
          cancel={closeDialog}
          entry={entry}
        />
      ),
    });
  };
};
