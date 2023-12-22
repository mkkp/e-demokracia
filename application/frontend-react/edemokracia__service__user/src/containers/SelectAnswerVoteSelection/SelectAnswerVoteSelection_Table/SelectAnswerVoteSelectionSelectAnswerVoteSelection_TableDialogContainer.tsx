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
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
} from '~/services/data-api';
import type { SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableActionDefinitions } from './SelectAnswerVoteSelectionSelectAnswerVoteSelection_Table';

const SelectAnswerVoteSelectionSelectAnswerVoteSelection_Table = lazy(
  () =>
    import(
      '~/containers/SelectAnswerVoteSelection/SelectAnswerVoteSelection_Table/SelectAnswerVoteSelectionSelectAnswerVoteSelection_Table'
    ),
);

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableDialogActions
  extends SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: SelectAnswerVoteSelection::SelectAnswerVoteSelection_Table
export default function SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableDialog(
  props: SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableDialogProps,
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
          id="User/(esm/_Xwy9EG6bEe2wNaja8kBvcQ)/TransferObjectTablePageContainer-dialog-close-wrapper"
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
          <SelectAnswerVoteSelectionSelectAnswerVoteSelection_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_Xwy9EG6bEe2wNaja8kBvcQ)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t('SelectAnswerVoteSelection.SelectAnswerVoteSelection_Table.Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
