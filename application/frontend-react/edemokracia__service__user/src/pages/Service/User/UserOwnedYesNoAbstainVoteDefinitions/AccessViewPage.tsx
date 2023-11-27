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
import { useParams } from 'react-router-dom';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';
import { PageContainerTransition } from '~/theme/animations';
import { routeToServiceYesNoAbstainVoteDefinitionIssueRelationViewPage } from '~/routes';
import { useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage } from '~/dialogs/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_View_Edit/VoteEntryBase/Virtual/Owner/LinkSetSelectorPage';
import { useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_View_Edit/Vote/Input/Form';
import { useServiceYesNoAbstainVoteDefinitionOwnerRelationViewPage } from '~/dialogs/Service/YesNoAbstainVoteDefinition/Owner/RelationViewPage';
import { useServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage } from '~/dialogs/Service/YesNoAbstainVoteDefinition/UserVoteEntry/RelationViewPage';
import { useServiceYesNoAbstainVoteDefinitionVoteEntriesRelationViewPage } from '~/dialogs/Service/YesNoAbstainVoteDefinition/VoteEntries/RelationViewPage';
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageActions } from '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_View_Edit/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageContainer';
import type {
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntryStored,
  VoteStatus,
} from '~/services/data-api';
import { serviceYesNoAbstainVoteDefinitionServiceImpl } from '~/services/data-axios';
export type ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageActionsExtended =
  ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageActions & {
    postActivateForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
    postAddToFavoritesForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
    postCloseVoteForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
    postDeleteOrArchiveForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
    postRemoveFromFavoritesForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
    postTakeBackVoteForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  };

export const SERVICE_USER_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditActionsHook';
export type ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditActionsHook = (
  data: ServiceYesNoAbstainVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteDefinition, value: any) => void,
) => ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageActionsExtended;

