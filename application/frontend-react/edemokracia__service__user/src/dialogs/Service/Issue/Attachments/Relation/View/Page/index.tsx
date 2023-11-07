//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
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
import type { ServiceIssueAttachmentIssueAttachment_View_EditDialogActions } from '~/containers/Service/IssueAttachment/IssueAttachment_View_Edit/ServiceIssueAttachmentIssueAttachment_View_EditDialogContainer';
import type {
  AttachmentType,
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssueStored,
} from '~/services/data-api';
import { serviceIssueServiceForAttachmentsImpl } from '~/services/data-axios';

export const useServiceIssueAttachmentsRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceIssueAttachmentStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'lg',
        onClose: (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceIssueAttachmentsRelationViewPage
            ownerData={ownerData}
            onClose={() => {
              closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={(result) => {
              closeDialog();
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

const ServiceIssueAttachmentIssueAttachment_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/IssueAttachment/IssueAttachment_View_Edit/ServiceIssueAttachmentIssueAttachment_View_EditDialogContainer'
    ),
);

export interface ServiceIssueAttachmentsRelationViewPageProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: ServiceIssueAttachmentStored) => void;
}

// Name: service::Issue::attachments::Relation::View::Page
export default function ServiceIssueAttachmentsRelationViewPage(props: ServiceIssueAttachmentsRelationViewPageProps) {
  const { ownerData, onClose, onSubmit } = props;

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { navigate, back } = useJudoNavigation();
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

  // Dialog hooks

  // Calculated section
  const title: string = t('Service.IssueAttachment.IssueAttachment_View_Edit', {
    defaultValue: 'IssueAttachment View / Edit',
  });

  // Action section
  const serviceIssueAttachmentIssueAttachment_View_EditBack = async () => {
    onClose();
  };
  const serviceIssueAttachmentIssueAttachment_View_EditRefresh = async (
    queryCustomizer: ServiceIssueAttachmentQueryCustomizer,
  ): Promise<ServiceIssueAttachmentStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceIssueServiceForAttachmentsImpl.refresh(ownerData, pageQueryCustomizer);

      setData(result);

      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceIssueAttachmentStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceIssueAttachmentIssueAttachment_View_EditCancel = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await serviceIssueAttachmentIssueAttachment_View_EditRefresh(processQueryCustomizer(pageQueryCustomizer));
  };
  const serviceIssueAttachmentIssueAttachment_View_EditUpdate = async () => {
    setIsLoading(true);

    try {
      const res = await serviceIssueServiceForAttachmentsImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceIssueAttachment, string>());
        await actions.serviceIssueAttachmentIssueAttachment_View_EditRefresh!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceIssueAttachment>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceIssueAttachmentIssueAttachment_View_EditDelete = async () => {
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

        enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
          variant: 'success',
          ...toastConfig.success,
        });

        onClose();
      }
    } catch (error) {
      handleError(error, undefined, data);
    }
  };

  const actions: ServiceIssueAttachmentIssueAttachment_View_EditDialogActions = {
    serviceIssueAttachmentIssueAttachment_View_EditBack,
    serviceIssueAttachmentIssueAttachment_View_EditRefresh,
    serviceIssueAttachmentIssueAttachment_View_EditCancel,
    serviceIssueAttachmentIssueAttachment_View_EditUpdate,
    serviceIssueAttachmentIssueAttachment_View_EditDelete,
  };

  // Effect section
  useEffect(() => {
    actions.serviceIssueAttachmentIssueAttachment_View_EditRefresh!(pageQueryCustomizer);
  }, []);

  return (
    <>
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
        />
      </Suspense>
    </>
  );
}
