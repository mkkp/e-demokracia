import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import {
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminIssue,
  AdminIssueStored,
} from '~/generated/data-api';
import { usePageRefreshDistrictAction } from '../actions';

export interface PageActionsProps {
  data: AdminDistrictStored;
  editMode: boolean;
  setEditMode: (mode: boolean) => void;
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

export function PageActions(props: PageActionsProps) {
  const { data, editMode, setEditMode, isLoading, fetchData } = props;
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { openConfirmDialog } = useConfirmDialog();

  const pageRefreshDistrictAction = usePageRefreshDistrictAction();

  const isFormUpdateable = useCallback(() => {
    return false && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  return (
    <>
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
