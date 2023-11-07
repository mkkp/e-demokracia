//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPageContainersToGenerate(#application)
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'PageContainer.tsx'
// Template name: actor/src/containers/page.tsx
// Template file: actor/src/containers/page.tsx.hbs

import { lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Box, Grid, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation, MdiIcon, PageHeader } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { mainContainerPadding } from '~/theme';
import { processQueryCustomizer } from '~/utilities';
import type { ServiceIssueIssue_View_EditActionDefinitions } from './ServiceIssueIssue_View_Edit';
import type { ServiceIssue, ServiceIssueStored, ServiceIssueQueryCustomizer } from '~/services/data-api';

const ServiceIssueIssue_View_Edit = lazy(
  () => import('~/containers/Service/Issue/Issue_View_Edit/ServiceIssueIssue_View_Edit'),
);

export interface ServiceIssueIssue_View_EditPageActions extends ServiceIssueIssue_View_EditActionDefinitions {
  serviceIssueIssue_View_EditBack?: () => Promise<void>;
  serviceIssueIssue_View_EditCancel?: () => Promise<void>;
  serviceIssueIssue_View_EditDelete?: () => Promise<void>;
  serviceIssueIssue_View_EditRefresh?: (queryCustomizer: ServiceIssueQueryCustomizer) => Promise<ServiceIssueStored>;
  serviceIssueIssue_View_EditUpdate?: () => Promise<void>;
}

export interface ServiceIssueIssue_View_EditPageProps {
  title: string;
  actions: ServiceIssueIssue_View_EditPageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  data: ServiceIssue;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceIssue, value: any) => void;
  validation: Map<keyof ServiceIssue, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssue, string>>>;
}

// Name: service::Issue::Issue_View_Edit
export default function ServiceIssueIssue_View_EditPage(props: ServiceIssueIssue_View_EditPageProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    title,
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
  } = props;
  const queryCustomizer: ServiceIssueQueryCustomizer = {
    _mask:
      '{defaultVoteType,created,description,title,status,cons{title,upVotes,downVotes},pros{title,upVotes,downVotes},attachments{link,file,type},categories{title,description},comments{comment,created,createdByName,upVotes,downVotes},issueType{title,description},owner{representation},city{representation},county{representation},district{representation}}',
  };

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceIssueIssue_View_EditBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Issue::Issue_View_Edit::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceIssueIssue_View_EditBack!();
              }}
            >
              <span>
                {t('service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceIssueIssue_View_EditRefresh && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Issue::Issue_View_Edit::Refresh"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="refresh" />}
              onClick={async () => {
                await actions.serviceIssueIssue_View_EditRefresh!(processQueryCustomizer(queryCustomizer));
              }}
            >
              <span>
                {t('service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::Refresh', {
                  defaultValue: 'Refresh',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceIssueIssue_View_EditDelete && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Issue::Issue_View_Edit::Delete"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="delete_forever" />}
              onClick={async () => {
                const confirmed = await openConfirmDialog(
                  'page-delete-action',
                  t('judo.modal.confirm.confirm-delete', {
                    defaultValue: 'Are you sure you would like to delete the selected element?',
                  }),
                  t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
                );

                if (confirmed) {
                  actions.serviceIssueIssue_View_EditDelete!();
                }
              }}
            >
              <span>
                {t('service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::Delete', { defaultValue: 'Delete' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceIssueIssue_View_EditCancel && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Issue::Issue_View_Edit::Cancel"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="cancel" />}
              onClick={async () => {
                await actions.serviceIssueIssue_View_EditCancel!();
              }}
            >
              <span>
                {t('service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::Cancel', { defaultValue: 'Cancel' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceIssueIssue_View_EditUpdate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Issue::Issue_View_Edit::Update"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceIssueIssue_View_EditUpdate!();
              }}
            >
              <span>
                {t('service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::Update', { defaultValue: 'Save' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceIssueIssue_View_Edit
            actions={actions}
            refreshCounter={refreshCounter}
            data={data}
            isLoading={isLoading}
            editMode={editMode}
            storeDiff={storeDiff}
            isFormUpdateable={isFormUpdateable}
            isFormDeleteable={isFormDeleteable}
            validation={validation}
            setValidation={setValidation}
          />
        </Box>
      </Suspense>
    </>
  );
}
