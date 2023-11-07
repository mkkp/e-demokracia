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
import type { ServiceCityCity_TableSetSelectorActionDefinitions } from './ServiceCityCity_TableSetSelector';
import type { ServiceCity, ServiceCityStored, ServiceCityQueryCustomizer } from '~/services/data-api';

const ServiceCityCity_TableSetSelector = lazy(
  () => import('~/containers/Service/City/City_Table/SetSelector/ServiceCityCity_TableSetSelector'),
);

export interface ServiceCityCity_TableSetSelectorDialogActions
  extends ServiceCityCity_TableSetSelectorActionDefinitions {
  serviceCityCity_TableBack?: () => Promise<void>;
  serviceCityCity_TableSet?: (selected: ServiceCityStored[]) => Promise<void>;
}

export interface ServiceCityCity_TableSetSelectorDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceCityCity_TableSetSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceCityStored[];
  selectionDiff: ServiceCityStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceCityStored[]>>;
}

// Name: service::City::City_Table::SetSelector
export default function ServiceCityCity_TableSetSelectorDialog(props: ServiceCityCity_TableSetSelectorDialogProps) {
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
          id="ServiceCityCity_TableSetSelector-dialog-close-wrapper"
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
          <ServiceCityCity_TableSetSelector
            actions={actions}
            refreshCounter={refreshCounter}
            selectionDiff={selectionDiff}
            setSelectionDiff={setSelectionDiff}
            alreadySelected={alreadySelected}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceCityCity_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::City::City_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceCityCity_TableBack!();
              }}
            >
              <span>
                {t('service.City.City.Table.SetSelector.service::City::City_Table::Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceCityCity_TableSet && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::City::City_Table::Set"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="link" />}
              onClick={async () => {
                await actions.serviceCityCity_TableSet!(selectionDiff);
              }}
            >
              <span>
                {t('service.City.City.Table.SetSelector.service::City::City_Table::Set', { defaultValue: 'Set' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
