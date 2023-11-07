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
import type { ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableActionDefinitions } from './ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_Table';
import type {
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionStored,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
} from '~/services/data-api';

const ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_Table = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteSelection/SelectAnswerVoteSelection_Table/ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_Table'
    ),
);

export interface ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TablePageActions
  extends ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableActionDefinitions {
  serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableBack?: () => Promise<void>;
}

export interface ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TablePageProps {
  title: string;
  actions: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_Table
export default function ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TablePage(
  props: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TablePageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.SelectAnswerVoteSelection.SelectAnswerVoteSelection.Table.service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_Table::Back',
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
          <ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_Table
            actions={actions}
            refreshCounter={refreshCounter}
          />
        </Box>
      </Suspense>
    </>
  );
}
