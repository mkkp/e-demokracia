//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
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
import type { ServiceIssueTypeIssueType_FormDialogActions } from '~/containers/Service/IssueType/IssueType_Form/ServiceIssueTypeIssueType_FormDialogContainer';
import type {
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  VoteType,
} from '~/services/data-api';
import { userServiceForAdminIssueTypesImpl } from '~/services/data-axios';

export const useServiceUserAdminIssueTypesAccessFormPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceIssueTypeStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'xs',
        onClose: (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceUserAdminIssueTypesAccessFormPage
            ownerData={ownerData}
            onClose={() => {
              closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={(result) => {
              closeDialog();
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

const ServiceIssueTypeIssueType_FormDialogContainer = lazy(
  () => import('~/containers/Service/IssueType/IssueType_Form/ServiceIssueTypeIssueType_FormDialogContainer'),
);

export interface ServiceUserAdminIssueTypesAccessFormPageProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: ServiceIssueTypeStored) => void;
}

// Name: service::User::adminIssueTypes::Access::Form::Page
export default function ServiceUserAdminIssueTypesAccessFormPage(props: ServiceUserAdminIssueTypesAccessFormPageProps) {
  const { ownerData, onClose, onSubmit } = props;

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { navigate, back } = useJudoNavigation();
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

  // Dialog hooks

  // Calculated section
  const title: string = t('Service.IssueType.IssueType_Form', { defaultValue: 'IssueType Form' });

  // Action section
  const serviceIssueTypeIssueType_FormBack = async () => {
    onClose();
  };
  const serviceIssueTypeIssueType_FormCreate = async () => {
    try {
      setIsLoading(true);
      const res = await userServiceForAdminIssueTypesImpl.create(data);

      enqueueSnackbar(t('judo.action.create.success', { defaultValue: 'Create successful' }), {
        variant: 'success',
        ...toastConfig.success,
      });

      onSubmit(res);
    } catch (error) {
      handleError<ServiceIssueType>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceIssueTypeIssueType_FormGetTemplate = async (): Promise<ServiceIssueType> => {
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
    serviceIssueTypeIssueType_FormBack,
    serviceIssueTypeIssueType_FormCreate,
    serviceIssueTypeIssueType_FormGetTemplate,
  };

  // Effect section
  useEffect(() => {
    actions.serviceIssueTypeIssueType_FormGetTemplate!();
  }, []);

  return (
    <>
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
        />
      </Suspense>
    </>
  );
}
