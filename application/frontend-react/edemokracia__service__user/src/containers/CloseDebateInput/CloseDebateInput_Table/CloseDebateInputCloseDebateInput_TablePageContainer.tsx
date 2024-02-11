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
import type { CloseDebateInput, CloseDebateInputQueryCustomizer, CloseDebateInputStored } from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { mainContainerPadding } from '~/theme';
import type { CloseDebateInputCloseDebateInput_TableActionDefinitions } from './CloseDebateInputCloseDebateInput_Table';

const CloseDebateInputCloseDebateInput_Table = lazy(
  () => import('~/containers/CloseDebateInput/CloseDebateInput_Table/CloseDebateInputCloseDebateInput_Table'),
);

export interface CloseDebateInputCloseDebateInput_TablePageActions
  extends CloseDebateInputCloseDebateInput_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface CloseDebateInputCloseDebateInput_TablePageProps {
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
  const { actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={actions?.getPageTitle ? actions?.getPageTitle() : ''}>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              disabled={editMode}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('CloseDebateInput.CloseDebateInput_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <CloseDebateInputCloseDebateInput_Table
            actions={actions}
            refreshCounter={refreshCounter}
            isLoading={isLoading}
          />
        </Box>
      </Suspense>
    </>
  );
}
