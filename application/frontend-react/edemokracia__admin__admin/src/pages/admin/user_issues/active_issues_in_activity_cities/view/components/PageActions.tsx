import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import {
  AdminCity,
  AdminCityQueryCustomizer,
  AdminCityStored,
  AdminComment,
  AdminCommentQueryCustomizer,
  AdminCommentStored,
  AdminCounty,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminIssue,
  AdminIssueAttachment,
  AdminIssueAttachmentQueryCustomizer,
  AdminIssueAttachmentStored,
  AdminIssueCategory,
  AdminIssueCategoryQueryCustomizer,
  AdminIssueCategoryStored,
  AdminIssueDebate,
  AdminIssueDebateQueryCustomizer,
  AdminIssueDebateStored,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminIssueType,
  AdminIssueTypeQueryCustomizer,
  AdminIssueTypeStored,
  AdminUser,
  AdminUserIssues,
  AdminUserIssuesStored,
  AdminUserQueryCustomizer,
  AdminUserStored,
  EdemokraciaIssueScope,
  EdemokraciaIssueStatus,
  EdemokraciaVoteType,
} from '~/generated/data-api';
import { usePageRefreshActiveIssuesInActivityCitiesAction } from '../actions';

export interface PageActionsProps {
  data: AdminIssueStored;
  editMode: boolean;
  setEditMode: (mode: boolean) => void;
  isLoading: boolean;
  fetchData: () => Promise<void>;
  submit: () => Promise<void>;
}

export function PageActions(props: PageActionsProps) {
  const { data, editMode, setEditMode, isLoading, fetchData, submit } = props;
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { openConfirmDialog } = useConfirmDialog();

  const pageRefreshActiveIssuesInActivityCitiesAction = usePageRefreshActiveIssuesInActivityCitiesAction();

  const isFormUpdateable = useCallback(() => {
    return true && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  return (
    <>
      {editMode && isFormUpdateable() && (
        <Grid className="page-action" item>
          <Button
            id="page-action-edit-cancel"
            variant="outlined"
            startIcon={<MdiIcon path="cancel" />}
            onClick={() => {
              setEditMode(false);
              fetchData();
            }}
            disabled={isLoading}
          >
            {t('judo.pages.cancel', { defaultValue: 'Cancel' })}
          </Button>
        </Grid>
      )}
      {editMode && isFormUpdateable() && (
        <Grid className="page-action" item>
          <LoadingButton
            loading={isLoading}
            loadingPosition="start"
            id="page-action-edit-save"
            startIcon={<MdiIcon path="content-save" />}
            onClick={() => submit()}
          >
            <span>{t('judo.pages.save', { defaultValue: 'Save' })}</span>
          </LoadingButton>
        </Grid>
      )}
      {!editMode && (
        <Grid className="page-action" item>
          <LoadingButton
            loading={isLoading}
            loadingPosition="start"
            id="page-action-refresh"
            startIcon={<MdiIcon path="refresh" />}
            onClick={() => fetchData()}
          >
            <span>{t('judo.pages.refresh', { defaultValue: 'Refresh' })}</span>
          </LoadingButton>
        </Grid>
      )}
    </>
  );
}
