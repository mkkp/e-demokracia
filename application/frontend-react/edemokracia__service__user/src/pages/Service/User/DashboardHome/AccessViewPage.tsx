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
import { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type { ServiceDashboardDashboard_View_EditPageActions } from '~/containers/Service/Dashboard/Dashboard_View_Edit/ServiceDashboardDashboard_View_EditPageContainer';
import { useServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarFavoriteIssuesFavoriteIssuesTableAddSelectorPage } from '~/dialogs/Service/Dashboard/Dashboard_View_Edit/Selector/Issues/IssueTabBar/FavoriteIssues/FavoriteIssues/TableAddSelectorPage';
import { useServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesTableAddSelectorPage } from '~/dialogs/Service/Dashboard/Dashboard_View_Edit/Selector/Issues/IssueTabBar/Myissues/OwnedIssues/TableAddSelectorPage';
import { useServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsTableAddSelectorPage } from '~/dialogs/Service/Dashboard/Dashboard_View_Edit/Selector/Votes/VotesTabBar/FavoriteVotesGroup/FavoriteVoteDefinitions/TableAddSelectorPage';
import { useServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsTableAddSelectorPage } from '~/dialogs/Service/Dashboard/Dashboard_View_Edit/Selector/Votes/VotesTabBar/MyVotesGroup/OwnedVoteDefinitions/TableAddSelectorPage';
import { useServiceIssueIssue_View_EditCloseDebateInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CloseDebate/Input/Form';
import { useServiceIssueIssue_View_EditCreateCommentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateComment/Input/Form';
import { useServiceIssueIssue_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateConArgument/Input/Form';
import { useServiceIssueIssue_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateProArgument/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/TabBar/Selectanswervote/VoteSelectAnswer/Relation/Table/CallSelector';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteRating/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNo/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNoAbstain/Input/Form';
import { useCRUDDialog, useSnacks } from '~/hooks';
import { routeToServiceDashboardFavoriteIssuesRelationViewPage } from '~/routes';
import { routeToServiceDashboardFavoriteVoteDefinitionsRelationViewPage } from '~/routes';
import { routeToServiceDashboardOwnedIssuesRelationViewPage } from '~/routes';
import { routeToServiceDashboardOwnedVoteDefinitionsRelationViewPage } from '~/routes';
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
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForDashboardHomeImpl } from '~/services/data-axios/UserServiceForDashboardHomeImpl';
import { PageContainerTransition } from '~/theme/animations';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceDashboardDashboard_View_EditPageActionsExtended = ServiceDashboardDashboard_View_EditPageActions & {
  postFavoriteIssuesActivateForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
  postOwnedIssuesActivateForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
  postFavoriteIssuesAddToFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
  postOwnedIssuesAddToFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
  postFavoriteIssuesCloseVoteForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
  postOwnedIssuesCloseVoteForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
  postFavoriteIssuesDeleteOrArchiveForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
  postOwnedIssuesDeleteOrArchiveForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
  postFavoriteIssuesRemoveFromFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
  postOwnedIssuesRemoveFromFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
  postRefreshAction?: (
    data: ServiceDashboardStored,
    storeDiff: (attributeName: keyof ServiceDashboard, value: any) => void,
    setValidation: Dispatch<SetStateAction<Map<keyof ServiceDashboard, string>>>,
  ) => Promise<void>;
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
  // Services
  const userServiceForDashboardHomeImpl = useMemo(() => new UserServiceForDashboardHomeImpl(judoAxiosProvider), []);

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
  const openServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarFavoriteIssuesFavoriteIssuesTableAddSelectorPage =
    useServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarFavoriteIssuesFavoriteIssuesTableAddSelectorPage();
  const openServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesTableAddSelectorPage =
    useServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesTableAddSelectorPage();
  const openServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsTableAddSelectorPage =
    useServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsTableAddSelectorPage();
  const openServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsTableAddSelectorPage =
    useServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsTableAddSelectorPage();
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

  // Private actions
  const submit = async () => {};

  // Action section
  const favoriteIssuesOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarFavoriteIssuesFavoriteIssuesTableAddSelectorPage(
        data,
        data.favoriteIssues ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await userServiceForDashboardHomeImpl.addFavoriteIssues(data, returnedData);
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
          }
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const favoriteIssuesBulkRemoveAction = async (
    selectedRows: ServiceIssueStored[],
  ): Promise<DialogResult<Array<ServiceIssueStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceIssueStored>({
        dialogTitle: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.issues.IssueTabBar.favoriteIssues.favoriteIssues.BulkRemove',
          { defaultValue: 'Remove' },
        ),
        itemTitleFn: (item) => item.countyRepresentation!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.favoriteIssuesRemoveAction) {
              await actions.favoriteIssuesRemoveAction!(item, true);
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
            });
          }
        },
      });
    });
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
  const favoriteIssuesRemoveAction = async (target?: ServiceIssueStored, silentMode?: boolean) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await userServiceForDashboardHomeImpl.removeFavoriteIssues(data, [target!]);
        if (!silentMode) {
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
          }
        }
      } catch (error) {
        if (!silentMode) {
          handleError<ServiceIssue>(error, undefined, target);
        }
      } finally {
        if (!silentMode) {
          setIsLoading(false);
        }
      }
    }
  };
  const favoriteIssuesOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceDashboardFavoriteIssuesRelationViewPage((target || data).__signedIdentifier));
  };
  const ownedIssuesOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesTableAddSelectorPage(
        data,
        data.ownedIssues ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await userServiceForDashboardHomeImpl.addOwnedIssues(data, returnedData);
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
          }
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const ownedIssuesBulkRemoveAction = async (
    selectedRows: ServiceIssueStored[],
  ): Promise<DialogResult<Array<ServiceIssueStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceIssueStored>({
        dialogTitle: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.issues.IssueTabBar.myissues.ownedIssues.BulkRemove',
          { defaultValue: 'Remove' },
        ),
        itemTitleFn: (item) => item.countyRepresentation!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.ownedIssuesRemoveAction) {
              await actions.ownedIssuesRemoveAction!(item, true);
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
            });
          }
        },
      });
    });
  };
  const ownedIssuesFilterAction = async (
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
  const ownedIssuesRefreshAction = async (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored[]> => {
    return userServiceForDashboardHomeImpl.listOwnedIssues(singletonHost.current, queryCustomizer);
  };
  const ownedIssuesRemoveAction = async (target?: ServiceIssueStored, silentMode?: boolean) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await userServiceForDashboardHomeImpl.removeOwnedIssues(data, [target!]);
        if (!silentMode) {
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
          }
        }
      } catch (error) {
        if (!silentMode) {
          handleError<ServiceIssue>(error, undefined, target);
        }
      } finally {
        if (!silentMode) {
          setIsLoading(false);
        }
      }
    }
  };
  const ownedIssuesOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceDashboardOwnedIssuesRelationViewPage((target || data).__signedIdentifier));
  };
  const favoriteVoteDefinitionsOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsTableAddSelectorPage(
        data,
        data.favoriteVoteDefinitions ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await userServiceForDashboardHomeImpl.addFavoriteVoteDefinitions(data, returnedData);
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
          }
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const favoriteVoteDefinitionsBulkRemoveAction = async (
    selectedRows: ServiceVoteDefinitionStored[],
  ): Promise<DialogResult<Array<ServiceVoteDefinitionStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceVoteDefinitionStored>({
        dialogTitle: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.favoriteVotesGroup.favoriteVoteDefinitions.BulkRemove',
          { defaultValue: 'Remove' },
        ),
        itemTitleFn: (item) => item.countyRepresentation!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.favoriteVoteDefinitionsRemoveAction) {
              await actions.favoriteVoteDefinitionsRemoveAction!(item, true);
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
            });
          }
        },
      });
    });
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
  const favoriteVoteDefinitionsRemoveAction = async (target?: ServiceVoteDefinitionStored, silentMode?: boolean) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await userServiceForDashboardHomeImpl.removeFavoriteVoteDefinitions(data, [target!]);
        if (!silentMode) {
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
          }
        }
      } catch (error) {
        if (!silentMode) {
          handleError<ServiceVoteDefinition>(error, undefined, target);
        }
      } finally {
        if (!silentMode) {
          setIsLoading(false);
        }
      }
    }
  };
  const favoriteVoteDefinitionsOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceDashboardFavoriteVoteDefinitionsRelationViewPage((target || data).__signedIdentifier));
  };
  const ownedVoteDefinitionsOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsTableAddSelectorPage(
        data,
        data.ownedVoteDefinitions ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await userServiceForDashboardHomeImpl.addOwnedVoteDefinitions(data, returnedData);
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
          }
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const ownedVoteDefinitionsBulkRemoveAction = async (
    selectedRows: ServiceVoteDefinitionStored[],
  ): Promise<DialogResult<Array<ServiceVoteDefinitionStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceVoteDefinitionStored>({
        dialogTitle: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.BulkRemove',
          { defaultValue: 'Remove' },
        ),
        itemTitleFn: (item) => item.countyRepresentation!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.ownedVoteDefinitionsRemoveAction) {
              await actions.ownedVoteDefinitionsRemoveAction!(item, true);
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
            });
          }
        },
      });
    });
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
  const ownedVoteDefinitionsRemoveAction = async (target?: ServiceVoteDefinitionStored, silentMode?: boolean) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await userServiceForDashboardHomeImpl.removeOwnedVoteDefinitions(data, [target!]);
        if (!silentMode) {
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
          }
        }
      } catch (error) {
        if (!silentMode) {
          handleError<ServiceVoteDefinition>(error, undefined, target);
        }
      } finally {
        if (!silentMode) {
          setIsLoading(false);
        }
      }
    }
  };
  const ownedVoteDefinitionsOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceDashboardOwnedVoteDefinitionsRelationViewPage((target || data).__signedIdentifier));
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
  const ownedIssuesActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForDashboardHomeImpl.activateForOwnedIssues(target!);
      if (customActions?.postOwnedIssuesActivateForIssueAction) {
        await customActions.postOwnedIssuesActivateForIssueAction(target!);
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
  const ownedIssuesAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForDashboardHomeImpl.addToFavoritesForOwnedIssues(target!);
      if (customActions?.postOwnedIssuesAddToFavoritesForIssueAction) {
        await customActions.postOwnedIssuesAddToFavoritesForIssueAction(target!);
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
  const ownedIssuesCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
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
  const ownedIssuesCloseVoteForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForDashboardHomeImpl.closeVoteForOwnedIssues(target!);
      if (customActions?.postOwnedIssuesCloseVoteForIssueAction) {
        await customActions.postOwnedIssuesCloseVoteForIssueAction(target!);
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
  const ownedIssuesDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForDashboardHomeImpl.deleteOrArchiveForOwnedIssues(target!);
      if (customActions?.postOwnedIssuesDeleteOrArchiveForIssueAction) {
        await customActions.postOwnedIssuesDeleteOrArchiveForIssueAction(target!);
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
  const ownedIssuesRemoveFromFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForDashboardHomeImpl.removeFromFavoritesForOwnedIssues(target!);
      if (customActions?.postOwnedIssuesRemoveFromFavoritesForIssueAction) {
        await customActions.postOwnedIssuesRemoveFromFavoritesForIssueAction(target!);
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
  const ownedIssuesCreateConArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const favoriteIssuesCreateProArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const ownedIssuesCreateProArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
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
  const ownedIssuesCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
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
      if (customActions?.postRefreshAction) {
        await customActions?.postRefreshAction(result, storeDiff, setValidation);
      }
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const favoriteVoteDefinitionsVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const ownedVoteDefinitionsVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
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
  const favoriteVoteDefinitionsVoteYesNoAbstainAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
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
  const favoriteVoteDefinitionsVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const ownedVoteDefinitionsVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
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
    favoriteIssuesOpenAddSelectorAction,
    favoriteIssuesBulkRemoveAction,
    favoriteIssuesFilterAction,
    favoriteIssuesRefreshAction,
    favoriteIssuesRemoveAction,
    favoriteIssuesOpenPageAction,
    ownedIssuesOpenAddSelectorAction,
    ownedIssuesBulkRemoveAction,
    ownedIssuesFilterAction,
    ownedIssuesRefreshAction,
    ownedIssuesRemoveAction,
    ownedIssuesOpenPageAction,
    favoriteVoteDefinitionsOpenAddSelectorAction,
    favoriteVoteDefinitionsBulkRemoveAction,
    favoriteVoteDefinitionsFilterAction,
    favoriteVoteDefinitionsRefreshAction,
    favoriteVoteDefinitionsRemoveAction,
    favoriteVoteDefinitionsOpenPageAction,
    ownedVoteDefinitionsOpenAddSelectorAction,
    ownedVoteDefinitionsBulkRemoveAction,
    ownedVoteDefinitionsFilterAction,
    ownedVoteDefinitionsRefreshAction,
    ownedVoteDefinitionsRemoveAction,
    ownedVoteDefinitionsOpenPageAction,
    userVoteEntriesFilterAction,
    userVoteEntriesRefreshAction,
    favoriteIssuesActivateForIssueAction,
    ownedIssuesActivateForIssueAction,
    favoriteIssuesAddToFavoritesForIssueAction,
    ownedIssuesAddToFavoritesForIssueAction,
    favoriteIssuesCloseDebateAction,
    ownedIssuesCloseDebateAction,
    favoriteIssuesCloseVoteForIssueAction,
    ownedIssuesCloseVoteForIssueAction,
    favoriteIssuesDeleteOrArchiveForIssueAction,
    ownedIssuesDeleteOrArchiveForIssueAction,
    favoriteIssuesRemoveFromFavoritesForIssueAction,
    ownedIssuesRemoveFromFavoritesForIssueAction,
    favoriteIssuesCreateConArgumentAction,
    ownedIssuesCreateConArgumentAction,
    favoriteIssuesCreateProArgumentAction,
    ownedIssuesCreateProArgumentAction,
    favoriteIssuesCreateCommentAction,
    ownedIssuesCreateCommentAction,
    backAction,
    refreshAction,
    favoriteVoteDefinitionsVoteRatingAction,
    ownedVoteDefinitionsVoteRatingAction,
    favoriteVoteDefinitionsVoteSelectAnswerAction,
    ownedVoteDefinitionsVoteSelectAnswerAction,
    favoriteVoteDefinitionsVoteYesNoAbstainAction,
    ownedVoteDefinitionsVoteYesNoAbstainAction,
    favoriteVoteDefinitionsVoteYesNoAction,
    ownedVoteDefinitionsVoteYesNoAction,
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
            submit={submit}
          />
        </PageContainerTransition>
      </Suspense>
    </div>
  );
}
