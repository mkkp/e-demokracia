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
import type { CreateCommentInputCreateCommentInput_TableActionDefinitions } from './CreateCommentInputCreateCommentInput_Table';
import type {
  CreateCommentInput,
  CreateCommentInputStored,
  CreateCommentInputQueryCustomizer,
} from '~/services/data-api';

const CreateCommentInputCreateCommentInput_Table = lazy(
  () => import('~/containers/CreateCommentInput/CreateCommentInput_Table/CreateCommentInputCreateCommentInput_Table'),
);

export interface CreateCommentInputCreateCommentInput_TableDialogActions
  extends CreateCommentInputCreateCommentInput_TableActionDefinitions {
  createCommentInputCreateCommentInput_TableBack?: () => Promise<void>;
}

export interface CreateCommentInputCreateCommentInput_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: CreateCommentInputCreateCommentInput_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: CreateCommentInput::CreateCommentInput_Table
export default function CreateCommentInputCreateCommentInput_TableDialog(
  props: CreateCommentInputCreateCommentInput_TableDialogProps,
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
          id="CreateCommentInputCreateCommentInput_Table-dialog-close-wrapper"
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
          <CreateCommentInputCreateCommentInput_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.createCommentInputCreateCommentInput_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="CreateCommentInput::CreateCommentInput_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.createCommentInputCreateCommentInput_TableBack!();
              }}
            >
              <span>
                {t('CreateCommentInput.CreateCommentInput.Table.CreateCommentInput::CreateCommentInput_Table::Back', {
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
