import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Grid } from '@mui/material';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { MdiIcon, useJudoNavigation } from '~/components';
import {
  AdminCon,
  AdminConStored,
  AdminSimpleVote,
  AdminSimpleVoteQueryCustomizer,
  AdminSimpleVoteStored,
  EdemokraciaSimpleVoteType,
} from '~/generated/data-api';
import { usePageFilterVotesAction, usePageRefreshVotesAction } from '../actions';

export interface PageActionsProps {
  isLoading: boolean;
  fetchData: () => Promise<void>;
  signedIdentifier?: string;
}

export function PageActions(props: PageActionsProps) {
  const { isLoading, fetchData, signedIdentifier } = props;
  const { t } = useTranslation();

  const pageRefreshVotesAction = usePageRefreshVotesAction();

  return (
    <>
      <Grid className="page-action" item>
        <Button id="page-action-refresh" onClick={() => pageRefreshVotesAction(() => fetchData())} disabled={isLoading}>
          <MdiIcon path="refresh" />
          {t('judo.pages.table.refresh', { defaultValue: 'Refresh' })}
        </Button>
      </Grid>
    </>
  );
}
