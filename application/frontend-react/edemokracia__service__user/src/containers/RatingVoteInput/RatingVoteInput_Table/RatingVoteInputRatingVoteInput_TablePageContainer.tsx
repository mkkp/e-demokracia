//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPageContainersToGenerate(#application)
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'PageContainer.tsx'
// Template name: actor/src/containers/page.tsx
// Template file: actor/src/containers/page.tsx.hbs

import { lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Box, Grid, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation, MdiIcon, PageHeader } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { mainContainerPadding } from '~/theme';
import type { RatingVoteInputRatingVoteInput_TableActionDefinitions } from './RatingVoteInputRatingVoteInput_Table';
import type { RatingVoteInput, RatingVoteInputStored, RatingVoteInputQueryCustomizer } from '~/services/data-api';

const RatingVoteInputRatingVoteInput_Table = lazy(
  () => import('~/containers/RatingVoteInput/RatingVoteInput_Table/RatingVoteInputRatingVoteInput_Table'),
);

export interface RatingVoteInputRatingVoteInput_TablePageActions
  extends RatingVoteInputRatingVoteInput_TableActionDefinitions {
  ratingVoteInputRatingVoteInput_TableBack?: () => Promise<void>;
}

export interface RatingVoteInputRatingVoteInput_TablePageProps {
  title: string;
  actions: RatingVoteInputRatingVoteInput_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: RatingVoteInput::RatingVoteInput_Table
export default function RatingVoteInputRatingVoteInput_TablePage(props: RatingVoteInputRatingVoteInput_TablePageProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.ratingVoteInputRatingVoteInput_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="RatingVoteInput::RatingVoteInput_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.ratingVoteInputRatingVoteInput_TableBack!();
              }}
            >
              <span>
                {t('RatingVoteInput.RatingVoteInput.Table.RatingVoteInput::RatingVoteInput_Table::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <RatingVoteInputRatingVoteInput_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
