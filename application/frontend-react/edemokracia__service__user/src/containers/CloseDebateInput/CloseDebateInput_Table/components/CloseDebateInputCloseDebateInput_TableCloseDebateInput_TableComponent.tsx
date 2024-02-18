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
import { GridLogicOperator, GridToolbarContainer, useGridApiRef } from '@mui/x-data-grid';
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
import type { Dispatch, ElementType, MouseEvent, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomTablePagination, MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import { ContextMenu, StripedDataGrid, columnsActionCalculator, singleSelectColumnOperators } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, basePageSizeOptions, baseTableConfig, filterDebounceMs } from '~/config';
import { useDataStore } from '~/hooks';
import type { CloseDebateInput, CloseDebateInputQueryCustomizer, CloseDebateInputStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  useErrorHandler,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, TableRowAction } from '~/utilities';

export interface CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponentActionDefinitions {
  openAddSelectorAction?: () => Promise<void>;
  bulkDeleteAction?: (selectedRows: CloseDebateInputStored[]) => Promise<DialogResult<CloseDebateInputStored[]>>;
  bulkRemoveAction?: (selectedRows: CloseDebateInputStored[]) => Promise<DialogResult<CloseDebateInputStored[]>>;
  clearAction?: () => Promise<void>;
  openCreateFormAction?: () => Promise<void>;
  exportAction?: (queryCustomizer: CloseDebateInputQueryCustomizer) => Promise<void>;
  openSetSelectorAction?: () => Promise<void>;
  filterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  refreshAction?: (
    queryCustomizer: CloseDebateInputQueryCustomizer,
  ) => Promise<JudoRestResponse<CloseDebateInputStored[]>>;
  getMask?: () => string;
  deleteAction?: (row: CloseDebateInputStored, silentMode?: boolean) => Promise<void>;
  removeAction?: (row: CloseDebateInputStored, silentMode?: boolean) => Promise<void>;
  openPageAction?: (row: CloseDebateInputStored, isDraft?: boolean) => Promise<void>;
  AdditionalToolbarButtons?: (
    data: CloseDebateInput[],
    isLoading: boolean,
    selectedRows: CloseDebateInputStored[],
    clearSelections: () => void,
  ) => Record<string, ElementType>;
}

export interface CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponentProps {
  uniqueId: string;
  actions: CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
  validationError?: string;
}

