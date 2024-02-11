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
import type { ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorActionDefinitions } from './ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelector';

const ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelector = lazy(
  () =>
    import(
      '~/containers/Service/ServiceUser/ServiceUser_View_Edit/Areas/Activity/Activity_districts/ActivityDistricts/AddSelector/ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelector'
    ),
);

export interface ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogActions
  extends ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorActionDefinitions {
  addAction?: (selected: ServiceDistrictStored[]) => Promise<void>;
  backAction?: () => Promise<void>;
}

export interface ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceDistrictStored[];
  selectionDiff: ServiceDistrictStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceDistrictStored[]>>;
  isDraft?: boolean;
}

// Name: service::ServiceUser::ServiceUser_View_Edit::Areas::activity::activity_districts::activityDistricts::AddSelector
export default function ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialog(
  props: ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogProps,
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
          id="User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelector
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
              id="User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t(
                  'service.ServiceUser.ServiceUser_View_Edit.Areas.activity.activity_districts.activityDistricts.Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.addAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorAddButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              disabled={!selectionDiff.length}
              startIcon={<MdiIcon path="attachment-plus" />}
              onClick={async () => {
                await actions.addAction!(selectionDiff);
              }}
            >
              <span>
                {t(
                  'service.ServiceUser.ServiceUser_View_Edit.Areas.activity.activity_districts.activityDistricts.Add',
                  { defaultValue: 'Add' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
