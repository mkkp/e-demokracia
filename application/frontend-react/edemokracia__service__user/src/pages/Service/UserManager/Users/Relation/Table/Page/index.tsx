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
import { useServiceUserManagerUsersRelationViewPage } from '~/dialogs/Service/UserManager/Users/Relation/View/Page';
import type { ServiceServiceUserServiceUser_TablePageActions } from '~/containers/Service/ServiceUser/ServiceUser_Table/ServiceServiceUserServiceUser_TablePageContainer';
import type {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserManager,
  ServiceUserManagerStored,
} from '~/services/data-api';
import { serviceUserManagerServiceForUsersImpl } from '~/services/data-axios';

const ServiceServiceUserServiceUser_TablePageContainer = lazy(
  () => import('~/containers/Service/ServiceUser/ServiceUser_Table/ServiceServiceUserServiceUser_TablePageContainer'),
);

// XMIID: User/(esm/_X0EKgFvPEe6jm_SkPSYEYw)/RelationFeatureTable
// Name: service::UserManager::users::Relation::Table::Page
export default function ServiceUserManagerUsersRelationTablePage() {
  // Router params section
  const { signedIdentifier } = useParams();

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
  const openServiceUserManagerUsersRelationViewPage = useServiceUserManagerUsersRelationViewPage();

  // Calculated section
  const title: string = t('Service.ServiceUser.ServiceUser_Table', { defaultValue: 'ServiceUser Table' });

  // Action section
  const serviceServiceUserServiceUser_TableBack = async () => {
    back();
  };
  const serviceServiceUserServiceUser_TableView = async (target?: ServiceServiceUserStored) => {
    await openServiceUserManagerUsersRelationViewPage(target!);

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
    serviceServiceUserServiceUser_TableBack,
    serviceServiceUserServiceUser_TableView,
    serviceServiceUserServiceUser_TableTableFilter,
    serviceServiceUserServiceUser_TableTableRefresh,
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
