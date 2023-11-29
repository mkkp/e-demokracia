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
import {
  dateTimeColumnOperators,
  singleSelectColumnOperators,
  columnsActionCalculator,
  ContextMenu,
  StripedDataGrid,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import type {
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
} from '~/services/data-api';
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

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableSelectAnswerVoteDefinition_TableComponentActionDefinitions {
  openAddSelectorAction?: () => Promise<void>;
  bulkDeleteAction?: (
    selectedRows: ServiceSelectAnswerVoteDefinitionStored[],
  ) => Promise<DialogResult<ServiceSelectAnswerVoteDefinitionStored[]>>;
  bulkRemoveAction?: (
    selectedRows: ServiceSelectAnswerVoteDefinitionStored[],
  ) => Promise<DialogResult<ServiceSelectAnswerVoteDefinitionStored[]>>;
  clearAction?: () => Promise<void>;
  openSetSelectorAction?: () => Promise<void>;
  filterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  refreshAction?: (
    queryCustomizer: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ) => Promise<ServiceSelectAnswerVoteDefinitionStored[]>;
  activateForSelectAnswerVoteDefinitionAction?: (row: ServiceSelectAnswerVoteDefinitionStored) => Promise<void>;
  addToFavoritesForSelectAnswerVoteDefinitionAction?: (row: ServiceSelectAnswerVoteDefinitionStored) => Promise<void>;
  closeVoteForSelectAnswerVoteDefinitionAction?: (row: ServiceSelectAnswerVoteDefinitionStored) => Promise<void>;
  deleteOrArchiveForSelectAnswerVoteDefinitionAction?: (row: ServiceSelectAnswerVoteDefinitionStored) => Promise<void>;
  removeFromFavoritesForSelectAnswerVoteDefinitionAction?: (
    row: ServiceSelectAnswerVoteDefinitionStored,
  ) => Promise<void>;
  deleteAction?: (row: ServiceSelectAnswerVoteDefinitionStored, silentMode?: boolean) => Promise<void>;
  removeAction?: (row: ServiceSelectAnswerVoteDefinitionStored, silentMode?: boolean) => Promise<void>;
  openPageAction?: (row: ServiceSelectAnswerVoteDefinitionStored) => Promise<void>;
  takeBackVoteForSelectAnswerVoteDefinitionAction?: (row: ServiceSelectAnswerVoteDefinitionStored) => Promise<void>;
  voteAction?: (row: ServiceSelectAnswerVoteDefinitionStored) => Promise<void>;
}

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableSelectAnswerVoteDefinition_TableComponentProps {
  uniqueId: string;
  actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableSelectAnswerVoteDefinition_TableComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
}

// XMIID: User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable
// Name: SelectAnswerVoteDefinition_Table
export function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableSelectAnswerVoteDefinition_TableComponent(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableSelectAnswerVoteDefinition_TableComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError } = props;
  const filterModelKey = `User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceSelectAnswerVoteDefinitionStored>[]>([]);
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
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceSelectAnswerVoteDefinitionQueryCustomizer>({
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
  const [lastItem, setLastItem] = useState<ServiceSelectAnswerVoteDefinitionStored>();
  const [firstItem, setFirstItem] = useState<ServiceSelectAnswerVoteDefinitionStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceSelectAnswerVoteDefinitionStored[]>([]);

  const columns = useMemo<GridColDef<ServiceSelectAnswerVoteDefinitionStored>[]>(
    () => [
      {
        ...baseColumnConfig,
        field: 'title',
        headerName: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.title', {
          defaultValue: 'Title',
        }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'created',
        headerName: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.created', {
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
        headerName: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.description', {
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
        headerName: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.status', {
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
        headerName: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.closeAt', {
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
    ],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceSelectAnswerVoteDefinitionStored>[] = [
    {
      id: 'User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableRowRemoveButton',
      label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.Remove', {
        defaultValue: 'Remove',
      }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceSelectAnswerVoteDefinitionStored) => isLoading,
      action: actions.removeAction
        ? async (rowData) => {
            await actions.removeAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableRowDeleteButton',
      label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.Delete', {
        defaultValue: 'Delete',
      }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceSelectAnswerVoteDefinitionStored) => !row.__deleteable || isLoading,
      action: actions.deleteAction
        ? async (rowData) => {
            await actions.deleteAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_0SJy01tuEe6Mx9dH3yj5gQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.takeBackVote', {
        defaultValue: 'takeBackVote',
      }) as string,
      icon: <MdiIcon path="delete" />,
      disabled: (row: ServiceSelectAnswerVoteDefinitionStored) => !row.userHasVoteEntry || isLoading,
      action: actions.takeBackVoteForSelectAnswerVoteDefinitionAction
        ? async (rowData) => {
            await actions.takeBackVoteForSelectAnswerVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_JTH2lnr9Ee6bP4FWw7fjQA)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.activate', {
        defaultValue: 'activate',
      }) as string,
      icon: <MdiIcon path="lock-open" />,
      disabled: (row: ServiceSelectAnswerVoteDefinitionStored) => isLoading,
      action: actions.activateForSelectAnswerVoteDefinitionAction
        ? async (rowData) => {
            await actions.activateForSelectAnswerVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_JTH2lXr9Ee6bP4FWw7fjQA)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.closeVote', {
        defaultValue: 'closeVote',
      }) as string,
      icon: <MdiIcon path="lock-check" />,
      disabled: (row: ServiceSelectAnswerVoteDefinitionStored) => isLoading,
      action: actions.closeVoteForSelectAnswerVoteDefinitionAction
        ? async (rowData) => {
            await actions.closeVoteForSelectAnswerVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_JTH2l3r9Ee6bP4FWw7fjQA)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.deleteOrArchive', {
        defaultValue: 'deleteOrArchive',
      }) as string,
      icon: <MdiIcon path="delete" />,
      disabled: (row: ServiceSelectAnswerVoteDefinitionStored) => isLoading,
      action: actions.deleteOrArchiveForSelectAnswerVoteDefinitionAction
        ? async (rowData) => {
            await actions.deleteOrArchiveForSelectAnswerVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_JTH2k3r9Ee6bP4FWw7fjQA)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.removeFromFavorites', {
        defaultValue: 'removeFromFavorites',
      }) as string,
      icon: <MdiIcon path="star-minus" />,
      disabled: (row: ServiceSelectAnswerVoteDefinitionStored) => isLoading,
      action: actions.removeFromFavoritesForSelectAnswerVoteDefinitionAction
        ? async (rowData) => {
            await actions.removeFromFavoritesForSelectAnswerVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_0SJy11tuEe6Mx9dH3yj5gQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.vote', {
        defaultValue: 'vote',
      }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceSelectAnswerVoteDefinitionStored) => !row.userHasNoVoteEntry || isLoading,
      action: actions.voteAction
        ? async (rowData) => {
            await actions.voteAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_JTH2knr9Ee6bP4FWw7fjQA)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.addToFavorites', {
        defaultValue: 'addToFavorites',
      }) as string,
      icon: <MdiIcon path="star-plus" />,
      disabled: (row: ServiceSelectAnswerVoteDefinitionStored) => isLoading,
      action: actions.addToFavoritesForSelectAnswerVoteDefinitionAction
        ? async (rowData) => {
            await actions.addToFavoritesForSelectAnswerVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: '_WPTagI7EEe6rlbj78nBB0Q',
        attributeName: 'title',
        label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.title', {
          defaultValue: 'Title',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: '_WPTahI7EEe6rlbj78nBB0Q',
        attributeName: 'created',
        label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.created', {
          defaultValue: 'Created',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: '_WPUBk47EEe6rlbj78nBB0Q',
        attributeName: 'description',
        label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.description', {
          defaultValue: 'Description',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: '_WPUooo7EEe6rlbj78nBB0Q',
        attributeName: 'status',
        label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.status', {
          defaultValue: 'Status',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
      },

      {
        id: '_WPVPso7EEe6rlbj78nBB0Q',
        attributeName: 'closeAt',
        label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.closeAt', {
          defaultValue: 'CloseAt',
        }) as string,
        filterType: FilterType.dateTime,
      },
    ],
    [l10nLocale],
  );

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceSelectAnswerVoteDefinitionQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceSelectAnswerVoteDefinitionQueryCustomizer = {
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
    <div
      id="User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable"
      data-table-name="SelectAnswerVoteDefinition_Table"
    >
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
          ...columnsActionCalculator('User/(esm/_-b_9Un4XEe2cB7_PsKXsHQ)/ClassType', rowActions, t, {
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
            ? async (params: GridRowParams<ServiceSelectAnswerVoteDefinitionStored>) =>
                await actions.openPageAction!(params.row)
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
                  id="User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.filterAction!(
                      'User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableTableFilterButton',
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
                  {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.Table.Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.refreshAction && true ? (
                <Button
                  id="User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.refreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.Table.Refresh', {
                    defaultValue: 'Refresh',
                  })}
                </Button>
              ) : null}
              {actions.openAddSelectorAction && true ? (
                <Button
                  id="User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.openAddSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.Add', {
                    defaultValue: 'Add',
                  })}
                </Button>
              ) : null}
              {actions.openSetSelectorAction && true ? (
                <Button
                  id="User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableSetSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.openSetSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.Set', {
                    defaultValue: 'Set',
                  })}
                </Button>
              ) : null}
              {actions.clearAction && data.length ? (
                <Button
                  id="User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.clearAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.Clear', {
                    defaultValue: 'Clear',
                  })}
                </Button>
              ) : null}
              {actions.bulkRemoveAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableBulkRemoveButton"
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
                  {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.BulkRemove', {
                    defaultValue: 'Remove',
                  })}
                </Button>
              ) : null}
              {actions.bulkDeleteAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableBulkDeleteButton"
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
                  {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table.BulkDelete', {
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
