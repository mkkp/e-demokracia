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
import type { ServiceCountyCounty_TableActionDefinitions } from './ServiceCountyCounty_Table';
import type { ServiceCounty, ServiceCountyStored, ServiceCountyQueryCustomizer } from '~/services/data-api';

const ServiceCountyCounty_Table = lazy(
  () => import('~/containers/Service/County/County_Table/ServiceCountyCounty_Table'),
);

export interface ServiceCountyCounty_TableDialogActions extends ServiceCountyCounty_TableActionDefinitions {
  serviceCountyCounty_TableBack?: () => Promise<void>;
}

export interface ServiceCountyCounty_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceCountyCounty_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::County::County_Table
export default function ServiceCountyCounty_TableDialog(props: ServiceCountyCounty_TableDialogProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { ownerData, title, onClose, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceCountyCounty_Table-dialog-close-wrapper"
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
          <ServiceCountyCounty_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceCountyCounty_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::County::County_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceCountyCounty_TableBack!();
              }}
            >
              <span>
                {t('service.County.County.Table.service::County::County_Table::Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
