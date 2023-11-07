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
import type { ServiceProPro_TableActionDefinitions } from './ServiceProPro_Table';
import type { ServicePro, ServiceProStored, ServiceProQueryCustomizer } from '~/services/data-api';

const ServiceProPro_Table = lazy(() => import('~/containers/Service/Pro/Pro_Table/ServiceProPro_Table'));

export interface ServiceProPro_TableDialogActions extends ServiceProPro_TableActionDefinitions {
  serviceProPro_TableBack?: () => Promise<void>;
}

export interface ServiceProPro_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceProPro_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::Pro::Pro_Table
export default function ServiceProPro_TableDialog(props: ServiceProPro_TableDialogProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { ownerData, title, onClose, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceProPro_Table-dialog-close-wrapper"
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
          <ServiceProPro_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceProPro_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Pro::Pro_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceProPro_TableBack!();
              }}
            >
              <span>{t('service.Pro.Pro.Table.service::Pro::Pro_Table::Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
