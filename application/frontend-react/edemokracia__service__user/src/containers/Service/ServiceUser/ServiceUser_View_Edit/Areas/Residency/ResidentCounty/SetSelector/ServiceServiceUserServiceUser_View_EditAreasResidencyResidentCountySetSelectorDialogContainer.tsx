//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'DialogContainer.tsx'
// Template name: actor/src/containers/dialog.tsx
// Template file: actor/src/containers/dialog.tsx.hbs

import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { Suspense, lazy } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import type { ServiceCounty, ServiceCountyQueryCustomizer, ServiceCountyStored } from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import type { ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetSelectorActionDefinitions } from './ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetSelector';

const ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetSelector = lazy(
  () =>
    import(
      '~/containers/Service/ServiceUser/ServiceUser_View_Edit/Areas/Residency/ResidentCounty/SetSelector/ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetSelector'
    ),
);

export interface ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetSelectorDialogActions
  extends ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetSelectorActionDefinitions {
  backAction?: () => Promise<void>;
  setAction?: (selected: ServiceCountyStored[]) => Promise<void>;
}

export interface ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetSelectorDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceCountyStored[];
  selectionDiff: ServiceCountyStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceCountyStored[]>>;
  isDraft?: boolean;
}

// Name: service::ServiceUser::ServiceUser_View_Edit::Areas::Residency::residentCounty::SetSelector
export default function ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetSelectorDialog(
  props: ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetSelectorDialogProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    ownerData,
    onClose,
    actions,
    isLoading,
    editMode,
    refreshCounter,
    selectionDiff,
    setSelectionDiff,
    alreadySelected,
    isDraft,
  } = props;

  return (
    <>
      <DialogTitle>
        {isDraft ? t('judo') : actions.getPageTitle ? actions.getPageTitle() : ''}
        <IconButton
          id="User/(esm/_I-xl0IXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetSelector
            actions={actions}
            refreshCounter={refreshCounter}
            isLoading={isLoading}
            selectionDiff={selectionDiff}
            setSelectionDiff={setSelectionDiff}
            alreadySelected={alreadySelected}
            isDraft={isDraft}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_I-xl0IXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              disabled={isLoading}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('judo.action.back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.setAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_I-xl0IXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorSetButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              disabled={!selectionDiff.length}
              startIcon={<MdiIcon path="attachment-plus" />}
              onClick={async () => {
                await actions.setAction!(selectionDiff);
              }}
            >
              <span>{t('judo.action.set', { defaultValue: 'Set' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
