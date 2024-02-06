//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'DialogContainer.tsx'
// Template name: actor/src/containers/dialog.tsx
// Template file: actor/src/containers/dialog.tsx.hbs

import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { Suspense, lazy } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import type { ServiceUserIssues, ServiceUserIssuesQueryCustomizer, ServiceUserIssuesStored } from '~/services/data-api';
import type { ServiceUserIssuesUserIssues_TableActionDefinitions } from './ServiceUserIssuesUserIssues_Table';

const ServiceUserIssuesUserIssues_Table = lazy(
  () => import('~/containers/Service/UserIssues/UserIssues_Table/ServiceUserIssuesUserIssues_Table'),
);

export interface ServiceUserIssuesUserIssues_TableDialogActions
  extends ServiceUserIssuesUserIssues_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface ServiceUserIssuesUserIssues_TableDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceUserIssuesUserIssues_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  isDraft?: boolean;
}

// Name: service::UserIssues::UserIssues_Table
export default function ServiceUserIssuesUserIssues_TableDialog(props: ServiceUserIssuesUserIssues_TableDialogProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { ownerData, onClose, actions, isLoading, editMode, refreshCounter, isDraft } = props;

  return (
    <>
      <DialogTitle>
        {isDraft ? t('judo') : actions.getPageTitle ? actions.getPageTitle() : ''}
        <IconButton
          id="User/(esm/_jK51vlq4Ee6_67aMO2jOsw)/TransferObjectTablePageContainer-dialog-close-wrapper"
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
          <ServiceUserIssuesUserIssues_Table
            actions={actions}
            refreshCounter={refreshCounter}
            isLoading={isLoading}
            isDraft={isDraft}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_jK51vlq4Ee6_67aMO2jOsw)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.UserIssues.UserIssues_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
