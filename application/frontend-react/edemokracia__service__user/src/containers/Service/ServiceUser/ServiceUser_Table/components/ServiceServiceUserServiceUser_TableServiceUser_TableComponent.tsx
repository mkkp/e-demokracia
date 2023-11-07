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
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
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

export interface ServiceServiceUserServiceUser_TableServiceUser_TableComponentActionDefinitions {
  serviceServiceUserServiceUser_TableAddOpenSelector?: () => Promise<void>;
  serviceServiceUserServiceUser_TableBulkDelete?: (
    selectedRows: ServiceServiceUserStored[],
  ) => Promise<DialogResult<ServiceServiceUserStored[]>>;
  serviceServiceUserServiceUser_TableBulkRemove?: (
    selectedRows: ServiceServiceUserStored[],
  ) => Promise<DialogResult<ServiceServiceUserStored[]>>;
  serviceServiceUserServiceUser_TableClear?: () => Promise<void>;
  serviceServiceUserServiceUser_TableCreateOpen?: () => Promise<void>;
  serviceServiceUserServiceUser_TableTableFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceServiceUserServiceUser_TableTableRefresh?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<ServiceServiceUserStored[]>;
  serviceServiceUserServiceUser_TableDelete?: (row: ServiceServiceUserStored, silentMode?: boolean) => Promise<void>;
  serviceServiceUserServiceUser_TableRemove?: (row: ServiceServiceUserStored, silentMode?: boolean) => Promise<void>;
  serviceServiceUserServiceUser_TableView?: (row: ServiceServiceUserStored) => Promise<void>;
}

export interface ServiceServiceUserServiceUser_TableServiceUser_TableComponentProps {
  uniqueId: string;
  actions: ServiceServiceUserServiceUser_TableServiceUser_TableComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
}

