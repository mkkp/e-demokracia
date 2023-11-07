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
import type { ServiceRatingVoteDefinitionRatingVoteDefinition_TableActionDefinitions } from './ServiceRatingVoteDefinitionRatingVoteDefinition_Table';
import type {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionStored,
  ServiceRatingVoteDefinitionQueryCustomizer,
} from '~/services/data-api';

const ServiceRatingVoteDefinitionRatingVoteDefinition_Table = lazy(
  () =>
    import(
      '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_Table/ServiceRatingVoteDefinitionRatingVoteDefinition_Table'
    ),
);

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageActions
  extends ServiceRatingVoteDefinitionRatingVoteDefinition_TableActionDefinitions {
  serviceRatingVoteDefinitionRatingVoteDefinition_TableBack?: () => Promise<void>;
}

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageProps {
  title: string;
  actions: ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::RatingVoteDefinition::RatingVoteDefinition_Table
export default function ServiceRatingVoteDefinitionRatingVoteDefinition_TablePage(
  props: ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceRatingVoteDefinitionRatingVoteDefinition_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::RatingVoteDefinition::RatingVoteDefinition_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceRatingVoteDefinitionRatingVoteDefinition_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.RatingVoteDefinition.RatingVoteDefinition.Table.service::RatingVoteDefinition::RatingVoteDefinition_Table::Back',
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
          <ServiceRatingVoteDefinitionRatingVoteDefinition_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
