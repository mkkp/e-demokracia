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
import type { YesNoVoteInputYesNoVoteInput_TableActionDefinitions } from './YesNoVoteInputYesNoVoteInput_Table';
import type { YesNoVoteInput, YesNoVoteInputStored, YesNoVoteInputQueryCustomizer } from '~/services/data-api';

const YesNoVoteInputYesNoVoteInput_Table = lazy(
  () => import('~/containers/YesNoVoteInput/YesNoVoteInput_Table/YesNoVoteInputYesNoVoteInput_Table'),
);

export interface YesNoVoteInputYesNoVoteInput_TableDialogActions
  extends YesNoVoteInputYesNoVoteInput_TableActionDefinitions {
  yesNoVoteInputYesNoVoteInput_TableBack?: () => Promise<void>;
}

export interface YesNoVoteInputYesNoVoteInput_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
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
          id="YesNoVoteInputYesNoVoteInput_Table-dialog-close-wrapper"
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
        {!editMode && actions.yesNoVoteInputYesNoVoteInput_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="YesNoVoteInput::YesNoVoteInput_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.yesNoVoteInputYesNoVoteInput_TableBack!();
              }}
            >
              <span>
                {t('YesNoVoteInput.YesNoVoteInput.Table.YesNoVoteInput::YesNoVoteInput_Table::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
