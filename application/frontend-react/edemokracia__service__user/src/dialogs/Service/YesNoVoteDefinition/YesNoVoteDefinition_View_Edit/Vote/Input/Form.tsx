//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
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
import type { YesNoVoteInputYesNoVoteInput_FormDialogActions } from '~/containers/YesNoVoteInput/YesNoVoteInput_Form/YesNoVoteInputYesNoVoteInput_FormDialogContainer';
import type {
  YesNoVoteInput,
  YesNoVoteInputQueryCustomizer,
  YesNoVoteInputStored,
  YesNoVoteValue,
} from '~/services/data-api';
import { serviceYesNoVoteDefinitionServiceImpl } from '~/services/data-axios';
export type YesNoVoteInputYesNoVoteInput_FormDialogActionsExtended = YesNoVoteInputYesNoVoteInput_FormDialogActions & {
  postVoteForYesNoVoteDefinitionAction?: (
    onSubmit: (result?: YesNoVoteInputStored) => Promise<void>,
    onClose: () => Promise<void>,
  ) => Promise<void>;
};

export const SERVICE_YES_NO_VOTE_DEFINITION_YES_NO_VOTE_DEFINITION_VIEW_EDIT_VOTE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'YesNoVoteInputYesNoVoteInput_FormActionsHook';
export type YesNoVoteInputYesNoVoteInput_FormActionsHook = (
  ownerData: any,
  data: YesNoVoteInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof YesNoVoteInput, value: any) => void,
) => YesNoVoteInputYesNoVoteInput_FormDialogActionsExtended;

export const useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm = (): ((
  ownerData: any,
) => Promise<DialogResult<YesNoVoteInputStored>>) => {
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
          <ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm
            ownerData={ownerData}
            onClose={async () => {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={async () => {
              await closeDialog();
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

  onClose: () => Promise<void>;
  onSubmit: (result?: YesNoVoteInputStored) => Promise<void>;
}

// XMIID: User/(esm/_eMuv8FoSEe6_67aMO2jOsw)/OperationUnmappedInputPageDefinition
// Name: service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit::vote::Input::Form
export default function ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputFormProps,
) {
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

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<YesNoVoteInputYesNoVoteInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_YES_NO_VOTE_DEFINITION_YES_NO_VOTE_DEFINITION_VIEW_EDIT_VOTE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: YesNoVoteInputYesNoVoteInput_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('YesNoVoteInput.YesNoVoteInput_Form', { defaultValue: 'YesNoVoteInput Form' });

  // Action section
  const backAction = async () => {
    onClose();
  };
  const voteForYesNoVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceYesNoVoteDefinitionServiceImpl.vote(ownerData, data);
      if (customActions?.postVoteForYesNoVoteDefinitionAction) {
        await customActions.postVoteForYesNoVoteDefinitionAction(
          onSubmit,
          onClose,
        );
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        onSubmit();
      }
    } catch (error) {
      handleError<YesNoVoteInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<YesNoVoteInput> => {
    try {
      setIsLoading(true);
      const result = await serviceYesNoVoteDefinitionServiceImpl.getTemplateOnVote();
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
    backAction,
    voteForYesNoVoteDefinitionAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.getTemplateAction!();
  }, []);

  return (
    <div
      id="User/(esm/_eMuv8FoSEe6_67aMO2jOsw)/OperationUnmappedInputPageDefinition"
      data-page-name="service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit::vote::Input::Form"
    >
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
    </div>
  );
}