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
  ServiceCreateUserInputCreateUserInput_FormDialogActions,
  ServiceCreateUserInputCreateUserInput_FormDialogProps,
} from '~/containers/Service/CreateUserInput/CreateUserInput_Form/ServiceCreateUserInputCreateUserInput_FormDialogContainer';
import { useServiceUserManagerUserManager_View_EditCreateUserOutputView } from '~/dialogs/Service/UserManager/UserManager_View_Edit/CreateUser/Output/View';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceCreateUserInput,
  ServiceCreateUserInputQueryCustomizer,
  ServiceCreateUserInputStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceUserManagerServiceImpl } from '~/services/data-axios/ServiceUserManagerServiceImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceCreateUserInputCreateUserInput_FormDialogActionsExtended =
  ServiceCreateUserInputCreateUserInput_FormDialogActions & {
    postCreateUserForUserManagerAction?: (
      output: ServiceServiceUserStored,
      onSubmit: (result?: ServiceServiceUserStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => Promise<void>;
    postGetTemplateAction?: (
      ownerData: any,
      data: ServiceCreateUserInput,
      storeDiff: (attributeName: keyof ServiceCreateUserInput, value: any) => void,
    ) => Promise<void>;
    postCreateAction?: (
      data: ServiceCreateUserInput,
      res: ServiceCreateUserInputStored,
      onSubmit: (result?: ServiceCreateUserInputStored) => Promise<void>,
      onClose: () => Promise<void>,
      openCreated?: boolean,
    ) => Promise<void>;
  };

export const SERVICE_USER_MANAGER_USER_MANAGER_VIEW_EDIT_CREATE_USER_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_MANAGER_USER_MANAGER_VIEW_EDIT_CREATE_USER_INPUT_FORM_ACTIONS_HOOK';
export type ServiceCreateUserInputCreateUserInput_FormActionsHook = (
  ownerData: any,
  data: ServiceCreateUserInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCreateUserInput, value: any) => void,
  submit: () => Promise<void>,
) => ServiceCreateUserInputCreateUserInput_FormDialogActionsExtended;

export interface ServiceCreateUserInputCreateUserInput_FormViewModel
  extends ServiceCreateUserInputCreateUserInput_FormDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceCreateUserInput>;
  isDraft?: boolean;
}

const ServiceCreateUserInputCreateUserInput_FormViewModelContext =
  createContext<ServiceCreateUserInputCreateUserInput_FormViewModel>({} as any);
export const useServiceCreateUserInputCreateUserInput_FormViewModel = () => {
  const context = useContext(ServiceCreateUserInputCreateUserInput_FormViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceCreateUserInputCreateUserInput_FormViewModel must be used within a(n) ServiceCreateUserInputCreateUserInput_FormViewModelProvider',
    );
  }
  return context;
};

export const useServiceUserManagerUserManager_View_EditCreateUserInputForm = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceCreateUserInput>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceCreateUserInput) => Promise<void>,
) => Promise<DialogResult<ServiceServiceUserStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceCreateUserInput>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceCreateUserInput) => Promise<void>,
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
          <ServiceUserManagerUserManager_View_EditCreateUserInputForm
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

export const convertServiceUserManagerUserManager_View_EditCreateUserInputFormPayload = (
  attributeName: keyof ServiceCreateUserInput,
  value: any,
): any => {
  return value;
};

const ServiceCreateUserInputCreateUserInput_FormDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/CreateUserInput/CreateUserInput_Form/ServiceCreateUserInputCreateUserInput_FormDialogContainer'
    ),
);

export interface ServiceUserManagerUserManager_View_EditCreateUserInputFormProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceCreateUserInput>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceCreateUserInput) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceServiceUserStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_rDBEIFv6Ee6nEc5rp_Qy4A)/OperationUnmappedInputPageDefinition
// Name: service::UserManager::UserManager_View_Edit::createUser::Input::Form
export default function ServiceUserManagerUserManager_View_EditCreateUserInputForm(
  props: ServiceUserManagerUserManager_View_EditCreateUserInputFormProps,
) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceUserManagerServiceImpl = useMemo(() => new ServiceUserManagerServiceImpl(judoAxiosProvider), []);

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
  const [data, setData] = useState<ServiceCreateUserInputStored>({} as ServiceCreateUserInputStored);
  const [validation, setValidation] = useState<Map<keyof ServiceCreateUserInput, string>>(
    new Map<keyof ServiceCreateUserInput, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceCreateUserInputStored, any>>(
    {} as unknown as Record<keyof ServiceCreateUserInputStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceCreateUserInput, value: any) => void = useCallback(
    (attributeName: keyof ServiceCreateUserInput, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserManagerUserManager_View_EditCreateUserInputFormPayload(
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
    await createUserForUserManagerAction();
  };
  const refresh = async () => {};

  // Validation
  const validate: (data: ServiceCreateUserInput) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCreateUserInputCreateUserInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_MANAGER_USER_MANAGER_VIEW_EDIT_CREATE_USER_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCreateUserInputCreateUserInput_FormDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff, submit);

  // Dialog hooks
  const openServiceUserManagerUserManager_View_EditCreateUserOutputView =
    useServiceUserManagerUserManager_View_EditCreateUserOutputView();

  // Action section
  const getPageTitle = (data: ServiceCreateUserInput): string => {
    return t('service.CreateUserInput.CreateUserInput_Form', { defaultValue: 'CreateUserInput Form' });
  };
  const backAction = async () => {
    onClose();
  };
  const createUserForUserManagerAction = async () => {
    try {
      setIsLoading(true);
      const { data: result } = await serviceUserManagerServiceImpl.createUser(cleanUpPayload(payloadDiff.current));
      if (customActions?.postCreateUserForUserManagerAction) {
        await customActions.postCreateUserForUserManagerAction(result, onSubmit, onClose);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (result) {
          onClose();
          await openServiceUserManagerUserManager_View_EditCreateUserOutputView(result);
        } else {
          onSubmit();
        }
      }
    } catch (error) {
      handleError<ServiceCreateUserInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<JudoRestResponse<ServiceCreateUserInput>> => {
    try {
      setIsLoading(true);
      const response = await serviceUserManagerServiceImpl.getTemplateOnCreateUser();
      const { data: result } = response;
      setData(result as ServiceCreateUserInputStored);
      payloadDiff.current = {
        ...(result as Record<keyof ServiceCreateUserInputStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      if (templateDataOverride) {
        setData((prevData) => ({ ...prevData, ...templateDataOverride }));
        payloadDiff.current = {
          ...(templateDataOverride as Record<keyof ServiceCreateUserInputStored, any>),
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

  const actions: ServiceCreateUserInputCreateUserInput_FormDialogActions = {
    getPageTitle,
    backAction,
    createUserForUserManagerAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceCreateUserInputCreateUserInput_FormViewModel = {
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
    <ServiceCreateUserInputCreateUserInput_FormViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_rDBEIFv6Ee6nEc5rp_Qy4A)/OperationUnmappedInputPageDefinition"
          data-page-name="service::UserManager::UserManager_View_Edit::createUser::Input::Form"
        />
        <ServiceCreateUserInputCreateUserInput_FormDialogContainer
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
    </ServiceCreateUserInputCreateUserInput_FormViewModelContext.Provider>
  );
}
