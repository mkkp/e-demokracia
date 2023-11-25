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
import type { YesNoVoteInputYesNoVoteInput_TableActionDefinitions } from './YesNoVoteInputYesNoVoteInput_Table';
import type { YesNoVoteInput, YesNoVoteInputStored, YesNoVoteInputQueryCustomizer } from '~/services/data-api';

const YesNoVoteInputYesNoVoteInput_Table = lazy(
  () => import('~/containers/YesNoVoteInput/YesNoVoteInput_Table/YesNoVoteInputYesNoVoteInput_Table'),
);

export interface YesNoVoteInputYesNoVoteInput_TableDialogActions
  extends YesNoVoteInputYesNoVoteInput_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface YesNoVoteInputYesNoVoteInput_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: YesNoVoteInputYesNoVoteInput_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: YesNoVoteInput::YesNoVoteInput_Table
export default function YesNoVoteInputYesNoVoteInput_TableDialog(props: YesNoVoteInputYesNoVoteInput_TableDialogProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { ownerData, title, onClose, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="User/(esm/_-1R8hHWyEe2LTNnGda5kaw)/TransferObjectTablePageContainer-dialog-close-wrapper"
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
          <YesNoVoteInputYesNoVoteInput_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-1R8hHWyEe2LTNnGda5kaw)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('YesNoVoteInput.YesNoVoteInput_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
