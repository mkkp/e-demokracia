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
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
} from '~/services/data-api';
import { mainContainerPadding } from '~/theme';
import type { ServiceYesNoVoteEntryYesNoVoteEntry_TableActionDefinitions } from './ServiceYesNoVoteEntryYesNoVoteEntry_Table';

const ServiceYesNoVoteEntryYesNoVoteEntry_Table = lazy(
  () => import('~/containers/Service/YesNoVoteEntry/YesNoVoteEntry_Table/ServiceYesNoVoteEntryYesNoVoteEntry_Table'),
);

export interface ServiceYesNoVoteEntryYesNoVoteEntry_TablePageActions
  extends ServiceYesNoVoteEntryYesNoVoteEntry_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface ServiceYesNoVoteEntryYesNoVoteEntry_TablePageProps {
  title: string;
  actions: ServiceYesNoVoteEntryYesNoVoteEntry_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::YesNoVoteEntry::YesNoVoteEntry_Table
export default function ServiceYesNoVoteEntryYesNoVoteEntry_TablePage(
  props: ServiceYesNoVoteEntryYesNoVoteEntry_TablePageProps,
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
              id="User/(esm/_LNiu0FoiEe6_67aMO2jOsw)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.YesNoVoteEntry.YesNoVoteEntry_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceYesNoVoteEntryYesNoVoteEntry_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
