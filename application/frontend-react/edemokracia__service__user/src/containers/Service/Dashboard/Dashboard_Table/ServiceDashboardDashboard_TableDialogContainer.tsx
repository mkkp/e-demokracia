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
import type { ServiceDashboardDashboard_TableActionDefinitions } from './ServiceDashboardDashboard_Table';
import type { ServiceDashboard, ServiceDashboardStored, ServiceDashboardQueryCustomizer } from '~/services/data-api';

const ServiceDashboardDashboard_Table = lazy(
  () => import('~/containers/Service/Dashboard/Dashboard_Table/ServiceDashboardDashboard_Table'),
);

export interface ServiceDashboardDashboard_TableDialogActions extends ServiceDashboardDashboard_TableActionDefinitions {
  serviceDashboardDashboard_TableBack?: () => Promise<void>;
}

export interface ServiceDashboardDashboard_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceDashboardDashboard_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::Dashboard::Dashboard_Table
export default function ServiceDashboardDashboard_TableDialog(props: ServiceDashboardDashboard_TableDialogProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { ownerData, title, onClose, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceDashboardDashboard_Table-dialog-close-wrapper"
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
          <ServiceDashboardDashboard_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceDashboardDashboard_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Dashboard::Dashboard_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceDashboardDashboard_TableBack!();
              }}
            >
              <span>
                {t('service.Dashboard.Dashboard.Table.service::Dashboard::Dashboard_Table::Back', {
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
