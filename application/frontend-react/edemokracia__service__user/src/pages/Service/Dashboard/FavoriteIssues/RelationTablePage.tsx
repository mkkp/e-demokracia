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
  ServiceIssueIssue_TablePageActions,
  ServiceIssueIssue_TablePageProps,
} from '~/containers/Service/Issue/Issue_Table/ServiceIssueIssue_TablePageContainer';
import { useServiceDashboardFavoriteIssuesAddSelectorPage } from '~/dialogs/Service/Dashboard/FavoriteIssues/AddSelectorPage';
import { useServiceIssueIssue_View_EditCloseDebateInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CloseDebate/Input/Form';
import { useServiceIssueIssue_View_EditCreateCommentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateComment/Input/Form';
import { useServiceIssueIssue_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateConArgument/Input/Form';
import { useServiceIssueIssue_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateProArgument/Input/Form';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceDashboardFavoriteIssuesRelationViewPage } from '~/routes';
import type {
  IssueScope,
  IssueStatus,
  ServiceDashboard,
  ServiceDashboardStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  VoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceDashboardServiceForFavoriteIssuesImpl } from '~/services/data-axios/ServiceDashboardServiceForFavoriteIssuesImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceIssueIssue_TablePageActionsExtended = ServiceIssueIssue_TablePageActions & {
  postActivateForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
  postAddToFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
  postCloseVoteForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
  postDeleteOrArchiveForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
  postRemoveFromFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
  postRefreshAction?: (data: ServiceIssueStored[]) => Promise<void>;
};

export const SERVICE_DASHBOARD_FAVORITE_ISSUES_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_DASHBOARD_FAVORITE_ISSUES_RELATION_TABLE_PAGE_ACTIONS_HOOK';
export type ServiceIssueIssue_TableActionsHook = (
  data: ServiceIssueStored[],
  editMode: boolean,
) => ServiceIssueIssue_TablePageActionsExtended;

export interface ServiceIssueIssue_TableViewModel extends ServiceIssueIssue_TablePageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceIssueIssue_TableViewModelContext = createContext<ServiceIssueIssue_TableViewModel>({} as any);
export const useServiceIssueIssue_TableViewModel = () => {
  const context = useContext(ServiceIssueIssue_TableViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceIssueIssue_TableViewModel must be used within a(n) ServiceIssueIssue_TableViewModelProvider',
    );
  }
  return context;
};

const ServiceIssueIssue_TablePageContainer = lazy(
  () => import('~/containers/Service/Issue/Issue_Table/ServiceIssueIssue_TablePageContainer'),
);

// XMIID: User/(esm/_Fp_g8Fw2Ee6gN-oVBDDIOQ)/RelationFeatureTable
// Name: service::Dashboard::favoriteIssues::RelationTablePage
export default function ServiceDashboardFavoriteIssuesRelationTablePage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Services
  const serviceDashboardServiceForFavoriteIssuesImpl = useMemo(
    () => new ServiceDashboardServiceForFavoriteIssuesImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceIssueStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueIssue_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_DASHBOARD_FAVORITE_ISSUES_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueIssue_TablePageActionsExtended | undefined = customActionsHook?.(data, editMode);

  // Dialog hooks
  const openServiceDashboardFavoriteIssuesAddSelectorPage = useServiceDashboardFavoriteIssuesAddSelectorPage();
  const openServiceIssueIssue_View_EditCloseDebateInputForm = useServiceIssueIssue_View_EditCloseDebateInputForm();
  const openServiceIssueIssue_View_EditCreateCommentInputForm = useServiceIssueIssue_View_EditCreateCommentInputForm();
  const openServiceIssueIssue_View_EditCreateConArgumentInputForm =
    useServiceIssueIssue_View_EditCreateConArgumentInputForm();
  const openServiceIssueIssue_View_EditCreateProArgumentInputForm =
    useServiceIssueIssue_View_EditCreateProArgumentInputForm();

  // Action section
  const getPageTitle = (): string => {
    return t('service.Issue.Issue_Table', { defaultValue: 'Issue Table' });
  };
  const openAddSelectorAction = async () => {
    const { result, data: returnedData } = await openServiceDashboardFavoriteIssuesAddSelectorPage(
      { __signedIdentifier: signedIdentifier },
      [],
    );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await serviceDashboardServiceForFavoriteIssuesImpl.addFavoriteIssues(
            { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
            returnedData,
          );
          setRefreshCounter((prev) => prev + 1);
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const backAction = async () => {
    navigateBack();
  };
  const bulkRemoveAction = async (
    selectedRows: ServiceIssueStored[],
  ): Promise<DialogResult<Array<ServiceIssueStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceIssueStored>({
        dialogTitle: t('service.Issue.Issue_Table.BulkRemove', { defaultValue: 'Remove' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.removeAction) {
              await actions.removeAction!(item, true);
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
            });
          }
        },
      });
    });
  };
  const removeAction = async (target?: ServiceIssueStored, silentMode?: boolean) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await serviceDashboardServiceForFavoriteIssuesImpl.removeFavoriteIssues(
          { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
          [target!],
        );
        if (!silentMode) {
          setRefreshCounter((prev) => prev + 1);
        }
      } catch (error) {
        if (!silentMode) {
          handleError<ServiceIssue>(error, undefined, target);
        }
      } finally {
        if (!silentMode) {
          setIsLoading(false);
        }
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
  const refreshAction = async (queryCustomizer: ServiceIssueQueryCustomizer): Promise<ServiceIssueStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return serviceDashboardServiceForFavoriteIssuesImpl.list(
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
  const openPageAction = async (target: ServiceIssue | ServiceIssueStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceIssueStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceDashboardFavoriteIssuesRelationViewPage((target as ServiceIssueStored)!.__signedIdentifier),
      );
    }
  };
  const activateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await serviceDashboardServiceForFavoriteIssuesImpl.activate(target!);
      if (customActions?.postActivateForIssueAction) {
        await customActions.postActivateForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        setRefreshCounter((prev) => prev + 1);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const addToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await serviceDashboardServiceForFavoriteIssuesImpl.addToFavorites(target!);
      if (customActions?.postAddToFavoritesForIssueAction) {
        await customActions.postAddToFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        setRefreshCounter((prev) => prev + 1);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const closeDebateAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const closeVoteForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await serviceDashboardServiceForFavoriteIssuesImpl.closeVote(target!);
      if (customActions?.postCloseVoteForIssueAction) {
        await customActions.postCloseVoteForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        setRefreshCounter((prev) => prev + 1);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const deleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await serviceDashboardServiceForFavoriteIssuesImpl.deleteOrArchive(target!);
      if (customActions?.postDeleteOrArchiveForIssueAction) {
        await customActions.postDeleteOrArchiveForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        setRefreshCounter((prev) => prev + 1);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const removeFromFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await serviceDashboardServiceForFavoriteIssuesImpl.removeFromFavorites(target!);
      if (customActions?.postRemoveFromFavoritesForIssueAction) {
        await customActions.postRemoveFromFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        setRefreshCounter((prev) => prev + 1);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const createConArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const createProArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const createCommentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };

  const actions: ServiceIssueIssue_TablePageActions = {
    getPageTitle,
    openAddSelectorAction,
    backAction,
    bulkRemoveAction,
    removeAction,
    filterAction,
    refreshAction,
    openPageAction,
    activateForIssueAction,
    addToFavoritesForIssueAction,
    closeDebateAction,
    closeVoteForIssueAction,
    deleteOrArchiveForIssueAction,
    removeFromFavoritesForIssueAction,
    createConArgumentAction,
    createProArgumentAction,
    createCommentAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceIssueIssue_TableViewModel = {
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
    <ServiceIssueIssue_TableViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_Fp_g8Fw2Ee6gN-oVBDDIOQ)/RelationFeatureTable"
          data-page-name="service::Dashboard::favoriteIssues::RelationTablePage"
        />
        <PageContainerTransition>
          <ServiceIssueIssue_TablePageContainer
            actions={actions}
            isLoading={isLoading}
            editMode={editMode}
            refreshCounter={refreshCounter}
          />
        </PageContainerTransition>
      </Suspense>
    </ServiceIssueIssue_TableViewModelContext.Provider>
  );
}
