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
import type { RatingVoteInputRatingVoteInput_TableActionDefinitions } from './RatingVoteInputRatingVoteInput_Table';
import type { RatingVoteInput, RatingVoteInputStored, RatingVoteInputQueryCustomizer } from '~/services/data-api';

const RatingVoteInputRatingVoteInput_Table = lazy(
  () => import('~/containers/RatingVoteInput/RatingVoteInput_Table/RatingVoteInputRatingVoteInput_Table'),
);

export interface RatingVoteInputRatingVoteInput_TableDialogActions
  extends RatingVoteInputRatingVoteInput_TableActionDefinitions {
  ratingVoteInputRatingVoteInput_TableBack?: () => Promise<void>;
}

export interface RatingVoteInputRatingVoteInput_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: RatingVoteInputRatingVoteInput_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: RatingVoteInput::RatingVoteInput_Table
export default function RatingVoteInputRatingVoteInput_TableDialog(
  props: RatingVoteInputRatingVoteInput_TableDialogProps,
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
          id="RatingVoteInputRatingVoteInput_Table-dialog-close-wrapper"
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
          <RatingVoteInputRatingVoteInput_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.ratingVoteInputRatingVoteInput_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="RatingVoteInput::RatingVoteInput_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.ratingVoteInputRatingVoteInput_TableBack!();
              }}
            >
              <span>
                {t('RatingVoteInput.RatingVoteInput.Table.RatingVoteInput::RatingVoteInput_Table::Back', {
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
