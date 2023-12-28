//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/table.tsx
// Template file: actor/src/containers/components/table.tsx.hbs

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { GridLogicOperator, GridToolbarContainer } from '@mui/x-data-grid';
import type {
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridRowClassNameParams,
  GridRowId,
  GridRowModel,
  GridRowParams,
  GridRowSelectionModel,
  GridSortItem,
  GridSortModel,
  GridValidRowModel,
  GridValueFormatterParams,
} from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomTablePagination, MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import {
  ContextMenu,
  StripedDataGrid,
  columnsActionCalculator,
  dateTimeColumnOperators,
  singleSelectColumnOperators,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type { ServiceVoteEntry, ServiceVoteEntryQueryCustomizer, ServiceVoteEntryStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  serviceDateToUiDate,
  useErrorHandler,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, TableRowAction } from '~/utilities';

export interface ServiceVoteEntryVoteEntry_TableVoteEntry_TableComponentActionDefinitions {
  openAddSelectorAction?: () => Promise<void>;
  bulkDeleteAction?: (selectedRows: ServiceVoteEntryStored[]) => Promise<DialogResult<ServiceVoteEntryStored[]>>;
  bulkRemoveAction?: (selectedRows: ServiceVoteEntryStored[]) => Promise<DialogResult<ServiceVoteEntryStored[]>>;
  clearAction?: () => Promise<void>;
  openSetSelectorAction?: () => Promise<void>;
  filterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  refreshAction?: (queryCustomizer: ServiceVoteEntryQueryCustomizer) => Promise<ServiceVoteEntryStored[]>;
  deleteAction?: (row: ServiceVoteEntryStored, silentMode?: boolean) => Promise<void>;
  removeAction?: (row: ServiceVoteEntryStored, silentMode?: boolean) => Promise<void>;
  openPageAction?: (row: ServiceVoteEntryStored) => Promise<void>;
}

export interface ServiceVoteEntryVoteEntry_TableVoteEntry_TableComponentProps {
  uniqueId: string;
  actions: ServiceVoteEntryVoteEntry_TableVoteEntry_TableComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
}

// XMIID: User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableTable
// Name: VoteEntry_Table
export function ServiceVoteEntryVoteEntry_TableVoteEntry_TableComponent(
  props: ServiceVoteEntryVoteEntry_TableVoteEntry_TableComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError } = props;
  const filterModelKey = `User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceVoteEntryStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'userName', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceVoteEntryQueryCustomizer>({
    _mask: '{userName,created,voteTitle,issueTitle,voteStatus}',
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
  const [page, setPage] = useState<number>(0);
  const [rowCount, setRowCount] = useState<number>(0);
  const [lastItem, setLastItem] = useState<ServiceVoteEntryStored>();
  const [firstItem, setFirstItem] = useState<ServiceVoteEntryStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceVoteEntryStored[]>([]);

  const userNameColumn: GridColDef<ServiceVoteEntryStored> = {
    ...baseColumnConfig,
    field: 'userName',
    headerName: t('service.VoteEntry.VoteEntry_Table.userName', { defaultValue: 'UserName' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const createdColumn: GridColDef<ServiceVoteEntryStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t('service.VoteEntry.VoteEntry_Table.created', { defaultValue: 'Created' }) as string,
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
  };
  const voteTitleColumn: GridColDef<ServiceVoteEntryStored> = {
    ...baseColumnConfig,
    field: 'voteTitle',
    headerName: t('service.VoteEntry.VoteEntry_Table.voteTitle', { defaultValue: 'VoteTitle' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const issueTitleColumn: GridColDef<ServiceVoteEntryStored> = {
    ...baseColumnConfig,
    field: 'issueTitle',
    headerName: t('service.VoteEntry.VoteEntry_Table.issueTitle', { defaultValue: 'IssueTitle' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const voteStatusColumn: GridColDef<ServiceVoteEntryStored> = {
    ...baseColumnConfig,
    field: 'voteStatus',
    headerName: t('service.VoteEntry.VoteEntry_Table.voteStatus', { defaultValue: 'VoteStatus' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    sortable: false,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.VoteStatus.${value}`, { defaultValue: value });
      }
    },
    description: t('judo.pages.table.column.not-sortable', { defaultValue: 'This column is not sortable.' }) as string,
  };

  const columns = useMemo<GridColDef<ServiceVoteEntryStored>[]>(
    () => [userNameColumn, createdColumn, voteTitleColumn, issueTitleColumn, voteStatusColumn],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceVoteEntryStored>[] = [
    {
      id: 'User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableRowRemoveButton',
      label: t('service.VoteEntry.VoteEntry_Table.Remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceVoteEntryStored) => isLoading,
      action: actions.removeAction
        ? async (rowData) => {
            await actions.removeAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableRowDeleteButton',
      label: t('service.VoteEntry.VoteEntry_Table.Delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceVoteEntryStored) => !row.__deleteable || isLoading,
      action: actions.deleteAction
        ? async (rowData) => {
            await actions.deleteAction!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_-W2L0OSGEe20cv3f2msZXg)/TableColumnFilter/(discriminator/User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableTable)',
        attributeName: 'userName',
        label: t('service.VoteEntry.VoteEntry_Table.userName', { defaultValue: 'UserName' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_C6UMcOSGEe20cv3f2msZXg)/TableColumnFilter/(discriminator/User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableTable)',
        attributeName: 'created',
        label: t('service.VoteEntry.VoteEntry_Table.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_C6VakOSGEe20cv3f2msZXg)/TableColumnFilter/(discriminator/User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableTable)',
        attributeName: 'voteTitle',
        label: t('service.VoteEntry.VoteEntry_Table.voteTitle', { defaultValue: 'VoteTitle' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_C6UzgeSGEe20cv3f2msZXg)/TableColumnFilter/(discriminator/User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableTable)',
        attributeName: 'issueTitle',
        label: t('service.VoteEntry.VoteEntry_Table.issueTitle', { defaultValue: 'IssueTitle' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_C6UzguSGEe20cv3f2msZXg)/TableColumnFilter/(discriminator/User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableTable)',
        attributeName: 'voteStatus',
        label: t('service.VoteEntry.VoteEntry_Table.voteStatus', { defaultValue: 'VoteStatus' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
      },
    ],
    [l10nLocale],
  );

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceVoteEntryQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of columns.map((c) => c.field)) {
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
      const strippedQueryCustomizer: ServiceVoteEntryQueryCustomizer = {
        ...prevQueryCustomizer,
      };
      if (!!strippedQueryCustomizer._seek) {
        delete strippedQueryCustomizer._seek.lastItem;
      }
      // we need to reset _seek so that previous configuration is erased
      return {
        ...strippedQueryCustomizer,
        _orderBy,
        _seek: {
          limit: 10 + 1,
        },
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

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  async function fetchData() {
    if (!isLoading) {
      setIsLoading(true);

      try {
        const res = await actions.refreshAction!(processQueryCustomizer(queryCustomizer));

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
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [queryCustomizer, refreshCounter]);

  return (
    <div id="User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableTable" data-table-name="VoteEntry_Table">
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[paginationModel.pageSize]}
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
        loading={isLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...columns,
          ...columnsActionCalculator('User/(esm/_zJIiwORxEe2Bgcx6em3jZg)/ClassType', rowActions, t, {
            shownActions: 2,
          }),
        ]}
        disableRowSelectionOnClick
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setSelectionModel(newRowSelectionModel);
        }}
        keepNonExistentRowsSelected
        onRowClick={
          actions.openPageAction
            ? async (params: GridRowParams<ServiceVoteEntryStored>) => await actions.openPageAction!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
        rowCount={10}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.filterAction && true ? (
                <Button
                  id="User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.filterAction!(
                      'User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableTableFilterButton',
                      filterOptions,
                      filterModel,
                      filters,
                    );
                    if (Array.isArray(filterResults.filters)) {
                      handleFiltersChange([...filterResults.filters!]);
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('service.VoteEntry.VoteEntry_Table.Table.Filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.refreshAction && true ? (
                <Button
                  id="User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.refreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.VoteEntry.VoteEntry_Table.Table.Refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.openAddSelectorAction && true ? (
                <Button
                  id="User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableAddSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.openAddSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.VoteEntry.VoteEntry_Table.Add', { defaultValue: 'Add' })}
                </Button>
              ) : null}
              {actions.openSetSelectorAction && true ? (
                <Button
                  id="User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableSetSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.openSetSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.VoteEntry.VoteEntry_Table.Set', { defaultValue: 'Set' })}
                </Button>
              ) : null}
              {actions.clearAction && data.length ? (
                <Button
                  id="User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.clearAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.VoteEntry.VoteEntry_Table.Clear', { defaultValue: 'Clear' })}
                </Button>
              ) : null}
              {actions.bulkRemoveAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.bulkRemoveAction!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('service.VoteEntry.VoteEntry_Table.BulkRemove', { defaultValue: 'Remove' })}
                </Button>
              ) : null}
              {actions.bulkDeleteAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.bulkDeleteAction!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('service.VoteEntry.VoteEntry_Table.BulkDelete', { defaultValue: 'Delete' })}
                </Button>
              ) : null}
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
      {validationError ? (
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
          <Typography>{validationError}</Typography>
        </Box>
      ) : null}
    </div>
  );
}
