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
import type { YesNoAbstainVoteInputYesNoAbstainVoteInput_TableActionDefinitions } from './YesNoAbstainVoteInputYesNoAbstainVoteInput_Table';
import type {
  YesNoAbstainVoteInput,
  YesNoAbstainVoteInputStored,
  YesNoAbstainVoteInputQueryCustomizer,
} from '~/services/data-api';

const YesNoAbstainVoteInputYesNoAbstainVoteInput_Table = lazy(
  () =>
    import(
      '~/containers/YesNoAbstainVoteInput/YesNoAbstainVoteInput_Table/YesNoAbstainVoteInputYesNoAbstainVoteInput_Table'
    ),
);

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_TablePageActions
  extends YesNoAbstainVoteInputYesNoAbstainVoteInput_TableActionDefinitions {
  yesNoAbstainVoteInputYesNoAbstainVoteInput_TableBack?: () => Promise<void>;
}

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_TablePageProps {
  title: string;
  actions: YesNoAbstainVoteInputYesNoAbstainVoteInput_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: YesNoAbstainVoteInput::YesNoAbstainVoteInput_Table
export default function YesNoAbstainVoteInputYesNoAbstainVoteInput_TablePage(
  props: YesNoAbstainVoteInputYesNoAbstainVoteInput_TablePageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.yesNoAbstainVoteInputYesNoAbstainVoteInput_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="YesNoAbstainVoteInput::YesNoAbstainVoteInput_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.yesNoAbstainVoteInputYesNoAbstainVoteInput_TableBack!();
              }}
            >
              <span>
                {t(
                  'YesNoAbstainVoteInput.YesNoAbstainVoteInput.Table.YesNoAbstainVoteInput::YesNoAbstainVoteInput_Table::Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <YesNoAbstainVoteInputYesNoAbstainVoteInput_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
