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
import type { ServiceUserIssues, ServiceUserIssuesQueryCustomizer, ServiceUserIssuesStored } from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { mainContainerPadding } from '~/theme';
import { processQueryCustomizer } from '~/utilities';
import type { ServiceUserIssuesUserIssues_View_EditActionDefinitions } from './ServiceUserIssuesUserIssues_View_Edit';

const ServiceUserIssuesUserIssues_View_Edit = lazy(
  () => import('~/containers/Service/UserIssues/UserIssues_View_Edit/ServiceUserIssuesUserIssues_View_Edit'),
);

export interface ServiceUserIssuesUserIssues_View_EditPageActions
  extends ServiceUserIssuesUserIssues_View_EditActionDefinitions {
  createIssueAction?: () => Promise<void>;
  backAction?: () => Promise<void>;
  cancelAction?: () => Promise<void>;
  deleteAction?: () => Promise<void>;
  refreshAction?: (
    queryCustomizer: ServiceUserIssuesQueryCustomizer,
  ) => Promise<JudoRestResponse<ServiceUserIssuesStored>>;
  updateAction?: () => Promise<void>;
}

export interface ServiceUserIssuesUserIssues_View_EditPageProps {
  actions: ServiceUserIssuesUserIssues_View_EditPageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  data: ServiceUserIssuesStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceUserIssues, value: any) => void;
  validation: Map<keyof ServiceUserIssues, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserIssues, string>>>;
  submit: () => Promise<void>;
}

// Name: service::UserIssues::UserIssues_View_Edit
export default function ServiceUserIssuesUserIssues_View_EditPage(
  props: ServiceUserIssuesUserIssues_View_EditPageProps,
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
  const queryCustomizer: ServiceUserIssuesQueryCustomizer = {
    _mask: actions.getMask ? actions.getMask!() : '{}',
  };

  return (
    <>
      <PageHeader title={actions?.getPageTitle ? actions?.getPageTitle(data) : ''}>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_jK51wFq4Ee6_67aMO2jOsw)/TransferObjectViewBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              disabled={editMode}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.UserIssues.UserIssues_View_Edit.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.refreshAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_jK51wFq4Ee6_67aMO2jOsw)/TransferObjectViewRefreshButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="refresh" />}
              disabled={editMode}
              onClick={async () => {
                await actions.refreshAction!(processQueryCustomizer(queryCustomizer));
              }}
            >
              <span>{t('service.UserIssues.UserIssues_View_Edit.Refresh', { defaultValue: 'Refresh' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.deleteAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_jK51wFq4Ee6_67aMO2jOsw)/TransferObjectViewDeleteButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="delete_forever" />}
              disabled={editMode}
              onClick={async () => {
                actions.deleteAction!();
              }}
            >
              <span>{t('service.UserIssues.UserIssues_View_Edit.Delete', { defaultValue: 'Delete' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.cancelAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_jK51wFq4Ee6_67aMO2jOsw)/TransferObjectViewCancelButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="cancel" />}
              disabled={editMode}
              onClick={async () => {
                await actions.cancelAction!();
              }}
            >
              <span>{t('service.UserIssues.UserIssues_View_Edit.Cancel', { defaultValue: 'Cancel' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.updateAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_jK51wFq4Ee6_67aMO2jOsw)/TransferObjectViewUpdateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              disabled={editMode}
              onClick={async () => {
                await actions.updateAction!();
              }}
            >
              <span>{t('service.UserIssues.UserIssues_View_Edit.Update', { defaultValue: 'Save' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.createIssueAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_jK51w1q4Ee6_67aMO2jOsw)/OperationFormVisualElement"
              loading={isLoading}
              loadingPosition="start"
              variant={undefined}
              startIcon={<MdiIcon path="wechat" />}
              disabled={editMode}
              onClick={async () => {
                await actions.createIssueAction!();
              }}
            >
              <span>{t('service.UserIssues.UserIssues_View_Edit.createIssue', { defaultValue: 'Create issue' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceUserIssuesUserIssues_View_Edit
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
