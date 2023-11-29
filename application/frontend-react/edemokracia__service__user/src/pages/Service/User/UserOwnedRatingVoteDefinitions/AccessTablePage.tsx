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
import { routeToServiceUserUserOwnedRatingVoteDefinitionsAccessViewPage } from '~/routes';
import { useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/Vote/Input/Form';
import type { ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageActions } from '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_Table/ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageContainer';
import type {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceRatingVoteDefinitionStored,
  VoteStatus,
} from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForUserOwnedRatingVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForUserOwnedRatingVoteDefinitionsImpl';

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

export const SERVICE_USER_USER_OWNED_RATING_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceRatingVoteDefinitionRatingVoteDefinition_TableActionsHook';
export type ServiceRatingVoteDefinitionRatingVoteDefinition_TableActionsHook = (
  data: ServiceRatingVoteDefinitionStored[],
  editMode: boolean,
) => ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageActionsExtended;

const ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_Table/ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageContainer'
    ),
);

// XMIID: User/(esm/_s3Fx0FuiEe6rLvwZQOpyUA)/AccessTablePageDefinition
// Name: service::User::userOwnedRatingVoteDefinitions::AccessTablePage
export default function ServiceUserUserOwnedRatingVoteDefinitionsAccessTablePage() {
  // Services
  const userServiceForUserOwnedRatingVoteDefinitionsImpl = useMemo(
    () => new UserServiceForUserOwnedRatingVoteDefinitionsImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceRatingVoteDefinitionStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceRatingVoteDefinitionRatingVoteDefinition_TableActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_USER_OWNED_RATING_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageActionsExtended | undefined =
    customActionsHook?.(data, editMode);

  // Dialog hooks
  const openServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm =
    useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm();

  // Calculated section
  const title: string = t('service.RatingVoteDefinition.RatingVoteDefinition_Table', {
    defaultValue: 'RatingVoteDefinition Table',
  });

  // Private actions
  const submit = async () => {};

  // Action section
  const openPageAction = async (target?: ServiceRatingVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserUserOwnedRatingVoteDefinitionsAccessViewPage(target!.__signedIdentifier));
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
  ): Promise<ServiceRatingVoteDefinitionStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForUserOwnedRatingVoteDefinitionsImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const takeBackVoteForRatingVoteDefinitionAction = async (target?: ServiceRatingVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedRatingVoteDefinitionsImpl.takeBackVote(target!);
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
  const voteAction = async (target: ServiceRatingVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const removeFromFavoritesForRatingVoteDefinitionAction = async (target?: ServiceRatingVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedRatingVoteDefinitionsImpl.removeFromFavorites(target!);
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
  const activateForRatingVoteDefinitionAction = async (target?: ServiceRatingVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedRatingVoteDefinitionsImpl.activate(target!);
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
      await userServiceForUserOwnedRatingVoteDefinitionsImpl.addToFavorites(target!);
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
  const deleteOrArchiveForRatingVoteDefinitionAction = async (target?: ServiceRatingVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedRatingVoteDefinitionsImpl.deleteOrArchive(target!);
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
  const closeVoteForRatingVoteDefinitionAction = async (target?: ServiceRatingVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedRatingVoteDefinitionsImpl.closeVote(target!);
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

  const actions: ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageActions = {
    openPageAction,
    filterAction,
    refreshAction,
    takeBackVoteForRatingVoteDefinitionAction,
    voteAction,
    removeFromFavoritesForRatingVoteDefinitionAction,
    activateForRatingVoteDefinitionAction,
    addToFavoritesForRatingVoteDefinitionAction,
    deleteOrArchiveForRatingVoteDefinitionAction,
    closeVoteForRatingVoteDefinitionAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_s3Fx0FuiEe6rLvwZQOpyUA)/AccessTablePageDefinition"
      data-page-name="service::User::userOwnedRatingVoteDefinitions::AccessTablePage"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageContainer
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
