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
import type { Dispatch, ElementType, MouseEvent, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomTablePagination, MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import {
  ContextMenu,
  StripedDataGrid,
  booleanColumnOperators,
  columnsActionCalculator,
  dateTimeColumnOperators,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, basePageSizeOptions, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  isRowSelectable,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  serviceDateToUiDate,
  useErrorHandler,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, TableRowAction } from '~/utilities';

export interface ServiceServiceUserServiceUser_TableSetSelectorServiceUser_TableSetSelectorComponentActionDefinitions {
  openFormAction?: () => Promise<void>;
  filterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  selectorRangeAction?: (queryCustomizer: ServiceServiceUserQueryCustomizer) => Promise<ServiceServiceUserStored[]>;
  AdditionalToolbarButtons?: (
    data: ServiceServiceUserStored[],
    isLoading: boolean,
    selectedRows: ServiceServiceUserStored[],
    clearSelections: () => void,
  ) => Record<string, ElementType>;
}

export interface ServiceServiceUserServiceUser_TableSetSelectorServiceUser_TableSetSelectorComponentProps {
  uniqueId: string;
  actions: ServiceServiceUserServiceUser_TableSetSelectorServiceUser_TableSetSelectorComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
  validationError?: string;
  selectionDiff: ServiceServiceUserStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceServiceUserStored[]>>;
  alreadySelected: ServiceServiceUserStored[];
}

// XMIID: User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTable
// Name: ServiceUser_Table::Set::Selector
export function ServiceServiceUserServiceUser_TableSetSelectorServiceUser_TableSetSelectorComponent(
  props: ServiceServiceUserServiceUser_TableSetSelectorServiceUser_TableSetSelectorComponentProps,
) {
  const {
    uniqueId,
    actions,
    refreshCounter,
    isOwnerLoading,
    isDraft,
    validationError,
    selectionDiff,
    setSelectionDiff,
    alreadySelected,
  } = props;
  const filterModelKey = `User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceServiceUserStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'userName', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: rowsPerPage,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceServiceUserQueryCustomizer>({
    _mask: '{created,email,firstName,isAdmin,lastName,phone,userName}',
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
  const [lastItem, setLastItem] = useState<ServiceServiceUserStored>();
  const [firstItem, setFirstItem] = useState<ServiceServiceUserStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const userNameColumn: GridColDef<ServiceServiceUserStored> = {
    ...baseColumnConfig,
    field: 'userName',
    headerName: t('service.ServiceUser.ServiceUser_Table.SetSelector.userName', { defaultValue: 'Username' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const isAdminColumn: GridColDef<ServiceServiceUserStored> = {
    ...baseColumnConfig,
    field: 'isAdmin',
    headerName: t('service.ServiceUser.ServiceUser_Table.SetSelector.isAdmin', {
      defaultValue: 'Has admin access',
    }) as string,
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
  };
  const firstNameColumn: GridColDef<ServiceServiceUserStored> = {
    ...baseColumnConfig,
    field: 'firstName',
    headerName: t('service.ServiceUser.ServiceUser_Table.SetSelector.firstName', {
      defaultValue: 'First name',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const lastNameColumn: GridColDef<ServiceServiceUserStored> = {
    ...baseColumnConfig,
    field: 'lastName',
    headerName: t('service.ServiceUser.ServiceUser_Table.SetSelector.lastName', {
      defaultValue: 'Last name',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const phoneColumn: GridColDef<ServiceServiceUserStored> = {
    ...baseColumnConfig,
    field: 'phone',
    headerName: t('service.ServiceUser.ServiceUser_Table.SetSelector.phone', { defaultValue: 'Phone' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const emailColumn: GridColDef<ServiceServiceUserStored> = {
    ...baseColumnConfig,
    field: 'email',
    headerName: t('service.ServiceUser.ServiceUser_Table.SetSelector.email', { defaultValue: 'Email' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const createdColumn: GridColDef<ServiceServiceUserStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t('service.ServiceUser.ServiceUser_Table.SetSelector.created', { defaultValue: 'Created' }) as string,
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

  const columns = useMemo<GridColDef<ServiceServiceUserStored>[]>(
    () => [userNameColumn, isAdminColumn, firstNameColumn, lastNameColumn, phoneColumn, emailColumn, createdColumn],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceServiceUserStored>[] = useMemo(() => [], [actions, isLoading]);

  const effectiveTableColumns = useMemo(
    () => [
      ...columns,
      ...columnsActionCalculator('User/(esm/_p1aUIGksEe25ONJ3V89cVA)/ClassType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ],
    [columns, rowActions],
  );

  const getRowIdentifier: (row: Pick<ServiceServiceUserStored, '__identifier'>) => string = (row) => row.__identifier!;

  const getSelectedRows: () => ServiceServiceUserStored[] = () => {
    return selectionDiff;
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
    setPage(0);

    setQueryCustomizer((prevQueryCustomizer: ServiceServiceUserQueryCustomizer) => {
      // we need to reset _seek so that previous configuration is erased
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: newValue + 1,
        },
      };
    });
  }, []);

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_ertAAH4NEe2cB7_PsKXsHQ)/TableColumnFilter/(discriminator/User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTable)',
        attributeName: 'userName',
        label: t('service.ServiceUser.ServiceUser_Table.SetSelector.userName', { defaultValue: 'Username' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_B86YQGkwEe25ONJ3V89cVA)/TableColumnFilter/(discriminator/User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTable)',
        attributeName: 'isAdmin',
        label: t('service.ServiceUser.ServiceUser_Table.SetSelector.isAdmin', {
          defaultValue: 'Has admin access',
        }) as string,
        filterType: FilterType.boolean,
      },

      {
        id: 'User/(esm/_B6R7AGkwEe25ONJ3V89cVA)/TableColumnFilter/(discriminator/User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTable)',
        attributeName: 'firstName',
        label: t('service.ServiceUser.ServiceUser_Table.SetSelector.firstName', {
          defaultValue: 'First name',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_B63w4GkwEe25ONJ3V89cVA)/TableColumnFilter/(discriminator/User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTable)',
        attributeName: 'lastName',
        label: t('service.ServiceUser.ServiceUser_Table.SetSelector.lastName', { defaultValue: 'Last name' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_B7jtYGkwEe25ONJ3V89cVA)/TableColumnFilter/(discriminator/User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTable)',
        attributeName: 'phone',
        label: t('service.ServiceUser.ServiceUser_Table.SetSelector.phone', { defaultValue: 'Phone' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_B8MmkGkwEe25ONJ3V89cVA)/TableColumnFilter/(discriminator/User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTable)',
        attributeName: 'email',
        label: t('service.ServiceUser.ServiceUser_Table.SetSelector.email', { defaultValue: 'Email' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_B9mUwGkwEe25ONJ3V89cVA)/TableColumnFilter/(discriminator/User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTable)',
        attributeName: 'created',
        label: t('service.ServiceUser.ServiceUser_Table.SetSelector.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },
    ],
    [l10nLocale],
  );

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
      const strippedQueryCustomizer: ServiceServiceUserQueryCustomizer = {
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

  const handleIsRowSelectable = useCallback(
    (params: GridRowParams<ServiceServiceUserStored & { __selected?: boolean }>) => {
      return isRowSelectable(params.row, !false, alreadySelected);
    },
    [],
  );

  const handleOnSelection = (newSelectionModel: GridRowSelectionModel) => {
    if (!Array.isArray(selectionModel)) return;
    if (newSelectionModel.length === 0) {
      setSelectionModel([]);
      setSelectionDiff([]);
      return;
    }

    const lastId = newSelectionModel[newSelectionModel.length - 1];

    setSelectionModel([lastId]);
    setSelectionDiff([data.find((value) => value.__identifier === lastId)!]);
  };

  async function fetchData() {
    if (!isLoading) {
      setIsInternalLoading(true);

      try {
        const processedQueryCustomizer = {
          ...processQueryCustomizer(queryCustomizer),
        };
        const res = await actions.selectorRangeAction!(processedQueryCustomizer);

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
    <div
      id="User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTable"
      data-table-name="ServiceUser_Table::Set::Selector"
    >
      <StripedDataGrid
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
        isRowSelectable={handleIsRowSelectable}
        hideFooterSelectedRowCount={!false}
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={handleOnSelection}
        keepNonExistentRowsSelected
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
        rowCount={rowsPerPage}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.filterAction && true ? (
                <Button
                  id="User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.filterAction!(
                      'User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTableFilterButton',
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
                  {t('service.ServiceUser.ServiceUser_Table.Table.Filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.selectorRangeAction && true ? (
                <Button
                  id="User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                    };
                    await actions.selectorRangeAction!(processedQueryCustomizer);
                  }}
                  disabled={isLoading}
                >
                  {t('service.ServiceUser.ServiceUser_Table.Table.Refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.openFormAction && true ? (
                <Button
                  id="User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                    };
                    await actions.openFormAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.ServiceUser.ServiceUser_Table.Table.Create', { defaultValue: 'Create' })}
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
