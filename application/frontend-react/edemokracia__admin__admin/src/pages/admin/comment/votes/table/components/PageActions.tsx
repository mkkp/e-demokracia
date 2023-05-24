import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Grid } from '@mui/material';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { MdiIcon, useJudoNavigation } from '~/components';
import {
  AdminComment,
  AdminCommentStored,
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
          onClick={() =>
            pageCreateVotesAction({ __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminComment>, () =>
              fetchData(),
            )
          }
          disabled={isLoading}
        >
          <MdiIcon path="file_document_plus" />
          {t('judo.pages.table.create', { defaultValue: 'Create' })}
        </Button>
      </Grid>
      <Grid className="page-action" item>
        <Button id="page-action-refresh" onClick={() => pageRefreshVotesAction(() => fetchData())} disabled={isLoading}>
          <MdiIcon path="refresh" />
          {t('judo.pages.table.refresh', { defaultValue: 'Refresh' })}
        </Button>
      </Grid>
    </>
  );
}
