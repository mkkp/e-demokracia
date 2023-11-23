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
import type { CreateArgumentInputCreateArgumentInput_FormDialogActions } from '~/containers/CreateArgumentInput/CreateArgumentInput_Form/CreateArgumentInputCreateArgumentInput_FormDialogContainer';
import type {
  CreateArgumentInput,
  CreateArgumentInputQueryCustomizer,
  CreateArgumentInputStored,
} from '~/services/data-api';
import { serviceProServiceImpl } from '~/services/data-axios';
export type CreateArgumentInputCreateArgumentInput_FormDialogActionsExtended =
  CreateArgumentInputCreateArgumentInput_FormDialogActions & {
    postCreateProArgumentForProAction?: (
      onSubmit: (result?: CreateArgumentInputStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => Promise<void>;
  };

export const SERVICE_PRO_PRO_VIEW_EDIT_CREATE_PRO_ARGUMENT_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'CreateArgumentInputCreateArgumentInput_FormActionsHook';
export type CreateArgumentInputCreateArgumentInput_FormActionsHook = (
  ownerData: any,
  data: CreateArgumentInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof CreateArgumentInput, value: any) => void,
) => CreateArgumentInputCreateArgumentInput_FormDialogActionsExtended;

export const useServiceProPro_View_EditCreateProArgumentInputForm = (): ((
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
          <ServiceProPro_View_EditCreateProArgumentInputForm
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

export const convertServiceProPro_View_EditCreateProArgumentInputFormPayload = (
  attributeName: keyof CreateArgumentInput,
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

const CreateArgumentInputCreateArgumentInput_FormDialogContainer = lazy(
  () =>
    import(
      '~/containers/CreateArgumentInput/CreateArgumentInput_Form/CreateArgumentInputCreateArgumentInput_FormDialogContainer'
    ),
);

export interface ServiceProPro_View_EditCreateProArgumentInputFormProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: CreateArgumentInputStored) => Promise<void>;
}

// XMIID: User/(esm/_KRUbM3jvEe6cB8og8p0UuQ)/OperationUnmappedInputPageDefinition
// Name: service::Pro::Pro_View_Edit::createProArgument::Input::Form
// Open in dialog: true
export default function ServiceProPro_View_EditCreateProArgumentInputForm(
  props: ServiceProPro_View_EditCreateProArgumentInputFormProps,
) {
  const { ownerData, onClose, onSubmit } = props;

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
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
      payloadDiff.current![attributeName] = convertServiceProPro_View_EditCreateProArgumentInputFormPayload(
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
    `(${OBJECTCLASS}=${SERVICE_PRO_PRO_VIEW_EDIT_CREATE_PRO_ARGUMENT_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: CreateArgumentInputCreateArgumentInput_FormDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff);

  // Dialog hooks

  // Calculated section
  const title: string = t('CreateArgumentInput.CreateArgumentInput_Form', { defaultValue: 'CreateArgumentInput Form' });

  // Action section
  const backAction = async () => {
    onClose();
  };
  const createProArgumentForProAction = async () => {
    try {
      setIsLoading(true);
      await serviceProServiceImpl.createProArgument(ownerData, data);

      if (customActions?.postCreateProArgumentForProAction) {
        await customActions.postCreateProArgumentForProAction(
          onSubmit,
          onClose,
        );
      } else {
        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
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
      const result = await serviceProServiceImpl.getTemplateForCreateProArgument();

      setData(result as CreateArgumentInputStored);

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
    createProArgumentForProAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.getTemplateAction!();
  }, []);

  return (
    <div
      id="User/(esm/_KRUbM3jvEe6cB8og8p0UuQ)/OperationUnmappedInputPageDefinition"
      data-page-name="service::Pro::Pro_View_Edit::createProArgument::Input::Form"
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
        />
      </Suspense>
    </div>
  );
}
