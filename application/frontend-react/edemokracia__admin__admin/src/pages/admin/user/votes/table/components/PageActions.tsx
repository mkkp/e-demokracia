import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Grid } from '@mui/material';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { MdiIcon, useJudoNavigation } from '~/components';
import {
  AdminSimpleVote,
  AdminSimpleVoteQueryCustomizer,
  AdminSimpleVoteStored,
  AdminUser,
  AdminUserStored,
  EdemokraciaSimpleVoteType,
} from '~/generated/data-api';
import {
  usePageAddVotesAction,
  usePageSetVotesAction,
  usePageRefreshVotesAction,
  usePageFilterVotesAction,
  usePageClearVotesAction,
} from '../actions';

export interface PageActionsProps {
  isLoading: boolean;
  fetchData: () => Promise<void>;
  signedIdentifier?: string;
}

export function PageActions(props: PageActionsProps) {
  const { isLoading, fetchData, signedIdentifier } = props;
  const { t } = useTranslation();

  const pageAddVotesAction = usePageAddVotesAction();
  const pageSetVotesAction = usePageSetVotesAction();
  const pageRefreshVotesAction = usePageRefreshVotesAction();
  const pageClearVotesAction = usePageClearVotesAction();

  return (
    <>
      <Grid className="page-action" item>
        <Button
          id="page-action-add"
          onClick={() =>
            pageAddVotesAction({ __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminUser>, () =>
              fetchData(),
            )
          }
          disabled={isLoading}
        >
          <MdiIcon path="attachment-plus" />
          {t('judo.pages.table.add', { defaultValue: 'Add' })}
        </Button>
      </Grid>
      <Grid className="page-action" item>
        <Button id="page-action-refresh" onClick={() => pageRefreshVotesAction(() => fetchData())} disabled={isLoading}>
          <MdiIcon path="refresh" />
          {t('judo.pages.table.refresh', { defaultValue: 'Refresh' })}
        </Button>
      </Grid>
      <Grid className="page-action" item>
        <Button
          id="page-action-clear"
          onClick={() =>
            pageClearVotesAction({ __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminUser>, () =>
              fetchData(),
            )
          }
          disabled={isLoading}
        >
          <MdiIcon path="link_off" />
          {t('judo.pages.table.clear', { defaultValue: 'Clear' })}
        </Button>
      </Grid>
    </>
  );
}
