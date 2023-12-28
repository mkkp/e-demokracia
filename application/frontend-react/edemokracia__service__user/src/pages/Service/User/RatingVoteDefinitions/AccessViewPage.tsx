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
import type { ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageActions } from '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageContainer';
import { useServiceRatingVoteDefinitionOwnerRelationViewPage } from '~/dialogs/Service/RatingVoteDefinition/Owner/RelationViewPage';
import { useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/Vote/Input/Form';
import { useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage } from '~/dialogs/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/VoteEntryBase/Virtual/Owner/LinkSetSelectorPage';
import { useServiceRatingVoteDefinitionUserVoteEntryRelationViewPage } from '~/dialogs/Service/RatingVoteDefinition/UserVoteEntry/RelationViewPage';
import { useServiceRatingVoteDefinitionVoteEntriesRelationViewPage } from '~/dialogs/Service/RatingVoteDefinition/VoteEntries/RelationViewPage';
import { useCRUDDialog, useSnacks } from '~/hooks';
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
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceRatingVoteDefinitionServiceImpl } from '~/services/data-axios/ServiceRatingVoteDefinitionServiceImpl';
import { PageContainerTransition } from '~/theme/animations';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
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
  'ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditActionsHook';
export type ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditActionsHook = (
  data: ServiceRatingVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceRatingVoteDefinition, value: any) => void,
) => ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageActionsExtended;

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
  const serviceRatingVoteDefinitionServiceImpl = useMemo(
    () => new ServiceRatingVoteDefinitionServiceImpl(judoAxiosProvider),
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

  const pageQueryCustomizer: ServiceRatingVoteDefinitionQueryCustomizer = {
    _mask:
      '{closeAt,created,description,isFavorite,isNotFavorite,isVoteNotDeletable,isVoteNotEditable,isVoteNotOpen,maxRateValue,minRateValue,status,title,userHasNoVoteEntry,userHasVoteEntry,userVoteEntry{created,value}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_RATING_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageActionsExtended | undefined =
    customActionsHook?.(data, editMode, storeDiff);

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

  // Calculated section
  const title: string = t('service.RatingVoteDefinition.RatingVoteDefinition_View_Edit', {
    defaultValue: 'RatingVoteDefinition View / Edit',
  });

  // Private actions
  const submit = async () => {
    await updateAction();
  };

  // Action section
  const issueOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceRatingVoteDefinitionIssueRelationViewPage((target || data).__signedIdentifier));
  };
  const issuePreFetchAction = async (): Promise<ServiceIssueStored> => {
    return serviceRatingVoteDefinitionServiceImpl.getIssue(
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
      return serviceRatingVoteDefinitionServiceImpl.getRangeForOwner(data, queryCustomizer);
    } catch (error) {
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
  const ownerUnsetAction = async (target: ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };
  const ownerOpenPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceRatingVoteDefinitionOwnerRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activateForRatingVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceRatingVoteDefinitionServiceImpl.activate(data);
      if (customActions?.postActivateForRatingVoteDefinitionAction) {
        await customActions.postActivateForRatingVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      await serviceRatingVoteDefinitionServiceImpl.addToFavorites(data);
      if (customActions?.postAddToFavoritesForRatingVoteDefinitionAction) {
        await customActions.postAddToFavoritesForRatingVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      await serviceRatingVoteDefinitionServiceImpl.closeVote(data);
      if (customActions?.postCloseVoteForRatingVoteDefinitionAction) {
        await customActions.postCloseVoteForRatingVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      await serviceRatingVoteDefinitionServiceImpl.deleteOrArchive(data);
      if (customActions?.postDeleteOrArchiveForRatingVoteDefinitionAction) {
        await customActions.postDeleteOrArchiveForRatingVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceRatingVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const removeFromFavoritesForRatingVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceRatingVoteDefinitionServiceImpl.removeFromFavorites(data);
      if (customActions?.postRemoveFromFavoritesForRatingVoteDefinitionAction) {
        await customActions.postRemoveFromFavoritesForRatingVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  ): Promise<ServiceRatingVoteEntryStored[]> => {
    return serviceRatingVoteDefinitionServiceImpl.listVoteEntries(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      queryCustomizer,
    );
  };
  const voteEntriesOpenPageAction = async (target?: ServiceRatingVoteEntryStored) => {
    await openServiceRatingVoteDefinitionVoteEntriesRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const voteAction = async () => {
    const { result, data: returnedData } =
      await openServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const takeBackVoteForRatingVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceRatingVoteDefinitionServiceImpl.takeBackVote(data);
      if (customActions?.postTakeBackVoteForRatingVoteDefinitionAction) {
        await customActions.postTakeBackVoteForRatingVoteDefinitionAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceRatingVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const userVoteEntryOpenPageAction = async (target?: ServiceRatingVoteEntryStored) => {
    await openServiceRatingVoteDefinitionUserVoteEntryRelationViewPage(target!);
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
    queryCustomizer: ServiceRatingVoteDefinitionQueryCustomizer,
  ): Promise<ServiceRatingVoteDefinitionStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceRatingVoteDefinitionServiceImpl.refresh(
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
      } as Record<keyof ServiceRatingVoteDefinitionStored, any>;
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
      const res = await serviceRatingVoteDefinitionServiceImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceRatingVoteDefinition, string>());
        await actions.refreshAction!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceRatingVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageActions = {
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
    removeFromFavoritesForRatingVoteDefinitionAction,
    voteEntriesFilterAction,
    voteEntriesRefreshAction,
    voteEntriesOpenPageAction,
    voteAction,
    takeBackVoteForRatingVoteDefinitionAction,
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
      id="User/(esm/_s3Fx0FuiEe6rLvwZQOpyUA)/AccessViewPageDefinition"
      data-page-name="service::User::ratingVoteDefinitions::AccessViewPage"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageContainer
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
