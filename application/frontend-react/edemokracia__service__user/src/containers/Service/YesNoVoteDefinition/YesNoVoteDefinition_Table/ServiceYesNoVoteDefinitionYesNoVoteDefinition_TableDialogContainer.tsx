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
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableActionDefinitions } from './ServiceYesNoVoteDefinitionYesNoVoteDefinition_Table';
import type {
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteDefinitionQueryCustomizer,
} from '~/services/data-api';

const ServiceYesNoVoteDefinitionYesNoVoteDefinition_Table = lazy(
  () =>
    import(
      '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_Table/ServiceYesNoVoteDefinitionYesNoVoteDefinition_Table'
    ),
);

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableDialogActions
  extends ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableActionDefinitions {
  serviceYesNoVoteDefinitionYesNoVoteDefinition_TableBack?: () => Promise<void>;
}

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::YesNoVoteDefinition::YesNoVoteDefinition_Table
export default function ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableDialog(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableDialogProps,
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
          id="ServiceYesNoVoteDefinitionYesNoVoteDefinition_Table-dialog-close-wrapper"
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
          <ServiceYesNoVoteDefinitionYesNoVoteDefinition_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::YesNoVoteDefinition::YesNoVoteDefinition_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.YesNoVoteDefinition.YesNoVoteDefinition.Table.service::YesNoVoteDefinition::YesNoVoteDefinition_Table::Back',
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
