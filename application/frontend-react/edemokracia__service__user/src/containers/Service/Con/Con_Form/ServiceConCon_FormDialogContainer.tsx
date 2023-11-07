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
import type { ServiceConCon_FormActionDefinitions } from './ServiceConCon_Form';
import type { ServiceCon, ServiceConStored, ServiceConQueryCustomizer } from '~/services/data-api';

const ServiceConCon_Form = lazy(() => import('~/containers/Service/Con/Con_Form/ServiceConCon_Form'));

export interface ServiceConCon_FormDialogActions extends ServiceConCon_FormActionDefinitions {
  serviceConCon_FormGetTemplate?: () => Promise<ServiceCon>;
  serviceConCon_FormBack?: () => Promise<void>;
  serviceConCon_FormCreate?: () => Promise<void>;
}

export interface ServiceConCon_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceConCon_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceCon;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCon, value: any) => void;
  validation: Map<keyof ServiceCon, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCon, string>>>;
}

// Name: service::Con::Con_Form
export default function ServiceConCon_FormDialog(props: ServiceConCon_FormDialogProps) {
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
  const queryCustomizer: ServiceConQueryCustomizer = {
    _mask:
      '{createdByName,created,description,upVotes,title,downVotes,cons{createdByName,created,description,title,upVotes,downVotes},pros{createdByName,created,description,title,upVotes,downVotes},createdBy{firstName,lastName,phone,email,isAdmin,created,userName,representation}}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceConCon_Form-dialog-close-wrapper"
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
          <ServiceConCon_Form
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
        {editMode && actions.serviceConCon_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Con::Con_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceConCon_FormBack!();
              }}
            >
              <span>{t('service.Con.Con.Form.service::Con::Con_Form::Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceConCon_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Con::Con_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceConCon_FormCreate!();
              }}
            >
              <span>{t('service.Con.Con.Form.service::Con::Con_Form::Create', { defaultValue: 'Create' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
