import { useTranslation } from 'react-i18next';
import { Button, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { MdiIcon } from '~/components';
import { usePageRefreshVoteEntriesAction } from '../actions';

export interface PageActionsProps {
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

export function PageActions(props: PageActionsProps) {
  const { isLoading, fetchData } = props;
  const { t } = useTranslation();

  const pageRefreshVoteEntriesAction = usePageRefreshVoteEntriesAction();

  return (
    <>
      <Grid className="page-action" item>
        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          id="page-action-refresh"
          startIcon={<MdiIcon path="refresh" />}
          onClick={() => pageRefreshVoteEntriesAction(() => fetchData())}
          disabled={isLoading}
        >
          {t('judo.pages.table.refresh', { defaultValue: 'Refresh' })}
        </LoadingButton>
      </Grid>
    </>
  );
}
