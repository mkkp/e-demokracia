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
import type { ServiceConParentConParent_TableActionDefinitions } from './ServiceConParentConParent_Table';
import type { ServiceConParent, ServiceConParentStored, ServiceConParentQueryCustomizer } from '~/services/data-api';

const ServiceConParentConParent_Table = lazy(
  () => import('~/containers/Service/ConParent/ConParent_Table/ServiceConParentConParent_Table'),
);

export interface ServiceConParentConParent_TableDialogActions extends ServiceConParentConParent_TableActionDefinitions {
  serviceConParentConParent_TableBack?: () => Promise<void>;
}

export interface ServiceConParentConParent_TableDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceConParentConParent_TableDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::ConParent::ConParent_Table
export default function ServiceConParentConParent_TableDialog(props: ServiceConParentConParent_TableDialogProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { ownerData, title, onClose, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceConParentConParent_Table-dialog-close-wrapper"
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
          <ServiceConParentConParent_Table actions={actions} refreshCounter={refreshCounter} />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceConParentConParent_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::ConParent::ConParent_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceConParentConParent_TableBack!();
              }}
            >
              <span>
                {t('service.ConParent.ConParent.Table.service::ConParent::ConParent_Table::Back', {
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
