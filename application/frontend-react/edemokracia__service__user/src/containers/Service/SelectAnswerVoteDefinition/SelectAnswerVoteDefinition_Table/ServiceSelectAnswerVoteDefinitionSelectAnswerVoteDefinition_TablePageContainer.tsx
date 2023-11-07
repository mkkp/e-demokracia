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
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableActionDefinitions } from './ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_Table';
import type {
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
} from '~/services/data-api';

const ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_Table = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_Table/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_Table'
    ),
);

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageActions
  extends ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableActionDefinitions {
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableBack?: () => Promise<void>;
}

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageProps {
  title: string;
  actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_Table
export default function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePage(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.Table.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_Table::Back',
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
          <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_Table
            actions={actions}
            refreshCounter={refreshCounter}
          />
        </Box>
      </Suspense>
    </>
  );
}
