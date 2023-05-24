import { useTranslation } from 'react-i18next';
import { Button, Grid } from '@mui/material';
import { MdiIcon } from '~/components';
import { usePageRefreshVoteDefinitionsAction } from '../actions';

export interface PageActionsProps {
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

export function PageActions(props: PageActionsProps) {
  const { isLoading, fetchData } = props;
  const { t } = useTranslation();

  const pageRefreshVoteDefinitionsAction = usePageRefreshVoteDefinitionsAction();

  return (
    <>
      <Grid className="page-action" item>
        <Button
          id="page-action-refresh"
          onClick={() => pageRefreshVoteDefinitionsAction(() => fetchData())}
          disabled={isLoading}
        >
          <MdiIcon path="refresh" />
          {t('judo.pages.table.refresh', { defaultValue: 'Refresh' })}
        </Button>
      </Grid>
    </>
  );
}
