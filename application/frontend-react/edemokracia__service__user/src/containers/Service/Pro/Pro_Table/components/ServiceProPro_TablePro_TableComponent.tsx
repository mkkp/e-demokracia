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
import type { ServicePro, ServiceProQueryCustomizer, ServiceProStored } from '~/services/data-api';
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

export interface ServiceProPro_TablePro_TableComponentActionDefinitions {
  serviceProPro_TableAddOpenSelector?: () => Promise<void>;
  serviceProPro_TableBulkDelete?: (selectedRows: ServiceProStored[]) => Promise<DialogResult<ServiceProStored[]>>;
  serviceProPro_TableBulkRemove?: (selectedRows: ServiceProStored[]) => Promise<DialogResult<ServiceProStored[]>>;
  serviceProPro_TableClear?: () => Promise<void>;
  serviceProPro_TableCreateOpen?: () => Promise<void>;
  serviceProPro_TableTableFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceProPro_TableTableRefresh?: (queryCustomizer: ServiceProQueryCustomizer) => Promise<ServiceProStored[]>;
  serviceProPro_View_EditArgumentsConsActionsCreateConArgumentOpenForm?: (row: ServiceProStored) => Promise<void>;
  serviceProPro_View_EditArgumentsProsActionsCreateProArgumentOpenForm?: (row: ServiceProStored) => Promise<void>;
  serviceProPro_TableDelete?: (row: ServiceProStored, silentMode?: boolean) => Promise<void>;
  serviceProPro_TableRemove?: (row: ServiceProStored, silentMode?: boolean) => Promise<void>;
  serviceProPro_TableView?: (row: ServiceProStored) => Promise<void>;
  serviceProPro_View_EditProVoteDown?: (row: ServiceProStored, silentMode?: boolean) => Promise<void>;
  serviceProPro_View_EditProVoteUp?: (row: ServiceProStored, silentMode?: boolean) => Promise<void>;
}

export interface ServiceProPro_TablePro_TableComponentProps {
  uniqueId: string;
  actions: ServiceProPro_TablePro_TableComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
}

