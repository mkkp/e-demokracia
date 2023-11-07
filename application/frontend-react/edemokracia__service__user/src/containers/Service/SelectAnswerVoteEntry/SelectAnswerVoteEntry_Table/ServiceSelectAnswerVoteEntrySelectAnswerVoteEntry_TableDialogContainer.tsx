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
import type { ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_TableActionDefinitions } from './ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_Table';
import type {
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryStored,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
} from '~/services/data-api';

const ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_Table = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteEntry/SelectAnswerVoteEntry_Table/ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_Table'
    ),
);

export interface ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_TableDialogActions
  extends ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_TableActionDefinitions {
  serviceSelectAnswerVoteEntrySelectAnswerVoteEntry_TableBack?: () => Promise<void>;
}

export interface ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::SelectAnswerVoteEntry::SelectAnswerVoteEntry_Table
export default function ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_TableDialog(
  props: ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_TableDialogProps,
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
          id="ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_Table-dialog-close-wrapper"
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
          <ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceSelectAnswerVoteEntrySelectAnswerVoteEntry_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::SelectAnswerVoteEntry::SelectAnswerVoteEntry_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceSelectAnswerVoteEntrySelectAnswerVoteEntry_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.SelectAnswerVoteEntry.SelectAnswerVoteEntry.Table.service::SelectAnswerVoteEntry::SelectAnswerVoteEntry_Table::Back',
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
