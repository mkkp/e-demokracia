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
  YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActions,
  YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogProps,
} from '~/containers/YesNoAbstainVoteInput/YesNoAbstainVoteInput_Form/YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  YesNoAbstainVoteInput,
  YesNoAbstainVoteInputQueryCustomizer,
  YesNoAbstainVoteInputStored,
  YesNoAbstainVoteValue,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceVoteDefinitionServiceImpl } from '~/services/data-axios/ServiceVoteDefinitionServiceImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActionsExtended =
  YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActions & {
    postVoteYesNoAbstainForVoteDefinitionAction?: (
      onSubmit: (result?: YesNoAbstainVoteInputStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => Promise<void>;
    postGetTemplateAction?: (
      ownerData: any,
      data: YesNoAbstainVoteInput,
      storeDiff: (attributeName: keyof YesNoAbstainVoteInput, value: any) => void,
    ) => Promise<void>;
    postCreateAction?: (
      data: YesNoAbstainVoteInput,
      res: YesNoAbstainVoteInputStored,
      onSubmit: (result?: YesNoAbstainVoteInputStored) => Promise<void>,
      onClose: () => Promise<void>,
      openCreated?: boolean,
    ) => Promise<void>;
  };

export const SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_VOTE_YES_NO_ABSTAIN_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_VOTE_YES_NO_ABSTAIN_INPUT_FORM_ACTIONS_HOOK';
export type YesNoAbstainVoteInputYesNoAbstainVoteInput_FormActionsHook = (
  ownerData: any,
  data: YesNoAbstainVoteInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof YesNoAbstainVoteInput, value: any) => void,
  submit: () => Promise<void>,
) => YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActionsExtended;

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_FormViewModel
  extends YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<YesNoAbstainVoteInput>;
  isDraft?: boolean;
}

const YesNoAbstainVoteInputYesNoAbstainVoteInput_FormViewModelContext =
  createContext<YesNoAbstainVoteInputYesNoAbstainVoteInput_FormViewModel>({} as any);
export const useYesNoAbstainVoteInputYesNoAbstainVoteInput_FormViewModel = () => {
  const context = useContext(YesNoAbstainVoteInputYesNoAbstainVoteInput_FormViewModelContext);
  if (!context) {
    throw new Error(
      'useYesNoAbstainVoteInputYesNoAbstainVoteInput_FormViewModel must be used within a(n) YesNoAbstainVoteInputYesNoAbstainVoteInput_FormViewModelProvider',
    );
  }
  return context;
};

export const useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm = (): ((
  ownerData: any,
  templateDataOverride?: Partial<YesNoAbstainVoteInput>,
  isDraft?: boolean,
  ownerValidation?: (data: YesNoAbstainVoteInput) => Promise<void>,
) => Promise<DialogResult<YesNoAbstainVoteInputStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<YesNoAbstainVoteInput>,
    isDraft?: boolean,
    ownerValidation?: (data: YesNoAbstainVoteInput) => Promise<void>,
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
          <ServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm
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

export const convertServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputFormPayload = (
  attributeName: keyof YesNoAbstainVoteInput,
  value: any,
): any => {
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

  templateDataOverride?: Partial<YesNoAbstainVoteInput>;
  isDraft?: boolean;
  ownerValidation?: (data: YesNoAbstainVoteInput) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: YesNoAbstainVoteInputStored, isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_T6DvII4jEe29qs15q2b6yw)/OperationUnmappedInputPageDefinition
// Name: service::VoteDefinition::VoteDefinition_View_Edit::voteYesNoAbstain::Input::Form
export default function ServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(
  props: ServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputFormProps,
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

  // Private actions
  const submit = async () => {
    await voteYesNoAbstainForVoteDefinitionAction();
  };
  const refresh = async () => {};

  // Validation
  const validate: (data: YesNoAbstainVoteInput) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<YesNoAbstainVoteInputYesNoAbstainVoteInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_VOTE_YES_NO_ABSTAIN_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (data: YesNoAbstainVoteInput): string => {
    return t('YesNoAbstainVoteInput.YesNoAbstainVoteInput_Form', { defaultValue: 'YesNoAbstainVoteInput Form' });
  };
  const backAction = async () => {
    onClose();
  };
  const voteYesNoAbstainForVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceVoteDefinitionServiceImpl.voteYesNoAbstain(ownerData, cleanUpPayload(payloadDiff.current));
      if (customActions?.postVoteYesNoAbstainForVoteDefinitionAction) {
        await customActions.postVoteYesNoAbstainForVoteDefinitionAction(onSubmit, onClose);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        onSubmit();
      }
    } catch (error) {
      handleError<YesNoAbstainVoteInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<JudoRestResponse<YesNoAbstainVoteInput>> => {
    try {
      setIsLoading(true);
      const response = await serviceVoteDefinitionServiceImpl.getTemplateOnVoteYesNoAbstain();
      const { data: result } = response;
      setData(result as YesNoAbstainVoteInputStored);
      payloadDiff.current = {
        ...(result as Record<keyof YesNoAbstainVoteInputStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      if (templateDataOverride) {
        setData((prevData) => ({ ...prevData, ...templateDataOverride }));
        payloadDiff.current = {
          ...(templateDataOverride as Record<keyof YesNoAbstainVoteInputStored, any>),
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

  const actions: YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActions = {
    getPageTitle,
    backAction,
    voteYesNoAbstainForVoteDefinitionAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: YesNoAbstainVoteInputYesNoAbstainVoteInput_FormViewModel = {
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
    <YesNoAbstainVoteInputYesNoAbstainVoteInput_FormViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_T6DvII4jEe29qs15q2b6yw)/OperationUnmappedInputPageDefinition"
          data-page-name="service::VoteDefinition::VoteDefinition_View_Edit::voteYesNoAbstain::Input::Form"
        />
        <YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogContainer
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
    </YesNoAbstainVoteInputYesNoAbstainVoteInput_FormViewModelContext.Provider>
  );
}