// XMIID: User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableTable
// Name: ServiceUser_Table
export function ServiceServiceUserServiceUser_TableServiceUser_TableComponent(
  props: ServiceServiceUserServiceUser_TableServiceUser_TableComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError } = props;
  const filterModelKey = `User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceServiceUserStored>[]>([]);
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
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceServiceUserQueryCustomizer>({
    _mask: '{userName,isAdmin,firstName,lastName,phone,email,created}',
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
  const [lastItem, setLastItem] = useState<ServiceServiceUserStored>();
  const [firstItem, setFirstItem] = useState<ServiceServiceUserStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceServiceUserStored[]>([]);

  const columns: GridColDef<ServiceServiceUserStored>[] = [
    {
      ...baseColumnConfig,
      field: 'userName',
      headerName: t('service.ServiceUser.ServiceUser.Table.userName', { defaultValue: 'Username' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'isAdmin',
      headerName: t('service.ServiceUser.ServiceUser.Table.isAdmin', { defaultValue: 'Has admin access' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'boolean',
      filterable: false && true,
      align: 'center',
      renderCell: (params: GridRenderCellParams<any, ServiceServiceUserStored>) => {
        if (params.row.isAdmin === null || params.row.isAdmin === undefined) {
          return <MdiIcon className="undefined" path="minus" color="#ddd" />;
        } else if (params.row.isAdmin) {
          return <MdiIcon className="true" path="check-circle" color="green" />;
        }
        return <MdiIcon className="false" path="close-circle" color="red" />;
      },
    },
    {
      ...baseColumnConfig,
      field: 'firstName',
      headerName: t('service.ServiceUser.ServiceUser.Table.firstName', { defaultValue: 'First name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'lastName',
      headerName: t('service.ServiceUser.ServiceUser.Table.lastName', { defaultValue: 'Last name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'phone',
      headerName: t('service.ServiceUser.ServiceUser.Table.phone', { defaultValue: 'Phone' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'email',
      headerName: t('service.ServiceUser.ServiceUser.Table.email', { defaultValue: 'Email' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.ServiceUser.ServiceUser.Table.created', { defaultValue: 'Created' }) as string,
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
  ];

  const rowActions: TableRowAction<ServiceServiceUserStored>[] = [
    {
      id: 'User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableRowRemoveButton',
      label: t('service.ServiceUser.ServiceUser.Table.service::ServiceUser::ServiceUser_Table::Remove', {
        defaultValue: 'Remove',
      }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceServiceUserStored) => isLoading,
      action: actions.serviceServiceUserServiceUser_TableRemove
        ? async (rowData) => {
            await actions.serviceServiceUserServiceUser_TableRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableRowDeleteButton',
      label: t('service.ServiceUser.ServiceUser.Table.service::ServiceUser::ServiceUser_Table::Delete', {
        defaultValue: 'Delete',
      }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceServiceUserStored) => !row.__deleteable || isLoading,
      action: actions.serviceServiceUserServiceUser_TableDelete
        ? async (rowData) => {
            await actions.serviceServiceUserServiceUser_TableDelete!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_fcAsYH2GEe6V8KKnnZfChA',
      attributeName: 'userName',
      label: t('service.ServiceUser.ServiceUser.Table.userName::Filter', { defaultValue: 'Username' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fcDIoH2GEe6V8KKnnZfChA',
      attributeName: 'isAdmin',
      label: t('service.ServiceUser.ServiceUser.Table.isAdmin::Filter', { defaultValue: 'Has admin access' }) as string,
      filterType: FilterType.boolean,
    },

    {
      id: '_fcE90H2GEe6V8KKnnZfChA',
      attributeName: 'firstName',
      label: t('service.ServiceUser.ServiceUser.Table.firstName::Filter', { defaultValue: 'First name' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fcHaEH2GEe6V8KKnnZfChA',
      attributeName: 'lastName',
      label: t('service.ServiceUser.ServiceUser.Table.lastName::Filter', { defaultValue: 'Last name' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fcJPQH2GEe6V8KKnnZfChA',
      attributeName: 'phone',
      label: t('service.ServiceUser.ServiceUser.Table.phone::Filter', { defaultValue: 'Phone' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fcLrgH2GEe6V8KKnnZfChA',
      attributeName: 'email',
      label: t('service.ServiceUser.ServiceUser.Table.email::Filter', { defaultValue: 'Email' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fcNgsH2GEe6V8KKnnZfChA',
      attributeName: 'created',
      label: t('service.ServiceUser.ServiceUser.Table.created::Filter', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceServiceUserQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceServiceUserQueryCustomizer = {
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
        const res = await actions.serviceServiceUserServiceUser_TableTableRefresh!(
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
          ...columnsActionCalculator('User/(esm/_p1aUIGksEe25ONJ3V89cVA)/ClassType', rowActions, t, {
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
          actions.serviceServiceUserServiceUser_TableView
            ? async (params: GridRowParams<ServiceServiceUserStored>) =>
                await actions.serviceServiceUserServiceUser_TableView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceServiceUserServiceUser_TableTableFilter && true ? (
                <Button
                  id="User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.serviceServiceUserServiceUser_TableTableFilter!(
                      'User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableTableFilterButton',
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
                  {t('service.ServiceUser.ServiceUser.Table.service::ServiceUser::ServiceUser_Table::Table::Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceServiceUserServiceUser_TableTableRefresh && true ? (
                <Button
                  id="User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceServiceUserServiceUser_TableTableRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t('service.ServiceUser.ServiceUser.Table.service::ServiceUser::ServiceUser_Table::Table::Refresh', {
                    defaultValue: 'Refresh',
                  })}
                </Button>
              ) : null}
              {actions.serviceServiceUserServiceUser_TableCreateOpen && true ? (
                <Button
                  id="User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceServiceUserServiceUser_TableCreateOpen!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.ServiceUser.ServiceUser.Table.service::ServiceUser::ServiceUser_Table::Create', {
                    defaultValue: 'Create',
                  })}
                </Button>
              ) : null}
              {actions.serviceServiceUserServiceUser_TableAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceServiceUserServiceUser_TableAddOpenSelector!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.ServiceUser.ServiceUser.Table.service::ServiceUser::ServiceUser_Table::Add', {
                    defaultValue: 'Add',
                  })}
                </Button>
              ) : null}
              {actions.serviceServiceUserServiceUser_TableClear && data.length ? (
                <Button
                  id="User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceServiceUserServiceUser_TableClear!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.ServiceUser.ServiceUser.Table.service::ServiceUser::ServiceUser_Table::Clear', {
                    defaultValue: 'Clear',
                  })}
                </Button>
              ) : null}
              {actions.serviceServiceUserServiceUser_TableBulkRemove && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceServiceUserServiceUser_TableBulkRemove!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('service.ServiceUser.ServiceUser.Table.service::ServiceUser::ServiceUser_Table::BulkRemove', {
                    defaultValue: 'Remove',
                  })}
                </Button>
              ) : null}
              {actions.serviceServiceUserServiceUser_TableBulkDelete && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceServiceUserServiceUser_TableBulkDelete!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('service.ServiceUser.ServiceUser.Table.service::ServiceUser::ServiceUser_Table::BulkDelete', {
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
