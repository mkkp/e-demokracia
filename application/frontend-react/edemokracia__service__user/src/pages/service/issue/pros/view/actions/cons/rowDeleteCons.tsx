//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForViewDialogs(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: DeleteAction

import { useTranslation } from 'react-i18next';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { useErrorHandler, ERROR_PROCESSOR_HOOK_INTERFACE_KEY } from '~/utilities';
import { useConfirmDialog } from '~/components/dialog';
import { toastConfig } from '~/config';
import {
  ServiceCon,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServicePro,
  ServiceProStored,
} from '~/generated/data-api';
import { serviceProServiceForConsImpl, serviceConServiceForClassImpl } from '~/generated/data-axios';

export type RowDeleteConsAction = () => (
  owner: JudoIdentifiable<ServicePro>,
  selected: ServiceConStored,
  successCallback: () => void,
  errorCallback?: (error: any) => void,
  silentMode?: boolean,
) => Promise<void>;

export const useRowDeleteConsAction: RowDeleteConsAction = () => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { openConfirmDialog } = useConfirmDialog();
  const handleActionError = useErrorHandler<JudoIdentifiable<ServicePro>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=RowDeleteAction))`,
  );

  return async function rowDeleteConsAction(
    owner: JudoIdentifiable<ServicePro>,
    selected: ServiceConStored,
    successCallback: () => void,
    errorCallback?: (error: any) => void,
    silentMode?: boolean,
  ) {
    try {
      const confirmed = !silentMode
        ? await openConfirmDialog(
            'row-delete-action',
            t('judo.modal.confirm.confirm-delete', {
              defaultValue: 'Are you sure you would like to delete the selected element?',
            }),
            t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
          )
        : true;

      if (confirmed) {
        await serviceConServiceForClassImpl.delete(selected);
        if (!silentMode) {
          enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
            variant: 'success',
            ...toastConfig.success,
          });
        }
        successCallback();
      }
    } catch (error) {
      if (errorCallback) {
        errorCallback(error);
      } else {
        handleActionError(error);
      }
    }
  };
};
