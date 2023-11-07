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
import type { SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableActionDefinitions } from './SelectAnswerVoteSelectionSelectAnswerVoteSelection_Table';
import type {
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionStored,
  SelectAnswerVoteSelectionQueryCustomizer,
} from '~/services/data-api';

const SelectAnswerVoteSelectionSelectAnswerVoteSelection_Table = lazy(
  () =>
    import(
      '~/containers/SelectAnswerVoteSelection/SelectAnswerVoteSelection_Table/SelectAnswerVoteSelectionSelectAnswerVoteSelection_Table'
    ),
);

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_TablePageActions
  extends SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableActionDefinitions {
  selectAnswerVoteSelectionSelectAnswerVoteSelection_TableBack?: () => Promise<void>;
}

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_TablePageProps {
  title: string;
  actions: SelectAnswerVoteSelectionSelectAnswerVoteSelection_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: SelectAnswerVoteSelection::SelectAnswerVoteSelection_Table
export default function SelectAnswerVoteSelectionSelectAnswerVoteSelection_TablePage(
  props: SelectAnswerVoteSelectionSelectAnswerVoteSelection_TablePageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.selectAnswerVoteSelectionSelectAnswerVoteSelection_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="SelectAnswerVoteSelection::SelectAnswerVoteSelection_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.selectAnswerVoteSelectionSelectAnswerVoteSelection_TableBack!();
              }}
            >
              <span>
                {t(
                  'SelectAnswerVoteSelection.SelectAnswerVoteSelection.Table.SelectAnswerVoteSelection::SelectAnswerVoteSelection_Table::Back',
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
          <SelectAnswerVoteSelectionSelectAnswerVoteSelection_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
