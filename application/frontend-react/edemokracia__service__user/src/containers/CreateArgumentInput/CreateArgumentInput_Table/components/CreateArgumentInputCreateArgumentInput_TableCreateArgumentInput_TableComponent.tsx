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
import type {
  CreateArgumentInput,
  CreateArgumentInputQueryCustomizer,
  CreateArgumentInputStored,
} from '~/services/data-api';
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

export interface CreateArgumentInputCreateArgumentInput_TableCreateArgumentInput_TableComponentActionDefinitions {
  createArgumentInputCreateArgumentInput_TableAddOpenSelector?: () => Promise<void>;
  createArgumentInputCreateArgumentInput_TableBulkDelete?: (
    selectedRows: CreateArgumentInputStored[],
  ) => Promise<DialogResult<CreateArgumentInputStored[]>>;
  createArgumentInputCreateArgumentInput_TableBulkRemove?: (
    selectedRows: CreateArgumentInputStored[],
  ) => Promise<DialogResult<CreateArgumentInputStored[]>>;
  createArgumentInputCreateArgumentInput_TableClear?: () => Promise<void>;
  createArgumentInputCreateArgumentInput_TableCreateOpen?: () => Promise<void>;
  createArgumentInputCreateArgumentInput_TableTableFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  createArgumentInputCreateArgumentInput_TableTableRefresh?: (
    queryCustomizer: CreateArgumentInputQueryCustomizer,
  ) => Promise<CreateArgumentInputStored[]>;
  createArgumentInputCreateArgumentInput_TableDelete?: (
    row: CreateArgumentInputStored,
    silentMode?: boolean,
  ) => Promise<void>;
  createArgumentInputCreateArgumentInput_TableRemove?: (
    row: CreateArgumentInputStored,
    silentMode?: boolean,
  ) => Promise<void>;
  createArgumentInputCreateArgumentInput_TableView?: (row: CreateArgumentInputStored) => Promise<void>;
}

export interface CreateArgumentInputCreateArgumentInput_TableCreateArgumentInput_TableComponentProps {
  uniqueId: string;
  actions: CreateArgumentInputCreateArgumentInput_TableCreateArgumentInput_TableComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
}

// XMIID: User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableTable
// Name: CreateArgumentInput_Table
export function CreateArgumentInputCreateArgumentInput_TableCreateArgumentInput_TableComponent(
  props: CreateArgumentInputCreateArgumentInput_TableCreateArgumentInput_TableComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError } = props;
  const filterModelKey = `User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<CreateArgumentInput>[]>([]);
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
  const [queryCustomizer, setQueryCustomizer] = useState<CreateArgumentInputQueryCustomizer>({
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
  const [lastItem, setLastItem] = useState<CreateArgumentInputStored>();
  const [firstItem, setFirstItem] = useState<CreateArgumentInputStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<CreateArgumentInputStored[]>([]);

  const columns: GridColDef<CreateArgumentInputStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('CreateArgumentInput.CreateArgumentInput.Table.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && false,
      sortable: false,
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('CreateArgumentInput.CreateArgumentInput.Table.description', {
        defaultValue: 'Description',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && false,
      sortable: false,
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
  ];

  const rowActions: TableRowAction<CreateArgumentInputStored>[] = [
    {
      id: 'User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableRowRemoveButton',
      label: t('CreateArgumentInput.CreateArgumentInput.Table.CreateArgumentInput::CreateArgumentInput_Table::Remove', {
        defaultValue: 'Remove',
      }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: CreateArgumentInputStored) => isLoading,
      action: actions.createArgumentInputCreateArgumentInput_TableRemove
        ? async (rowData) => {
            await actions.createArgumentInputCreateArgumentInput_TableRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableRowDeleteButton',
      label: t('CreateArgumentInput.CreateArgumentInput.Table.CreateArgumentInput::CreateArgumentInput_Table::Delete', {
        defaultValue: 'Delete',
      }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: CreateArgumentInputStored) => !row.__deleteable || isLoading,
      action: actions.createArgumentInputCreateArgumentInput_TableDelete
        ? async (rowData) => {
            await actions.createArgumentInputCreateArgumentInput_TableDelete!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: CreateArgumentInputQueryCustomizer) => {
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
      const strippedQueryCustomizer: CreateArgumentInputQueryCustomizer = {
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
        const res = await actions.createArgumentInputCreateArgumentInput_TableTableRefresh!(
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
          ...columnsActionCalculator('User/(esm/_GaaTIHW5Ee2LTNnGda5kaw)/ClassType', rowActions, t, {
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
          actions.createArgumentInputCreateArgumentInput_TableView
            ? async (params: GridRowParams<CreateArgumentInputStored>) =>
                await actions.createArgumentInputCreateArgumentInput_TableView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.createArgumentInputCreateArgumentInput_TableTableFilter && true ? (
                <Button
                  id="User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.createArgumentInputCreateArgumentInput_TableTableFilter!(
                      'User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableTableFilterButton',
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
                    'CreateArgumentInput.CreateArgumentInput.Table.CreateArgumentInput::CreateArgumentInput_Table::Table::Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.createArgumentInputCreateArgumentInput_TableTableRefresh && true ? (
                <Button
                  id="User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.createArgumentInputCreateArgumentInput_TableTableRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'CreateArgumentInput.CreateArgumentInput.Table.CreateArgumentInput::CreateArgumentInput_Table::Table::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.createArgumentInputCreateArgumentInput_TableCreateOpen && true ? (
                <Button
                  id="User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.createArgumentInputCreateArgumentInput_TableCreateOpen!();
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'CreateArgumentInput.CreateArgumentInput.Table.CreateArgumentInput::CreateArgumentInput_Table::Create',
                    { defaultValue: 'Create' },
                  )}
                </Button>
              ) : null}
              {actions.createArgumentInputCreateArgumentInput_TableAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.createArgumentInputCreateArgumentInput_TableAddOpenSelector!();
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'CreateArgumentInput.CreateArgumentInput.Table.CreateArgumentInput::CreateArgumentInput_Table::Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.createArgumentInputCreateArgumentInput_TableClear && data.length ? (
                <Button
                  id="User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.createArgumentInputCreateArgumentInput_TableClear!();
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'CreateArgumentInput.CreateArgumentInput.Table.CreateArgumentInput::CreateArgumentInput_Table::Clear',
                    { defaultValue: 'Clear' },
                  )}
                </Button>
              ) : null}
              {actions.createArgumentInputCreateArgumentInput_TableBulkRemove && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.createArgumentInputCreateArgumentInput_TableBulkRemove!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'CreateArgumentInput.CreateArgumentInput.Table.CreateArgumentInput::CreateArgumentInput_Table::BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.createArgumentInputCreateArgumentInput_TableBulkDelete && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.createArgumentInputCreateArgumentInput_TableBulkDelete!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'CreateArgumentInput.CreateArgumentInput.Table.CreateArgumentInput::CreateArgumentInput_Table::BulkDelete',
                    { defaultValue: 'Delete' },
                  )}
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
