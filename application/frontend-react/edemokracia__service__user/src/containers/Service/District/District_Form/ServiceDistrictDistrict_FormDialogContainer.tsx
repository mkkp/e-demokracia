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
import type { ServiceDistrictDistrict_FormActionDefinitions } from './ServiceDistrictDistrict_Form';
import type { ServiceDistrict, ServiceDistrictStored, ServiceDistrictQueryCustomizer } from '~/services/data-api';

const ServiceDistrictDistrict_Form = lazy(
  () => import('~/containers/Service/District/District_Form/ServiceDistrictDistrict_Form'),
);

export interface ServiceDistrictDistrict_FormDialogActions extends ServiceDistrictDistrict_FormActionDefinitions {
  serviceDistrictDistrict_FormGetTemplate?: () => Promise<ServiceDistrict>;
  serviceDistrictDistrict_FormBack?: () => Promise<void>;
  serviceDistrictDistrict_FormCreate?: () => Promise<void>;
}

export interface ServiceDistrictDistrict_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceDistrictDistrict_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceDistrict;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceDistrict, value: any) => void;
  validation: Map<keyof ServiceDistrict, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceDistrict, string>>>;
}

// Name: service::District::District_Form
export default function ServiceDistrictDistrict_FormDialog(props: ServiceDistrictDistrict_FormDialogProps) {
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
  const queryCustomizer: ServiceDistrictQueryCustomizer = {
    _mask: '{name}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceDistrictDistrict_Form-dialog-close-wrapper"
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
          <ServiceDistrictDistrict_Form
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
        {editMode && actions.serviceDistrictDistrict_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::District::District_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceDistrictDistrict_FormBack!();
              }}
            >
              <span>
                {t('service.District.District.Form.service::District::District_Form::Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceDistrictDistrict_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::District::District_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceDistrictDistrict_FormCreate!();
              }}
            >
              <span>
                {t('service.District.District.Form.service::District::District_Form::Create', {
                  defaultValue: 'Create',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
