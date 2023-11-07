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
import type { ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogActions } from '~/containers/Service/SelectAnswerVoteSelection/SelectAnswerVoteSelection_Form/ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogContainer';
import type {
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
} from '~/services/data-api';
import { serviceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl } from '~/services/data-axios';

export const useServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceSelectAnswerVoteSelectionStored>>) => {
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
          <ServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage
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

export const convertServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPagePayload = (
  attributeName: keyof ServiceSelectAnswerVoteSelection,
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

const ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteSelection/SelectAnswerVoteSelection_Form/ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogContainer'
    ),
);

export interface ServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPageProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: ServiceSelectAnswerVoteSelectionStored) => void;
}

// Name: service::SelectAnswerVoteDefinition::voteSelections::Relation::Form::Page
export default function ServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage(
  props: ServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPageProps,
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
  const [data, setData] = useState<ServiceSelectAnswerVoteSelectionStored>(
    {} as ServiceSelectAnswerVoteSelectionStored,
  );
  const [validation, setValidation] = useState<Map<keyof ServiceSelectAnswerVoteSelection, string>>(
    new Map<keyof ServiceSelectAnswerVoteSelection, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceSelectAnswerVoteSelectionStored, any>>(
    {} as unknown as Record<keyof ServiceSelectAnswerVoteSelectionStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceSelectAnswerVoteSelection, value: any) => void = useCallback(
    (attributeName: keyof ServiceSelectAnswerVoteSelection, value: any) => {
      payloadDiff.current![attributeName] =
        convertServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPagePayload(attributeName, value);
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
  const title: string = t('Service.SelectAnswerVoteSelection.SelectAnswerVoteSelection_Form', {
    defaultValue: 'SelectAnswerVoteSelection Form',
  });

  // Action section
  const serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormBack = async () => {
    onClose();
  };
  const serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormCreate = async () => {
    try {
      setIsLoading(true);
      const res = await serviceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl.create(ownerData, data);

      enqueueSnackbar(t('judo.action.create.success', { defaultValue: 'Create successful' }), {
        variant: 'success',
        ...toastConfig.success,
      });

      onSubmit(res);
    } catch (error) {
      handleError<ServiceSelectAnswerVoteSelection>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormGetTemplate =
    async (): Promise<ServiceSelectAnswerVoteSelection> => {
      try {
        setIsLoading(true);
        const result = await serviceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl.getTemplate();

        setData(result as ServiceSelectAnswerVoteSelectionStored);

        return result;
      } catch (error) {
        handleError(error);
        return Promise.reject(error);
      } finally {
        setIsLoading(false);
      }
    };

  const actions: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogActions = {
    serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormBack,
    serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormCreate,
    serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormGetTemplate,
  };

  // Effect section
  useEffect(() => {
    actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormGetTemplate!();
  }, []);

  return (
    <>
      <Suspense>
        <ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogContainer
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
