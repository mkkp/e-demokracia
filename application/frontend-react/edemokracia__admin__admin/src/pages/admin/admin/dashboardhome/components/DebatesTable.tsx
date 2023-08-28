//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/table.tsx
// Template file: actor/src/pages/components/table.tsx.hbs

import { useEffect, useState, useImperativeHandle, useMemo, useRef, forwardRef } from 'react';
import type { MouseEvent } from 'react';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import type {
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridValueFormatterParams,
  GridRowClassNameParams,
  GridRowId,
  GridRowModel,
  GridRowSelectionModel,
  GridSortItem,
} from '@mui/x-data-grid';
import { GridToolbarContainer } from '@mui/x-data-grid';
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
  mapFilterModelToFilters,
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';
import { ContextMenu, StripedDataGrid } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';

import { Box, Typography } from '@mui/material';
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
import { adminDashboardServiceForClassImpl, adminDebateServiceForClassImpl } from '~/generated/data-axios';
import {
  usePageRefreshDashboardhomeAction,
  useRowDeleteDebatesAction,
  useRowViewDebatesAction,
  useAdminDebateCloseDebateAction,
  useAdminDebateCreateArgumentAction,
  useAdminDebateCreateCommentAction,
} from '../actions';
import { applyInMemoryFilters } from '~/utilities';
export const ADMIN_ADMIN_DASHBOARDHOME_DASHBOARD_DEBATES = 'AdminAdminDashboardhomeDashboardDebates';

export interface DebatesTableProps {
  ownerData: AdminDashboardStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminDashboardStored, value: any) => void;
  validation: Map<keyof AdminDashboard, string>;
}

