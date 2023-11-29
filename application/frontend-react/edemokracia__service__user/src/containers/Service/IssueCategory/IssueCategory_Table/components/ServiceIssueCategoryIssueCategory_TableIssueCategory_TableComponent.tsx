//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/table.tsx
// Template file: actor/src/containers/components/table.tsx.hbs

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import type { JudoIdentifiable } from '@judo/data-api-common';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
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
import { columnsActionCalculator, ContextMenu, StripedDataGrid } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import type {
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
} from '~/services/data-api';
import {
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult, TableRowAction } from '~/utilities';
import { useDataStore } from '~/hooks';
import { OBJECTCLASS } from '@pandino/pandino-api';

export interface ServiceIssueCategoryIssueCategory_TableIssueCategory_TableComponentActionDefinitions {
  openAddSelectorAction?: () => Promise<void>;
  bulkDeleteAction?: (
    selectedRows: ServiceIssueCategoryStored[],
  ) => Promise<DialogResult<ServiceIssueCategoryStored[]>>;
  bulkRemoveAction?: (
    selectedRows: ServiceIssueCategoryStored[],
  ) => Promise<DialogResult<ServiceIssueCategoryStored[]>>;
  clearAction?: () => Promise<void>;
  openFormAction?: () => Promise<void>;
  openSetSelectorAction?: () => Promise<void>;
  filterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  refreshAction?: (queryCustomizer: ServiceIssueCategoryQueryCustomizer) => Promise<ServiceIssueCategoryStored[]>;
  deleteAction?: (row: ServiceIssueCategoryStored, silentMode?: boolean) => Promise<void>;
  removeAction?: (row: ServiceIssueCategoryStored, silentMode?: boolean) => Promise<void>;
  openPageAction?: (row: ServiceIssueCategoryStored) => Promise<void>;
}

export interface ServiceIssueCategoryIssueCategory_TableIssueCategory_TableComponentProps {
  uniqueId: string;
  actions: ServiceIssueCategoryIssueCategory_TableIssueCategory_TableComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
}

// XMIID: User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableTable
// Name: IssueCategory_Table
export function ServiceIssueCategoryIssueCategory_TableIssueCategory_TableComponent(
  props: ServiceIssueCategoryIssueCategory_TableIssueCategory_TableComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError } = props;
  const filterModelKey = `User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceIssueCategoryStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'title', sort: 'asc' }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceIssueCategoryQueryCustomizer>({
    _mask: '{title,description}',
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
  const [lastItem, setLastItem] = useState<ServiceIssueCategoryStored>();
  const [firstItem, setFirstItem] = useState<ServiceIssueCategoryStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceIssueCategoryStored[]>([]);

  const columns = useMemo<GridColDef<ServiceIssueCategoryStored>[]>(
    () => [
      {
        ...baseColumnConfig,
        field: 'title',
        headerName: t('service.IssueCategory.IssueCategory_Table.title', { defaultValue: 'Title' }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'description',
        headerName: t('service.IssueCategory.IssueCategory_Table.description', {
          defaultValue: 'Description',
        }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
    ],
    [],
  );

  const rowActions: TableRowAction<ServiceIssueCategoryStored>[] = [
    {
      id: 'User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableRowRemoveButton',
      label: t('service.IssueCategory.IssueCategory_Table.Remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceIssueCategoryStored) => isLoading,
      action: actions.removeAction
        ? async (rowData) => {
            await actions.removeAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableRowDeleteButton',
      label: t('service.IssueCategory.IssueCategory_Table.Delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceIssueCategoryStored) => !row.__deleteable || isLoading,
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
        id: '_VrgJ4I7EEe6rlbj78nBB0Q',
        attributeName: 'title',
        label: t('service.IssueCategory.IssueCategory_Table.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: '_VrjNMI7EEe6rlbj78nBB0Q',
        attributeName: 'description',
        label: t('service.IssueCategory.IssueCategory_Table.description', { defaultValue: 'Description' }) as string,
        filterType: FilterType.string,
      },
    ],
    [],
  );

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceIssueCategoryQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceIssueCategoryQueryCustomizer = {
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
    <div id="User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableTable" data-table-name="IssueCategory_Table">
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
          ...columnsActionCalculator('User/(esm/_qI4CsGksEe25ONJ3V89cVA)/ClassType', rowActions, t, {
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
            ? async (params: GridRowParams<ServiceIssueCategoryStored>) => await actions.openPageAction!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.filterAction && true ? (
                <Button
                  id="User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.filterAction!(
                      'User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableTableFilterButton',
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
                  {t('service.IssueCategory.IssueCategory_Table.Table.Filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.refreshAction && true ? (
                <Button
                  id="User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.refreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.IssueCategory.IssueCategory_Table.Table.Refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.openFormAction && true ? (
                <Button
                  id="User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.openFormAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.IssueCategory.IssueCategory_Table.Create', { defaultValue: 'Create' })}
                </Button>
              ) : null}
              {actions.openAddSelectorAction && true ? (
                <Button
                  id="User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.openAddSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.IssueCategory.IssueCategory_Table.Add', { defaultValue: 'Add' })}
                </Button>
              ) : null}
              {actions.openSetSelectorAction && true ? (
                <Button
                  id="User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.openSetSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.IssueCategory.IssueCategory_Table.Set', { defaultValue: 'Set' })}
                </Button>
              ) : null}
              {actions.clearAction && data.length ? (
                <Button
                  id="User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.clearAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.IssueCategory.IssueCategory_Table.Clear', { defaultValue: 'Clear' })}
                </Button>
              ) : null}
              {actions.bulkRemoveAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableBulkRemoveButton"
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
                  {t('service.IssueCategory.IssueCategory_Table.BulkRemove', { defaultValue: 'Remove' })}
                </Button>
              ) : null}
              {actions.bulkDeleteAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableBulkDeleteButton"
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
                  {t('service.IssueCategory.IssueCategory_Table.BulkDelete', { defaultValue: 'Delete' })}
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
