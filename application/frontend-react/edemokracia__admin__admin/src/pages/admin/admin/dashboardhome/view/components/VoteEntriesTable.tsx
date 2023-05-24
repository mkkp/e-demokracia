//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/table.tsx
// Template file: actor/src/pages/components/table.tsx.hbs

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
  AdminDashboard,
  AdminDashboardQueryCustomizer,
  AdminDashboardStored,
  AdminDebate,
  AdminDebateQueryCustomizer,
  AdminDebateStored,
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminVoteEntry,
  AdminVoteEntryQueryCustomizer,
  AdminVoteEntryStored,
} from '~/generated/data-api';
import { adminDashboardServiceImpl, adminVoteEntryServiceImpl } from '~/generated/data-axios';
import { usePageRefreshDashboardhomeAction } from '../actions';

export interface VoteEntriesTableProps {
  ownerData: AdminDashboardStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminDashboardStored, value: any) => void;
}

export const VoteEntriesTable = (props: VoteEntriesTableProps) => {
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [voteEntriesSortModel, setVoteEntriesSortModel] = useState<GridSortModel>([{ field: 'created', sort: 'asc' }]);

  const voteEntriesColumns: GridColDef<AdminVoteEntryStored>[] = [
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('admin.DashboardView.voteEntries.created', { defaultValue: 'Created' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'dateTime',
      valueGetter: ({ value }) => value && serviceDateToUiDate(value),
      valueFormatter: ({ value }: GridValueFormatterParams<Date>) => {
        return (
          value &&
          new Intl.DateTimeFormat(l10nLocale, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          }).format(value)
        );
      },
    },
    {
      ...baseColumnConfig,
      field: 'issueTitle',
      headerName: t('admin.DashboardView.voteEntries.issueTitle', { defaultValue: 'Issue Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'debateTitle',
      headerName: t('admin.DashboardView.voteEntries.debateTitle', { defaultValue: 'Debate Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'voteTitle',
      headerName: t('admin.DashboardView.voteEntries.voteTitle', { defaultValue: 'Vote Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'voteStatus',
      headerName: t('admin.DashboardView.voteEntries.voteStatus', { defaultValue: 'Vote Status' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'string',
      sortable: false,
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
  ];

  const pageRefreshDashboardhomeAction = usePageRefreshDashboardhomeAction();

  const voteEntriesRowActions: TableRowAction<AdminVoteEntryStored>[] = [];

  return (
    <DataGrid
      {...baseTableConfig}
      sx={{
        // overflow: 'hidden',
        display: 'grid',
      }}
      getRowId={(row: { __identifier: string }) => row.__identifier}
      loading={isOwnerLoading}
      rows={ownerData?.voteEntries ?? []}
      getRowClassName={() => 'data-grid-row'}
      getCellClassName={() => 'data-grid-cell'}
      columns={[
        ...voteEntriesColumns,
        ...columnsActionCalculator(
          'RelationTypeedemokraciaAdminAdminEdemokraciaAdminDashboardVoteEntries',
          voteEntriesRowActions,
          { shownActions: 2 },
        ),
      ]}
      disableRowSelectionOnClick
      sortModel={voteEntriesSortModel}
      onSortModelChange={(newModel: GridSortModel) => {
        setVoteEntriesSortModel(newModel);
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
};
