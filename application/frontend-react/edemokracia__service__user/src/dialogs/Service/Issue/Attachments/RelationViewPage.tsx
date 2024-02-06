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
  ServiceIssueAttachmentIssueAttachment_View_EditDialogActions,
  ServiceIssueAttachmentIssueAttachment_View_EditDialogProps,
} from '~/containers/Service/IssueAttachment/IssueAttachment_View_Edit/ServiceIssueAttachmentIssueAttachment_View_EditDialogContainer';
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

export type ServiceIssueAttachmentIssueAttachment_View_EditDialogActionsExtended =
  ServiceIssueAttachmentIssueAttachment_View_EditDialogActions & {
    postRefreshAction?: (
      data: ServiceIssueAttachmentStored,
      storeDiff: (attributeName: keyof ServiceIssueAttachment, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssueAttachment, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_ISSUE_ATTACHMENTS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_ATTACHMENTS_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceIssueAttachmentIssueAttachment_View_EditActionsHook = (
  ownerData: any,
  data: ServiceIssueAttachmentStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueAttachment, value: any) => void,
  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceIssueAttachmentIssueAttachment_View_EditDialogActionsExtended;

export interface ServiceIssueAttachmentIssueAttachment_View_EditViewModel
  extends ServiceIssueAttachmentIssueAttachment_View_EditDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceIssueAttachment>;
  isDraft?: boolean;
}

const ServiceIssueAttachmentIssueAttachment_View_EditViewModelContext =
  createContext<ServiceIssueAttachmentIssueAttachment_View_EditViewModel>({} as any);
export const useServiceIssueAttachmentIssueAttachment_View_EditViewModel = () => {
  const context = useContext(ServiceIssueAttachmentIssueAttachment_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceIssueAttachmentIssueAttachment_View_EditViewModel must be used within a(n) ServiceIssueAttachmentIssueAttachment_View_EditViewModelProvider',
    );
  }
  return context;
};

export const useServiceIssueAttachmentsRelationViewPage = (): ((
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
        maxWidth: 'lg',
        onClose: async (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            await closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceIssueAttachmentsRelationViewPage
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

export const convertServiceIssueAttachmentsRelationViewPagePayload = (
  attributeName: keyof ServiceIssueAttachment,
  value: any,
): any => {
  return value;
};

const ServiceIssueAttachmentIssueAttachment_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/IssueAttachment/IssueAttachment_View_Edit/ServiceIssueAttachmentIssueAttachment_View_EditDialogContainer'
    ),
);

export interface ServiceIssueAttachmentsRelationViewPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceIssueAttachment>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceIssueAttachment) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueAttachmentStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_qXz2kGksEe25ONJ3V89cVA)/RelationFeatureView
// Name: service::Issue::attachments::RelationViewPage
export default function ServiceIssueAttachmentsRelationViewPage(props: ServiceIssueAttachmentsRelationViewPageProps) {
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
  const [editMode, setEditMode] = useState<boolean>(false);
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
      payloadDiff.current![attributeName] = convertServiceIssueAttachmentsRelationViewPagePayload(attributeName, value);
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
    return true && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return true && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const getPageQueryCustomizer: () => ServiceIssueAttachmentQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{file,link,type}',
  });

  // Private actions
  const submit = async () => {
    await updateAction();
  };
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

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
  const { service: customActionsHook } = useTrackService<ServiceIssueAttachmentIssueAttachment_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ATTACHMENTS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueAttachmentIssueAttachment_View_EditDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff, refresh, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (data: ServiceIssueAttachment): string => {
    return t('service.IssueAttachment.IssueAttachment_View_Edit', { defaultValue: 'IssueAttachment View / Edit' });
  };
  const backAction = async () => {
    onClose();
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(getPageQueryCustomizer()));
  };
  const deleteAction = async () => {
    try {
      const confirmed = await openConfirmDialog(
        'row-delete-action',
        t('judo.modal.confirm.confirm-delete', {
          defaultValue: 'Are you sure you would like to delete the selected element?',
        }),
        t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
      );
      if (confirmed) {
        await serviceIssueServiceForAttachmentsImpl.delete(data);
        showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
        onClose();
      }
    } catch (error) {
      handleError(error, undefined, data);
    }
  };
  const refreshAction = async (
    queryCustomizer: ServiceIssueAttachmentQueryCustomizer,
  ): Promise<ServiceIssueAttachmentStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceIssueServiceForAttachmentsImpl.refresh(ownerData, getPageQueryCustomizer());
      setData(result);
      setLatestViewData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceIssueAttachmentStored, any>;
      if (customActions?.postRefreshAction) {
        await customActions?.postRefreshAction(result, storeDiff, setValidation);
      }
      return result;
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const updateAction = async () => {
    setIsLoading(true);
    try {
      const res = await serviceIssueServiceForAttachmentsImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceIssueAttachment, string>());
        await actions.refreshAction!(getPageQueryCustomizer());
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceIssueAttachment>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceIssueAttachmentIssueAttachment_View_EditDialogActions = {
    getPageTitle,
    backAction,
    cancelAction,
    deleteAction,
    refreshAction,
    updateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceIssueAttachmentIssueAttachment_View_EditViewModel = {
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
    actions.refreshAction!(getPageQueryCustomizer());
  }, []);

  return (
    <ServiceIssueAttachmentIssueAttachment_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_qXz2kGksEe25ONJ3V89cVA)/RelationFeatureView"
          data-page-name="service::Issue::attachments::RelationViewPage"
        />
        <ServiceIssueAttachmentIssueAttachment_View_EditDialogContainer
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
    </ServiceIssueAttachmentIssueAttachment_View_EditViewModelContext.Provider>
  );
}
