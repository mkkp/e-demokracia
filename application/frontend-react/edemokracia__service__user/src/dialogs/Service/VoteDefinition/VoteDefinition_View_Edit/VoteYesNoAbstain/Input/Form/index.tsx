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
import type { YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActions } from '~/containers/YesNoAbstainVoteInput/YesNoAbstainVoteInput_Form/YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogContainer';
import type {
  YesNoAbstainVoteInput,
  YesNoAbstainVoteInputQueryCustomizer,
  YesNoAbstainVoteInputStored,
  YesNoAbstainVoteValue,
} from '~/services/data-api';
import { serviceVoteDefinitionServiceImpl } from '~/services/data-axios';

export const useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm = (): ((
  ownerData: any,
) => Promise<DialogResult<YesNoAbstainVoteInputStored>>) => {
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
          <ServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm
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

export const convertServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputFormPayload = (
  attributeName: keyof YesNoAbstainVoteInput,
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

const YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogContainer = lazy(
  () =>
    import(
      '~/containers/YesNoAbstainVoteInput/YesNoAbstainVoteInput_Form/YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogContainer'
    ),
);

export interface ServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputFormProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: YesNoAbstainVoteInputStored) => void;
}

// Name: service::VoteDefinition::VoteDefinition_View_Edit::voteYesNoAbstain::Input::Form
export default function ServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(
  props: ServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputFormProps,
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
  const [data, setData] = useState<YesNoAbstainVoteInputStored>({} as YesNoAbstainVoteInputStored);
  const [validation, setValidation] = useState<Map<keyof YesNoAbstainVoteInput, string>>(
    new Map<keyof YesNoAbstainVoteInput, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof YesNoAbstainVoteInputStored, any>>(
    {} as unknown as Record<keyof YesNoAbstainVoteInputStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof YesNoAbstainVoteInput, value: any) => void = useCallback(
    (attributeName: keyof YesNoAbstainVoteInput, value: any) => {
      payloadDiff.current![attributeName] =
        convertServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputFormPayload(attributeName, value);
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
  const title: string = t('YesNoAbstainVoteInput.YesNoAbstainVoteInput_Form', {
    defaultValue: 'YesNoAbstainVoteInput Form',
  });

  // Action section
  const yesNoAbstainVoteInputYesNoAbstainVoteInput_FormBack = async () => {
    onClose();
  };
  const serviceVoteDefinitionVoteDefinition_View_EditTabBarYesnoabstainvoteVoteYesNoAbstain = async () => {
    try {
      setIsLoading(true);
      await serviceVoteDefinitionServiceImpl.voteYesNoAbstain(ownerData, data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      onSubmit();
    } catch (error) {
      handleError<YesNoAbstainVoteInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const yesNoAbstainVoteInputYesNoAbstainVoteInput_FormGetTemplate = async (): Promise<YesNoAbstainVoteInput> => {
    try {
      setIsLoading(true);
      const result = await serviceVoteDefinitionServiceImpl.getTemplateForVoteYesNoAbstain();

      setData(result as YesNoAbstainVoteInputStored);

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActions = {
    yesNoAbstainVoteInputYesNoAbstainVoteInput_FormBack,
    serviceVoteDefinitionVoteDefinition_View_EditTabBarYesnoabstainvoteVoteYesNoAbstain,
    yesNoAbstainVoteInputYesNoAbstainVoteInput_FormGetTemplate,
  };

  // Effect section
  useEffect(() => {
    actions.yesNoAbstainVoteInputYesNoAbstainVoteInput_FormGetTemplate!();
  }, []);

  return (
    <>
      <Suspense>
        <YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogContainer
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
