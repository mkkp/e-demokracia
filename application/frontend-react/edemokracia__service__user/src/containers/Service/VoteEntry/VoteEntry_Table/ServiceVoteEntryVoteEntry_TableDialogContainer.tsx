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
import type { ServiceVoteEntryVoteEntry_TableActionDefinitions } from './ServiceVoteEntryVoteEntry_Table';
import type { ServiceVoteEntry, ServiceVoteEntryStored, ServiceVoteEntryQueryCustomizer } from '~/services/data-api';

const ServiceVoteEntryVoteEntry_Table = lazy(
  () => import('~/containers/Service/VoteEntry/VoteEntry_Table/ServiceVoteEntryVoteEntry_Table'),
);

export interface ServiceVoteEntryVoteEntry_TableDialogActions extends ServiceVoteEntryVoteEntry_TableActionDefinitions {
  serviceVoteEntryVoteEntry_TableBack?: () => Promise<void>;
}

export interface ServiceVoteEntryVoteEntry_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceVoteEntryVoteEntry_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::VoteEntry::VoteEntry_Table
export default function ServiceVoteEntryVoteEntry_TableDialog(props: ServiceVoteEntryVoteEntry_TableDialogProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { ownerData, title, onClose, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceVoteEntryVoteEntry_Table-dialog-close-wrapper"
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
          <ServiceVoteEntryVoteEntry_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceVoteEntryVoteEntry_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::VoteEntry::VoteEntry_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceVoteEntryVoteEntry_TableBack!();
              }}
            >
              <span>
                {t('service.VoteEntry.VoteEntry.Table.service::VoteEntry::VoteEntry_Table::Back', {
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
