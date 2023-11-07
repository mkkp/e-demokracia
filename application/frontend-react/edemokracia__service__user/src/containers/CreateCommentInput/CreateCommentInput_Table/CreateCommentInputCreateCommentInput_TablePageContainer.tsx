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
import type { CreateCommentInputCreateCommentInput_TableActionDefinitions } from './CreateCommentInputCreateCommentInput_Table';
import type {
  CreateCommentInput,
  CreateCommentInputStored,
  CreateCommentInputQueryCustomizer,
} from '~/services/data-api';

const CreateCommentInputCreateCommentInput_Table = lazy(
  () => import('~/containers/CreateCommentInput/CreateCommentInput_Table/CreateCommentInputCreateCommentInput_Table'),
);

export interface CreateCommentInputCreateCommentInput_TablePageActions
  extends CreateCommentInputCreateCommentInput_TableActionDefinitions {
  createCommentInputCreateCommentInput_TableBack?: () => Promise<void>;
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
        {!editMode && actions.createCommentInputCreateCommentInput_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="CreateCommentInput::CreateCommentInput_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.createCommentInputCreateCommentInput_TableBack!();
              }}
            >
              <span>
                {t('CreateCommentInput.CreateCommentInput.Table.CreateCommentInput::CreateCommentInput_Table::Back', {
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
          <CreateCommentInputCreateCommentInput_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
