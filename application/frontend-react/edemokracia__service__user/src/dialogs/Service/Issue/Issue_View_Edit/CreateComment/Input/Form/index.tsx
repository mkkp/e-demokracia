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
import type { CreateCommentInputCreateCommentInput_FormDialogActions } from '~/containers/CreateCommentInput/CreateCommentInput_Form/CreateCommentInputCreateCommentInput_FormDialogContainer';
import type {
  CreateCommentInput,
  CreateCommentInputQueryCustomizer,
  CreateCommentInputStored,
} from '~/services/data-api';
import { serviceIssueServiceImpl } from '~/services/data-axios';

export const useServiceIssueIssue_View_EditCreateCommentInputForm = (): ((
  ownerData: any,
) => Promise<DialogResult<CreateCommentInputStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'md',
        onClose: (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceIssueIssue_View_EditCreateCommentInputForm
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

export const convertServiceIssueIssue_View_EditCreateCommentInputFormPayload = (
  attributeName: keyof CreateCommentInput,
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

const CreateCommentInputCreateCommentInput_FormDialogContainer = lazy(
  () =>
    import(
      '~/containers/CreateCommentInput/CreateCommentInput_Form/CreateCommentInputCreateCommentInput_FormDialogContainer'
    ),
);

export interface ServiceIssueIssue_View_EditCreateCommentInputFormProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: CreateCommentInputStored) => void;
}

// Name: service::Issue::Issue_View_Edit::createComment::Input::Form
export default function ServiceIssueIssue_View_EditCreateCommentInputForm(
  props: ServiceIssueIssue_View_EditCreateCommentInputFormProps,
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
  const [data, setData] = useState<CreateCommentInputStored>({} as CreateCommentInputStored);
  const [validation, setValidation] = useState<Map<keyof CreateCommentInput, string>>(
    new Map<keyof CreateCommentInput, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof CreateCommentInputStored, any>>(
    {} as unknown as Record<keyof CreateCommentInputStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof CreateCommentInput, value: any) => void = useCallback(
    (attributeName: keyof CreateCommentInput, value: any) => {
      payloadDiff.current![attributeName] = convertServiceIssueIssue_View_EditCreateCommentInputFormPayload(
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
  const title: string = t('CreateCommentInput.CreateCommentInput_Form', { defaultValue: 'CreateCommentInput Form' });

  // Action section
  const createCommentInputCreateCommentInput_FormBack = async () => {
    onClose();
  };
  const serviceIssueIssue_View_EditOtherCommentsActionsCreateComment = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.createComment(ownerData, data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      onSubmit();
    } catch (error) {
      handleError<CreateCommentInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const createCommentInputCreateCommentInput_FormGetTemplate = async (): Promise<CreateCommentInput> => {
    try {
      setIsLoading(true);
      const result = await serviceIssueServiceImpl.getTemplateForCreateComment();

      setData(result as CreateCommentInputStored);

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: CreateCommentInputCreateCommentInput_FormDialogActions = {
    createCommentInputCreateCommentInput_FormBack,
    serviceIssueIssue_View_EditOtherCommentsActionsCreateComment,
    createCommentInputCreateCommentInput_FormGetTemplate,
  };

  // Effect section
  useEffect(() => {
    actions.createCommentInputCreateCommentInput_FormGetTemplate!();
  }, []);

  return (
    <>
      <Suspense>
        <CreateCommentInputCreateCommentInput_FormDialogContainer
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
