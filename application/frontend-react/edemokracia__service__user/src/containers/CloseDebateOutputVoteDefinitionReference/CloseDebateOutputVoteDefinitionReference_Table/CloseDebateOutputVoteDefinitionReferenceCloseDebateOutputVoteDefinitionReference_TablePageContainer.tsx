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
import type { CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableActionDefinitions } from './CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Table';
import type {
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceStored,
  CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
} from '~/services/data-api';

const CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Table = lazy(
  () =>
    import(
      '~/containers/CloseDebateOutputVoteDefinitionReference/CloseDebateOutputVoteDefinitionReference_Table/CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Table'
    ),
);

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TablePageActions
  extends CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableActionDefinitions {
  closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableBack?: () => Promise<void>;
}

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TablePageProps {
  title: string;
  actions: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_Table
export default function CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TablePage(
  props: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TablePageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode &&
          actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableBack && (
            <Grid className="page-action" item>
              <LoadingButton
                id="CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_Table::Back"
                loading={isLoading}
                loadingPosition="start"
                variant={'text'}
                startIcon={<MdiIcon path="arrow-left" />}
                onClick={async () => {
                  await actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableBack!();
                }}
              >
                <span>
                  {t(
                    'CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference.Table.CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_Table::Back',
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
          <CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Table
            actions={actions}
            refreshCounter={refreshCounter}
          />
        </Box>
      </Suspense>
    </>
  );
}
