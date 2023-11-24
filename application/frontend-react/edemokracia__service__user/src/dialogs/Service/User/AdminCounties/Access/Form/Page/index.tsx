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
import type { ServiceCountyCounty_FormDialogActions } from '~/containers/Service/County/County_Form/ServiceCountyCounty_FormDialogContainer';
import type { ServiceCounty, ServiceCountyQueryCustomizer, ServiceCountyStored } from '~/services/data-api';
import { userServiceForAdminCountiesImpl } from '~/services/data-axios';
export type ServiceCountyCounty_FormDialogActionsExtended = ServiceCountyCounty_FormDialogActions & {};

export const SERVICE_USER_ADMIN_COUNTIES_ACCESS_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceCountyCounty_FormActionsHook';
export type ServiceCountyCounty_FormActionsHook = (
  ownerData: any,
  data: ServiceCountyStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCounty, value: any) => void,
) => ServiceCountyCounty_FormDialogActionsExtended;

export const useServiceUserAdminCountiesAccessFormPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceCountyStored>>) => {
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
          <ServiceUserAdminCountiesAccessFormPage
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

export const convertServiceUserAdminCountiesAccessFormPagePayload = (
  attributeName: keyof ServiceCounty,
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

const ServiceCountyCounty_FormDialogContainer = lazy(
  () => import('~/containers/Service/County/County_Form/ServiceCountyCounty_FormDialogContainer'),
);

export interface ServiceUserAdminCountiesAccessFormPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCountyStored) => Promise<void>;
}

// XMIID: User/(esm/_8DntEIXgEe2kLcMqsIbMgQ)/AccessFormPageDefinition
// Name: service::User::adminCounties::Access::Form::Page
// Open in dialog: true
export default function ServiceUserAdminCountiesAccessFormPage(props: ServiceUserAdminCountiesAccessFormPageProps) {
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

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCountyCounty_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ADMIN_COUNTIES_ACCESS_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCountyCounty_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.County.County_Form', { defaultValue: 'County Form' });

  // Action section
  const backAction = async () => {
    onClose();
  };
  const createAction = async () => {
    try {
      setIsLoading(true);
      const res = await userServiceForAdminCountiesImpl.create(data);

      showSuccessSnack(t('judo.action.create.success', { defaultValue: 'Create successful' }));

      onSubmit(res);
    } catch (error) {
      handleError<ServiceCounty>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<ServiceCounty> => {
    try {
      setIsLoading(true);
      const result = await userServiceForAdminCountiesImpl.getTemplate();

      setData(result as ServiceCountyStored);

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceCountyCounty_FormDialogActions = {
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
      id="User/(esm/_8DntEIXgEe2kLcMqsIbMgQ)/AccessFormPageDefinition"
      data-page-name="service::User::adminCounties::Access::Form::Page"
    >
      <Suspense>
        <ServiceCountyCounty_FormDialogContainer
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
