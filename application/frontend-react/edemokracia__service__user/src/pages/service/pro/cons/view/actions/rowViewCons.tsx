//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForViewDialogs(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: ViewAction

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import type { ServiceCon, ServiceConQueryCustomizer, ServiceConStored } from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import ServiceUserView from '~/pages/service/con/cons/view/index';

export const ROW_VIEW_CONS_ACTION_INTERFACE_KEY = 'RowViewConsAction';
export type RowViewConsAction = () => (
  owner: JudoIdentifiable<ServiceCon>,
  entry: ServiceConStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowViewConsAction: RowViewConsAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewConsAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_CONS_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<ServiceCon>, entry: ServiceConStored, successCallback: () => void) {
    createDialog({
      fullWidth: true,
      maxWidth: 'xl',
      onClose: (event: object, reason: string) => {
        if (reason !== 'backdropClick') {
          closeDialog();
        }
      },
      children: (
        <ServiceUserView
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
