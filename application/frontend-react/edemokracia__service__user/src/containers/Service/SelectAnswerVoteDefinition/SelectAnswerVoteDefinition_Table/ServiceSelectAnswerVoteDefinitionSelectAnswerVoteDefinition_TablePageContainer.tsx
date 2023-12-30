//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPageContainersToGenerate(#application)
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'PageContainer.tsx'
// Template name: actor/src/containers/page.tsx
// Template file: actor/src/containers/page.tsx.hbs

import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Suspense, lazy } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon, PageHeader, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import type {
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
} from '~/services/data-api';
import { mainContainerPadding } from '~/theme';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableActionDefinitions } from './ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_Table';

const ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_Table = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_Table/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_Table'
    ),
);

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageActions
  extends ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableActionDefinitions {
  backAction?: () => Promise<void>;
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
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.Back', {
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
          <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_Table
            actions={actions}
            refreshCounter={refreshCounter}
          />
        </Box>
      </Suspense>
    </>
  );
}
