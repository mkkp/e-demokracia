//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'DialogContainer.tsx'
// Template name: actor/src/containers/dialog.tsx
// Template file: actor/src/containers/dialog.tsx.hbs

import { lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation, MdiIcon } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { processQueryCustomizer } from '~/utilities';
import type { ServiceDistrictDistrict_FormActionDefinitions } from './ServiceDistrictDistrict_Form';
import type { ServiceDistrict, ServiceDistrictStored, ServiceDistrictQueryCustomizer } from '~/services/data-api';

const ServiceDistrictDistrict_Form = lazy(
  () => import('~/containers/Service/District/District_Form/ServiceDistrictDistrict_Form'),
);

export interface ServiceDistrictDistrict_FormDialogActions extends ServiceDistrictDistrict_FormActionDefinitions {
  getTemplateAction?: () => Promise<ServiceDistrict>;
  backAction?: () => Promise<void>;
  createAction?: () => Promise<void>;
}

export interface ServiceDistrictDistrict_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: ServiceDistrictDistrict_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceDistrictStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceDistrict, value: any) => void;
  validation: Map<keyof ServiceDistrict, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceDistrict, string>>>;
  submit: () => Promise<void>;
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
    submit,
  } = props;
  const queryCustomizer: ServiceDistrictQueryCustomizer = {
    _mask: '{name}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="User/(esm/_a0UhZH2iEe2LTNnGda5kaw)/TransferObjectFormPageContainer-dialog-close-wrapper"
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
            submit={submit}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_a0UhZH2iEe2LTNnGda5kaw)/TransferObjectFormBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.District.District_Form.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_a0UhZH2iEe2LTNnGda5kaw)/TransferObjectFormCreateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.createAction!();
              }}
            >
              <span>{t('service.District.District_Form.Create', { defaultValue: 'Create' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
