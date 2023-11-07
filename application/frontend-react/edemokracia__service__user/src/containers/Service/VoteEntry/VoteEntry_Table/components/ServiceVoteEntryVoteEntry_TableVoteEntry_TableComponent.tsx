//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/table.tsx
// Template file: actor/src/containers/components/table.tsx.hbs

import { useState, useEffect, useMemo, useRef } from 'react';
import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { Box, IconButton, Button, ButtonGroup, Typography } from '@mui/material';
import { GridToolbarContainer, GridLogicOperator } from '@mui/x-data-grid';
import type {
  GridColDef,
  GridFilterModel,
  GridRowModel,
  GridRowId,
  GridRenderCellParams,
  GridRowSelectionModel,
  GridSortItem,
  GridSortModel,
  GridValueFormatterParams,
  GridRowClassNameParams,
  GridRowParams,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { baseColumnConfig, baseTableConfig } from '~/config';
import { MdiIcon, CustomTablePagination } from '~/components';
import {
  booleanColumnOperators,
  dateColumnOperators,
  dateTimeColumnOperators,
  numericColumnOperators,
  singleSelectColumnOperators,
  stringColumnOperators,
  columnsActionCalculator,
  ContextMenu,
  StripedDataGrid,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import type { ServiceVoteEntry, ServiceVoteEntryQueryCustomizer, ServiceVoteEntryStored } from '~/services/data-api';
import { useL10N } from '~/l10n/l10n-context';
import {
  getUpdatedRowsSelected,
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult, TableRowAction } from '~/utilities';
import { useDataStore } from '~/hooks';
import { OBJECTCLASS } from '@pandino/pandino-api';

export interface ServiceVoteEntryVoteEntry_TableVoteEntry_TableComponentActionDefinitions {
  serviceVoteEntryVoteEntry_TableAddOpenSelector?: () => Promise<void>;
  serviceVoteEntryVoteEntry_TableBulkDelete?: (
    selectedRows: ServiceVoteEntryStored[],
  ) => Promise<DialogResult<ServiceVoteEntryStored[]>>;
  serviceVoteEntryVoteEntry_TableBulkRemove?: (
    selectedRows: ServiceVoteEntryStored[],
  ) => Promise<DialogResult<ServiceVoteEntryStored[]>>;
  serviceVoteEntryVoteEntry_TableClear?: () => Promise<void>;
  serviceVoteEntryVoteEntry_TableCreateOpen?: () => Promise<void>;
  serviceVoteEntryVoteEntry_TableTableFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceVoteEntryVoteEntry_TableTableRefresh?: (
    queryCustomizer: ServiceVoteEntryQueryCustomizer,
  ) => Promise<ServiceVoteEntryStored[]>;
  serviceVoteEntryVoteEntry_TableDelete?: (row: ServiceVoteEntryStored, silentMode?: boolean) => Promise<void>;
  serviceVoteEntryVoteEntry_TableRemove?: (row: ServiceVoteEntryStored, silentMode?: boolean) => Promise<void>;
  serviceVoteEntryVoteEntry_TableView?: (row: ServiceVoteEntryStored) => Promise<void>;
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

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceVoteEntryStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'userName', sort: 'asc' }]);
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

  const columns: GridColDef<ServiceVoteEntryStored>[] = [
    {
      ...baseColumnConfig,
      field: 'userName',
      headerName: t('service.VoteEntry.VoteEntry.Table.userName', { defaultValue: 'UserName' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.VoteEntry.VoteEntry.Table.created', { defaultValue: 'Created' }) as string,
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
      headerName: t('service.VoteEntry.VoteEntry.Table.voteTitle', { defaultValue: 'VoteTitle' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'issueTitle',
      headerName: t('service.VoteEntry.VoteEntry.Table.issueTitle', { defaultValue: 'IssueTitle' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'voteStatus',
      headerName: t('service.VoteEntry.VoteEntry.Table.voteStatus', { defaultValue: 'VoteStatus' }) as string,
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
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
  ];

  const rowActions: TableRowAction<ServiceVoteEntryStored>[] = [
    {
      id: 'User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableRowRemoveButton',
      label: t('service.VoteEntry.VoteEntry.Table.service::VoteEntry::VoteEntry_Table::Remove', {
        defaultValue: 'Remove',
      }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceVoteEntryStored) => isLoading,
      action: actions.serviceVoteEntryVoteEntry_TableRemove
        ? async (rowData) => {
            await actions.serviceVoteEntryVoteEntry_TableRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableRowDeleteButton',
      label: t('service.VoteEntry.VoteEntry.Table.service::VoteEntry::VoteEntry_Table::Delete', {
        defaultValue: 'Delete',
      }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceVoteEntryStored) => !row.__deleteable || isLoading,
      action: actions.serviceVoteEntryVoteEntry_TableDelete
        ? async (rowData) => {
            await actions.serviceVoteEntryVoteEntry_TableDelete!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_fZwCkH2GEe6V8KKnnZfChA',
      attributeName: 'userName',
      label: t('service.VoteEntry.VoteEntry.Table.userName::Filter', { defaultValue: 'UserName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fZwpon2GEe6V8KKnnZfChA',
      attributeName: 'created',
      label: t('service.VoteEntry.VoteEntry.Table.created::Filter', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: '_fZxQsn2GEe6V8KKnnZfChA',
      attributeName: 'voteTitle',
      label: t('service.VoteEntry.VoteEntry.Table.voteTitle::Filter', { defaultValue: 'VoteTitle' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fZye0H2GEe6V8KKnnZfChA',
      attributeName: 'issueTitle',
      label: t('service.VoteEntry.VoteEntry.Table.issueTitle::Filter', { defaultValue: 'IssueTitle' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fZzF4H2GEe6V8KKnnZfChA',
      attributeName: 'voteStatus',
      label: t('service.VoteEntry.VoteEntry.Table.voteStatus::Filter', { defaultValue: 'VoteStatus' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },
  ];

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

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  async function fetchData() {
    if (!isLoading) {
      setIsLoading(true);

      try {
        const res = await actions.serviceVoteEntryVoteEntry_TableTableRefresh!(processQueryCustomizer(queryCustomizer));

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
    <>
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
          actions.serviceVoteEntryVoteEntry_TableView
            ? async (params: GridRowParams<ServiceVoteEntryStored>) =>
                await actions.serviceVoteEntryVoteEntry_TableView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceVoteEntryVoteEntry_TableTableFilter && true ? (
                <Button
                  id="User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.serviceVoteEntryVoteEntry_TableTableFilter!(
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
                  {t('service.VoteEntry.VoteEntry.Table.service::VoteEntry::VoteEntry_Table::Table::Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceVoteEntryVoteEntry_TableTableRefresh && true ? (
                <Button
                  id="User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceVoteEntryVoteEntry_TableTableRefresh!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.VoteEntry.VoteEntry.Table.service::VoteEntry::VoteEntry_Table::Table::Refresh', {
                    defaultValue: 'Refresh',
                  })}
                </Button>
              ) : null}
              {actions.serviceVoteEntryVoteEntry_TableCreateOpen && true ? (
                <Button
                  id="User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceVoteEntryVoteEntry_TableCreateOpen!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.VoteEntry.VoteEntry.Table.service::VoteEntry::VoteEntry_Table::Create', {
                    defaultValue: 'Create',
                  })}
                </Button>
              ) : null}
              {actions.serviceVoteEntryVoteEntry_TableAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceVoteEntryVoteEntry_TableAddOpenSelector!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.VoteEntry.VoteEntry.Table.service::VoteEntry::VoteEntry_Table::Add', {
                    defaultValue: 'Add',
                  })}
                </Button>
              ) : null}
              {actions.serviceVoteEntryVoteEntry_TableClear && data.length ? (
                <Button
                  id="User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceVoteEntryVoteEntry_TableClear!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.VoteEntry.VoteEntry.Table.service::VoteEntry::VoteEntry_Table::Clear', {
                    defaultValue: 'Clear',
                  })}
                </Button>
              ) : null}
              {actions.serviceVoteEntryVoteEntry_TableBulkRemove && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceVoteEntryVoteEntry_TableBulkRemove!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('service.VoteEntry.VoteEntry.Table.service::VoteEntry::VoteEntry_Table::BulkRemove', {
                    defaultValue: 'Remove',
                  })}
                </Button>
              ) : null}
              {actions.serviceVoteEntryVoteEntry_TableBulkDelete && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_zJZogORxEe2Bgcx6em3jZg)/TransferObjectTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceVoteEntryVoteEntry_TableBulkDelete!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('service.VoteEntry.VoteEntry.Table.service::VoteEntry::VoteEntry_Table::BulkDelete', {
                    defaultValue: 'Delete',
                  })}
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
      {validationError && (
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
      )}
    </>
  );
}
