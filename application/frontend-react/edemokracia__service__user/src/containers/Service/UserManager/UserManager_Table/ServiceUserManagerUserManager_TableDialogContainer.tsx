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
import type { ServiceUserManagerUserManager_TableActionDefinitions } from './ServiceUserManagerUserManager_Table';
import type {
  ServiceUserManager,
  ServiceUserManagerStored,
  ServiceUserManagerQueryCustomizer,
} from '~/services/data-api';

const ServiceUserManagerUserManager_Table = lazy(
  () => import('~/containers/Service/UserManager/UserManager_Table/ServiceUserManagerUserManager_Table'),
);

export interface ServiceUserManagerUserManager_TableDialogActions
  extends ServiceUserManagerUserManager_TableActionDefinitions {
  serviceUserManagerUserManager_TableBack?: () => Promise<void>;
}

export interface ServiceUserManagerUserManager_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceUserManagerUserManager_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::UserManager::UserManager_Table
export default function ServiceUserManagerUserManager_TableDialog(
  props: ServiceUserManagerUserManager_TableDialogProps,
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
          id="ServiceUserManagerUserManager_Table-dialog-close-wrapper"
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
          <ServiceUserManagerUserManager_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceUserManagerUserManager_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::UserManager::UserManager_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceUserManagerUserManager_TableBack!();
              }}
            >
              <span>
                {t('service.UserManager.UserManager.Table.service::UserManager::UserManager_Table::Back', {
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
