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
import { useServiceUserAdminIssueTypesAccessFormPage } from '~/dialogs/Service/User/AdminIssueTypes/Access/Form/Page';
import { useServiceUserAdminIssueTypesAccessViewPage } from '~/dialogs/Service/User/AdminIssueTypes/Access/View/Page';
import type { ServiceIssueTypeIssueType_TablePageActions } from '~/containers/Service/IssueType/IssueType_Table/ServiceIssueTypeIssueType_TablePageContainer';
import type {
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  VoteType,
} from '~/services/data-api';
import { userServiceForAdminIssueTypesImpl } from '~/services/data-axios';

const ServiceIssueTypeIssueType_TablePageContainer = lazy(
  () => import('~/containers/Service/IssueType/IssueType_Table/ServiceIssueTypeIssueType_TablePageContainer'),
);

// XMIID: User/(esm/_-T3OwNu-Ee2Bgcx6em3jZg)/AccessTablePageDefinition
// Name: service::User::adminIssueTypes::Access::Table::Page
export default function ServiceUserAdminIssueTypesAccessTablePage() {
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
  const [data, setData] = useState<ServiceIssueTypeStored[]>([]);

  // Dialog hooks
  const openServiceUserAdminIssueTypesAccessFormPage = useServiceUserAdminIssueTypesAccessFormPage();
  const openServiceUserAdminIssueTypesAccessViewPage = useServiceUserAdminIssueTypesAccessViewPage();

  // Calculated section
  const title: string = t('Service.IssueType.IssueType_Table', { defaultValue: 'IssueType Table' });

  // Action section
  const serviceIssueTypeIssueType_TableView = async (target?: ServiceIssueTypeStored) => {
    await openServiceUserAdminIssueTypesAccessViewPage(target!);

    setRefreshCounter((prev) => prev + 1);
  };
  const serviceIssueTypeIssueType_TableTableFilter = async (
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
  const serviceIssueTypeIssueType_TableTableRefresh = async (
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForAdminIssueTypesImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceIssueTypeIssueType_TableCreateOpen = async () => {
    const { result, data: returnedData } = await openServiceUserAdminIssueTypesAccessFormPage(data);
    setRefreshCounter((prev) => prev + 1);
  };
  const serviceIssueTypeIssueType_TableDelete = async (target: ServiceIssueTypeStored, silentMode?: boolean) => {
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
        await userServiceForAdminIssueTypesImpl.delete(target);

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
        handleError<ServiceIssueType>(error, undefined, target);
      }
    }
  };
  const serviceIssueTypeIssueType_TableBulkDelete = async (
    selectedRows: ServiceIssueTypeStored[],
  ): Promise<DialogResult<Array<ServiceIssueTypeStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceIssueTypeStored>({
        dialogTitle: t('TMP', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.serviceIssueTypeIssueType_TableDelete) {
              await actions.serviceIssueTypeIssueType_TableDelete!(item, true);
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

  const actions: ServiceIssueTypeIssueType_TablePageActions = {
    serviceIssueTypeIssueType_TableView,
    serviceIssueTypeIssueType_TableTableFilter,
    serviceIssueTypeIssueType_TableTableRefresh,
    serviceIssueTypeIssueType_TableCreateOpen,
    serviceIssueTypeIssueType_TableDelete,
    serviceIssueTypeIssueType_TableBulkDelete,
  };

  // Effect section

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceIssueTypeIssueType_TablePageContainer
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
