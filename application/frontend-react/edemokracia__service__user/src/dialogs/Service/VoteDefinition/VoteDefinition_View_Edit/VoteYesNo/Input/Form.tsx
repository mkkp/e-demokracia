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
  YesNoVoteInputYesNoVoteInput_FormDialogActions,
  YesNoVoteInputYesNoVoteInput_FormDialogProps,
} from '~/containers/YesNoVoteInput/YesNoVoteInput_Form/YesNoVoteInputYesNoVoteInput_FormDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  YesNoVoteInput,
  YesNoVoteInputQueryCustomizer,
  YesNoVoteInputStored,
  YesNoVoteValue,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceVoteDefinitionServiceImpl } from '~/services/data-axios/ServiceVoteDefinitionServiceImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type YesNoVoteInputYesNoVoteInput_FormDialogActionsExtended = YesNoVoteInputYesNoVoteInput_FormDialogActions & {
  postVoteYesNoForVoteDefinitionAction?: (
    onSubmit: (result?: YesNoVoteInputStored) => Promise<void>,
    onClose: () => Promise<void>,
  ) => Promise<void>;
  postGetTemplateAction?: (
    ownerData: any,
    data: YesNoVoteInput,
    storeDiff: (attributeName: keyof YesNoVoteInput, value: any) => void,
  ) => Promise<void>;
  postCreateAction?: (
    data: YesNoVoteInput,
    res: YesNoVoteInputStored,
    onSubmit: (result?: YesNoVoteInputStored) => Promise<void>,
    onClose: () => Promise<void>,
    openCreated?: boolean,
  ) => Promise<void>;
};

export const SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_VOTE_YES_NO_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_VOTE_YES_NO_INPUT_FORM_ACTIONS_HOOK';
export type YesNoVoteInputYesNoVoteInput_FormActionsHook = (
  ownerData: any,
  data: YesNoVoteInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof YesNoVoteInput, value: any) => void,
  submit: () => Promise<void>,
) => YesNoVoteInputYesNoVoteInput_FormDialogActionsExtended;

export interface YesNoVoteInputYesNoVoteInput_FormViewModel extends YesNoVoteInputYesNoVoteInput_FormDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<YesNoVoteInput>;
  isDraft?: boolean;
}

const YesNoVoteInputYesNoVoteInput_FormViewModelContext = createContext<YesNoVoteInputYesNoVoteInput_FormViewModel>(
  {} as any,
);
export const useYesNoVoteInputYesNoVoteInput_FormViewModel = () => {
  const context = useContext(YesNoVoteInputYesNoVoteInput_FormViewModelContext);
  if (!context) {
    throw new Error(
      'useYesNoVoteInputYesNoVoteInput_FormViewModel must be used within a(n) YesNoVoteInputYesNoVoteInput_FormViewModelProvider',
    );
  }
  return context;
};

export const useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm = (): ((
  ownerData: any,
  templateDataOverride?: Partial<YesNoVoteInput>,
  isDraft?: boolean,
  ownerValidation?: (data: YesNoVoteInput) => Promise<void>,
) => Promise<DialogResult<YesNoVoteInputStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<YesNoVoteInput>,
    isDraft?: boolean,
    ownerValidation?: (data: YesNoVoteInput) => Promise<void>,
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
          <ServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm
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
            onSubmit={async (result, isDraft, openCreated) => {
              await closeDialog();
              resolve({
                result: isDraft ? 'submit-draft' : 'submit',
                openCreated,
              });
            }}
          />
        ),
      });
    });
};

export const convertServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputFormPayload = (
  attributeName: keyof YesNoVoteInput,
  value: any,
): any => {
  return value;
};

const YesNoVoteInputYesNoVoteInput_FormDialogContainer = lazy(
  () => import('~/containers/YesNoVoteInput/YesNoVoteInput_Form/YesNoVoteInputYesNoVoteInput_FormDialogContainer'),
);

export interface ServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputFormProps {
  ownerData: any;

  templateDataOverride?: Partial<YesNoVoteInput>;
  isDraft?: boolean;
  ownerValidation?: (data: YesNoVoteInput) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: YesNoVoteInputStored, isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_T6ChAI4jEe29qs15q2b6yw)/OperationUnmappedInputPageDefinition
// Name: service::VoteDefinition::VoteDefinition_View_Edit::voteYesNo::Input::Form
export default function ServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(
  props: ServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputFormProps,
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
        convertServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputFormPayload(attributeName, value);
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
    await voteYesNoForVoteDefinitionAction();
  };
  const refresh = async () => {};

  // Validation
  const validate: (data: YesNoVoteInput) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<YesNoVoteInputYesNoVoteInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_VOTE_YES_NO_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: YesNoVoteInputYesNoVoteInput_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    submit,
  );

  // Dialog hooks

  // Action section
  const getPageTitle = (data: YesNoVoteInput): string => {
    return t('YesNoVoteInput.YesNoVoteInput_Form', { defaultValue: 'YesNoVoteInput Form' });
  };
  const backAction = async () => {
    onClose();
  };
  const voteYesNoForVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceVoteDefinitionServiceImpl.voteYesNo(ownerData, cleanUpPayload(payloadDiff.current));
      if (customActions?.postVoteYesNoForVoteDefinitionAction) {
        await customActions.postVoteYesNoForVoteDefinitionAction(onSubmit, onClose);
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
  const getTemplateAction = async (): Promise<JudoRestResponse<YesNoVoteInput>> => {
    try {
      setIsLoading(true);
      const response = await serviceVoteDefinitionServiceImpl.getTemplateOnVoteYesNo();
      const { data: result } = response;
      setData(result as YesNoVoteInputStored);
      payloadDiff.current = {
        ...(result as Record<keyof YesNoVoteInputStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      if (templateDataOverride) {
        setData((prevData) => ({ ...prevData, ...templateDataOverride }));
        payloadDiff.current = {
          ...(templateDataOverride as Record<keyof YesNoVoteInputStored, any>),
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

  const actions: YesNoVoteInputYesNoVoteInput_FormDialogActions = {
    getPageTitle,
    backAction,
    voteYesNoForVoteDefinitionAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: YesNoVoteInputYesNoVoteInput_FormViewModel = {
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
    <YesNoVoteInputYesNoVoteInput_FormViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_T6ChAI4jEe29qs15q2b6yw)/OperationUnmappedInputPageDefinition"
          data-page-name="service::VoteDefinition::VoteDefinition_View_Edit::voteYesNo::Input::Form"
        />
        <YesNoVoteInputYesNoVoteInput_FormDialogContainer
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
    </YesNoVoteInputYesNoVoteInput_FormViewModelContext.Provider>
  );
}
