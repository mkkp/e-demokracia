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
import type { ServiceCountyCounty_TableSetSelectorActionDefinitions } from './ServiceCountyCounty_TableSetSelector';
import type { ServiceCounty, ServiceCountyStored, ServiceCountyQueryCustomizer } from '~/services/data-api';

const ServiceCountyCounty_TableSetSelector = lazy(
  () => import('~/containers/Service/County/County_Table/SetSelector/ServiceCountyCounty_TableSetSelector'),
);

export interface ServiceCountyCounty_TableSetSelectorDialogActions
  extends ServiceCountyCounty_TableSetSelectorActionDefinitions {
  serviceCountyCounty_TableBack?: () => Promise<void>;
  serviceCountyCounty_TableSet?: (selected: ServiceCountyStored[]) => Promise<void>;
}

export interface ServiceCountyCounty_TableSetSelectorDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceCountyCounty_TableSetSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceCountyStored[];
  selectionDiff: ServiceCountyStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceCountyStored[]>>;
}

// Name: service::County::County_Table::SetSelector
export default function ServiceCountyCounty_TableSetSelectorDialog(
  props: ServiceCountyCounty_TableSetSelectorDialogProps,
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
          id="ServiceCountyCounty_TableSetSelector-dialog-close-wrapper"
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
          <ServiceCountyCounty_TableSetSelector
            actions={actions}
            refreshCounter={refreshCounter}
            selectionDiff={selectionDiff}
            setSelectionDiff={setSelectionDiff}
            alreadySelected={alreadySelected}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceCountyCounty_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::County::County_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceCountyCounty_TableBack!();
              }}
            >
              <span>
                {t('service.County.County.Table.SetSelector.service::County::County_Table::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceCountyCounty_TableSet && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::County::County_Table::Set"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="link" />}
              onClick={async () => {
                await actions.serviceCountyCounty_TableSet!(selectionDiff);
              }}
            >
              <span>
                {t('service.County.County.Table.SetSelector.service::County::County_Table::Set', {
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
