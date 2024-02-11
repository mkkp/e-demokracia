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
import type { ServiceIssue, ServiceIssueQueryCustomizer, ServiceIssueStored } from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { mainContainerPadding } from '~/theme';
import { processQueryCustomizer } from '~/utilities';
import type { ServiceIssueIssue_View_EditActionDefinitions } from './ServiceIssueIssue_View_Edit';

const ServiceIssueIssue_View_Edit = lazy(
  () => import('~/containers/Service/Issue/Issue_View_Edit/ServiceIssueIssue_View_Edit'),
);

export interface ServiceIssueIssue_View_EditPageActions extends ServiceIssueIssue_View_EditActionDefinitions {
  activateForIssueAction?: () => Promise<void>;
  addToFavoritesForIssueAction?: () => Promise<void>;
  closeDebateAction?: () => Promise<void>;
  closeVoteForIssueAction?: () => Promise<void>;
  deleteOrArchiveForIssueAction?: () => Promise<void>;
  removeFromFavoritesForIssueAction?: () => Promise<void>;
  backAction?: () => Promise<void>;
  cancelAction?: () => Promise<void>;
  deleteAction?: () => Promise<void>;
  refreshAction?: (queryCustomizer: ServiceIssueQueryCustomizer) => Promise<JudoRestResponse<ServiceIssueStored>>;
  updateAction?: () => Promise<void>;
}

export interface ServiceIssueIssue_View_EditPageProps {
  actions: ServiceIssueIssue_View_EditPageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  data: ServiceIssueStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceIssue, value: any) => void;
  validation: Map<keyof ServiceIssue, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssue, string>>>;
  submit: () => Promise<void>;
}

// Name: service::Issue::Issue_View_Edit
export default function ServiceIssueIssue_View_EditPage(props: ServiceIssueIssue_View_EditPageProps) {
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
  const queryCustomizer: ServiceIssueQueryCustomizer = {
    _mask: actions.getMask
      ? actions.getMask!()
      : '{created,defaultVoteType,description,isFavorite,isIssueActive,isIssueDeletable,isIssueDraft,isIssueNotActive,isIssueNotDeletable,isIssueNotDraft,isNotFavorite,isVoteClosable,isVoteNotClosable,status,title,cons{downVotes,title,upVotes},pros{downVotes,title,upVotes},attachments{file,link,type},categories{description,title},comments{comment,created,createdByName,downVotes,upVotes},issueType{description,title},owner{representation},city{representation},county{representation},district{representation}}',
  };

  return (
    <>
      <PageHeader title={actions?.getPageTitle ? actions?.getPageTitle(data) : ''}>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_qCa1YGksEe25ONJ3V89cVA)/TransferObjectViewBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              disabled={editMode}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.Issue.Issue_View_Edit.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.refreshAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_qCa1YGksEe25ONJ3V89cVA)/TransferObjectViewRefreshButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="refresh" />}
              disabled={editMode}
              onClick={async () => {
                await actions.refreshAction!(processQueryCustomizer(queryCustomizer));
              }}
            >
              <span>{t('service.Issue.Issue_View_Edit.Refresh', { defaultValue: 'Refresh' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.deleteAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_qCa1YGksEe25ONJ3V89cVA)/TransferObjectViewDeleteButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="delete_forever" />}
              disabled={editMode}
              onClick={async () => {
                actions.deleteAction!();
              }}
            >
              <span>{t('service.Issue.Issue_View_Edit.Delete', { defaultValue: 'Delete' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.cancelAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_qCa1YGksEe25ONJ3V89cVA)/TransferObjectViewCancelButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="cancel" />}
              disabled={editMode}
              onClick={async () => {
                await actions.cancelAction!();
              }}
            >
              <span>{t('service.Issue.Issue_View_Edit.Cancel', { defaultValue: 'Cancel' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.updateAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_qCa1YGksEe25ONJ3V89cVA)/TransferObjectViewUpdateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              disabled={editMode}
              onClick={async () => {
                await actions.updateAction!();
              }}
            >
              <span>{t('service.Issue.Issue_View_Edit.Update', { defaultValue: 'Save' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {(actions?.isDeleteOrArchiveHidden
          ? !actions?.isDeleteOrArchiveHidden(data, editMode)
          : !data.isIssueNotDeletable) &&
          actions.deleteOrArchiveForIssueAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_FzSnUHkIEe6cB8og8p0UuQ)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="delete" />}
                disabled={!data.isIssueDeletable || editMode}
                onClick={async () => {
                  await actions.deleteOrArchiveForIssueAction!();
                }}
              >
                <span>{t('service.Issue.Issue_View_Edit.deleteOrArchive', { defaultValue: 'Delete' })}</span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isActivateHidden ? !actions?.isActivateHidden(data, editMode) : !data.isIssueNotDraft) &&
          actions.activateForIssueAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_FzSAQHkIEe6cB8og8p0UuQ)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="lock-open" />}
                disabled={!data.isIssueDraft || editMode}
                onClick={async () => {
                  await actions.activateForIssueAction!();
                }}
              >
                <span>{t('service.Issue.Issue_View_Edit.activate', { defaultValue: 'Activate' })}</span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isCloseVoteHidden ? !actions?.isCloseVoteHidden(data, editMode) : !data.isVoteNotClosable) &&
          actions.closeVoteForIssueAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_pXWdEHkFEe6cB8og8p0UuQ)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="lock-check" />}
                disabled={!data.isVoteClosable || editMode}
                onClick={async () => {
                  await actions.closeVoteForIssueAction!();
                }}
              >
                <span>{t('service.Issue.Issue_View_Edit.closeVote', { defaultValue: 'Close Vote' })}</span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isCloseDebateHidden ? !actions?.isCloseDebateHidden(data, editMode) : !data.isIssueNotActive) &&
          actions.closeDebateAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_8M4nYHj_Ee6cB8og8p0UuQ)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="vote" />}
                disabled={!data.isIssueActive || editMode}
                onClick={async () => {
                  await actions.closeDebateAction!();
                }}
              >
                <span>
                  {t('service.Issue.Issue_View_Edit.closeDebate', { defaultValue: 'Close debate and start vote' })}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isRemoveFromFavoritesHidden
          ? !actions?.isRemoveFromFavoritesHidden(data, editMode)
          : !data.isNotFavorite) &&
          actions.removeFromFavoritesForIssueAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_knZE4FxEEe6ma86ynyYZNw)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="star-minus" />}
                disabled={editMode}
                onClick={async () => {
                  await actions.removeFromFavoritesForIssueAction!();
                }}
              >
                <span>
                  {t('service.Issue.Issue_View_Edit.removeFromFavorites', { defaultValue: 'Remove from favorites' })}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isAddToFavoritesHidden ? !actions?.isAddToFavoritesHidden(data, editMode) : !data.isFavorite) &&
          actions.addToFavoritesForIssueAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_knYd0FxEEe6ma86ynyYZNw)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="star-plus" />}
                disabled={editMode}
                onClick={async () => {
                  await actions.addToFavoritesForIssueAction!();
                }}
              >
                <span>{t('service.Issue.Issue_View_Edit.addToFavorites', { defaultValue: 'Add to favorites' })}</span>
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
