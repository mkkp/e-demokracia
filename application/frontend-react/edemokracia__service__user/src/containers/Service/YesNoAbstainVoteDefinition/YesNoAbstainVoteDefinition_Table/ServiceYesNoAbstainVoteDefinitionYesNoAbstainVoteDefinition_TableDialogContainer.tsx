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
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableActionDefinitions } from './ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_Table';
import type {
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
} from '~/services/data-api';

const ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_Table = lazy(
  () =>
    import(
      '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_Table/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_Table'
    ),
);

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableDialogActions
  extends ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableActionDefinitions {
  serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableBack?: () => Promise<void>;
}

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_Table
export default function ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableDialog(
  props: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableDialogProps,
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
          id="ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_Table-dialog-close-wrapper"
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
          <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_Table
            actions={actions}
            refreshCounter={refreshCounter}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition.Table.service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_Table::Back',
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
