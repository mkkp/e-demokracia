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
import type { ServiceDistrict, ServiceDistrictQueryCustomizer, ServiceDistrictStored } from '~/services/data-api';
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

export interface ServiceDistrictDistrict_TableDistrict_TableComponentActionDefinitions {
  serviceDistrictDistrict_TableAddOpenSelector?: () => Promise<void>;
  serviceDistrictDistrict_TableBulkDelete?: (
    selectedRows: ServiceDistrictStored[],
  ) => Promise<DialogResult<ServiceDistrictStored[]>>;
  serviceDistrictDistrict_TableBulkRemove?: (
    selectedRows: ServiceDistrictStored[],
  ) => Promise<DialogResult<ServiceDistrictStored[]>>;
  serviceDistrictDistrict_TableClear?: () => Promise<void>;
  serviceDistrictDistrict_TableCreateOpen?: () => Promise<void>;
  serviceDistrictDistrict_TableTableFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceDistrictDistrict_TableTableRefresh?: (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ) => Promise<ServiceDistrictStored[]>;
  serviceDistrictDistrict_TableDelete?: (row: ServiceDistrictStored, silentMode?: boolean) => Promise<void>;
  serviceDistrictDistrict_TableRemove?: (row: ServiceDistrictStored, silentMode?: boolean) => Promise<void>;
  serviceDistrictDistrict_TableView?: (row: ServiceDistrictStored) => Promise<void>;
}

export interface ServiceDistrictDistrict_TableDistrict_TableComponentProps {
  uniqueId: string;
  actions: ServiceDistrictDistrict_TableDistrict_TableComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
}

// XMIID: User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableTable
// Name: District_Table
export function ServiceDistrictDistrict_TableDistrict_TableComponent(
  props: ServiceDistrictDistrict_TableDistrict_TableComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError } = props;
  const filterModelKey = `User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceDistrictStored>[]>([]);
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
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceDistrictQueryCustomizer>({
    _mask: '{county,city,name}',
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
  const [lastItem, setLastItem] = useState<ServiceDistrictStored>();
  const [firstItem, setFirstItem] = useState<ServiceDistrictStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceDistrictStored[]>([]);

  const columns: GridColDef<ServiceDistrictStored>[] = [
    {
      ...baseColumnConfig,
      field: 'county',
      headerName: t('service.District.District.Table.county', { defaultValue: 'County' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'city',
      headerName: t('service.District.District.Table.city', { defaultValue: 'City' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'name',
      headerName: t('service.District.District.Table.name', { defaultValue: 'District name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const rowActions: TableRowAction<ServiceDistrictStored>[] = [
    {
      id: 'User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableRowRemoveButton',
      label: t('service.District.District.Table.service::District::District_Table::Remove', {
        defaultValue: 'Remove',
      }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceDistrictStored) => isLoading,
      action: actions.serviceDistrictDistrict_TableRemove
        ? async (rowData) => {
            await actions.serviceDistrictDistrict_TableRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableRowDeleteButton',
      label: t('service.District.District.Table.service::District::District_Table::Delete', {
        defaultValue: 'Delete',
      }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceDistrictStored) => !row.__deleteable || isLoading,
      action: actions.serviceDistrictDistrict_TableDelete
        ? async (rowData) => {
            await actions.serviceDistrictDistrict_TableDelete!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_gB_HQH2GEe6V8KKnnZfChA',
      attributeName: 'county',
      label: t('service.District.District.Table.county::Filter', { defaultValue: 'County' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_gCFN4H2GEe6V8KKnnZfChA',
      attributeName: 'city',
      label: t('service.District.District.Table.city::Filter', { defaultValue: 'City' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_gCLUgH2GEe6V8KKnnZfChA',
      attributeName: 'name',
      label: t('service.District.District.Table.name::Filter', { defaultValue: 'District name' }) as string,
      filterType: FilterType.string,
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceDistrictQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceDistrictQueryCustomizer = {
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
        const res = await actions.serviceDistrictDistrict_TableTableRefresh!(processQueryCustomizer(queryCustomizer));

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
          ...columnsActionCalculator('User/(esm/_a0UhYH2iEe2LTNnGda5kaw)/ClassType', rowActions, t, {
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
          actions.serviceDistrictDistrict_TableView
            ? async (params: GridRowParams<ServiceDistrictStored>) =>
                await actions.serviceDistrictDistrict_TableView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceDistrictDistrict_TableTableFilter && true ? (
                <Button
                  id="User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.serviceDistrictDistrict_TableTableFilter!(
                      'User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableTableFilterButton',
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
                  {t('service.District.District.Table.service::District::District_Table::Table::Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceDistrictDistrict_TableTableRefresh && true ? (
                <Button
                  id="User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceDistrictDistrict_TableTableRefresh!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.District.District.Table.service::District::District_Table::Table::Refresh', {
                    defaultValue: 'Refresh',
                  })}
                </Button>
              ) : null}
              {actions.serviceDistrictDistrict_TableCreateOpen && true ? (
                <Button
                  id="User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceDistrictDistrict_TableCreateOpen!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.District.District.Table.service::District::District_Table::Create', {
                    defaultValue: 'Create',
                  })}
                </Button>
              ) : null}
              {actions.serviceDistrictDistrict_TableAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceDistrictDistrict_TableAddOpenSelector!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.District.District.Table.service::District::District_Table::Add', { defaultValue: 'Add' })}
                </Button>
              ) : null}
              {actions.serviceDistrictDistrict_TableClear && data.length ? (
                <Button
                  id="User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceDistrictDistrict_TableClear!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.District.District.Table.service::District::District_Table::Clear', {
                    defaultValue: 'Clear',
                  })}
                </Button>
              ) : null}
              {actions.serviceDistrictDistrict_TableBulkRemove && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceDistrictDistrict_TableBulkRemove!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('service.District.District.Table.service::District::District_Table::BulkRemove', {
                    defaultValue: 'Remove',
                  })}
                </Button>
              ) : null}
              {actions.serviceDistrictDistrict_TableBulkDelete && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceDistrictDistrict_TableBulkDelete!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('service.District.District.Table.service::District::District_Table::BulkDelete', {
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
