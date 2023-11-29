//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, useMemo, lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';
import type { ServiceIssueAttachmentIssueAttachment_View_EditDialogActions } from '~/containers/Service/IssueAttachment/IssueAttachment_View_Edit/ServiceIssueAttachmentIssueAttachment_View_EditDialogContainer';
import type {
  AttachmentType,
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssueStored,
} from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueAttachmentServiceImpl } from '~/services/data-axios/ServiceIssueAttachmentServiceImpl';

export type ServiceIssueAttachmentIssueAttachment_View_EditDialogActionsExtended =
  ServiceIssueAttachmentIssueAttachment_View_EditDialogActions & {
    postRefreshAction?: (
      data: ServiceIssueAttachmentStored,
      storeDiff: (attributeName: keyof ServiceIssueAttachment, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssueAttachment, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_ISSUE_ATTACHMENTS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueAttachmentIssueAttachment_View_EditActionsHook';
export type ServiceIssueAttachmentIssueAttachment_View_EditActionsHook = (
  ownerData: any,
  data: ServiceIssueAttachmentStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueAttachment, value: any) => void,
) => ServiceIssueAttachmentIssueAttachment_View_EditDialogActionsExtended;

export const useServiceIssueAttachmentsRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceIssueAttachmentStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
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
            onClose={async () => {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={async (result) => {
              await closeDialog();
              resolve({
                result: 'submit',
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

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueAttachmentStored) => Promise<void>;
}

// XMIID: User/(esm/_qXz2kGksEe25ONJ3V89cVA)/RelationFeatureView
// Name: service::Issue::attachments::RelationViewPage
export default function ServiceIssueAttachmentsRelationViewPage(props: ServiceIssueAttachmentsRelationViewPageProps) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const serviceIssueAttachmentServiceImpl = useMemo(() => new ServiceIssueAttachmentServiceImpl(judoAxiosProvider), []);

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

  const pageQueryCustomizer: ServiceIssueAttachmentQueryCustomizer = {
    _mask: '{file,link,type}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueAttachmentIssueAttachment_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ATTACHMENTS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueAttachmentIssueAttachment_View_EditDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff);

  // Dialog hooks

  // Calculated section
  const title: string = t('service.IssueAttachment.IssueAttachment_View_Edit', {
    defaultValue: 'IssueAttachment View / Edit',
  });

  // Private actions
  const submit = async () => {
    await updateAction();
  };

  // Action section
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceIssueAttachmentQueryCustomizer,
  ): Promise<ServiceIssueAttachmentStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceIssueAttachmentServiceImpl.refresh(ownerData, pageQueryCustomizer);
      setData(result);
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
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(pageQueryCustomizer));
  };
  const updateAction = async () => {
    setIsLoading(true);
    try {
      const res = await serviceIssueAttachmentServiceImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceIssueAttachment, string>());
        await actions.refreshAction!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceIssueAttachment>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
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
        await serviceIssueAttachmentServiceImpl.delete(data);
        showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
        onClose();
      }
    } catch (error) {
      handleError(error, undefined, data);
    }
  };

  const actions: ServiceIssueAttachmentIssueAttachment_View_EditDialogActions = {
    backAction,
    refreshAction,
    cancelAction,
    updateAction,
    deleteAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_qXz2kGksEe25ONJ3V89cVA)/RelationFeatureView"
      data-page-name="service::Issue::attachments::RelationViewPage"
    >
      <Suspense>
        <ServiceIssueAttachmentIssueAttachment_View_EditDialogContainer
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
