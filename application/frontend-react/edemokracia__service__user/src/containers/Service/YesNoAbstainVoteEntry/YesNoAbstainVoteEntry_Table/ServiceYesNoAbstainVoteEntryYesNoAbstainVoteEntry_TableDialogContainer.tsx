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
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntryStored,
} from '~/services/data-api';
import type { ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TableActionDefinitions } from './ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_Table';

const ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_Table = lazy(
  () =>
    import(
      '~/containers/Service/YesNoAbstainVoteEntry/YesNoAbstainVoteEntry_Table/ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_Table'
    ),
);

export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TableDialogActions
  extends ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TableDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  isDraft?: boolean;
}

// Name: service::YesNoAbstainVoteEntry::YesNoAbstainVoteEntry_Table
export default function ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TableDialog(
  props: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TableDialogProps,
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
          id="User/(esm/_L2wXIFsjEe6Mx9dH3yj5gQ)/TransferObjectTablePageContainer-dialog-close-wrapper"
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
          <ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_Table
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
              id="User/(esm/_L2wXIFsjEe6Mx9dH3yj5gQ)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t('service.YesNoAbstainVoteEntry.YesNoAbstainVoteEntry_Table.Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
