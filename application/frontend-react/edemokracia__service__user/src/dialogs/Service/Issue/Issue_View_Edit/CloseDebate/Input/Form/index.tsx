//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'/index.tsx'
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
import type { CloseDebateInputCloseDebateInput_FormDialogActions } from '~/containers/CloseDebateInput/CloseDebateInput_Form/CloseDebateInputCloseDebateInput_FormDialogContainer';
import type {
  CloseDebateInput,
  CloseDebateInputQueryCustomizer,
  CloseDebateInputStored,
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceStored,
  VoteTypeOnCloseDebate,
} from '~/services/data-api';
import { serviceIssueServiceImpl } from '~/services/data-axios';
export type CloseDebateInputCloseDebateInput_FormDialogActionsExtended =
  CloseDebateInputCloseDebateInput_FormDialogActions & {
    postCloseDebateForIssueAction?: (
      output: CloseDebateOutputVoteDefinitionReference,
      onSubmit: (result?: CloseDebateOutputVoteDefinitionReferenceStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => Promise<void>;
  };

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'CloseDebateInputCloseDebateInput_FormActionsHook';
export type CloseDebateInputCloseDebateInput_FormActionsHook = (
  ownerData: any,
  data: CloseDebateInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void,
) => CloseDebateInputCloseDebateInput_FormDialogActionsExtended;

export const useServiceIssueIssue_View_EditCloseDebateInputForm = (): ((
  ownerData: any,
) => Promise<DialogResult<CloseDebateOutputVoteDefinitionReferenceStored>>) => {
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
          <ServiceIssueIssue_View_EditCloseDebateInputForm
            ownerData={ownerData}
            onClose={async () => {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={async (result) => {
              await closeDialog();
              resolve({
                result: 'submit',
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
  const dateTypes: string[] = [];
  const dateTimeTypes: string[] = ['closeAt'];
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

const CloseDebateInputCloseDebateInput_FormDialogContainer = lazy(
  () =>
    import('~/containers/CloseDebateInput/CloseDebateInput_Form/CloseDebateInputCloseDebateInput_FormDialogContainer'),
);

export interface ServiceIssueIssue_View_EditCloseDebateInputFormProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: CloseDebateOutputVoteDefinitionReferenceStored) => Promise<void>;
}

// XMIID: User/(esm/_8M4nYHj_Ee6cB8og8p0UuQ)/OperationUnmappedInputPageDefinition
// Name: service::Issue::Issue_View_Edit::closeDebate::Input::Form
// Open in dialog: true
export default function ServiceIssueIssue_View_EditCloseDebateInputForm(
  props: ServiceIssueIssue_View_EditCloseDebateInputFormProps,
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

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<CloseDebateInputCloseDebateInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: CloseDebateInputCloseDebateInput_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('CloseDebateInput.CloseDebateInput_Form', { defaultValue: 'CloseDebateInput Form' });

  // Action section
  const backAction = async () => {
    onClose();
  };
  const closeDebateForIssueAction = async () => {
    try {
      setIsLoading(true);
      const result = await serviceIssueServiceImpl.closeDebate(ownerData, data);

      if (customActions?.postCloseDebateForIssueAction) {
        await customActions.postCloseDebateForIssueAction(
          result,
          onSubmit,
          onClose,
        );
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (result) {
          onSubmit(result);
        } else {
          onSubmit();
        }
      }
    } catch (error) {
      handleError<CloseDebateInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<CloseDebateInput> => {
    try {
      setIsLoading(true);
      const result = await serviceIssueServiceImpl.getTemplateOnCloseDebate();

      setData(result as CloseDebateInputStored);

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: CloseDebateInputCloseDebateInput_FormDialogActions = {
    backAction,
    closeDebateForIssueAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.getTemplateAction!();
  }, []);

  return (
    <div
      id="User/(esm/_8M4nYHj_Ee6cB8og8p0UuQ)/OperationUnmappedInputPageDefinition"
      data-page-name="service::Issue::Issue_View_Edit::closeDebate::Input::Form"
    >
      <Suspense>
        <CloseDebateInputCloseDebateInput_FormDialogContainer
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
