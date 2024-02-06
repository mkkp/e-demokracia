//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, createContext, lazy, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type {
  RatingVoteInputRatingVoteInput_FormDialogActions,
  RatingVoteInputRatingVoteInput_FormDialogProps,
} from '~/containers/RatingVoteInput/RatingVoteInput_Form/RatingVoteInputRatingVoteInput_FormDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type { RatingVoteInput, RatingVoteInputQueryCustomizer, RatingVoteInputStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceVoteDefinitionServiceImpl } from '~/services/data-axios/ServiceVoteDefinitionServiceImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type RatingVoteInputRatingVoteInput_FormDialogActionsExtended =
  RatingVoteInputRatingVoteInput_FormDialogActions & {
    postVoteRatingForVoteDefinitionAction?: (
      onSubmit: (result?: RatingVoteInputStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => Promise<void>;
    postGetTemplateAction?: (
      ownerData: any,
      data: RatingVoteInput,
      storeDiff: (attributeName: keyof RatingVoteInput, value: any) => void,
    ) => Promise<void>;
    postCreateAction?: (
      data: RatingVoteInput,
      res: RatingVoteInputStored,
      onSubmit: (result?: RatingVoteInputStored) => Promise<void>,
      onClose: () => Promise<void>,
      openCreated?: boolean,
    ) => Promise<void>;
  };

export const SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_VOTE_RATING_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_VOTE_RATING_INPUT_FORM_ACTIONS_HOOK';
export type RatingVoteInputRatingVoteInput_FormActionsHook = (
  ownerData: any,
  data: RatingVoteInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof RatingVoteInput, value: any) => void,
  submit: () => Promise<void>,
) => RatingVoteInputRatingVoteInput_FormDialogActionsExtended;

export interface RatingVoteInputRatingVoteInput_FormViewModel extends RatingVoteInputRatingVoteInput_FormDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<RatingVoteInput>;
  isDraft?: boolean;
}

const RatingVoteInputRatingVoteInput_FormViewModelContext = createContext<RatingVoteInputRatingVoteInput_FormViewModel>(
  {} as any,
);
export const useRatingVoteInputRatingVoteInput_FormViewModel = () => {
  const context = useContext(RatingVoteInputRatingVoteInput_FormViewModelContext);
  if (!context) {
    throw new Error(
      'useRatingVoteInputRatingVoteInput_FormViewModel must be used within a(n) RatingVoteInputRatingVoteInput_FormViewModelProvider',
    );
  }
  return context;
};

export const useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm = (): ((
  ownerData: any,
  templateDataOverride?: Partial<RatingVoteInput>,
  isDraft?: boolean,
  ownerValidation?: (data: RatingVoteInput) => Promise<void>,
) => Promise<DialogResult<RatingVoteInputStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<RatingVoteInput>,
    isDraft?: boolean,
    ownerValidation?: (data: RatingVoteInput) => Promise<void>,
  ) =>
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
            templateDataOverride={templateDataOverride}
            isDraft={isDraft}
            ownerValidation={ownerValidation}
            onClose={async () => {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={async (isDraft) => {
              await closeDialog();
              resolve({
                result: isDraft ? 'submit-draft' : 'submit',
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
  return value;
};

const RatingVoteInputRatingVoteInput_FormDialogContainer = lazy(
  () => import('~/containers/RatingVoteInput/RatingVoteInput_Form/RatingVoteInputRatingVoteInput_FormDialogContainer'),
);

export interface ServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputFormProps {
  ownerData: any;

  templateDataOverride?: Partial<RatingVoteInput>;
  isDraft?: boolean;
  ownerValidation?: (data: RatingVoteInput) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: RatingVoteInputStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_T5_dsI4jEe29qs15q2b6yw)/OperationUnmappedInputPageDefinition
// Name: service::VoteDefinition::VoteDefinition_View_Edit::voteRating::Input::Form
export default function ServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(
  props: ServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputFormProps,
) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceVoteDefinitionServiceImpl = useMemo(() => new ServiceVoteDefinitionServiceImpl(judoAxiosProvider), []);

  // Hooks section
  const { t } = useTranslation();
  const { showSuccessSnack, showErrorSnack } = useSnacks();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const { setLatestViewData } = useViewData();
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

  // Private actions
  const submit = async () => {
    await voteRatingForVoteDefinitionAction();
  };
  const refresh = async () => {};

  // Validation
  const validate: (data: RatingVoteInput) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<RatingVoteInputRatingVoteInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_VOTE_RATING_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: RatingVoteInputRatingVoteInput_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    submit,
  );

  // Dialog hooks

  // Action section
  const getPageTitle = (data: RatingVoteInput): string => {
    return t('RatingVoteInput.RatingVoteInput_Form', { defaultValue: 'RatingVoteInput Form' });
  };
  const backAction = async () => {
    onClose();
  };
  const voteRatingForVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceVoteDefinitionServiceImpl.voteRating(ownerData, cleanUpPayload(payloadDiff.current));
      if (customActions?.postVoteRatingForVoteDefinitionAction) {
        await customActions.postVoteRatingForVoteDefinitionAction(onSubmit, onClose);
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
      const result = await serviceVoteDefinitionServiceImpl.getTemplateOnVoteRating();
      setData(result as RatingVoteInputStored);
      payloadDiff.current = {
        ...(result as Record<keyof RatingVoteInputStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      if (templateDataOverride) {
        setData((prevData) => ({ ...prevData, ...templateDataOverride }));
        payloadDiff.current = {
          ...(templateDataOverride as Record<keyof RatingVoteInputStored, any>),
        };
      }
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: RatingVoteInputRatingVoteInput_FormDialogActions = {
    getPageTitle,
    backAction,
    voteRatingForVoteDefinitionAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: RatingVoteInputRatingVoteInput_FormViewModel = {
    onClose,
    actions,
    ownerData,
    isLoading,
    setIsLoading,
    editMode,
    setEditMode,
    refresh,
    refreshCounter,
    submit,
    data,
    validation,
    setValidation,
    storeDiff,
    isFormUpdateable,
    isFormDeleteable,
    templateDataOverride,
    isDraft,
  };

  // Effect section
  useEffect(() => {
    actions.getTemplateAction!();
  }, []);

  return (
    <RatingVoteInputRatingVoteInput_FormViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_T5_dsI4jEe29qs15q2b6yw)/OperationUnmappedInputPageDefinition"
          data-page-name="service::VoteDefinition::VoteDefinition_View_Edit::voteRating::Input::Form"
        />
        <RatingVoteInputRatingVoteInput_FormDialogContainer
          ownerData={ownerData}
          onClose={onClose}
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
          isDraft={isDraft}
        />
      </Suspense>
    </RatingVoteInputRatingVoteInput_FormViewModelContext.Provider>
  );
}
