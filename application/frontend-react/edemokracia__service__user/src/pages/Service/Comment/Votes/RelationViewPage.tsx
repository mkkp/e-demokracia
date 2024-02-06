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
  ServiceSimpleVoteSimpleVote_View_EditPageActions,
  ServiceSimpleVoteSimpleVote_View_EditPageProps,
} from '~/containers/Service/SimpleVote/SimpleVote_View_Edit/ServiceSimpleVoteSimpleVote_View_EditPageContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceComment,
  ServiceCommentStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
  SimpleVoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceCommentServiceForVotesImpl } from '~/services/data-axios/ServiceCommentServiceForVotesImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceSimpleVoteSimpleVote_View_EditPageActionsExtended =
  ServiceSimpleVoteSimpleVote_View_EditPageActions & {
    postRefreshAction?: (
      data: ServiceSimpleVoteStored,
      storeDiff: (attributeName: keyof ServiceSimpleVote, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceSimpleVote, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_COMMENT_VOTES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_COMMENT_VOTES_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceSimpleVoteSimpleVote_View_EditActionsHook = (
  data: ServiceSimpleVoteStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceSimpleVote, value: any) => void,

  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceSimpleVoteSimpleVote_View_EditPageActionsExtended;

export interface ServiceSimpleVoteSimpleVote_View_EditViewModel extends ServiceSimpleVoteSimpleVote_View_EditPageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceSimpleVoteSimpleVote_View_EditViewModelContext =
  createContext<ServiceSimpleVoteSimpleVote_View_EditViewModel>({} as any);
export const useServiceSimpleVoteSimpleVote_View_EditViewModel = () => {
  const context = useContext(ServiceSimpleVoteSimpleVote_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceSimpleVoteSimpleVote_View_EditViewModel must be used within a(n) ServiceSimpleVoteSimpleVote_View_EditViewModelProvider',
    );
  }
  return context;
};

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

  // Services
  const serviceCommentServiceForVotesImpl = useMemo(() => new ServiceCommentServiceForVotesImpl(judoAxiosProvider), []);

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

  const getPageQueryCustomizer: () => ServiceSimpleVoteQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{created,type}',
  });

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceSimpleVoteSimpleVote_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_COMMENT_VOTES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceSimpleVoteSimpleVote_View_EditPageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
    storeDiff,
    refresh,
    submit,
  );

  // Dialog hooks

  // Action section
  const getPageTitle = (data: ServiceSimpleVote): string => {
    return t('service.SimpleVote.SimpleVote_View_Edit', { defaultValue: 'SimpleVote View / Edit' });
  };
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (queryCustomizer: ServiceSimpleVoteQueryCustomizer): Promise<ServiceSimpleVoteStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceCommentServiceForVotesImpl.refresh(
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
      } as Record<keyof ServiceSimpleVoteStored, any>;
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

  const actions: ServiceSimpleVoteSimpleVote_View_EditPageActions = {
    getPageTitle,
    backAction,
    refreshAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceSimpleVoteSimpleVote_View_EditViewModel = {
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
    <ServiceSimpleVoteSimpleVote_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_qbA7kGksEe25ONJ3V89cVA)/RelationFeatureView"
          data-page-name="service::Comment::votes::RelationViewPage"
        />
        <PageContainerTransition>
          <ServiceSimpleVoteSimpleVote_View_EditPageContainer
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
    </ServiceSimpleVoteSimpleVote_View_EditViewModelContext.Provider>
  );
}
