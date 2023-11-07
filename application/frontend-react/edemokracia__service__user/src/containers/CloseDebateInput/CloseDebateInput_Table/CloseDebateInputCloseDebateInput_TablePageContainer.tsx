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
import type { CloseDebateInputCloseDebateInput_TableActionDefinitions } from './CloseDebateInputCloseDebateInput_Table';
import type { CloseDebateInput, CloseDebateInputStored, CloseDebateInputQueryCustomizer } from '~/services/data-api';

const CloseDebateInputCloseDebateInput_Table = lazy(
  () => import('~/containers/CloseDebateInput/CloseDebateInput_Table/CloseDebateInputCloseDebateInput_Table'),
);

export interface CloseDebateInputCloseDebateInput_TablePageActions
  extends CloseDebateInputCloseDebateInput_TableActionDefinitions {
  closeDebateInputCloseDebateInput_TableBack?: () => Promise<void>;
}

export interface CloseDebateInputCloseDebateInput_TablePageProps {
  title: string;
  actions: CloseDebateInputCloseDebateInput_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: CloseDebateInput::CloseDebateInput_Table
export default function CloseDebateInputCloseDebateInput_TablePage(
  props: CloseDebateInputCloseDebateInput_TablePageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.closeDebateInputCloseDebateInput_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="CloseDebateInput::CloseDebateInput_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.closeDebateInputCloseDebateInput_TableBack!();
              }}
            >
              <span>
                {t('CloseDebateInput.CloseDebateInput.Table.CloseDebateInput::CloseDebateInput_Table::Back', {
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
          <CloseDebateInputCloseDebateInput_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
