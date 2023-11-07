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
import type { ServiceDistrictDistrict_TableSetSelectorActionDefinitions } from './ServiceDistrictDistrict_TableSetSelector';
import type { ServiceDistrict, ServiceDistrictStored, ServiceDistrictQueryCustomizer } from '~/services/data-api';

const ServiceDistrictDistrict_TableSetSelector = lazy(
  () => import('~/containers/Service/District/District_Table/SetSelector/ServiceDistrictDistrict_TableSetSelector'),
);

export interface ServiceDistrictDistrict_TableSetSelectorDialogActions
  extends ServiceDistrictDistrict_TableSetSelectorActionDefinitions {
  serviceDistrictDistrict_TableBack?: () => Promise<void>;
  serviceDistrictDistrict_TableSet?: (selected: ServiceDistrictStored[]) => Promise<void>;
}

export interface ServiceDistrictDistrict_TableSetSelectorDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
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
          id="ServiceDistrictDistrict_TableSetSelector-dialog-close-wrapper"
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
        {!editMode && actions.serviceDistrictDistrict_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::District::District_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceDistrictDistrict_TableBack!();
              }}
            >
              <span>
                {t('service.District.District.Table.SetSelector.service::District::District_Table::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceDistrictDistrict_TableSet && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::District::District_Table::Set"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="link" />}
              onClick={async () => {
                await actions.serviceDistrictDistrict_TableSet!(selectionDiff);
              }}
            >
              <span>
                {t('service.District.District.Table.SetSelector.service::District::District_Table::Set', {
                  defaultValue: 'Set',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
