//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
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
  AdminCity,
  AdminCityStored,
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
} from '~/generated/data-api';
import { adminCityServiceForDistrictsImpl, adminDistrictServiceImpl } from '~/generated/data-axios';

export type RowDeleteDistrictsAction = () => (
  owner: JudoIdentifiable<AdminCity>,
  selected: AdminDistrictStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowDeleteDistrictsAction: RowDeleteDistrictsAction = () => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { openConfirmDialog } = useConfirmDialog();
  const handleActionError = useErrorHandler<JudoIdentifiable<AdminCity>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=RowDeleteAction))`,
  );

  return async function rowDeleteDistrictsAction(
    owner: JudoIdentifiable<AdminCity>,
    selected: AdminDistrictStored,
    successCallback: () => void,
  ) {
    try {
      const confirmed = await openConfirmDialog(
        'row-delete-action',
        t('judo.modal.confirm.confirm-delete', {
          defaultValue: 'Are you sure you would like to delete the selected element?',
        }),
        t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
      );

      if (confirmed) {
        await adminDistrictServiceImpl.delete(selected);
        enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        successCallback();
      }
    } catch (error) {
      handleActionError(error);
    }
  };
};
