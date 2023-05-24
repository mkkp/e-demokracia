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
import { adminDashboardServiceImpl, adminDebateServiceImpl } from '~/generated/data-axios';
import {
  usePageRefreshDashboardhomeAction,
  useRowDeleteDebatesAction,
  useRowViewDebatesAction,
  useAdminDebateCloseDebateAction,
  useAdminDebateCreateArgumentAction,
  useAdminDebateCreateCommentAction,
} from '../actions';

export interface DebatesTableProps {
  ownerData: AdminDashboardStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminDashboardStored, value: any) => void;
}

export const DebatesTable = (props: DebatesTableProps) => {
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [debatesSortModel, setDebatesSortModel] = useState<GridSortModel>([{ field: 'title', sort: 'asc' }]);

  const debatesColumns: GridColDef<AdminDebateStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('admin.DashboardView.debates.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'issueTitle',
      headerName: t('admin.DashboardView.debates.issueTitle', { defaultValue: 'Issue' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'closeAt',
      headerName: t('admin.DashboardView.debates.closeAt', { defaultValue: 'Close At' }) as string,
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
      headerName: t('admin.DashboardView.debates.status', { defaultValue: 'Status' }) as string,
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
  const rowDeleteDebatesAction = useRowDeleteDebatesAction();
  const rowViewDebatesAction = useRowViewDebatesAction();
  const adminDebateCloseDebateAction = useAdminDebateCloseDebateAction();
  const adminDebateCreateArgumentAction = useAdminDebateCreateArgumentAction();
  const adminDebateCreateCommentAction = useAdminDebateCreateCommentAction();

  const debatesRowActions: TableRowAction<AdminDebateStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewEdemokraciaAdminAdminEdemokraciaAdminDashboardDebatesRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminDebateStored) => rowDeleteDebatesAction(ownerData, row, () => fetchOwnerData()),
      disabled: (row: AdminDebateStored) => editMode || !row.__deleteable,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewEdemokraciaAdminAdminEdemokraciaAdminDebateCloseDebateButtonCallOperation',
      label: t('admin.DashboardView.debates.closeDebate.ButtonCallOperation', {
        defaultValue: 'Close debate',
      }) as string,
      icon: <MdiIcon path="wechat" />,
      action: async (row: AdminDebateStored) => adminDebateCloseDebateAction(row, () => fetchOwnerData()),
      disabled: (row: AdminDebateStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewEdemokraciaAdminAdminEdemokraciaAdminDebateCreateArgumentButtonCallOperation',
      label: t('admin.DashboardView.debates.createArgument.ButtonCallOperation', {
        defaultValue: 'Add argument',
      }) as string,
      icon: <MdiIcon path="account-voice" />,
      action: async (row: AdminDebateStored) => adminDebateCreateArgumentAction(row, () => fetchOwnerData()),
      disabled: (row: AdminDebateStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewEdemokraciaAdminAdminEdemokraciaAdminDebateCreateCommentButtonCallOperation',
      label: t('admin.DashboardView.debates.createComment.ButtonCallOperation', {
        defaultValue: 'Add comment',
      }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      action: async (row: AdminDebateStored) => adminDebateCreateCommentAction(row, () => fetchOwnerData()),
      disabled: (row: AdminDebateStored) => editMode,
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
      rows={ownerData?.debates ?? []}
      getRowClassName={() => 'data-grid-row'}
      getCellClassName={() => 'data-grid-cell'}
      columns={[
        ...debatesColumns,
        ...columnsActionCalculator(
          'RelationTypeedemokraciaAdminAdminEdemokraciaAdminDashboardDebates',
          debatesRowActions,
          { shownActions: 2 },
        ),
      ]}
      disableRowSelectionOnClick
      onRowClick={(params: GridRowParams<AdminDebateStored>) => {
        if (!editMode) {
          rowViewDebatesAction(ownerData, params.row);
        }
      }}
      sortModel={debatesSortModel}
      onSortModelChange={(newModel: GridSortModel) => {
        setDebatesSortModel(newModel);
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
