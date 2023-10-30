import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { MdiIcon, useJudoNavigation } from '~/components';
import {
  EdemokraciaSimpleVoteType,
  ServiceServiceUser,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
} from '~/generated/data-api';
import {
  usePageRefreshVotesAction,
  usePageClearVotesAction,
  usePageSetVotesAction,
  usePageFilterVotesAction,
  usePageAddVotesAction,
} from '../actions';

export interface PageActionsProps {
  isLoading: boolean;
  fetchData: () => Promise<void>;
  signedIdentifier?: string;
}

export function PageActions(props: PageActionsProps) {
  const { isLoading, fetchData, signedIdentifier } = props;
  const { t } = useTranslation();

  const pageRefreshVotesAction = usePageRefreshVotesAction();
  const pageClearVotesAction = usePageClearVotesAction();
  const pageSetVotesAction = usePageSetVotesAction();
  const pageAddVotesAction = usePageAddVotesAction();

  return (
    <>
      <Grid className="page-action" item>
        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          id="page-action-refresh"
          startIcon={<MdiIcon path="refresh" />}
          onClick={() => pageRefreshVotesAction(() => fetchData())}
          disabled={isLoading}
        >
          {t('judo.pages.table.refresh', { defaultValue: 'Refresh' })}
        </LoadingButton>
      </Grid>
      <Grid className="page-action" item>
        <Button
          id="page-action-clear"
          startIcon={<MdiIcon path="link_off" />}
          onClick={() =>
            pageClearVotesAction({ __signedIdentifier: signedIdentifier } as JudoIdentifiable<ServiceServiceUser>, () =>
              fetchData(),
            )
          }
          disabled={isLoading}
        >
          {t('judo.pages.table.clear', { defaultValue: 'Clear' })}
        </Button>
      </Grid>
      <Grid className="page-action" item>
        <Button
          id="page-action-add"
          startIcon={<MdiIcon path="attachment-plus" />}
          onClick={() =>
            pageAddVotesAction({ __signedIdentifier: signedIdentifier } as JudoIdentifiable<ServiceServiceUser>, () =>
              fetchData(),
            )
          }
          disabled={isLoading}
        >
          {t('judo.pages.table.add', { defaultValue: 'Add' })}
        </Button>
      </Grid>
    </>
  );
}
