//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type { RatingVoteInputRatingVoteInput_FormDialogActions } from '~/containers/RatingVoteInput/RatingVoteInput_Form/RatingVoteInputRatingVoteInput_FormDialogContainer';
import { useCRUDDialog, useSnacks } from '~/hooks';
import type { RatingVoteInput, RatingVoteInputQueryCustomizer, RatingVoteInputStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceRatingVoteDefinitionServiceImpl } from '~/services/data-axios/ServiceRatingVoteDefinitionServiceImpl';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type RatingVoteInputRatingVoteInput_FormDialogActionsExtended =
  RatingVoteInputRatingVoteInput_FormDialogActions & {
    postVoteForRatingVoteDefinitionAction?: (
      onSubmit: (result?: RatingVoteInputStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => Promise<void>;
  };

export const SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_VIEW_EDIT_VOTE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'RatingVoteInputRatingVoteInput_FormActionsHook';
export type RatingVoteInputRatingVoteInput_FormActionsHook = (
  ownerData: any,
  data: RatingVoteInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof RatingVoteInput, value: any) => void,
) => RatingVoteInputRatingVoteInput_FormDialogActionsExtended;

export const useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm = (): ((
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
          <ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm
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

export const convertServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputFormPayload = (
  attributeName: keyof RatingVoteInput,
  value: any,
): any => {
  return value;
};

const RatingVoteInputRatingVoteInput_FormDialogContainer = lazy(
  () => import('~/containers/RatingVoteInput/RatingVoteInput_Form/RatingVoteInputRatingVoteInput_FormDialogContainer'),
);

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputFormProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: RatingVoteInputStored) => Promise<void>;
}

// XMIID: User/(esm/_NHnv2FsoEe6Mx9dH3yj5gQ)/OperationUnmappedInputPageDefinition
// Name: service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::vote::Input::Form
export default function ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm(
  props: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputFormProps,
) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const serviceRatingVoteDefinitionServiceImpl = useMemo(
    () => new ServiceRatingVoteDefinitionServiceImpl(judoAxiosProvider),
    [],
  );

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

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<RatingVoteInputRatingVoteInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_VIEW_EDIT_VOTE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
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

  // Private actions
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    onClose();
  };
  const voteForRatingVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceRatingVoteDefinitionServiceImpl.vote(ownerData, payloadDiff.current);
      if (customActions?.postVoteForRatingVoteDefinitionAction) {
        await customActions.postVoteForRatingVoteDefinitionAction(onSubmit, onClose);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
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
      const result = await serviceRatingVoteDefinitionServiceImpl.getTemplateOnVote();
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
    voteForRatingVoteDefinitionAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.getTemplateAction!();
  }, []);

  return (
    <div
      id="User/(esm/_NHnv2FsoEe6Mx9dH3yj5gQ)/OperationUnmappedInputPageDefinition"
      data-page-name="service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::vote::Input::Form"
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
          submit={submit}
        />
      </Suspense>
    </div>
  );
}
