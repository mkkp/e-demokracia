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
import type { ServiceRatingVoteDefinitionRatingVoteDefinition_TableActionDefinitions } from './ServiceRatingVoteDefinitionRatingVoteDefinition_Table';
import type {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionStored,
  ServiceRatingVoteDefinitionQueryCustomizer,
} from '~/services/data-api';

const ServiceRatingVoteDefinitionRatingVoteDefinition_Table = lazy(
  () =>
    import(
      '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_Table/ServiceRatingVoteDefinitionRatingVoteDefinition_Table'
    ),
);

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_TableDialogActions
  extends ServiceRatingVoteDefinitionRatingVoteDefinition_TableActionDefinitions {
  serviceRatingVoteDefinitionRatingVoteDefinition_TableBack?: () => Promise<void>;
}

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceRatingVoteDefinitionRatingVoteDefinition_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::RatingVoteDefinition::RatingVoteDefinition_Table
export default function ServiceRatingVoteDefinitionRatingVoteDefinition_TableDialog(
  props: ServiceRatingVoteDefinitionRatingVoteDefinition_TableDialogProps,
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
          id="ServiceRatingVoteDefinitionRatingVoteDefinition_Table-dialog-close-wrapper"
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
          <ServiceRatingVoteDefinitionRatingVoteDefinition_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceRatingVoteDefinitionRatingVoteDefinition_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::RatingVoteDefinition::RatingVoteDefinition_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceRatingVoteDefinitionRatingVoteDefinition_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.RatingVoteDefinition.RatingVoteDefinition.Table.service::RatingVoteDefinition::RatingVoteDefinition_Table::Back',
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
