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
import type {
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceRatingVoteEntryStored,
} from '~/services/data-api';
import type { ServiceRatingVoteEntryRatingVoteEntry_TableActionDefinitions } from './ServiceRatingVoteEntryRatingVoteEntry_Table';

const ServiceRatingVoteEntryRatingVoteEntry_Table = lazy(
  () =>
    import('~/containers/Service/RatingVoteEntry/RatingVoteEntry_Table/ServiceRatingVoteEntryRatingVoteEntry_Table'),
);

export interface ServiceRatingVoteEntryRatingVoteEntry_TableDialogActions
  extends ServiceRatingVoteEntryRatingVoteEntry_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface ServiceRatingVoteEntryRatingVoteEntry_TableDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceRatingVoteEntryRatingVoteEntry_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  isDraft?: boolean;
}

// Name: service::RatingVoteEntry::RatingVoteEntry_Table
export default function ServiceRatingVoteEntryRatingVoteEntry_TableDialog(
  props: ServiceRatingVoteEntryRatingVoteEntry_TableDialogProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { ownerData, onClose, actions, isLoading, editMode, refreshCounter, isDraft } = props;

  return (
    <>
      <DialogTitle>
        {isDraft ? t('judo') : actions.getPageTitle ? actions.getPageTitle() : ''}
        <IconButton
          id="User/(esm/_J1KA4FslEe6Mx9dH3yj5gQ)/TransferObjectTablePageContainer-dialog-close-wrapper"
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
          <ServiceRatingVoteEntryRatingVoteEntry_Table
            actions={actions}
            refreshCounter={refreshCounter}
            isLoading={isLoading}
            isDraft={isDraft}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_J1KA4FslEe6Mx9dH3yj5gQ)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.RatingVoteEntry.RatingVoteEntry_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
