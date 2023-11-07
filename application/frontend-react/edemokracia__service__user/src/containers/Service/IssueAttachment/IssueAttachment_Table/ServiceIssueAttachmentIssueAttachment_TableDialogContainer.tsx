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
import type { ServiceIssueAttachmentIssueAttachment_TableActionDefinitions } from './ServiceIssueAttachmentIssueAttachment_Table';
import type {
  ServiceIssueAttachment,
  ServiceIssueAttachmentStored,
  ServiceIssueAttachmentQueryCustomizer,
} from '~/services/data-api';

const ServiceIssueAttachmentIssueAttachment_Table = lazy(
  () =>
    import('~/containers/Service/IssueAttachment/IssueAttachment_Table/ServiceIssueAttachmentIssueAttachment_Table'),
);

export interface ServiceIssueAttachmentIssueAttachment_TableDialogActions
  extends ServiceIssueAttachmentIssueAttachment_TableActionDefinitions {
  serviceIssueAttachmentIssueAttachment_TableBack?: () => Promise<void>;
}

export interface ServiceIssueAttachmentIssueAttachment_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceIssueAttachmentIssueAttachment_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::IssueAttachment::IssueAttachment_Table
export default function ServiceIssueAttachmentIssueAttachment_TableDialog(
  props: ServiceIssueAttachmentIssueAttachment_TableDialogProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { ownerData, title, onClose, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceIssueAttachmentIssueAttachment_Table-dialog-close-wrapper"
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
          <ServiceIssueAttachmentIssueAttachment_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceIssueAttachmentIssueAttachment_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::IssueAttachment::IssueAttachment_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceIssueAttachmentIssueAttachment_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.IssueAttachment.IssueAttachment.Table.service::IssueAttachment::IssueAttachment_Table::Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
