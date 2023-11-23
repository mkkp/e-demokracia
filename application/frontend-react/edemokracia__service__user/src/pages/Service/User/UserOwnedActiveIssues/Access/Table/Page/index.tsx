//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { toastConfig } from '~/config';
import { useCRUDDialog } from '~/hooks';
import {
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  uiTimeToServiceTime,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult } from '~/utilities';
import { PageContainerTransition } from '~/theme/animations';
import { routeToServiceUserUserOwnedActiveIssuesAccessViewPage } from '~/routes';
import { useServiceIssueIssue_View_EditCloseDebateInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CloseDebate/Input/Form';
import { useServiceIssueIssue_View_EditCreateCommentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateComment/Input/Form';
import { useServiceIssueIssue_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateConArgument/Input/Form';
import { useServiceIssueIssue_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateProArgument/Input/Form';
import type { ServiceIssueIssue_TablePageActions } from '~/containers/Service/Issue/Issue_Table/ServiceIssueIssue_TablePageContainer';
import type {
  IssueScope,
  IssueStatus,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  VoteType,
} from '~/services/data-api';
import { userServiceForUserOwnedActiveIssuesImpl } from '~/services/data-axios';
export type ServiceIssueIssue_TablePageActionsExtended = ServiceIssueIssue_TablePageActions & {
  postActivateForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
  postAddToFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
  postCloseVoteForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
  postDeleteOrArchiveForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
  postRemoveFromFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
};

export const SERVICE_USER_USER_OWNED_ACTIVE_ISSUES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueIssue_TableActionsHook';
export type ServiceIssueIssue_TableActionsHook = (
  data: ServiceIssueStored[],
  editMode: boolean,
) => ServiceIssueIssue_TablePageActionsExtended;

const ServiceIssueIssue_TablePageContainer = lazy(
  () => import('~/containers/Service/Issue/Issue_Table/ServiceIssueIssue_TablePageContainer'),
);

// XMIID: User/(esm/_LY9IoFqmEe6_67aMO2jOsw)/AccessTablePageDefinition
// Name: service::User::userOwnedActiveIssues::Access::Table::Page
// Access: true
// Single Access: false
export default function ServiceUserUserOwnedActiveIssuesAccessTablePage() {
  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();
  const [createDialog, closeDialog] = useDialog();

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceIssueStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueIssue_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_USER_OWNED_ACTIVE_ISSUES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueIssue_TablePageActionsExtended | undefined = customActionsHook?.(data, editMode);

  // Dialog hooks
  const openServiceIssueIssue_View_EditCloseDebateInputForm = useServiceIssueIssue_View_EditCloseDebateInputForm();
  const openServiceIssueIssue_View_EditCreateCommentInputForm = useServiceIssueIssue_View_EditCreateCommentInputForm();
  const openServiceIssueIssue_View_EditCreateConArgumentInputForm =
    useServiceIssueIssue_View_EditCreateConArgumentInputForm();
  const openServiceIssueIssue_View_EditCreateProArgumentInputForm =
    useServiceIssueIssue_View_EditCreateProArgumentInputForm();

  // Calculated section
  const title: string = t('service.Issue.Issue_Table', { defaultValue: 'Issue Table' });

  // Action section
  const openPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserUserOwnedActiveIssuesAccessViewPage(target!.__signedIdentifier));
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
      return userServiceForUserOwnedActiveIssuesImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const addToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedActiveIssuesImpl.addToFavorites(target!);

      if (customActions?.postAddToFavoritesForIssueAction) {
        await customActions.postAddToFavoritesForIssueAction(target!);
      } else {
        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        setRefreshCounter((prev) => prev + 1);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const createProArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const deleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedActiveIssuesImpl.deleteOrArchive(target!);

      if (customActions?.postDeleteOrArchiveForIssueAction) {
        await customActions.postDeleteOrArchiveForIssueAction(target!);
      } else {
        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        setRefreshCounter((prev) => prev + 1);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const createCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const removeFromFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedActiveIssuesImpl.removeFromFavorites(target!);

      if (customActions?.postRemoveFromFavoritesForIssueAction) {
        await customActions.postRemoveFromFavoritesForIssueAction(target!);
      } else {
        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        setRefreshCounter((prev) => prev + 1);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const activateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedActiveIssuesImpl.activate(target!);

      if (customActions?.postActivateForIssueAction) {
        await customActions.postActivateForIssueAction(target!);
      } else {
        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        setRefreshCounter((prev) => prev + 1);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const createConArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const closeDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const closeVoteForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserOwnedActiveIssuesImpl.closeVote(target!);

      if (customActions?.postCloseVoteForIssueAction) {
        await customActions.postCloseVoteForIssueAction(target!);
      } else {
        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        setRefreshCounter((prev) => prev + 1);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceIssueIssue_TablePageActions = {
    openPageAction,
    filterAction,
    refreshAction,
    addToFavoritesForIssueAction,
    createProArgumentAction,
    deleteOrArchiveForIssueAction,
    createCommentAction,
    removeFromFavoritesForIssueAction,
    activateForIssueAction,
    createConArgumentAction,
    closeDebateAction,
    closeVoteForIssueAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_LY9IoFqmEe6_67aMO2jOsw)/AccessTablePageDefinition"
      data-page-name="service::User::userOwnedActiveIssues::Access::Table::Page"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceIssueIssue_TablePageContainer
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
