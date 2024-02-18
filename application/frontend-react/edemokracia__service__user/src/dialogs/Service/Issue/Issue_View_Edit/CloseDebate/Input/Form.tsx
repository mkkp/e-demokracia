//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, createContext, lazy, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type {
  CloseDebateInputCloseDebateInput_FormDialogActions,
  CloseDebateInputCloseDebateInput_FormDialogProps,
} from '~/containers/CloseDebateInput/CloseDebateInput_Form/CloseDebateInputCloseDebateInput_FormDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceIssueIssue_View_EditCloseDebateOutputView } from '~/routes';
import type {
  CloseDebateInput,
  CloseDebateInputQueryCustomizer,
  CloseDebateInputStored,
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceStored,
  VoteTypeOnCloseDebate,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueServiceImpl } from '~/services/data-axios/ServiceIssueServiceImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type CloseDebateInputCloseDebateInput_FormDialogActionsExtended =
  CloseDebateInputCloseDebateInput_FormDialogActions & {
    postCloseDebateForIssueAction?: (
      output: CloseDebateOutputVoteDefinitionReferenceStored,
      onSubmit: (result?: CloseDebateOutputVoteDefinitionReferenceStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => Promise<void>;
    postGetTemplateAction?: (
      ownerData: any,
      data: CloseDebateInput,
      storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void,
    ) => Promise<void>;
    postCreateAction?: (
      data: CloseDebateInput,
      res: CloseDebateInputStored,
      onSubmit: (result?: CloseDebateInputStored) => Promise<void>,
      onClose: () => Promise<void>,
      openCreated?: boolean,
    ) => Promise<void>;
  };

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_INPUT_FORM_ACTIONS_HOOK';
export type CloseDebateInputCloseDebateInput_FormActionsHook = (
  ownerData: any,
  data: CloseDebateInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void,
  submit: () => Promise<void>,
) => CloseDebateInputCloseDebateInput_FormDialogActionsExtended;

export interface CloseDebateInputCloseDebateInput_FormViewModel
  extends CloseDebateInputCloseDebateInput_FormDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<CloseDebateInput>;
  isDraft?: boolean;
}

const CloseDebateInputCloseDebateInput_FormViewModelContext =
  createContext<CloseDebateInputCloseDebateInput_FormViewModel>({} as any);
export const useCloseDebateInputCloseDebateInput_FormViewModel = () => {
  const context = useContext(CloseDebateInputCloseDebateInput_FormViewModelContext);
  if (!context) {
    throw new Error(
      'useCloseDebateInputCloseDebateInput_FormViewModel must be used within a(n) CloseDebateInputCloseDebateInput_FormViewModelProvider',
    );
  }
  return context;
};

export const useServiceIssueIssue_View_EditCloseDebateInputForm = (): ((
  ownerData: any,
  templateDataOverride?: Partial<CloseDebateInput>,
  isDraft?: boolean,
  ownerValidation?: (data: CloseDebateInput) => Promise<void>,
) => Promise<DialogResult<CloseDebateOutputVoteDefinitionReferenceStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<CloseDebateInput>,
    isDraft?: boolean,
    ownerValidation?: (data: CloseDebateInput) => Promise<void>,
  ) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'md',
        onClose: async (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            await closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceIssueIssue_View_EditCloseDebateInputForm
            ownerData={ownerData}
            templateDataOverride={templateDataOverride}
            isDraft={isDraft}
            ownerValidation={ownerValidation}
            onClose={async () => {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={async (result, isDraft) => {
              await closeDialog();
              resolve({
                result: isDraft ? 'submit-draft' : 'submit',
                data: result,
              });
            }}
          />
        ),
      });
    });
};

export const convertServiceIssueIssue_View_EditCloseDebateInputFormPayload = (
  attributeName: keyof CloseDebateInput,
  value: any,
): any => {
  const dateTimeTypes: string[] = ['closeAt'];
  if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  }
  return value;
};

const CloseDebateInputCloseDebateInput_FormDialogContainer = lazy(
  () =>
    import('~/containers/CloseDebateInput/CloseDebateInput_Form/CloseDebateInputCloseDebateInput_FormDialogContainer'),
);

export interface ServiceIssueIssue_View_EditCloseDebateInputFormProps {
  ownerData: any;

