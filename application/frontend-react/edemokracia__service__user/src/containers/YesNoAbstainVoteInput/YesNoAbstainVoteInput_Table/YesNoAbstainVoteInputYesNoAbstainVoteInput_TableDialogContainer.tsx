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
import type {
  YesNoAbstainVoteInput,
  YesNoAbstainVoteInputQueryCustomizer,
  YesNoAbstainVoteInputStored,
} from '~/services/data-api';
import type { YesNoAbstainVoteInputYesNoAbstainVoteInput_TableActionDefinitions } from './YesNoAbstainVoteInputYesNoAbstainVoteInput_Table';

const YesNoAbstainVoteInputYesNoAbstainVoteInput_Table = lazy(
  () =>
    import(
      '~/containers/YesNoAbstainVoteInput/YesNoAbstainVoteInput_Table/YesNoAbstainVoteInputYesNoAbstainVoteInput_Table'
    ),
);

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_TableDialogActions
  extends YesNoAbstainVoteInputYesNoAbstainVoteInput_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: YesNoAbstainVoteInputYesNoAbstainVoteInput_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: YesNoAbstainVoteInput::YesNoAbstainVoteInput_Table
export default function YesNoAbstainVoteInputYesNoAbstainVoteInput_TableDialog(
  props: YesNoAbstainVoteInputYesNoAbstainVoteInput_TableDialogProps,
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
          id="User/(esm/_-1U_1HWyEe2LTNnGda5kaw)/TransferObjectTablePageContainer-dialog-close-wrapper"
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
          <YesNoAbstainVoteInputYesNoAbstainVoteInput_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-1U_1HWyEe2LTNnGda5kaw)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('YesNoAbstainVoteInput.YesNoAbstainVoteInput_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
