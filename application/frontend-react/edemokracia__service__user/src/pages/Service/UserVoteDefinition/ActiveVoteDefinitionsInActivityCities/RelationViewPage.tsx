//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, createContext, lazy, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceVoteDefinitionVoteDefinition_View_EditPageActions,
  ServiceVoteDefinitionVoteDefinition_View_EditPageProps,
} from '~/containers/Service/VoteDefinition/VoteDefinition_View_Edit/ServiceVoteDefinitionVoteDefinition_View_EditPageContainer';
import { useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/TabBar/Selectanswervote/VoteSelectAnswer/Relation/Table/CallSelector';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteRating/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNo/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNoAbstain/Input/Form';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceVoteDefinitionIssueRelationViewPage } from '~/routes';
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
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl } from '~/services/data-axios/ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceVoteDefinitionVoteDefinition_View_EditPageActionsExtended =
  ServiceVoteDefinitionVoteDefinition_View_EditPageActions & {
    postRefreshAction?: (
      data: ServiceVoteDefinitionStored,
      storeDiff: (attributeName: keyof ServiceVoteDefinition, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceVoteDefinition, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_CITIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_CITIES_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceVoteDefinitionVoteDefinition_View_EditActionsHook = (
  data: ServiceVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceVoteDefinition, value: any) => void,

  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceVoteDefinitionVoteDefinition_View_EditPageActionsExtended;

export interface ServiceVoteDefinitionVoteDefinition_View_EditViewModel
  extends ServiceVoteDefinitionVoteDefinition_View_EditPageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceVoteDefinitionVoteDefinition_View_EditViewModelContext =
  createContext<ServiceVoteDefinitionVoteDefinition_View_EditViewModel>({} as any);
export const useServiceVoteDefinitionVoteDefinition_View_EditViewModel = () => {
  const context = useContext(ServiceVoteDefinitionVoteDefinition_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceVoteDefinitionVoteDefinition_View_EditViewModel must be used within a(n) ServiceVoteDefinitionVoteDefinition_View_EditViewModelProvider',
    );
  }
  return context;
};

export const convertServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationViewPagePayload = (
  attributeName: keyof ServiceVoteDefinition,
  value: any,
): any => {
  const dateTimeTypes: string[] = ['closeAt'];
  if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  }
  return value;
};

const ServiceVoteDefinitionVoteDefinition_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/VoteDefinition/VoteDefinition_View_Edit/ServiceVoteDefinitionVoteDefinition_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_b8NPIF5BEe6vsex_cZNQbQ)/RelationFeatureView
// Name: service::UserVoteDefinition::activeVoteDefinitionsInActivityCities::RelationViewPage
export default function ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationViewPage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Services
  const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl = useMemo(
    () => new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl(judoAxiosProvider),
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
        convertServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationViewPagePayload(
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

  const getPageQueryCustomizer: () => ServiceVoteDefinitionQueryCustomizer = () => ({
    _mask: actions.getMask
      ? actions.getMask!()
      : '{closeAt,created,description,isNotRatingType,isNotSelectAnswerType,isNotYesNoAbstainType,isNotYesNoType,isRatingType,isSelectAnswerType,isYesNoAbstainType,isYesNoType,status,title}',
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
  const { service: customActionsHook } = useTrackService<ServiceVoteDefinitionVoteDefinition_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_CITIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceVoteDefinitionVoteDefinition_View_EditPageActionsExtended | undefined =
    customActionsHook?.(data, editMode, storeDiff, refresh, submit);

  // Dialog hooks
  const openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector =
    useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm();

  // Action section
  const getPageTitle = (data: ServiceVoteDefinition): string => {
    return t('service.VoteDefinition.VoteDefinition_View_Edit', { defaultValue: 'VoteDefinition View / Edit' });
  };
  const backAction = async () => {
    navigateBack();
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(getPageQueryCustomizer()));
  };
  const refreshAction = async (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl.refresh(
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
      } as Record<keyof ServiceVoteDefinitionStored, any>;
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
      const { data: res } = await serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl.update(
        payloadDiff.current,
      );
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceVoteDefinition, string>());
        setEditMode(false);
        await actions.refreshAction!(getPageQueryCustomizer());
      }
    } catch (error) {
      handleError<ServiceVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const issueOpenPageAction = async (target: ServiceIssue | ServiceIssueStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceIssueStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceVoteDefinitionIssueRelationViewPage(((target as ServiceIssueStored) || data).__signedIdentifier),
      );
    }
  };
  const issuePreFetchAction = async (): Promise<JudoRestResponse<ServiceIssueStored>> => {
    return serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl.getIssue(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      {
        _mask: '{}',
      },
    );
  };
  const voteRatingAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const voteSelectAnswerAction = async () => {
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
  const voteYesNoAbstainAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const voteYesNoAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  const actions: ServiceVoteDefinitionVoteDefinition_View_EditPageActions = {
    getPageTitle,
    backAction,
    cancelAction,
    refreshAction,
    updateAction,
    issueOpenPageAction,
    issuePreFetchAction,
    voteRatingAction,
    voteSelectAnswerAction,
    voteYesNoAbstainAction,
    voteYesNoAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceVoteDefinitionVoteDefinition_View_EditViewModel = {
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
    <ServiceVoteDefinitionVoteDefinition_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_b8NPIF5BEe6vsex_cZNQbQ)/RelationFeatureView"
          data-page-name="service::UserVoteDefinition::activeVoteDefinitionsInActivityCities::RelationViewPage"
        />
        <PageContainerTransition>
          <ServiceVoteDefinitionVoteDefinition_View_EditPageContainer
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
    </ServiceVoteDefinitionVoteDefinition_View_EditViewModelContext.Provider>
  );
}
