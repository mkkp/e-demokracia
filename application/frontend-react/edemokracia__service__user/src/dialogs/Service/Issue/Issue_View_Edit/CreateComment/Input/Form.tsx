//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { toastConfig } from '~/config';
import { useSnacks, useCRUDDialog } from '~/hooks';
import {
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  uiTimeToServiceTime,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult } from '~/utilities';
import type { CreateCommentInputCreateCommentInput_FormDialogActions } from '~/containers/CreateCommentInput/CreateCommentInput_Form/CreateCommentInputCreateCommentInput_FormDialogContainer';
import type {
  CreateCommentInput,
  CreateCommentInputQueryCustomizer,
  CreateCommentInputStored,
} from '~/services/data-api';
import { serviceIssueServiceImpl } from '~/services/data-axios';
export type CreateCommentInputCreateCommentInput_FormDialogActionsExtended =
  CreateCommentInputCreateCommentInput_FormDialogActions & {
    postCreateCommentForIssueAction?: (
      onSubmit: (result?: CreateCommentInputStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => Promise<void>;
  };

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_CREATE_COMMENT_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'CreateCommentInputCreateCommentInput_FormActionsHook';
export type CreateCommentInputCreateCommentInput_FormActionsHook = (
  ownerData: any,
  data: CreateCommentInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof CreateCommentInput, value: any) => void,
) => CreateCommentInputCreateCommentInput_FormDialogActionsExtended;

export const useServiceIssueIssue_View_EditCreateCommentInputForm = (): ((
  ownerData: any,
) => Promise<DialogResult<CreateCommentInputStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
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
            onClose={async () => {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={async () => {
              await closeDialog();
              resolve({
                result: 'submit',
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

const CreateCommentInputCreateCommentInput_FormDialogContainer = lazy(
  () =>
    import(
      '~/containers/CreateCommentInput/CreateCommentInput_Form/CreateCommentInputCreateCommentInput_FormDialogContainer'
    ),
);

export interface ServiceIssueIssue_View_EditCreateCommentInputFormProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: CreateCommentInputStored) => Promise<void>;
}

// XMIID: User/(esm/_S8tEQIydEe2VSOmaAz6G9Q)/OperationUnmappedInputPageDefinition
// Name: service::Issue::Issue_View_Edit::createComment::Input::Form
export default function ServiceIssueIssue_View_EditCreateCommentInputForm(
  props: ServiceIssueIssue_View_EditCreateCommentInputFormProps,
) {
  const { ownerData, onClose, onSubmit } = props;

  // Hooks section
  const { t } = useTranslation();
  const { showSuccessSnack, showErrorSnack } = useSnacks();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
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

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<CreateCommentInputCreateCommentInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_CREATE_COMMENT_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: CreateCommentInputCreateCommentInput_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('CreateCommentInput.CreateCommentInput_Form', { defaultValue: 'CreateCommentInput Form' });

  // Action section
  const backAction = async () => {
    onClose();
  };
  const createCommentForIssueAction = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.createComment(ownerData, data);
      if (customActions?.postCreateCommentForIssueAction) {
        await customActions.postCreateCommentForIssueAction(
          onSubmit,
          onClose,
        );
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
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: CreateCommentInputCreateCommentInput_FormDialogActions = {
    backAction,
    createCommentForIssueAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.getTemplateAction!();
  }, []);

  return (
    <div
      id="User/(esm/_S8tEQIydEe2VSOmaAz6G9Q)/OperationUnmappedInputPageDefinition"
      data-page-name="service::Issue::Issue_View_Edit::createComment::Input::Form"
    >
      <Suspense>
        <CreateCommentInputCreateCommentInput_FormDialogContainer
          ownerData={ownerData}
          onClose={onClose}
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
      </Suspense>
    </div>
  );
}
