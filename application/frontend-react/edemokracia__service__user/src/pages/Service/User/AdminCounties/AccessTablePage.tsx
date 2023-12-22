//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import type { GridFilterModel } from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, lazy, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type { ServiceCountyCounty_TablePageActions } from '~/containers/Service/County/County_Table/ServiceCountyCounty_TablePageContainer';
import { useServiceUserAdminCountiesAccessFormPage } from '~/dialogs/Service/User/AdminCounties/AccessFormPage';
import { useServiceUserAdminCountiesAccessViewPage } from '~/dialogs/Service/User/AdminCounties/AccessViewPage';
import { useCRUDDialog, useSnacks } from '~/hooks';
import type { ServiceCounty, ServiceCountyQueryCustomizer, ServiceCountyStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForAdminCountiesImpl } from '~/services/data-axios/UserServiceForAdminCountiesImpl';
import { PageContainerTransition } from '~/theme/animations';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceCountyCounty_TablePageActionsExtended = ServiceCountyCounty_TablePageActions & {
  postRefreshAction?: (data: ServiceCountyStored[]) => Promise<void>;
};

export const SERVICE_USER_ADMIN_COUNTIES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceCountyCounty_TableActionsHook';
export type ServiceCountyCounty_TableActionsHook = (
  data: ServiceCountyStored[],
  editMode: boolean,
) => ServiceCountyCounty_TablePageActionsExtended;

const ServiceCountyCounty_TablePageContainer = lazy(
  () => import('~/containers/Service/County/County_Table/ServiceCountyCounty_TablePageContainer'),
);

// XMIID: User/(esm/_8DntEIXgEe2kLcMqsIbMgQ)/AccessTablePageDefinition
// Name: service::User::adminCounties::AccessTablePage
export default function ServiceUserAdminCountiesAccessTablePage() {
  // Services
  const userServiceForAdminCountiesImpl = useMemo(() => new UserServiceForAdminCountiesImpl(judoAxiosProvider), []);

  // Hooks section
  const { t } = useTranslation();
  const { showSuccessSnack, showErrorSnack } = useSnacks();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceCountyStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCountyCounty_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ADMIN_COUNTIES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCountyCounty_TablePageActionsExtended | undefined = customActionsHook?.(data, editMode);

  // Dialog hooks
  const openServiceUserAdminCountiesAccessFormPage = useServiceUserAdminCountiesAccessFormPage();
  const openServiceUserAdminCountiesAccessViewPage = useServiceUserAdminCountiesAccessViewPage();

  // Calculated section
  const title: string = t('service.County.County_Table', { defaultValue: 'County Table' });

  // Private actions
  const submit = async () => {};

  // Action section
  const bulkDeleteAction = async (
    selectedRows: ServiceCountyStored[],
  ): Promise<DialogResult<Array<ServiceCountyStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceCountyStored>({
        dialogTitle: t('service.County.County_Table.BulkDelete', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.name!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.deleteAction) {
              await actions.deleteAction!(item, true);
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
  const openFormAction = async () => {
    const { result, data: returnedData } = await openServiceUserAdminCountiesAccessFormPage(data);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const deleteAction = async (target: ServiceCountyStored, silentMode?: boolean) => {
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
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          setRefreshCounter((prev) => prev + 1);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceCounty>(error, undefined, target);
      }
    }
  };
  const filterAction = async (
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
  const refreshAction = async (queryCustomizer: ServiceCountyQueryCustomizer): Promise<ServiceCountyStored[]> => {
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
  const openPageAction = async (target?: ServiceCountyStored) => {
    await openServiceUserAdminCountiesAccessViewPage(target!);
    setRefreshCounter((prev) => prev + 1);
  };

  const actions: ServiceCountyCounty_TablePageActions = {
    bulkDeleteAction,
    openFormAction,
    deleteAction,
    filterAction,
    refreshAction,
    openPageAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_8DntEIXgEe2kLcMqsIbMgQ)/AccessTablePageDefinition"
      data-page-name="service::User::adminCounties::AccessTablePage"
    >
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
    </div>
  );
}
