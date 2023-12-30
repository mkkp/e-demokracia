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
  CreateCommentInput,
  CreateCommentInputQueryCustomizer,
  CreateCommentInputStored,
} from '~/services/data-api';
import { mainContainerPadding } from '~/theme';
import type { CreateCommentInputCreateCommentInput_TableActionDefinitions } from './CreateCommentInputCreateCommentInput_Table';

const CreateCommentInputCreateCommentInput_Table = lazy(
  () => import('~/containers/CreateCommentInput/CreateCommentInput_Table/CreateCommentInputCreateCommentInput_Table'),
);

export interface CreateCommentInputCreateCommentInput_TablePageActions
  extends CreateCommentInputCreateCommentInput_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface CreateCommentInputCreateCommentInput_TablePageProps {
  title: string;
  actions: CreateCommentInputCreateCommentInput_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: CreateCommentInput::CreateCommentInput_Table
export default function CreateCommentInputCreateCommentInput_TablePage(
  props: CreateCommentInputCreateCommentInput_TablePageProps,
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
              id="User/(esm/_kYeCcIe5Ee2kLcMqsIbMgQ)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('CreateCommentInput.CreateCommentInput_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <CreateCommentInputCreateCommentInput_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
