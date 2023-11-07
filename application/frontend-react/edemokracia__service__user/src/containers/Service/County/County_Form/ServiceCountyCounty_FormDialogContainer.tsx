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
import type { ServiceCountyCounty_FormActionDefinitions } from './ServiceCountyCounty_Form';
import type { ServiceCounty, ServiceCountyStored, ServiceCountyQueryCustomizer } from '~/services/data-api';

const ServiceCountyCounty_Form = lazy(() => import('~/containers/Service/County/County_Form/ServiceCountyCounty_Form'));

export interface ServiceCountyCounty_FormDialogActions extends ServiceCountyCounty_FormActionDefinitions {
  serviceCountyCounty_FormGetTemplate?: () => Promise<ServiceCounty>;
  serviceCountyCounty_FormBack?: () => Promise<void>;
  serviceCountyCounty_FormCreate?: () => Promise<void>;
}

export interface ServiceCountyCounty_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceCountyCounty_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceCounty;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCounty, value: any) => void;
  validation: Map<keyof ServiceCounty, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCounty, string>>>;
}

// Name: service::County::County_Form
export default function ServiceCountyCounty_FormDialog(props: ServiceCountyCounty_FormDialogProps) {
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
  const queryCustomizer: ServiceCountyQueryCustomizer = {
    _mask: '{name}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceCountyCounty_Form-dialog-close-wrapper"
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
          <ServiceCountyCounty_Form
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
        {editMode && actions.serviceCountyCounty_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::County::County_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceCountyCounty_FormBack!();
              }}
            >
              <span>
                {t('service.County.County.Form.service::County::County_Form::Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceCountyCounty_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::County::County_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceCountyCounty_FormCreate!();
              }}
            >
              <span>
                {t('service.County.County.Form.service::County::County_Form::Create', { defaultValue: 'Create' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
