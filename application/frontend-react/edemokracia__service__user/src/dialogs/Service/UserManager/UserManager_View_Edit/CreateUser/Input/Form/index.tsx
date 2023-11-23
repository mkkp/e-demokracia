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
import { useServiceUserManagerUserManager_View_EditCreateUserOutputView } from '~/dialogs/Service/UserManager/UserManager_View_Edit/CreateUser/Output/View';
import type { ServiceCreateUserInputCreateUserInput_FormDialogActions } from '~/containers/Service/CreateUserInput/CreateUserInput_Form/ServiceCreateUserInputCreateUserInput_FormDialogContainer';
import type {
  ServiceCreateUserInput,
  ServiceCreateUserInputQueryCustomizer,
  ServiceCreateUserInputStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
import { serviceUserManagerServiceImpl } from '~/services/data-axios';
export type ServiceCreateUserInputCreateUserInput_FormDialogActionsExtended =
  ServiceCreateUserInputCreateUserInput_FormDialogActions & {
    postCreateUserForUserManagerAction?: (
      output: ServiceServiceUser,
      onSubmit: (result?: ServiceServiceUserStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => Promise<void>;
  };

export const SERVICE_USER_MANAGER_USER_MANAGER_VIEW_EDIT_CREATE_USER_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceCreateUserInputCreateUserInput_FormActionsHook';
export type ServiceCreateUserInputCreateUserInput_FormActionsHook = (
  ownerData: any,
  data: ServiceCreateUserInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCreateUserInput, value: any) => void,
) => ServiceCreateUserInputCreateUserInput_FormDialogActionsExtended;

export const useServiceUserManagerUserManager_View_EditCreateUserInputForm = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceServiceUserStored>>) => {
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
          <ServiceUserManagerUserManager_View_EditCreateUserInputForm
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

export const convertServiceUserManagerUserManager_View_EditCreateUserInputFormPayload = (
  attributeName: keyof ServiceCreateUserInput,
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

const ServiceCreateUserInputCreateUserInput_FormDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/CreateUserInput/CreateUserInput_Form/ServiceCreateUserInputCreateUserInput_FormDialogContainer'
    ),
);

export interface ServiceUserManagerUserManager_View_EditCreateUserInputFormProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceServiceUserStored) => Promise<void>;
}

// XMIID: User/(esm/_rDBEIFv6Ee6nEc5rp_Qy4A)/OperationUnmappedInputPageDefinition
// Name: service::UserManager::UserManager_View_Edit::createUser::Input::Form
export default function ServiceUserManagerUserManager_View_EditCreateUserInputForm(
  props: ServiceUserManagerUserManager_View_EditCreateUserInputFormProps,
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

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCreateUserInputCreateUserInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_MANAGER_USER_MANAGER_VIEW_EDIT_CREATE_USER_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCreateUserInputCreateUserInput_FormDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff);

  // Dialog hooks
  const openServiceUserManagerUserManager_View_EditCreateUserOutputView =
    useServiceUserManagerUserManager_View_EditCreateUserOutputView();

  // Calculated section
  const title: string = t('service.CreateUserInput.CreateUserInput_Form', { defaultValue: 'CreateUserInput Form' });

  // Action section
  const backAction = async () => {
    onClose();
  };
  const createUserForUserManagerAction = async () => {
    try {
      setIsLoading(true);
      const result = await serviceUserManagerServiceImpl.createUser(
        data,
      );

      if (customActions?.postCreateUserForUserManagerAction) {
        await customActions.postCreateUserForUserManagerAction(
          result,
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

        if (result) {
          onSubmit(result);
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
  const getTemplateAction = async (): Promise<ServiceCreateUserInput> => {
    try {
      setIsLoading(true);
      const result = await serviceUserManagerServiceImpl.getTemplateForCreateUser();

      setData(result as ServiceCreateUserInputStored);

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceCreateUserInputCreateUserInput_FormDialogActions = {
    backAction,
    createUserForUserManagerAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.getTemplateAction!();
  }, []);

  return (
    <div
      id="User/(esm/_rDBEIFv6Ee6nEc5rp_Qy4A)/OperationUnmappedInputPageDefinition"
      data-page-name="service::UserManager::UserManager_View_Edit::createUser::Input::Form"
    >
      <Suspense>
        <ServiceCreateUserInputCreateUserInput_FormDialogContainer
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
