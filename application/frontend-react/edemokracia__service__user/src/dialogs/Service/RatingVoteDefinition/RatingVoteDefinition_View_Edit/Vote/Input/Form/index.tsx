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
import type { RatingVoteInputRatingVoteInput_FormDialogActions } from '~/containers/RatingVoteInput/RatingVoteInput_Form/RatingVoteInputRatingVoteInput_FormDialogContainer';
import type { RatingVoteInput, RatingVoteInputQueryCustomizer, RatingVoteInputStored } from '~/services/data-api';
import { serviceRatingVoteDefinitionServiceImpl } from '~/services/data-axios';

export const useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm = (): ((
  ownerData: any,
) => Promise<DialogResult<RatingVoteInputStored>>) => {
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
          <ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm
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

export const convertServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputFormPayload = (
  attributeName: keyof RatingVoteInput,
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

const RatingVoteInputRatingVoteInput_FormDialogContainer = lazy(
  () => import('~/containers/RatingVoteInput/RatingVoteInput_Form/RatingVoteInputRatingVoteInput_FormDialogContainer'),
);

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputFormProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: RatingVoteInputStored) => void;
}

// Name: service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::vote::Input::Form
export default function ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm(
  props: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputFormProps,
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
  const [data, setData] = useState<RatingVoteInputStored>({} as RatingVoteInputStored);
  const [validation, setValidation] = useState<Map<keyof RatingVoteInput, string>>(
    new Map<keyof RatingVoteInput, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof RatingVoteInputStored, any>>(
    {} as unknown as Record<keyof RatingVoteInputStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof RatingVoteInput, value: any) => void = useCallback(
    (attributeName: keyof RatingVoteInput, value: any) => {
      payloadDiff.current![attributeName] =
        convertServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputFormPayload(attributeName, value);
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
  const title: string = t('RatingVoteInput.RatingVoteInput_Form', { defaultValue: 'RatingVoteInput Form' });

  // Action section
  const ratingVoteInputRatingVoteInput_FormBack = async () => {
    onClose();
  };
  const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVote = async () => {
    try {
      setIsLoading(true);
      await serviceRatingVoteDefinitionServiceImpl.vote(ownerData, data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      onSubmit();
    } catch (error) {
      handleError<RatingVoteInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const ratingVoteInputRatingVoteInput_FormGetTemplate = async (): Promise<RatingVoteInput> => {
    try {
      setIsLoading(true);
      const result = await serviceRatingVoteDefinitionServiceImpl.getTemplateForVote();

      setData(result as RatingVoteInputStored);

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: RatingVoteInputRatingVoteInput_FormDialogActions = {
    ratingVoteInputRatingVoteInput_FormBack,
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVote,
    ratingVoteInputRatingVoteInput_FormGetTemplate,
  };

  // Effect section
  useEffect(() => {
    actions.ratingVoteInputRatingVoteInput_FormGetTemplate!();
  }, []);

  return (
    <>
      <Suspense>
        <RatingVoteInputRatingVoteInput_FormDialogContainer
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