// XMIID: User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable
// Name: Pro_Table
export function ServiceProPro_TablePro_TableComponent(props: ServiceProPro_TablePro_TableComponentProps) {
  const { uniqueId, actions, refreshCounter, validationError } = props;
  const filterModelKey = `User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceProStored>[]>([]);
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
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceProQueryCustomizer>({
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
  const [lastItem, setLastItem] = useState<ServiceProStored>();
  const [firstItem, setFirstItem] = useState<ServiceProStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceProStored[]>([]);

  const columns: GridColDef<ServiceProStored>[] = [
    {
      ...baseColumnConfig,
      field: 'createdByName',
      headerName: t('service.Pro.Pro.Table.createdByName', { defaultValue: 'CreatedByName' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.Pro.Pro.Table.created', { defaultValue: 'Created' }) as string,
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
      headerName: t('service.Pro.Pro.Table.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('service.Pro.Pro.Table.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'upVotes',
      headerName: t('service.Pro.Pro.Table.upVotes', { defaultValue: 'UpVotes' }) as string,
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
      headerName: t('service.Pro.Pro.Table.downVotes', { defaultValue: 'DownVotes' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      filterable: false && true,
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
  ];

  const rowActions: TableRowAction<ServiceProStored>[] = [
    {
      id: 'User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableRowRemoveButton',
      label: t('service.Pro.Pro.Table.service::Pro::Pro_Table::Remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceProStored) => isLoading,
      action: actions.serviceProPro_TableRemove
        ? async (rowData) => {
            await actions.serviceProPro_TableRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableRowDeleteButton',
      label: t('service.Pro.Pro.Table.service::Pro::Pro_Table::Delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceProStored) => !row.__deleteable || isLoading,
      action: actions.serviceProPro_TableDelete
        ? async (rowData) => {
            await actions.serviceProPro_TableDelete!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_ikPssIrjEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableRowButtonGroup)',
      label: t('service.Pro.Pro.Table.voteUp', { defaultValue: 'voteUp' }) as string,
      icon: <MdiIcon path="thumb-up" />,
      disabled: (row: ServiceProStored) => isLoading,
      action: actions.serviceProPro_View_EditProVoteUp
        ? async (rowData) => {
            await actions.serviceProPro_View_EditProVoteUp!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_KRUbO3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableRowButtonGroup)',
      label: t('service.Pro.Pro.Table.createConArgument', { defaultValue: 'createConArgument' }) as string,
      icon: <MdiIcon path="chat-minus" />,
      disabled: (row: ServiceProStored) => isLoading,
      action: actions.serviceProPro_View_EditArgumentsConsActionsCreateConArgumentOpenForm
        ? async (rowData) => {
            await actions.serviceProPro_View_EditArgumentsConsActionsCreateConArgumentOpenForm!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_KRUbM3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableRowButtonGroup)',
      label: t('service.Pro.Pro.Table.createProArgument', { defaultValue: 'createProArgument' }) as string,
      icon: <MdiIcon path="chat-plus" />,
      disabled: (row: ServiceProStored) => isLoading,
      action: actions.serviceProPro_View_EditArgumentsProsActionsCreateProArgumentOpenForm
        ? async (rowData) => {
            await actions.serviceProPro_View_EditArgumentsProsActionsCreateProArgumentOpenForm!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_ikQTwIrjEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableRowButtonGroup)',
      label: t('service.Pro.Pro.Table.voteDown', { defaultValue: 'voteDown' }) as string,
      icon: <MdiIcon path="thumb-down" />,
      disabled: (row: ServiceProStored) => isLoading,
      action: actions.serviceProPro_View_EditProVoteDown
        ? async (rowData) => {
            await actions.serviceProPro_View_EditProVoteDown!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_gDI90n2GEe6V8KKnnZfChA',
      attributeName: 'createdByName',
      label: t('service.Pro.Pro.Table.createdByName::Filter', { defaultValue: 'CreatedByName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_gDJk432GEe6V8KKnnZfChA',
      attributeName: 'created',
      label: t('service.Pro.Pro.Table.created::Filter', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: '_gDKL8n2GEe6V8KKnnZfChA',
      attributeName: 'description',
      label: t('service.Pro.Pro.Table.description::Filter', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_gDNPQH2GEe6V8KKnnZfChA',
      attributeName: 'title',
      label: t('service.Pro.Pro.Table.title::Filter', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_gDN2UH2GEe6V8KKnnZfChA',
      attributeName: 'upVotes',
      label: t('service.Pro.Pro.Table.upVotes::Filter', { defaultValue: 'UpVotes' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: '_gDOdYH2GEe6V8KKnnZfChA',
      attributeName: 'downVotes',
      label: t('service.Pro.Pro.Table.downVotes::Filter', { defaultValue: 'DownVotes' }) as string,
      filterType: FilterType.numeric,
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceProQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceProQueryCustomizer = {
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
        const res = await actions.serviceProPro_TableTableRefresh!(processQueryCustomizer(queryCustomizer));

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
          ...columnsActionCalculator('User/(esm/_qLFCImksEe25ONJ3V89cVA)/ClassType', rowActions, t, {
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
          actions.serviceProPro_TableView
            ? async (params: GridRowParams<ServiceProStored>) => await actions.serviceProPro_TableView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceProPro_TableTableFilter && true ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.serviceProPro_TableTableFilter!(
                      'User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTableFilterButton',
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
                  {t('service.Pro.Pro.Table.service::Pro::Pro_Table::Table::Filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceProPro_TableTableRefresh && true ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceProPro_TableTableRefresh!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.Pro.Pro.Table.service::Pro::Pro_Table::Table::Refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.serviceProPro_TableCreateOpen && true ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceProPro_TableCreateOpen!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.Pro.Pro.Table.service::Pro::Pro_Table::Create', { defaultValue: 'Create' })}
                </Button>
              ) : null}
              {actions.serviceProPro_TableAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceProPro_TableAddOpenSelector!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.Pro.Pro.Table.service::Pro::Pro_Table::Add', { defaultValue: 'Add' })}
                </Button>
              ) : null}
              {actions.serviceProPro_TableClear && data.length ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceProPro_TableClear!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.Pro.Pro.Table.service::Pro::Pro_Table::Clear', { defaultValue: 'Clear' })}
                </Button>
              ) : null}
              {actions.serviceProPro_TableBulkRemove && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceProPro_TableBulkRemove!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('service.Pro.Pro.Table.service::Pro::Pro_Table::BulkRemove', { defaultValue: 'Remove' })}
                </Button>
              ) : null}
              {actions.serviceProPro_TableBulkDelete && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceProPro_TableBulkDelete!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('service.Pro.Pro.Table.service::Pro::Pro_Table::BulkDelete', { defaultValue: 'Delete' })}
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
