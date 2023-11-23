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
import { routeToServiceVoteDefinitionIssueRelationViewPage } from '~/routes';
import { useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/TabBar/Selectanswervote/VoteSelectAnswer/Relation/Table/CallSelector';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteRating/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNo/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNoAbstain/Input/Form';
import type { ServiceVoteDefinitionVoteDefinition_View_EditPageActions } from '~/containers/Service/VoteDefinition/VoteDefinition_View_Edit/ServiceVoteDefinitionVoteDefinition_View_EditPageContainer';
import type {
  IssueScope,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  VoteStatus,
  VoteType,
} from '~/services/data-api';
import { serviceVoteDefinitionServiceImpl } from '~/services/data-axios';
export type ServiceVoteDefinitionVoteDefinition_View_EditPageActionsExtended =
  ServiceVoteDefinitionVoteDefinition_View_EditPageActions & {};

export const SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_CITY_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceVoteDefinitionVoteDefinition_View_EditActionsHook';
export type ServiceVoteDefinitionVoteDefinition_View_EditActionsHook = (
  data: ServiceVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceVoteDefinition, value: any) => void,
) => ServiceVoteDefinitionVoteDefinition_View_EditPageActionsExtended;

export const convertServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationViewPagePayload = (
  attributeName: keyof ServiceVoteDefinition,
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

const ServiceVoteDefinitionVoteDefinition_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/VoteDefinition/VoteDefinition_View_Edit/ServiceVoteDefinitionVoteDefinition_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_9qDp0F5BEe6vsex_cZNQbQ)/RelationFeatureView
// Name: service::UserVoteDefinition::activeVoteDefinitionsInResidentCity::Relation::View::Page
// Access: false
// Single Access: false
export default function ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationViewPage() {
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
  const [data, setData] = useState<ServiceVoteDefinitionStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceVoteDefinitionStored);
  const [validation, setValidation] = useState<Map<keyof ServiceVoteDefinition, string>>(
    new Map<keyof ServiceVoteDefinition, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof ServiceVoteDefinitionStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceVoteDefinition, value: any) => void = useCallback(
    (attributeName: keyof ServiceVoteDefinition, value: any) => {
      payloadDiff.current![attributeName] =
        convertServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationViewPagePayload(
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
    return true && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const pageQueryCustomizer: ServiceVoteDefinitionQueryCustomizer = {
    _mask:
      '{created,isSelectAnswerType,isNotRatingType,description,isNotYesNoType,title,closeAt,isRatingType,isYesNoType,isYesNoAbstainType,isNotSelectAnswerType,isNotYesNoAbstainType,status}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceVoteDefinitionVoteDefinition_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_CITY_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceVoteDefinitionVoteDefinition_View_EditPageActionsExtended | undefined =
    customActionsHook?.(data, editMode, storeDiff);

  // Dialog hooks
  const openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector =
    useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm();

  // Calculated section
  const title: string = t('service.VoteDefinition.VoteDefinition_View_Edit', {
    defaultValue: 'VoteDefinition View / Edit',
  });

  // Action section
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<ServiceVoteDefinitionStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceVoteDefinitionServiceImpl.refresh(
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
      } as Record<keyof ServiceVoteDefinitionStored, any>;

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
      const res = await serviceVoteDefinitionServiceImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceVoteDefinition, string>());
        await actions.refreshAction!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const voteYesNoAction = async () => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(
      data,
    );
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const voteYesNoAbstainAction = async () => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const voteRatingAction = async () => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(
      data,
    );
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const voteSelectAnswerAction = async () => {
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
  const issueOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceVoteDefinitionIssueRelationViewPage((target || data).__signedIdentifier));
  };
  const issuePreFetchAction = async (): Promise<ServiceIssueStored> => {
    return serviceVoteDefinitionServiceImpl.getIssue(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      {
        _mask: '{}',
      },
    );
  };

  const actions: ServiceVoteDefinitionVoteDefinition_View_EditPageActions = {
    backAction,
    refreshAction,
    cancelAction,
    updateAction,
    voteYesNoAction,
    voteYesNoAbstainAction,
    voteRatingAction,
    voteSelectAnswerAction,
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
      id="User/(esm/_9qDp0F5BEe6vsex_cZNQbQ)/RelationFeatureView"
      data-page-name="service::UserVoteDefinition::activeVoteDefinitionsInResidentCity::Relation::View::Page"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceVoteDefinitionVoteDefinition_View_EditPageContainer
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
