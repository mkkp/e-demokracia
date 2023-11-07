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
import type { ServiceProParentProParent_TableActionDefinitions } from './ServiceProParentProParent_Table';
import type { ServiceProParent, ServiceProParentStored, ServiceProParentQueryCustomizer } from '~/services/data-api';

const ServiceProParentProParent_Table = lazy(
  () => import('~/containers/Service/ProParent/ProParent_Table/ServiceProParentProParent_Table'),
);

export interface ServiceProParentProParent_TableDialogActions extends ServiceProParentProParent_TableActionDefinitions {
  serviceProParentProParent_TableBack?: () => Promise<void>;
}

export interface ServiceProParentProParent_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceProParentProParent_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::ProParent::ProParent_Table
export default function ServiceProParentProParent_TableDialog(props: ServiceProParentProParent_TableDialogProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { ownerData, title, onClose, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceProParentProParent_Table-dialog-close-wrapper"
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
          <ServiceProParentProParent_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceProParentProParent_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::ProParent::ProParent_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceProParentProParent_TableBack!();
              }}
            >
              <span>
                {t('service.ProParent.ProParent.Table.service::ProParent::ProParent_Table::Back', {
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
