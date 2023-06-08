//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForActionFormPages(#application)
// Path expression: #pagePath(#getActionContainer(#self.value))+'actions/'+#pageActionFormPathSuffix(#self.value)+'/components/'+#tableComponentName(#self.key)+'.tsx'
// Template name: actor/src/pages/actions/actionForm/components/table.tsx
// Template file: actor/src/pages/actions/actionForm/components/table.tsx.hbs

import { useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import type {
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridValueFormatterParams,
  GridRowId,
  GridRowModel,
  GridRowSelectionModel,
  GridSortItem,
} from '@mui/x-data-grid';
import { GridToolbarContainer, DataGrid } from '@mui/x-data-grid';
import { MdiIcon, CustomTablePagination } from '~/components';
import { baseColumnConfig, baseTableConfig, toastConfig, dividerHeight } from '~/config';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { columnsActionCalculator } from '~/components/table';
import { FilterOption, FilterType, Filter } from '~/components-api';
import type { PersistedTableData, RefreshableTable, TableRowAction } from '~/utilities';
import {
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  processQueryCustomizer,
  mapAllFiltersToQueryCustomizerProperties,
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';

import {
  AdminDebate,
  AdminDebateQueryCustomizer,
  AdminDebateStored,
  CloseDebateInput,
  CloseDebateInputQueryCustomizer,
  CloseDebateInputStored,
  EdemokraciaVoteTypeOnCloseDebate,
  SelectAnswerInput,
  SelectAnswerInputQueryCustomizer,
  SelectAnswerInputStored,
  VoteDefinition,
  VoteDefinitionQueryCustomizer,
  VoteDefinitionStored,
} from '~/generated/data-api';
import { closeDebateInputServiceImpl, adminDebateServiceImpl } from '~/generated/data-axios';

export interface AnswersTableProps {
  ownerData: CloseDebateInput;
  isOwnerLoading: boolean;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void;
}

export const AnswersTable = forwardRef<RefreshableTable, AnswersTableProps>((props, ref) => {
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [answersSortModel, setAnswersSortModel] = useState<GridSortModel>([]);

  const answersColumns: GridColDef<SelectAnswerInputStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('CloseDebateInputForm.answers.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      sortable: false,
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('CloseDebateInputForm.answers.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      sortable: false,
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
  ];

  const answersRowActions: TableRowAction<SelectAnswerInputStored>[] = [
    {
      id: 'RemoveActionedemokraciaAdminAdminEdemokraciaAdminDebateCloseDebateInputEdemokraciaAdminAdminEdemokraciaCloseDebateInputAnswersRowRemove',
      label: t('judo.pages.table.remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      action: async (row: SelectAnswerInputStored) => {
        storeDiff('answers', [
          ...(ownerData.answers || []).filter(
            (e: SelectAnswerInputStored) => e.__signedIdentifier !== row.__signedIdentifier,
          ),
        ]);
      },
    },
  ];

  return (
    <DataGrid
      {...baseTableConfig}
      pageSizeOptions={[10]}
      sx={{
        // overflow: 'hidden',
        display: 'grid',
      }}
      getRowId={(row: { __identifier: string }) => row.__identifier}
      loading={isOwnerLoading}
      rows={ownerData?.answers ?? []}
      getRowClassName={() => 'data-grid-row'}
      getCellClassName={() => 'data-grid-cell'}
      columns={[
        ...answersColumns,
        ...columnsActionCalculator(
          'RelationTypeedemokraciaAdminAdminEdemokraciaCloseDebateInputAnswers',
          answersRowActions,
          { shownActions: 2 },
        ),
      ]}
      disableRowSelectionOnClick
      sortModel={answersSortModel}
      onSortModelChange={(newModel: GridSortModel) => {
        setAnswersSortModel(newModel);
      }}
      components={{
        Toolbar: () => (
          <GridToolbarContainer>
            <div>{/* Placeholder */}</div>
          </GridToolbarContainer>
        ),
      }}
    />
  );
});
