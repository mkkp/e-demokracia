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
import type { ServiceDistrictDistrict_TableSetSelectorActionDefinitions } from './ServiceDistrictDistrict_TableSetSelector';
import type { ServiceDistrict, ServiceDistrictStored, ServiceDistrictQueryCustomizer } from '~/services/data-api';

const ServiceDistrictDistrict_TableSetSelector = lazy(
  () => import('~/containers/Service/District/District_Table/SetSelector/ServiceDistrictDistrict_TableSetSelector'),
);

export interface ServiceDistrictDistrict_TableSetSelectorDialogActions
  extends ServiceDistrictDistrict_TableSetSelectorActionDefinitions {
  backAction?: () => Promise<void>;
  setAction?: (selected: ServiceDistrictStored[]) => Promise<void>;
}

export interface ServiceDistrictDistrict_TableSetSelectorDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: ServiceDistrictDistrict_TableSetSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceDistrictStored[];
  selectionDiff: ServiceDistrictStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceDistrictStored[]>>;
}

// Name: service::District::District_Table::SetSelector
export default function ServiceDistrictDistrict_TableSetSelectorDialog(
  props: ServiceDistrictDistrict_TableSetSelectorDialogProps,
) {
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
    selectionDiff,
    setSelectionDiff,
    alreadySelected,
  } = props;

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableSetSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceDistrictDistrict_TableSetSelector
            actions={actions}
            refreshCounter={refreshCounter}
            selectionDiff={selectionDiff}
            setSelectionDiff={setSelectionDiff}
            alreadySelected={alreadySelected}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableSetSelectorBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.District.District_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.setAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableSetSelectorSetButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="attachment-plus" />}
              onClick={async () => {
                await actions.setAction!(selectionDiff);
              }}
            >
              <span>{t('service.District.District_Table.Set', { defaultValue: 'Set' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
