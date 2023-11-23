//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { toastConfig } from '~/config';
import { useCRUDDialog } from '~/hooks';
import {
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  uiTimeToServiceTime,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult } from '~/utilities';
import { PageContainerTransition } from '~/theme/animations';
import { routeToServiceYesNoVoteDefinitionIssueRelationViewPage } from '~/routes';
import { useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/Vote/Input/Form';
import { useServiceYesNoVoteDefinitionUserVoteEntryRelationViewPage } from '~/dialogs/Service/YesNoVoteDefinition/UserVoteEntry/Relation/View/Page';
import { useServiceYesNoVoteDefinitionVoteEntriesRelationViewPage } from '~/dialogs/Service/YesNoVoteDefinition/VoteEntries/Relation/View/Page';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActions } from '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageContainer';
import type {
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
  VoteStatus,
} from '~/services/data-api';
import { serviceYesNoVoteDefinitionServiceImpl } from '~/services/data-axios';
export type ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActionsExtended =
  ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActions & {
    postTakeBackVoteForYesNoVoteDefinitionAction?: () => Promise<void>;
  };

export const SERVICE_USER_USER_OWNED_YES_NO_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionsHook';
export type ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionsHook = (
  data: ServiceYesNoVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => void,
) => ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActionsExtended;

export const convertServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPagePayload = (
  attributeName: keyof ServiceYesNoVoteDefinition,
  value: any,
): any => {
  const dateTypes: string[] = [];
  const dateTimeTypes: string[] = [
    'closeAt',

    'created',
  ];
  const timeTypes: string[] = [];
  if (dateTypes.includes(attributeName as string)) {
    return uiDateToServiceDate(value);
  } else if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  } else if (timeTypes.includes(attributeName as string)) {
    return uiTimeToServiceTime(value);
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
// Name: service::User::userOwnedYesNoVoteDefinitions::Access::View::Page
// Access: true
// Single Access: false
export default function ServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();
  const [createDialog, closeDialog] = useDialog();

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
      payloadDiff.current![attributeName] = convertServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPagePayload(
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
      '{userHasVoteEntry,created,description,userHasNoVoteEntry,title,closeAt,status,userVoteEntry{value,created}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_USER_OWNED_YES_NO_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActionsExtended | undefined =
    customActionsHook?.(data, editMode, storeDiff);

  // Dialog hooks
  const openServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm =
    useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm();
  const openServiceYesNoVoteDefinitionUserVoteEntryRelationViewPage =
    useServiceYesNoVoteDefinitionUserVoteEntryRelationViewPage();
  const openServiceYesNoVoteDefinitionVoteEntriesRelationViewPage =
    useServiceYesNoVoteDefinitionVoteEntriesRelationViewPage();

  // Calculated section
  const title: string = t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit', {
    defaultValue: 'YesNoVoteDefinition View / Edit',
  });

  // Action section
  const backAction = async () => {
    navigateBack();
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
      const res = await serviceYesNoVoteDefinitionServiceImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
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
  const takeBackVoteForYesNoVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceYesNoVoteDefinitionServiceImpl.takeBackVote(data);

      if (customActions?.postTakeBackVoteForYesNoVoteDefinitionAction) {
        await customActions.postTakeBackVoteForYesNoVoteDefinitionAction();
      } else {
        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
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
  const voteAction = async () => {
    const { result, data: returnedData } =
      await openServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const userVoteEntryOpenPageAction = async (target?: ServiceYesNoVoteEntryStored) => {
    await openServiceYesNoVoteDefinitionUserVoteEntryRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const voteEntriesOpenPageAction = async (target?: ServiceYesNoVoteEntryStored) => {
    await openServiceYesNoVoteDefinitionVoteEntriesRelationViewPage(target!);

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
    queryCustomizer: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoVoteEntryStored[]> => {
    return serviceYesNoVoteDefinitionServiceImpl.listVoteEntries(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      queryCustomizer,
    );
  };

  const actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActions = {
    backAction,
    refreshAction,
    cancelAction,
    updateAction,
    takeBackVoteForYesNoVoteDefinitionAction,
    voteAction,
    userVoteEntryOpenPageAction,
    issueOpenPageAction,
    issuePreFetchAction,
    voteEntriesOpenPageAction,
    voteEntriesFilterAction,
    voteEntriesRefreshAction,
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
      data-page-name="service::User::userOwnedYesNoVoteDefinitions::Access::View::Page"
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
          />
        </PageContainerTransition>
      </Suspense>
    </div>
  );
}
