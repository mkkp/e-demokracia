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
import type { ServiceCity, ServiceCityQueryCustomizer, ServiceCityStored } from '~/services/data-api';
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

export interface ServiceCityCity_TableCity_TableComponentActionDefinitions {
  serviceCityCity_TableAddOpenSelector?: () => Promise<void>;
  serviceCityCity_TableBulkDelete?: (selectedRows: ServiceCityStored[]) => Promise<DialogResult<ServiceCityStored[]>>;
  serviceCityCity_TableBulkRemove?: (selectedRows: ServiceCityStored[]) => Promise<DialogResult<ServiceCityStored[]>>;
  serviceCityCity_TableClear?: () => Promise<void>;
  serviceCityCity_TableCreateOpen?: () => Promise<void>;
  serviceCityCity_TableTableFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceCityCity_TableTableRefresh?: (queryCustomizer: ServiceCityQueryCustomizer) => Promise<ServiceCityStored[]>;
  serviceCityCity_TableDelete?: (row: ServiceCityStored, silentMode?: boolean) => Promise<void>;
  serviceCityCity_TableRemove?: (row: ServiceCityStored, silentMode?: boolean) => Promise<void>;
  serviceCityCity_TableView?: (row: ServiceCityStored) => Promise<void>;
}

export interface ServiceCityCity_TableCity_TableComponentProps {
  uniqueId: string;
  actions: ServiceCityCity_TableCity_TableComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
}

// XMIID: User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableTable
// Name: City_Table
export function ServiceCityCity_TableCity_TableComponent(props: ServiceCityCity_TableCity_TableComponentProps) {
  const { uniqueId, actions, refreshCounter, validationError } = props;
  const filterModelKey = `User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceCityStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'county', sort: 'asc' }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceCityQueryCustomizer>({
    _mask: '{county,name}',
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
  const [lastItem, setLastItem] = useState<ServiceCityStored>();
  const [firstItem, setFirstItem] = useState<ServiceCityStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceCityStored[]>([]);

  const columns: GridColDef<ServiceCityStored>[] = [
    {
      ...baseColumnConfig,
      field: 'county',
      headerName: t('service.City.City.Table.county', { defaultValue: 'County' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'name',
      headerName: t('service.City.City.Table.name', { defaultValue: 'City name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const rowActions: TableRowAction<ServiceCityStored>[] = [
    {
      id: 'User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableRowRemoveButton',
      label: t('service.City.City.Table.service::City::City_Table::Remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceCityStored) => isLoading,
      action: actions.serviceCityCity_TableRemove
        ? async (rowData) => {
            await actions.serviceCityCity_TableRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableRowDeleteButton',
      label: t('service.City.City.Table.service::City::City_Table::Delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceCityStored) => !row.__deleteable || isLoading,
      action: actions.serviceCityCity_TableDelete
        ? async (rowData) => {
            await actions.serviceCityCity_TableDelete!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_gAFCwH2GEe6V8KKnnZfChA',
      attributeName: 'county',
      label: t('service.City.City.Table.county::Filter', { defaultValue: 'County' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_gALJYH2GEe6V8KKnnZfChA',
      attributeName: 'name',
      label: t('service.City.City.Table.name::Filter', { defaultValue: 'City name' }) as string,
      filterType: FilterType.string,
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceCityQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceCityQueryCustomizer = {
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
        const res = await actions.serviceCityCity_TableTableRefresh!(processQueryCustomizer(queryCustomizer));

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
          ...columnsActionCalculator('User/(esm/_a0XksH2iEe2LTNnGda5kaw)/ClassType', rowActions, t, {
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
          actions.serviceCityCity_TableView
            ? async (params: GridRowParams<ServiceCityStored>) => await actions.serviceCityCity_TableView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceCityCity_TableTableFilter && true ? (
                <Button
                  id="User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.serviceCityCity_TableTableFilter!(
                      'User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableTableFilterButton',
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
                  {t('service.City.City.Table.service::City::City_Table::Table::Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceCityCity_TableTableRefresh && true ? (
                <Button
                  id="User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceCityCity_TableTableRefresh!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.City.City.Table.service::City::City_Table::Table::Refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.serviceCityCity_TableCreateOpen && true ? (
                <Button
                  id="User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceCityCity_TableCreateOpen!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.City.City.Table.service::City::City_Table::Create', { defaultValue: 'Create' })}
                </Button>
              ) : null}
              {actions.serviceCityCity_TableAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceCityCity_TableAddOpenSelector!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.City.City.Table.service::City::City_Table::Add', { defaultValue: 'Add' })}
                </Button>
              ) : null}
              {actions.serviceCityCity_TableClear && data.length ? (
                <Button
                  id="User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceCityCity_TableClear!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.City.City.Table.service::City::City_Table::Clear', { defaultValue: 'Clear' })}
                </Button>
              ) : null}
              {actions.serviceCityCity_TableBulkRemove && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceCityCity_TableBulkRemove!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('service.City.City.Table.service::City::City_Table::BulkRemove', { defaultValue: 'Remove' })}
                </Button>
              ) : null}
              {actions.serviceCityCity_TableBulkDelete && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceCityCity_TableBulkDelete!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('service.City.City.Table.service::City::City_Table::BulkDelete', { defaultValue: 'Delete' })}
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
