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
import type { ServiceVoteDefinitionVoteDefinition_TableActionDefinitions } from './ServiceVoteDefinitionVoteDefinition_Table';
import type {
  ServiceVoteDefinition,
  ServiceVoteDefinitionStored,
  ServiceVoteDefinitionQueryCustomizer,
} from '~/services/data-api';

const ServiceVoteDefinitionVoteDefinition_Table = lazy(
  () => import('~/containers/Service/VoteDefinition/VoteDefinition_Table/ServiceVoteDefinitionVoteDefinition_Table'),
);

export interface ServiceVoteDefinitionVoteDefinition_TablePageActions
  extends ServiceVoteDefinitionVoteDefinition_TableActionDefinitions {
  serviceVoteDefinitionVoteDefinition_TableBack?: () => Promise<void>;
}

export interface ServiceVoteDefinitionVoteDefinition_TablePageProps {
  title: string;
  actions: ServiceVoteDefinitionVoteDefinition_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::VoteDefinition::VoteDefinition_Table
export default function ServiceVoteDefinitionVoteDefinition_TablePage(
  props: ServiceVoteDefinitionVoteDefinition_TablePageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceVoteDefinitionVoteDefinition_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::VoteDefinition::VoteDefinition_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceVoteDefinitionVoteDefinition_TableBack!();
              }}
            >
              <span>
                {t('service.VoteDefinition.VoteDefinition.Table.service::VoteDefinition::VoteDefinition_Table::Back', {
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
          <ServiceVoteDefinitionVoteDefinition_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