  templateDataOverride?: Partial<CloseDebateInput>;
  isDraft?: boolean;
  ownerValidation?: (data: CloseDebateInput) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: CloseDebateOutputVoteDefinitionReferenceStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_8M4nYHj_Ee6cB8og8p0UuQ)/OperationUnmappedInputPageDefinition
// Name: service::Issue::Issue_View_Edit::closeDebate::Input::Form
export default function ServiceIssueIssue_View_EditCloseDebateInputForm(
  props: ServiceIssueIssue_View_EditCloseDebateInputFormProps,
) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceIssueServiceImpl = useMemo(() => new ServiceIssueServiceImpl(judoAxiosProvider), []);

  // Hooks section
  const { t } = useTranslation();
  const { showSuccessSnack, showErrorSnack } = useSnacks();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const { setLatestViewData } = useViewData();
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();
  const [createDialog, closeDialog] = useDialog();

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(true);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<CloseDebateInputStored>({} as CloseDebateInputStored);
  const [validation, setValidation] = useState<Map<keyof CloseDebateInput, string>>(
    new Map<keyof CloseDebateInput, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof CloseDebateInputStored, any>>(
    {} as unknown as Record<keyof CloseDebateInputStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void = useCallback(
    (attributeName: keyof CloseDebateInput, value: any) => {
      payloadDiff.current![attributeName] = convertServiceIssueIssue_View_EditCloseDebateInputFormPayload(
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
    return true;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return false;
  }, [data]);

  // Private actions
  const submit = async () => {
    await closeDebateForIssueAction();
  };
  const refresh = async () => {};

  // Validation
  const validate: (data: CloseDebateInput) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<CloseDebateInputCloseDebateInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: CloseDebateInputCloseDebateInput_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    submit,
  );

  // Dialog hooks

  // Action section
  const getPageTitle = (data: CloseDebateInput): string => {
    return t('CloseDebateInput.CloseDebateInput_Form', { defaultValue: 'CloseDebateInput Form' });
  };
  const backAction = async () => {
    onClose();
  };
  const closeDebateForIssueAction = async () => {
    try {
      setIsLoading(true);
      const { data: result } = await serviceIssueServiceImpl.closeDebate(
        ownerData,
        cleanUpPayload(payloadDiff.current),
      );
      if (customActions?.postCloseDebateForIssueAction) {
        await customActions.postCloseDebateForIssueAction(result, onSubmit, onClose);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        onSubmit(result);

        navigate(routeToServiceIssueIssue_View_EditCloseDebateOutputView(result.__signedIdentifier));
      }
    } catch (error) {
      handleError<CloseDebateInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<JudoRestResponse<CloseDebateInput>> => {
    try {
      setIsLoading(true);
      const response = await serviceIssueServiceImpl.getTemplateOnCloseDebate();
      const { data: result } = response;
      setData(result as CloseDebateInputStored);
      payloadDiff.current = {
        ...(result as Record<keyof CloseDebateInputStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      if (templateDataOverride) {
        setData((prevData) => ({ ...prevData, ...templateDataOverride }));
        payloadDiff.current = {
          ...(templateDataOverride as Record<keyof CloseDebateInputStored, any>),
        };
      }
      return response;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: CloseDebateInputCloseDebateInput_FormDialogActions = {
    getPageTitle,
    backAction,
    closeDebateForIssueAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: CloseDebateInputCloseDebateInput_FormViewModel = {
    onClose,
    actions,
    ownerData,
    isLoading,
    setIsLoading,
    editMode,
    setEditMode,
    refresh,
    refreshCounter,
    submit,
    data,
    validation,
    setValidation,
    storeDiff,
    isFormUpdateable,
    isFormDeleteable,
    templateDataOverride,
    isDraft,
  };

  // Effect section
  useEffect(() => {
    actions.getTemplateAction!();
  }, []);

  return (
    <CloseDebateInputCloseDebateInput_FormViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_8M4nYHj_Ee6cB8og8p0UuQ)/OperationUnmappedInputPageDefinition"
          data-page-name="service::Issue::Issue_View_Edit::closeDebate::Input::Form"
        />
        <CloseDebateInputCloseDebateInput_FormDialogContainer
          ownerData={ownerData}
          onClose={onClose}
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
          isDraft={isDraft}
        />
      </Suspense>
    </CloseDebateInputCloseDebateInput_FormViewModelContext.Provider>
  );
}
