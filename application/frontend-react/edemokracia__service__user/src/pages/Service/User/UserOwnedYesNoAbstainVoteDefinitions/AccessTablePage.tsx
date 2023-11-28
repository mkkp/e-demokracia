//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import { useState, lazy, Suspense } from 'react';
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
import { routeToServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPage } from '~/routes';
import { useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_View_Edit/Vote/Input/Form';
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActions } from '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_Table/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageContainer';
import type {
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  VoteStatus,
} from '~/services/data-api';
import { userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl } from '~/services/data-axios';
export type ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActionsExtended =
  ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActions & {
    postActivateForYesNoAbstainVoteDefinitionAction?: (
      target: ServiceYesNoAbstainVoteDefinitionStored,
    ) => Promise<void>;
    postAddToFavoritesForYesNoAbstainVoteDefinitionAction?: (
      target: ServiceYesNoAbstainVoteDefinitionStored,
    ) => Promise<void>;
    postCloseVoteForYesNoAbstainVoteDefinitionAction?: (
      target: ServiceYesNoAbstainVoteDefinitionStored,
    ) => Promise<void>;
    postDeleteOrArchiveForYesNoAbstainVoteDefinitionAction?: (
      target: ServiceYesNoAbstainVoteDefinitionStored,
    ) => Promise<void>;
    postRemoveFromFavoritesForYesNoAbstainVoteDefinitionAction?: (
      target: ServiceYesNoAbstainVoteDefinitionStored,
    ) => Promise<void>;
    postTakeBackVoteForYesNoAbstainVoteDefinitionAction?: (
      target: ServiceYesNoAbstainVoteDefinitionStored,
    ) => Promise<void>;
  };

export const SERVICE_USER_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableActionsHook';
export type ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableActionsHook = (
  data: ServiceYesNoAbstainVoteDefinitionStored[],
  editMode: boolean,
) => ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActionsExtended;

const ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_Table/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageContainer'
    ),
);

// XMIID: User/(esm/_9lF1oFuhEe6rLvwZQOpyUA)/AccessTablePageDefinition
// Name: service::User::userOwnedYesNoAbstainVoteDefinitions::AccessTablePage
export default function ServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessTablePage() {
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
  const [data, setData] = useState<ServiceYesNoAbstainVoteDefinitionStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActionsExtended
    | undefined = customActionsHook?.(data, editMode);

  // Dialog hooks
  const openServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm =
    useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm();

  // Calculated section
  const title: string = t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table', {
    defaultValue: 'YesNoAbstainVoteDefinition Table',
  });

  // Action section
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
  ): Promise<ServiceYesNoAbstainVoteDefinitionStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const openPageAction = async (target?: ServiceYesNoAbstainVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPage(target!.__signedIdentifier));
  };
  const activateForYesNoAbstainVoteDefinitionAction = async (target?: ServiceYesNoAbstainVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.activate(target!);
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
      await userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.addToFavorites(target!);
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
      await userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.closeVote(target!);
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
      await userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.deleteOrArchive(target!);
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
      await userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.removeFromFavorites(target!);
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
  const voteAction = async (target: ServiceYesNoAbstainVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const takeBackVoteForYesNoAbstainVoteDefinitionAction = async (target?: ServiceYesNoAbstainVoteDefinitionStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.takeBackVote(target!);
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

  // Effect section

  return (
    <div
      id="User/(esm/_9lF1oFuhEe6rLvwZQOpyUA)/AccessTablePageDefinition"
      data-page-name="service::User::userOwnedYesNoAbstainVoteDefinitions::AccessTablePage"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageContainer
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
