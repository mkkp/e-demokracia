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
  ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActions,
  ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageProps,
} from '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_Table/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageContainer';
import { useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_View_Edit/Vote/Input/Form';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceUserYesNoAbstainVoteDefinitionsAccessViewPage } from '~/routes';
import type {
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  VoteStatus,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForYesNoAbstainVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForYesNoAbstainVoteDefinitionsImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActionsExtended =
  ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActions & {
    postActivateForYesNoAbstainVoteDefinitionAction?: (data: ServiceYesNoAbstainVoteDefinitionStored) => Promise<void>;
    postAddToFavoritesForYesNoAbstainVoteDefinitionAction?: (
      data: ServiceYesNoAbstainVoteDefinitionStored,
    ) => Promise<void>;
    postCloseVoteForYesNoAbstainVoteDefinitionAction?: (data: ServiceYesNoAbstainVoteDefinitionStored) => Promise<void>;
    postDeleteOrArchiveForYesNoAbstainVoteDefinitionAction?: (
      data: ServiceYesNoAbstainVoteDefinitionStored,
    ) => Promise<void>;
    postRemoveFromFavoritesForYesNoAbstainVoteDefinitionAction?: (
      data: ServiceYesNoAbstainVoteDefinitionStored,
    ) => Promise<void>;
    postTakeBackVoteForYesNoAbstainVoteDefinitionAction?: (
      data: ServiceYesNoAbstainVoteDefinitionStored,
    ) => Promise<void>;
    postRefreshAction?: (data: ServiceYesNoAbstainVoteDefinitionStored[]) => Promise<void>;
  };

export const SERVICE_USER_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK';
export type ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableActionsHook = (
  data: ServiceYesNoAbstainVoteDefinitionStored[],
  editMode: boolean,
) => ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActionsExtended;

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableViewModel
  extends ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableViewModelContext =
  createContext<ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableViewModel>({} as any);
export const useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableViewModel = () => {
  const context = useContext(ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableViewModel must be used within a(n) ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableViewModelProvider',
    );
  }
  return context;
};

const ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_Table/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageContainer'
    ),
);

// XMIID: User/(esm/_9lF1oFuhEe6rLvwZQOpyUA)/AccessTablePageDefinition
// Name: service::User::yesNoAbstainVoteDefinitions::AccessTablePage
export default function ServiceUserYesNoAbstainVoteDefinitionsAccessTablePage() {
  // Services
  const userServiceForYesNoAbstainVoteDefinitionsImpl = useMemo(
    () => new UserServiceForYesNoAbstainVoteDefinitionsImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceYesNoAbstainVoteDefinitionStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActionsExtended
    | undefined = customActionsHook?.(data, editMode);

  // Dialog hooks
  const openServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm =
    useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm();

  // Action section
  const getPageTitle = (): string => {
    return t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table', {
      defaultValue: 'YesNoAbstainVoteDefinition Table',
    });
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
    queryCustomizer: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceYesNoAbstainVoteDefinitionStored[]>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForYesNoAbstainVoteDefinitionsImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };
  const openPageAction = async (
    target: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceYesNoAbstainVoteDefinitionStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserYesNoAbstainVoteDefinitionsAccessViewPage(
          (target as ServiceYesNoAbstainVoteDefinitionStored)!.__signedIdentifier,
        ),
      );
    }
  };
  const activateForYesNoAbstainVoteDefinitionAction = async (target?: ServiceYesNoAbstainVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForYesNoAbstainVoteDefinitionsImpl.activate(target!);
      if (customActions?.postActivateForYesNoAbstainVoteDefinitionAction) {
        await customActions.postActivateForYesNoAbstainVoteDefinitionAction(target!);
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
  const addToFavoritesForYesNoAbstainVoteDefinitionAction = async (
    target?: ServiceYesNoAbstainVoteDefinitionStored,
  ) => {
    try {
      setIsLoading(true);
      await userServiceForYesNoAbstainVoteDefinitionsImpl.addToFavorites(target!);
      if (customActions?.postAddToFavoritesForYesNoAbstainVoteDefinitionAction) {
        await customActions.postAddToFavoritesForYesNoAbstainVoteDefinitionAction(target!);
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
  const closeVoteForYesNoAbstainVoteDefinitionAction = async (target?: ServiceYesNoAbstainVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForYesNoAbstainVoteDefinitionsImpl.closeVote(target!);
      if (customActions?.postCloseVoteForYesNoAbstainVoteDefinitionAction) {
        await customActions.postCloseVoteForYesNoAbstainVoteDefinitionAction(target!);
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
  const deleteOrArchiveForYesNoAbstainVoteDefinitionAction = async (
    target?: ServiceYesNoAbstainVoteDefinitionStored,
  ) => {
    try {
      setIsLoading(true);
      await userServiceForYesNoAbstainVoteDefinitionsImpl.deleteOrArchive(target!);
      if (customActions?.postDeleteOrArchiveForYesNoAbstainVoteDefinitionAction) {
        await customActions.postDeleteOrArchiveForYesNoAbstainVoteDefinitionAction(target!);
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
  const removeFromFavoritesForYesNoAbstainVoteDefinitionAction = async (
    target?: ServiceYesNoAbstainVoteDefinitionStored,
  ) => {
    try {
      setIsLoading(true);
      await userServiceForYesNoAbstainVoteDefinitionsImpl.removeFromFavorites(target!);
      if (customActions?.postRemoveFromFavoritesForYesNoAbstainVoteDefinitionAction) {
        await customActions.postRemoveFromFavoritesForYesNoAbstainVoteDefinitionAction(target!);
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
    target: ServiceYesNoAbstainVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceYesNoAbstainVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const takeBackVoteForYesNoAbstainVoteDefinitionAction = async (target?: ServiceYesNoAbstainVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForYesNoAbstainVoteDefinitionsImpl.takeBackVote(target!);
      if (customActions?.postTakeBackVoteForYesNoAbstainVoteDefinitionAction) {
        await customActions.postTakeBackVoteForYesNoAbstainVoteDefinitionAction(target!);
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

  const actions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActions = {
    getPageTitle,
    backAction,
    filterAction,
    refreshAction,
    openPageAction,
    activateForYesNoAbstainVoteDefinitionAction,
    addToFavoritesForYesNoAbstainVoteDefinitionAction,
    closeVoteForYesNoAbstainVoteDefinitionAction,
    deleteOrArchiveForYesNoAbstainVoteDefinitionAction,
    removeFromFavoritesForYesNoAbstainVoteDefinitionAction,
    voteAction,
    takeBackVoteForYesNoAbstainVoteDefinitionAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableViewModel = {
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
    <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_9lF1oFuhEe6rLvwZQOpyUA)/AccessTablePageDefinition"
          data-page-name="service::User::yesNoAbstainVoteDefinitions::AccessTablePage"
        />
        <PageContainerTransition>
          <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageContainer
            actions={actions}
            isLoading={isLoading}
            editMode={editMode}
            refreshCounter={refreshCounter}
          />
        </PageContainerTransition>
      </Suspense>
    </ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableViewModelContext.Provider>
  );
}
