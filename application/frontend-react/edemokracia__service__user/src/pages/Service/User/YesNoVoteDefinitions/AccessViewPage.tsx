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
import { useParams } from 'react-router-dom';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActions } from '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageContainer';
import { useServiceYesNoVoteDefinitionOwnerRelationViewPage } from '~/dialogs/Service/YesNoVoteDefinition/Owner/RelationViewPage';
import { useServiceYesNoVoteDefinitionUserVoteEntryRelationViewPage } from '~/dialogs/Service/YesNoVoteDefinition/UserVoteEntry/RelationViewPage';
import { useServiceYesNoVoteDefinitionVoteEntriesRelationViewPage } from '~/dialogs/Service/YesNoVoteDefinition/VoteEntries/RelationViewPage';
import { useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/Vote/Input/Form';
import { useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage } from '~/dialogs/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/VoteEntryBase/Virtual/Owner/LinkSetSelectorPage';
import { useCRUDDialog, useSnacks } from '~/hooks';
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
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceYesNoVoteDefinitionServiceImpl } from '~/services/data-axios/ServiceYesNoVoteDefinitionServiceImpl';
import { PageContainerTransition } from '~/theme/animations';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
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
  'ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionsHook';
export type ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionsHook = (
  data: ServiceYesNoVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => void,
) => ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActionsExtended;

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
  const serviceYesNoVoteDefinitionServiceImpl = useMemo(
    () => new ServiceYesNoVoteDefinitionServiceImpl(judoAxiosProvider),
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

  const pageQueryCustomizer: ServiceYesNoVoteDefinitionQueryCustomizer = {
    _mask:
      '{closeAt,created,description,isFavorite,isNotFavorite,isVoteNotDeletable,isVoteNotEditable,isVoteNotOpen,status,title,userHasNoVoteEntry,userHasVoteEntry,userVoteEntry{value,created}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_YES_NO_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActionsExtended | undefined =
    customActionsHook?.(data, editMode, storeDiff);

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

  // Calculated section
  const title: string = t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit', {
    defaultValue: 'YesNoVoteDefinition View / Edit',
  });

  // Private actions
  const submit = async () => {
    await updateAction();
  };

  // Action section
  const backAction = async () => {
    navigateBack();
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(pageQueryCustomizer));
  };
  const refreshAction = async (
    queryCustomizer: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoVoteDefinitionStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceYesNoVoteDefinitionServiceImpl.refresh(
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
      } as Record<keyof ServiceYesNoVoteDefinitionStored, any>;
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
      const res = await serviceYesNoVoteDefinitionServiceImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceYesNoVoteDefinition, string>());
        await actions.refreshAction!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceYesNoVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const issueOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceYesNoVoteDefinitionIssueRelationViewPage((target || data).__signedIdentifier));
  };
  const issuePreFetchAction = async (): Promise<ServiceIssueStored> => {
    return serviceYesNoVoteDefinitionServiceImpl.getIssue(
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
      return serviceYesNoVoteDefinitionServiceImpl.getRangeForOwner(data, queryCustomizer);
    } catch (error) {
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
  const ownerUnsetAction = async (target: ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };
  const ownerOpenPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceYesNoVoteDefinitionOwnerRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activateForYesNoVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceYesNoVoteDefinitionServiceImpl.activate(data);
      if (customActions?.postActivateForYesNoVoteDefinitionAction) {
        await customActions.postActivateForYesNoVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      await serviceYesNoVoteDefinitionServiceImpl.addToFavorites(data);
      if (customActions?.postAddToFavoritesForYesNoVoteDefinitionAction) {
        await customActions.postAddToFavoritesForYesNoVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      await serviceYesNoVoteDefinitionServiceImpl.closeVote(data);
      if (customActions?.postCloseVoteForYesNoVoteDefinitionAction) {
        await customActions.postCloseVoteForYesNoVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      await serviceYesNoVoteDefinitionServiceImpl.deleteOrArchive(data);
      if (customActions?.postDeleteOrArchiveForYesNoVoteDefinitionAction) {
        await customActions.postDeleteOrArchiveForYesNoVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      await serviceYesNoVoteDefinitionServiceImpl.removeFromFavorites(data);
      if (customActions?.postRemoveFromFavoritesForYesNoVoteDefinitionAction) {
        await customActions.postRemoveFromFavoritesForYesNoVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  ): Promise<ServiceYesNoVoteEntryStored[]> => {
    return serviceYesNoVoteDefinitionServiceImpl.listVoteEntries(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      queryCustomizer,
    );
  };
  const voteEntriesOpenPageAction = async (target?: ServiceYesNoVoteEntryStored) => {
    await openServiceYesNoVoteDefinitionVoteEntriesRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const voteAction = async () => {
    const { result, data: returnedData } =
      await openServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const takeBackVoteForYesNoVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceYesNoVoteDefinitionServiceImpl.takeBackVote(data);
      if (customActions?.postTakeBackVoteForYesNoVoteDefinitionAction) {
        await customActions.postTakeBackVoteForYesNoVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceYesNoVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const userVoteEntryOpenPageAction = async (target?: ServiceYesNoVoteEntryStored) => {
    await openServiceYesNoVoteDefinitionUserVoteEntryRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };

  const actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActions = {
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

  // Effect section
  useEffect(() => {
    (async () => {
      await actions.refreshAction!(pageQueryCustomizer);
    })();
  }, []);

  return (
    <div
      id="User/(esm/_zCZh0FoTEe6_67aMO2jOsw)/AccessViewPageDefinition"
      data-page-name="service::User::yesNoVoteDefinitions::AccessViewPage"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageContainer
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
