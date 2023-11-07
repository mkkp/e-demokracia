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
import type { YesNoAbstainVoteInputYesNoAbstainVoteInput_TableActionDefinitions } from './YesNoAbstainVoteInputYesNoAbstainVoteInput_Table';
import type {
  YesNoAbstainVoteInput,
  YesNoAbstainVoteInputStored,
  YesNoAbstainVoteInputQueryCustomizer,
} from '~/services/data-api';

const YesNoAbstainVoteInputYesNoAbstainVoteInput_Table = lazy(
  () =>
    import(
      '~/containers/YesNoAbstainVoteInput/YesNoAbstainVoteInput_Table/YesNoAbstainVoteInputYesNoAbstainVoteInput_Table'
    ),
);

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_TableDialogActions
  extends YesNoAbstainVoteInputYesNoAbstainVoteInput_TableActionDefinitions {
  yesNoAbstainVoteInputYesNoAbstainVoteInput_TableBack?: () => Promise<void>;
}

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
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
          id="YesNoAbstainVoteInputYesNoAbstainVoteInput_Table-dialog-close-wrapper"
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
        {!editMode && actions.yesNoAbstainVoteInputYesNoAbstainVoteInput_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="YesNoAbstainVoteInput::YesNoAbstainVoteInput_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.yesNoAbstainVoteInputYesNoAbstainVoteInput_TableBack!();
              }}
            >
              <span>
                {t(
                  'YesNoAbstainVoteInput.YesNoAbstainVoteInput.Table.YesNoAbstainVoteInput::YesNoAbstainVoteInput_Table::Back',
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
