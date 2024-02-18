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
  CreateArgumentInputCreateArgumentInput_FormDialogActions,
  CreateArgumentInputCreateArgumentInput_FormDialogProps,
} from '~/containers/CreateArgumentInput/CreateArgumentInput_Form/CreateArgumentInputCreateArgumentInput_FormDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  CreateArgumentInput,
  CreateArgumentInputQueryCustomizer,
  CreateArgumentInputStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceProServiceImpl } from '~/services/data-axios/ServiceProServiceImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type CreateArgumentInputCreateArgumentInput_FormDialogActionsExtended =
  CreateArgumentInputCreateArgumentInput_FormDialogActions & {
    postCreateConArgumentForProAction?: (
      onSubmit: (result?: CreateArgumentInputStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => Promise<void>;
    postGetTemplateAction?: (
      ownerData: any,
      data: CreateArgumentInput,
      storeDiff: (attributeName: keyof CreateArgumentInput, value: any) => void,
    ) => Promise<void>;
    postCreateAction?: (
      data: CreateArgumentInput,
      res: CreateArgumentInputStored,
      onSubmit: (result?: CreateArgumentInputStored) => Promise<void>,
      onClose: () => Promise<void>,
      openCreated?: boolean,
    ) => Promise<void>;
  };

export const SERVICE_PRO_PRO_VIEW_EDIT_CREATE_CON_ARGUMENT_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_PRO_PRO_VIEW_EDIT_CREATE_CON_ARGUMENT_INPUT_FORM_ACTIONS_HOOK';
export type CreateArgumentInputCreateArgumentInput_FormActionsHook = (
  ownerData: any,
  data: CreateArgumentInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof CreateArgumentInput, value: any) => void,
  submit: () => Promise<void>,
) => CreateArgumentInputCreateArgumentInput_FormDialogActionsExtended;

export interface CreateArgumentInputCreateArgumentInput_FormViewModel
  extends CreateArgumentInputCreateArgumentInput_FormDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<CreateArgumentInput>;
  isDraft?: boolean;
}

const CreateArgumentInputCreateArgumentInput_FormViewModelContext =
  createContext<CreateArgumentInputCreateArgumentInput_FormViewModel>({} as any);
export const useCreateArgumentInputCreateArgumentInput_FormViewModel = () => {
  const context = useContext(CreateArgumentInputCreateArgumentInput_FormViewModelContext);
  if (!context) {
    throw new Error(
      'useCreateArgumentInputCreateArgumentInput_FormViewModel must be used within a(n) CreateArgumentInputCreateArgumentInput_FormViewModelProvider',
    );
  }
  return context;
};

export const useServiceProPro_View_EditCreateConArgumentInputForm = (): ((
  ownerData: any,
  templateDataOverride?: Partial<CreateArgumentInput>,
  isDraft?: boolean,
  ownerValidation?: (data: CreateArgumentInput) => Promise<void>,
) => Promise<DialogResult<CreateArgumentInputStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<CreateArgumentInput>,
    isDraft?: boolean,
    ownerValidation?: (data: CreateArgumentInput) => Promise<void>,
  ) =>
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
          <ServiceProPro_View_EditCreateConArgumentInputForm
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

export const convertServiceProPro_View_EditCreateConArgumentInputFormPayload = (
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

export interface ServiceProPro_View_EditCreateConArgumentInputFormProps {
  ownerData: any;

  templateDataOverride?: Partial<CreateArgumentInput>;
  isDraft?: boolean;
  ownerValidation?: (data: CreateArgumentInput) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: CreateArgumentInputStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_KRUbO3jvEe6cB8og8p0UuQ)/OperationUnmappedInputPageDefinition
// Name: service::Pro::Pro_View_Edit::createConArgument::Input::Form
export default function ServiceProPro_View_EditCreateConArgumentInputForm(
  props: ServiceProPro_View_EditCreateConArgumentInputFormProps,
) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceProServiceImpl = useMemo(() => new ServiceProServiceImpl(judoAxiosProvider), []);

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
      payloadDiff.current![attributeName] = convertServiceProPro_View_EditCreateConArgumentInputFormPayload(
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
  const submit = async () => {};
  const refresh = async () => {};

  // Validation
  const validate: (data: CreateArgumentInput) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<CreateArgumentInputCreateArgumentInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_PRO_PRO_VIEW_EDIT_CREATE_CON_ARGUMENT_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: CreateArgumentInputCreateArgumentInput_FormDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (data: CreateArgumentInput): string => {
    return t('CreateArgumentInput.CreateArgumentInput_Form', { defaultValue: 'CreateArgumentInput Form' });
  };
  const backAction = async () => {
    onClose();
  };
  const createConArgumentForProAction = async () => {
    try {
      setIsLoading(true);
      await serviceProServiceImpl.createConArgument(ownerData, cleanUpPayload(payloadDiff.current));
      if (customActions?.postCreateConArgumentForProAction) {
        await customActions.postCreateConArgumentForProAction(onSubmit, onClose);
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
  const getTemplateAction = async (): Promise<JudoRestResponse<CreateArgumentInput>> => {
    try {
      setIsLoading(true);
      const response = await serviceProServiceImpl.getTemplateOnCreateConArgument();
      const { data: result } = response;
      setData(result as CreateArgumentInputStored);
      payloadDiff.current = {
        ...(result as Record<keyof CreateArgumentInputStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      if (templateDataOverride) {
        setData((prevData) => ({ ...prevData, ...templateDataOverride }));
        payloadDiff.current = {
          ...(templateDataOverride as Record<keyof CreateArgumentInputStored, any>),
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

  const actions: CreateArgumentInputCreateArgumentInput_FormDialogActions = {
    getPageTitle,
    backAction,
    createConArgumentForProAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: CreateArgumentInputCreateArgumentInput_FormViewModel = {
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
    <CreateArgumentInputCreateArgumentInput_FormViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_KRUbO3jvEe6cB8og8p0UuQ)/OperationUnmappedInputPageDefinition"
          data-page-name="service::Pro::Pro_View_Edit::createConArgument::Input::Form"
        />
        <CreateArgumentInputCreateArgumentInput_FormDialogContainer
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
    </CreateArgumentInputCreateArgumentInput_FormViewModelContext.Provider>
  );
}