export const convertServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPagePayload = (
  attributeName: keyof ServiceYesNoAbstainVoteDefinition,
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

const ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_View_Edit/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_9lF1oFuhEe6rLvwZQOpyUA)/AccessViewPageDefinition
// Name: service::User::userOwnedYesNoAbstainVoteDefinitions::AccessViewPage
export default function ServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPage() {
  // Router params section
  const { signedIdentifier } = useParams();

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
  const [data, setData] = useState<ServiceYesNoAbstainVoteDefinitionStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceYesNoAbstainVoteDefinitionStored);
  const [validation, setValidation] = useState<Map<keyof ServiceYesNoAbstainVoteDefinition, string>>(
    new Map<keyof ServiceYesNoAbstainVoteDefinition, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceYesNoAbstainVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof ServiceYesNoAbstainVoteDefinitionStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteDefinition, value: any) => void = useCallback(
    (attributeName: keyof ServiceYesNoAbstainVoteDefinition, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPagePayload(
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

  const pageQueryCustomizer: ServiceYesNoAbstainVoteDefinitionQueryCustomizer = {
    _mask:
      '{userHasVoteEntry,created,description,userHasNoVoteEntry,title,closeAt,status,userVoteEntry{value,created}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageActionsExtended
    | undefined = customActionsHook?.(data, editMode, storeDiff);

  // Dialog hooks
  const openServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage =
    useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage();
  const openServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm =
    useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm();
  const openServiceYesNoAbstainVoteDefinitionOwnerRelationViewPage =
    useServiceYesNoAbstainVoteDefinitionOwnerRelationViewPage();
  const openServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage =
    useServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage();
  const openServiceYesNoAbstainVoteDefinitionVoteEntriesRelationViewPage =
    useServiceYesNoAbstainVoteDefinitionVoteEntriesRelationViewPage();

  // Calculated section
  const title: string = t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit', {
    defaultValue: 'YesNoAbstainVoteDefinition View / Edit',
  });

  // Action section
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (
    queryCustomizer: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoAbstainVoteDefinitionStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceYesNoAbstainVoteDefinitionServiceImpl.refresh(
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
      } as Record<keyof ServiceYesNoAbstainVoteDefinitionStored, any>;
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(pageQueryCustomizer));
  };
  const updateAction = async () => {
    setIsLoading(true);
    try {
      const res = await serviceYesNoAbstainVoteDefinitionServiceImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceYesNoAbstainVoteDefinition, string>());
        await actions.refreshAction!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceYesNoAbstainVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const removeFromFavoritesForYesNoAbstainVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceYesNoAbstainVoteDefinitionServiceImpl.removeFromFavorites(data);
      if (customActions?.postRemoveFromFavoritesForYesNoAbstainVoteDefinitionAction) {
        await customActions.postRemoveFromFavoritesForYesNoAbstainVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceYesNoAbstainVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const takeBackVoteForYesNoAbstainVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceYesNoAbstainVoteDefinitionServiceImpl.takeBackVote(data);
      if (customActions?.postTakeBackVoteForYesNoAbstainVoteDefinitionAction) {
        await customActions.postTakeBackVoteForYesNoAbstainVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceYesNoAbstainVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const deleteOrArchiveForYesNoAbstainVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceYesNoAbstainVoteDefinitionServiceImpl.deleteOrArchive(data);
      if (customActions?.postDeleteOrArchiveForYesNoAbstainVoteDefinitionAction) {
        await customActions.postDeleteOrArchiveForYesNoAbstainVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceYesNoAbstainVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const closeVoteForYesNoAbstainVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceYesNoAbstainVoteDefinitionServiceImpl.closeVote(data);
      if (customActions?.postCloseVoteForYesNoAbstainVoteDefinitionAction) {
        await customActions.postCloseVoteForYesNoAbstainVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceYesNoAbstainVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const voteAction = async () => {
    const { result, data: returnedData } =
      await openServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const addToFavoritesForYesNoAbstainVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceYesNoAbstainVoteDefinitionServiceImpl.addToFavorites(data);
      if (customActions?.postAddToFavoritesForYesNoAbstainVoteDefinitionAction) {
        await customActions.postAddToFavoritesForYesNoAbstainVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceYesNoAbstainVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activateForYesNoAbstainVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceYesNoAbstainVoteDefinitionServiceImpl.activate(data);
      if (customActions?.postActivateForYesNoAbstainVoteDefinitionAction) {
        await customActions.postActivateForYesNoAbstainVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceYesNoAbstainVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const ownerOpenPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceYesNoAbstainVoteDefinitionOwnerRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const ownerOpenSetSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage(
        data,
        data.owner ? [data.owner] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('owner', returnedData[0]);
      }
    }
  };
  const ownerAutocompleteRangeAction = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    // action service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_View_Edit::VoteEntryBase::virtual::owner::TabularReferenceFieldLinkAutocompleteRangeAction
    // definition service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_View_Edit::VoteEntryBase::virtual::owner::Autocomplete
    // page service::User::userOwnedYesNoAbstainVoteDefinitions::AccessViewPage
    try {
      return serviceYesNoAbstainVoteDefinitionServiceImpl.getRangeForOwner(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const ownerUnsetAction = async (target: ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };
  const voteEntriesOpenPageAction = async (target?: ServiceYesNoAbstainVoteEntryStored) => {
    await openServiceYesNoAbstainVoteDefinitionVoteEntriesRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
    queryCustomizer: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoAbstainVoteEntryStored[]> => {
    return serviceYesNoAbstainVoteDefinitionServiceImpl.listVoteEntries(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      queryCustomizer,
    );
  };
  const userVoteEntryOpenPageAction = async (target?: ServiceYesNoAbstainVoteEntryStored) => {
    await openServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const issueOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceYesNoAbstainVoteDefinitionIssueRelationViewPage((target || data).__signedIdentifier));
  };
  const issuePreFetchAction = async (): Promise<ServiceIssueStored> => {
    return serviceYesNoAbstainVoteDefinitionServiceImpl.getIssue(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      {
        _mask: '{}',
      },
    );
  };

  const actions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageActions = {
    backAction,
    refreshAction,
    cancelAction,
    updateAction,
    removeFromFavoritesForYesNoAbstainVoteDefinitionAction,
    takeBackVoteForYesNoAbstainVoteDefinitionAction,
    deleteOrArchiveForYesNoAbstainVoteDefinitionAction,
    closeVoteForYesNoAbstainVoteDefinitionAction,
    voteAction,
    addToFavoritesForYesNoAbstainVoteDefinitionAction,
    activateForYesNoAbstainVoteDefinitionAction,
    ownerOpenPageAction,
    ownerOpenSetSelectorAction,
    ownerAutocompleteRangeAction,
    ownerUnsetAction,
    voteEntriesOpenPageAction,
    voteEntriesFilterAction,
    voteEntriesRefreshAction,
    userVoteEntryOpenPageAction,
    issueOpenPageAction,
    issuePreFetchAction,
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
      id="User/(esm/_9lF1oFuhEe6rLvwZQOpyUA)/AccessViewPageDefinition"
      data-page-name="service::User::userOwnedYesNoAbstainVoteDefinitions::AccessViewPage"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageContainer
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
