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

import {
  AdminDashboard,
  AdminDashboardStored,
  AdminVoteEntry,
  AdminVoteEntryQueryCustomizer,
  AdminVoteEntryStored,
} from '~/generated/data-api';
import { adminDashboardServiceForClassImpl, adminVoteEntryServiceForClassImpl } from '~/generated/data-axios';
import { usePageFilterUserVoteEntriesAction, usePageRefreshUserVoteEntriesAction } from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_DASHBOARD_USER_VOTE_ENTRIES_TABLE_VOTE_ENTRY_TABLE =
  'AdminDashboardUserVoteEntriesTableVoteEntry_Table';

export interface VoteEntry_TableTableProps {
  ownerData: JudoIdentifiable<AdminDashboard>;
  isOwnerLoading: boolean;
  setIsOwnerLoading: (value: boolean) => void;
}

export const VoteEntry_TableTable = forwardRef<RefreshableTable, VoteEntry_TableTableProps>((props, ref) => {
  const { getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { isOwnerLoading, setIsOwnerLoading, ownerData } = props;
  const { sub: __identifier } = decodeToken<{ sub: string }>(ownerData.__signedIdentifier)!;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const openCRUDDialog = useCRUDDialog();

  const [data, setData] = useState<GridRowModel<AdminVoteEntryStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'userName', sort: null }]);
  const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableDefaultUserVoteEntriesVoteEntryTable-${__identifier}-filterModel`;
  const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableDefaultUserVoteEntriesVoteEntryTable-${__identifier}-filters`;
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [lastItem, setLastItem] = useState<AdminVoteEntryStored>();
  const [firstItem, setFirstItem] = useState<AdminVoteEntryStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [queryCustomizer, setQueryCustomizer] = useState<AdminVoteEntryQueryCustomizer>({
    _mask: '{userName,created,voteTitle,debateTitle,issueTitle,voteStatus}',
    _seek: {
      limit: 10 + 1,
    },
    _orderBy: sortModel.length
      ? [
          {
            attribute: sortModel[0].field,
            descending: sortModel[0].sort === 'desc',
          },
        ]
      : [],
    ...mapAllFiltersToQueryCustomizerProperties(filters),
  });

  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const selectedRows = useRef<AdminVoteEntryStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  useEffect(() => {
    setFilters(
      getItemParsedWithDefault(
        `TableedemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableDefaultUserVoteEntriesVoteEntryTable-${__identifier}-filters`,
        [...filters],
      ),
    );
  }, [ownerData]);
  useEffect(() => {
    setItemStringified(filtersKey, filters);
  }, [filters]);
  useEffect(() => {
    setItemStringified(filterModelKey, filterModel);
  }, [filterModel]);

  const userVoteEntriesSortModel: GridSortModel = [{ field: 'userName', sort: null }];

  const userVoteEntriesColumns: GridColDef<AdminVoteEntryStored>[] = [
    {
      ...baseColumnConfig,
      field: 'userName',
      headerName: t('admin.VoteEntryTable.userVoteEntries.userName', { defaultValue: 'UserName' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('admin.VoteEntryTable.userVoteEntries.created', { defaultValue: 'Created' }) as string,
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
      field: 'voteTitle',
      headerName: t('admin.VoteEntryTable.userVoteEntries.voteTitle', { defaultValue: 'VoteTitle' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'debateTitle',
      headerName: t('admin.VoteEntryTable.userVoteEntries.debateTitle', { defaultValue: 'DebateTitle' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'issueTitle',
      headerName: t('admin.VoteEntryTable.userVoteEntries.issueTitle', { defaultValue: 'IssueTitle' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'voteStatus',
      headerName: t('admin.VoteEntryTable.userVoteEntries.voteStatus', { defaultValue: 'VoteStatus' }) as string,
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

  const userVoteEntriesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableDefaultUserVoteEntriesVoteEntryTableUserNameFilter',
      attributeName: 'userName',
      label: t('admin.VoteEntryTable.userVoteEntries.userName', { defaultValue: 'UserName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableDefaultUserVoteEntriesVoteEntryTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.VoteEntryTable.userVoteEntries.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableDefaultUserVoteEntriesVoteEntryTableVoteTitleFilter',
      attributeName: 'voteTitle',
      label: t('admin.VoteEntryTable.userVoteEntries.voteTitle', { defaultValue: 'VoteTitle' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableDefaultUserVoteEntriesVoteEntryTableDebateTitleFilter',
      attributeName: 'debateTitle',
      label: t('admin.VoteEntryTable.userVoteEntries.debateTitle', { defaultValue: 'DebateTitle' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableDefaultUserVoteEntriesVoteEntryTableIssueTitleFilter',
      attributeName: 'issueTitle',
      label: t('admin.VoteEntryTable.userVoteEntries.issueTitle', { defaultValue: 'IssueTitle' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableDefaultUserVoteEntriesVoteEntryTableVoteStatusFilter',
      attributeName: 'voteStatus',
      label: t('admin.VoteEntryTable.userVoteEntries.voteStatus', { defaultValue: 'VoteStatus' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },
  ];

  const userVoteEntriesInitialQueryCustomizer: AdminVoteEntryQueryCustomizer = {
    _mask: '{userName,created,voteTitle,debateTitle,issueTitle,voteStatus}',
    _orderBy: userVoteEntriesSortModel.length
      ? [
          {
            attribute: userVoteEntriesSortModel[0].field,
            descending: userVoteEntriesSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageFilterUserVoteEntriesAction = usePageFilterUserVoteEntriesAction(
    setFilters,
    setPage,
    setQueryCustomizer,
    openFilterDialog,
    10,
  );
  const pageRefreshUserVoteEntriesAction = usePageRefreshUserVoteEntriesAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableDefaultUserVoteEntriesVoteEntryTableUserNameFilter',
      attributeName: 'userName',
      label: t('admin.VoteEntryTable.userVoteEntries.userName', { defaultValue: 'UserName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableDefaultUserVoteEntriesVoteEntryTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.VoteEntryTable.userVoteEntries.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableDefaultUserVoteEntriesVoteEntryTableVoteTitleFilter',
      attributeName: 'voteTitle',
      label: t('admin.VoteEntryTable.userVoteEntries.voteTitle', { defaultValue: 'VoteTitle' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableDefaultUserVoteEntriesVoteEntryTableDebateTitleFilter',
      attributeName: 'debateTitle',
      label: t('admin.VoteEntryTable.userVoteEntries.debateTitle', { defaultValue: 'DebateTitle' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableDefaultUserVoteEntriesVoteEntryTableIssueTitleFilter',
      attributeName: 'issueTitle',
      label: t('admin.VoteEntryTable.userVoteEntries.issueTitle', { defaultValue: 'IssueTitle' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableDefaultUserVoteEntriesVoteEntryTableVoteStatusFilter',
      attributeName: 'voteStatus',
      label: t('admin.VoteEntryTable.userVoteEntries.voteStatus', { defaultValue: 'VoteStatus' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },
  ];

  const rowActions: TableRowAction<AdminVoteEntryStored>[] = [];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);

    setQueryCustomizer((prevQueryCustomizer: AdminVoteEntryQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of userVoteEntriesColumns.map((c) => c.field)) {
        delete (prevQueryCustomizer as any)[name];
      }
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: 10 + 1,
        },
        ...mapAllFiltersToQueryCustomizerProperties(newFilters),
      };
    });
  };

  function handleSortModelChange(newModel: GridSortModel) {
    setPage(0);
    setSortModel(newModel);

    const _orderBy = newModel
      .filter((m) => m.sort)
      .map((m) => ({
        attribute: m.field,
        descending: m.sort === 'desc',
      }));

    setQueryCustomizer((prevQueryCustomizer) => {
      const strippedQueryCustomizer: AdminVoteEntryQueryCustomizer = {
        ...prevQueryCustomizer,
      };
      if (!!strippedQueryCustomizer._seek) {
        delete strippedQueryCustomizer._seek.lastItem;
      }
      return {
        ...strippedQueryCustomizer,
        _orderBy,
      };
    });
  }

  async function handlePageChange(isNext: boolean) {
    setQueryCustomizer((prevQueryCustomizer) => {
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: isNext ? 10 + 1 : 10,
          reverse: !isNext,
          lastItem: isNext ? lastItem : firstItem,
        },
      };
    });

    setIsNextButtonEnabled(!isNext);
  }

  async function fetchData() {
    setIsOwnerLoading(true);

    try {
      const res = await adminDashboardServiceForClassImpl.getUserVoteEntries(
        ownerData,
        processQueryCustomizer(queryCustomizer),
      );

      if (res.length > 10) {
        setIsNextButtonEnabled(true);
        res.pop();
      } else if (queryCustomizer._seek?.limit === 10 + 1) {
        setIsNextButtonEnabled(false);
      }

      setData(res);
      setFirstItem(res[0]);
      setLastItem(res[res.length - 1]);
      setRowCount(res.length || 0);
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsOwnerLoading(false);
    }
  }

  useImperativeHandle(ref, () => ({
    fetchData,
  }));

  useEffect(() => {
    fetchData();
  }, [queryCustomizer]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
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
          ...userVoteEntriesColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntries',
            rowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterActionedemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableEdemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesPageFilter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  pageFilterUserVoteEntriesAction(
                    'FilterActionedemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesTableEdemokraciaAdminAdminEdemokraciaAdminDashboardUserVoteEntriesPageFilter-filter',
                    filterOptions,
                    filters,
                  );
                }}
                disabled={isOwnerLoading}
              >
                {t('judo.pages.table.set-filters', { defaultValue: 'Set filters' }) +
                  (filters.length !== 0 ? ' (' + filters.length + ')' : '')}
              </Button>
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
          Pagination: () => (
            <CustomTablePagination
              pageChange={handlePageChange}
              isNextButtonEnabled={isNextButtonEnabled}
              page={page}
              setPage={setPage}
              rowPerPage={10}
            />
          ),
        }}
      />
    </>
  );
});
