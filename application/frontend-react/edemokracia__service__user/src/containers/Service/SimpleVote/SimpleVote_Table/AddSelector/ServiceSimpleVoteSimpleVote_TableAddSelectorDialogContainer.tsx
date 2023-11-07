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
import type { ServiceSimpleVoteSimpleVote_TableAddSelectorActionDefinitions } from './ServiceSimpleVoteSimpleVote_TableAddSelector';
import type { ServiceSimpleVote, ServiceSimpleVoteStored, ServiceSimpleVoteQueryCustomizer } from '~/services/data-api';

const ServiceSimpleVoteSimpleVote_TableAddSelector = lazy(
  () =>
    import('~/containers/Service/SimpleVote/SimpleVote_Table/AddSelector/ServiceSimpleVoteSimpleVote_TableAddSelector'),
);

export interface ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActions
  extends ServiceSimpleVoteSimpleVote_TableAddSelectorActionDefinitions {
  serviceSimpleVoteSimpleVote_TableAdd?: (selected: ServiceSimpleVoteStored[]) => Promise<void>;
  serviceSimpleVoteSimpleVote_TableBack?: () => Promise<void>;
}

export interface ServiceSimpleVoteSimpleVote_TableAddSelectorDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceSimpleVoteStored[];
  selectionDiff: ServiceSimpleVoteStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceSimpleVoteStored[]>>;
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
    title,
    onClose,
    actions,
    isLoading,
    editMode,
    refreshCounter,
    selectionDiff,
    setSelectionDiff,
    alreadySelected,
  } = props;

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceSimpleVoteSimpleVote_TableAddSelector-dialog-close-wrapper"
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
            selectionDiff={selectionDiff}
            setSelectionDiff={setSelectionDiff}
            alreadySelected={alreadySelected}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceSimpleVoteSimpleVote_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::SimpleVote::SimpleVote_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceSimpleVoteSimpleVote_TableBack!();
              }}
            >
              <span>
                {t('service.SimpleVote.SimpleVote.Table.AddSelector.service::SimpleVote::SimpleVote_Table::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceSimpleVoteSimpleVote_TableAdd && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::SimpleVote::SimpleVote_Table::Add"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="attachment-plus" />}
              onClick={async () => {
                await actions.serviceSimpleVoteSimpleVote_TableAdd!(selectionDiff);
              }}
            >
              <span>
                {t('service.SimpleVote.SimpleVote.Table.AddSelector.service::SimpleVote::SimpleVote_Table::Add', {
                  defaultValue: 'Add',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
