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
  ServiceCountyCounty_FormDialogActions,
  ServiceCountyCounty_FormDialogProps,
} from '~/containers/Service/County/County_Form/ServiceCountyCounty_FormDialogContainer';
import { useServiceUserAdminCountiesAccessViewPage } from '~/dialogs/Service/User/AdminCounties/AccessViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type { ServiceCounty, ServiceCountyQueryCustomizer, ServiceCountyStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForAdminCountiesImpl } from '~/services/data-axios/UserServiceForAdminCountiesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceCountyCounty_FormDialogActionsExtended = ServiceCountyCounty_FormDialogActions & {
  postGetTemplateAction?: (
    ownerData: any,
    data: ServiceCounty,
    storeDiff: (attributeName: keyof ServiceCounty, value: any) => void,
  ) => Promise<void>;
  postCreateAction?: (
    data: ServiceCounty,
    res: ServiceCountyStored,
    onSubmit: (result?: ServiceCountyStored) => Promise<void>,
    onClose: () => Promise<void>,
    openCreated?: boolean,
  ) => Promise<void>;
};

export const SERVICE_USER_ADMIN_COUNTIES_ACCESS_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_ADMIN_COUNTIES_ACCESS_FORM_PAGE_ACTIONS_HOOK';
export type ServiceCountyCounty_FormActionsHook = (
  ownerData: any,
  data: ServiceCountyStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCounty, value: any) => void,
  submit: () => Promise<void>,
) => ServiceCountyCounty_FormDialogActionsExtended;

export interface ServiceCountyCounty_FormViewModel extends ServiceCountyCounty_FormDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceCounty>;
  isDraft?: boolean;
}

const ServiceCountyCounty_FormViewModelContext = createContext<ServiceCountyCounty_FormViewModel>({} as any);
export const useServiceCountyCounty_FormViewModel = () => {
  const context = useContext(ServiceCountyCounty_FormViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceCountyCounty_FormViewModel must be used within a(n) ServiceCountyCounty_FormViewModelProvider',
    );
  }
  return context;
};

export const useServiceUserAdminCountiesAccessFormPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceCounty>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceCounty) => Promise<void>,
) => Promise<DialogResult<ServiceCountyStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceCounty>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceCounty) => Promise<void>,
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
          <ServiceUserAdminCountiesAccessFormPage
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

export const convertServiceUserAdminCountiesAccessFormPagePayload = (
  attributeName: keyof ServiceCounty,
  value: any,
): any => {
  return value;
};

const ServiceCountyCounty_FormDialogContainer = lazy(
  () => import('~/containers/Service/County/County_Form/ServiceCountyCounty_FormDialogContainer'),
);

export interface ServiceUserAdminCountiesAccessFormPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceCounty>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceCounty) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCountyStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_8DntEIXgEe2kLcMqsIbMgQ)/AccessFormPageDefinition
// Name: service::User::adminCounties::AccessFormPage
export default function ServiceUserAdminCountiesAccessFormPage(props: ServiceUserAdminCountiesAccessFormPageProps) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const userServiceForAdminCountiesImpl = useMemo(() => new UserServiceForAdminCountiesImpl(judoAxiosProvider), []);

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
  const [data, setData] = useState<ServiceCountyStored>({} as ServiceCountyStored);
  const [validation, setValidation] = useState<Map<keyof ServiceCounty, string>>(
    new Map<keyof ServiceCounty, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceCountyStored, any>>(
    {} as unknown as Record<keyof ServiceCountyStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceCounty, value: any) => void = useCallback(
    (attributeName: keyof ServiceCounty, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserAdminCountiesAccessFormPagePayload(attributeName, value);
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
    await createAction();
  };
  const refresh = async () => {};

  // Validation
  const validate: (data: ServiceCounty) => Promise<void> = async (data) => {
    try {
      if (ownerValidation) {
        await ownerValidation(data);
      } else {
        await userServiceForAdminCountiesImpl.validateCreate(data);
      }
    } catch (error: any) {
      if (isDraft && isErrorNestedValidationError(error, 'adminCounties')) {
        throw error;
      }
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCountyCounty_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ADMIN_COUNTIES_ACCESS_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCountyCounty_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    submit,
  );

  // Dialog hooks
  const openServiceUserAdminCountiesAccessViewPage = useServiceUserAdminCountiesAccessViewPage();

  // Action section
  const getPageTitle = (data: ServiceCounty): string => {
    return t('service.County.County_Form', { defaultValue: 'County Form' });
  };
  const backAction = async () => {
    onClose();
  };
  const createAction = async (openCreated?: boolean) => {
    try {
      setIsLoading(true);
      const payload: typeof payloadDiff.current = cleanUpPayload(payloadDiff.current);
      const { data: res } = await userServiceForAdminCountiesImpl.create(payload);
      if (customActions?.postCreateAction) {
        await customActions.postCreateAction(data, res, onSubmit, onClose, openCreated);
      } else {
        showSuccessSnack(t('judo.action.create.success', { defaultValue: 'Create successful' }));
        await onSubmit(res);
        if (openCreated) {
          await openServiceUserAdminCountiesAccessViewPage(res!);
        }
      }
    } catch (error) {
      handleError<ServiceCounty>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<JudoRestResponse<ServiceCounty>> => {
    try {
      setIsLoading(true);
      const response = await userServiceForAdminCountiesImpl.getTemplate();
      const { data: result } = response;
      setData(result as ServiceCountyStored);
      payloadDiff.current = {
        ...(result as Record<keyof ServiceCountyStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      if (templateDataOverride) {
        setData((prevData) => ({ ...prevData, ...templateDataOverride }));
        payloadDiff.current = {
          ...(templateDataOverride as Record<keyof ServiceCountyStored, any>),
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

  const actions: ServiceCountyCounty_FormDialogActions = {
    getPageTitle,
    backAction,
    createAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceCountyCounty_FormViewModel = {
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
    <ServiceCountyCounty_FormViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_8DntEIXgEe2kLcMqsIbMgQ)/AccessFormPageDefinition"
          data-page-name="service::User::adminCounties::AccessFormPage"
        />
        <ServiceCountyCounty_FormDialogContainer
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
    </ServiceCountyCounty_FormViewModelContext.Provider>
  );
}
