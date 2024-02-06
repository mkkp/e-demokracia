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
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceServiceUserServiceUser_TablePageActions,
  ServiceServiceUserServiceUser_TablePageProps,
} from '~/containers/Service/ServiceUser/ServiceUser_Table/ServiceServiceUserServiceUser_TablePageContainer';
import { useServiceUserManagerUsersRelationViewPage } from '~/dialogs/Service/UserManager/Users/RelationViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserManager,
  ServiceUserManagerStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceUserManagerServiceForUsersImpl } from '~/services/data-axios/ServiceUserManagerServiceForUsersImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceServiceUserServiceUser_TablePageActionsExtended = ServiceServiceUserServiceUser_TablePageActions & {
  postRefreshAction?: (data: ServiceServiceUserStored[]) => Promise<void>;
};

export const SERVICE_USER_MANAGER_USERS_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_MANAGER_USERS_RELATION_TABLE_PAGE_ACTIONS_HOOK';
export type ServiceServiceUserServiceUser_TableActionsHook = (
  data: ServiceServiceUserStored[],
  editMode: boolean,
) => ServiceServiceUserServiceUser_TablePageActionsExtended;

export interface ServiceServiceUserServiceUser_TableViewModel extends ServiceServiceUserServiceUser_TablePageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceServiceUserServiceUser_TableViewModelContext = createContext<ServiceServiceUserServiceUser_TableViewModel>(
  {} as any,
);
export const useServiceServiceUserServiceUser_TableViewModel = () => {
  const context = useContext(ServiceServiceUserServiceUser_TableViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceServiceUserServiceUser_TableViewModel must be used within a(n) ServiceServiceUserServiceUser_TableViewModelProvider',
    );
  }
  return context;
};

const ServiceServiceUserServiceUser_TablePageContainer = lazy(
  () => import('~/containers/Service/ServiceUser/ServiceUser_Table/ServiceServiceUserServiceUser_TablePageContainer'),
);

// XMIID: User/(esm/_X0EKgFvPEe6jm_SkPSYEYw)/RelationFeatureTable
// Name: service::UserManager::users::RelationTablePage
export default function ServiceUserManagerUsersRelationTablePage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Services
  const serviceUserManagerServiceForUsersImpl = useMemo(
    () => new ServiceUserManagerServiceForUsersImpl(judoAxiosProvider),
    [],
  );

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
  const [data, setData] = useState<ServiceServiceUserStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceServiceUserServiceUser_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_MANAGER_USERS_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceServiceUserServiceUser_TablePageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
  );

  // Dialog hooks
  const openServiceUserManagerUsersRelationViewPage = useServiceUserManagerUsersRelationViewPage();

  // Action section
  const getPageTitle = (): string => {
    return t('service.ServiceUser.ServiceUser_Table', { defaultValue: 'ServiceUser Table' });
  };
  const backAction = async () => {
    navigateBack();
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
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return serviceUserManagerServiceForUsersImpl.list(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        queryCustomizer,
      );
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };
  const openPageAction = async (target: ServiceServiceUser | ServiceServiceUserStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceServiceUserStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceUserManagerUsersRelationViewPage(target!);
      setRefreshCounter((prev) => prev + 1);
    }
  };

  const actions: ServiceServiceUserServiceUser_TablePageActions = {
    getPageTitle,
    backAction,
    filterAction,
    refreshAction,
    openPageAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceServiceUserServiceUser_TableViewModel = {
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
    <ServiceServiceUserServiceUser_TableViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_X0EKgFvPEe6jm_SkPSYEYw)/RelationFeatureTable"
          data-page-name="service::UserManager::users::RelationTablePage"
        />
        <PageContainerTransition>
          <ServiceServiceUserServiceUser_TablePageContainer
            actions={actions}
            isLoading={isLoading}
            editMode={editMode}
            refreshCounter={refreshCounter}
          />
        </PageContainerTransition>
      </Suspense>
    </ServiceServiceUserServiceUser_TableViewModelContext.Provider>
  );
}
