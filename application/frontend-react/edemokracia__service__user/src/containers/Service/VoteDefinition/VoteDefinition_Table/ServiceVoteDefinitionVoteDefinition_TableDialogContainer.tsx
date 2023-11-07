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
import type { ServiceVoteDefinitionVoteDefinition_TableActionDefinitions } from './ServiceVoteDefinitionVoteDefinition_Table';
import type {
  ServiceVoteDefinition,
  ServiceVoteDefinitionStored,
  ServiceVoteDefinitionQueryCustomizer,
} from '~/services/data-api';

const ServiceVoteDefinitionVoteDefinition_Table = lazy(
  () => import('~/containers/Service/VoteDefinition/VoteDefinition_Table/ServiceVoteDefinitionVoteDefinition_Table'),
);

export interface ServiceVoteDefinitionVoteDefinition_TableDialogActions
  extends ServiceVoteDefinitionVoteDefinition_TableActionDefinitions {
  serviceVoteDefinitionVoteDefinition_TableBack?: () => Promise<void>;
}

export interface ServiceVoteDefinitionVoteDefinition_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceVoteDefinitionVoteDefinition_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::VoteDefinition::VoteDefinition_Table
export default function ServiceVoteDefinitionVoteDefinition_TableDialog(
  props: ServiceVoteDefinitionVoteDefinition_TableDialogProps,
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
          id="ServiceVoteDefinitionVoteDefinition_Table-dialog-close-wrapper"
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
          <ServiceVoteDefinitionVoteDefinition_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceVoteDefinitionVoteDefinition_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::VoteDefinition::VoteDefinition_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceVoteDefinitionVoteDefinition_TableBack!();
              }}
            >
              <span>
                {t('service.VoteDefinition.VoteDefinition.Table.service::VoteDefinition::VoteDefinition_Table::Back', {
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
