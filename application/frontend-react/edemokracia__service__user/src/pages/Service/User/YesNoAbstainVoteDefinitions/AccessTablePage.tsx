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
import { Suspense, lazy, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActions } from '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_Table/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageContainer';
import { useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_View_Edit/Vote/Input/Form';
import { useCRUDDialog, useSnacks } from '~/hooks';
import { routeToServiceUserYesNoAbstainVoteDefinitionsAccessViewPage } from '~/routes';
import type {
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  VoteStatus,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForYesNoAbstainVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForYesNoAbstainVoteDefinitionsImpl';
import { PageContainerTransition } from '~/theme/animations';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
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
      `(${OBJECTCLASS}=${SERVICE_USER_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
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

  // Private actions
  const submit = async () => {};

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
      return userServiceForYesNoAbstainVoteDefinitionsImpl.list(undefined, queryCustomizer);
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
    navigate(routeToServiceUserYesNoAbstainVoteDefinitionsAccessViewPage(target!.__signedIdentifier));
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
      data-page-name="service::User::yesNoAbstainVoteDefinitions::AccessTablePage"
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
