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
import type { ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorActionDefinitions } from './ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelector';

const ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelector = lazy(
  () =>
    import(
      '~/containers/Service/ServiceUser/ServiceUser_View_Edit/Areas/Activity/Tab_activity_counties/ActivityCounties/AddSelector/ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelector'
    ),
);

export interface ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogActions
  extends ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorActionDefinitions {
  addAction?: (selected: ServiceCountyStored[]) => Promise<void>;
  backAction?: () => Promise<void>;
}

export interface ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceCountyStored[];
  selectionDiff: ServiceCountyStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceCountyStored[]>>;
  isDraft?: boolean;
}

// Name: service::ServiceUser::ServiceUser_View_Edit::Areas::activity::tab_activity_counties::activityCounties::AddSelector
export default function ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialog(
  props: ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogProps,
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
          id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelector
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
              id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorBackButton"
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
                  'service.ServiceUser.ServiceUser_View_Edit.Areas.activity.tab_activity_counties.activityCounties.Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.addAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorAddButton"
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
                  'service.ServiceUser.ServiceUser_View_Edit.Areas.activity.tab_activity_counties.activityCounties.Add',
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
