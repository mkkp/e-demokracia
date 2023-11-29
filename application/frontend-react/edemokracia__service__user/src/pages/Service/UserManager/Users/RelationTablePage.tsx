//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import { useState, useMemo, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';
import { PageContainerTransition } from '~/theme/animations';
import { useServiceUserManagerUsersRelationViewPage } from '~/dialogs/Service/UserManager/Users/RelationViewPage';
import type { ServiceServiceUserServiceUser_TablePageActions } from '~/containers/Service/ServiceUser/ServiceUser_Table/ServiceServiceUserServiceUser_TablePageContainer';
import type {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserManager,
  ServiceUserManagerStored,
} from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceUserManagerServiceForUsersImpl } from '~/services/data-axios/ServiceUserManagerServiceForUsersImpl';

export type ServiceServiceUserServiceUser_TablePageActionsExtended = ServiceServiceUserServiceUser_TablePageActions & {
  postRefreshAction?: (data: ServiceServiceUserStored[]) => Promise<void>;
};

export const SERVICE_USER_MANAGER_USERS_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceServiceUserServiceUser_TableActionsHook';
export type ServiceServiceUserServiceUser_TableActionsHook = (
  data: ServiceServiceUserStored[],
  editMode: boolean,
) => ServiceServiceUserServiceUser_TablePageActionsExtended;

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
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceServiceUserStored[]>([]);

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

  // Calculated section
  const title: string = t('service.ServiceUser.ServiceUser_Table', { defaultValue: 'ServiceUser Table' });

  // Private actions
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    navigateBack();
  };
  const openPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceUserManagerUsersRelationViewPage(target!);
    setRefreshCounter((prev) => prev + 1);
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
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };

  const actions: ServiceServiceUserServiceUser_TablePageActions = {
    backAction,
    openPageAction,
    filterAction,
    refreshAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_X0EKgFvPEe6jm_SkPSYEYw)/RelationFeatureTable"
      data-page-name="service::UserManager::users::RelationTablePage"
    >
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
    </div>
  );
}
