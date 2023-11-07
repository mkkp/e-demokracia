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
import { processQueryCustomizer } from '~/utilities';
import type { ServiceIssueIssue_View_EditActionDefinitions } from './ServiceIssueIssue_View_Edit';
import type { ServiceIssue, ServiceIssueStored, ServiceIssueQueryCustomizer } from '~/services/data-api';

const ServiceIssueIssue_View_Edit = lazy(
  () => import('~/containers/Service/Issue/Issue_View_Edit/ServiceIssueIssue_View_Edit'),
);

export interface ServiceIssueIssue_View_EditDialogActions extends ServiceIssueIssue_View_EditActionDefinitions {
  serviceIssueIssue_View_EditBack?: () => Promise<void>;
  serviceIssueIssue_View_EditCancel?: () => Promise<void>;
  serviceIssueIssue_View_EditDelete?: () => Promise<void>;
  serviceIssueIssue_View_EditRefresh?: (queryCustomizer: ServiceIssueQueryCustomizer) => Promise<ServiceIssueStored>;
  serviceIssueIssue_View_EditUpdate?: () => Promise<void>;
}

export interface ServiceIssueIssue_View_EditDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceIssueIssue_View_EditDialogActions;
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
export default function ServiceIssueIssue_View_EditDialog(props: ServiceIssueIssue_View_EditDialogProps) {
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
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceIssueIssue_View_Edit-dialog-close-wrapper"
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
        </Suspense>
      </DialogContent>
      <DialogActions>
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
      </DialogActions>
    </>
  );
}
