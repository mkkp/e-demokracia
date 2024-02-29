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
  ServiceIssueTypeIssueType_TablePageActions,
  ServiceIssueTypeIssueType_TablePageProps,
} from '~/containers/Service/IssueType/IssueType_Table/ServiceIssueTypeIssueType_TablePageContainer';
import { useServiceUserAdminIssueTypesAccessFormPage } from '~/dialogs/Service/User/AdminIssueTypes/AccessFormPage';
import { useServiceUserAdminIssueTypesAccessViewPage } from '~/dialogs/Service/User/AdminIssueTypes/AccessViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  VoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForAdminIssueTypesImpl } from '~/services/data-axios/UserServiceForAdminIssueTypesImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceIssueTypeIssueType_TablePageActionsExtended = ServiceIssueTypeIssueType_TablePageActions & {
  postRefreshAction?: (data: ServiceIssueTypeStored[]) => Promise<void>;
};

export const SERVICE_USER_ADMIN_ISSUE_TYPES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_ADMIN_ISSUE_TYPES_ACCESS_TABLE_PAGE_ACTIONS_HOOK';
export type ServiceIssueTypeIssueType_TableActionsHook = (
  data: ServiceIssueTypeStored[],
  editMode: boolean,
) => ServiceIssueTypeIssueType_TablePageActionsExtended;

export interface ServiceIssueTypeIssueType_TableViewModel extends ServiceIssueTypeIssueType_TablePageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceIssueTypeIssueType_TableViewModelContext = createContext<ServiceIssueTypeIssueType_TableViewModel>(
  {} as any,
);
export const useServiceIssueTypeIssueType_TableViewModel = () => {
  const context = useContext(ServiceIssueTypeIssueType_TableViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceIssueTypeIssueType_TableViewModel must be used within a(n) ServiceIssueTypeIssueType_TableViewModelProvider',
    );
  }
  return context;
};

const ServiceIssueTypeIssueType_TablePageContainer = lazy(
  () => import('~/containers/Service/IssueType/IssueType_Table/ServiceIssueTypeIssueType_TablePageContainer'),
);

// XMIID: User/(esm/_-T3OwNu-Ee2Bgcx6em3jZg)/AccessTablePageDefinition
// Name: service::User::adminIssueTypes::AccessTablePage
export default function ServiceUserAdminIssueTypesAccessTablePage() {
  // Services
  const userServiceForAdminIssueTypesImpl = useMemo(() => new UserServiceForAdminIssueTypesImpl(judoAxiosProvider), []);

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
  const [data, setData] = useState<ServiceIssueTypeStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueTypeIssueType_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ADMIN_ISSUE_TYPES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueTypeIssueType_TablePageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
  );

  // Dialog hooks
  const openServiceUserAdminIssueTypesAccessFormPage = useServiceUserAdminIssueTypesAccessFormPage();
  const openServiceUserAdminIssueTypesAccessViewPage = useServiceUserAdminIssueTypesAccessViewPage();

  // Action section
  const getPageTitle = (): string => {
    return t('service.IssueType.IssueType_Table', { defaultValue: 'IssueType Table' });
  };
  const backAction = async () => {
    navigateBack();
  };
  const bulkDeleteAction = async (
    selectedRows: ServiceIssueTypeStored[],
  ): Promise<DialogResult<Array<ServiceIssueTypeStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceIssueTypeStored>({
        dialogTitle: t('judo.action.bulk-delete', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.title!,
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
  const openCreateFormAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData, openCreated } = await openServiceUserAdminIssueTypesAccessFormPage(null as any);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
    if (openCreated && returnedData) {
      await openPageAction(returnedData!);
    }
  };
  const deleteAction = async (target: ServiceIssueTypeStored, silentMode?: boolean) => {
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
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          setRefreshCounter((prev) => prev + 1);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceIssueType>(error, undefined, target);
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
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueTypeStored[]>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForAdminIssueTypesImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };
  const openPageAction = async (target: ServiceIssueType | ServiceIssueTypeStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceIssueTypeStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceUserAdminIssueTypesAccessViewPage(target!);
      setRefreshCounter((prev) => prev + 1);
    }
  };

  const actions: ServiceIssueTypeIssueType_TablePageActions = {
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
  const viewModel: ServiceIssueTypeIssueType_TableViewModel = {
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
    <ServiceIssueTypeIssueType_TableViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_-T3OwNu-Ee2Bgcx6em3jZg)/AccessTablePageDefinition"
          data-page-name="service::User::adminIssueTypes::AccessTablePage"
        />
        <PageContainerTransition>
          <ServiceIssueTypeIssueType_TablePageContainer
            actions={actions}
            isLoading={isLoading}
            editMode={editMode}
            refreshCounter={refreshCounter}
          />
        </PageContainerTransition>
      </Suspense>
    </ServiceIssueTypeIssueType_TableViewModelContext.Provider>
  );
}
