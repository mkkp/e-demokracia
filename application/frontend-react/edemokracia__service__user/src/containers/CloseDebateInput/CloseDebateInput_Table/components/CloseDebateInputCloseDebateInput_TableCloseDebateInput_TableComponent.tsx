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
import type { CloseDebateInput, CloseDebateInputQueryCustomizer, CloseDebateInputStored } from '~/services/data-api';
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

export interface CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponentActionDefinitions {
  closeDebateInputCloseDebateInput_TableAddOpenSelector?: () => Promise<void>;
  closeDebateInputCloseDebateInput_TableBulkDelete?: (
    selectedRows: CloseDebateInputStored[],
  ) => Promise<DialogResult<CloseDebateInputStored[]>>;
  closeDebateInputCloseDebateInput_TableBulkRemove?: (
    selectedRows: CloseDebateInputStored[],
  ) => Promise<DialogResult<CloseDebateInputStored[]>>;
  closeDebateInputCloseDebateInput_TableClear?: () => Promise<void>;
  closeDebateInputCloseDebateInput_TableCreateOpen?: () => Promise<void>;
  closeDebateInputCloseDebateInput_TableTableFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  closeDebateInputCloseDebateInput_TableTableRefresh?: (
    queryCustomizer: CloseDebateInputQueryCustomizer,
  ) => Promise<CloseDebateInputStored[]>;
  closeDebateInputCloseDebateInput_TableDelete?: (row: CloseDebateInputStored, silentMode?: boolean) => Promise<void>;
  closeDebateInputCloseDebateInput_TableRemove?: (row: CloseDebateInputStored, silentMode?: boolean) => Promise<void>;
  closeDebateInputCloseDebateInput_TableView?: (row: CloseDebateInputStored) => Promise<void>;
}

export interface CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponentProps {
  uniqueId: string;
  actions: CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
}

// XMIID: User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableTable
// Name: CloseDebateInput_Table
export function CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponent(
  props: CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError } = props;
  const filterModelKey = `User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<CloseDebateInput>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<CloseDebateInputQueryCustomizer>({
    _mask: '{voteType}',
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
  const [lastItem, setLastItem] = useState<CloseDebateInputStored>();
  const [firstItem, setFirstItem] = useState<CloseDebateInputStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<CloseDebateInputStored[]>([]);

  const columns: GridColDef<CloseDebateInputStored>[] = [
    {
      ...baseColumnConfig,
      field: 'voteType',
      headerName: t('CloseDebateInput.CloseDebateInput.Table.voteType', { defaultValue: 'VoteType' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'singleSelect',
      filterable: false && false,
      sortable: false,
      valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
        if (value !== undefined && value !== null) {
          return t(`enumerations.VoteTypeOnCloseDebate.${value}`, { defaultValue: value });
        }
      },
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
  ];

  const rowActions: TableRowAction<CloseDebateInputStored>[] = [
    {
      id: 'User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableRowRemoveButton',
      label: t('CloseDebateInput.CloseDebateInput.Table.CloseDebateInput::CloseDebateInput_Table::Remove', {
        defaultValue: 'Remove',
      }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: CloseDebateInputStored) => isLoading,
      action: actions.closeDebateInputCloseDebateInput_TableRemove
        ? async (rowData) => {
            await actions.closeDebateInputCloseDebateInput_TableRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableRowDeleteButton',
      label: t('CloseDebateInput.CloseDebateInput.Table.CloseDebateInput::CloseDebateInput_Table::Delete', {
        defaultValue: 'Delete',
      }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: CloseDebateInputStored) => !row.__deleteable || isLoading,
      action: actions.closeDebateInputCloseDebateInput_TableDelete
        ? async (rowData) => {
            await actions.closeDebateInputCloseDebateInput_TableDelete!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: CloseDebateInputQueryCustomizer) => {
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
      const strippedQueryCustomizer: CloseDebateInputQueryCustomizer = {
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
        const res = await actions.closeDebateInputCloseDebateInput_TableTableRefresh!(
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
          ...columnsActionCalculator('User/(esm/_NGvTUG6JEe2wNaja8kBvcQ)/ClassType', rowActions, t, {
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
          actions.closeDebateInputCloseDebateInput_TableView
            ? async (params: GridRowParams<CloseDebateInputStored>) =>
                await actions.closeDebateInputCloseDebateInput_TableView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.closeDebateInputCloseDebateInput_TableTableFilter && true ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.closeDebateInputCloseDebateInput_TableTableFilter!(
                      'User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableTableFilterButton',
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
                  {t(
                    'CloseDebateInput.CloseDebateInput.Table.CloseDebateInput::CloseDebateInput_Table::Table::Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.closeDebateInputCloseDebateInput_TableTableRefresh && true ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.closeDebateInputCloseDebateInput_TableTableRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'CloseDebateInput.CloseDebateInput.Table.CloseDebateInput::CloseDebateInput_Table::Table::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.closeDebateInputCloseDebateInput_TableCreateOpen && true ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.closeDebateInputCloseDebateInput_TableCreateOpen!();
                  }}
                  disabled={isLoading}
                >
                  {t('CloseDebateInput.CloseDebateInput.Table.CloseDebateInput::CloseDebateInput_Table::Create', {
                    defaultValue: 'Create',
                  })}
                </Button>
              ) : null}
              {actions.closeDebateInputCloseDebateInput_TableAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.closeDebateInputCloseDebateInput_TableAddOpenSelector!();
                  }}
                  disabled={isLoading}
                >
                  {t('CloseDebateInput.CloseDebateInput.Table.CloseDebateInput::CloseDebateInput_Table::Add', {
                    defaultValue: 'Add',
                  })}
                </Button>
              ) : null}
              {actions.closeDebateInputCloseDebateInput_TableClear && data.length ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.closeDebateInputCloseDebateInput_TableClear!();
                  }}
                  disabled={isLoading}
                >
                  {t('CloseDebateInput.CloseDebateInput.Table.CloseDebateInput::CloseDebateInput_Table::Clear', {
                    defaultValue: 'Clear',
                  })}
                </Button>
              ) : null}
              {actions.closeDebateInputCloseDebateInput_TableBulkRemove && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.closeDebateInputCloseDebateInput_TableBulkRemove!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('CloseDebateInput.CloseDebateInput.Table.CloseDebateInput::CloseDebateInput_Table::BulkRemove', {
                    defaultValue: 'Remove',
                  })}
                </Button>
              ) : null}
              {actions.closeDebateInputCloseDebateInput_TableBulkDelete && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.closeDebateInputCloseDebateInput_TableBulkDelete!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('CloseDebateInput.CloseDebateInput.Table.CloseDebateInput::CloseDebateInput_Table::BulkDelete', {
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
