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
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
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

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponentActionDefinitions {
  serviceYesNoVoteDefinitionYesNoVoteDefinition_TableAddOpenSelector?: () => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_TableBulkDelete?: (
    selectedRows: ServiceYesNoVoteDefinitionStored[],
  ) => Promise<DialogResult<ServiceYesNoVoteDefinitionStored[]>>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_TableBulkRemove?: (
    selectedRows: ServiceYesNoVoteDefinitionStored[],
  ) => Promise<DialogResult<ServiceYesNoVoteDefinitionStored[]>>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_TableClear?: () => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_TableCreateOpen?: () => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_TableTableFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_TableTableRefresh?: (
    queryCustomizer: ServiceYesNoVoteDefinitionQueryCustomizer,
  ) => Promise<ServiceYesNoVoteDefinitionStored[]>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_TableDelete?: (
    row: ServiceYesNoVoteDefinitionStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_TableRemove?: (
    row: ServiceYesNoVoteDefinitionStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_TableView?: (row: ServiceYesNoVoteDefinitionStored) => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote?: (
    row: ServiceYesNoVoteDefinitionStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm?: (
    row: ServiceYesNoVoteDefinitionStored,
  ) => Promise<void>;
}

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponentProps {
  uniqueId: string;
  actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
}

// XMIID: User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableTable
// Name: YesNoVoteDefinition_Table
export function ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponent(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError } = props;
  const filterModelKey = `User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceYesNoVoteDefinitionStored>[]>([]);
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
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceYesNoVoteDefinitionQueryCustomizer>({
    _mask: '{title,created,description,status,closeAt}',
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
  const [lastItem, setLastItem] = useState<ServiceYesNoVoteDefinitionStored>();
  const [firstItem, setFirstItem] = useState<ServiceYesNoVoteDefinitionStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceYesNoVoteDefinitionStored[]>([]);

  const columns: GridColDef<ServiceYesNoVoteDefinitionStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('service.YesNoVoteDefinition.YesNoVoteDefinition.Table.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.YesNoVoteDefinition.YesNoVoteDefinition.Table.created', {
        defaultValue: 'Created',
      }) as string,
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
      headerName: t('service.YesNoVoteDefinition.YesNoVoteDefinition.Table.description', {
        defaultValue: 'Description',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'status',
      headerName: t('service.YesNoVoteDefinition.YesNoVoteDefinition.Table.status', {
        defaultValue: 'Status',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'singleSelect',
      filterable: false && true,
      sortable: false,
      valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
        if (value !== undefined && value !== null) {
          return t(`enumerations.VoteStatus.${value}`, { defaultValue: value });
        }
      },
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
    {
      ...baseColumnConfig,
      field: 'closeAt',
      headerName: t('service.YesNoVoteDefinition.YesNoVoteDefinition.Table.closeAt', {
        defaultValue: 'CloseAt',
      }) as string,
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

  const rowActions: TableRowAction<ServiceYesNoVoteDefinitionStored>[] = [
    {
      id: 'User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableRowRemoveButton',
      label: t(
        'service.YesNoVoteDefinition.YesNoVoteDefinition.Table.service::YesNoVoteDefinition::YesNoVoteDefinition_Table::Remove',
        { defaultValue: 'Remove' },
      ) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceYesNoVoteDefinitionStored) => isLoading,
      action: actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableRemove
        ? async (rowData) => {
            await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableRowDeleteButton',
      label: t(
        'service.YesNoVoteDefinition.YesNoVoteDefinition.Table.service::YesNoVoteDefinition::YesNoVoteDefinition_Table::Delete',
        { defaultValue: 'Delete' },
      ) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceYesNoVoteDefinitionStored) => !row.__deleteable || isLoading,
      action: actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableDelete
        ? async (rowData) => {
            await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableDelete!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_eMuv8FoSEe6_67aMO2jOsw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableRowButtonGroup)',
      label: t('service.YesNoVoteDefinition.YesNoVoteDefinition.Table.vote', { defaultValue: 'vote' }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceYesNoVoteDefinitionStored) => !row.userHasNoVoteEntry || isLoading,
      action: actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm
        ? async (rowData) => {
            await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm!(
              rowData,
            );
          }
        : undefined,
    },
    {
      id: 'User/(esm/_--H4sFouEe6_67aMO2jOsw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableRowButtonGroup)',
      label: t('service.YesNoVoteDefinition.YesNoVoteDefinition.Table.takeBackVote', {
        defaultValue: 'takeBackVote',
      }) as string,
      icon: <MdiIcon path="delete" />,
      disabled: (row: ServiceYesNoVoteDefinitionStored) => !row.userHasVoteEntry || isLoading,
      action:
        actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote
          ? async (rowData) => {
              await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote!(
                rowData,
              );
            }
          : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_fhoMMH2GEe6V8KKnnZfChA',
      attributeName: 'title',
      label: t('service.YesNoVoteDefinition.YesNoVoteDefinition.Table.title::Filter', {
        defaultValue: 'Title',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fhoMNH2GEe6V8KKnnZfChA',
      attributeName: 'created',
      label: t('service.YesNoVoteDefinition.YesNoVoteDefinition.Table.created::Filter', {
        defaultValue: 'Created',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: '_fhozQn2GEe6V8KKnnZfChA',
      attributeName: 'description',
      label: t('service.YesNoVoteDefinition.YesNoVoteDefinition.Table.description::Filter', {
        defaultValue: 'Description',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fhpaUH2GEe6V8KKnnZfChA',
      attributeName: 'status',
      label: t('service.YesNoVoteDefinition.YesNoVoteDefinition.Table.status::Filter', {
        defaultValue: 'Status',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },

    {
      id: '_fhpaVH2GEe6V8KKnnZfChA',
      attributeName: 'closeAt',
      label: t('service.YesNoVoteDefinition.YesNoVoteDefinition.Table.closeAt::Filter', {
        defaultValue: 'CloseAt',
      }) as string,
      filterType: FilterType.dateTime,
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceYesNoVoteDefinitionQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceYesNoVoteDefinitionQueryCustomizer = {
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
        const res = await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableTableRefresh!(
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
          ...columnsActionCalculator('User/(esm/_-Ze00H4XEe2cB7_PsKXsHQ)/ClassType', rowActions, t, {
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
          actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableView
            ? async (params: GridRowParams<ServiceYesNoVoteDefinitionStored>) =>
                await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableTableFilter && true ? (
                <Button
                  id="User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableTableFilter!(
                      'User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableTableFilterButton',
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
                    'service.YesNoVoteDefinition.YesNoVoteDefinition.Table.service::YesNoVoteDefinition::YesNoVoteDefinition_Table::Table::Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableTableRefresh && true ? (
                <Button
                  id="User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableTableRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.YesNoVoteDefinition.YesNoVoteDefinition.Table.service::YesNoVoteDefinition::YesNoVoteDefinition_Table::Table::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableCreateOpen && true ? (
                <Button
                  id="User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableCreateOpen!();
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.YesNoVoteDefinition.YesNoVoteDefinition.Table.service::YesNoVoteDefinition::YesNoVoteDefinition_Table::Create',
                    { defaultValue: 'Create' },
                  )}
                </Button>
              ) : null}
              {actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableAddOpenSelector!();
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.YesNoVoteDefinition.YesNoVoteDefinition.Table.service::YesNoVoteDefinition::YesNoVoteDefinition_Table::Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableClear && data.length ? (
                <Button
                  id="User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableClear!();
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.YesNoVoteDefinition.YesNoVoteDefinition.Table.service::YesNoVoteDefinition::YesNoVoteDefinition_Table::Clear',
                    { defaultValue: 'Clear' },
                  )}
                </Button>
              ) : null}
              {actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableBulkRemove && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableBulkRemove!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.YesNoVoteDefinition.YesNoVoteDefinition.Table.service::YesNoVoteDefinition::YesNoVoteDefinition_Table::BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableBulkDelete && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableBulkDelete!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'service.YesNoVoteDefinition.YesNoVoteDefinition.Table.service::YesNoVoteDefinition::YesNoVoteDefinition_Table::BulkDelete',
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
