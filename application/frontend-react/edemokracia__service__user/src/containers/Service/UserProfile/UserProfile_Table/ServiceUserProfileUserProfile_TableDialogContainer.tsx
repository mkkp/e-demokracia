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
import type { ServiceUserProfileUserProfile_TableActionDefinitions } from './ServiceUserProfileUserProfile_Table';
import type {
  ServiceUserProfile,
  ServiceUserProfileStored,
  ServiceUserProfileQueryCustomizer,
} from '~/services/data-api';

const ServiceUserProfileUserProfile_Table = lazy(
  () => import('~/containers/Service/UserProfile/UserProfile_Table/ServiceUserProfileUserProfile_Table'),
);

export interface ServiceUserProfileUserProfile_TableDialogActions
  extends ServiceUserProfileUserProfile_TableActionDefinitions {
  serviceUserProfileUserProfile_TableBack?: () => Promise<void>;
}

export interface ServiceUserProfileUserProfile_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceUserProfileUserProfile_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::UserProfile::UserProfile_Table
export default function ServiceUserProfileUserProfile_TableDialog(
  props: ServiceUserProfileUserProfile_TableDialogProps,
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
          id="ServiceUserProfileUserProfile_Table-dialog-close-wrapper"
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
          <ServiceUserProfileUserProfile_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceUserProfileUserProfile_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::UserProfile::UserProfile_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceUserProfileUserProfile_TableBack!();
              }}
            >
              <span>
                {t('service.UserProfile.UserProfile.Table.service::UserProfile::UserProfile_Table::Back', {
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
