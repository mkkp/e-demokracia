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
  ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogActions,
  ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogProps,
} from '~/containers/Service/SelectAnswerVoteSelection/SelectAnswerVoteSelection_Form/ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogContainer';
import { useServiceSelectAnswerVoteDefinitionVoteSelectionsRelationViewPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/VoteSelections/RelationViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl } from '~/services/data-axios/ServiceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogActionsExtended =
  ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogActions & {
    postGetTemplateAction?: (
      ownerData: any,
      data: ServiceSelectAnswerVoteSelection,
      storeDiff: (attributeName: keyof ServiceSelectAnswerVoteSelection, value: any) => void,
    ) => Promise<void>;
    postCreateAction?: (
      data: ServiceSelectAnswerVoteSelection,
      res: ServiceSelectAnswerVoteSelectionStored,
      onSubmit: (result?: ServiceSelectAnswerVoteSelectionStored) => Promise<void>,
      onClose: () => Promise<void>,
      openCreated?: boolean,
    ) => Promise<void>;
  };

export const SERVICE_SELECT_ANSWER_VOTE_DEFINITION_VOTE_SELECTIONS_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_SELECT_ANSWER_VOTE_DEFINITION_VOTE_SELECTIONS_RELATION_FORM_PAGE_ACTIONS_HOOK';
export type ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormActionsHook = (
  ownerData: any,
  data: ServiceSelectAnswerVoteSelectionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteSelection, value: any) => void,
  submit: () => Promise<void>,
) => ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogActionsExtended;

export interface ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormViewModel
  extends ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceSelectAnswerVoteSelection>;
  isDraft?: boolean;
}

const ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormViewModelContext =
  createContext<ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormViewModel>({} as any);
export const useServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormViewModel = () => {
  const context = useContext(ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormViewModel must be used within a(n) ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormViewModelProvider',
    );
  }
  return context;
};

export const useServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceSelectAnswerVoteSelection>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceSelectAnswerVoteSelection) => Promise<void>,
) => Promise<DialogResult<ServiceSelectAnswerVoteSelectionStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceSelectAnswerVoteSelection>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceSelectAnswerVoteSelection) => Promise<void>,
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
          <ServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage
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
            onSubmit={async (result, isDraft) => {
              await closeDialog();
              resolve({
                result: isDraft ? 'submit-draft' : 'submit',
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

  templateDataOverride?: Partial<ServiceSelectAnswerVoteSelection>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceSelectAnswerVoteSelection) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceSelectAnswerVoteSelectionStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_-cKskFtqEe6Mx9dH3yj5gQ)/RelationFeatureForm
// Name: service::SelectAnswerVoteDefinition::voteSelections::RelationFormPage
export default function ServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage(
  props: ServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPageProps,
) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl = useMemo(
    () => new ServiceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl(judoAxiosProvider),
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

  // Private actions
  const submit = async () => {
    await createAction();
  };
  const refresh = async () => {};

  // Validation
  const validate: (data: ServiceSelectAnswerVoteSelection) => Promise<void> = async (data) => {
    try {
      if (ownerValidation) {
        await ownerValidation(data);
      } else {
        await serviceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl.validateCreate(ownerData, data);
      }
    } catch (error: any) {
      if (isDraft && isErrorNestedValidationError(error, 'voteSelections')) {
        throw error;
      }
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_SELECT_ANSWER_VOTE_DEFINITION_VOTE_SELECTIONS_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff, submit);

  // Dialog hooks
  const openServiceSelectAnswerVoteDefinitionVoteSelectionsRelationViewPage =
    useServiceSelectAnswerVoteDefinitionVoteSelectionsRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceSelectAnswerVoteSelection): string => {
    return t('service.SelectAnswerVoteSelection.SelectAnswerVoteSelection_Form', {
      defaultValue: 'SelectAnswerVoteSelection Form',
    });
  };
  const backAction = async () => {
    onClose();
  };
  const createAction = async (openCreated?: boolean) => {
    try {
      if (isDraft) {
        try {
          setIsLoading(true);
          await validate(cleanUpPayload(payloadDiff.current));
          onSubmit(payloadDiff.current, true);
        } catch (error) {
          if (!isErrorNestedValidationError(error, 'voteSelections')) {
            // relation form has no remaining error(s), proceed with submission
            onSubmit(payloadDiff.current, true);
          } else {
            handleError<ServiceSelectAnswerVoteSelection>(
              error,
              { setValidation },
              data,
              isDraft ? 'voteSelections' : undefined,
            );
          }
        } finally {
          setIsLoading(false);
        }

        return;
      }
      setIsLoading(true);
      const payload: typeof payloadDiff.current = cleanUpPayload(payloadDiff.current);
      const res = await serviceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl.create(ownerData, payload);
      if (customActions?.postCreateAction) {
        await customActions.postCreateAction(data, res, onSubmit, onClose, openCreated);
      } else {
        showSuccessSnack(t('judo.action.create.success', { defaultValue: 'Create successful' }));
        await onSubmit(res);
        if (openCreated) {
          await openServiceSelectAnswerVoteDefinitionVoteSelectionsRelationViewPage(res!);
        }
      }
    } catch (error) {
      handleError<ServiceSelectAnswerVoteSelection>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<ServiceSelectAnswerVoteSelection> => {
    try {
      setIsLoading(true);
      const result = await serviceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl.getTemplate();
      setData(result as ServiceSelectAnswerVoteSelectionStored);
      payloadDiff.current = {
        ...(result as Record<keyof ServiceSelectAnswerVoteSelectionStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      if (templateDataOverride) {
        setData((prevData) => ({ ...prevData, ...templateDataOverride }));
        payloadDiff.current = {
          ...(templateDataOverride as Record<keyof ServiceSelectAnswerVoteSelectionStored, any>),
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

  const actions: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogActions = {
    getPageTitle,
    backAction,
    createAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormViewModel = {
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
    <ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_-cKskFtqEe6Mx9dH3yj5gQ)/RelationFeatureForm"
          data-page-name="service::SelectAnswerVoteDefinition::voteSelections::RelationFormPage"
        />
        <ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogContainer
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
    </ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormViewModelContext.Provider>
  );
}
