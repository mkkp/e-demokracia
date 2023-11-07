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
import type { CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableActionDefinitions } from './CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Table';
import type {
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceStored,
  CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
} from '~/services/data-api';

const CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Table = lazy(
  () =>
    import(
      '~/containers/CloseDebateOutputVoteDefinitionReference/CloseDebateOutputVoteDefinitionReference_Table/CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Table'
    ),
);

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableDialogActions
  extends CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableActionDefinitions {
  closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableBack?: () => Promise<void>;
}

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_Table
export default function CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableDialog(
  props: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableDialogProps,
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
          id="CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Table-dialog-close-wrapper"
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
          <CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Table
            actions={actions}
            refreshCounter={refreshCounter}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode &&
          actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableBack && (
            <Grid className="page-action" item>
              <LoadingButton
                id="CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_Table::Back"
                loading={isLoading}
                loadingPosition="start"
                variant={'text'}
                startIcon={<MdiIcon path="arrow-left" />}
                onClick={async () => {
                  await actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableBack!();
                }}
              >
                <span>
                  {t(
                    'CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference.Table.CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_Table::Back',
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
