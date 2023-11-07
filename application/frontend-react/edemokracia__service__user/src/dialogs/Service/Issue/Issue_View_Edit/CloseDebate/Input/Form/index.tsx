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
import type { CloseDebateInputCloseDebateInput_FormDialogActions } from '~/containers/CloseDebateInput/CloseDebateInput_Form/CloseDebateInputCloseDebateInput_FormDialogContainer';
import type {
  CloseDebateInput,
  CloseDebateInputQueryCustomizer,
  CloseDebateInputStored,
  CloseDebateOutputVoteDefinitionReferenceStored,
  VoteTypeOnCloseDebate,
} from '~/services/data-api';
import { serviceIssueServiceImpl } from '~/services/data-axios';

export const useServiceIssueIssue_View_EditCloseDebateInputForm = (): ((
  ownerData: any,
) => Promise<DialogResult<CloseDebateOutputVoteDefinitionReferenceStored>>) => {
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
          <ServiceIssueIssue_View_EditCloseDebateInputForm
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

export const convertServiceIssueIssue_View_EditCloseDebateInputFormPayload = (
  attributeName: keyof CloseDebateInput,
  value: any,
): any => {
  const dateTypes: string[] = [];
  const dateTimeTypes: string[] = ['closeAt'];
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

const CloseDebateInputCloseDebateInput_FormDialogContainer = lazy(
  () =>
    import('~/containers/CloseDebateInput/CloseDebateInput_Form/CloseDebateInputCloseDebateInput_FormDialogContainer'),
);

export interface ServiceIssueIssue_View_EditCloseDebateInputFormProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: CloseDebateOutputVoteDefinitionReferenceStored) => void;
}

// Name: service::Issue::Issue_View_Edit::closeDebate::Input::Form
export default function ServiceIssueIssue_View_EditCloseDebateInputForm(
  props: ServiceIssueIssue_View_EditCloseDebateInputFormProps,
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
  const [data, setData] = useState<CloseDebateInputStored>({} as CloseDebateInputStored);
  const [validation, setValidation] = useState<Map<keyof CloseDebateInput, string>>(
    new Map<keyof CloseDebateInput, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof CloseDebateInputStored, any>>(
    {} as unknown as Record<keyof CloseDebateInputStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void = useCallback(
    (attributeName: keyof CloseDebateInput, value: any) => {
      payloadDiff.current![attributeName] = convertServiceIssueIssue_View_EditCloseDebateInputFormPayload(
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
  const title: string = t('CloseDebateInput.CloseDebateInput_Form', { defaultValue: 'CloseDebateInput Form' });

  // Action section
  const closeDebateInputCloseDebateInput_FormBack = async () => {
    onClose();
  };
  const serviceIssueIssue_View_EditActionsPageActionButtonsCloseDebate = async () => {
    try {
      setIsLoading(true);
      const result = await serviceIssueServiceImpl.closeDebate(ownerData, data);

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
    } catch (error) {
      handleError<CloseDebateInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const closeDebateInputCloseDebateInput_FormGetTemplate = async (): Promise<CloseDebateInput> => {
    try {
      setIsLoading(true);
      const result = await serviceIssueServiceImpl.getTemplateForCloseDebate();

      setData(result as CloseDebateInputStored);

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: CloseDebateInputCloseDebateInput_FormDialogActions = {
    closeDebateInputCloseDebateInput_FormBack,
    serviceIssueIssue_View_EditActionsPageActionButtonsCloseDebate,
    closeDebateInputCloseDebateInput_FormGetTemplate,
  };

  // Effect section
  useEffect(() => {
    actions.closeDebateInputCloseDebateInput_FormGetTemplate!();
  }, []);

  return (
    <>
      <Suspense>
        <CloseDebateInputCloseDebateInput_FormDialogContainer
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
