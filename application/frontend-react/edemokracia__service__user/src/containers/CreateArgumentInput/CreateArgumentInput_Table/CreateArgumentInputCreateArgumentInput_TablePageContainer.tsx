//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPageContainersToGenerate(#application)
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'PageContainer.tsx'
// Template name: actor/src/containers/page.tsx
// Template file: actor/src/containers/page.tsx.hbs

import { lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation, MdiIcon, PageHeader } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { mainContainerPadding } from '~/theme';
import type { CreateArgumentInputCreateArgumentInput_TableActionDefinitions } from './CreateArgumentInputCreateArgumentInput_Table';
import type {
  CreateArgumentInput,
  CreateArgumentInputStored,
  CreateArgumentInputQueryCustomizer,
} from '~/services/data-api';

const CreateArgumentInputCreateArgumentInput_Table = lazy(
  () =>
    import('~/containers/CreateArgumentInput/CreateArgumentInput_Table/CreateArgumentInputCreateArgumentInput_Table'),
);

export interface CreateArgumentInputCreateArgumentInput_TablePageActions
  extends CreateArgumentInputCreateArgumentInput_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface CreateArgumentInputCreateArgumentInput_TablePageProps {
  title: string;
  actions: CreateArgumentInputCreateArgumentInput_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: CreateArgumentInput::CreateArgumentInput_Table
export default function CreateArgumentInputCreateArgumentInput_TablePage(
  props: CreateArgumentInputCreateArgumentInput_TablePageProps,
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
              id="User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('CreateArgumentInput.CreateArgumentInput_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <CreateArgumentInputCreateArgumentInput_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
