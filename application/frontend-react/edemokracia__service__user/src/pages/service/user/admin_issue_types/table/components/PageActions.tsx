import { useTranslation } from 'react-i18next';
import { Button, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { MdiIcon } from '~/components';
import { usePageRefreshAdminIssueTypesAction, usePageCreateAdminIssueTypesAction } from '../actions';

export interface PageActionsProps {
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

export function PageActions(props: PageActionsProps) {
  const { isLoading, fetchData } = props;
  const { t } = useTranslation();

  const pageRefreshAdminIssueTypesAction = usePageRefreshAdminIssueTypesAction();
  const pageCreateAdminIssueTypesAction = usePageCreateAdminIssueTypesAction();

  return (
    <>
      <Grid className="page-action" item>
        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          id="page-action-refresh"
          startIcon={<MdiIcon path="refresh" />}
          onClick={() => pageRefreshAdminIssueTypesAction(() => fetchData())}
          disabled={isLoading}
        >
          {t('judo.pages.table.refresh', { defaultValue: 'Refresh' })}
        </LoadingButton>
      </Grid>
      <Grid className="page-action" item>
        <Button
          id="page-action-create"
          startIcon={<MdiIcon path="file_document_plus" />}
          onClick={() => pageCreateAdminIssueTypesAction(() => fetchData())}
          disabled={isLoading}
        >
          {t('judo.pages.table.create', { defaultValue: 'Create' })}
        </Button>
      </Grid>
    </>
  );
}
