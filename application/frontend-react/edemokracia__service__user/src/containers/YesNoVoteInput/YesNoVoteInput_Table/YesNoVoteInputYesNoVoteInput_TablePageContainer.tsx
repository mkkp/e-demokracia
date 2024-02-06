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
import type { YesNoVoteInput, YesNoVoteInputQueryCustomizer, YesNoVoteInputStored } from '~/services/data-api';
import { mainContainerPadding } from '~/theme';
import type { YesNoVoteInputYesNoVoteInput_TableActionDefinitions } from './YesNoVoteInputYesNoVoteInput_Table';

const YesNoVoteInputYesNoVoteInput_Table = lazy(
  () => import('~/containers/YesNoVoteInput/YesNoVoteInput_Table/YesNoVoteInputYesNoVoteInput_Table'),
);

export interface YesNoVoteInputYesNoVoteInput_TablePageActions
  extends YesNoVoteInputYesNoVoteInput_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface YesNoVoteInputYesNoVoteInput_TablePageProps {
  actions: YesNoVoteInputYesNoVoteInput_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: YesNoVoteInput::YesNoVoteInput_Table
export default function YesNoVoteInputYesNoVoteInput_TablePage(props: YesNoVoteInputYesNoVoteInput_TablePageProps) {
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
              id="User/(esm/_-1R8hHWyEe2LTNnGda5kaw)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('YesNoVoteInput.YesNoVoteInput_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <YesNoVoteInputYesNoVoteInput_Table actions={actions} refreshCounter={refreshCounter} isLoading={isLoading} />
        </Box>
      </Suspense>
    </>
  );
}
