import { useTranslation } from 'react-i18next';
import { Button, Grid } from '@mui/material';
import { MdiIcon } from '~/components';
import { usePageCreateCategoriesAction, usePageRefreshCategoriesAction } from '../actions';

export interface PageActionsProps {
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

export function PageActions(props: PageActionsProps) {
  const { isLoading, fetchData } = props;
  const { t } = useTranslation();

  const pageCreateCategoriesAction = usePageCreateCategoriesAction();
  const pageRefreshCategoriesAction = usePageRefreshCategoriesAction();

  return (
    <>
      <Grid className="page-action" item>
        <Button
          id="page-action-create"
          onClick={() => pageCreateCategoriesAction(() => fetchData())}
          disabled={isLoading}
        >
          <MdiIcon path="file_document_plus" />
          {t('judo.pages.table.create', { defaultValue: 'Create' })}
        </Button>
      </Grid>
      <Grid className="page-action" item>
        <Button
          id="page-action-refresh"
          onClick={() => pageRefreshCategoriesAction(() => fetchData())}
          disabled={isLoading}
        >
          <MdiIcon path="refresh" />
          {t('judo.pages.table.refresh', { defaultValue: 'Refresh' })}
        </Button>
      </Grid>
    </>
  );
}
