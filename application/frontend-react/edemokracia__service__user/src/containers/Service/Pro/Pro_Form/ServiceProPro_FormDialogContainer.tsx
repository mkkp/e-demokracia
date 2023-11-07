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
import { processQueryCustomizer } from '~/utilities';
import type { ServiceProPro_FormActionDefinitions } from './ServiceProPro_Form';
import type { ServicePro, ServiceProStored, ServiceProQueryCustomizer } from '~/services/data-api';

const ServiceProPro_Form = lazy(() => import('~/containers/Service/Pro/Pro_Form/ServiceProPro_Form'));

export interface ServiceProPro_FormDialogActions extends ServiceProPro_FormActionDefinitions {
  serviceProPro_FormGetTemplate?: () => Promise<ServicePro>;
  serviceProPro_FormBack?: () => Promise<void>;
  serviceProPro_FormCreate?: () => Promise<void>;
}

export interface ServiceProPro_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceProPro_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServicePro;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServicePro, value: any) => void;
  validation: Map<keyof ServicePro, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServicePro, string>>>;
}

// Name: service::Pro::Pro_Form
export default function ServiceProPro_FormDialog(props: ServiceProPro_FormDialogProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    ownerData,
    title,
    onClose,
    actions,
    isLoading,
    editMode,
    refreshCounter,
    data,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    validation,
    setValidation,
  } = props;
  const queryCustomizer: ServiceProQueryCustomizer = {
    _mask:
      '{createdByName,created,upVotes,description,title,downVotes,cons{createdByName,created,description,title,upVotes,downVotes},pros{createdByName,created,description,title,upVotes,downVotes},createdBy{firstName,lastName,phone,email,isAdmin,created,userName,representation}}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceProPro_Form-dialog-close-wrapper"
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
          <ServiceProPro_Form
            actions={actions}
            refreshCounter={refreshCounter}
            data={data}
            isLoading={isLoading}
            editMode={editMode}
            storeDiff={storeDiff}
            isFormUpdateable={isFormUpdateable}
            isFormDeleteable={isFormDeleteable}
            validation={validation}
            setValidation={setValidation}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {editMode && actions.serviceProPro_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Pro::Pro_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceProPro_FormBack!();
              }}
            >
              <span>{t('service.Pro.Pro.Form.service::Pro::Pro_Form::Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceProPro_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Pro::Pro_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceProPro_FormCreate!();
              }}
            >
              <span>{t('service.Pro.Pro.Form.service::Pro::Pro_Form::Create', { defaultValue: 'Create' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
