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
  YesNoAbstainVoteInput,
  YesNoAbstainVoteInputQueryCustomizer,
  YesNoAbstainVoteInputStored,
} from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { mainContainerPadding } from '~/theme';
import type { YesNoAbstainVoteInputYesNoAbstainVoteInput_TableActionDefinitions } from './YesNoAbstainVoteInputYesNoAbstainVoteInput_Table';

const YesNoAbstainVoteInputYesNoAbstainVoteInput_Table = lazy(
  () =>
    import(
      '~/containers/YesNoAbstainVoteInput/YesNoAbstainVoteInput_Table/YesNoAbstainVoteInputYesNoAbstainVoteInput_Table'
    ),
);

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_TablePageActions
  extends YesNoAbstainVoteInputYesNoAbstainVoteInput_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_TablePageProps {
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
  const { actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={actions?.getPageTitle ? actions?.getPageTitle() : ''}>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-1U_1HWyEe2LTNnGda5kaw)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              disabled={isLoading}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('judo.action.back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <YesNoAbstainVoteInputYesNoAbstainVoteInput_Table
            actions={actions}
            refreshCounter={refreshCounter}
            isLoading={isLoading}
          />
        </Box>
      </Suspense>
    </>
  );
}
