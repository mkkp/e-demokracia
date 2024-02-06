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
  CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditPageActions,
  CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditPageProps,
} from '~/containers/CloseDebateOutputVoteDefinitionReference/CloseDebateOutputVoteDefinitionReference_View_Edit/CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditPageContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { CloseDebateOutputVoteDefinitionReferenceServiceImpl } from '~/services/data-axios/CloseDebateOutputVoteDefinitionReferenceServiceImpl';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditPageActionsExtended =
  CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditPageActions & {
    postRefreshAction?: (
      data: CloseDebateOutputVoteDefinitionReferenceStored,
      storeDiff: (attributeName: keyof CloseDebateOutputVoteDefinitionReference, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof CloseDebateOutputVoteDefinitionReference, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_OUTPUT_VIEW_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_OUTPUT_VIEW_ACTIONS_HOOK';
export type CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditActionsHook = (
  data: CloseDebateOutputVoteDefinitionReferenceStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof CloseDebateOutputVoteDefinitionReference, value: any) => void,

  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditPageActionsExtended;

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditViewModel
  extends CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditPageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditViewModelContext =
  createContext<CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditViewModel>(
    {} as any,
  );
export const useCloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditViewModel =
  () => {
    const context = useContext(
      CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditViewModelContext,
    );
    if (!context) {
      throw new Error(
        'useCloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditViewModel must be used within a(n) CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditViewModelProvider',
      );
    }
    return context;
  };

export const convertServiceIssueIssue_View_EditCloseDebateOutputViewPayload = (
  attributeName: keyof CloseDebateOutputVoteDefinitionReference,
  value: any,
): any => {
  return value;
};

const CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/CloseDebateOutputVoteDefinitionReference/CloseDebateOutputVoteDefinitionReference_View_Edit/CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_8M4nYHj_Ee6cB8og8p0UuQ)/OperationOutputPageDefinition
// Name: service::Issue::Issue_View_Edit::closeDebate::Output::View
export default function ServiceIssueIssue_View_EditCloseDebateOutputView() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Services
  const closeDebateOutputVoteDefinitionReferenceServiceImpl = useMemo(
    () => new CloseDebateOutputVoteDefinitionReferenceServiceImpl(judoAxiosProvider),
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
  const [data, setData] = useState<CloseDebateOutputVoteDefinitionReferenceStored>({
    __signedIdentifier: signedIdentifier,
  } as CloseDebateOutputVoteDefinitionReferenceStored);
  const [validation, setValidation] = useState<Map<keyof CloseDebateOutputVoteDefinitionReference, string>>(
    new Map<keyof CloseDebateOutputVoteDefinitionReference, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof CloseDebateOutputVoteDefinitionReferenceStored, any>>(
    {} as unknown as Record<keyof CloseDebateOutputVoteDefinitionReferenceStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof CloseDebateOutputVoteDefinitionReference, value: any) => void = useCallback(
    (attributeName: keyof CloseDebateOutputVoteDefinitionReference, value: any) => {
      payloadDiff.current![attributeName] = convertServiceIssueIssue_View_EditCloseDebateOutputViewPayload(
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
    return false && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const getPageQueryCustomizer: () => CloseDebateOutputVoteDefinitionReferenceQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{context}',
  });

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_OUTPUT_VIEW_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditPageActionsExtended
    | undefined = customActionsHook?.(data, editMode, storeDiff, refresh, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (data: CloseDebateOutputVoteDefinitionReference): string => {
    return t('CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference_View_Edit', {
      defaultValue: 'CloseDebateOutputVoteDefinitionReference View / Edit',
    });
  };
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (
    queryCustomizer: CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await closeDebateOutputVoteDefinitionReferenceServiceImpl.refresh(
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
      } as Record<keyof CloseDebateOutputVoteDefinitionReferenceStored, any>;
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

  const actions: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditPageActions =
    {
      getPageTitle,
      backAction,
      refreshAction,
      ...(customActions ?? {}),
    };

  // ViewModel setup
  const viewModel: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditViewModel =
    {
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
    <CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditViewModelContext.Provider
      value={viewModel}
    >
      <Suspense>
        <div
          id="User/(esm/_8M4nYHj_Ee6cB8og8p0UuQ)/OperationOutputPageDefinition"
          data-page-name="service::Issue::Issue_View_Edit::closeDebate::Output::View"
        />
        <PageContainerTransition>
          <CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditPageContainer
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
    </CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditViewModelContext.Provider>
  );
}
