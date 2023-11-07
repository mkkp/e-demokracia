//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { toastConfig } from '~/config';
import { useCRUDDialog } from '~/hooks';
import {
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  uiTimeToServiceTime,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult } from '~/utilities';
import { PageContainerTransition } from '~/theme/animations';
import { useServiceUserAdminUsersAccessViewPage } from '~/dialogs/Service/User/AdminUsers/Access/View/Page';
import type { ServiceServiceUserServiceUser_TablePageActions } from '~/containers/Service/ServiceUser/ServiceUser_Table/ServiceServiceUserServiceUser_TablePageContainer';
import type {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import { userServiceForAdminUsersImpl } from '~/services/data-axios';

const ServiceServiceUserServiceUser_TablePageContainer = lazy(
  () => import('~/containers/Service/ServiceUser/ServiceUser_Table/ServiceServiceUserServiceUser_TablePageContainer'),
);

// XMIID: User/(esm/_hvVS8GkuEe25ONJ3V89cVA)/AccessTablePageDefinition
// Name: service::User::adminUsers::Access::Table::Page
export default function ServiceUserAdminUsersAccessTablePage() {
  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { navigate, back } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();
  const [createDialog, closeDialog] = useDialog();

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceServiceUserStored[]>([]);

  // Dialog hooks
  const openServiceUserAdminUsersAccessViewPage = useServiceUserAdminUsersAccessViewPage();

  // Calculated section
  const title: string = t('Service.ServiceUser.ServiceUser_Table', { defaultValue: 'ServiceUser Table' });

  // Action section
  const serviceServiceUserServiceUser_TableView = async (target?: ServiceServiceUserStored) => {
    await openServiceUserAdminUsersAccessViewPage(target!);

    setRefreshCounter((prev) => prev + 1);
  };
  const serviceServiceUserServiceUser_TableTableFilter = async (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ): Promise<{ model?: GridFilterModel; filters?: Filter[] }> => {
    const newFilters = await openFilterDialog(id, filterOptions, filters);
    return {
      filters: newFilters,
    };
  };
  const serviceServiceUserServiceUser_TableTableRefresh = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForAdminUsersImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceServiceUserServiceUser_TableDelete = async (target: ServiceServiceUserStored, silentMode?: boolean) => {
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
        await userServiceForAdminUsersImpl.delete(target);

        if (!silentMode) {
          enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
            variant: 'success',
            ...toastConfig.success,
          });

          setRefreshCounter((prev) => prev + 1);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceServiceUser>(error, undefined, target);
      }
    }
  };
  const serviceServiceUserServiceUser_TableBulkDelete = async (
    selectedRows: ServiceServiceUserStored[],
  ): Promise<DialogResult<Array<ServiceServiceUserStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceServiceUserStored>({
        dialogTitle: t('TMP', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.userName!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.serviceServiceUserServiceUser_TableDelete) {
              await actions.serviceServiceUserServiceUser_TableDelete!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            setRefreshCounter((prev) => prev + 1);
            resolve({
              result: 'submit',
              data: [],
            });
          } else {
            resolve({
              result: 'close',
              data: [],
            });
          }
        },
      });
    });
  };

  const actions: ServiceServiceUserServiceUser_TablePageActions = {
    serviceServiceUserServiceUser_TableView,
    serviceServiceUserServiceUser_TableTableFilter,
    serviceServiceUserServiceUser_TableTableRefresh,
    serviceServiceUserServiceUser_TableDelete,
    serviceServiceUserServiceUser_TableBulkDelete,
  };

  // Effect section

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceServiceUserServiceUser_TablePageContainer
          title={title}
          actions={actions}
          isLoading={isLoading}
          editMode={editMode}
          refreshCounter={refreshCounter}
        />
      </PageContainerTransition>
    </Suspense>
  );
}
