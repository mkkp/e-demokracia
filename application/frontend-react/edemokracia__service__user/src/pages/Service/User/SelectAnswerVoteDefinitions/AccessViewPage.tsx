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
  ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageActions,
  ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageProps,
} from '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageContainer';
import { useServiceSelectAnswerVoteDefinitionOwnerRelationViewPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/Owner/RelationViewPage';
import { useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector } from '~/dialogs/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/UserVoteEntryGroup/TakeVote/Vote/Relation/Table/CallSelector';
import { useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/VoteEntryBase/Virtual/Owner/LinkSetSelectorPage';
import { useServiceSelectAnswerVoteDefinitionUserVoteEntryRelationViewPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/UserVoteEntry/RelationViewPage';
import { useServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/VoteEntries/RelationViewPage';
import { useServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/VoteSelections/RelationFormPage';
import { useServiceSelectAnswerVoteDefinitionVoteSelectionsRelationViewPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/VoteSelections/RelationViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceSelectAnswerVoteDefinitionIssueRelationViewPage } from '~/routes';
import type {
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteEntryStored,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  VoteStatus,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForSelectAnswerVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForSelectAnswerVoteDefinitionsImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageActionsExtended =
  ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageActions & {
    postActivateForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
    postAddToFavoritesForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
    postCloseVoteForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
    postDeleteOrArchiveForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
    postRemoveFromFavoritesForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
    postTakeBackVoteForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
    postRefreshAction?: (
      data: ServiceSelectAnswerVoteDefinitionStored,
      storeDiff: (attributeName: keyof ServiceSelectAnswerVoteDefinition, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceSelectAnswerVoteDefinition, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_USER_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionsHook = (
  data: ServiceSelectAnswerVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteDefinition, value: any) => void,

  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageActionsExtended;

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditViewModel
  extends ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditViewModelContext =
  createContext<ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditViewModel>({} as any);
export const useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditViewModel = () => {
  const context = useContext(ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditViewModel must be used within a(n) ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditViewModelProvider',
    );
  }
  return context;
};

export const convertServiceUserSelectAnswerVoteDefinitionsAccessViewPagePayload = (
  attributeName: keyof ServiceSelectAnswerVoteDefinition,
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

const ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_jf3kwFuXEe6T042_LMmSdQ)/AccessViewPageDefinition
// Name: service::User::selectAnswerVoteDefinitions::AccessViewPage
export default function ServiceUserSelectAnswerVoteDefinitionsAccessViewPage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Services
  const userServiceForSelectAnswerVoteDefinitionsImpl = useMemo(
    () => new UserServiceForSelectAnswerVoteDefinitionsImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceSelectAnswerVoteDefinitionStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceSelectAnswerVoteDefinitionStored);
  const [validation, setValidation] = useState<Map<keyof ServiceSelectAnswerVoteDefinition, string>>(
    new Map<keyof ServiceSelectAnswerVoteDefinition, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceSelectAnswerVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof ServiceSelectAnswerVoteDefinitionStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceSelectAnswerVoteDefinition, value: any) => void = useCallback(
    (attributeName: keyof ServiceSelectAnswerVoteDefinition, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserSelectAnswerVoteDefinitionsAccessViewPagePayload(
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

  const getPageQueryCustomizer: () => ServiceSelectAnswerVoteDefinitionQueryCustomizer = () => ({
    _mask: actions.getMask
      ? actions.getMask!()
      : '{closeAt,created,description,isFavorite,isNotFavorite,isVoteNotDeletable,isVoteNotEditable,isVoteNotOpen,status,title,userHasNoVoteEntry,userHasVoteEntry,voteSelections{description,title},userVoteEntry{created,valueRepresentation}}',
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
    useTrackService<ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageActionsExtended
    | undefined = customActionsHook?.(data, editMode, storeDiff, refresh, submit);

  // Dialog hooks
  const openServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage =
    useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage();
  const openServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector =
    useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector();
  const openServiceSelectAnswerVoteDefinitionOwnerRelationViewPage =
    useServiceSelectAnswerVoteDefinitionOwnerRelationViewPage();
  const openServiceSelectAnswerVoteDefinitionUserVoteEntryRelationViewPage =
    useServiceSelectAnswerVoteDefinitionUserVoteEntryRelationViewPage();
  const openServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage =
    useServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage();
  const openServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage =
    useServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage();
  const openServiceSelectAnswerVoteDefinitionVoteSelectionsRelationViewPage =
    useServiceSelectAnswerVoteDefinitionVoteSelectionsRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceSelectAnswerVoteDefinition): string => {
    return t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit', {
      defaultValue: 'SelectAnswerVoteDefinition View / Edit',
    });
  };
  const issueOpenPageAction = async (target: ServiceIssue | ServiceIssueStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceIssueStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceSelectAnswerVoteDefinitionIssueRelationViewPage(
          ((target as ServiceIssueStored) || data).__signedIdentifier,
        ),
      );
    }
  };
  const issuePreFetchAction = async (): Promise<JudoRestResponse<ServiceIssueStored>> => {
    return userServiceForSelectAnswerVoteDefinitionsImpl.getIssue(
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
      const { data: result } = await userServiceForSelectAnswerVoteDefinitionsImpl.getRangeForOwner(
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
      await openServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage(
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
      await openServiceSelectAnswerVoteDefinitionOwnerRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const voteSelectionsBulkDeleteAction = async (
    selectedRows: ServiceSelectAnswerVoteSelectionStored[],
  ): Promise<DialogResult<Array<ServiceSelectAnswerVoteSelectionStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceSelectAnswerVoteSelectionStored>({
        dialogTitle: t(
          'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.VoteEntryBase.virtual.voteSelections.BulkDelete',
          { defaultValue: 'Delete' },
        ),
        itemTitleFn: (item) => item.description!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.voteSelectionsDeleteAction) {
              await actions.voteSelectionsDeleteAction!(item, true);
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
              data: [],
            });
          }
        },
      });
    });
  };
  const voteSelectionsOpenFormAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } =
      await openServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const voteSelectionsFilterAction = async (
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
  const voteSelectionsDeleteAction = async (target: ServiceSelectAnswerVoteSelectionStored, silentMode?: boolean) => {
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
        await userServiceForSelectAnswerVoteDefinitionsImpl.deleteVoteSelections(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(getPageQueryCustomizer());
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceSelectAnswerVoteSelection>(error, undefined, target);
      }
    }
  };
  const voteSelectionsOpenPageAction = async (
    target: ServiceSelectAnswerVoteSelection | ServiceSelectAnswerVoteSelectionStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceSelectAnswerVoteSelectionStored).__signedIdentifier)) {
      const { result, data: returnedData } = await openServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        target,
        true,
      );
      // we might need to differentiate result handling between operation inputs and crud relation creates
      if (result === 'submit-draft' && returnedData) {
        const existingIndex = (payloadDiff.current.voteSelections || []).findIndex(
          (r: { __identifier?: string }) => r.__identifier === returnedData.__identifier,
        );
        if (existingIndex > -1) {
          payloadDiff.current.voteSelections[existingIndex] = {
            ...returnedData,
          };
        }
        storeDiff('voteSelections', [...(payloadDiff.current.voteSelections || [])]);
        return;
      }
    } else if (!isDraft) {
      await openServiceSelectAnswerVoteDefinitionVoteSelectionsRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const activateForSelectAnswerVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForSelectAnswerVoteDefinitionsImpl.activate(data);
      if (customActions?.postActivateForSelectAnswerVoteDefinitionAction) {
        await customActions.postActivateForSelectAnswerVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceSelectAnswerVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const addToFavoritesForSelectAnswerVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForSelectAnswerVoteDefinitionsImpl.addToFavorites(data);
      if (customActions?.postAddToFavoritesForSelectAnswerVoteDefinitionAction) {
        await customActions.postAddToFavoritesForSelectAnswerVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceSelectAnswerVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const closeVoteForSelectAnswerVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForSelectAnswerVoteDefinitionsImpl.closeVote(data);
      if (customActions?.postCloseVoteForSelectAnswerVoteDefinitionAction) {
        await customActions.postCloseVoteForSelectAnswerVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceSelectAnswerVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const deleteOrArchiveForSelectAnswerVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForSelectAnswerVoteDefinitionsImpl.deleteOrArchive(data);
      if (customActions?.postDeleteOrArchiveForSelectAnswerVoteDefinitionAction) {
        await customActions.postDeleteOrArchiveForSelectAnswerVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceSelectAnswerVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const removeFromFavoritesForSelectAnswerVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForSelectAnswerVoteDefinitionsImpl.removeFromFavorites(data);
      if (customActions?.postRemoveFromFavoritesForSelectAnswerVoteDefinitionAction) {
        await customActions.postRemoveFromFavoritesForSelectAnswerVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceSelectAnswerVoteDefinition>(error, { setValidation }, data);
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
    queryCustomizer: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteEntryStored[]>> => {
    return userServiceForSelectAnswerVoteDefinitionsImpl.listVoteEntries(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      queryCustomizer,
    );
  };
  const voteEntriesOpenPageAction = async (
    target: ServiceSelectAnswerVoteEntry | ServiceSelectAnswerVoteEntryStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceSelectAnswerVoteEntryStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const voteAction = async () => {
    const { result, data: returnedData } =
      await openServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector(
        data,
      );
    if (result === 'submit') {
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const takeBackVoteForSelectAnswerVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForSelectAnswerVoteDefinitionsImpl.takeBackVote(data);
      if (customActions?.postTakeBackVoteForSelectAnswerVoteDefinitionAction) {
        await customActions.postTakeBackVoteForSelectAnswerVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceSelectAnswerVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const userVoteEntryOpenPageAction = async (
    target: ServiceSelectAnswerVoteEntry | ServiceSelectAnswerVoteEntryStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceSelectAnswerVoteEntryStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceSelectAnswerVoteDefinitionUserVoteEntryRelationViewPage(target!);
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
    queryCustomizer: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteDefinitionStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await userServiceForSelectAnswerVoteDefinitionsImpl.refresh(
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
      } as Record<keyof ServiceSelectAnswerVoteDefinitionStored, any>;
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
      const { data: res } = await userServiceForSelectAnswerVoteDefinitionsImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceSelectAnswerVoteDefinition, string>());
        setEditMode(false);
        await actions.refreshAction!(getPageQueryCustomizer());
      }
    } catch (error) {
      handleError<ServiceSelectAnswerVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageActions = {
    getPageTitle,
    issueOpenPageAction,
    issuePreFetchAction,
    ownerAutocompleteRangeAction,
    ownerOpenSetSelectorAction,
    ownerUnsetAction,
    ownerOpenPageAction,
    voteSelectionsBulkDeleteAction,
    voteSelectionsOpenFormAction,
    voteSelectionsFilterAction,
    voteSelectionsDeleteAction,
    voteSelectionsOpenPageAction,
    activateForSelectAnswerVoteDefinitionAction,
    addToFavoritesForSelectAnswerVoteDefinitionAction,
    closeVoteForSelectAnswerVoteDefinitionAction,
    deleteOrArchiveForSelectAnswerVoteDefinitionAction,
    removeFromFavoritesForSelectAnswerVoteDefinitionAction,
    voteEntriesFilterAction,
    voteEntriesRefreshAction,
    voteEntriesOpenPageAction,
    voteAction,
    takeBackVoteForSelectAnswerVoteDefinitionAction,
    userVoteEntryOpenPageAction,
    backAction,
    cancelAction,
    refreshAction,
    updateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditViewModel = {
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
    <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_jf3kwFuXEe6T042_LMmSdQ)/AccessViewPageDefinition"
          data-page-name="service::User::selectAnswerVoteDefinitions::AccessViewPage"
        />
        <PageContainerTransition>
          <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageContainer
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
    </ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditViewModelContext.Provider>
  );
}
