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
import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomTablePagination, MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import {
  ContextMenu,
  StripedDataGrid,
  columnsActionCalculator,
  dateTimeColumnOperators,
  singleSelectColumnOperators,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type {
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  serviceDateToUiDate,
  useErrorHandler,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, TableRowAction } from '~/utilities';

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableYesNoAbstainVoteDefinition_TableComponentActionDefinitions {
  openAddSelectorAction?: () => Promise<void>;
  bulkDeleteAction?: (
    selectedRows: ServiceYesNoAbstainVoteDefinitionStored[],
  ) => Promise<DialogResult<ServiceYesNoAbstainVoteDefinitionStored[]>>;
  bulkRemoveAction?: (
    selectedRows: ServiceYesNoAbstainVoteDefinitionStored[],
  ) => Promise<DialogResult<ServiceYesNoAbstainVoteDefinitionStored[]>>;
  clearAction?: () => Promise<void>;
  openSetSelectorAction?: () => Promise<void>;
  filterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  refreshAction?: (
    queryCustomizer: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ) => Promise<ServiceYesNoAbstainVoteDefinitionStored[]>;
  activateForYesNoAbstainVoteDefinitionAction?: (row: ServiceYesNoAbstainVoteDefinitionStored) => Promise<void>;
  addToFavoritesForYesNoAbstainVoteDefinitionAction?: (row: ServiceYesNoAbstainVoteDefinitionStored) => Promise<void>;
  closeVoteForYesNoAbstainVoteDefinitionAction?: (row: ServiceYesNoAbstainVoteDefinitionStored) => Promise<void>;
  deleteOrArchiveForYesNoAbstainVoteDefinitionAction?: (row: ServiceYesNoAbstainVoteDefinitionStored) => Promise<void>;
  removeFromFavoritesForYesNoAbstainVoteDefinitionAction?: (
    row: ServiceYesNoAbstainVoteDefinitionStored,
  ) => Promise<void>;
  deleteAction?: (row: ServiceYesNoAbstainVoteDefinitionStored, silentMode?: boolean) => Promise<void>;
  removeAction?: (row: ServiceYesNoAbstainVoteDefinitionStored, silentMode?: boolean) => Promise<void>;
  openPageAction?: (row: ServiceYesNoAbstainVoteDefinitionStored) => Promise<void>;
  takeBackVoteForYesNoAbstainVoteDefinitionAction?: (row: ServiceYesNoAbstainVoteDefinitionStored) => Promise<void>;
  voteAction?: (row: ServiceYesNoAbstainVoteDefinitionStored) => Promise<void>;
}

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableYesNoAbstainVoteDefinition_TableComponentProps {
  uniqueId: string;
  actions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableYesNoAbstainVoteDefinition_TableComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
}

// XMIID: User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable
// Name: YesNoAbstainVoteDefinition_Table
export function ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableYesNoAbstainVoteDefinition_TableComponent(
  props: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableYesNoAbstainVoteDefinition_TableComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError } = props;
  const filterModelKey = `User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceYesNoAbstainVoteDefinitionStored>[]>([]);
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
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceYesNoAbstainVoteDefinitionQueryCustomizer>({
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
  const [lastItem, setLastItem] = useState<ServiceYesNoAbstainVoteDefinitionStored>();
  const [firstItem, setFirstItem] = useState<ServiceYesNoAbstainVoteDefinitionStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceYesNoAbstainVoteDefinitionStored[]>([]);

  const titleColumn: GridColDef<ServiceYesNoAbstainVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'title',
    headerName: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.title', {
      defaultValue: 'Title',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const createdColumn: GridColDef<ServiceYesNoAbstainVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.created', {
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
  };
  const descriptionColumn: GridColDef<ServiceYesNoAbstainVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'description',
    headerName: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.description', {
      defaultValue: 'Description',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const statusColumn: GridColDef<ServiceYesNoAbstainVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'status',
    headerName: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.status', {
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
    description: t('judo.pages.table.column.not-sortable', { defaultValue: 'This column is not sortable.' }) as string,
  };
  const closeAtColumn: GridColDef<ServiceYesNoAbstainVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'closeAt',
    headerName: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.closeAt', {
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
  };

  const columns = useMemo<GridColDef<ServiceYesNoAbstainVoteDefinitionStored>[]>(
    () => [titleColumn, createdColumn, descriptionColumn, statusColumn, closeAtColumn],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceYesNoAbstainVoteDefinitionStored>[] = [
    {
      id: 'User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableRowRemoveButton',
      label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.Remove', {
        defaultValue: 'Remove',
      }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceYesNoAbstainVoteDefinitionStored) => isLoading,
      action: actions.removeAction
        ? async (rowData) => {
            await actions.removeAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableRowDeleteButton',
      label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.Delete', {
        defaultValue: 'Delete',
      }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceYesNoAbstainVoteDefinitionStored) => !row.__deleteable || isLoading,
      action: actions.deleteAction
        ? async (rowData) => {
            await actions.deleteAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_9jf_BXsCEe6bP4FWw7fjQA)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.activate', {
        defaultValue: 'activate',
      }) as string,
      icon: <MdiIcon path="lock-open" />,
      disabled: (row: ServiceYesNoAbstainVoteDefinitionStored) => isLoading,
      action: actions.activateForYesNoAbstainVoteDefinitionAction
        ? async (rowData) => {
            await actions.activateForYesNoAbstainVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_9jf_AnsCEe6bP4FWw7fjQA)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.addToFavorites', {
        defaultValue: 'addToFavorites',
      }) as string,
      icon: <MdiIcon path="star-plus" />,
      disabled: (row: ServiceYesNoAbstainVoteDefinitionStored) => isLoading,
      action: actions.addToFavoritesForYesNoAbstainVoteDefinitionAction
        ? async (rowData) => {
            await actions.addToFavoritesForYesNoAbstainVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_9jf_BHsCEe6bP4FWw7fjQA)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.closeVote', {
        defaultValue: 'closeVote',
      }) as string,
      icon: <MdiIcon path="lock-check" />,
      disabled: (row: ServiceYesNoAbstainVoteDefinitionStored) => isLoading,
      action: actions.closeVoteForYesNoAbstainVoteDefinitionAction
        ? async (rowData) => {
            await actions.closeVoteForYesNoAbstainVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_9jf_BnsCEe6bP4FWw7fjQA)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.deleteOrArchive', {
        defaultValue: 'deleteOrArchive',
      }) as string,
      icon: <MdiIcon path="delete" />,
      disabled: (row: ServiceYesNoAbstainVoteDefinitionStored) => isLoading,
      action: actions.deleteOrArchiveForYesNoAbstainVoteDefinitionAction
        ? async (rowData) => {
            await actions.deleteOrArchiveForYesNoAbstainVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_9jf_A3sCEe6bP4FWw7fjQA)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.removeFromFavorites', {
        defaultValue: 'removeFromFavorites',
      }) as string,
      icon: <MdiIcon path="star-minus" />,
      disabled: (row: ServiceYesNoAbstainVoteDefinitionStored) => isLoading,
      action: actions.removeFromFavoritesForYesNoAbstainVoteDefinitionAction
        ? async (rowData) => {
            await actions.removeFromFavoritesForYesNoAbstainVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_7M-IN1snEe6Mx9dH3yj5gQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.takeBackVote', {
        defaultValue: 'takeBackVote',
      }) as string,
      icon: <MdiIcon path="delete" />,
      disabled: (row: ServiceYesNoAbstainVoteDefinitionStored) => !row.userHasVoteEntry || isLoading,
      action: actions.takeBackVoteForYesNoAbstainVoteDefinitionAction
        ? async (rowData) => {
            await actions.takeBackVoteForYesNoAbstainVoteDefinitionAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_7M-IPFsnEe6Mx9dH3yj5gQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTable)',
      label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.vote', {
        defaultValue: 'vote',
      }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceYesNoAbstainVoteDefinitionStored) => !row.userHasNoVoteEntry || isLoading,
      action: actions.voteAction
        ? async (rowData) => {
            await actions.voteAction!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_A9IOIIXrEe2kLcMqsIbMgQ)/TableColumnFilter/(discriminator/User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable)',
        attributeName: 'title',
        label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.title', {
          defaultValue: 'Title',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_A9Ys0IXrEe2kLcMqsIbMgQ)/TableColumnFilter/(discriminator/User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable)',
        attributeName: 'created',
        label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.created', {
          defaultValue: 'Created',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_A95DIIXrEe2kLcMqsIbMgQ)/TableColumnFilter/(discriminator/User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable)',
        attributeName: 'description',
        label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.description', {
          defaultValue: 'Description',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_A-I6wIXrEe2kLcMqsIbMgQ)/TableColumnFilter/(discriminator/User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable)',
        attributeName: 'status',
        label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.status', {
          defaultValue: 'Status',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
      },

      {
        id: 'User/(esm/_A-b1sIXrEe2kLcMqsIbMgQ)/TableColumnFilter/(discriminator/User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable)',
        attributeName: 'closeAt',
        label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.closeAt', {
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

    setQueryCustomizer((prevQueryCustomizer: ServiceYesNoAbstainVoteDefinitionQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceYesNoAbstainVoteDefinitionQueryCustomizer = {
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
          limit: 10 + 1,
        },
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
      id="User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable"
      data-table-name="YesNoAbstainVoteDefinition_Table"
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
          ...columnsActionCalculator('User/(esm/_-apScX4XEe2cB7_PsKXsHQ)/ClassType', rowActions, t, {
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
            ? async (params: GridRowParams<ServiceYesNoAbstainVoteDefinitionStored>) =>
                await actions.openPageAction!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
        rowCount={10}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.filterAction && true ? (
                <Button
                  id="User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.filterAction!(
                      'User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableTableFilterButton',
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
                  {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.Table.Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.refreshAction && true ? (
                <Button
                  id="User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.refreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.Table.Refresh', {
                    defaultValue: 'Refresh',
                  })}
                </Button>
              ) : null}
              {actions.openAddSelectorAction && true ? (
                <Button
                  id="User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.openAddSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.Add', {
                    defaultValue: 'Add',
                  })}
                </Button>
              ) : null}
              {actions.openSetSelectorAction && true ? (
                <Button
                  id="User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableSetSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.openSetSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.Set', {
                    defaultValue: 'Set',
                  })}
                </Button>
              ) : null}
              {actions.clearAction && data.length ? (
                <Button
                  id="User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.clearAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.Clear', {
                    defaultValue: 'Clear',
                  })}
                </Button>
              ) : null}
              {actions.bulkRemoveAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableBulkRemoveButton"
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
                  {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.BulkRemove', {
                    defaultValue: 'Remove',
                  })}
                </Button>
              ) : null}
              {actions.bulkDeleteAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableBulkDeleteButton"
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
                  {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table.BulkDelete', {
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
