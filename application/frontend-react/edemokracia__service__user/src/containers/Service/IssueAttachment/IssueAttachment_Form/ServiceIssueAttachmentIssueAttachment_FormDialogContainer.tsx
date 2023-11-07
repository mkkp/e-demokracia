//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'DialogContainer.tsx'
// Template name: actor/src/containers/dialog.tsx
// Template file: actor/src/containers/dialog.tsx.hbs

import { lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Grid, Button, DialogTitle, IconButton, DialogContent, DialogActions } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation, MdiIcon, PageHeader } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { processQueryCustomizer } from '~/utilities';
import type { ServiceIssueAttachmentIssueAttachment_FormActionDefinitions } from './ServiceIssueAttachmentIssueAttachment_Form';
import type {
  ServiceIssueAttachment,
  ServiceIssueAttachmentStored,
  ServiceIssueAttachmentQueryCustomizer,
} from '~/services/data-api';

const ServiceIssueAttachmentIssueAttachment_Form = lazy(
  () => import('~/containers/Service/IssueAttachment/IssueAttachment_Form/ServiceIssueAttachmentIssueAttachment_Form'),
);

export interface ServiceIssueAttachmentIssueAttachment_FormDialogActions
  extends ServiceIssueAttachmentIssueAttachment_FormActionDefinitions {
  serviceIssueAttachmentIssueAttachment_FormGetTemplate?: () => Promise<ServiceIssueAttachment>;
  serviceIssueAttachmentIssueAttachment_FormBack?: () => Promise<void>;
  serviceIssueAttachmentIssueAttachment_FormCreate?: () => Promise<void>;
}

export interface ServiceIssueAttachmentIssueAttachment_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceIssueAttachmentIssueAttachment_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceIssueAttachment;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceIssueAttachment, value: any) => void;
  validation: Map<keyof ServiceIssueAttachment, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssueAttachment, string>>>;
}

// Name: service::IssueAttachment::IssueAttachment_Form
export default function ServiceIssueAttachmentIssueAttachment_FormDialog(
  props: ServiceIssueAttachmentIssueAttachment_FormDialogProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    ownerData,
    title,
    onClose,
    actions,
    isLoading,
    editMode,
    refreshCounter,
    data,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    validation,
    setValidation,
  } = props;
  const queryCustomizer: ServiceIssueAttachmentQueryCustomizer = {
    _mask: '{file,link,type}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceIssueAttachmentIssueAttachment_Form-dialog-close-wrapper"
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <MdiIcon path="close" />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Suspense>
          <ServiceIssueAttachmentIssueAttachment_Form
            actions={actions}
            refreshCounter={refreshCounter}
            data={data}
            isLoading={isLoading}
            editMode={editMode}
            storeDiff={storeDiff}
            isFormUpdateable={isFormUpdateable}
            isFormDeleteable={isFormDeleteable}
            validation={validation}
            setValidation={setValidation}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {editMode && actions.serviceIssueAttachmentIssueAttachment_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::IssueAttachment::IssueAttachment_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceIssueAttachmentIssueAttachment_FormBack!();
              }}
            >
              <span>
                {t(
                  'service.IssueAttachment.IssueAttachment.Form.service::IssueAttachment::IssueAttachment_Form::Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceIssueAttachmentIssueAttachment_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::IssueAttachment::IssueAttachment_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceIssueAttachmentIssueAttachment_FormCreate!();
              }}
            >
              <span>
                {t(
                  'service.IssueAttachment.IssueAttachment.Form.service::IssueAttachment::IssueAttachment_Form::Create',
                  { defaultValue: 'Create' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
