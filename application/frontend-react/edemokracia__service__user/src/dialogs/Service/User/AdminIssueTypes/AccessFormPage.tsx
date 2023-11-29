//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, useMemo, lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';
import type { ServiceIssueTypeIssueType_FormDialogActions } from '~/containers/Service/IssueType/IssueType_Form/ServiceIssueTypeIssueType_FormDialogContainer';
import type {
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  VoteType,
} from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForAdminIssueTypesImpl } from '~/services/data-axios/UserServiceForAdminIssueTypesImpl';

export type ServiceIssueTypeIssueType_FormDialogActionsExtended = ServiceIssueTypeIssueType_FormDialogActions & {};

export const SERVICE_USER_ADMIN_ISSUE_TYPES_ACCESS_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueTypeIssueType_FormActionsHook';
export type ServiceIssueTypeIssueType_FormActionsHook = (
  ownerData: any,
  data: ServiceIssueTypeStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueType, value: any) => void,
) => ServiceIssueTypeIssueType_FormDialogActionsExtended;

export const useServiceUserAdminIssueTypesAccessFormPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceIssueTypeStored>>) => {
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
          <ServiceUserAdminIssueTypesAccessFormPage
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

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueTypeStored) => Promise<void>;
}

// XMIID: User/(esm/_-T3OwNu-Ee2Bgcx6em3jZg)/AccessFormPageDefinition
// Name: service::User::adminIssueTypes::AccessFormPage
export default function ServiceUserAdminIssueTypesAccessFormPage(props: ServiceUserAdminIssueTypesAccessFormPageProps) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const userServiceForAdminIssueTypesImpl = useMemo(() => new UserServiceForAdminIssueTypesImpl(judoAxiosProvider), []);

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

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueTypeIssueType_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ADMIN_ISSUE_TYPES_ACCESS_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueTypeIssueType_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.IssueType.IssueType_Form', { defaultValue: 'IssueType Form' });

  // Private actions
  const submit = async () => {
    await createAction();
  };

  // Action section
  const backAction = async () => {
    onClose();
  };
  const createAction = async () => {
    try {
      setIsLoading(true);
      const res = await userServiceForAdminIssueTypesImpl.create(data);
      showSuccessSnack(t('judo.action.create.success', { defaultValue: 'Create successful' }));
      onSubmit(res);
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
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceIssueTypeIssueType_FormDialogActions = {
    backAction,
    createAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.getTemplateAction!();
  }, []);

  return (
    <div
      id="User/(esm/_-T3OwNu-Ee2Bgcx6em3jZg)/AccessFormPageDefinition"
      data-page-name="service::User::adminIssueTypes::AccessFormPage"
    >
      <Suspense>
        <ServiceIssueTypeIssueType_FormDialogContainer
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
