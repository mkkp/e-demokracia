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
import type { YesNoVoteInputYesNoVoteInput_FormDialogActions } from '~/containers/YesNoVoteInput/YesNoVoteInput_Form/YesNoVoteInputYesNoVoteInput_FormDialogContainer';
import type {
  YesNoVoteInput,
  YesNoVoteInputQueryCustomizer,
  YesNoVoteInputStored,
  YesNoVoteValue,
} from '~/services/data-api';
import { serviceYesNoVoteDefinitionServiceImpl } from '~/services/data-axios';

export const useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm = (): ((
  ownerData: any,
) => Promise<DialogResult<YesNoVoteInputStored>>) => {
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
          <ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm
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

export const convertServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputFormPayload = (
  attributeName: keyof YesNoVoteInput,
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

const YesNoVoteInputYesNoVoteInput_FormDialogContainer = lazy(
  () => import('~/containers/YesNoVoteInput/YesNoVoteInput_Form/YesNoVoteInputYesNoVoteInput_FormDialogContainer'),
);

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputFormProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: YesNoVoteInputStored) => void;
}

// Name: service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit::vote::Input::Form
export default function ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputFormProps,
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
  const [data, setData] = useState<YesNoVoteInputStored>({} as YesNoVoteInputStored);
  const [validation, setValidation] = useState<Map<keyof YesNoVoteInput, string>>(
    new Map<keyof YesNoVoteInput, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof YesNoVoteInputStored, any>>(
    {} as unknown as Record<keyof YesNoVoteInputStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof YesNoVoteInput, value: any) => void = useCallback(
    (attributeName: keyof YesNoVoteInput, value: any) => {
      payloadDiff.current![attributeName] =
        convertServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputFormPayload(attributeName, value);
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
  const title: string = t('YesNoVoteInput.YesNoVoteInput_Form', { defaultValue: 'YesNoVoteInput Form' });

  // Action section
  const yesNoVoteInputYesNoVoteInput_FormBack = async () => {
    onClose();
  };
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVote = async () => {
    try {
      setIsLoading(true);
      await serviceYesNoVoteDefinitionServiceImpl.vote(ownerData, data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      onSubmit();
    } catch (error) {
      handleError<YesNoVoteInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const yesNoVoteInputYesNoVoteInput_FormGetTemplate = async (): Promise<YesNoVoteInput> => {
    try {
      setIsLoading(true);
      const result = await serviceYesNoVoteDefinitionServiceImpl.getTemplateForVote();

      setData(result as YesNoVoteInputStored);

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: YesNoVoteInputYesNoVoteInput_FormDialogActions = {
    yesNoVoteInputYesNoVoteInput_FormBack,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVote,
    yesNoVoteInputYesNoVoteInput_FormGetTemplate,
  };

  // Effect section
  useEffect(() => {
    actions.yesNoVoteInputYesNoVoteInput_FormGetTemplate!();
  }, []);

  return (
    <>
      <Suspense>
        <YesNoVoteInputYesNoVoteInput_FormDialogContainer
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
