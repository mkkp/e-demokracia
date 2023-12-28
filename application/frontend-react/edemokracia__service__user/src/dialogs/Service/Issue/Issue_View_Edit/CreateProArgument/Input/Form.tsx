//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type { CreateArgumentInputCreateArgumentInput_FormDialogActions } from '~/containers/CreateArgumentInput/CreateArgumentInput_Form/CreateArgumentInputCreateArgumentInput_FormDialogContainer';
import { useCRUDDialog, useSnacks } from '~/hooks';
import type {
  CreateArgumentInput,
  CreateArgumentInputQueryCustomizer,
  CreateArgumentInputStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueServiceImpl } from '~/services/data-axios/ServiceIssueServiceImpl';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type CreateArgumentInputCreateArgumentInput_FormDialogActionsExtended =
  CreateArgumentInputCreateArgumentInput_FormDialogActions & {
    postCreateProArgumentForIssueAction?: (
      onSubmit: (result?: CreateArgumentInputStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => Promise<void>;
    postGetTemplateAction?: (
      ownerData: any,
      data: CreateArgumentInput,
      storeDiff: (attributeName: keyof CreateArgumentInput, value: any) => void,
    ) => Promise<void>;
  };

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_CREATE_PRO_ARGUMENT_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'CreateArgumentInputCreateArgumentInput_FormActionsHook';
export type CreateArgumentInputCreateArgumentInput_FormActionsHook = (
  ownerData: any,
  data: CreateArgumentInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof CreateArgumentInput, value: any) => void,
) => CreateArgumentInputCreateArgumentInput_FormDialogActionsExtended;

export const useServiceIssueIssue_View_EditCreateProArgumentInputForm = (): ((
  ownerData: any,
) => Promise<DialogResult<CreateArgumentInputStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'xs',
        onClose: async (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            await closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceIssueIssue_View_EditCreateProArgumentInputForm
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

export const convertServiceIssueIssue_View_EditCreateProArgumentInputFormPayload = (
  attributeName: keyof CreateArgumentInput,
  value: any,
): any => {
  return value;
};

const CreateArgumentInputCreateArgumentInput_FormDialogContainer = lazy(
  () =>
    import(
      '~/containers/CreateArgumentInput/CreateArgumentInput_Form/CreateArgumentInputCreateArgumentInput_FormDialogContainer'
    ),
);

export interface ServiceIssueIssue_View_EditCreateProArgumentInputFormProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: CreateArgumentInputStored) => Promise<void>;
}

// XMIID: User/(esm/_qJPPA3jvEe6cB8og8p0UuQ)/OperationUnmappedInputPageDefinition
// Name: service::Issue::Issue_View_Edit::createProArgument::Input::Form
export default function ServiceIssueIssue_View_EditCreateProArgumentInputForm(
  props: ServiceIssueIssue_View_EditCreateProArgumentInputFormProps,
) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const serviceIssueServiceImpl = useMemo(() => new ServiceIssueServiceImpl(judoAxiosProvider), []);

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
  const [data, setData] = useState<CreateArgumentInputStored>({} as CreateArgumentInputStored);
  const [validation, setValidation] = useState<Map<keyof CreateArgumentInput, string>>(
    new Map<keyof CreateArgumentInput, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof CreateArgumentInputStored, any>>(
    {} as unknown as Record<keyof CreateArgumentInputStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof CreateArgumentInput, value: any) => void = useCallback(
    (attributeName: keyof CreateArgumentInput, value: any) => {
      payloadDiff.current![attributeName] = convertServiceIssueIssue_View_EditCreateProArgumentInputFormPayload(
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
  const { service: customActionsHook } = useTrackService<CreateArgumentInputCreateArgumentInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_CREATE_PRO_ARGUMENT_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: CreateArgumentInputCreateArgumentInput_FormDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff);

  // Dialog hooks

  // Calculated section
  const title: string = t('CreateArgumentInput.CreateArgumentInput_Form', { defaultValue: 'CreateArgumentInput Form' });

  // Private actions
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    onClose();
  };
  const createProArgumentForIssueAction = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.createProArgument(ownerData, payloadDiff.current);
      if (customActions?.postCreateProArgumentForIssueAction) {
        await customActions.postCreateProArgumentForIssueAction(onSubmit, onClose);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        onSubmit();
      }
    } catch (error) {
      handleError<CreateArgumentInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<CreateArgumentInput> => {
    try {
      setIsLoading(true);
      const result = await serviceIssueServiceImpl.getTemplateOnCreateProArgument();
      setData(result as CreateArgumentInputStored);
      payloadDiff.current = {
        ...(result as Record<keyof CreateArgumentInputStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: CreateArgumentInputCreateArgumentInput_FormDialogActions = {
    backAction,
    createProArgumentForIssueAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.getTemplateAction!();
  }, []);

  return (
    <div
      id="User/(esm/_qJPPA3jvEe6cB8og8p0UuQ)/OperationUnmappedInputPageDefinition"
      data-page-name="service::Issue::Issue_View_Edit::createProArgument::Input::Form"
    >
      <Suspense>
        <CreateArgumentInputCreateArgumentInput_FormDialogContainer
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
          submit={submit}
        />
      </Suspense>
    </div>
  );
}
