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
import type { ServiceServiceUserServiceUser_TableActionDefinitions } from './ServiceServiceUserServiceUser_Table';
import type {
  ServiceServiceUser,
  ServiceServiceUserStored,
  ServiceServiceUserQueryCustomizer,
} from '~/services/data-api';

const ServiceServiceUserServiceUser_Table = lazy(
  () => import('~/containers/Service/ServiceUser/ServiceUser_Table/ServiceServiceUserServiceUser_Table'),
);

export interface ServiceServiceUserServiceUser_TableDialogActions
  extends ServiceServiceUserServiceUser_TableActionDefinitions {
  serviceServiceUserServiceUser_TableBack?: () => Promise<void>;
}

export interface ServiceServiceUserServiceUser_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceServiceUserServiceUser_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::ServiceUser::ServiceUser_Table
export default function ServiceServiceUserServiceUser_TableDialog(
  props: ServiceServiceUserServiceUser_TableDialogProps,
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
          id="ServiceServiceUserServiceUser_Table-dialog-close-wrapper"
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
          <ServiceServiceUserServiceUser_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceServiceUserServiceUser_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::ServiceUser::ServiceUser_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceServiceUserServiceUser_TableBack!();
              }}
            >
              <span>
                {t('service.ServiceUser.ServiceUser.Table.service::ServiceUser::ServiceUser_Table::Back', {
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
