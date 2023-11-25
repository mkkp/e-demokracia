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
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
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
import { serviceSimpleVoteServiceImpl } from '~/services/data-axios';
export type ServiceSimpleVoteSimpleVote_View_EditPageActionsExtended =
  ServiceSimpleVoteSimpleVote_View_EditPageActions & {};

export const SERVICE_COMMENT_VOTES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceSimpleVoteSimpleVote_View_EditActionsHook';
export type ServiceSimpleVoteSimpleVote_View_EditActionsHook = (
  data: ServiceSimpleVoteStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceSimpleVote, value: any) => void,
) => ServiceSimpleVoteSimpleVote_View_EditPageActionsExtended;

export const convertServiceCommentVotesRelationViewPagePayload = (
  attributeName: keyof ServiceSimpleVote,
  value: any,
): any => {
  const dateTimeTypes: string[] = ['created'];
  if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  }
  return value;
};

const ServiceSimpleVoteSimpleVote_View_EditPageContainer = lazy(
  () =>
    import('~/containers/Service/SimpleVote/SimpleVote_View_Edit/ServiceSimpleVoteSimpleVote_View_EditPageContainer'),
);

// XMIID: User/(esm/_qbA7kGksEe25ONJ3V89cVA)/RelationFeatureView
// Name: service::Comment::votes::RelationViewPage
export default function ServiceCommentVotesRelationViewPage() {
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

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceSimpleVoteSimpleVote_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_COMMENT_VOTES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceSimpleVoteSimpleVote_View_EditPageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.SimpleVote.SimpleVote_View_Edit', { defaultValue: 'SimpleVote View / Edit' });

  // Action section
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (queryCustomizer: ServiceSimpleVoteQueryCustomizer): Promise<ServiceSimpleVoteStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceSimpleVoteServiceImpl.refresh(
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
    backAction,
    refreshAction,
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
      id="User/(esm/_qbA7kGksEe25ONJ3V89cVA)/RelationFeatureView"
      data-page-name="service::Comment::votes::RelationViewPage"
    >
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
    </div>
  );
}
