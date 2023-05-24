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
import { adminDashboardServiceImpl, adminIssueServiceImpl } from '~/generated/data-axios';
import {
  usePageRefreshDashboardhomeAction,
  useRowDeleteIssuesAction,
  useRowViewIssuesAction,
  useAdminIssueCreateCommentAction,
  useAdminIssueCreateDebateAction,
} from '../actions';

export interface IssuesTableProps {
  ownerData: AdminDashboardStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminDashboardStored, value: any) => void;
}

export const IssuesTable = (props: IssuesTableProps) => {
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [issuesSortModel, setIssuesSortModel] = useState<GridSortModel>([{ field: 'title', sort: 'asc' }]);

  const issuesColumns: GridColDef<AdminIssueStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('admin.DashboardView.issues.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('admin.DashboardView.issues.created', { defaultValue: 'Created' }) as string,
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
      field: 'status',
      headerName: t('admin.DashboardView.issues.status', { defaultValue: 'Status' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'string',
      sortable: false,
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
    {
      ...baseColumnConfig,
      field: 'numberOfDebates',
      headerName: t('admin.DashboardView.issues.numberOfDebates', { defaultValue: 'Debates' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
  ];

  const pageRefreshDashboardhomeAction = usePageRefreshDashboardhomeAction();
  const rowDeleteIssuesAction = useRowDeleteIssuesAction();
  const rowViewIssuesAction = useRowViewIssuesAction();
  const adminIssueCreateCommentAction = useAdminIssueCreateCommentAction();
  const adminIssueCreateDebateAction = useAdminIssueCreateDebateAction();

  const issuesRowActions: TableRowAction<AdminIssueStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewEdemokraciaAdminAdminEdemokraciaAdminDashboardIssuesRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminIssueStored) => rowDeleteIssuesAction(ownerData, row, () => fetchOwnerData()),
      disabled: (row: AdminIssueStored) => editMode || !row.__deleteable,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewEdemokraciaAdminAdminEdemokraciaAdminIssueCreateDebateButtonCallOperation',
      label: t('admin.DashboardView.issues.createDebate.ButtonCallOperation', {
        defaultValue: 'Create debate',
      }) as string,
      icon: <MdiIcon path="wechat" />,
      action: async (row: AdminIssueStored) => adminIssueCreateDebateAction(row, () => fetchOwnerData()),
      disabled: (row: AdminIssueStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewEdemokraciaAdminAdminEdemokraciaAdminIssueCreateCommentButtonCallOperation',
      label: t('admin.DashboardView.issues.createComment.ButtonCallOperation', {
        defaultValue: 'Add comment',
      }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      action: async (row: AdminIssueStored) => adminIssueCreateCommentAction(row, () => fetchOwnerData()),
      disabled: (row: AdminIssueStored) => editMode,
    },
  ];

  return (
    <DataGrid
      {...baseTableConfig}
      sx={{
        // overflow: 'hidden',
        display: 'grid',
      }}
      getRowId={(row: { __identifier: string }) => row.__identifier}
      loading={isOwnerLoading}
      rows={ownerData?.issues ?? []}
      getRowClassName={() => 'data-grid-row'}
      getCellClassName={() => 'data-grid-cell'}
      columns={[
        ...issuesColumns,
        ...columnsActionCalculator(
          'RelationTypeedemokraciaAdminAdminEdemokraciaAdminDashboardIssues',
          issuesRowActions,
          { shownActions: 2 },
        ),
      ]}
      disableRowSelectionOnClick
      onRowClick={(params: GridRowParams<AdminIssueStored>) => {
        if (!editMode) {
          rowViewIssuesAction(ownerData, params.row);
        }
      }}
      sortModel={issuesSortModel}
      onSortModelChange={(newModel: GridSortModel) => {
        setIssuesSortModel(newModel);
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
