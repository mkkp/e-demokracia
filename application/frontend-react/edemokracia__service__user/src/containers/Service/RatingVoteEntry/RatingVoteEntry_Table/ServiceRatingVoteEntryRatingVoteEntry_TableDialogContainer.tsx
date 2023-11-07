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
import type { ServiceRatingVoteEntryRatingVoteEntry_TableActionDefinitions } from './ServiceRatingVoteEntryRatingVoteEntry_Table';
import type {
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryStored,
  ServiceRatingVoteEntryQueryCustomizer,
} from '~/services/data-api';

const ServiceRatingVoteEntryRatingVoteEntry_Table = lazy(
  () =>
    import('~/containers/Service/RatingVoteEntry/RatingVoteEntry_Table/ServiceRatingVoteEntryRatingVoteEntry_Table'),
);

export interface ServiceRatingVoteEntryRatingVoteEntry_TableDialogActions
  extends ServiceRatingVoteEntryRatingVoteEntry_TableActionDefinitions {
  serviceRatingVoteEntryRatingVoteEntry_TableBack?: () => Promise<void>;
}

export interface ServiceRatingVoteEntryRatingVoteEntry_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceRatingVoteEntryRatingVoteEntry_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::RatingVoteEntry::RatingVoteEntry_Table
export default function ServiceRatingVoteEntryRatingVoteEntry_TableDialog(
  props: ServiceRatingVoteEntryRatingVoteEntry_TableDialogProps,
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
          id="ServiceRatingVoteEntryRatingVoteEntry_Table-dialog-close-wrapper"
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
          <ServiceRatingVoteEntryRatingVoteEntry_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceRatingVoteEntryRatingVoteEntry_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::RatingVoteEntry::RatingVoteEntry_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceRatingVoteEntryRatingVoteEntry_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.RatingVoteEntry.RatingVoteEntry.Table.service::RatingVoteEntry::RatingVoteEntry_Table::Back',
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
