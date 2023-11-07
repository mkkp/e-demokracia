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
import { useServiceUserAdminCountiesAccessFormPage } from '~/dialogs/Service/User/AdminCounties/Access/Form/Page';
import { useServiceUserAdminCountiesAccessViewPage } from '~/dialogs/Service/User/AdminCounties/Access/View/Page';
import type { ServiceCountyCounty_TablePageActions } from '~/containers/Service/County/County_Table/ServiceCountyCounty_TablePageContainer';
import type { ServiceCounty, ServiceCountyQueryCustomizer, ServiceCountyStored } from '~/services/data-api';
import { userServiceForAdminCountiesImpl } from '~/services/data-axios';

const ServiceCountyCounty_TablePageContainer = lazy(
  () => import('~/containers/Service/County/County_Table/ServiceCountyCounty_TablePageContainer'),
);

// XMIID: User/(esm/_8DntEIXgEe2kLcMqsIbMgQ)/AccessTablePageDefinition
// Name: service::User::adminCounties::Access::Table::Page
export default function ServiceUserAdminCountiesAccessTablePage() {
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
  const [data, setData] = useState<ServiceCountyStored[]>([]);

  // Dialog hooks
  const openServiceUserAdminCountiesAccessFormPage = useServiceUserAdminCountiesAccessFormPage();
  const openServiceUserAdminCountiesAccessViewPage = useServiceUserAdminCountiesAccessViewPage();

  // Calculated section
  const title: string = t('Service.County.County_Table', { defaultValue: 'County Table' });

  // Action section
  const serviceCountyCounty_TableView = async (target?: ServiceCountyStored) => {
    await openServiceUserAdminCountiesAccessViewPage(target!);

    setRefreshCounter((prev) => prev + 1);
  };
  const serviceCountyCounty_TableTableFilter = async (
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
  const serviceCountyCounty_TableTableRefresh = async (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForAdminCountiesImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceCountyCounty_TableCreateOpen = async () => {
    const { result, data: returnedData } = await openServiceUserAdminCountiesAccessFormPage(data);
    setRefreshCounter((prev) => prev + 1);
  };
  const serviceCountyCounty_TableDelete = async (target: ServiceCountyStored, silentMode?: boolean) => {
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
        await userServiceForAdminCountiesImpl.delete(target);

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
        handleError<ServiceCounty>(error, undefined, target);
      }
    }
  };
  const serviceCountyCounty_TableBulkDelete = async (
    selectedRows: ServiceCountyStored[],
  ): Promise<DialogResult<Array<ServiceCountyStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceCountyStored>({
        dialogTitle: t('TMP', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.name!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.serviceCountyCounty_TableDelete) {
              await actions.serviceCountyCounty_TableDelete!(item, true);
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

  const actions: ServiceCountyCounty_TablePageActions = {
    serviceCountyCounty_TableView,
    serviceCountyCounty_TableTableFilter,
    serviceCountyCounty_TableTableRefresh,
    serviceCountyCounty_TableCreateOpen,
    serviceCountyCounty_TableDelete,
    serviceCountyCounty_TableBulkDelete,
  };

  // Effect section

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceCountyCounty_TablePageContainer
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
