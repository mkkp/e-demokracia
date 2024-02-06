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
  CreateCommentInputCreateCommentInput_FormDialogActions,
  CreateCommentInputCreateCommentInput_FormDialogProps,
} from '~/containers/CreateCommentInput/CreateCommentInput_Form/CreateCommentInputCreateCommentInput_FormDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  CreateCommentInput,
  CreateCommentInputQueryCustomizer,
  CreateCommentInputStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueServiceImpl } from '~/services/data-axios/ServiceIssueServiceImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type CreateCommentInputCreateCommentInput_FormDialogActionsExtended =
  CreateCommentInputCreateCommentInput_FormDialogActions & {
    postCreateCommentForIssueAction?: (
      onSubmit: (result?: CreateCommentInputStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => Promise<void>;
    postGetTemplateAction?: (
      ownerData: any,
      data: CreateCommentInput,
      storeDiff: (attributeName: keyof CreateCommentInput, value: any) => void,
    ) => Promise<void>;
    postCreateAction?: (
      data: CreateCommentInput,
      res: CreateCommentInputStored,
      onSubmit: (result?: CreateCommentInputStored) => Promise<void>,
      onClose: () => Promise<void>,
      openCreated?: boolean,
    ) => Promise<void>;
  };

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_CREATE_COMMENT_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_ISSUE_VIEW_EDIT_CREATE_COMMENT_INPUT_FORM_ACTIONS_HOOK';
export type CreateCommentInputCreateCommentInput_FormActionsHook = (
  ownerData: any,
  data: CreateCommentInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof CreateCommentInput, value: any) => void,
  submit: () => Promise<void>,
) => CreateCommentInputCreateCommentInput_FormDialogActionsExtended;

export interface CreateCommentInputCreateCommentInput_FormViewModel
  extends CreateCommentInputCreateCommentInput_FormDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<CreateCommentInput>;
  isDraft?: boolean;
}

const CreateCommentInputCreateCommentInput_FormViewModelContext =
  createContext<CreateCommentInputCreateCommentInput_FormViewModel>({} as any);
export const useCreateCommentInputCreateCommentInput_FormViewModel = () => {
  const context = useContext(CreateCommentInputCreateCommentInput_FormViewModelContext);
  if (!context) {
    throw new Error(
      'useCreateCommentInputCreateCommentInput_FormViewModel must be used within a(n) CreateCommentInputCreateCommentInput_FormViewModelProvider',
    );
  }
  return context;
};

export const useServiceIssueIssue_View_EditCreateCommentInputForm = (): ((
  ownerData: any,
  templateDataOverride?: Partial<CreateCommentInput>,
  isDraft?: boolean,
  ownerValidation?: (data: CreateCommentInput) => Promise<void>,
) => Promise<DialogResult<CreateCommentInputStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<CreateCommentInput>,
    isDraft?: boolean,
    ownerValidation?: (data: CreateCommentInput) => Promise<void>,
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
          <ServiceIssueIssue_View_EditCreateCommentInputForm
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
            onSubmit={async (isDraft) => {
              await closeDialog();
              resolve({
                result: isDraft ? 'submit-draft' : 'submit',
              });
            }}
          />
        ),
      });
    });
};

export const convertServiceIssueIssue_View_EditCreateCommentInputFormPayload = (
  attributeName: keyof CreateCommentInput,
  value: any,
): any => {
  return value;
};

const CreateCommentInputCreateCommentInput_FormDialogContainer = lazy(
  () =>
    import(
      '~/containers/CreateCommentInput/CreateCommentInput_Form/CreateCommentInputCreateCommentInput_FormDialogContainer'
    ),
);

export interface ServiceIssueIssue_View_EditCreateCommentInputFormProps {
  ownerData: any;

  templateDataOverride?: Partial<CreateCommentInput>;
  isDraft?: boolean;
  ownerValidation?: (data: CreateCommentInput) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: CreateCommentInputStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_S8tEQIydEe2VSOmaAz6G9Q)/OperationUnmappedInputPageDefinition
// Name: service::Issue::Issue_View_Edit::createComment::Input::Form
export default function ServiceIssueIssue_View_EditCreateCommentInputForm(
  props: ServiceIssueIssue_View_EditCreateCommentInputFormProps,
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
  const [data, setData] = useState<CreateCommentInputStored>({} as CreateCommentInputStored);
  const [validation, setValidation] = useState<Map<keyof CreateCommentInput, string>>(
    new Map<keyof CreateCommentInput, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof CreateCommentInputStored, any>>(
    {} as unknown as Record<keyof CreateCommentInputStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof CreateCommentInput, value: any) => void = useCallback(
    (attributeName: keyof CreateCommentInput, value: any) => {
      payloadDiff.current![attributeName] = convertServiceIssueIssue_View_EditCreateCommentInputFormPayload(
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
    await createCommentForIssueAction();
  };
  const refresh = async () => {};

  // Validation
  const validate: (data: CreateCommentInput) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<CreateCommentInputCreateCommentInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_CREATE_COMMENT_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: CreateCommentInputCreateCommentInput_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    submit,
  );

  // Dialog hooks

  // Action section
  const getPageTitle = (data: CreateCommentInput): string => {
    return t('CreateCommentInput.CreateCommentInput_Form', { defaultValue: 'CreateCommentInput Form' });
  };
  const backAction = async () => {
    onClose();
  };
  const createCommentForIssueAction = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.createComment(ownerData, cleanUpPayload(payloadDiff.current));
      if (customActions?.postCreateCommentForIssueAction) {
        await customActions.postCreateCommentForIssueAction(onSubmit, onClose);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        onSubmit();
      }
    } catch (error) {
      handleError<CreateCommentInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<CreateCommentInput> => {
    try {
      setIsLoading(true);
      const result = await serviceIssueServiceImpl.getTemplateOnCreateComment();
      setData(result as CreateCommentInputStored);
      payloadDiff.current = {
        ...(result as Record<keyof CreateCommentInputStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      if (templateDataOverride) {
        setData((prevData) => ({ ...prevData, ...templateDataOverride }));
        payloadDiff.current = {
          ...(templateDataOverride as Record<keyof CreateCommentInputStored, any>),
        };
      }
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: CreateCommentInputCreateCommentInput_FormDialogActions = {
    getPageTitle,
    backAction,
    createCommentForIssueAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: CreateCommentInputCreateCommentInput_FormViewModel = {
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
    <CreateCommentInputCreateCommentInput_FormViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_S8tEQIydEe2VSOmaAz6G9Q)/OperationUnmappedInputPageDefinition"
          data-page-name="service::Issue::Issue_View_Edit::createComment::Input::Form"
        />
        <CreateCommentInputCreateCommentInput_FormDialogContainer
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
    </CreateCommentInputCreateCommentInput_FormViewModelContext.Provider>
  );
}
