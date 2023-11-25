//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
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
import { routeToServiceDashboardFavoriteIssuesRelationViewPage } from '~/routes';
import { routeToServiceDashboardFavoriteVoteDefinitionsRelationViewPage } from '~/routes';
import { routeToServiceDashboardIssuesOwnedRelationViewPage } from '~/routes';
import { routeToServiceDashboardOwnedVoteDefinitionsRelationViewPage } from '~/routes';
import { useServiceIssueIssue_View_EditCloseDebateInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CloseDebate/Input/Form';
import { useServiceIssueIssue_View_EditCreateCommentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateComment/Input/Form';
import { useServiceIssueIssue_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateConArgument/Input/Form';
import { useServiceIssueIssue_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateProArgument/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/TabBar/Selectanswervote/VoteSelectAnswer/Relation/Table/CallSelector';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteRating/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNo/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNoAbstain/Input/Form';
import type { ServiceDashboardDashboard_View_EditPageActions } from '~/containers/Service/Dashboard/Dashboard_View_Edit/ServiceDashboardDashboard_View_EditPageContainer';
import type {
  ServiceDashboard,
  ServiceDashboardQueryCustomizer,
  ServiceDashboardStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  ServiceVoteEntry,
  ServiceVoteEntryQueryCustomizer,
  ServiceVoteEntryStored,
} from '~/services/data-api';
import { userServiceForDashboardHomeImpl } from '~/services/data-axios';
export type ServiceDashboardDashboard_View_EditPageActionsExtended = ServiceDashboardDashboard_View_EditPageActions & {
  postFavoriteIssuesActivateForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
  postIssuesOwnedActivateForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
  postFavoriteIssuesAddToFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
  postIssuesOwnedAddToFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
  postFavoriteIssuesCloseVoteForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
  postIssuesOwnedCloseVoteForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
  postFavoriteIssuesDeleteOrArchiveForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
  postIssuesOwnedDeleteOrArchiveForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
  postFavoriteIssuesRemoveFromFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
  postIssuesOwnedRemoveFromFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
};

export const SERVICE_USER_DASHBOARD_HOME_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceDashboardDashboard_View_EditActionsHook';
export type ServiceDashboardDashboard_View_EditActionsHook = (
  data: ServiceDashboardStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceDashboard, value: any) => void,
) => ServiceDashboardDashboard_View_EditPageActionsExtended;

export const convertServiceUserDashboardHomeAccessViewPagePayload = (
  attributeName: keyof ServiceDashboard,
  value: any,
): any => {
  return value;
};

const ServiceDashboardDashboard_View_EditPageContainer = lazy(
  () => import('~/containers/Service/Dashboard/Dashboard_View_Edit/ServiceDashboardDashboard_View_EditPageContainer'),
);

// XMIID: User/(esm/_GgaEAIyPEe2VSOmaAz6G9Q)/AccessViewPageDefinition
// Name: service::User::dashboardHome::AccessViewPage
export default function ServiceUserDashboardHomeAccessViewPage() {
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
  const [data, setData] = useState<ServiceDashboardStored>({} as ServiceDashboardStored);
  const [validation, setValidation] = useState<Map<keyof ServiceDashboard, string>>(
    new Map<keyof ServiceDashboard, string>(),
  );

  // Ref section
  const singletonHost = useRef<{ __signedIdentifier: string }>({} as unknown as { __signedIdentifier: string });
  const payloadDiff = useRef<Record<keyof ServiceDashboardStored, any>>(
    {} as unknown as Record<keyof ServiceDashboardStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceDashboard, value: any) => void = useCallback(
    (attributeName: keyof ServiceDashboard, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserDashboardHomeAccessViewPagePayload(attributeName, value);
      setData((prevData) => ({
        ...prevData,
        [attributeName]: value,
      }));
      if (!editMode) {
        setEditMode(true);
      }
    },
    [data, editMode],
  );
  const isFormUpdateable = useCallback(() => {
    return false && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const pageQueryCustomizer: ServiceDashboardQueryCustomizer = {
    _mask: '{}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceDashboardDashboard_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_DASHBOARD_HOME_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceDashboardDashboard_View_EditPageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks
  const openServiceIssueIssue_View_EditCloseDebateInputForm = useServiceIssueIssue_View_EditCloseDebateInputForm();
  const openServiceIssueIssue_View_EditCreateCommentInputForm = useServiceIssueIssue_View_EditCreateCommentInputForm();
  const openServiceIssueIssue_View_EditCreateConArgumentInputForm =
    useServiceIssueIssue_View_EditCreateConArgumentInputForm();
  const openServiceIssueIssue_View_EditCreateProArgumentInputForm =
    useServiceIssueIssue_View_EditCreateProArgumentInputForm();
  const openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector =
    useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm();

  // Calculated section
  const title: string = t('service.Dashboard.Dashboard_View_Edit', { defaultValue: 'Dashboard View / Edit' });

  // Action section
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (queryCustomizer: ServiceDashboardQueryCustomizer): Promise<ServiceDashboardStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await userServiceForDashboardHomeImpl.refresh(singletonHost.current, pageQueryCustomizer);
      setData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceDashboardStored, any>;
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const ownedVoteDefinitionsOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceDashboardOwnedVoteDefinitionsRelationViewPage((target || data).__signedIdentifier));
  };
  const ownedVoteDefinitionsFilterAction = async (
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
  const ownedVoteDefinitionsRefreshAction = async (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<ServiceVoteDefinitionStored[]> => {
    return userServiceForDashboardHomeImpl.listOwnedVoteDefinitions(singletonHost.current, queryCustomizer);
  };
  const ownedVoteDefinitionsDeleteAction = async (target: ServiceVoteDefinitionStored, silentMode?: boolean) => {
    try {
      const confirmed = !silentMode
        ? await openConfirmDialog(
            'row-delete-action',
            t('judo.modal.confirm.confirm-delete', {
              defaultValue: 'Are you sure you would like to delete the selected element?',
            }),
            t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
          )
        : true;
      if (confirmed) {
        await userServiceForDashboardHomeImpl.deleteOwnedVoteDefinitions(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceVoteDefinition>(error, undefined, target);
      }
    }
  };
  const ownedVoteDefinitionsBulkDeleteAction = async (
    selectedRows: ServiceVoteDefinitionStored[],
  ): Promise<DialogResult<Array<ServiceVoteDefinitionStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceVoteDefinitionStored>({
        dialogTitle: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.BulkDelete',
          { defaultValue: 'Delete' },
        ),
        itemTitleFn: (item) => item.countyRepresentation!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.ownedVoteDefinitionsDeleteAction) {
              await actions.ownedVoteDefinitionsDeleteAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
            }
            resolve({
              result: 'submit',
              data: [],
            });
          } else {
            resolve({
              result: 'close',
              data: [],
            });
          }
        },
      });
    });
  };
  const ownedVoteDefinitionsVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(
      target,
    );
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const ownedVoteDefinitionsVoteSelectAnswerAction = async () => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector(
        data,
      );
    if (result === 'submit') {
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
      }
    }
  };
  const ownedVoteDefinitionsVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(
      target,
    );
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const ownedVoteDefinitionsVoteYesNoAbstainAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const favoriteIssuesOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceDashboardFavoriteIssuesRelationViewPage((target || data).__signedIdentifier));
  };
  const favoriteIssuesFilterAction = async (
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
  const favoriteIssuesRefreshAction = async (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored[]> => {
    return userServiceForDashboardHomeImpl.listFavoriteIssues(singletonHost.current, queryCustomizer);
  };
  const favoriteIssuesCloseVoteForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForDashboardHomeImpl.closeVoteForFavoriteIssues(target!);
      if (customActions?.postFavoriteIssuesCloseVoteForIssueAction) {
        await customActions.postFavoriteIssuesCloseVoteForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceDashboard>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const favoriteIssuesCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const favoriteIssuesCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const favoriteIssuesDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForDashboardHomeImpl.deleteOrArchiveForFavoriteIssues(target!);
      if (customActions?.postFavoriteIssuesDeleteOrArchiveForIssueAction) {
        await customActions.postFavoriteIssuesDeleteOrArchiveForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceDashboard>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const favoriteIssuesCreateConArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const favoriteIssuesAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForDashboardHomeImpl.addToFavoritesForFavoriteIssues(target!);
      if (customActions?.postFavoriteIssuesAddToFavoritesForIssueAction) {
        await customActions.postFavoriteIssuesAddToFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceDashboard>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const favoriteIssuesRemoveFromFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForDashboardHomeImpl.removeFromFavoritesForFavoriteIssues(target!);
      if (customActions?.postFavoriteIssuesRemoveFromFavoritesForIssueAction) {
        await customActions.postFavoriteIssuesRemoveFromFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceDashboard>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const favoriteIssuesCreateProArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const favoriteIssuesActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForDashboardHomeImpl.activateForFavoriteIssues(target!);
      if (customActions?.postFavoriteIssuesActivateForIssueAction) {
        await customActions.postFavoriteIssuesActivateForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceDashboard>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const issuesOwnedOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceDashboardIssuesOwnedRelationViewPage((target || data).__signedIdentifier));
  };
  const issuesOwnedFilterAction = async (
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
  const issuesOwnedRefreshAction = async (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored[]> => {
    return userServiceForDashboardHomeImpl.listIssuesOwned(singletonHost.current, queryCustomizer);
  };
  const issuesOwnedDeleteAction = async (target: ServiceIssueStored, silentMode?: boolean) => {
    try {
      const confirmed = !silentMode
        ? await openConfirmDialog(
            'row-delete-action',
            t('judo.modal.confirm.confirm-delete', {
              defaultValue: 'Are you sure you would like to delete the selected element?',
            }),
            t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
          )
        : true;
      if (confirmed) {
        await userServiceForDashboardHomeImpl.deleteIssuesOwned(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceIssue>(error, undefined, target);
      }
    }
  };
  const issuesOwnedBulkDeleteAction = async (
    selectedRows: ServiceIssueStored[],
  ): Promise<DialogResult<Array<ServiceIssueStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceIssueStored>({
        dialogTitle: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.issues.IssueTabBar.myissues.ownedIssues.BulkDelete',
          { defaultValue: 'Delete' },
        ),
        itemTitleFn: (item) => item.countyRepresentation!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.issuesOwnedDeleteAction) {
              await actions.issuesOwnedDeleteAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
            }
            resolve({
              result: 'submit',
              data: [],
            });
          } else {
            resolve({
              result: 'close',
              data: [],
            });
          }
        },
      });
    });
  };
  const issuesOwnedCloseVoteForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForDashboardHomeImpl.closeVoteForIssuesOwned(target!);
      if (customActions?.postIssuesOwnedCloseVoteForIssueAction) {
        await customActions.postIssuesOwnedCloseVoteForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceDashboard>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const issuesOwnedCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const issuesOwnedCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const issuesOwnedDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForDashboardHomeImpl.deleteOrArchiveForIssuesOwned(target!);
      if (customActions?.postIssuesOwnedDeleteOrArchiveForIssueAction) {
        await customActions.postIssuesOwnedDeleteOrArchiveForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceDashboard>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const issuesOwnedCreateConArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const issuesOwnedAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForDashboardHomeImpl.addToFavoritesForIssuesOwned(target!);
      if (customActions?.postIssuesOwnedAddToFavoritesForIssueAction) {
        await customActions.postIssuesOwnedAddToFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceDashboard>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const issuesOwnedRemoveFromFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForDashboardHomeImpl.removeFromFavoritesForIssuesOwned(target!);
      if (customActions?.postIssuesOwnedRemoveFromFavoritesForIssueAction) {
        await customActions.postIssuesOwnedRemoveFromFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceDashboard>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const issuesOwnedCreateProArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const issuesOwnedActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForDashboardHomeImpl.activateForIssuesOwned(target!);
      if (customActions?.postIssuesOwnedActivateForIssueAction) {
        await customActions.postIssuesOwnedActivateForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceDashboard>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const userVoteEntriesFilterAction = async (
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
  const userVoteEntriesRefreshAction = async (
    queryCustomizer: ServiceVoteEntryQueryCustomizer,
  ): Promise<ServiceVoteEntryStored[]> => {
    return userServiceForDashboardHomeImpl.listUserVoteEntries(singletonHost.current, queryCustomizer);
  };
  const favoriteVoteDefinitionsOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceDashboardFavoriteVoteDefinitionsRelationViewPage((target || data).__signedIdentifier));
  };
  const favoriteVoteDefinitionsFilterAction = async (
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
  const favoriteVoteDefinitionsRefreshAction = async (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<ServiceVoteDefinitionStored[]> => {
    return userServiceForDashboardHomeImpl.listFavoriteVoteDefinitions(singletonHost.current, queryCustomizer);
  };
  const favoriteVoteDefinitionsVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(
      target,
    );
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const favoriteVoteDefinitionsVoteSelectAnswerAction = async () => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector(
        data,
      );
    if (result === 'submit') {
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
      }
    }
  };
  const favoriteVoteDefinitionsVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(
      target,
    );
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const favoriteVoteDefinitionsVoteYesNoAbstainAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const getSingletonPayload = async (): Promise<JudoIdentifiable<any>> => {
    return await userServiceForDashboardHomeImpl.refreshForDashboardHome({
      _mask: '{}',
    });
  };

  const actions: ServiceDashboardDashboard_View_EditPageActions = {
    backAction,
    refreshAction,
    ownedVoteDefinitionsOpenPageAction,
    ownedVoteDefinitionsFilterAction,
    ownedVoteDefinitionsRefreshAction,
    ownedVoteDefinitionsDeleteAction,
    ownedVoteDefinitionsBulkDeleteAction,
    ownedVoteDefinitionsVoteYesNoAction,
    ownedVoteDefinitionsVoteSelectAnswerAction,
    ownedVoteDefinitionsVoteRatingAction,
    ownedVoteDefinitionsVoteYesNoAbstainAction,
    favoriteIssuesOpenPageAction,
    favoriteIssuesFilterAction,
    favoriteIssuesRefreshAction,
    favoriteIssuesCloseVoteForIssueAction,
    favoriteIssuesCloseDebateAction,
    favoriteIssuesCreateCommentAction,
    favoriteIssuesDeleteOrArchiveForIssueAction,
    favoriteIssuesCreateConArgumentAction,
    favoriteIssuesAddToFavoritesForIssueAction,
    favoriteIssuesRemoveFromFavoritesForIssueAction,
    favoriteIssuesCreateProArgumentAction,
    favoriteIssuesActivateForIssueAction,
    issuesOwnedOpenPageAction,
    issuesOwnedFilterAction,
    issuesOwnedRefreshAction,
    issuesOwnedDeleteAction,
    issuesOwnedBulkDeleteAction,
    issuesOwnedCloseVoteForIssueAction,
    issuesOwnedCloseDebateAction,
    issuesOwnedCreateCommentAction,
    issuesOwnedDeleteOrArchiveForIssueAction,
    issuesOwnedCreateConArgumentAction,
    issuesOwnedAddToFavoritesForIssueAction,
    issuesOwnedRemoveFromFavoritesForIssueAction,
    issuesOwnedCreateProArgumentAction,
    issuesOwnedActivateForIssueAction,
    userVoteEntriesFilterAction,
    userVoteEntriesRefreshAction,
    favoriteVoteDefinitionsOpenPageAction,
    favoriteVoteDefinitionsFilterAction,
    favoriteVoteDefinitionsRefreshAction,
    favoriteVoteDefinitionsVoteYesNoAction,
    favoriteVoteDefinitionsVoteSelectAnswerAction,
    favoriteVoteDefinitionsVoteRatingAction,
    favoriteVoteDefinitionsVoteYesNoAbstainAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    (async () => {
      const res = await getSingletonPayload();
      if (res?.__signedIdentifier) {
        singletonHost.current = res;
      } else {
        navigate('*');
        return;
      }
      await actions.refreshAction!(pageQueryCustomizer);
    })();
  }, []);

  return (
    <div
      id="User/(esm/_GgaEAIyPEe2VSOmaAz6G9Q)/AccessViewPageDefinition"
      data-page-name="service::User::dashboardHome::AccessViewPage"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceDashboardDashboard_View_EditPageContainer
            title={title}
            actions={actions}
            isLoading={isLoading}
            editMode={editMode}
            refreshCounter={refreshCounter}
            data={data}
            storeDiff={storeDiff}
            isFormUpdateable={isFormUpdateable}
            isFormDeleteable={isFormDeleteable}
            validation={validation}
            setValidation={setValidation}
          />
        </PageContainerTransition>
      </Suspense>
    </div>
  );
}
