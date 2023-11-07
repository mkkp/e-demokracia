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
import type { ServiceRatingVoteEntryRatingVoteEntry_TableActionDefinitions } from './ServiceRatingVoteEntryRatingVoteEntry_Table';
import type {
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryStored,
  ServiceRatingVoteEntryQueryCustomizer,
} from '~/services/data-api';

const ServiceRatingVoteEntryRatingVoteEntry_Table = lazy(
  () =>
    import('~/containers/Service/RatingVoteEntry/RatingVoteEntry_Table/ServiceRatingVoteEntryRatingVoteEntry_Table'),
);

export interface ServiceRatingVoteEntryRatingVoteEntry_TablePageActions
  extends ServiceRatingVoteEntryRatingVoteEntry_TableActionDefinitions {
  serviceRatingVoteEntryRatingVoteEntry_TableBack?: () => Promise<void>;
}

export interface ServiceRatingVoteEntryRatingVoteEntry_TablePageProps {
  title: string;
  actions: ServiceRatingVoteEntryRatingVoteEntry_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::RatingVoteEntry::RatingVoteEntry_Table
export default function ServiceRatingVoteEntryRatingVoteEntry_TablePage(
  props: ServiceRatingVoteEntryRatingVoteEntry_TablePageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceRatingVoteEntryRatingVoteEntry_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::RatingVoteEntry::RatingVoteEntry_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceRatingVoteEntryRatingVoteEntry_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.RatingVoteEntry.RatingVoteEntry.Table.service::RatingVoteEntry::RatingVoteEntry_Table::Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceRatingVoteEntryRatingVoteEntry_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
