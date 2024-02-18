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
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageActions,
  ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageProps,
} from '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageContainer';
import { useServiceRatingVoteDefinitionOwnerRelationViewPage } from '~/dialogs/Service/RatingVoteDefinition/Owner/RelationViewPage';
import { useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/Vote/Input/Form';
import { useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage } from '~/dialogs/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/VoteEntryBase/Virtual/Owner/LinkSetSelectorPage';
import { useServiceRatingVoteDefinitionUserVoteEntryRelationViewPage } from '~/dialogs/Service/RatingVoteDefinition/UserVoteEntry/RelationViewPage';
import { useServiceRatingVoteDefinitionVoteEntriesRelationViewPage } from '~/dialogs/Service/RatingVoteDefinition/VoteEntries/RelationViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceRatingVoteDefinitionIssueRelationViewPage } from '~/routes';
import type {
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceRatingVoteDefinitionStored,
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceRatingVoteEntryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  VoteStatus,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForRatingVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForRatingVoteDefinitionsImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageActionsExtended =
  ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageActions & {
    postActivateForRatingVoteDefinitionAction?: () => Promise<void>;
    postAddToFavoritesForRatingVoteDefinitionAction?: () => Promise<void>;
    postCloseVoteForRatingVoteDefinitionAction?: () => Promise<void>;
    postDeleteOrArchiveForRatingVoteDefinitionAction?: () => Promise<void>;
    postRemoveFromFavoritesForRatingVoteDefinitionAction?: () => Promise<void>;
    postTakeBackVoteForRatingVoteDefinitionAction?: () => Promise<void>;
    postRefreshAction?: (
      data: ServiceRatingVoteDefinitionStored,
      storeDiff: (attributeName: keyof ServiceRatingVoteDefinition, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceRatingVoteDefinition, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_USER_RATING_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_RATING_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditActionsHook = (
  data: ServiceRatingVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceRatingVoteDefinition, value: any) => void,

  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageActionsExtended;

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditViewModel
  extends ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditViewModelContext =
  createContext<ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditViewModel>({} as any);
export const useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditViewModel = () => {
  const context = useContext(ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditViewModel must be used within a(n) ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditViewModelProvider',
    );
  }
  return context;
};

export const convertServiceUserRatingVoteDefinitionsAccessViewPagePayload = (
  attributeName: keyof ServiceRatingVoteDefinition,
  value: any,
): any => {
  const dateTimeTypes: string[] = [
    'closeAt',

    'created',
  ];
  if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  }
  return value;
};

const ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_s3Fx0FuiEe6rLvwZQOpyUA)/AccessViewPageDefinition
// Name: service::User::ratingVoteDefinitions::AccessViewPage
export default function ServiceUserRatingVoteDefinitionsAccessViewPage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Services
  const userServiceForRatingVoteDefinitionsImpl = useMemo(
    () => new UserServiceForRatingVoteDefinitionsImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceRatingVoteDefinitionStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceRatingVoteDefinitionStored);
  const [validation, setValidation] = useState<Map<keyof ServiceRatingVoteDefinition, string>>(
    new Map<keyof ServiceRatingVoteDefinition, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceRatingVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof ServiceRatingVoteDefinitionStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceRatingVoteDefinition, value: any) => void = useCallback(
    (attributeName: keyof ServiceRatingVoteDefinition, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserRatingVoteDefinitionsAccessViewPagePayload(
        attributeName,
        value,
      );
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
    return true && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const getPageQueryCustomizer: () => ServiceRatingVoteDefinitionQueryCustomizer = () => ({
    _mask: actions.getMask
      ? actions.getMask!()
      : '{closeAt,created,description,isFavorite,isNotFavorite,isVoteNotDeletable,isVoteNotEditable,isVoteNotOpen,maxRateValue,minRateValue,status,title,userHasNoVoteEntry,userHasVoteEntry,userVoteEntry{created,value}}',
  });

  // Private actions
  const submit = async () => {
    await updateAction();
    await deleteOrArchiveForRatingVoteDefinitionAction();
  };
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_RATING_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageActionsExtended | undefined =
    customActionsHook?.(data, editMode, storeDiff, refresh, submit);

  // Dialog hooks
  const openServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage =
    useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage();
  const openServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm =
    useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm();
  const openServiceRatingVoteDefinitionOwnerRelationViewPage = useServiceRatingVoteDefinitionOwnerRelationViewPage();
  const openServiceRatingVoteDefinitionUserVoteEntryRelationViewPage =
    useServiceRatingVoteDefinitionUserVoteEntryRelationViewPage();
  const openServiceRatingVoteDefinitionVoteEntriesRelationViewPage =
    useServiceRatingVoteDefinitionVoteEntriesRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceRatingVoteDefinition): string => {
    return t('service.RatingVoteDefinition.RatingVoteDefinition_View_Edit', {
      defaultValue: 'RatingVoteDefinition View / Edit',
    });
  };
  const issueOpenPageAction = async (target: ServiceIssue | ServiceIssueStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceIssueStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceRatingVoteDefinitionIssueRelationViewPage(
          ((target as ServiceIssueStored) || data).__signedIdentifier,
        ),
      );
    }
  };
  const issuePreFetchAction = async (): Promise<JudoRestResponse<ServiceIssueStored>> => {
    return userServiceForRatingVoteDefinitionsImpl.getIssue(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      {
        _mask: '{}',
      },
    );
  };
  const ownerAutocompleteRangeAction = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    try {
      const { data: result } = await userServiceForRatingVoteDefinitionsImpl.getRangeForOwner(
        cleanUpPayload(data),
        queryCustomizer,
      );
      return result;
    } catch (error: any) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const ownerOpenSetSelectorAction = async (): Promise<ServiceServiceUserStored | undefined> => {
    const { result, data: returnedData } =
      await openServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage(
        data,
        data.owner ? [data.owner] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('owner', returnedData[0]);
        return returnedData[0];
      }
    }
    return undefined;
  };
  const ownerUnsetAction = async (target: ServiceServiceUser | ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };
  const ownerOpenPageAction = async (target: ServiceServiceUser | ServiceServiceUserStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceServiceUserStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceRatingVoteDefinitionOwnerRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const activateForRatingVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForRatingVoteDefinitionsImpl.activate(data);
      if (customActions?.postActivateForRatingVoteDefinitionAction) {
        await customActions.postActivateForRatingVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceRatingVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const addToFavoritesForRatingVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForRatingVoteDefinitionsImpl.addToFavorites(data);
      if (customActions?.postAddToFavoritesForRatingVoteDefinitionAction) {
        await customActions.postAddToFavoritesForRatingVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceRatingVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const closeVoteForRatingVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForRatingVoteDefinitionsImpl.closeVote(data);
      if (customActions?.postCloseVoteForRatingVoteDefinitionAction) {
        await customActions.postCloseVoteForRatingVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceRatingVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const deleteOrArchiveForRatingVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForRatingVoteDefinitionsImpl.deleteOrArchive(data);
      if (customActions?.postDeleteOrArchiveForRatingVoteDefinitionAction) {
        await customActions.postDeleteOrArchiveForRatingVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceRatingVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const voteEntriesFilterAction = async (
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
  const voteEntriesRefreshAction = async (
    queryCustomizer: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceRatingVoteEntryStored[]>> => {
    return userServiceForRatingVoteDefinitionsImpl.listVoteEntries(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      queryCustomizer,
    );
  };
  const voteEntriesOpenPageAction = async (
    target: ServiceRatingVoteEntry | ServiceRatingVoteEntryStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceRatingVoteEntryStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceRatingVoteDefinitionVoteEntriesRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const removeFromFavoritesForRatingVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForRatingVoteDefinitionsImpl.removeFromFavorites(data);
      if (customActions?.postRemoveFromFavoritesForRatingVoteDefinitionAction) {
        await customActions.postRemoveFromFavoritesForRatingVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceRatingVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const voteAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } =
      await openServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const takeBackVoteForRatingVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForRatingVoteDefinitionsImpl.takeBackVote(data);
      if (customActions?.postTakeBackVoteForRatingVoteDefinitionAction) {
        await customActions.postTakeBackVoteForRatingVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceRatingVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const userVoteEntryOpenPageAction = async (
    target: ServiceRatingVoteEntry | ServiceRatingVoteEntryStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceRatingVoteEntryStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceRatingVoteDefinitionUserVoteEntryRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const backAction = async () => {
    navigateBack();
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(getPageQueryCustomizer()));
  };
  const refreshAction = async (
    queryCustomizer: ServiceRatingVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceRatingVoteDefinitionStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await userServiceForRatingVoteDefinitionsImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        getPageQueryCustomizer(),
      );
      const { data: result } = response;
      setData(result);
      setLatestViewData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceRatingVoteDefinitionStored, any>;
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
  const updateAction = async () => {
    setIsLoading(true);
    try {
      const { data: res } = await userServiceForRatingVoteDefinitionsImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceRatingVoteDefinition, string>());
        setEditMode(false);
        await actions.refreshAction!(getPageQueryCustomizer());
      }
    } catch (error) {
      handleError<ServiceRatingVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageActions = {
    getPageTitle,
    issueOpenPageAction,
    issuePreFetchAction,
    ownerAutocompleteRangeAction,
    ownerOpenSetSelectorAction,
    ownerUnsetAction,
    ownerOpenPageAction,
    activateForRatingVoteDefinitionAction,
    addToFavoritesForRatingVoteDefinitionAction,
    closeVoteForRatingVoteDefinitionAction,
    deleteOrArchiveForRatingVoteDefinitionAction,
    voteEntriesFilterAction,
    voteEntriesRefreshAction,
    voteEntriesOpenPageAction,
    removeFromFavoritesForRatingVoteDefinitionAction,
    voteAction,
    takeBackVoteForRatingVoteDefinitionAction,
    userVoteEntryOpenPageAction,
    backAction,
    cancelAction,
    refreshAction,
    updateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditViewModel = {
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
      await actions.refreshAction!(getPageQueryCustomizer());
    })();
  }, []);

  return (
    <ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_s3Fx0FuiEe6rLvwZQOpyUA)/AccessViewPageDefinition"
          data-page-name="service::User::ratingVoteDefinitions::AccessViewPage"
        />
        <PageContainerTransition>
          <ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageContainer
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
    </ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditViewModelContext.Provider>
  );
}