export const DebatesTable = (props: DebatesTableProps) => {
  const { openFilterDialog } = useFilterDialog();
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [filters, setFilters] = useState<Filter[]>([]);
  const [data, setData] = useState<AdminDebateStored[]>([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [debatesSortModel, setDebatesSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);

  const [debatesFilterModel, setDebatesFilterModel] = useState<GridFilterModel>({ items: [] });

  const debatesColumns: GridColDef<AdminDebateStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('edemokracia.admin.Admin.dashboardhome.Dashboard.debates.title', {
        defaultValue: 'Title',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'issueTitle',
      headerName: t('edemokracia.admin.Admin.dashboardhome.Dashboard.debates.issueTitle', {
        defaultValue: 'Issue',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'closeAt',
      headerName: t('edemokracia.admin.Admin.dashboardhome.Dashboard.debates.closeAt', {
        defaultValue: 'Close At',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'dateTime',
      filterable: false && true,
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
      headerName: t('edemokracia.admin.Admin.dashboardhome.Dashboard.debates.status', {
        defaultValue: 'Status',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'singleSelect',
      filterable: false && true,
      sortable: false,
      valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
        return t(`enumerations.EdemokraciaDebateStatus.${value}`, { defaultValue: value });
      },
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
  ];

  const debatesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMydebatesMydebatesDebatesLabelWrapperDebatesTitleFilter',
      attributeName: 'title',
      label: t('edemokracia.admin.Admin.dashboardhome.Dashboard.debates.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMydebatesMydebatesDebatesLabelWrapperDebatesIssueTitleFilter',
      attributeName: 'issueTitle',
      label: t('edemokracia.admin.Admin.dashboardhome.Dashboard.debates.issueTitle', {
        defaultValue: 'Issue',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMydebatesMydebatesDebatesLabelWrapperDebatesCloseAtFilter',
      attributeName: 'closeAt',
      label: t('edemokracia.admin.Admin.dashboardhome.Dashboard.debates.closeAt', {
        defaultValue: 'Close At',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMydebatesMydebatesDebatesLabelWrapperDebatesStatusFilter',
      attributeName: 'status',
      label: t('edemokracia.admin.Admin.dashboardhome.Dashboard.debates.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED'],
    },
  ];

  const debatesInitialQueryCustomizer: AdminDebateQueryCustomizer = {
    _mask: '{title,issueTitle,closeAt,status}',
    _orderBy: debatesSortModel.length
      ? [
          {
            attribute: debatesSortModel[0].field,
            descending: debatesSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageRefreshDashboardhomeAction = usePageRefreshDashboardhomeAction();
  const rowDeleteDebatesAction = useRowDeleteDebatesAction();
  const rowViewDebatesAction = useRowViewDebatesAction();
  const adminDebateCloseDebateAction = useAdminDebateCloseDebateAction();
  const adminDebateCreateArgumentAction = useAdminDebateCreateArgumentAction();
  const adminDebateCreateCommentAction = useAdminDebateCreateCommentAction();

  const debatesRowActions: TableRowAction<AdminDebateStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardEdemokraciaAdminAdminEdemokraciaAdminDashboardDebatesRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminDebateStored) => rowDeleteDebatesAction(ownerData, row, () => fetchOwnerData()),
      disabled: (row: AdminDebateStored) => editMode || !row.__deleteable,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardEdemokraciaAdminAdminEdemokraciaAdminDebateCloseDebateButtonCallOperation',
      label: t('edemokracia.admin.Admin.dashboardhome.Dashboard.debates.closeDebate.ButtonCallOperation', {
        defaultValue: 'Close debate',
      }) as string,
      icon: <MdiIcon path="wechat" />,
      action: async (row: AdminDebateStored) => adminDebateCloseDebateAction(row, () => fetchOwnerData()),
      disabled: (row: AdminDebateStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardEdemokraciaAdminAdminEdemokraciaAdminDebateCreateArgumentButtonCallOperation',
      label: t('edemokracia.admin.Admin.dashboardhome.Dashboard.debates.createArgument.ButtonCallOperation', {
        defaultValue: 'Add argument',
      }) as string,
      icon: <MdiIcon path="account-voice" />,
      action: async (row: AdminDebateStored) => adminDebateCreateArgumentAction(row, () => fetchOwnerData()),
      disabled: (row: AdminDebateStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardEdemokraciaAdminAdminEdemokraciaAdminDebateCreateCommentButtonCallOperation',
      label: t('edemokracia.admin.Admin.dashboardhome.Dashboard.debates.createComment.ButtonCallOperation', {
        defaultValue: 'Add comment',
      }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      action: async (row: AdminDebateStored) => adminDebateCreateCommentAction(row, () => fetchOwnerData()),
      disabled: (row: AdminDebateStored) => editMode,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMydebatesMydebatesDebatesLabelWrapperDebatesTitleFilter',
      attributeName: 'title',
      label: t('edemokracia.admin.Admin.dashboardhome.Dashboard.debates.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMydebatesMydebatesDebatesLabelWrapperDebatesIssueTitleFilter',
      attributeName: 'issueTitle',
      label: t('edemokracia.admin.Admin.dashboardhome.Dashboard.debates.issueTitle', {
        defaultValue: 'Issue',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMydebatesMydebatesDebatesLabelWrapperDebatesCloseAtFilter',
      attributeName: 'closeAt',
      label: t('edemokracia.admin.Admin.dashboardhome.Dashboard.debates.closeAt', {
        defaultValue: 'Close At',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMydebatesMydebatesDebatesLabelWrapperDebatesStatusFilter',
      attributeName: 'status',
      label: t('edemokracia.admin.Admin.dashboardhome.Dashboard.debates.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED'],
    },
  ];

  const filter = async (id: string, filterOptions: FilterOption[], filters: Filter[]) => {
    const newFilters = await openFilterDialog(id, filterOptions, filters);

    if (Array.isArray(newFilters)) {
      setPaginationModel((prevState) => ({
        ...prevState,
        page: 0,
      }));
      setFilters(newFilters);
    }
  };

  useEffect(() => {
    const newData = applyInMemoryFilters<AdminDebateStored>(filters, ownerData?.debates ?? []);
    setData(newData);
  }, [ownerData?.debates, filters]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) => (props.validation.has('debates') ? `2px solid ${theme.palette.error.main}` : undefined),
        }}
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isOwnerLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...debatesColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminDashboardDebates',
            debatesRowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        onRowClick={(params: GridRowParams<AdminDebateStored>) => {
          if (!editMode) {
            rowViewDebatesAction(ownerData, params.row, () => fetchOwnerData());
          }
        }}
        sortModel={debatesSortModel}
        onSortModelChange={(newModel: GridSortModel) => {
          setDebatesSortModel(newModel);
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMydebatesMydebatesDebatesLabelWrapperDebates-filter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() =>
                  filter(
                    'TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMydebatesMydebatesDebatesLabelWrapperDebates-filter',
                    filterOptions,
                    filters,
                  )
                }
                disabled={isOwnerLoading}
              >
                {t('judo.pages.table.set-filters', { defaultValue: 'Set filters' }) +
                  (filters.length !== 0 ? ' (' + filters.length + ')' : '')}
              </Button>
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
        }}
      />
      {props.validation.has('debates') && (
        <Box
          sx={{
            color: (theme) => theme.palette.error.main,
            display: 'flex',
            alignItems: 'center',
            pl: 1,
            pr: 1,
          }}
        >
          <MdiIcon path="alert-circle-outline" sx={{ mr: 1 }} />
          <Typography>{props.validation.get('debates')}</Typography>
        </Box>
      )}
    </>
  );
};