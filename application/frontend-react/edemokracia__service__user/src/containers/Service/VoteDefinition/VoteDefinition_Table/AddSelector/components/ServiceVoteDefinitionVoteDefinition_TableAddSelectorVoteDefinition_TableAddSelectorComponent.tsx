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
import type { Dispatch, MouseEvent, SetStateAction } from 'react';
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
  numericColumnOperators,
  singleSelectColumnOperators,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type {
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
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

export interface ServiceVoteDefinitionVoteDefinition_TableAddSelectorVoteDefinition_TableAddSelectorComponentActionDefinitions {
  filterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  selectorRangeAction?: (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ) => Promise<ServiceVoteDefinitionStored[]>;
}

export interface ServiceVoteDefinitionVoteDefinition_TableAddSelectorVoteDefinition_TableAddSelectorComponentProps {
  uniqueId: string;
  actions: ServiceVoteDefinitionVoteDefinition_TableAddSelectorVoteDefinition_TableAddSelectorComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  selectionDiff: ServiceVoteDefinitionStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceVoteDefinitionStored[]>>;
  alreadySelected: ServiceVoteDefinitionStored[];
}

// XMIID: User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTable
// Name: VoteDefinition_Table::Add::Selector
export function ServiceVoteDefinitionVoteDefinition_TableAddSelectorVoteDefinition_TableAddSelectorComponent(
  props: ServiceVoteDefinitionVoteDefinition_TableAddSelectorVoteDefinition_TableAddSelectorComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, selectionDiff, setSelectionDiff, alreadySelected } =
    props;
  const filterModelKey = `User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceVoteDefinitionStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceVoteDefinitionQueryCustomizer>({
    _mask: '{voteType,title,numberOfVotes,created,status,closeAt,description}',
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
  const [lastItem, setLastItem] = useState<ServiceVoteDefinitionStored>();
  const [firstItem, setFirstItem] = useState<ServiceVoteDefinitionStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const voteTypeColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'voteType',
    headerName: t('service.VoteDefinition.VoteDefinition_Table.AddSelector.voteType', {
      defaultValue: 'VoteType',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    sortable: false,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.VoteType.${value}`, { defaultValue: value });
      }
    },
    description: t('judo.pages.table.column.not-sortable', { defaultValue: 'This column is not sortable.' }) as string,
  };
  const titleColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'title',
    headerName: t('service.VoteDefinition.VoteDefinition_Table.AddSelector.title', { defaultValue: 'Title' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const numberOfVotesColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'numberOfVotes',
    headerName: t('service.VoteDefinition.VoteDefinition_Table.AddSelector.numberOfVotes', {
      defaultValue: 'NumberOfVotes',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 100,
    type: 'number',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
      return value && new Intl.NumberFormat(l10nLocale).format(value);
    },
  };
  const createdColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t('service.VoteDefinition.VoteDefinition_Table.AddSelector.created', {
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
  const statusColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'status',
    headerName: t('service.VoteDefinition.VoteDefinition_Table.AddSelector.status', {
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
  const closeAtColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'closeAt',
    headerName: t('service.VoteDefinition.VoteDefinition_Table.AddSelector.closeAt', {
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
  const descriptionColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'description',
    headerName: t('service.VoteDefinition.VoteDefinition_Table.AddSelector.description', {
      defaultValue: 'Description',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };

  const columns = useMemo<GridColDef<ServiceVoteDefinitionStored>[]>(
    () => [
      voteTypeColumn,
      titleColumn,
      numberOfVotesColumn,
      createdColumn,
      statusColumn,
      closeAtColumn,
      descriptionColumn,
    ],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceVoteDefinitionStored>[] = [];

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_OOx5YOR9Ee20cv3f2msZXg)/TableColumnFilter/(discriminator/User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTable)',
        attributeName: 'voteType',
        label: t('service.VoteDefinition.VoteDefinition_Table.AddSelector.voteType', {
          defaultValue: 'VoteType',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['YES_NO', 'YES_NO_ABSTAIN', 'SELECT_ANSWER', 'RATE', 'NO_VOTE'],
      },

      {
        id: 'User/(esm/_T5YZsI4jEe29qs15q2b6yw)/TableColumnFilter/(discriminator/User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTable)',
        attributeName: 'title',
        label: t('service.VoteDefinition.VoteDefinition_Table.AddSelector.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_OOwEMOR9Ee20cv3f2msZXg)/TableColumnFilter/(discriminator/User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTable)',
        attributeName: 'numberOfVotes',
        label: t('service.VoteDefinition.VoteDefinition_Table.AddSelector.numberOfVotes', {
          defaultValue: 'NumberOfVotes',
        }) as string,
        filterType: FilterType.numeric,
      },

      {
        id: 'User/(esm/_T5g8kI4jEe29qs15q2b6yw)/TableColumnFilter/(discriminator/User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTable)',
        attributeName: 'created',
        label: t('service.VoteDefinition.VoteDefinition_Table.AddSelector.created', {
          defaultValue: 'Created',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_T5z3gI4jEe29qs15q2b6yw)/TableColumnFilter/(discriminator/User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTable)',
        attributeName: 'status',
        label: t('service.VoteDefinition.VoteDefinition_Table.AddSelector.status', {
          defaultValue: 'Status',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
      },

      {
        id: 'User/(esm/_T58aYI4jEe29qs15q2b6yw)/TableColumnFilter/(discriminator/User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTable)',
        attributeName: 'closeAt',
        label: t('service.VoteDefinition.VoteDefinition_Table.AddSelector.closeAt', {
          defaultValue: 'CloseAt',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_T5o4YI4jEe29qs15q2b6yw)/TableColumnFilter/(discriminator/User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTable)',
        attributeName: 'description',
        label: t('service.VoteDefinition.VoteDefinition_Table.AddSelector.description', {
          defaultValue: 'Description',
        }) as string,
        filterType: FilterType.string,
      },
    ],
    [l10nLocale],
  );

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceVoteDefinitionQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceVoteDefinitionQueryCustomizer = {
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

  const handleIsRowSelectable = useCallback(
    (params: GridRowParams<ServiceVoteDefinitionStored & { __selected?: boolean }>) => {
      return isRowSelectable(params.row, !true, alreadySelected);
    },
    [],
  );

  const handleOnSelection = (newSelectionModel: GridRowSelectionModel) => {
    if (!Array.isArray(selectionModel)) return;
    // added new items
    if (newSelectionModel.length > selectionModel.length) {
      const diff = newSelectionModel.length - selectionModel.length;
      const newItemsId = [...newSelectionModel].slice(diff * -1);
      const newItems = data.filter((value) => newItemsId.indexOf(value.__identifier as GridRowId) !== -1);
      setSelectionDiff((prevSelectedItems: ServiceVoteDefinitionStored[]) => {
        if (!Array.isArray(prevSelectedItems)) return [];

        return [...prevSelectedItems, ...newItems];
      });
    }

    // removed items
    if (newSelectionModel.length < selectionModel.length) {
      const removedItemsId = selectionModel.filter((value) => newSelectionModel.indexOf(value) === -1);
      setSelectionDiff((prevSelectedItems: ServiceVoteDefinitionStored[]) => {
        if (!Array.isArray(prevSelectedItems)) return [];

        return [...prevSelectedItems.filter((value) => removedItemsId.indexOf(value.__identifier as GridRowId) === -1)];
      });
    }

    setSelectionModel(newSelectionModel);
  };

  async function fetchData() {
    if (!isLoading) {
      setIsLoading(true);

      try {
        const res = await actions.selectorRangeAction!(processQueryCustomizer(queryCustomizer));

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
      id="User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTable"
      data-table-name="VoteDefinition_Table::Add::Selector"
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
          ...columnsActionCalculator('User/(esm/_-f-eY34XEe2cB7_PsKXsHQ)/ClassType', rowActions, t, {
            shownActions: 2,
          }),
        ]}
        disableRowSelectionOnClick
        isRowSelectable={handleIsRowSelectable}
        hideFooterSelectedRowCount={!true}
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
        rowCount={10}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.filterAction && true ? (
                <Button
                  id="User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.filterAction!(
                      'User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTableFilterButton',
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
                  {t('service.VoteDefinition.VoteDefinition_Table.Table.Filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.selectorRangeAction && true ? (
                <Button
                  id="User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.selectorRangeAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.VoteDefinition.VoteDefinition_Table.Table.Refresh', { defaultValue: 'Refresh' })}
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