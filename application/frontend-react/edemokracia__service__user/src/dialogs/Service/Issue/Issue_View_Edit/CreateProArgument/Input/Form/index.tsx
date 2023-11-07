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
import type { CreateArgumentInputCreateArgumentInput_FormDialogActions } from '~/containers/CreateArgumentInput/CreateArgumentInput_Form/CreateArgumentInputCreateArgumentInput_FormDialogContainer';
import type {
  CreateArgumentInput,
  CreateArgumentInputQueryCustomizer,
  CreateArgumentInputStored,
} from '~/services/data-api';
import { serviceIssueServiceImpl } from '~/services/data-axios';

export const useServiceIssueIssue_View_EditCreateProArgumentInputForm = (): ((
  ownerData: any,
) => Promise<DialogResult<CreateArgumentInputStored>>) => {
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
          <ServiceIssueIssue_View_EditCreateProArgumentInputForm
            ownerData={ownerData}
            onClose={() => {
              closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={() => {
              closeDialog();
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

export interface ServiceIssueIssue_View_EditCreateProArgumentInputFormProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: CreateArgumentInputStored) => void;
}

// Name: service::Issue::Issue_View_Edit::createProArgument::Input::Form
export default function ServiceIssueIssue_View_EditCreateProArgumentInputForm(
  props: ServiceIssueIssue_View_EditCreateProArgumentInputFormProps,
) {
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

  // Dialog hooks

  // Calculated section
  const title: string = t('CreateArgumentInput.CreateArgumentInput_Form', { defaultValue: 'CreateArgumentInput Form' });

  // Action section
  const createArgumentInputCreateArgumentInput_FormBack = async () => {
    onClose();
  };
  const serviceIssueIssue_View_EditOtherArgumentsProsActionsCreateProArgument = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.createProArgument(ownerData, data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      onSubmit();
    } catch (error) {
      handleError<CreateArgumentInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const createArgumentInputCreateArgumentInput_FormGetTemplate = async (): Promise<CreateArgumentInput> => {
    try {
      setIsLoading(true);
      const result = await serviceIssueServiceImpl.getTemplateForCreateProArgument();

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
    createArgumentInputCreateArgumentInput_FormBack,
    serviceIssueIssue_View_EditOtherArgumentsProsActionsCreateProArgument,
    createArgumentInputCreateArgumentInput_FormGetTemplate,
  };

  // Effect section
  useEffect(() => {
    actions.createArgumentInputCreateArgumentInput_FormGetTemplate!();
  }, []);

  return (
    <>
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
    </>
  );
}
