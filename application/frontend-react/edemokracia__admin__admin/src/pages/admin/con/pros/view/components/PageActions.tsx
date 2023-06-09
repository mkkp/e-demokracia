import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { MdiIcon, useJudoNavigation } from '~/components';
import {
  AdminComment,
  AdminCommentQueryCustomizer,
  AdminCommentStored,
  AdminCon,
  AdminConQueryCustomizer,
  AdminConStored,
  AdminPro,
  AdminProQueryCustomizer,
  AdminProStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { usePageRefreshProsAction, usePageDeleteProsAction } from '../actions';

export interface PageActionsProps {
  data: AdminProStored;
  editMode: boolean;
  setEditMode: (mode: boolean) => void;
  isLoading: boolean;
  fetchData: () => Promise<void>;
  saveData: () => Promise<void>;
  deleteData: () => Promise<void>;
}

export function PageActions(props: PageActionsProps) {
  const { data, editMode, setEditMode, isLoading, fetchData, saveData, deleteData } = props;
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();

  const pageRefreshProsAction = usePageRefreshProsAction();
  const pageDeleteProsAction = usePageDeleteProsAction();

  const isFormUpdateable = useCallback(() => {
    return true && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return true && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
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
            onClick={() => saveData()}
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
      {!editMode && isFormDeleteable() && (
        <Grid className="page-action" item>
          <LoadingButton
            id="page-action-delete"
            loading={isLoading}
            loadingPosition="start"
            startIcon={<MdiIcon path="delete" />}
            onClick={() => deleteData()}
            disabled={!data.__deleteable}
          >
            <span>{t('judo.pages.delete', { defaultValue: 'Delete' })}</span>
          </LoadingButton>
        </Grid>
      )}
    </>
  );
}
