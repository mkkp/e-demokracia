//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPageContainersToGenerate(#application)
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'PageContainer.tsx'
// Template name: actor/src/containers/page.tsx
// Template file: actor/src/containers/page.tsx.hbs

import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Suspense, lazy } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon, PageHeader, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import type {
  ServiceUserProfile,
  ServiceUserProfileQueryCustomizer,
  ServiceUserProfileStored,
} from '~/services/data-api';
import { mainContainerPadding } from '~/theme';
import { processQueryCustomizer } from '~/utilities';
import type { ServiceUserProfileUserProfile_View_EditActionDefinitions } from './ServiceUserProfileUserProfile_View_Edit';

const ServiceUserProfileUserProfile_View_Edit = lazy(
  () => import('~/containers/Service/UserProfile/UserProfile_View_Edit/ServiceUserProfileUserProfile_View_Edit'),
);

export interface ServiceUserProfileUserProfile_View_EditPageActions
  extends ServiceUserProfileUserProfile_View_EditActionDefinitions {
  backAction?: () => Promise<void>;
  cancelAction?: () => Promise<void>;
  deleteAction?: () => Promise<void>;
  refreshAction?: (queryCustomizer: ServiceUserProfileQueryCustomizer) => Promise<ServiceUserProfileStored>;
  updateAction?: () => Promise<void>;
}

export interface ServiceUserProfileUserProfile_View_EditPageProps {
  actions: ServiceUserProfileUserProfile_View_EditPageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  data: ServiceUserProfileStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceUserProfile, value: any) => void;
  validation: Map<keyof ServiceUserProfile, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserProfile, string>>>;
  submit: () => Promise<void>;
}

// Name: service::UserProfile::UserProfile_View_Edit
export default function ServiceUserProfileUserProfile_View_EditPage(
  props: ServiceUserProfileUserProfile_View_EditPageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
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
  const queryCustomizer: ServiceUserProfileQueryCustomizer = {
    _mask: actions.getMask
      ? actions.getMask!()
      : '{email,firstName,lastName,phone,userName,activityCities{representation},activityDistricts{representation},activityCounties{representation},residentCity{representation},residentCounty{representation},residentDistrict{representation}}',
  };

  return (
    <>
      <PageHeader title={actions?.getPageTitle ? actions?.getPageTitle(data) : ''}>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_1QevwFvQEe6jm_SkPSYEYw)/TransferObjectViewBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.UserProfile.UserProfile_View_Edit.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.refreshAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_1QevwFvQEe6jm_SkPSYEYw)/TransferObjectViewRefreshButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="refresh" />}
              onClick={async () => {
                await actions.refreshAction!(processQueryCustomizer(queryCustomizer));
              }}
            >
              <span>{t('service.UserProfile.UserProfile_View_Edit.Refresh', { defaultValue: 'Refresh' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.deleteAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_1QevwFvQEe6jm_SkPSYEYw)/TransferObjectViewDeleteButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="delete_forever" />}
              onClick={async () => {
                actions.deleteAction!();
              }}
            >
              <span>{t('service.UserProfile.UserProfile_View_Edit.Delete', { defaultValue: 'Delete' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.cancelAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_1QevwFvQEe6jm_SkPSYEYw)/TransferObjectViewCancelButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="cancel" />}
              onClick={async () => {
                await actions.cancelAction!();
              }}
            >
              <span>{t('service.UserProfile.UserProfile_View_Edit.Cancel', { defaultValue: 'Cancel' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.updateAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_1QevwFvQEe6jm_SkPSYEYw)/TransferObjectViewUpdateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.updateAction!();
              }}
            >
              <span>{t('service.UserProfile.UserProfile_View_Edit.Update', { defaultValue: 'Save' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceUserProfileUserProfile_View_Edit
            actions={actions}
            refreshCounter={refreshCounter}
            isLoading={isLoading}
            data={data}
            editMode={editMode}
            storeDiff={storeDiff}
            isFormUpdateable={isFormUpdateable}
            isFormDeleteable={isFormDeleteable}
            validation={validation}
            setValidation={setValidation}
            submit={submit}
          />
        </Box>
      </Suspense>
    </>
  );
}
