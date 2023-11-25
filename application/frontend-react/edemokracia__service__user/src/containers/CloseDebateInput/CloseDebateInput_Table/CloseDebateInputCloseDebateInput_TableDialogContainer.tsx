//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'DialogContainer.tsx'
// Template name: actor/src/containers/dialog.tsx
// Template file: actor/src/containers/dialog.tsx.hbs

import { lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation, MdiIcon } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import type { CloseDebateInputCloseDebateInput_TableActionDefinitions } from './CloseDebateInputCloseDebateInput_Table';
import type { CloseDebateInput, CloseDebateInputStored, CloseDebateInputQueryCustomizer } from '~/services/data-api';

const CloseDebateInputCloseDebateInput_Table = lazy(
  () => import('~/containers/CloseDebateInput/CloseDebateInput_Table/CloseDebateInputCloseDebateInput_Table'),
);

export interface CloseDebateInputCloseDebateInput_TableDialogActions
  extends CloseDebateInputCloseDebateInput_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface CloseDebateInputCloseDebateInput_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: CloseDebateInputCloseDebateInput_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: CloseDebateInput::CloseDebateInput_Table
export default function CloseDebateInputCloseDebateInput_TableDialog(
  props: CloseDebateInputCloseDebateInput_TableDialogProps,
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
          id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTablePageContainer-dialog-close-wrapper"
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
          <CloseDebateInputCloseDebateInput_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('CloseDebateInput.CloseDebateInput_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
