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
import type { ServiceServicePrincipalUserServicePrincipalUser_TableActionDefinitions } from './ServiceServicePrincipalUserServicePrincipalUser_Table';
import type {
  ServiceServicePrincipalUser,
  ServiceServicePrincipalUserStored,
  ServiceServicePrincipalUserQueryCustomizer,
} from '~/services/data-api';

const ServiceServicePrincipalUserServicePrincipalUser_Table = lazy(
  () =>
    import(
      '~/containers/Service/ServicePrincipalUser/ServicePrincipalUser_Table/ServiceServicePrincipalUserServicePrincipalUser_Table'
    ),
);

export interface ServiceServicePrincipalUserServicePrincipalUser_TableDialogActions
  extends ServiceServicePrincipalUserServicePrincipalUser_TableActionDefinitions {
  serviceServicePrincipalUserServicePrincipalUser_TableBack?: () => Promise<void>;
}

export interface ServiceServicePrincipalUserServicePrincipalUser_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceServicePrincipalUserServicePrincipalUser_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::ServicePrincipalUser::ServicePrincipalUser_Table
export default function ServiceServicePrincipalUserServicePrincipalUser_TableDialog(
  props: ServiceServicePrincipalUserServicePrincipalUser_TableDialogProps,
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
          id="ServiceServicePrincipalUserServicePrincipalUser_Table-dialog-close-wrapper"
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
          <ServiceServicePrincipalUserServicePrincipalUser_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceServicePrincipalUserServicePrincipalUser_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::ServicePrincipalUser::ServicePrincipalUser_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceServicePrincipalUserServicePrincipalUser_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.ServicePrincipalUser.ServicePrincipalUser.Table.service::ServicePrincipalUser::ServicePrincipalUser_Table::Back',
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
