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
  ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageActions,
  ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageProps,
} from '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_Table/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageContainer';
import { useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector } from '~/dialogs/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/UserVoteEntryGroup/TakeVote/Vote/Relation/Table/CallSelector';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceUserSelectAnswerVoteDefinitionsAccessViewPage } from '~/routes';
import type {
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
  VoteStatus,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForSelectAnswerVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForSelectAnswerVoteDefinitionsImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageActionsExtended =
  ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageActions & {
    postActivateForSelectAnswerVoteDefinitionAction?: (data: ServiceSelectAnswerVoteDefinitionStored) => Promise<void>;
    postAddToFavoritesForSelectAnswerVoteDefinitionAction?: (
      data: ServiceSelectAnswerVoteDefinitionStored,
    ) => Promise<void>;
    postCloseVoteForSelectAnswerVoteDefinitionAction?: (data: ServiceSelectAnswerVoteDefinitionStored) => Promise<void>;
    postDeleteOrArchiveForSelectAnswerVoteDefinitionAction?: (
      data: ServiceSelectAnswerVoteDefinitionStored,
    ) => Promise<void>;
    postRemoveFromFavoritesForSelectAnswerVoteDefinitionAction?: (
      data: ServiceSelectAnswerVoteDefinitionStored,
    ) => Promise<void>;
    postTakeBackVoteForSelectAnswerVoteDefinitionAction?: (
      data: ServiceSelectAnswerVoteDefinitionStored,
    ) => Promise<void>;
    postRefreshAction?: (data: ServiceSelectAnswerVoteDefinitionStored[]) => Promise<void>;
  };

export const SERVICE_USER_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK';
export type ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableActionsHook = (
  data: ServiceSelectAnswerVoteDefinitionStored[],
  editMode: boolean,
) => ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageActionsExtended;

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableViewModel
  extends ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableViewModelContext =
  createContext<ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableViewModel>({} as any);
export const useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableViewModel = () => {
  const context = useContext(ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableViewModel must be used within a(n) ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableViewModelProvider',
    );
  }
  return context;
};

const ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_Table/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageContainer'
    ),
);

// XMIID: User/(esm/_jf3kwFuXEe6T042_LMmSdQ)/AccessTablePageDefinition
// Name: service::User::selectAnswerVoteDefinitions::AccessTablePage
export default function ServiceUserSelectAnswerVoteDefinitionsAccessTablePage() {
  // Services
  const userServiceForSelectAnswerVoteDefinitionsImpl = useMemo(
    () => new UserServiceForSelectAnswerVoteDefinitionsImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceSelectAnswerVoteDefinitionStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageActionsExtended
    | undefined = customActionsHook?.(data, editMode);

  // Dialog hooks
  const openServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector =
    useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector();

  // Action section
  const getPageTitle = (): string => {
    return t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table', {
      defaultValue: 'SelectAnswerVoteDefinition Table',
    });
  };
  const activateForSelectAnswerVoteDefinitionAction = async (target?: ServiceSelectAnswerVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForSelectAnswerVoteDefinitionsImpl.activate(target!);
      if (customActions?.postActivateForSelectAnswerVoteDefinitionAction) {
        await customActions.postActivateForSelectAnswerVoteDefinitionAction(target!);
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
  const addToFavoritesForSelectAnswerVoteDefinitionAction = async (
    target?: ServiceSelectAnswerVoteDefinitionStored,
  ) => {
    try {
      setIsLoading(true);
      await userServiceForSelectAnswerVoteDefinitionsImpl.addToFavorites(target!);
      if (customActions?.postAddToFavoritesForSelectAnswerVoteDefinitionAction) {
        await customActions.postAddToFavoritesForSelectAnswerVoteDefinitionAction(target!);
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
  const closeVoteForSelectAnswerVoteDefinitionAction = async (target?: ServiceSelectAnswerVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForSelectAnswerVoteDefinitionsImpl.closeVote(target!);
      if (customActions?.postCloseVoteForSelectAnswerVoteDefinitionAction) {
        await customActions.postCloseVoteForSelectAnswerVoteDefinitionAction(target!);
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
  const deleteOrArchiveForSelectAnswerVoteDefinitionAction = async (
    target?: ServiceSelectAnswerVoteDefinitionStored,
  ) => {
    try {
      setIsLoading(true);
      await userServiceForSelectAnswerVoteDefinitionsImpl.deleteOrArchive(target!);
      if (customActions?.postDeleteOrArchiveForSelectAnswerVoteDefinitionAction) {
        await customActions.postDeleteOrArchiveForSelectAnswerVoteDefinitionAction(target!);
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
  const removeFromFavoritesForSelectAnswerVoteDefinitionAction = async (
    target?: ServiceSelectAnswerVoteDefinitionStored,
  ) => {
    try {
      setIsLoading(true);
      await userServiceForSelectAnswerVoteDefinitionsImpl.removeFromFavorites(target!);
      if (customActions?.postRemoveFromFavoritesForSelectAnswerVoteDefinitionAction) {
        await customActions.postRemoveFromFavoritesForSelectAnswerVoteDefinitionAction(target!);
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
  const voteAction = async () => {
    const { result, data: returnedData } =
      await openServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector(
        [],
      );
    if (result === 'submit') {
    }
  };
  const takeBackVoteForSelectAnswerVoteDefinitionAction = async (target?: ServiceSelectAnswerVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForSelectAnswerVoteDefinitionsImpl.takeBackVote(target!);
      if (customActions?.postTakeBackVoteForSelectAnswerVoteDefinitionAction) {
        await customActions.postTakeBackVoteForSelectAnswerVoteDefinitionAction(target!);
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
    queryCustomizer: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteDefinitionStored[]>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForSelectAnswerVoteDefinitionsImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };
  const openPageAction = async (
    target: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceSelectAnswerVoteDefinitionStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserSelectAnswerVoteDefinitionsAccessViewPage(
          (target as ServiceSelectAnswerVoteDefinitionStored)!.__signedIdentifier,
        ),
      );
    }
  };

  const actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageActions = {
    getPageTitle,
    activateForSelectAnswerVoteDefinitionAction,
    addToFavoritesForSelectAnswerVoteDefinitionAction,
    closeVoteForSelectAnswerVoteDefinitionAction,
    deleteOrArchiveForSelectAnswerVoteDefinitionAction,
    removeFromFavoritesForSelectAnswerVoteDefinitionAction,
    voteAction,
    takeBackVoteForSelectAnswerVoteDefinitionAction,
    backAction,
    filterAction,
    refreshAction,
    openPageAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableViewModel = {
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
    <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_jf3kwFuXEe6T042_LMmSdQ)/AccessTablePageDefinition"
          data-page-name="service::User::selectAnswerVoteDefinitions::AccessTablePage"
        />
        <PageContainerTransition>
          <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageContainer
            actions={actions}
            isLoading={isLoading}
            editMode={editMode}
            refreshCounter={refreshCounter}
          />
        </PageContainerTransition>
      </Suspense>
    </ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableViewModelContext.Provider>
  );
}
