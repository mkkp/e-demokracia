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
import {
  dateTimeColumnOperators,
  numericColumnOperators,
  columnsActionCalculator,
  ContextMenu,
  StripedDataGrid,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import type { ServiceCon, ServiceConQueryCustomizer, ServiceConStored } from '~/services/data-api';
import { useL10N } from '~/l10n/l10n-context';
import {
  getUpdatedRowsSelected,
  serviceDateToUiDate,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult, TableRowAction } from '~/utilities';
import { useDataStore } from '~/hooks';
import { OBJECTCLASS } from '@pandino/pandino-api';

export interface ServiceConCon_TableCon_TableComponentActionDefinitions {
  openAddSelectorAction?: () => Promise<void>;
  bulkDeleteAction?: (selectedRows: ServiceConStored[]) => Promise<DialogResult<ServiceConStored[]>>;
  bulkRemoveAction?: (selectedRows: ServiceConStored[]) => Promise<DialogResult<ServiceConStored[]>>;
  clearAction?: () => Promise<void>;
  openFormAction?: () => Promise<void>;
  openSetSelectorAction?: () => Promise<void>;
  filterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  refreshAction?: (queryCustomizer: ServiceConQueryCustomizer) => Promise<ServiceConStored[]>;
  createConArgumentAction?: (row: ServiceConStored) => Promise<void>;
  createProArgumentAction?: (row: ServiceConStored) => Promise<void>;
  deleteAction?: (row: ServiceConStored, silentMode?: boolean) => Promise<void>;
  removeAction?: (row: ServiceConStored, silentMode?: boolean) => Promise<void>;
  openPageAction?: (row: ServiceConStored) => Promise<void>;
  voteDownForConAction?: (row: ServiceConStored) => Promise<void>;
  voteUpForConAction?: (row: ServiceConStored) => Promise<void>;
}

export interface ServiceConCon_TableCon_TableComponentProps {
  uniqueId: string;
  actions: ServiceConCon_TableCon_TableComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
}

// XMIID: User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTableTable
// Name: Con_Table
export function ServiceConCon_TableCon_TableComponent(props: ServiceConCon_TableCon_TableComponentProps) {
  const { uniqueId, actions, refreshCounter, validationError } = props;
  const filterModelKey = `User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTableTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTableTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceConStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'createdByName', sort: 'asc' }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceConQueryCustomizer>({
    _mask: '{createdByName,created,description,title,upVotes,downVotes}',
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
  const [lastItem, setLastItem] = useState<ServiceConStored>();
  const [firstItem, setFirstItem] = useState<ServiceConStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceConStored[]>([]);

  const columns: GridColDef<ServiceConStored>[] = [
    {
      ...baseColumnConfig,
      field: 'createdByName',
      headerName: t('service.Con.Con_Table.createdByName', { defaultValue: 'CreatedByName' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.Con.Con_Table.created', { defaultValue: 'Created' }) as string,
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
      field: 'description',
      headerName: t('service.Con.Con_Table.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('service.Con.Con_Table.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'upVotes',
      headerName: t('service.Con.Con_Table.upVotes', { defaultValue: 'UpVotes' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      filterable: false && true,
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
    {
      ...baseColumnConfig,
      field: 'downVotes',
      headerName: t('service.Con.Con_Table.downVotes', { defaultValue: 'DownVotes' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      filterable: false && true,
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
  ];

  const rowActions: TableRowAction<ServiceConStored>[] = [
    {
      id: 'User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTableRowRemoveButton',
      label: t('service.Con.Con_Table.Remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceConStored) => isLoading,
      action: actions.removeAction
        ? async (rowData) => {
            await actions.removeAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTableRowDeleteButton',
      label: t('service.Con.Con_Table.Delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceConStored) => !row.__deleteable || isLoading,
      action: actions.deleteAction
        ? async (rowData) => {
            await actions.deleteAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_DBZYMHjsEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTable)',
      label: t('service.Con.Con_Table.createProArgument', { defaultValue: 'createProArgument' }) as string,
      icon: <MdiIcon path="chat-plus" />,
      disabled: (row: ServiceConStored) => isLoading,
      action: actions.createProArgumentAction
        ? async (rowData) => {
            await actions.createProArgumentAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_3sNaYIriEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTable)',
      label: t('service.Con.Con_Table.voteUp', { defaultValue: 'voteUp' }) as string,
      icon: <MdiIcon path="thumb-up" />,
      disabled: (row: ServiceConStored) => isLoading,
      action: actions.voteUpForConAction
        ? async (rowData) => {
            await actions.voteUpForConAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_DBYxIHjsEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTable)',
      label: t('service.Con.Con_Table.createConArgument', { defaultValue: 'createConArgument' }) as string,
      icon: <MdiIcon path="chat-minus" />,
      disabled: (row: ServiceConStored) => isLoading,
      action: actions.createConArgumentAction
        ? async (rowData) => {
            await actions.createConArgumentAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_3sP2oIriEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTable)',
      label: t('service.Con.Con_Table.voteDown', { defaultValue: 'voteDown' }) as string,
      icon: <MdiIcon path="thumb-down" />,
      disabled: (row: ServiceConStored) => isLoading,
      action: actions.voteDownForConAction
        ? async (rowData) => {
            await actions.voteDownForConAction!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_HGJTAoujEe6laYH8Xw7WEw',
      attributeName: 'createdByName',
      label: t('service.Con.Con_Table.createdByName', { defaultValue: 'CreatedByName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_HGJ6EoujEe6laYH8Xw7WEw',
      attributeName: 'created',
      label: t('service.Con.Con_Table.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: '_HGKhIIujEe6laYH8Xw7WEw',
      attributeName: 'description',
      label: t('service.Con.Con_Table.description', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_HGKhJIujEe6laYH8Xw7WEw',
      attributeName: 'title',
      label: t('service.Con.Con_Table.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_HGLIMoujEe6laYH8Xw7WEw',
      attributeName: 'upVotes',
      label: t('service.Con.Con_Table.upVotes', { defaultValue: 'UpVotes' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: '_HGLvQIujEe6laYH8Xw7WEw',
      attributeName: 'downVotes',
      label: t('service.Con.Con_Table.downVotes', { defaultValue: 'DownVotes' }) as string,
      filterType: FilterType.numeric,
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceConQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceConQueryCustomizer = {
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
    <div id="User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTableTable" data-table-name="Con_Table">
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
          ...columnsActionCalculator('User/(esm/_qAQSMGksEe25ONJ3V89cVA)/ClassType', rowActions, t, {
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
            ? async (params: GridRowParams<ServiceConStored>) => await actions.openPageAction!(params.row)
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
                  id="User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.filterAction!(
                      'User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTableTableFilterButton',
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
                  {t('service.Con.Con_Table.Table.Filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.refreshAction && true ? (
                <Button
                  id="User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.refreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.Con.Con_Table.Table.Refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.openFormAction && true ? (
                <Button
                  id="User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.openFormAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.Con.Con_Table.Create', { defaultValue: 'Create' })}
                </Button>
              ) : null}
              {actions.openAddSelectorAction && true ? (
                <Button
                  id="User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.openAddSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.Con.Con_Table.Add', { defaultValue: 'Add' })}
                </Button>
              ) : null}
              {actions.openSetSelectorAction && true ? (
                <Button
                  id="User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.openSetSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.Con.Con_Table.Set', { defaultValue: 'Set' })}
                </Button>
              ) : null}
              {actions.clearAction && data.length ? (
                <Button
                  id="User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.clearAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.Con.Con_Table.Clear', { defaultValue: 'Clear' })}
                </Button>
              ) : null}
              {actions.bulkRemoveAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTableBulkRemoveButton"
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
                  {t('service.Con.Con_Table.BulkRemove', { defaultValue: 'Remove' })}
                </Button>
              ) : null}
              {actions.bulkDeleteAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_qAs-IGksEe25ONJ3V89cVA)/TransferObjectTableBulkDeleteButton"
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
                  {t('service.Con.Con_Table.BulkDelete', { defaultValue: 'Delete' })}
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
