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
import type { YesNoVoteInputYesNoVoteInput_TableActionDefinitions } from './YesNoVoteInputYesNoVoteInput_Table';
import type { YesNoVoteInput, YesNoVoteInputStored, YesNoVoteInputQueryCustomizer } from '~/services/data-api';

const YesNoVoteInputYesNoVoteInput_Table = lazy(
  () => import('~/containers/YesNoVoteInput/YesNoVoteInput_Table/YesNoVoteInputYesNoVoteInput_Table'),
);

export interface YesNoVoteInputYesNoVoteInput_TablePageActions
  extends YesNoVoteInputYesNoVoteInput_TableActionDefinitions {
  yesNoVoteInputYesNoVoteInput_TableBack?: () => Promise<void>;
}

export interface YesNoVoteInputYesNoVoteInput_TablePageProps {
  title: string;
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
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.yesNoVoteInputYesNoVoteInput_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="YesNoVoteInput::YesNoVoteInput_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.yesNoVoteInputYesNoVoteInput_TableBack!();
              }}
            >
              <span>
                {t('YesNoVoteInput.YesNoVoteInput.Table.YesNoVoteInput::YesNoVoteInput_Table::Back', {
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
          <YesNoVoteInputYesNoVoteInput_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
