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
import { serviceVoteDefinitionServiceImpl } from '~/services/data-axios';
export type RatingVoteInputRatingVoteInput_FormDialogActionsExtended =
  RatingVoteInputRatingVoteInput_FormDialogActions & {
    postVoteRatingForVoteDefinitionAction?: (
      onSubmit: (result?: RatingVoteInputStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => Promise<void>;
  };

export const SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_VOTE_RATING_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'RatingVoteInputRatingVoteInput_FormActionsHook';
export type RatingVoteInputRatingVoteInput_FormActionsHook = (
  ownerData: any,
  data: RatingVoteInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof RatingVoteInput, value: any) => void,
) => RatingVoteInputRatingVoteInput_FormDialogActionsExtended;

export const useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm = (): ((
  ownerData: any,
) => Promise<DialogResult<RatingVoteInputStored>>) => {
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
          <ServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm
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

export const convertServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputFormPayload = (
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

export interface ServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputFormProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: RatingVoteInputStored) => Promise<void>;
}

// XMIID: User/(esm/_T5_dsI4jEe29qs15q2b6yw)/OperationUnmappedInputPageDefinition
// Name: service::VoteDefinition::VoteDefinition_View_Edit::voteRating::Input::Form
// Open in dialog: true
export default function ServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(
  props: ServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputFormProps,
) {
  const { ownerData, onClose, onSubmit } = props;

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
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
        convertServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputFormPayload(attributeName, value);
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
  const { service: customActionsHook } = useTrackService<RatingVoteInputRatingVoteInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_VOTE_RATING_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: RatingVoteInputRatingVoteInput_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('RatingVoteInput.RatingVoteInput_Form', { defaultValue: 'RatingVoteInput Form' });

  // Action section
  const backAction = async () => {
    onClose();
  };
  const voteRatingForVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceVoteDefinitionServiceImpl.voteRating(ownerData, data);

      if (customActions?.postVoteRatingForVoteDefinitionAction) {
        await customActions.postVoteRatingForVoteDefinitionAction(
          onSubmit,
          onClose,
        );
      } else {
        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        onSubmit();
      }
    } catch (error) {
      handleError<RatingVoteInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<RatingVoteInput> => {
    try {
      setIsLoading(true);
      const result = await serviceVoteDefinitionServiceImpl.getTemplateForVoteRating();

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
    backAction,
    voteRatingForVoteDefinitionAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.getTemplateAction!();
  }, []);

  return (
    <div
      id="User/(esm/_T5_dsI4jEe29qs15q2b6yw)/OperationUnmappedInputPageDefinition"
      data-page-name="service::VoteDefinition::VoteDefinition_View_Edit::voteRating::Input::Form"
    >
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
    </div>
  );
}
