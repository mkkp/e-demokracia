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
  ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageActions,
  ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageProps,
} from '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_Table/ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageContainer';
import { useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/Vote/Input/Form';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceUserRatingVoteDefinitionsAccessViewPage } from '~/routes';
import type {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceRatingVoteDefinitionStored,
  VoteStatus,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForRatingVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForRatingVoteDefinitionsImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageActionsExtended =
  ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageActions & {
    postActivateForRatingVoteDefinitionAction?: (data: ServiceRatingVoteDefinitionStored) => Promise<void>;
    postAddToFavoritesForRatingVoteDefinitionAction?: (data: ServiceRatingVoteDefinitionStored) => Promise<void>;
    postCloseVoteForRatingVoteDefinitionAction?: (data: ServiceRatingVoteDefinitionStored) => Promise<void>;
    postDeleteOrArchiveForRatingVoteDefinitionAction?: (data: ServiceRatingVoteDefinitionStored) => Promise<void>;
    postRemoveFromFavoritesForRatingVoteDefinitionAction?: (data: ServiceRatingVoteDefinitionStored) => Promise<void>;
    postTakeBackVoteForRatingVoteDefinitionAction?: (data: ServiceRatingVoteDefinitionStored) => Promise<void>;
    postRefreshAction?: (data: ServiceRatingVoteDefinitionStored[]) => Promise<void>;
  };

export const SERVICE_USER_RATING_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_RATING_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK';
export type ServiceRatingVoteDefinitionRatingVoteDefinition_TableActionsHook = (
  data: ServiceRatingVoteDefinitionStored[],
  editMode: boolean,
) => ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageActionsExtended;

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_TableViewModel
  extends ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceRatingVoteDefinitionRatingVoteDefinition_TableViewModelContext =
  createContext<ServiceRatingVoteDefinitionRatingVoteDefinition_TableViewModel>({} as any);
export const useServiceRatingVoteDefinitionRatingVoteDefinition_TableViewModel = () => {
  const context = useContext(ServiceRatingVoteDefinitionRatingVoteDefinition_TableViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceRatingVoteDefinitionRatingVoteDefinition_TableViewModel must be used within a(n) ServiceRatingVoteDefinitionRatingVoteDefinition_TableViewModelProvider',
    );
  }
  return context;
};

const ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_Table/ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageContainer'
    ),
);

// XMIID: User/(esm/_s3Fx0FuiEe6rLvwZQOpyUA)/AccessTablePageDefinition
// Name: service::User::ratingVoteDefinitions::AccessTablePage
export default function ServiceUserRatingVoteDefinitionsAccessTablePage() {
  // Services
  const userServiceForRatingVoteDefinitionsImpl = useMemo(
    () => new UserServiceForRatingVoteDefinitionsImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceRatingVoteDefinitionStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceRatingVoteDefinitionRatingVoteDefinition_TableActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_RATING_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageActionsExtended | undefined =
    customActionsHook?.(data, editMode);

  // Dialog hooks
  const openServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm =
    useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm();

  // Action section
  const getPageTitle = (): string => {
    return t('service.RatingVoteDefinition.RatingVoteDefinition_Table', { defaultValue: 'RatingVoteDefinition Table' });
  };
  const activateForRatingVoteDefinitionAction = async (target?: ServiceRatingVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForRatingVoteDefinitionsImpl.activate(target!);
      if (customActions?.postActivateForRatingVoteDefinitionAction) {
        await customActions.postActivateForRatingVoteDefinitionAction(target!);
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
  const addToFavoritesForRatingVoteDefinitionAction = async (target?: ServiceRatingVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForRatingVoteDefinitionsImpl.addToFavorites(target!);
      if (customActions?.postAddToFavoritesForRatingVoteDefinitionAction) {
        await customActions.postAddToFavoritesForRatingVoteDefinitionAction(target!);
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
  const closeVoteForRatingVoteDefinitionAction = async (target?: ServiceRatingVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForRatingVoteDefinitionsImpl.closeVote(target!);
      if (customActions?.postCloseVoteForRatingVoteDefinitionAction) {
        await customActions.postCloseVoteForRatingVoteDefinitionAction(target!);
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
  const deleteOrArchiveForRatingVoteDefinitionAction = async (target?: ServiceRatingVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForRatingVoteDefinitionsImpl.deleteOrArchive(target!);
      if (customActions?.postDeleteOrArchiveForRatingVoteDefinitionAction) {
        await customActions.postDeleteOrArchiveForRatingVoteDefinitionAction(target!);
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
  const removeFromFavoritesForRatingVoteDefinitionAction = async (target?: ServiceRatingVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForRatingVoteDefinitionsImpl.removeFromFavorites(target!);
      if (customActions?.postRemoveFromFavoritesForRatingVoteDefinitionAction) {
        await customActions.postRemoveFromFavoritesForRatingVoteDefinitionAction(target!);
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
  const voteAction = async (
    target: ServiceRatingVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceRatingVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const takeBackVoteForRatingVoteDefinitionAction = async (target?: ServiceRatingVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForRatingVoteDefinitionsImpl.takeBackVote(target!);
      if (customActions?.postTakeBackVoteForRatingVoteDefinitionAction) {
        await customActions.postTakeBackVoteForRatingVoteDefinitionAction(target!);
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
    queryCustomizer: ServiceRatingVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceRatingVoteDefinitionStored[]>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForRatingVoteDefinitionsImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };
  const openPageAction = async (
    target: ServiceRatingVoteDefinition | ServiceRatingVoteDefinitionStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceRatingVoteDefinitionStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserRatingVoteDefinitionsAccessViewPage(
          (target as ServiceRatingVoteDefinitionStored)!.__signedIdentifier,
        ),
      );
    }
  };

  const actions: ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageActions = {
    getPageTitle,
    activateForRatingVoteDefinitionAction,
    addToFavoritesForRatingVoteDefinitionAction,
    closeVoteForRatingVoteDefinitionAction,
    deleteOrArchiveForRatingVoteDefinitionAction,
    removeFromFavoritesForRatingVoteDefinitionAction,
    voteAction,
    takeBackVoteForRatingVoteDefinitionAction,
    backAction,
    filterAction,
    refreshAction,
    openPageAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceRatingVoteDefinitionRatingVoteDefinition_TableViewModel = {
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
    <ServiceRatingVoteDefinitionRatingVoteDefinition_TableViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_s3Fx0FuiEe6rLvwZQOpyUA)/AccessTablePageDefinition"
          data-page-name="service::User::ratingVoteDefinitions::AccessTablePage"
        />
        <PageContainerTransition>
          <ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageContainer
            actions={actions}
            isLoading={isLoading}
            editMode={editMode}
            refreshCounter={refreshCounter}
          />
        </PageContainerTransition>
      </Suspense>
    </ServiceRatingVoteDefinitionRatingVoteDefinition_TableViewModelContext.Provider>
  );
}
