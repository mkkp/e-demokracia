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
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';
import { PageContainerTransition } from '~/theme/animations';
import { routeToServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPage } from '~/routes';
import { useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector } from '~/dialogs/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/UserVoteEntryGroup/TakeVote/Vote/Relation/Table/CallSelector';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageActions } from '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_Table/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageContainer';
import type {
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
  VoteStatus,
} from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl';

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

export const SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableActionsHook';
export type ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableActionsHook = (
  data: ServiceSelectAnswerVoteDefinitionStored[],
  editMode: boolean,
) => ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageActionsExtended;

const ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_Table/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageContainer'
    ),
);

// XMIID: User/(esm/_jf3kwFuXEe6T042_LMmSdQ)/AccessTablePageDefinition
// Name: service::User::userOwnedSelectAnswerVoteDefinitions::AccessTablePage
export default function ServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessTablePage() {
  // Services
  const userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl = useMemo(
    () => new UserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceSelectAnswerVoteDefinitionStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageActionsExtended
    | undefined = customActionsHook?.(data, editMode);

  // Dialog hooks
  const openServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector =
    useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector();

  // Calculated section
  const title: string = t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table', {
    defaultValue: 'SelectAnswerVoteDefinition Table',
  });

  // Private actions
  const submit = async () => {};

  // Action section
  const openPageAction = async (target?: ServiceSelectAnswerVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPage(target!.__signedIdentifier));
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
  ): Promise<ServiceSelectAnswerVoteDefinitionStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const takeBackVoteForSelectAnswerVoteDefinitionAction = async (target?: ServiceSelectAnswerVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.takeBackVote(target!);
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
  const activateForSelectAnswerVoteDefinitionAction = async (target?: ServiceSelectAnswerVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.activate(target!);
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
  const closeVoteForSelectAnswerVoteDefinitionAction = async (target?: ServiceSelectAnswerVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.closeVote(target!);
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
      await userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.deleteOrArchive(target!);
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
      await userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.removeFromFavorites(target!);
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
  const addToFavoritesForSelectAnswerVoteDefinitionAction = async (
    target?: ServiceSelectAnswerVoteDefinitionStored,
  ) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.addToFavorites(target!);
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

  const actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageActions = {
    openPageAction,
    filterAction,
    refreshAction,
    takeBackVoteForSelectAnswerVoteDefinitionAction,
    activateForSelectAnswerVoteDefinitionAction,
    closeVoteForSelectAnswerVoteDefinitionAction,
    deleteOrArchiveForSelectAnswerVoteDefinitionAction,
    removeFromFavoritesForSelectAnswerVoteDefinitionAction,
    voteAction,
    addToFavoritesForSelectAnswerVoteDefinitionAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_jf3kwFuXEe6T042_LMmSdQ)/AccessTablePageDefinition"
      data-page-name="service::User::userOwnedSelectAnswerVoteDefinitions::AccessTablePage"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageContainer
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
