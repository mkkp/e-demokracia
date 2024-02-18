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
import { Suspense, createContext, lazy, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceDashboardDashboard_View_EditPageActions,
  ServiceDashboardDashboard_View_EditPageProps,
} from '~/containers/Service/Dashboard/Dashboard_View_Edit/ServiceDashboardDashboard_View_EditPageContainer';
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
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
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
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForDashboardHomeImpl } from '~/services/data-axios/UserServiceForDashboardHomeImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
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
  'SERVICE_USER_DASHBOARD_HOME_ACCESS_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceDashboardDashboard_View_EditActionsHook = (
  data: ServiceDashboardStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceDashboard, value: any) => void,

  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceDashboardDashboard_View_EditPageActionsExtended;

export interface ServiceDashboardDashboard_View_EditViewModel extends ServiceDashboardDashboard_View_EditPageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceDashboardDashboard_View_EditViewModelContext = createContext<ServiceDashboardDashboard_View_EditViewModel>(
  {} as any,
);
export const useServiceDashboardDashboard_View_EditViewModel = () => {
  const context = useContext(ServiceDashboardDashboard_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceDashboardDashboard_View_EditViewModel must be used within a(n) ServiceDashboardDashboard_View_EditViewModelProvider',
    );
  }
  return context;
};

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
  const { setLatestViewData } = useViewData();
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

  const getPageQueryCustomizer: () => ServiceDashboardQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{}',
  });

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceDashboardDashboard_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_DASHBOARD_HOME_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceDashboardDashboard_View_EditPageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
    storeDiff,
    refresh,
    submit,
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

  // Action section
  const getPageTitle = (data: ServiceDashboard): string => {
    return t('service.Dashboard.Dashboard_View_Edit', { defaultValue: 'Dashboard View / Edit' });
  };
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
            await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        dialogTitle: t('judo.action.bulk-remove', { defaultValue: 'Remove' }),
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
              await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
  ): Promise<JudoRestResponse<ServiceIssueStored[]>> => {
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
            await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
  const favoriteIssuesOpenPageAction = async (target: ServiceIssue | ServiceIssueStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceIssueStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceDashboardFavoriteIssuesRelationViewPage(
          ((target as ServiceIssueStored) || data).__signedIdentifier,
        ),
      );
    }
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
            await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        dialogTitle: t('judo.action.bulk-remove', { defaultValue: 'Remove' }),
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
              await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
  ): Promise<JudoRestResponse<ServiceIssueStored[]>> => {
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
            await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
  const ownedIssuesOpenPageAction = async (target: ServiceIssue | ServiceIssueStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceIssueStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceDashboardOwnedIssuesRelationViewPage(((target as ServiceIssueStored) || data).__signedIdentifier),
      );
    }
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
            await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        dialogTitle: t('judo.action.bulk-remove', { defaultValue: 'Remove' }),
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
              await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored[]>> => {
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
            await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
  const favoriteVoteDefinitionsOpenPageAction = async (
    target: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceVoteDefinitionStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceDashboardFavoriteVoteDefinitionsRelationViewPage(
          ((target as ServiceVoteDefinitionStored) || data).__signedIdentifier,
        ),
      );
    }
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
            await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        dialogTitle: t('judo.action.bulk-remove', { defaultValue: 'Remove' }),
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
              await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored[]>> => {
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
            await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
  const ownedVoteDefinitionsOpenPageAction = async (
    target: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceVoteDefinitionStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceDashboardOwnedVoteDefinitionsRelationViewPage(
          ((target as ServiceVoteDefinitionStored) || data).__signedIdentifier,
        ),
      );
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
  ): Promise<JudoRestResponse<ServiceVoteEntryStored[]>> => {
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceDashboard>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const favoriteIssuesCloseDebateAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const ownedIssuesCloseDebateAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceDashboard>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const favoriteIssuesCreateConArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const ownedIssuesCreateConArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const favoriteIssuesCreateProArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const ownedIssuesCreateProArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const favoriteIssuesCreateCommentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const ownedIssuesCreateCommentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceDashboard>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (
    queryCustomizer: ServiceDashboardQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceDashboardStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await userServiceForDashboardHomeImpl.refresh(singletonHost.current, getPageQueryCustomizer());
      const { data: result } = response;
      setData(result);
      setLatestViewData(result);
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
      return response;
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const favoriteVoteDefinitionsVoteRatingAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const ownedVoteDefinitionsVoteRatingAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const favoriteVoteDefinitionsVoteSelectAnswerAction = async () => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector(
        data,
      );
    if (result === 'submit') {
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const favoriteVoteDefinitionsVoteYesNoAbstainAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const ownedVoteDefinitionsVoteYesNoAbstainAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const favoriteVoteDefinitionsVoteYesNoAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const ownedVoteDefinitionsVoteYesNoAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const getSingletonPayload = async (): Promise<JudoIdentifiable<any>> => {
    const { data: sp } = await userServiceForDashboardHomeImpl.refreshForDashboardHome({
      _mask: '{}',
    });
    return sp;
  };

  const actions: ServiceDashboardDashboard_View_EditPageActions = {
    getPageTitle,
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
    favoriteIssuesCreateConArgumentAction,
    ownedIssuesCreateConArgumentAction,
    favoriteIssuesCreateProArgumentAction,
    ownedIssuesCreateProArgumentAction,
    favoriteIssuesCreateCommentAction,
    ownedIssuesCreateCommentAction,
    favoriteIssuesRemoveFromFavoritesForIssueAction,
    ownedIssuesRemoveFromFavoritesForIssueAction,
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

  // ViewModel setup
  const viewModel: ServiceDashboardDashboard_View_EditViewModel = {
    actions,
    isLoading,
    setIsLoading,
    refreshCounter,
    editMode,
    setEditMode,
    refresh,
    data,
    validation,
    setValidation,
    storeDiff,
    submit,
    isFormUpdateable,
    isFormDeleteable,
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
      await actions.refreshAction!(getPageQueryCustomizer());
    })();
  }, []);

  return (
    <ServiceDashboardDashboard_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_GgaEAIyPEe2VSOmaAz6G9Q)/AccessViewPageDefinition"
          data-page-name="service::User::dashboardHome::AccessViewPage"
        />
        <PageContainerTransition>
          <ServiceDashboardDashboard_View_EditPageContainer
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
    </ServiceDashboardDashboard_View_EditViewModelContext.Provider>
  );
}
