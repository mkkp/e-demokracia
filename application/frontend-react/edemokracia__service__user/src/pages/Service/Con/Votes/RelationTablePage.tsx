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
  ServiceSimpleVoteSimpleVote_TablePageActions,
  ServiceSimpleVoteSimpleVote_TablePageProps,
} from '~/containers/Service/SimpleVote/SimpleVote_Table/ServiceSimpleVoteSimpleVote_TablePageContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceConVotesRelationViewPage } from '~/routes';
import type {
  ServiceCon,
  ServiceConStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
  SimpleVoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceConServiceForVotesImpl } from '~/services/data-axios/ServiceConServiceForVotesImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceSimpleVoteSimpleVote_TablePageActionsExtended = ServiceSimpleVoteSimpleVote_TablePageActions & {
  postRefreshAction?: (data: ServiceSimpleVoteStored[]) => Promise<void>;
};

export const SERVICE_CON_VOTES_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_CON_VOTES_RELATION_TABLE_PAGE_ACTIONS_HOOK';
export type ServiceSimpleVoteSimpleVote_TableActionsHook = (
  data: ServiceSimpleVoteStored[],
  editMode: boolean,
) => ServiceSimpleVoteSimpleVote_TablePageActionsExtended;

export interface ServiceSimpleVoteSimpleVote_TableViewModel extends ServiceSimpleVoteSimpleVote_TablePageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceSimpleVoteSimpleVote_TableViewModelContext = createContext<ServiceSimpleVoteSimpleVote_TableViewModel>(
  {} as any,
);
export const useServiceSimpleVoteSimpleVote_TableViewModel = () => {
  const context = useContext(ServiceSimpleVoteSimpleVote_TableViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceSimpleVoteSimpleVote_TableViewModel must be used within a(n) ServiceSimpleVoteSimpleVote_TableViewModelProvider',
    );
  }
  return context;
};

const ServiceSimpleVoteSimpleVote_TablePageContainer = lazy(
  () => import('~/containers/Service/SimpleVote/SimpleVote_Table/ServiceSimpleVoteSimpleVote_TablePageContainer'),
);

// XMIID: User/(esm/_qZ3sEGksEe25ONJ3V89cVA)/RelationFeatureTable
// Name: service::Con::votes::RelationTablePage
export default function ServiceConVotesRelationTablePage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Services
  const serviceConServiceForVotesImpl = useMemo(() => new ServiceConServiceForVotesImpl(judoAxiosProvider), []);

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
  const [data, setData] = useState<ServiceSimpleVoteStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceSimpleVoteSimpleVote_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_CON_VOTES_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceSimpleVoteSimpleVote_TablePageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
  );

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.SimpleVote.SimpleVote_Table', { defaultValue: 'SimpleVote Table' });
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
    queryCustomizer: ServiceSimpleVoteQueryCustomizer,
  ): Promise<ServiceSimpleVoteStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return serviceConServiceForVotesImpl.list(
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
  const openPageAction = async (target: ServiceSimpleVote | ServiceSimpleVoteStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceSimpleVoteStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(routeToServiceConVotesRelationViewPage((target as ServiceSimpleVoteStored)!.__signedIdentifier));
    }
  };

  const actions: ServiceSimpleVoteSimpleVote_TablePageActions = {
    getPageTitle,
    backAction,
    filterAction,
    refreshAction,
    openPageAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceSimpleVoteSimpleVote_TableViewModel = {
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
    <ServiceSimpleVoteSimpleVote_TableViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_qZ3sEGksEe25ONJ3V89cVA)/RelationFeatureTable"
          data-page-name="service::Con::votes::RelationTablePage"
        />
        <PageContainerTransition>
          <ServiceSimpleVoteSimpleVote_TablePageContainer
            actions={actions}
            isLoading={isLoading}
            editMode={editMode}
            refreshCounter={refreshCounter}
          />
        </PageContainerTransition>
      </Suspense>
    </ServiceSimpleVoteSimpleVote_TableViewModelContext.Provider>
  );
}
