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
import type { ServiceDistrict, ServiceDistrictQueryCustomizer, ServiceDistrictStored } from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import type { ServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictSetSelectorActionDefinitions } from './ServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictSetSelector';

const ServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictSetSelector = lazy(
  () =>
    import(
      '~/containers/Service/UserProfile/UserProfile_View_Edit/Areas/Residency/ResidentDistrict/SetSelector/ServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictSetSelector'
    ),
);

export interface ServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictSetSelectorDialogActions
  extends ServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictSetSelectorActionDefinitions {
  backAction?: () => Promise<void>;
  setAction?: (selected: ServiceDistrictStored[]) => Promise<void>;
}

export interface ServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictSetSelectorDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictSetSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceDistrictStored[];
  selectionDiff: ServiceDistrictStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceDistrictStored[]>>;
  isDraft?: boolean;
}

// Name: service::UserProfile::UserProfile_View_Edit::Areas::Residency::residentDistrict::SetSelector
export default function ServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictSetSelectorDialog(
  props: ServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictSetSelectorDialogProps,
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
          id="User/(esm/_fsW_plvTEe6jm_SkPSYEYw)/TabularReferenceFieldLinkSetSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictSetSelector
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
              id="User/(esm/_fsW_plvTEe6jm_SkPSYEYw)/TabularReferenceFieldLinkSetSelectorBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t('service.UserProfile.UserProfile_View_Edit.Areas.Residency.residentDistrict.Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.setAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_fsW_plvTEe6jm_SkPSYEYw)/TabularReferenceFieldLinkSetSelectorSetButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              disabled={!selectionDiff.length}
              startIcon={<MdiIcon path="attachment-plus" />}
              onClick={async () => {
                await actions.setAction!(selectionDiff);
              }}
            >
              <span>
                {t('service.UserProfile.UserProfile_View_Edit.Areas.Residency.residentDistrict.Set', {
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
