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
  ServiceVoteEntryVoteEntry_TablePageActions,
  ServiceVoteEntryVoteEntry_TablePageProps,
} from '~/containers/Service/VoteEntry/VoteEntry_Table/ServiceVoteEntryVoteEntry_TablePageContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceVoteEntry,
  ServiceVoteEntryQueryCustomizer,
  ServiceVoteEntryStored,
  VoteStatus,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForVoteEntriesImpl } from '~/services/data-axios/UserServiceForVoteEntriesImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceVoteEntryVoteEntry_TablePageActionsExtended = ServiceVoteEntryVoteEntry_TablePageActions & {
  postRefreshAction?: (data: ServiceVoteEntryStored[]) => Promise<void>;
};

export const SERVICE_USER_VOTE_ENTRIES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_VOTE_ENTRIES_ACCESS_TABLE_PAGE_ACTIONS_HOOK';
export type ServiceVoteEntryVoteEntry_TableActionsHook = (
  data: ServiceVoteEntryStored[],
  editMode: boolean,
) => ServiceVoteEntryVoteEntry_TablePageActionsExtended;

export interface ServiceVoteEntryVoteEntry_TableViewModel extends ServiceVoteEntryVoteEntry_TablePageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceVoteEntryVoteEntry_TableViewModelContext = createContext<ServiceVoteEntryVoteEntry_TableViewModel>(
  {} as any,
);
export const useServiceVoteEntryVoteEntry_TableViewModel = () => {
  const context = useContext(ServiceVoteEntryVoteEntry_TableViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceVoteEntryVoteEntry_TableViewModel must be used within a(n) ServiceVoteEntryVoteEntry_TableViewModelProvider',
    );
  }
  return context;
};

const ServiceVoteEntryVoteEntry_TablePageContainer = lazy(
  () => import('~/containers/Service/VoteEntry/VoteEntry_Table/ServiceVoteEntryVoteEntry_TablePageContainer'),
);

// XMIID: User/(esm/_0CUYEORyEe2Bgcx6em3jZg)/AccessTablePageDefinition
// Name: service::User::voteEntries::AccessTablePage
export default function ServiceUserVoteEntriesAccessTablePage() {
  // Services
  const userServiceForVoteEntriesImpl = useMemo(() => new UserServiceForVoteEntriesImpl(judoAxiosProvider), []);

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
  const [data, setData] = useState<ServiceVoteEntryStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceVoteEntryVoteEntry_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_VOTE_ENTRIES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceVoteEntryVoteEntry_TablePageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
  );

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.VoteEntry.VoteEntry_Table', { defaultValue: 'VoteEntry Table' });
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
  const refreshAction = async (queryCustomizer: ServiceVoteEntryQueryCustomizer): Promise<ServiceVoteEntryStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForVoteEntriesImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };
  const openPageAction = async (target: ServiceVoteEntry | ServiceVoteEntryStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceVoteEntryStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // There was no .targetPageDefinition for this action. Target Page is most likely empty in the model!
    }
  };

  const actions: ServiceVoteEntryVoteEntry_TablePageActions = {
    getPageTitle,
    backAction,
    filterAction,
    refreshAction,
    openPageAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceVoteEntryVoteEntry_TableViewModel = {
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
    <ServiceVoteEntryVoteEntry_TableViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_0CUYEORyEe2Bgcx6em3jZg)/AccessTablePageDefinition"
          data-page-name="service::User::voteEntries::AccessTablePage"
        />
        <PageContainerTransition>
          <ServiceVoteEntryVoteEntry_TablePageContainer
            actions={actions}
            isLoading={isLoading}
            editMode={editMode}
            refreshCounter={refreshCounter}
          />
        </PageContainerTransition>
      </Suspense>
    </ServiceVoteEntryVoteEntry_TableViewModelContext.Provider>
  );
}
