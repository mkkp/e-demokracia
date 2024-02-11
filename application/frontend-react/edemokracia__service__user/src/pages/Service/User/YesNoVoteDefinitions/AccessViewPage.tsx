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
  ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActions,
  ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageProps,
} from '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageContainer';
import { useServiceYesNoVoteDefinitionOwnerRelationViewPage } from '~/dialogs/Service/YesNoVoteDefinition/Owner/RelationViewPage';
import { useServiceYesNoVoteDefinitionUserVoteEntryRelationViewPage } from '~/dialogs/Service/YesNoVoteDefinition/UserVoteEntry/RelationViewPage';
import { useServiceYesNoVoteDefinitionVoteEntriesRelationViewPage } from '~/dialogs/Service/YesNoVoteDefinition/VoteEntries/RelationViewPage';
import { useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/Vote/Input/Form';
import { useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage } from '~/dialogs/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/VoteEntryBase/Virtual/Owner/LinkSetSelectorPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceYesNoVoteDefinitionIssueRelationViewPage } from '~/routes';
import type {
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
  VoteStatus,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForYesNoVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForYesNoVoteDefinitionsImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActionsExtended =
  ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActions & {
    postActivateForYesNoVoteDefinitionAction?: () => Promise<void>;
    postAddToFavoritesForYesNoVoteDefinitionAction?: () => Promise<void>;
    postCloseVoteForYesNoVoteDefinitionAction?: () => Promise<void>;
    postDeleteOrArchiveForYesNoVoteDefinitionAction?: () => Promise<void>;
    postRemoveFromFavoritesForYesNoVoteDefinitionAction?: () => Promise<void>;
    postTakeBackVoteForYesNoVoteDefinitionAction?: () => Promise<void>;
    postRefreshAction?: (
      data: ServiceYesNoVoteDefinitionStored,
      storeDiff: (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceYesNoVoteDefinition, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_USER_YES_NO_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_YES_NO_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionsHook = (
  data: ServiceYesNoVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => void,

  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActionsExtended;

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditViewModel
  extends ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditViewModelContext =
  createContext<ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditViewModel>({} as any);
export const useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditViewModel = () => {
  const context = useContext(ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditViewModel must be used within a(n) ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditViewModelProvider',
    );
  }
  return context;
};

export const convertServiceUserYesNoVoteDefinitionsAccessViewPagePayload = (
  attributeName: keyof ServiceYesNoVoteDefinition,
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

const ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_zCZh0FoTEe6_67aMO2jOsw)/AccessViewPageDefinition
// Name: service::User::yesNoVoteDefinitions::AccessViewPage
export default function ServiceUserYesNoVoteDefinitionsAccessViewPage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Services
  const userServiceForYesNoVoteDefinitionsImpl = useMemo(
    () => new UserServiceForYesNoVoteDefinitionsImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceYesNoVoteDefinitionStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceYesNoVoteDefinitionStored);
  const [validation, setValidation] = useState<Map<keyof ServiceYesNoVoteDefinition, string>>(
    new Map<keyof ServiceYesNoVoteDefinition, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceYesNoVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof ServiceYesNoVoteDefinitionStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => void = useCallback(
    (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserYesNoVoteDefinitionsAccessViewPagePayload(
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

  const getPageQueryCustomizer: () => ServiceYesNoVoteDefinitionQueryCustomizer = () => ({
    _mask: actions.getMask
      ? actions.getMask!()
      : '{closeAt,created,description,isFavorite,isNotFavorite,isVoteNotDeletable,isVoteNotEditable,isVoteNotOpen,status,title,userHasNoVoteEntry,userHasVoteEntry,userVoteEntry{created,value}}',
  });

  // Private actions
  const submit = async () => {
    await updateAction();
  };
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_YES_NO_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActionsExtended | undefined =
    customActionsHook?.(data, editMode, storeDiff, refresh, submit);

  // Dialog hooks
  const openServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage =
    useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage();
  const openServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm =
    useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm();
  const openServiceYesNoVoteDefinitionOwnerRelationViewPage = useServiceYesNoVoteDefinitionOwnerRelationViewPage();
  const openServiceYesNoVoteDefinitionUserVoteEntryRelationViewPage =
    useServiceYesNoVoteDefinitionUserVoteEntryRelationViewPage();
  const openServiceYesNoVoteDefinitionVoteEntriesRelationViewPage =
    useServiceYesNoVoteDefinitionVoteEntriesRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceYesNoVoteDefinition): string => {
    return t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit', {
      defaultValue: 'YesNoVoteDefinition View / Edit',
    });
  };
  const backAction = async () => {
    navigateBack();
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(getPageQueryCustomizer()));
  };
  const refreshAction = async (
    queryCustomizer: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceYesNoVoteDefinitionStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await userServiceForYesNoVoteDefinitionsImpl.refresh(
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
      } as Record<keyof ServiceYesNoVoteDefinitionStored, any>;
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
      const { data: res } = await userServiceForYesNoVoteDefinitionsImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceYesNoVoteDefinition, string>());
        setEditMode(false);
        await actions.refreshAction!(getPageQueryCustomizer());
      }
    } catch (error) {
      handleError<ServiceYesNoVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const issueOpenPageAction = async (target: ServiceIssue | ServiceIssueStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceIssueStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceYesNoVoteDefinitionIssueRelationViewPage(
          ((target as ServiceIssueStored) || data).__signedIdentifier,
        ),
      );
    }
  };
  const issuePreFetchAction = async (): Promise<JudoRestResponse<ServiceIssueStored>> => {
    return userServiceForYesNoVoteDefinitionsImpl.getIssue(
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
      const { data: result } = await userServiceForYesNoVoteDefinitionsImpl.getRangeForOwner(
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
      await openServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage(
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
      await openServiceYesNoVoteDefinitionOwnerRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const activateForYesNoVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForYesNoVoteDefinitionsImpl.activate(data);
      if (customActions?.postActivateForYesNoVoteDefinitionAction) {
        await customActions.postActivateForYesNoVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceYesNoVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const addToFavoritesForYesNoVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForYesNoVoteDefinitionsImpl.addToFavorites(data);
      if (customActions?.postAddToFavoritesForYesNoVoteDefinitionAction) {
        await customActions.postAddToFavoritesForYesNoVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceYesNoVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const closeVoteForYesNoVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForYesNoVoteDefinitionsImpl.closeVote(data);
      if (customActions?.postCloseVoteForYesNoVoteDefinitionAction) {
        await customActions.postCloseVoteForYesNoVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceYesNoVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const deleteOrArchiveForYesNoVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForYesNoVoteDefinitionsImpl.deleteOrArchive(data);
      if (customActions?.postDeleteOrArchiveForYesNoVoteDefinitionAction) {
        await customActions.postDeleteOrArchiveForYesNoVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceYesNoVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const removeFromFavoritesForYesNoVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForYesNoVoteDefinitionsImpl.removeFromFavorites(data);
      if (customActions?.postRemoveFromFavoritesForYesNoVoteDefinitionAction) {
        await customActions.postRemoveFromFavoritesForYesNoVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceYesNoVoteDefinition>(error, { setValidation }, data);
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
    queryCustomizer: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceYesNoVoteEntryStored[]>> => {
    return userServiceForYesNoVoteDefinitionsImpl.listVoteEntries(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      queryCustomizer,
    );
  };
  const voteEntriesOpenPageAction = async (
    target: ServiceYesNoVoteEntry | ServiceYesNoVoteEntryStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceYesNoVoteEntryStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceYesNoVoteDefinitionVoteEntriesRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const voteAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } =
      await openServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const takeBackVoteForYesNoVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForYesNoVoteDefinitionsImpl.takeBackVote(data);
      if (customActions?.postTakeBackVoteForYesNoVoteDefinitionAction) {
        await customActions.postTakeBackVoteForYesNoVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceYesNoVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const userVoteEntryOpenPageAction = async (
    target: ServiceYesNoVoteEntry | ServiceYesNoVoteEntryStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceYesNoVoteEntryStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceYesNoVoteDefinitionUserVoteEntryRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };

  const actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActions = {
    getPageTitle,
    backAction,
    cancelAction,
    refreshAction,
    updateAction,
    issueOpenPageAction,
    issuePreFetchAction,
    ownerAutocompleteRangeAction,
    ownerOpenSetSelectorAction,
    ownerUnsetAction,
    ownerOpenPageAction,
    activateForYesNoVoteDefinitionAction,
    addToFavoritesForYesNoVoteDefinitionAction,
    closeVoteForYesNoVoteDefinitionAction,
    deleteOrArchiveForYesNoVoteDefinitionAction,
    removeFromFavoritesForYesNoVoteDefinitionAction,
    voteEntriesFilterAction,
    voteEntriesRefreshAction,
    voteEntriesOpenPageAction,
    voteAction,
    takeBackVoteForYesNoVoteDefinitionAction,
    userVoteEntryOpenPageAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditViewModel = {
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
    <ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_zCZh0FoTEe6_67aMO2jOsw)/AccessViewPageDefinition"
          data-page-name="service::User::yesNoVoteDefinitions::AccessViewPage"
        />
        <PageContainerTransition>
          <ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageContainer
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
    </ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditViewModelContext.Provider>
  );
}
