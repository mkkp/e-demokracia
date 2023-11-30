//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, useMemo, lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';
import { PageContainerTransition } from '~/theme/animations';
import { routeToServiceSelectAnswerVoteDefinitionIssueRelationViewPage } from '~/routes';
import { useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/VoteEntryBase/Virtual/Owner/LinkSetSelectorPage';
import { useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector } from '~/dialogs/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/UserVoteEntryGroup/TakeVote/Vote/Relation/Table/CallSelector';
import { useServiceSelectAnswerVoteDefinitionOwnerRelationViewPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/Owner/RelationViewPage';
import { useServiceSelectAnswerVoteDefinitionUserVoteEntryRelationViewPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/UserVoteEntry/RelationViewPage';
import { useServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/VoteEntries/RelationViewPage';
import { useServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/VoteSelections/RelationFormPage';
import { useServiceSelectAnswerVoteDefinitionVoteSelectionsRelationViewPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/VoteSelections/RelationViewPage';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageActions } from '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageContainer';
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
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceSelectAnswerVoteDefinitionServiceImpl } from '~/services/data-axios/ServiceSelectAnswerVoteDefinitionServiceImpl';

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

export const SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionsHook';
export type ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionsHook = (
  data: ServiceSelectAnswerVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteDefinition, value: any) => void,
) => ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageActionsExtended;

export const convertServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPagePayload = (
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
// Name: service::User::userOwnedSelectAnswerVoteDefinitions::AccessViewPage
export default function ServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Services
  const serviceSelectAnswerVoteDefinitionServiceImpl = useMemo(
    () => new ServiceSelectAnswerVoteDefinitionServiceImpl(judoAxiosProvider),
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
      payloadDiff.current![attributeName] = convertServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPagePayload(
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

  const pageQueryCustomizer: ServiceSelectAnswerVoteDefinitionQueryCustomizer = {
    _mask:
      '{closeAt,created,description,isFavorite,isNotFavorite,isVoteNotDeletable,isVoteNotEditable,isVoteNotOpen,status,title,userHasNoVoteEntry,userHasVoteEntry,voteSelections{description,title},userVoteEntry{valueRepresentation,created}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageActionsExtended
    | undefined = customActionsHook?.(data, editMode, storeDiff);

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

  // Calculated section
  const title: string = t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit', {
    defaultValue: 'SelectAnswerVoteDefinition View / Edit',
  });

  // Private actions
  const submit = async () => {
    await updateAction();
  };

  // Action section
  const issueOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceSelectAnswerVoteDefinitionIssueRelationViewPage((target || data).__signedIdentifier));
  };
  const issuePreFetchAction = async (): Promise<ServiceIssueStored> => {
    return serviceSelectAnswerVoteDefinitionServiceImpl.getIssue(
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
      return serviceSelectAnswerVoteDefinitionServiceImpl.getRangeForOwner(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const ownerOpenSetSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage(
        data,
        data.owner ? [data.owner] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('owner', returnedData[0]);
      }
    }
  };
  const ownerUnsetAction = async (target: ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };
  const ownerOpenPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceSelectAnswerVoteDefinitionOwnerRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const voteSelectionsOpenFormAction = async () => {
    const { result, data: returnedData } = await openServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage(
      data,
    );
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
        await serviceSelectAnswerVoteDefinitionServiceImpl.deleteVoteSelections(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceSelectAnswerVoteSelection>(error, undefined, target);
      }
    }
  };
  const voteSelectionsOpenPageAction = async (target?: ServiceSelectAnswerVoteSelectionStored) => {
    await openServiceSelectAnswerVoteDefinitionVoteSelectionsRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activateForSelectAnswerVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceSelectAnswerVoteDefinitionServiceImpl.activate(data);
      if (customActions?.postActivateForSelectAnswerVoteDefinitionAction) {
        await customActions.postActivateForSelectAnswerVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      await serviceSelectAnswerVoteDefinitionServiceImpl.addToFavorites(data);
      if (customActions?.postAddToFavoritesForSelectAnswerVoteDefinitionAction) {
        await customActions.postAddToFavoritesForSelectAnswerVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      await serviceSelectAnswerVoteDefinitionServiceImpl.closeVote(data);
      if (customActions?.postCloseVoteForSelectAnswerVoteDefinitionAction) {
        await customActions.postCloseVoteForSelectAnswerVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      await serviceSelectAnswerVoteDefinitionServiceImpl.deleteOrArchive(data);
      if (customActions?.postDeleteOrArchiveForSelectAnswerVoteDefinitionAction) {
        await customActions.postDeleteOrArchiveForSelectAnswerVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      await serviceSelectAnswerVoteDefinitionServiceImpl.removeFromFavorites(data);
      if (customActions?.postRemoveFromFavoritesForSelectAnswerVoteDefinitionAction) {
        await customActions.postRemoveFromFavoritesForSelectAnswerVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  ): Promise<ServiceSelectAnswerVoteEntryStored[]> => {
    return serviceSelectAnswerVoteDefinitionServiceImpl.listVoteEntries(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      queryCustomizer,
    );
  };
  const voteEntriesOpenPageAction = async (target?: ServiceSelectAnswerVoteEntryStored) => {
    await openServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const voteAction = async () => {
    const { result, data: returnedData } =
      await openServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector(
        data,
      );
    if (result === 'submit') {
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
      }
    }
  };
  const takeBackVoteForSelectAnswerVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceSelectAnswerVoteDefinitionServiceImpl.takeBackVote(data);
      if (customActions?.postTakeBackVoteForSelectAnswerVoteDefinitionAction) {
        await customActions.postTakeBackVoteForSelectAnswerVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceSelectAnswerVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const userVoteEntryOpenPageAction = async (target?: ServiceSelectAnswerVoteEntryStored) => {
    await openServiceSelectAnswerVoteDefinitionUserVoteEntryRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const backAction = async () => {
    navigateBack();
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(pageQueryCustomizer));
  };
  const refreshAction = async (
    queryCustomizer: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteDefinitionStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceSelectAnswerVoteDefinitionServiceImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        pageQueryCustomizer,
      );
      setData(result);
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
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const updateAction = async () => {
    setIsLoading(true);
    try {
      const res = await serviceSelectAnswerVoteDefinitionServiceImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceSelectAnswerVoteDefinition, string>());
        await actions.refreshAction!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceSelectAnswerVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageActions = {
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

  // Effect section
  useEffect(() => {
    (async () => {
      await actions.refreshAction!(pageQueryCustomizer);
    })();
  }, []);

  return (
    <div
      id="User/(esm/_jf3kwFuXEe6T042_LMmSdQ)/AccessViewPageDefinition"
      data-page-name="service::User::userOwnedSelectAnswerVoteDefinitions::AccessViewPage"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageContainer
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
