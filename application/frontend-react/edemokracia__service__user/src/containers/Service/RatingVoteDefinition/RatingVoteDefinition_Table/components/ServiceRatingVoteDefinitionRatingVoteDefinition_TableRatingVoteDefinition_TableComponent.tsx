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
  numericColumnOperators,
  singleSelectColumnOperators,
  columnsActionCalculator,
  ContextMenu,
  StripedDataGrid,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import type {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceRatingVoteDefinitionStored,
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

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_TableRatingVoteDefinition_TableComponentActionDefinitions {
  openAddSelectorAction?: () => Promise<void>;
  bulkDeleteAction?: (
    selectedRows: ServiceRatingVoteDefinitionStored[],
  ) => Promise<DialogResult<ServiceRatingVoteDefinitionStored[]>>;
  bulkRemoveAction?: (
    selectedRows: ServiceRatingVoteDefinitionStored[],
  ) => Promise<DialogResult<ServiceRatingVoteDefinitionStored[]>>;
  clearAction?: () => Promise<void>;
  openSetSelectorAction?: () => Promise<void>;
  filterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  refreshAction?: (
    queryCustomizer: ServiceRatingVoteDefinitionQueryCustomizer,
  ) => Promise<ServiceRatingVoteDefinitionStored[]>;
  activateForRatingVoteDefinitionAction?: (row: ServiceRatingVoteDefinitionStored) => Promise<void>;
  addToFavoritesForRatingVoteDefinitionAction?: (row: ServiceRatingVoteDefinitionStored) => Promise<void>;
  closeVoteForRatingVoteDefinitionAction?: (row: ServiceRatingVoteDefinitionStored) => Promise<void>;
  deleteOrArchiveForRatingVoteDefinitionAction?: (row: ServiceRatingVoteDefinitionStored) => Promise<void>;
  removeFromFavoritesForRatingVoteDefinitionAction?: (row: ServiceRatingVoteDefinitionStored) => Promise<void>;
  deleteAction?: (row: ServiceRatingVoteDefinitionStored, silentMode?: boolean) => Promise<void>;
  removeAction?: (row: ServiceRatingVoteDefinitionStored, silentMode?: boolean) => Promise<void>;
  openPageAction?: (row: ServiceRatingVoteDefinitionStored) => Promise<void>;
  takeBackVoteForRatingVoteDefinitionAction?: (row: ServiceRatingVoteDefinitionStored) => Promise<void>;
  voteAction?: (row: ServiceRatingVoteDefinitionStored) => Promise<void>;
}

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_TableRatingVoteDefinition_TableComponentProps {
  uniqueId: string;
  actions: ServiceRatingVoteDefinitionRatingVoteDefinition_TableRatingVoteDefinition_TableComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
}

// XMIID: User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable
// Name: RatingVoteDefinition_Table
export function ServiceRatingVoteDefinitionRatingVoteDefinition_TableRatingVoteDefinition_TableComponent(
  props: ServiceRatingVoteDefinitionRatingVoteDefinition_TableRatingVoteDefinition_TableComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError } = props;
  const filterModelKey = `User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceRatingVoteDefinitionStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'minRateValue', sort: 'asc' }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceRatingVoteDefinitionQueryCustomizer>({
    _mask: '{minRateValue,maxRateValue,title,created,description,status,closeAt}',
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
  const [lastItem, setLastItem] = useState<ServiceRatingVoteDefinitionStored>();
  const [firstItem, setFirstItem] = useState<ServiceRatingVoteDefinitionStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceRatingVoteDefinitionStored[]>([]);

  const columns = useMemo<GridColDef<ServiceRatingVoteDefinitionStored>[]>(
    () => [
      {
        ...baseColumnConfig,
        field: 'minRateValue',
        headerName: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.minRateValue', {
          defaultValue: 'MinRateValue',
        }) as string,
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
        field: 'maxRateValue',
        headerName: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.maxRateValue', {
          defaultValue: 'MaxRateValue',
        }) as string,
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
        field: 'title',
        headerName: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.title', {
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
        headerName: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.created', {
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
        headerName: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.description', {
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
        headerName: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.status', {
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
        headerName: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.closeAt', {
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

  const rowActions: TableRowAction<ServiceRatingVoteDefinitionStored>[] = [
    {
      id: 'User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableRowRemoveButton',
      label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.Remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceRatingVoteDefinitionStored) => isLoading,
      action: actions.removeAction
        ? async (rowData) => {
            await actions.removeAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableRowDeleteButton',
      label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.Delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceRatingVoteDefinitionStored) => !row.__deleteable || isLoading,
      action: actions.deleteAction
        ? async (rowData) => {
            await actions.deleteAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_NHnv01soEe6Mx9dH3yj5gQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.takeBackVote', {
        defaultValue: 'takeBackVote',
      }) as string,
      icon: <MdiIcon path="delete" />,
      disabled: (row: ServiceRatingVoteDefinitionStored) => !row.userHasVoteEntry || isLoading,
      action: actions.takeBackVoteForRatingVoteDefinitionAction
        ? async (rowData) => {
            await actions.takeBackVoteForRatingVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_NHnv2FsoEe6Mx9dH3yj5gQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.vote', { defaultValue: 'vote' }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceRatingVoteDefinitionStored) => !row.userHasNoVoteEntry || isLoading,
      action: actions.voteAction
        ? async (rowData) => {
            await actions.voteAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_Vd5qA3sAEe6bP4FWw7fjQA)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.removeFromFavorites', {
        defaultValue: 'removeFromFavorites',
      }) as string,
      icon: <MdiIcon path="star-minus" />,
      disabled: (row: ServiceRatingVoteDefinitionStored) => isLoading,
      action: actions.removeFromFavoritesForRatingVoteDefinitionAction
        ? async (rowData) => {
            await actions.removeFromFavoritesForRatingVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_Vd5qBXsAEe6bP4FWw7fjQA)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.activate', {
        defaultValue: 'activate',
      }) as string,
      icon: <MdiIcon path="lock-open" />,
      disabled: (row: ServiceRatingVoteDefinitionStored) => isLoading,
      action: actions.activateForRatingVoteDefinitionAction
        ? async (rowData) => {
            await actions.activateForRatingVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_Vd5qAnsAEe6bP4FWw7fjQA)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.addToFavorites', {
        defaultValue: 'addToFavorites',
      }) as string,
      icon: <MdiIcon path="star-plus" />,
      disabled: (row: ServiceRatingVoteDefinitionStored) => isLoading,
      action: actions.addToFavoritesForRatingVoteDefinitionAction
        ? async (rowData) => {
            await actions.addToFavoritesForRatingVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_Vd5qBnsAEe6bP4FWw7fjQA)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.deleteOrArchive', {
        defaultValue: 'deleteOrArchive',
      }) as string,
      icon: <MdiIcon path="delete" />,
      disabled: (row: ServiceRatingVoteDefinitionStored) => isLoading,
      action: actions.deleteOrArchiveForRatingVoteDefinitionAction
        ? async (rowData) => {
            await actions.deleteOrArchiveForRatingVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_Vd5qBHsAEe6bP4FWw7fjQA)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.closeVote', {
        defaultValue: 'closeVote',
      }) as string,
      icon: <MdiIcon path="lock-check" />,
      disabled: (row: ServiceRatingVoteDefinitionStored) => isLoading,
      action: actions.closeVoteForRatingVoteDefinitionAction
        ? async (rowData) => {
            await actions.closeVoteForRatingVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: '_WQyoQo7EEe6rlbj78nBB0Q',
        attributeName: 'minRateValue',
        label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.minRateValue', {
          defaultValue: 'MinRateValue',
        }) as string,
        filterType: FilterType.numeric,
      },

      {
        id: '_WQzPUo7EEe6rlbj78nBB0Q',
        attributeName: 'maxRateValue',
        label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.maxRateValue', {
          defaultValue: 'MaxRateValue',
        }) as string,
        filterType: FilterType.numeric,
      },

      {
        id: '_WQz2YY7EEe6rlbj78nBB0Q',
        attributeName: 'title',
        label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: '_WQ0dcI7EEe6rlbj78nBB0Q',
        attributeName: 'created',
        label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.created', {
          defaultValue: 'Created',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: '_WQ1EgI7EEe6rlbj78nBB0Q',
        attributeName: 'description',
        label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.description', {
          defaultValue: 'Description',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: '_WQ1EhI7EEe6rlbj78nBB0Q',
        attributeName: 'status',
        label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.status', {
          defaultValue: 'Status',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
      },

      {
        id: '_WQ1rko7EEe6rlbj78nBB0Q',
        attributeName: 'closeAt',
        label: t('service.RatingVoteDefinition.RatingVoteDefinition_Table.closeAt', {
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

    setQueryCustomizer((prevQueryCustomizer: ServiceRatingVoteDefinitionQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceRatingVoteDefinitionQueryCustomizer = {
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
    <div id="User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable" data-table-name="RatingVoteDefinition_Table">
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
          ...columnsActionCalculator('User/(esm/_-dYdYn4XEe2cB7_PsKXsHQ)/ClassType', rowActions, t, {
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
            ? async (params: GridRowParams<ServiceRatingVoteDefinitionStored>) =>
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
                  id="User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.filterAction!(
                      'User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableTableFilterButton',
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
                  {t('service.RatingVoteDefinition.RatingVoteDefinition_Table.Table.Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.refreshAction && true ? (
                <Button
                  id="User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.refreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.RatingVoteDefinition.RatingVoteDefinition_Table.Table.Refresh', {
                    defaultValue: 'Refresh',
                  })}
                </Button>
              ) : null}
              {actions.openAddSelectorAction && true ? (
                <Button
                  id="User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.openAddSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.RatingVoteDefinition.RatingVoteDefinition_Table.Add', { defaultValue: 'Add' })}
                </Button>
              ) : null}
              {actions.openSetSelectorAction && true ? (
                <Button
                  id="User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableSetSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.openSetSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.RatingVoteDefinition.RatingVoteDefinition_Table.Set', { defaultValue: 'Set' })}
                </Button>
              ) : null}
              {actions.clearAction && data.length ? (
                <Button
                  id="User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.clearAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.RatingVoteDefinition.RatingVoteDefinition_Table.Clear', { defaultValue: 'Clear' })}
                </Button>
              ) : null}
              {actions.bulkRemoveAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableBulkRemoveButton"
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
                  {t('service.RatingVoteDefinition.RatingVoteDefinition_Table.BulkRemove', { defaultValue: 'Remove' })}
                </Button>
              ) : null}
              {actions.bulkDeleteAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableBulkDeleteButton"
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
                  {t('service.RatingVoteDefinition.RatingVoteDefinition_Table.BulkDelete', { defaultValue: 'Delete' })}
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
