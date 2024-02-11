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
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceRatingVoteDefinitionServiceImpl } from '~/services/data-axios/ServiceRatingVoteDefinitionServiceImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type RatingVoteInputRatingVoteInput_FormDialogActionsExtended =
  RatingVoteInputRatingVoteInput_FormDialogActions & {
    postVoteForRatingVoteDefinitionAction?: (
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

export const SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_VIEW_EDIT_VOTE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_VIEW_EDIT_VOTE_INPUT_FORM_ACTIONS_HOOK';
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

export const useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm = (): ((
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
          <ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm
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

  templateDataOverride?: Partial<RatingVoteInput>;
  isDraft?: boolean;
  ownerValidation?: (data: RatingVoteInput) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: RatingVoteInputStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_NHnv2FsoEe6Mx9dH3yj5gQ)/OperationUnmappedInputPageDefinition
// Name: service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::vote::Input::Form
export default function ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm(
  props: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputFormProps,
) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

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

  // Private actions
  const submit = async () => {};
  const refresh = async () => {};

  // Validation
  const validate: (data: RatingVoteInput) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<RatingVoteInputRatingVoteInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_VIEW_EDIT_VOTE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
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
  const voteForRatingVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceRatingVoteDefinitionServiceImpl.vote(ownerData, cleanUpPayload(payloadDiff.current));
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
  const getTemplateAction = async (): Promise<JudoRestResponse<RatingVoteInput>> => {
    try {
      setIsLoading(true);
      const response = await serviceRatingVoteDefinitionServiceImpl.getTemplateOnVote();
      const { data: result } = response;
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
      return response;
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
    voteForRatingVoteDefinitionAction,
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
          id="User/(esm/_NHnv2FsoEe6Mx9dH3yj5gQ)/OperationUnmappedInputPageDefinition"
          data-page-name="service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::vote::Input::Form"
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
