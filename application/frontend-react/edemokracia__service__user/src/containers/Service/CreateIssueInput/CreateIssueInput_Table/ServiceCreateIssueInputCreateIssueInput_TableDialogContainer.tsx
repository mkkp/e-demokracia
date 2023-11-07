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
import type { ServiceCreateIssueInputCreateIssueInput_TableActionDefinitions } from './ServiceCreateIssueInputCreateIssueInput_Table';
import type {
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
  ServiceCreateIssueInputQueryCustomizer,
} from '~/services/data-api';

const ServiceCreateIssueInputCreateIssueInput_Table = lazy(
  () =>
    import(
      '~/containers/Service/CreateIssueInput/CreateIssueInput_Table/ServiceCreateIssueInputCreateIssueInput_Table'
    ),
);

export interface ServiceCreateIssueInputCreateIssueInput_TableDialogActions
  extends ServiceCreateIssueInputCreateIssueInput_TableActionDefinitions {
  serviceCreateIssueInputCreateIssueInput_TableBack?: () => Promise<void>;
}

export interface ServiceCreateIssueInputCreateIssueInput_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceCreateIssueInputCreateIssueInput_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::CreateIssueInput::CreateIssueInput_Table
export default function ServiceCreateIssueInputCreateIssueInput_TableDialog(
  props: ServiceCreateIssueInputCreateIssueInput_TableDialogProps,
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
          id="ServiceCreateIssueInputCreateIssueInput_Table-dialog-close-wrapper"
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
          <ServiceCreateIssueInputCreateIssueInput_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceCreateIssueInputCreateIssueInput_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::CreateIssueInput::CreateIssueInput_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceCreateIssueInputCreateIssueInput_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.CreateIssueInput.CreateIssueInput.Table.service::CreateIssueInput::CreateIssueInput_Table::Back',
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