// XMIID: User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableTable
// Name: CloseDebateInput_Table
export function CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponent(
  props: CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponentProps,
) {
  const { uniqueId, actions, refreshCounter, isOwnerLoading, isDraft, validationError } = props;
  const apiRef = useGridApiRef();
  const filterModelKey = `User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableTable-${uniqueId}-filters`;
  const rowsPerPageKey = `User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableTable-${uniqueId}-rowsPerPage`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<CloseDebateInput>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [rowsPerPage, setRowsPerPage] = useState<number>(getItemParsedWithDefault(rowsPerPageKey, 10));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: rowsPerPage,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<CloseDebateInputQueryCustomizer>({
    _mask: '{voteType}',
    _seek: {
      limit: rowsPerPage + 1,
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

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const selectedRows = useRef<CloseDebateInputStored[]>([]);

  const voteTypeColumn: GridColDef<CloseDebateInputStored> = {
    ...baseColumnConfig,
    field: 'voteType',
    headerName: t('CloseDebateInput.CloseDebateInput_Table.voteType', { defaultValue: 'VoteType' }) as string,
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
    description: t('judo.pages.table.column.not-sortable', { defaultValue: 'This column is not sortable.' }) as string,
  };

  const columns = useMemo<GridColDef<CloseDebateInputStored>[]>(() => [voteTypeColumn], []);

  const rowActions: TableRowAction<CloseDebateInputStored>[] = useMemo(
    () => [
      {
        id: 'User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableRowRemoveButton',
        label: t('judo.action.remove', { defaultValue: 'Remove' }) as string,
        icon: <MdiIcon path="link_off" />,
        isCRUD: true,
        disabled: (row: CloseDebateInputStored) => getSelectedRows().length > 0 || isLoading,
        action: actions.removeAction
          ? async (rowData) => {
              await actions.removeAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableRowDeleteButton',
        label: t('judo.action.delete', { defaultValue: 'Delete' }) as string,
        icon: <MdiIcon path="delete_forever" />,
        isCRUD: true,
        disabled: (row: CloseDebateInputStored) => getSelectedRows().length > 0 || !row.__deleteable || isLoading,
        action: actions.deleteAction
          ? async (rowData) => {
              await actions.deleteAction!(rowData);
            }
          : undefined,
      },
    ],
    [actions, isLoading],
  );

  const effectiveTableColumns = useMemo(() => {
    const cols = [
      ...columns,
      ...columnsActionCalculator('User/(esm/_NGvTUG6JEe2wNaja8kBvcQ)/ClassType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ];
    return cols;
  }, [columns, rowActions]);

  const getRowIdentifier: (row: Pick<CloseDebateInputStored, '__identifier'>) => string = (row) => row.__identifier!;

  const getSelectedRows: () => CloseDebateInputStored[] = () => {
    return selectedRows.current;
  };

  const clearSelections = () => {
    handleOnSelection([]);
  };

  const additionalToolbarActions: Record<string, ElementType> = actions?.AdditionalToolbarButtons
    ? actions.AdditionalToolbarButtons(data, isLoading, getSelectedRows(), clearSelections)
    : {};
  const AdditionalToolbarActions = () => {
    return (
      <>
        {Object.keys(additionalToolbarActions).map((key) => {
          const AdditionalButton = additionalToolbarActions[key];
          return <AdditionalButton key={key} />;
        })}
      </>
    );
  };

  const pageSizeOptions = useMemo(() => {
    const opts: Set<number> = new Set([rowsPerPage, ...basePageSizeOptions]);
    return Array.from(opts.values()).sort((a, b) => a - b);
  }, [rowsPerPage]);

  const setPageSize = useCallback((newValue: number) => {
    setRowsPerPage(newValue);
    setItemStringified(rowsPerPageKey, newValue);
    setPage(0);

    setQueryCustomizer((prevQueryCustomizer: CloseDebateInputQueryCustomizer) => {
      // we need to reset _seek so that previous configuration is erased
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: newValue + 1,
        },
      };
    });
  }, []);

  const filterOptions = useMemo<FilterOption[]>(() => [], []);

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
          limit: rowsPerPage + 1,
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
      // we need to reset _seek so that previous configuration is erased
      return {
        ...strippedQueryCustomizer,
        _orderBy,
        _seek: {
          limit: rowsPerPage + 1,
        },
      };
    });
  }

  async function handlePageChange(isNext: boolean) {
    setQueryCustomizer((prevQueryCustomizer) => {
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: isNext ? rowsPerPage + 1 : rowsPerPage,
          reverse: !isNext,
          lastItem: isNext ? lastItem : firstItem,
        },
      };
    });

    setIsNextButtonEnabled(!isNext);
  }

  const handleOnSelection = (newSelectionModel: GridRowSelectionModel) => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, newSelectionModel);
    setSelectionModel(selectedRows.current.map(getRowIdentifier));
  };

  async function fetchData() {
    if (!isLoading) {
      setIsInternalLoading(true);

      try {
        const processedQueryCustomizer = {
          ...processQueryCustomizer(queryCustomizer),
          _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
        };
        const { data: res, headers } = await actions.refreshAction!(processedQueryCustomizer);

        if (res.length > rowsPerPage) {
          setIsNextButtonEnabled(true);
          res.pop();
        } else if (queryCustomizer._seek?.limit === rowsPerPage + 1) {
          setIsNextButtonEnabled(false);
        }

        setData(res);
        setFirstItem(res[0]);
        setLastItem(res[res.length - 1]);
        setRowCount(res.length || 0);
      } catch (error) {
        handleError(error);
      } finally {
        setIsInternalLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchData();
    handleOnSelection(selectionModel);
  }, [queryCustomizer, refreshCounter]);

  return (
    <div id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableTable" data-table-name="CloseDebateInput_Table">
      <StripedDataGrid
        apiRef={apiRef}
        {...baseTableConfig}
        pageSizeOptions={pageSizeOptions}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
        }}
        slotProps={{
          filterPanel: {
            logicOperators: [GridLogicOperator.And],
          },
        }}
        getRowId={getRowIdentifier}
        loading={isLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={effectiveTableColumns}
        disableRowSelectionOnClick
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={handleOnSelection}
        keepNonExistentRowsSelected
        onRowClick={
          actions.openPageAction
            ? async (params: GridRowParams<CloseDebateInputStored>) => await actions.openPageAction!(params.row, false)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
        filterDebounceMs={filterDebounceMs}
        rowCount={rowsPerPage}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.filterAction && true ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.filterAction!(
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
                  {t('judo.action.filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.refreshAction && true ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                    };
                    await actions.refreshAction!(processedQueryCustomizer);
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.exportAction && true ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableExportButton"
                  startIcon={<MdiIcon path="file-export-outline" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                      _seek: undefined,
                    };
                    await actions.exportAction!(processedQueryCustomizer);
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.export', { defaultValue: 'Export' })}
                </Button>
              ) : null}
              {actions.openCreateFormAction && true ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                    };
                    await actions.openCreateFormAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.open-create-form', { defaultValue: 'Create' })}
                </Button>
              ) : null}
              {actions.openAddSelectorAction && true ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableAddSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                    };
                    await actions.openAddSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.open-add-selector', { defaultValue: 'Add' })}
                </Button>
              ) : null}
              {actions.openSetSelectorAction && true ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableSetSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                    };
                    await actions.openSetSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.open-set-selector', { defaultValue: 'Set' })}
                </Button>
              ) : null}
              {actions.clearAction && data.length ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                    };
                    await actions.clearAction!();
                    handleOnSelection([]);
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.clear', { defaultValue: 'Clear' })}
                </Button>
              ) : null}
              {actions.bulkRemoveAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                    };
                    const { result: bulkResult } = await actions.bulkRemoveAction!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      handleOnSelection([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.bulk-remove', { defaultValue: 'Remove' })}
                </Button>
              ) : null}
              {actions.bulkDeleteAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                    };
                    const { result: bulkResult } = await actions.bulkDeleteAction!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      handleOnSelection([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('judo.action.bulk-delete', { defaultValue: 'Delete' })}
                </Button>
              ) : null}
              {<AdditionalToolbarActions />}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
          Pagination: () => (
            <CustomTablePagination
              pageSizeOptions={pageSizeOptions}
              setPageSize={setPageSize}
              pageChange={handlePageChange}
              isNextButtonEnabled={isNextButtonEnabled}
              page={page}
              setPage={setPage}
              rowPerPage={rowsPerPage}
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
