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
import type { CreateArgumentInputCreateArgumentInput_TableActionDefinitions } from './CreateArgumentInputCreateArgumentInput_Table';
import type {
  CreateArgumentInput,
  CreateArgumentInputStored,
  CreateArgumentInputQueryCustomizer,
} from '~/services/data-api';

const CreateArgumentInputCreateArgumentInput_Table = lazy(
  () =>
    import('~/containers/CreateArgumentInput/CreateArgumentInput_Table/CreateArgumentInputCreateArgumentInput_Table'),
);

export interface CreateArgumentInputCreateArgumentInput_TableDialogActions
  extends CreateArgumentInputCreateArgumentInput_TableActionDefinitions {
  createArgumentInputCreateArgumentInput_TableBack?: () => Promise<void>;
}

export interface CreateArgumentInputCreateArgumentInput_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: CreateArgumentInputCreateArgumentInput_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: CreateArgumentInput::CreateArgumentInput_Table
export default function CreateArgumentInputCreateArgumentInput_TableDialog(
  props: CreateArgumentInputCreateArgumentInput_TableDialogProps,
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
          id="CreateArgumentInputCreateArgumentInput_Table-dialog-close-wrapper"
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
          <CreateArgumentInputCreateArgumentInput_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.createArgumentInputCreateArgumentInput_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="CreateArgumentInput::CreateArgumentInput_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.createArgumentInputCreateArgumentInput_TableBack!();
              }}
            >
              <span>
                {t(
                  'CreateArgumentInput.CreateArgumentInput.Table.CreateArgumentInput::CreateArgumentInput_Table::Back',
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
