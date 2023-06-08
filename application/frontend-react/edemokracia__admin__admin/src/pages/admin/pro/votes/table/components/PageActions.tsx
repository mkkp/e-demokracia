import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { MdiIcon, useJudoNavigation } from '~/components';
import {
  AdminPro,
  AdminProStored,
  AdminSimpleVote,
  AdminSimpleVoteQueryCustomizer,
  AdminSimpleVoteStored,
  EdemokraciaSimpleVoteType,
} from '~/generated/data-api';
import { usePageCreateVotesAction, usePageFilterVotesAction, usePageRefreshVotesAction } from '../actions';

export interface PageActionsProps {
  isLoading: boolean;
  fetchData: () => Promise<void>;
  signedIdentifier?: string;
}

export function PageActions(props: PageActionsProps) {
  const { isLoading, fetchData, signedIdentifier } = props;
  const { t } = useTranslation();

  const pageCreateVotesAction = usePageCreateVotesAction();
  const pageRefreshVotesAction = usePageRefreshVotesAction();

  return (
    <>
      <Grid className="page-action" item>
        <Button
          id="page-action-create"
          startIcon={<MdiIcon path="file_document_plus" />}
          onClick={() =>
            pageCreateVotesAction({ __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminPro>, () =>
              fetchData(),
            )
          }
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
          onClick={() => pageRefreshVotesAction(() => fetchData())}
          disabled={isLoading}
        >
          {t('judo.pages.table.refresh', { defaultValue: 'Refresh' })}
        </LoadingButton>
      </Grid>
    </>
  );
}
