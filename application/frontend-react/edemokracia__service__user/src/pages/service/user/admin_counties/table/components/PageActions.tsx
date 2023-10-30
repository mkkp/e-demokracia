import { useTranslation } from 'react-i18next';
import { Button, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { MdiIcon } from '~/components';
import { usePageCreateAdminCountiesAction, usePageRefreshAdminCountiesAction } from '../actions';

export interface PageActionsProps {
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

export function PageActions(props: PageActionsProps) {
  const { isLoading, fetchData } = props;
  const { t } = useTranslation();

  const pageCreateAdminCountiesAction = usePageCreateAdminCountiesAction();
  const pageRefreshAdminCountiesAction = usePageRefreshAdminCountiesAction();

  return (
    <>
      <Grid className="page-action" item>
        <Button
          id="page-action-create"
          startIcon={<MdiIcon path="file_document_plus" />}
          onClick={() => pageCreateAdminCountiesAction(() => fetchData())}
          disabled={isLoading}
        >
          {t('judo.pages.table.create', { defaultValue: 'Create' })}
        </Button>
      </Grid>
      <Grid className="page-action" item>
        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          id="page-action-refresh"
          startIcon={<MdiIcon path="refresh" />}
          onClick={() => pageRefreshAdminCountiesAction(() => fetchData())}
          disabled={isLoading}
        >
          {t('judo.pages.table.refresh', { defaultValue: 'Refresh' })}
        </LoadingButton>
      </Grid>
    </>
  );
}
