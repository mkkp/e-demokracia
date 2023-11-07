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
import type { ServiceIssueIssue_TableActionDefinitions } from './ServiceIssueIssue_Table';
import type { ServiceIssue, ServiceIssueStored, ServiceIssueQueryCustomizer } from '~/services/data-api';

const ServiceIssueIssue_Table = lazy(() => import('~/containers/Service/Issue/Issue_Table/ServiceIssueIssue_Table'));

export interface ServiceIssueIssue_TableDialogActions extends ServiceIssueIssue_TableActionDefinitions {
  serviceIssueIssue_TableBack?: () => Promise<void>;
}

export interface ServiceIssueIssue_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceIssueIssue_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::Issue::Issue_Table
export default function ServiceIssueIssue_TableDialog(props: ServiceIssueIssue_TableDialogProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { ownerData, title, onClose, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceIssueIssue_Table-dialog-close-wrapper"
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
          <ServiceIssueIssue_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceIssueIssue_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Issue::Issue_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceIssueIssue_TableBack!();
              }}
            >
              <span>{t('service.Issue.Issue.Table.service::Issue::Issue_Table::Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
