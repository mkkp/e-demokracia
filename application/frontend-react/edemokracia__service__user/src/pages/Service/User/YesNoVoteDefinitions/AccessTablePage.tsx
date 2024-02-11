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
  ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageActions,
  ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageProps,
} from '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_Table/ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageContainer';
import { useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/Vote/Input/Form';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceUserYesNoVoteDefinitionsAccessViewPage } from '~/routes';
import type {
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
  VoteStatus,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForYesNoVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForYesNoVoteDefinitionsImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageActionsExtended =
  ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageActions & {
    postActivateForYesNoVoteDefinitionAction?: (data: ServiceYesNoVoteDefinitionStored) => Promise<void>;
    postAddToFavoritesForYesNoVoteDefinitionAction?: (data: ServiceYesNoVoteDefinitionStored) => Promise<void>;
    postCloseVoteForYesNoVoteDefinitionAction?: (data: ServiceYesNoVoteDefinitionStored) => Promise<void>;
    postDeleteOrArchiveForYesNoVoteDefinitionAction?: (data: ServiceYesNoVoteDefinitionStored) => Promise<void>;
    postRemoveFromFavoritesForYesNoVoteDefinitionAction?: (data: ServiceYesNoVoteDefinitionStored) => Promise<void>;
    postTakeBackVoteForYesNoVoteDefinitionAction?: (data: ServiceYesNoVoteDefinitionStored) => Promise<void>;
    postRefreshAction?: (data: ServiceYesNoVoteDefinitionStored[]) => Promise<void>;
  };

export const SERVICE_USER_YES_NO_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_YES_NO_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK';
export type ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableActionsHook = (
  data: ServiceYesNoVoteDefinitionStored[],
  editMode: boolean,
) => ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageActionsExtended;

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableViewModel
  extends ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableViewModelContext =
  createContext<ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableViewModel>({} as any);
export const useServiceYesNoVoteDefinitionYesNoVoteDefinition_TableViewModel = () => {
  const context = useContext(ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceYesNoVoteDefinitionYesNoVoteDefinition_TableViewModel must be used within a(n) ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableViewModelProvider',
    );
  }
  return context;
};

const ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_Table/ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageContainer'
    ),
);

// XMIID: User/(esm/_zCZh0FoTEe6_67aMO2jOsw)/AccessTablePageDefinition
// Name: service::User::yesNoVoteDefinitions::AccessTablePage
export default function ServiceUserYesNoVoteDefinitionsAccessTablePage() {
  // Services
  const userServiceForYesNoVoteDefinitionsImpl = useMemo(
    () => new UserServiceForYesNoVoteDefinitionsImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceYesNoVoteDefinitionStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_YES_NO_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageActionsExtended | undefined =
    customActionsHook?.(data, editMode);

  // Dialog hooks
  const openServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm =
    useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm();

  // Action section
  const getPageTitle = (): string => {
    return t('service.YesNoVoteDefinition.YesNoVoteDefinition_Table', { defaultValue: 'YesNoVoteDefinition Table' });
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
    queryCustomizer: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceYesNoVoteDefinitionStored[]>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForYesNoVoteDefinitionsImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };
  const openPageAction = async (
    target: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceYesNoVoteDefinitionStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserYesNoVoteDefinitionsAccessViewPage(
          (target as ServiceYesNoVoteDefinitionStored)!.__signedIdentifier,
        ),
      );
    }
  };
  const activateForYesNoVoteDefinitionAction = async (target?: ServiceYesNoVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForYesNoVoteDefinitionsImpl.activate(target!);
      if (customActions?.postActivateForYesNoVoteDefinitionAction) {
        await customActions.postActivateForYesNoVoteDefinitionAction(target!);
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
  const addToFavoritesForYesNoVoteDefinitionAction = async (target?: ServiceYesNoVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForYesNoVoteDefinitionsImpl.addToFavorites(target!);
      if (customActions?.postAddToFavoritesForYesNoVoteDefinitionAction) {
        await customActions.postAddToFavoritesForYesNoVoteDefinitionAction(target!);
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
  const closeVoteForYesNoVoteDefinitionAction = async (target?: ServiceYesNoVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForYesNoVoteDefinitionsImpl.closeVote(target!);
      if (customActions?.postCloseVoteForYesNoVoteDefinitionAction) {
        await customActions.postCloseVoteForYesNoVoteDefinitionAction(target!);
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
  const deleteOrArchiveForYesNoVoteDefinitionAction = async (target?: ServiceYesNoVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForYesNoVoteDefinitionsImpl.deleteOrArchive(target!);
      if (customActions?.postDeleteOrArchiveForYesNoVoteDefinitionAction) {
        await customActions.postDeleteOrArchiveForYesNoVoteDefinitionAction(target!);
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
  const removeFromFavoritesForYesNoVoteDefinitionAction = async (target?: ServiceYesNoVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForYesNoVoteDefinitionsImpl.removeFromFavorites(target!);
      if (customActions?.postRemoveFromFavoritesForYesNoVoteDefinitionAction) {
        await customActions.postRemoveFromFavoritesForYesNoVoteDefinitionAction(target!);
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
    target: ServiceYesNoVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceYesNoVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const takeBackVoteForYesNoVoteDefinitionAction = async (target?: ServiceYesNoVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForYesNoVoteDefinitionsImpl.takeBackVote(target!);
      if (customActions?.postTakeBackVoteForYesNoVoteDefinitionAction) {
        await customActions.postTakeBackVoteForYesNoVoteDefinitionAction(target!);
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

  const actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageActions = {
    getPageTitle,
    backAction,
    filterAction,
    refreshAction,
    openPageAction,
    activateForYesNoVoteDefinitionAction,
    addToFavoritesForYesNoVoteDefinitionAction,
    closeVoteForYesNoVoteDefinitionAction,
    deleteOrArchiveForYesNoVoteDefinitionAction,
    removeFromFavoritesForYesNoVoteDefinitionAction,
    voteAction,
    takeBackVoteForYesNoVoteDefinitionAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableViewModel = {
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
    <ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_zCZh0FoTEe6_67aMO2jOsw)/AccessTablePageDefinition"
          data-page-name="service::User::yesNoVoteDefinitions::AccessTablePage"
        />
        <PageContainerTransition>
          <ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageContainer
            actions={actions}
            isLoading={isLoading}
            editMode={editMode}
            refreshCounter={refreshCounter}
          />
        </PageContainerTransition>
      </Suspense>
    </ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableViewModelContext.Provider>
  );
}
