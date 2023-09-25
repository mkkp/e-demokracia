//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/table.tsx
// Template file: actor/src/pages/components/table.tsx.hbs

import { useEffect, useState, useImperativeHandle, useMemo, useRef, forwardRef, useCallback } from 'react';
import type { MouseEvent } from 'react';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
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
import { GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import { MdiIcon, CustomTablePagination } from '~/components';
import { baseColumnConfig, baseTableConfig, toastConfig, DIVIDER_HEIGHT } from '~/config';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { columnsActionCalculator } from '~/components/table';
import { FilterOption, FilterType, Filter } from '~/components-api';
import type { PersistedTableData, RefreshableTable, TableRowAction } from '~/utilities';
import { useDataStore, useCRUDDialog } from '~/hooks';
import {
  decodeToken,
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  processQueryCustomizer,
  mapAllFiltersToQueryCustomizerProperties,
  mapFilterModelToFilters,
  mapFilterToFilterModel,
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  getUpdatedRowsSelected,
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
import { adminDashboardServiceForClassImpl, adminVoteEntryServiceForClassImpl } from '~/generated/data-axios';
import { usePageRefreshDashboardHomeAction } from '../actions';
import { applyInMemoryFilters } from '~/utilities';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_ADMIN_DASHBOARD_HOME_DASHBOARD_VOTE_ENTRIES = 'AdminAdminDashboardHomeDashboardVoteEntries';

export interface VoteEntriesTableProps {
  ownerData: AdminDashboardStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminDashboardStored, value: any) => void;
  validation: Map<keyof AdminDashboard, string>;
}

export const VoteEntriesTable = (props: VoteEntriesTableProps) => {
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { openFilterDialog } = useFilterDialog();
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const openCRUDDialog = useCRUDDialog();

  const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntries-${ownerData.__identifier}-filterModel`;
  const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntries-${ownerData.__identifier}-filters`;
  const [voteEntriesFilterModel, setVoteEntriesFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [data, setData] = useState<AdminVoteEntryStored[]>([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const selectedRows = useRef<AdminVoteEntryStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  const [voteEntriesSortModel, setVoteEntriesSortModel] = useState<GridSortModel>([{ field: 'created', sort: null }]);

  const voteEntriesColumns: GridColDef<AdminVoteEntryStored>[] = [
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('edemokracia.admin.Admin.dashboardHome.Dashboard.voteEntries.created', {
        defaultValue: 'Created',
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
      field: 'issueTitle',
      headerName: t('edemokracia.admin.Admin.dashboardHome.Dashboard.voteEntries.issueTitle', {
        defaultValue: 'Issue Title',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'debateTitle',
      headerName: t('edemokracia.admin.Admin.dashboardHome.Dashboard.voteEntries.debateTitle', {
        defaultValue: 'Debate Title',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'voteTitle',
      headerName: t('edemokracia.admin.Admin.dashboardHome.Dashboard.voteEntries.voteTitle', {
        defaultValue: 'Vote Title',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'voteStatus',
      headerName: t('edemokracia.admin.Admin.dashboardHome.Dashboard.voteEntries.voteStatus', {
        defaultValue: 'Vote Status',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'singleSelect',
      filterable: false && true,
      sortable: false,
      valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
        if (value !== undefined && value !== null) {
          return t(`enumerations.EdemokraciaVoteStatus.${value}`, { defaultValue: value });
        }
      },
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
  ];

  const voteEntriesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntriesCreatedFilter',
      attributeName: 'created',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.voteEntries.created', {
        defaultValue: 'Created',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntriesIssueTitleFilter',
      attributeName: 'issueTitle',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.voteEntries.issueTitle', {
        defaultValue: 'Issue Title',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntriesDebateTitleFilter',
      attributeName: 'debateTitle',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.voteEntries.debateTitle', {
        defaultValue: 'Debate Title',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntriesVoteTitleFilter',
      attributeName: 'voteTitle',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.voteEntries.voteTitle', {
        defaultValue: 'Vote Title',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntriesVoteStatusFilter',
      attributeName: 'voteStatus',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.voteEntries.voteStatus', {
        defaultValue: 'Vote Status',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED'],
    },
  ];

  const voteEntriesInitialQueryCustomizer: AdminVoteEntryQueryCustomizer = {
    _mask: '{created,issueTitle,debateTitle,voteTitle,voteStatus}',
    _orderBy: voteEntriesSortModel.length
      ? [
          {
            attribute: voteEntriesSortModel[0].field,
            descending: voteEntriesSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageRefreshDashboardHomeAction = usePageRefreshDashboardHomeAction();

  const voteEntriesRowActions: TableRowAction<AdminVoteEntryStored>[] = [];

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntriesCreatedFilter',
      attributeName: 'created',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.voteEntries.created', {
        defaultValue: 'Created',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntriesIssueTitleFilter',
      attributeName: 'issueTitle',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.voteEntries.issueTitle', {
        defaultValue: 'Issue Title',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntriesDebateTitleFilter',
      attributeName: 'debateTitle',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.voteEntries.debateTitle', {
        defaultValue: 'Debate Title',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntriesVoteTitleFilter',
      attributeName: 'voteTitle',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.voteEntries.voteTitle', {
        defaultValue: 'Vote Title',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntriesVoteStatusFilter',
      attributeName: 'voteStatus',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.voteEntries.voteStatus', {
        defaultValue: 'Vote Status',
      }) as string,
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
      setItemStringified(filtersKey, newFilters);
    }
  };

  useEffect(() => {
    if (ownerData?.__identifier) {
      const storedFilters = getItemParsed<Filter[]>(filtersKey);
      if (storedFilters !== null) {
        setFilters(storedFilters);
      }

      const storedFilterModel = getItemParsed<GridFilterModel>(filterModelKey);
      if (storedFilterModel !== null) {
        setVoteEntriesFilterModel(storedFilterModel);
      }
    }
  }, [ownerData]);

  useEffect(() => {
    const newData = applyInMemoryFilters<AdminVoteEntryStored>(filters, ownerData?.voteEntries ?? []);
    setData(newData);
  }, [ownerData?.voteEntries, filters]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) =>
            props.validation.has('voteEntries') ? `2px solid ${theme.palette.error.main}` : undefined,
        }}
        slotProps={{
          filterPanel: {
            logicOperators: [GridLogicOperator.And],
          },
        }}
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isOwnerLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...voteEntriesColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminDashboardVoteEntries',
            voteEntriesRowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setSelectionModel(newRowSelectionModel);
        }}
        sortModel={voteEntriesSortModel}
        onSortModelChange={(newModel: GridSortModel) => {
          setVoteEntriesSortModel(newModel);
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntries-filter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() =>
                  filter(
                    'TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntries-filter',
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
      {props.validation.has('voteEntries') && (
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
          <Typography>{props.validation.get('voteEntries')}</Typography>
        </Box>
      )}
    </>
  );
};
