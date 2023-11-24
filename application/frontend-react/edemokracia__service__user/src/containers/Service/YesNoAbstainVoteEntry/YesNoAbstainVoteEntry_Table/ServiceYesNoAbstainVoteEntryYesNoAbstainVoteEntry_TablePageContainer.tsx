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
import type { ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TableActionDefinitions } from './ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_Table';
import type {
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryStored,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
} from '~/services/data-api';

const ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_Table = lazy(
  () =>
    import(
      '~/containers/Service/YesNoAbstainVoteEntry/YesNoAbstainVoteEntry_Table/ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_Table'
    ),
);

export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TablePageActions
  extends ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TablePageProps {
  title: string;
  actions: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::YesNoAbstainVoteEntry::YesNoAbstainVoteEntry_Table
export default function ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TablePage(
  props: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TablePageProps,
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
              id="User/(esm/_L2wXIFsjEe6Mx9dH3yj5gQ)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t('service.YesNoAbstainVoteEntry.YesNoAbstainVoteEntry_Table.Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}