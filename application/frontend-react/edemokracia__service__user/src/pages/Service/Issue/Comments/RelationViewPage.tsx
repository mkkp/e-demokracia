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
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';
import { PageContainerTransition } from '~/theme/animations';
import { routeToServiceCommentVotesRelationTablePage } from '~/routes';
import { useServiceCommentCreatedByRelationViewPage } from '~/dialogs/Service/Comment/CreatedBy/RelationViewPage';
import type { ServiceCommentComment_View_EditPageActions } from '~/containers/Service/Comment/Comment_View_Edit/ServiceCommentComment_View_EditPageContainer';
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
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceCommentServiceImpl } from '~/services/data-axios/ServiceCommentServiceImpl';

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
  'ServiceCommentComment_View_EditActionsHook';
export type ServiceCommentComment_View_EditActionsHook = (
  data: ServiceCommentStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceComment, value: any) => void,
) => ServiceCommentComment_View_EditPageActionsExtended;

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
  const serviceCommentServiceImpl = useMemo(() => new ServiceCommentServiceImpl(judoAxiosProvider), []);

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

  const pageQueryCustomizer: ServiceCommentQueryCustomizer = {
    _mask: '{comment,created,downVotes,upVotes,createdBy{representation}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCommentComment_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_COMMENTS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCommentComment_View_EditPageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks
  const openServiceCommentCreatedByRelationViewPage = useServiceCommentCreatedByRelationViewPage();

  // Calculated section
  const title: string = t('service.Comment.Comment_View_Edit', { defaultValue: 'Comment View / Edit' });

  // Private actions
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (queryCustomizer: ServiceCommentQueryCustomizer): Promise<ServiceCommentStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceCommentServiceImpl.refresh(
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
      } as Record<keyof ServiceCommentStored, any>;
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
  const voteUpForCommentAction = async () => {
    try {
      setIsLoading(true);
      await serviceCommentServiceImpl.voteUp(data);
      if (customActions?.postVoteUpForCommentAction) {
        await customActions.postVoteUpForCommentAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceComment>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const voteDownForCommentAction = async () => {
    try {
      setIsLoading(true);
      await serviceCommentServiceImpl.voteDown(data);
      if (customActions?.postVoteDownForCommentAction) {
        await customActions.postVoteDownForCommentAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceComment>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const votesOpenPageAction = async (target?: ServiceSimpleVoteStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceCommentVotesRelationTablePage((target || data).__signedIdentifier));
  };
  const createdByOpenPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceCommentCreatedByRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };

  const actions: ServiceCommentComment_View_EditPageActions = {
    backAction,
    refreshAction,
    voteUpForCommentAction,
    voteDownForCommentAction,
    votesOpenPageAction,
    createdByOpenPageAction,
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
      id="User/(esm/_UjefsIybEe2VSOmaAz6G9Q)/RelationFeatureView"
      data-page-name="service::Issue::comments::RelationViewPage"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceCommentComment_View_EditPageContainer
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
