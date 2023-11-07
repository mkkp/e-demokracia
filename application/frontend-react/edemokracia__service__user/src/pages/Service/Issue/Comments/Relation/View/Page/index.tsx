//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
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
import { routeToServiceCommentVotesRelationTablePage } from '~/routes';
import { useServiceCommentCreatedByRelationViewPage } from '~/dialogs/Service/Comment/CreatedBy/Relation/View/Page';
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
import { serviceIssueServiceForCommentsImpl } from '~/services/data-axios';

export const convertServiceIssueCommentsRelationViewPagePayload = (
  attributeName: keyof ServiceComment,
  value: any,
): any => {
  const dateTypes: string[] = [];
  const dateTimeTypes: string[] = [];
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

const ServiceCommentComment_View_EditPageContainer = lazy(
  () => import('~/containers/Service/Comment/Comment_View_Edit/ServiceCommentComment_View_EditPageContainer'),
);

// XMIID: User/(esm/_UjefsIybEe2VSOmaAz6G9Q)/RelationFeatureView
// Name: service::Issue::comments::Relation::View::Page
export default function ServiceIssueCommentsRelationViewPage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { navigate, back } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();
  const [createDialog, closeDialog] = useDialog();

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
    _mask: '{created,upVotes,comment,downVotes,createdBy{representation}}',
  };

  // Dialog hooks
  const openServiceCommentCreatedByRelationViewPage = useServiceCommentCreatedByRelationViewPage();

  // Calculated section
  const title: string = t('Service.Comment.Comment_View_Edit', { defaultValue: 'Comment View / Edit' });

  // Action section
  const serviceCommentComment_View_EditBack = async () => {
    back();
  };
  const serviceCommentComment_View_EditRefresh = async (
    queryCustomizer: ServiceCommentQueryCustomizer,
  ): Promise<ServiceCommentStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceIssueServiceForCommentsImpl.refresh(
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

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceCommentComment_View_EditGroupVoteUp = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceForCommentsImpl.voteUp(data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      if (!editMode) {
        await actions.serviceCommentComment_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
      }
    } catch (error) {
      handleError<ServiceComment>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceCommentComment_View_EditGroupVoteDown = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceForCommentsImpl.voteDown(data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      if (!editMode) {
        await actions.serviceCommentComment_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
      }
    } catch (error) {
      handleError<ServiceComment>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceCommentComment_View_EditGroupVotesOpenPage = async (target?: ServiceSimpleVoteStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceCommentVotesRelationTablePage((target || data).__signedIdentifier));
  };
  const serviceCommentComment_View_EditGroupCreatedByView = async (target?: ServiceServiceUserStored) => {
    await openServiceCommentCreatedByRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceCommentComment_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };

  const actions: ServiceCommentComment_View_EditPageActions = {
    serviceCommentComment_View_EditBack,
    serviceCommentComment_View_EditRefresh,
    serviceCommentComment_View_EditGroupVoteUp,
    serviceCommentComment_View_EditGroupVoteDown,
    serviceCommentComment_View_EditGroupVotesOpenPage,
    serviceCommentComment_View_EditGroupCreatedByView,
  };

  // Effect section
  useEffect(() => {
    (async () => {
      await actions.serviceCommentComment_View_EditRefresh!(pageQueryCustomizer);
    })();
  }, []);

  return (
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
        />
      </PageContainerTransition>
    </Suspense>
  );
}
