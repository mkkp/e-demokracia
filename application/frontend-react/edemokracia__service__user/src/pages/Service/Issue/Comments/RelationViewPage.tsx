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
  ServiceCommentComment_View_EditPageActions,
  ServiceCommentComment_View_EditPageProps,
} from '~/containers/Service/Comment/Comment_View_Edit/ServiceCommentComment_View_EditPageContainer';
import { useServiceCommentCreatedByRelationViewPage } from '~/dialogs/Service/Comment/CreatedBy/RelationViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceCommentVotesRelationTablePage } from '~/routes';
import type {
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServiceIssue,
  ServiceIssueStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueServiceForCommentsImpl } from '~/services/data-axios/ServiceIssueServiceForCommentsImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceCommentComment_View_EditPageActionsExtended = ServiceCommentComment_View_EditPageActions & {
  postVoteDownForCommentAction?: () => Promise<void>;
  postVoteUpForCommentAction?: () => Promise<void>;
  postRefreshAction?: (
    data: ServiceCommentStored,
    storeDiff: (attributeName: keyof ServiceComment, value: any) => void,
    setValidation: Dispatch<SetStateAction<Map<keyof ServiceComment, string>>>,
  ) => Promise<void>;
};

export const SERVICE_ISSUE_COMMENTS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_COMMENTS_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceCommentComment_View_EditActionsHook = (
  data: ServiceCommentStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceComment, value: any) => void,

  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceCommentComment_View_EditPageActionsExtended;

export interface ServiceCommentComment_View_EditViewModel extends ServiceCommentComment_View_EditPageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceCommentComment_View_EditViewModelContext = createContext<ServiceCommentComment_View_EditViewModel>(
  {} as any,
);
export const useServiceCommentComment_View_EditViewModel = () => {
  const context = useContext(ServiceCommentComment_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceCommentComment_View_EditViewModel must be used within a(n) ServiceCommentComment_View_EditViewModelProvider',
    );
  }
  return context;
};

export const convertServiceIssueCommentsRelationViewPagePayload = (
  attributeName: keyof ServiceComment,
  value: any,
): any => {
  const dateTimeTypes: string[] = [];
  if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  }
  return value;
};

const ServiceCommentComment_View_EditPageContainer = lazy(
  () => import('~/containers/Service/Comment/Comment_View_Edit/ServiceCommentComment_View_EditPageContainer'),
);

// XMIID: User/(esm/_UjefsIybEe2VSOmaAz6G9Q)/RelationFeatureView
// Name: service::Issue::comments::RelationViewPage
export default function ServiceIssueCommentsRelationViewPage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Services
  const serviceIssueServiceForCommentsImpl = useMemo(
    () => new ServiceIssueServiceForCommentsImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceCommentStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceCommentStored);
  const [validation, setValidation] = useState<Map<keyof ServiceComment, string>>(
    new Map<keyof ServiceComment, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceCommentStored, any>>(
    {} as unknown as Record<keyof ServiceCommentStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceComment, value: any) => void = useCallback(
    (attributeName: keyof ServiceComment, value: any) => {
      payloadDiff.current![attributeName] = convertServiceIssueCommentsRelationViewPagePayload(attributeName, value);
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
    return false && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const getPageQueryCustomizer: () => ServiceCommentQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{comment,created,downVotes,upVotes,createdBy{representation}}',
  });

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCommentComment_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_COMMENTS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCommentComment_View_EditPageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
    storeDiff,
    refresh,
    submit,
  );

  // Dialog hooks
  const openServiceCommentCreatedByRelationViewPage = useServiceCommentCreatedByRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceComment): string => {
    return t('service.Comment.Comment_View_Edit', { defaultValue: 'Comment View / Edit' });
  };
  const createdByOpenPageAction = async (target: ServiceServiceUser | ServiceServiceUserStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceServiceUserStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceCommentCreatedByRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const voteDownForCommentAction = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceForCommentsImpl.voteDown(data);
      if (customActions?.postVoteDownForCommentAction) {
        await customActions.postVoteDownForCommentAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceComment>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const voteUpForCommentAction = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceForCommentsImpl.voteUp(data);
      if (customActions?.postVoteUpForCommentAction) {
        await customActions.postVoteUpForCommentAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceComment>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const votesOpenPageAction = async (target: ServiceSimpleVote | ServiceSimpleVoteStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceSimpleVoteStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceCommentVotesRelationTablePage(((target as ServiceSimpleVoteStored) || data).__signedIdentifier),
      );
    }
  };
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (queryCustomizer: ServiceCommentQueryCustomizer): Promise<ServiceCommentStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceIssueServiceForCommentsImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        getPageQueryCustomizer(),
      );
      setData(result);
      setLatestViewData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceCommentStored, any>;
      if (customActions?.postRefreshAction) {
        await customActions?.postRefreshAction(result, storeDiff, setValidation);
      }
      return result;
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };

  const actions: ServiceCommentComment_View_EditPageActions = {
    getPageTitle,
    createdByOpenPageAction,
    voteDownForCommentAction,
    voteUpForCommentAction,
    votesOpenPageAction,
    backAction,
    refreshAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceCommentComment_View_EditViewModel = {
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
    <ServiceCommentComment_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_UjefsIybEe2VSOmaAz6G9Q)/RelationFeatureView"
          data-page-name="service::Issue::comments::RelationViewPage"
        />
        <PageContainerTransition>
          <ServiceCommentComment_View_EditPageContainer
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
    </ServiceCommentComment_View_EditViewModelContext.Provider>
  );
}
