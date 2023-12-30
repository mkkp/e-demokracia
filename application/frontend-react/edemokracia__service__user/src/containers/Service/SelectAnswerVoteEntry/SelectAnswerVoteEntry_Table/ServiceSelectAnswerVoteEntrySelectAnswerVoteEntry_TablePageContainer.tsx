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
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteEntryStored,
} from '~/services/data-api';
import { mainContainerPadding } from '~/theme';
import type { ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_TableActionDefinitions } from './ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_Table';

const ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_Table = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteEntry/SelectAnswerVoteEntry_Table/ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_Table'
    ),
);

export interface ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_TablePageActions
  extends ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_TablePageProps {
  title: string;
  actions: ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::SelectAnswerVoteEntry::SelectAnswerVoteEntry_Table
export default function ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_TablePage(
  props: ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_TablePageProps,
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
              id="User/(esm/_mtLkMFtpEe6Mx9dH3yj5gQ)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t('service.SelectAnswerVoteEntry.SelectAnswerVoteEntry_Table.Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
