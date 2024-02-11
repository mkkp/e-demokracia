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
import type { ServiceSimpleVote, ServiceSimpleVoteQueryCustomizer, ServiceSimpleVoteStored } from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import type { ServiceSimpleVoteSimpleVote_TableAddSelectorActionDefinitions } from './ServiceSimpleVoteSimpleVote_TableAddSelector';

const ServiceSimpleVoteSimpleVote_TableAddSelector = lazy(
  () =>
    import('~/containers/Service/SimpleVote/SimpleVote_Table/AddSelector/ServiceSimpleVoteSimpleVote_TableAddSelector'),
);

export interface ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActions
  extends ServiceSimpleVoteSimpleVote_TableAddSelectorActionDefinitions {
  addAction?: (selected: ServiceSimpleVoteStored[]) => Promise<void>;
  backAction?: () => Promise<void>;
}

export interface ServiceSimpleVoteSimpleVote_TableAddSelectorDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceSimpleVoteStored[];
  selectionDiff: ServiceSimpleVoteStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceSimpleVoteStored[]>>;
  isDraft?: boolean;
}

// Name: service::SimpleVote::SimpleVote_Table::AddSelector
export default function ServiceSimpleVoteSimpleVote_TableAddSelectorDialog(
  props: ServiceSimpleVoteSimpleVote_TableAddSelectorDialogProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    ownerData,
    onClose,
    actions,
    isLoading,
    editMode,
    refreshCounter,
    selectionDiff,
    setSelectionDiff,
    alreadySelected,
    isDraft,
  } = props;

  return (
    <>
      <DialogTitle>
        {isDraft ? t('judo') : actions.getPageTitle ? actions.getPageTitle() : ''}
        <IconButton
          id="User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceSimpleVoteSimpleVote_TableAddSelector
            actions={actions}
            refreshCounter={refreshCounter}
            isLoading={isLoading}
            selectionDiff={selectionDiff}
            setSelectionDiff={setSelectionDiff}
            alreadySelected={alreadySelected}
            isDraft={isDraft}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.SimpleVote.SimpleVote_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.addAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorAddButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              disabled={!selectionDiff.length}
              startIcon={<MdiIcon path="attachment-plus" />}
              onClick={async () => {
                await actions.addAction!(selectionDiff);
              }}
            >
              <span>{t('service.SimpleVote.SimpleVote_Table.Add', { defaultValue: 'Add' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
