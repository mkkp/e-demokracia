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
  ServiceUserManager,
  ServiceUserManagerQueryCustomizer,
  ServiceUserManagerStored,
} from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { mainContainerPadding } from '~/theme';
import { processQueryCustomizer } from '~/utilities';
import type { ServiceUserManagerUserManager_View_EditActionDefinitions } from './ServiceUserManagerUserManager_View_Edit';

const ServiceUserManagerUserManager_View_Edit = lazy(
  () => import('~/containers/Service/UserManager/UserManager_View_Edit/ServiceUserManagerUserManager_View_Edit'),
);

export interface ServiceUserManagerUserManager_View_EditPageActions
  extends ServiceUserManagerUserManager_View_EditActionDefinitions {
  backAction?: () => Promise<void>;
  cancelAction?: () => Promise<void>;
  deleteAction?: () => Promise<void>;
  refreshAction?: (
    queryCustomizer: ServiceUserManagerQueryCustomizer,
  ) => Promise<JudoRestResponse<ServiceUserManagerStored>>;
  updateAction?: () => Promise<void>;
}

export interface ServiceUserManagerUserManager_View_EditPageProps {
  actions: ServiceUserManagerUserManager_View_EditPageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  data: ServiceUserManagerStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceUserManager, value: any) => void;
  validation: Map<keyof ServiceUserManager, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserManager, string>>>;
  submit: () => Promise<void>;
}

// Name: service::UserManager::UserManager_View_Edit
export default function ServiceUserManagerUserManager_View_EditPage(
  props: ServiceUserManagerUserManager_View_EditPageProps,
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
  const queryCustomizer: ServiceUserManagerQueryCustomizer = {
    _mask: actions.getMask ? actions.getMask!() : '{}',
  };

  return (
    <>
      <PageHeader title={actions?.getPageTitle ? actions?.getPageTitle(data) : ''}>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_dGIWgFvOEe6jm_SkPSYEYw)/TransferObjectViewBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              disabled={editMode}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.UserManager.UserManager_View_Edit.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.refreshAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_dGIWgFvOEe6jm_SkPSYEYw)/TransferObjectViewRefreshButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="refresh" />}
              disabled={editMode}
              onClick={async () => {
                await actions.refreshAction!(processQueryCustomizer(queryCustomizer));
              }}
            >
              <span>{t('service.UserManager.UserManager_View_Edit.Refresh', { defaultValue: 'Refresh' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.deleteAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_dGIWgFvOEe6jm_SkPSYEYw)/TransferObjectViewDeleteButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="delete_forever" />}
              disabled={editMode}
              onClick={async () => {
                actions.deleteAction!();
              }}
            >
              <span>{t('service.UserManager.UserManager_View_Edit.Delete', { defaultValue: 'Delete' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.cancelAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_dGIWgFvOEe6jm_SkPSYEYw)/TransferObjectViewCancelButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="cancel" />}
              disabled={editMode}
              onClick={async () => {
                await actions.cancelAction!();
              }}
            >
              <span>{t('service.UserManager.UserManager_View_Edit.Cancel', { defaultValue: 'Cancel' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.updateAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_dGIWgFvOEe6jm_SkPSYEYw)/TransferObjectViewUpdateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              disabled={editMode}
              onClick={async () => {
                await actions.updateAction!();
              }}
            >
              <span>{t('service.UserManager.UserManager_View_Edit.Update', { defaultValue: 'Save' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceUserManagerUserManager_View_Edit
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
