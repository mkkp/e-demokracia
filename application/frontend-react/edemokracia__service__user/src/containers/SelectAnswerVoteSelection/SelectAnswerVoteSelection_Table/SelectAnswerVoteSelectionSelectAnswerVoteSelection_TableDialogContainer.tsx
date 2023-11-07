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
import type { SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableActionDefinitions } from './SelectAnswerVoteSelectionSelectAnswerVoteSelection_Table';
import type {
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionStored,
  SelectAnswerVoteSelectionQueryCustomizer,
} from '~/services/data-api';

const SelectAnswerVoteSelectionSelectAnswerVoteSelection_Table = lazy(
  () =>
    import(
      '~/containers/SelectAnswerVoteSelection/SelectAnswerVoteSelection_Table/SelectAnswerVoteSelectionSelectAnswerVoteSelection_Table'
    ),
);

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableDialogActions
  extends SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableActionDefinitions {
  selectAnswerVoteSelectionSelectAnswerVoteSelection_TableBack?: () => Promise<void>;
}

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
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
          id="SelectAnswerVoteSelectionSelectAnswerVoteSelection_Table-dialog-close-wrapper"
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
        {!editMode && actions.selectAnswerVoteSelectionSelectAnswerVoteSelection_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="SelectAnswerVoteSelection::SelectAnswerVoteSelection_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.selectAnswerVoteSelectionSelectAnswerVoteSelection_TableBack!();
              }}
            >
              <span>
                {t(
                  'SelectAnswerVoteSelection.SelectAnswerVoteSelection.Table.SelectAnswerVoteSelection::SelectAnswerVoteSelection_Table::Back',
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
