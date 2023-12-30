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
import type { ServiceSimpleVote, ServiceSimpleVoteQueryCustomizer, ServiceSimpleVoteStored } from '~/services/data-api';
import type { ServiceSimpleVoteSimpleVote_TableActionDefinitions } from './ServiceSimpleVoteSimpleVote_Table';

const ServiceSimpleVoteSimpleVote_Table = lazy(
  () => import('~/containers/Service/SimpleVote/SimpleVote_Table/ServiceSimpleVoteSimpleVote_Table'),
);

export interface ServiceSimpleVoteSimpleVote_TableDialogActions
  extends ServiceSimpleVoteSimpleVote_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface ServiceSimpleVoteSimpleVote_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: ServiceSimpleVoteSimpleVote_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::SimpleVote::SimpleVote_Table
export default function ServiceSimpleVoteSimpleVote_TableDialog(props: ServiceSimpleVoteSimpleVote_TableDialogProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { ownerData, title, onClose, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTablePageContainer-dialog-close-wrapper"
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
          <ServiceSimpleVoteSimpleVote_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.SimpleVote.SimpleVote_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
