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
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/services/data-api';
import type { ServiceVoteDefinitionVoteDefinition_TableAddSelectorActionDefinitions } from './ServiceVoteDefinitionVoteDefinition_TableAddSelector';

const ServiceVoteDefinitionVoteDefinition_TableAddSelector = lazy(
  () =>
    import(
      '~/containers/Service/VoteDefinition/VoteDefinition_Table/AddSelector/ServiceVoteDefinitionVoteDefinition_TableAddSelector'
    ),
);

export interface ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogActions
  extends ServiceVoteDefinitionVoteDefinition_TableAddSelectorActionDefinitions {
  addAction?: (selected: ServiceVoteDefinitionStored[]) => Promise<void>;
  backAction?: () => Promise<void>;
}

export interface ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceVoteDefinitionStored[];
  selectionDiff: ServiceVoteDefinitionStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceVoteDefinitionStored[]>>;
}

// Name: service::VoteDefinition::VoteDefinition_Table::AddSelector
export default function ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialog(
  props: ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    ownerData,
    title,
    onClose,
    actions,
    isLoading,
    editMode,
    refreshCounter,
    selectionDiff,
    setSelectionDiff,
    alreadySelected,
  } = props;

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceVoteDefinitionVoteDefinition_TableAddSelector
            actions={actions}
            refreshCounter={refreshCounter}
            selectionDiff={selectionDiff}
            setSelectionDiff={setSelectionDiff}
            alreadySelected={alreadySelected}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.VoteDefinition.VoteDefinition_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.addAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorAddButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              disabled={!selectionDiff.length}
              startIcon={<MdiIcon path="attachment-plus" />}
              onClick={async () => {
                await actions.addAction!(selectionDiff);
              }}
            >
              <span>{t('service.VoteDefinition.VoteDefinition_Table.Add', { defaultValue: 'Add' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
