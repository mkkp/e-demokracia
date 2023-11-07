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
import { useServiceUserAdminCategoriesAccessFormPage } from '~/dialogs/Service/User/AdminCategories/Access/Form/Page';
import { useServiceUserAdminCategoriesAccessViewPage } from '~/dialogs/Service/User/AdminCategories/Access/View/Page';
import type { ServiceIssueCategoryIssueCategory_TablePageActions } from '~/containers/Service/IssueCategory/IssueCategory_Table/ServiceIssueCategoryIssueCategory_TablePageContainer';
import type {
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
} from '~/services/data-api';
import { userServiceForAdminCategoriesImpl } from '~/services/data-axios';

const ServiceIssueCategoryIssueCategory_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/IssueCategory/IssueCategory_Table/ServiceIssueCategoryIssueCategory_TablePageContainer'
    ),
);

// XMIID: User/(esm/_vWzZ8G4rEe2siJt-xjHAyw)/AccessTablePageDefinition
// Name: service::User::adminCategories::Access::Table::Page
export default function ServiceUserAdminCategoriesAccessTablePage() {
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
  const [data, setData] = useState<ServiceIssueCategoryStored[]>([]);

  // Dialog hooks
  const openServiceUserAdminCategoriesAccessFormPage = useServiceUserAdminCategoriesAccessFormPage();
  const openServiceUserAdminCategoriesAccessViewPage = useServiceUserAdminCategoriesAccessViewPage();

  // Calculated section
  const title: string = t('Service.IssueCategory.IssueCategory_Table', { defaultValue: 'IssueCategory Table' });

  // Action section
  const serviceIssueCategoryIssueCategory_TableView = async (target?: ServiceIssueCategoryStored) => {
    await openServiceUserAdminCategoriesAccessViewPage(target!);

    setRefreshCounter((prev) => prev + 1);
  };
  const serviceIssueCategoryIssueCategory_TableTableFilter = async (
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
  const serviceIssueCategoryIssueCategory_TableTableRefresh = async (
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ): Promise<ServiceIssueCategoryStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForAdminCategoriesImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceIssueCategoryIssueCategory_TableCreateOpen = async () => {
    const { result, data: returnedData } = await openServiceUserAdminCategoriesAccessFormPage(data);
    setRefreshCounter((prev) => prev + 1);
  };
  const serviceIssueCategoryIssueCategory_TableDelete = async (
    target: ServiceIssueCategoryStored,
    silentMode?: boolean,
  ) => {
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
        await userServiceForAdminCategoriesImpl.delete(target);

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
        handleError<ServiceIssueCategory>(error, undefined, target);
      }
    }
  };
  const serviceIssueCategoryIssueCategory_TableBulkDelete = async (
    selectedRows: ServiceIssueCategoryStored[],
  ): Promise<DialogResult<Array<ServiceIssueCategoryStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceIssueCategoryStored>({
        dialogTitle: t('TMP', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.serviceIssueCategoryIssueCategory_TableDelete) {
              await actions.serviceIssueCategoryIssueCategory_TableDelete!(item, true);
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

  const actions: ServiceIssueCategoryIssueCategory_TablePageActions = {
    serviceIssueCategoryIssueCategory_TableView,
    serviceIssueCategoryIssueCategory_TableTableFilter,
    serviceIssueCategoryIssueCategory_TableTableRefresh,
    serviceIssueCategoryIssueCategory_TableCreateOpen,
    serviceIssueCategoryIssueCategory_TableDelete,
    serviceIssueCategoryIssueCategory_TableBulkDelete,
  };

  // Effect section

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceIssueCategoryIssueCategory_TablePageContainer
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
