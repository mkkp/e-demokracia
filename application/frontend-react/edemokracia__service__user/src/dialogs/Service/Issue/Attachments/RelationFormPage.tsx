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
  ServiceIssueAttachmentIssueAttachment_FormDialogActions,
  ServiceIssueAttachmentIssueAttachment_FormDialogProps,
} from '~/containers/Service/IssueAttachment/IssueAttachment_Form/ServiceIssueAttachmentIssueAttachment_FormDialogContainer';
import { useServiceIssueAttachmentsRelationViewPage } from '~/dialogs/Service/Issue/Attachments/RelationViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  AttachmentType,
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssueStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueServiceForAttachmentsImpl } from '~/services/data-axios/ServiceIssueServiceForAttachmentsImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceIssueAttachmentIssueAttachment_FormDialogActionsExtended =
  ServiceIssueAttachmentIssueAttachment_FormDialogActions & {
    postGetTemplateAction?: (
      ownerData: any,
      data: ServiceIssueAttachment,
      storeDiff: (attributeName: keyof ServiceIssueAttachment, value: any) => void,
    ) => Promise<void>;
    postCreateAction?: (
      data: ServiceIssueAttachment,
      res: ServiceIssueAttachmentStored,
      onSubmit: (result?: ServiceIssueAttachmentStored) => Promise<void>,
      onClose: () => Promise<void>,
      openCreated?: boolean,
    ) => Promise<void>;
  };

export const SERVICE_ISSUE_ATTACHMENTS_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_ATTACHMENTS_RELATION_FORM_PAGE_ACTIONS_HOOK';
export type ServiceIssueAttachmentIssueAttachment_FormActionsHook = (
  ownerData: any,
  data: ServiceIssueAttachmentStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueAttachment, value: any) => void,
  submit: () => Promise<void>,
) => ServiceIssueAttachmentIssueAttachment_FormDialogActionsExtended;

export interface ServiceIssueAttachmentIssueAttachment_FormViewModel
  extends ServiceIssueAttachmentIssueAttachment_FormDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceIssueAttachment>;
  isDraft?: boolean;
}

const ServiceIssueAttachmentIssueAttachment_FormViewModelContext =
  createContext<ServiceIssueAttachmentIssueAttachment_FormViewModel>({} as any);
export const useServiceIssueAttachmentIssueAttachment_FormViewModel = () => {
  const context = useContext(ServiceIssueAttachmentIssueAttachment_FormViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceIssueAttachmentIssueAttachment_FormViewModel must be used within a(n) ServiceIssueAttachmentIssueAttachment_FormViewModelProvider',
    );
  }
  return context;
};

export const useServiceIssueAttachmentsRelationFormPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceIssueAttachment>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceIssueAttachment) => Promise<void>,
) => Promise<DialogResult<ServiceIssueAttachmentStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceIssueAttachment>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceIssueAttachment) => Promise<void>,
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
          <ServiceIssueAttachmentsRelationFormPage
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

export const convertServiceIssueAttachmentsRelationFormPagePayload = (
  attributeName: keyof ServiceIssueAttachment,
  value: any,
): any => {
  return value;
};

const ServiceIssueAttachmentIssueAttachment_FormDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/IssueAttachment/IssueAttachment_Form/ServiceIssueAttachmentIssueAttachment_FormDialogContainer'
    ),
);

export interface ServiceIssueAttachmentsRelationFormPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceIssueAttachment>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceIssueAttachment) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueAttachmentStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_qXz2kGksEe25ONJ3V89cVA)/RelationFeatureForm
// Name: service::Issue::attachments::RelationFormPage
export default function ServiceIssueAttachmentsRelationFormPage(props: ServiceIssueAttachmentsRelationFormPageProps) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceIssueServiceForAttachmentsImpl = useMemo(
    () => new ServiceIssueServiceForAttachmentsImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceIssueAttachmentStored>({} as ServiceIssueAttachmentStored);
  const [validation, setValidation] = useState<Map<keyof ServiceIssueAttachment, string>>(
    new Map<keyof ServiceIssueAttachment, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceIssueAttachmentStored, any>>(
    {} as unknown as Record<keyof ServiceIssueAttachmentStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceIssueAttachment, value: any) => void = useCallback(
    (attributeName: keyof ServiceIssueAttachment, value: any) => {
      payloadDiff.current![attributeName] = convertServiceIssueAttachmentsRelationFormPagePayload(attributeName, value);
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
  const validate: (data: ServiceIssueAttachment) => Promise<void> = async (data) => {
    try {
      if (ownerValidation) {
        await ownerValidation(data);
      } else {
        await serviceIssueServiceForAttachmentsImpl.validateCreate(ownerData, data);
      }
    } catch (error: any) {
      if (isDraft && isErrorNestedValidationError(error, 'attachments')) {
        throw error;
      }
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueAttachmentIssueAttachment_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ATTACHMENTS_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueAttachmentIssueAttachment_FormDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff, submit);

  // Dialog hooks
  const openServiceIssueAttachmentsRelationViewPage = useServiceIssueAttachmentsRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceIssueAttachment): string => {
    return t('service.IssueAttachment.IssueAttachment_Form', { defaultValue: 'IssueAttachment Form' });
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
          if (!isErrorNestedValidationError(error, 'attachments')) {
            // relation form has no remaining error(s), proceed with submission
            onSubmit(payloadDiff.current, true);
          } else {
            handleError<ServiceIssueAttachment>(error, { setValidation }, data, isDraft ? 'attachments' : undefined);
          }
        } finally {
          setIsLoading(false);
        }

        return;
      }
      setIsLoading(true);
      const payload: typeof payloadDiff.current = cleanUpPayload(payloadDiff.current);
      const res = await serviceIssueServiceForAttachmentsImpl.create(ownerData, payload);
      if (customActions?.postCreateAction) {
        await customActions.postCreateAction(data, res, onSubmit, onClose, openCreated);
      } else {
        showSuccessSnack(t('judo.action.create.success', { defaultValue: 'Create successful' }));
        await onSubmit(res);
        if (openCreated) {
          await openServiceIssueAttachmentsRelationViewPage(res!);
        }
      }
    } catch (error) {
      handleError<ServiceIssueAttachment>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<ServiceIssueAttachment> => {
    try {
      setIsLoading(true);
      const result = await serviceIssueServiceForAttachmentsImpl.getTemplate();
      setData(result as ServiceIssueAttachmentStored);
      payloadDiff.current = {
        ...(result as Record<keyof ServiceIssueAttachmentStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      if (templateDataOverride) {
        setData((prevData) => ({ ...prevData, ...templateDataOverride }));
        payloadDiff.current = {
          ...(templateDataOverride as Record<keyof ServiceIssueAttachmentStored, any>),
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

  const actions: ServiceIssueAttachmentIssueAttachment_FormDialogActions = {
    getPageTitle,
    backAction,
    createAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceIssueAttachmentIssueAttachment_FormViewModel = {
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
    <ServiceIssueAttachmentIssueAttachment_FormViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_qXz2kGksEe25ONJ3V89cVA)/RelationFeatureForm"
          data-page-name="service::Issue::attachments::RelationFormPage"
        />
        <ServiceIssueAttachmentIssueAttachment_FormDialogContainer
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
    </ServiceIssueAttachmentIssueAttachment_FormViewModelContext.Provider>
  );
}
