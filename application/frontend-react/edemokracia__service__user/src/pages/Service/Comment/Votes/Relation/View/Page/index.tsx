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
import type { ServiceSimpleVoteSimpleVote_View_EditPageActions } from '~/containers/Service/SimpleVote/SimpleVote_View_Edit/ServiceSimpleVoteSimpleVote_View_EditPageContainer';
import type {
  ServiceComment,
  ServiceCommentStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
  SimpleVoteType,
} from '~/services/data-api';
import { serviceCommentServiceForVotesImpl } from '~/services/data-axios';

export const convertServiceCommentVotesRelationViewPagePayload = (
  attributeName: keyof ServiceSimpleVote,
  value: any,
): any => {
  const dateTypes: string[] = [];
  const dateTimeTypes: string[] = ['created'];
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

const ServiceSimpleVoteSimpleVote_View_EditPageContainer = lazy(
  () =>
    import('~/containers/Service/SimpleVote/SimpleVote_View_Edit/ServiceSimpleVoteSimpleVote_View_EditPageContainer'),
);

// XMIID: User/(esm/_qbA7kGksEe25ONJ3V89cVA)/RelationFeatureView
// Name: service::Comment::votes::Relation::View::Page
export default function ServiceCommentVotesRelationViewPage() {
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
  const [data, setData] = useState<ServiceSimpleVoteStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceSimpleVoteStored);
  const [validation, setValidation] = useState<Map<keyof ServiceSimpleVote, string>>(
    new Map<keyof ServiceSimpleVote, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceSimpleVoteStored, any>>(
    {} as unknown as Record<keyof ServiceSimpleVoteStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceSimpleVote, value: any) => void = useCallback(
    (attributeName: keyof ServiceSimpleVote, value: any) => {
      payloadDiff.current![attributeName] = convertServiceCommentVotesRelationViewPagePayload(attributeName, value);
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

  const pageQueryCustomizer: ServiceSimpleVoteQueryCustomizer = {
    _mask: '{created,type}',
  };

  // Dialog hooks

  // Calculated section
  const title: string = t('Service.SimpleVote.SimpleVote_View_Edit', { defaultValue: 'SimpleVote View / Edit' });

  // Action section
  const serviceSimpleVoteSimpleVote_View_EditBack = async () => {
    back();
  };
  const serviceSimpleVoteSimpleVote_View_EditRefresh = async (
    queryCustomizer: ServiceSimpleVoteQueryCustomizer,
  ): Promise<ServiceSimpleVoteStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceCommentServiceForVotesImpl.refresh(
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
      } as Record<keyof ServiceSimpleVoteStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };

  const actions: ServiceSimpleVoteSimpleVote_View_EditPageActions = {
    serviceSimpleVoteSimpleVote_View_EditBack,
    serviceSimpleVoteSimpleVote_View_EditRefresh,
  };

  // Effect section
  useEffect(() => {
    (async () => {
      await actions.serviceSimpleVoteSimpleVote_View_EditRefresh!(pageQueryCustomizer);
    })();
  }, []);

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceSimpleVoteSimpleVote_View_EditPageContainer
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
