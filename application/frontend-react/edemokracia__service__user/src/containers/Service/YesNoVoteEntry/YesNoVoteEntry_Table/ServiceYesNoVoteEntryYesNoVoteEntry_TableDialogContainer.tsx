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
import type { ServiceYesNoVoteEntryYesNoVoteEntry_TableActionDefinitions } from './ServiceYesNoVoteEntryYesNoVoteEntry_Table';
import type {
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryStored,
  ServiceYesNoVoteEntryQueryCustomizer,
} from '~/services/data-api';

const ServiceYesNoVoteEntryYesNoVoteEntry_Table = lazy(
  () => import('~/containers/Service/YesNoVoteEntry/YesNoVoteEntry_Table/ServiceYesNoVoteEntryYesNoVoteEntry_Table'),
);

export interface ServiceYesNoVoteEntryYesNoVoteEntry_TableDialogActions
  extends ServiceYesNoVoteEntryYesNoVoteEntry_TableActionDefinitions {
  serviceYesNoVoteEntryYesNoVoteEntry_TableBack?: () => Promise<void>;
}

export interface ServiceYesNoVoteEntryYesNoVoteEntry_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceYesNoVoteEntryYesNoVoteEntry_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::YesNoVoteEntry::YesNoVoteEntry_Table
export default function ServiceYesNoVoteEntryYesNoVoteEntry_TableDialog(
  props: ServiceYesNoVoteEntryYesNoVoteEntry_TableDialogProps,
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
          id="ServiceYesNoVoteEntryYesNoVoteEntry_Table-dialog-close-wrapper"
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
          <ServiceYesNoVoteEntryYesNoVoteEntry_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceYesNoVoteEntryYesNoVoteEntry_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::YesNoVoteEntry::YesNoVoteEntry_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceYesNoVoteEntryYesNoVoteEntry_TableBack!();
              }}
            >
              <span>
                {t('service.YesNoVoteEntry.YesNoVoteEntry.Table.service::YesNoVoteEntry::YesNoVoteEntry_Table::Back', {
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
