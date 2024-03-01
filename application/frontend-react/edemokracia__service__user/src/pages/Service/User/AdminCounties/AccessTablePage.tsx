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
import { Suspense, createContext, lazy, useContext, useMemo, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceCountyCounty_TablePageActions,
  ServiceCountyCounty_TablePageProps,
} from '~/containers/Service/County/County_Table/ServiceCountyCounty_TablePageContainer';
import { useServiceUserAdminCountiesAccessFormPage } from '~/dialogs/Service/User/AdminCounties/AccessFormPage';
import { useServiceUserAdminCountiesAccessViewPage } from '~/dialogs/Service/User/AdminCounties/AccessViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type { ServiceCounty, ServiceCountyQueryCustomizer, ServiceCountyStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForAdminCountiesImpl } from '~/services/data-axios/UserServiceForAdminCountiesImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceCountyCounty_TablePageActionsExtended = ServiceCountyCounty_TablePageActions & {
  postRefreshAction?: (data: ServiceCountyStored[]) => Promise<void>;
};

export const SERVICE_USER_ADMIN_COUNTIES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_ADMIN_COUNTIES_ACCESS_TABLE_PAGE_ACTIONS_HOOK';
export type ServiceCountyCounty_TableActionsHook = (
  data: ServiceCountyStored[],
  editMode: boolean,
) => ServiceCountyCounty_TablePageActionsExtended;

export interface ServiceCountyCounty_TableViewModel extends ServiceCountyCounty_TablePageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceCountyCounty_TableViewModelContext = createContext<ServiceCountyCounty_TableViewModel>({} as any);
export const useServiceCountyCounty_TableViewModel = () => {
  const context = useContext(ServiceCountyCounty_TableViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceCountyCounty_TableViewModel must be used within a(n) ServiceCountyCounty_TableViewModelProvider',
    );
  }
  return context;
};

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
  const { setLatestViewData } = useViewData();
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceCountyStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCountyCounty_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ADMIN_COUNTIES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCountyCounty_TablePageActionsExtended | undefined = customActionsHook?.(data, editMode);

  // Dialog hooks
  const openServiceUserAdminCountiesAccessFormPage = useServiceUserAdminCountiesAccessFormPage();
  const openServiceUserAdminCountiesAccessViewPage = useServiceUserAdminCountiesAccessViewPage();

  // Action section
  const getPageTitle = (): string => {
    return t('service.County.County_Table', { defaultValue: 'County Table' });
  };
  const backAction = async () => {
    navigateBack();
  };
  const bulkDeleteAction = async (
    selectedRows: ServiceCountyStored[],
  ): Promise<DialogResult<Array<ServiceCountyStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceCountyStored>({
        dialogTitle: t('judo.action.bulk-delete', { defaultValue: 'Delete' }),
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
        autoCloseOnSuccess: true,
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
  const openCreateFormAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData, openCreated } = await openServiceUserAdminCountiesAccessFormPage(null as any);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
    if (openCreated && returnedData) {
      await openPageAction(returnedData!);
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
      } else {
        throw error;
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
  const refreshAction = async (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCountyStored[]>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForAdminCountiesImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };
  const openPageAction = async (target: ServiceCounty | ServiceCountyStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceCountyStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceUserAdminCountiesAccessViewPage(target!);
      setRefreshCounter((prev) => prev + 1);
    }
  };

  const actions: ServiceCountyCounty_TablePageActions = {
    getPageTitle,
    backAction,
    bulkDeleteAction,
    openCreateFormAction,
    deleteAction,
    filterAction,
    refreshAction,
    openPageAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceCountyCounty_TableViewModel = {
    actions,
    isLoading,
    setIsLoading,
    refreshCounter,
    editMode,
    setEditMode,
    refresh,
  };

  // Effect section

  return (
    <ServiceCountyCounty_TableViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_8DntEIXgEe2kLcMqsIbMgQ)/AccessTablePageDefinition"
          data-page-name="service::User::adminCounties::AccessTablePage"
        />
        <PageContainerTransition>
          <ServiceCountyCounty_TablePageContainer
            actions={actions}
            isLoading={isLoading}
            editMode={editMode}
            refreshCounter={refreshCounter}
          />
        </PageContainerTransition>
      </Suspense>
    </ServiceCountyCounty_TableViewModelContext.Provider>
  );
}
