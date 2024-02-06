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
  ServiceIssueTypeIssueType_FormDialogActions,
  ServiceIssueTypeIssueType_FormDialogProps,
} from '~/containers/Service/IssueType/IssueType_Form/ServiceIssueTypeIssueType_FormDialogContainer';
import { useServiceUserAdminIssueTypesAccessViewPage } from '~/dialogs/Service/User/AdminIssueTypes/AccessViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  VoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForAdminIssueTypesImpl } from '~/services/data-axios/UserServiceForAdminIssueTypesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceIssueTypeIssueType_FormDialogActionsExtended = ServiceIssueTypeIssueType_FormDialogActions & {
  postGetTemplateAction?: (
    ownerData: any,
    data: ServiceIssueType,
    storeDiff: (attributeName: keyof ServiceIssueType, value: any) => void,
  ) => Promise<void>;
  postCreateAction?: (
    data: ServiceIssueType,
    res: ServiceIssueTypeStored,
    onSubmit: (result?: ServiceIssueTypeStored) => Promise<void>,
    onClose: () => Promise<void>,
    openCreated?: boolean,
  ) => Promise<void>;
};

export const SERVICE_USER_ADMIN_ISSUE_TYPES_ACCESS_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_ADMIN_ISSUE_TYPES_ACCESS_FORM_PAGE_ACTIONS_HOOK';
export type ServiceIssueTypeIssueType_FormActionsHook = (
  ownerData: any,
  data: ServiceIssueTypeStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueType, value: any) => void,
  submit: () => Promise<void>,
) => ServiceIssueTypeIssueType_FormDialogActionsExtended;

export interface ServiceIssueTypeIssueType_FormViewModel extends ServiceIssueTypeIssueType_FormDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceIssueType>;
  isDraft?: boolean;
}

const ServiceIssueTypeIssueType_FormViewModelContext = createContext<ServiceIssueTypeIssueType_FormViewModel>(
  {} as any,
);
export const useServiceIssueTypeIssueType_FormViewModel = () => {
  const context = useContext(ServiceIssueTypeIssueType_FormViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceIssueTypeIssueType_FormViewModel must be used within a(n) ServiceIssueTypeIssueType_FormViewModelProvider',
    );
  }
  return context;
};

export const useServiceUserAdminIssueTypesAccessFormPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceIssueType>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceIssueType) => Promise<void>,
) => Promise<DialogResult<ServiceIssueTypeStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceIssueType>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceIssueType) => Promise<void>,
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
          <ServiceUserAdminIssueTypesAccessFormPage
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

export const convertServiceUserAdminIssueTypesAccessFormPagePayload = (
  attributeName: keyof ServiceIssueType,
  value: any,
): any => {
  return value;
};

const ServiceIssueTypeIssueType_FormDialogContainer = lazy(
  () => import('~/containers/Service/IssueType/IssueType_Form/ServiceIssueTypeIssueType_FormDialogContainer'),
);

export interface ServiceUserAdminIssueTypesAccessFormPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceIssueType>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceIssueType) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueTypeStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_-T3OwNu-Ee2Bgcx6em3jZg)/AccessFormPageDefinition
// Name: service::User::adminIssueTypes::AccessFormPage
export default function ServiceUserAdminIssueTypesAccessFormPage(props: ServiceUserAdminIssueTypesAccessFormPageProps) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const userServiceForAdminIssueTypesImpl = useMemo(() => new UserServiceForAdminIssueTypesImpl(judoAxiosProvider), []);

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
  const [data, setData] = useState<ServiceIssueTypeStored>({} as ServiceIssueTypeStored);
  const [validation, setValidation] = useState<Map<keyof ServiceIssueType, string>>(
    new Map<keyof ServiceIssueType, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceIssueTypeStored, any>>(
    {} as unknown as Record<keyof ServiceIssueTypeStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceIssueType, value: any) => void = useCallback(
    (attributeName: keyof ServiceIssueType, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserAdminIssueTypesAccessFormPagePayload(
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
    await createAction();
  };
  const refresh = async () => {};

  // Validation
  const validate: (data: ServiceIssueType) => Promise<void> = async (data) => {
    try {
      if (ownerValidation) {
        await ownerValidation(data);
      } else {
        await userServiceForAdminIssueTypesImpl.validateCreate(data);
      }
    } catch (error: any) {
      if (isDraft && isErrorNestedValidationError(error, 'adminIssueTypes')) {
        throw error;
      }
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueTypeIssueType_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ADMIN_ISSUE_TYPES_ACCESS_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueTypeIssueType_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    submit,
  );

  // Dialog hooks
  const openServiceUserAdminIssueTypesAccessViewPage = useServiceUserAdminIssueTypesAccessViewPage();

  // Action section
  const getPageTitle = (data: ServiceIssueType): string => {
    return t('service.IssueType.IssueType_Form', { defaultValue: 'IssueType Form' });
  };
  const backAction = async () => {
    onClose();
  };
  const createAction = async (openCreated?: boolean) => {
    try {
      setIsLoading(true);
      const payload: typeof payloadDiff.current = cleanUpPayload(payloadDiff.current);
      const res = await userServiceForAdminIssueTypesImpl.create(payload);
      if (customActions?.postCreateAction) {
        await customActions.postCreateAction(data, res, onSubmit, onClose, openCreated);
      } else {
        showSuccessSnack(t('judo.action.create.success', { defaultValue: 'Create successful' }));
        await onSubmit(res);
        if (openCreated) {
          await openServiceUserAdminIssueTypesAccessViewPage(res!);
        }
      }
    } catch (error) {
      handleError<ServiceIssueType>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<ServiceIssueType> => {
    try {
      setIsLoading(true);
      const result = await userServiceForAdminIssueTypesImpl.getTemplate();
      setData(result as ServiceIssueTypeStored);
      payloadDiff.current = {
        ...(result as Record<keyof ServiceIssueTypeStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      if (templateDataOverride) {
        setData((prevData) => ({ ...prevData, ...templateDataOverride }));
        payloadDiff.current = {
          ...(templateDataOverride as Record<keyof ServiceIssueTypeStored, any>),
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

  const actions: ServiceIssueTypeIssueType_FormDialogActions = {
    getPageTitle,
    backAction,
    createAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceIssueTypeIssueType_FormViewModel = {
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
    <ServiceIssueTypeIssueType_FormViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_-T3OwNu-Ee2Bgcx6em3jZg)/AccessFormPageDefinition"
          data-page-name="service::User::adminIssueTypes::AccessFormPage"
        />
        <ServiceIssueTypeIssueType_FormDialogContainer
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
    </ServiceIssueTypeIssueType_FormViewModelContext.Provider>
  );
}
