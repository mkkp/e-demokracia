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
import { GridLogicOperator, GridToolbarContainer, useGridApiRef } from '@mui/x-data-grid';
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
import { ComponentProxy, useTrackComponent } from '@pandino/react-hooks';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, ElementType, FC, MouseEvent, SetStateAction } from 'react';
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
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, basePageSizeOptions, baseTableConfig, filterDebounceMs } from '~/config';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type { ServicePro, ServiceProQueryCustomizer, ServiceProStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  randomUtils,
  serviceDateToUiDate,
  useErrorHandler,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, SidekickComponentProps, TableRowAction } from '~/utilities';

export interface ServiceProPro_TablePro_TableComponentActionDefinitions {
  openAddSelectorAction?: () => Promise<void>;
  bulkDeleteAction?: (selectedRows: ServiceProStored[]) => Promise<DialogResult<ServiceProStored[]>>;
  bulkRemoveAction?: (selectedRows: ServiceProStored[]) => Promise<DialogResult<ServiceProStored[]>>;
  clearAction?: () => Promise<void>;
  openCreateFormAction?: () => Promise<void>;
  exportAction?: (queryCustomizer: ServiceProQueryCustomizer) => Promise<void>;
  openSetSelectorAction?: () => Promise<void>;
  filterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  refreshAction?: (queryCustomizer: ServiceProQueryCustomizer) => Promise<JudoRestResponse<ServiceProStored[]>>;
  getMask?: () => string;
  createConArgumentAction?: (row: ServiceProStored) => Promise<void>;
  createProArgumentAction?: (row: ServiceProStored) => Promise<void>;
  deleteAction?: (row: ServiceProStored, silentMode?: boolean) => Promise<void>;
  removeAction?: (row: ServiceProStored, silentMode?: boolean) => Promise<void>;
  openPageAction?: (row: ServiceProStored, isDraft?: boolean) => Promise<void>;
  voteDownForProAction?: (row: ServiceProStored) => Promise<void>;
  voteUpForProAction?: (row: ServiceProStored) => Promise<void>;
  AdditionalToolbarButtons?: (
    data: ServiceProStored[],
    isLoading: boolean,
    selectedRows: ServiceProStored[],
    clearSelections: () => void,
  ) => Record<string, ElementType>;
}

export interface ServiceProPro_TablePro_TableComponentProps {
  uniqueId: string;
  actions: ServiceProPro_TablePro_TableComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
  validationError?: string;
}

export const SERVICE_PRO_PRO_TABLE_PRO_TABLE_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY =
  'ServiceProPro_TablePro_TableComponentSidekickComponent';

// XMIID: User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable
// Name: Pro_Table
export function ServiceProPro_TablePro_TableComponent(props: ServiceProPro_TablePro_TableComponentProps) {
  const { uniqueId, actions, refreshCounter, isOwnerLoading, isDraft, validationError } = props;
  const apiRef = useGridApiRef();
  const generatorUUIDv4 = randomUtils.getGeneratorUUIDv4();
  const sidekickComponentFilter = `(&(${OBJECTCLASS}=${CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY})(component=${SERVICE_PRO_PRO_TABLE_PRO_TABLE_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY}))`;
  const filterModelKey = `User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable-${uniqueId}-${generatorUUIDv4}-filterModel`;
  const filtersKey = `User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable-${uniqueId}-${generatorUUIDv4}-filters`;
  const rowsPerPageKey = `User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable-${uniqueId}-${generatorUUIDv4}-rowsPerPage`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceProStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'createdByName', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [rowsPerPage, setRowsPerPage] = useState<number>(getItemParsedWithDefault(rowsPerPageKey, 10));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: rowsPerPage,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceProQueryCustomizer>({
    _mask: '{created,createdByName,description,downVotes,title,upVotes}',
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
  const [lastItem, setLastItem] = useState<ServiceProStored>();
  const [firstItem, setFirstItem] = useState<ServiceProStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const SidekickComponent = useTrackComponent<FC<SidekickComponentProps<ServiceProStored>>>(sidekickComponentFilter);

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const selectedRows = useRef<ServiceProStored[]>([]);

  const createdByNameColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'createdByName',
    headerName: t('service.Pro.Pro_Table.createdByName', { defaultValue: 'CreatedByName' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const createdColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t('service.Pro.Pro_Table.created', { defaultValue: 'Created' }) as string,
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
  const descriptionColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'description',
    headerName: t('service.Pro.Pro_Table.description', { defaultValue: 'Description' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const titleColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'title',
    headerName: t('service.Pro.Pro_Table.title', { defaultValue: 'Title' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const upVotesColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'upVotes',
    headerName: t('service.Pro.Pro_Table.upVotes', { defaultValue: 'UpVotes' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 100,
    type: 'number',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
      if (value === null || value === undefined) {
        return '';
      }
      return new Intl.NumberFormat(l10nLocale).format(value);
    },
  };
  const downVotesColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'downVotes',
    headerName: t('service.Pro.Pro_Table.downVotes', { defaultValue: 'DownVotes' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 100,
    type: 'number',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
      if (value === null || value === undefined) {
        return '';
      }
      return new Intl.NumberFormat(l10nLocale).format(value);
    },
  };

  const columns = useMemo<GridColDef<ServiceProStored>[]>(
    () => [createdByNameColumn, createdColumn, descriptionColumn, titleColumn, upVotesColumn, downVotesColumn],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceProStored>[] = useMemo(
    () => [
      {
        id: 'User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableRowRemoveButton',
        label: t('judo.action.remove', { defaultValue: 'Remove' }) as string,
        icon: <MdiIcon path="link_off" />,
        isCRUD: true,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || isLoading,
        action: actions.removeAction
          ? async (rowData) => {
              await actions.removeAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableRowDeleteButton',
        label: t('judo.action.delete', { defaultValue: 'Delete' }) as string,
        icon: <MdiIcon path="delete_forever" />,
        isCRUD: true,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || !row.__deleteable || isLoading,
        action: actions.deleteAction
          ? async (rowData) => {
              await actions.deleteAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_KRUbO3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTable)',
        label: t('service.Pro.Pro_Table.createConArgument', { defaultValue: 'createConArgument' }) as string,
        icon: <MdiIcon path="chat-minus" />,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || isLoading,
        action: actions.createConArgumentAction
          ? async (rowData) => {
              await actions.createConArgumentAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_KRUbM3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTable)',
        label: t('service.Pro.Pro_Table.createProArgument', { defaultValue: 'createProArgument' }) as string,
        icon: <MdiIcon path="chat-plus" />,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || isLoading,
        action: actions.createProArgumentAction
          ? async (rowData) => {
              await actions.createProArgumentAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_ikQTwIrjEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTable)',
        label: t('service.Pro.Pro_Table.voteDown', { defaultValue: 'voteDown' }) as string,
        icon: <MdiIcon path="thumb-down" />,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || isLoading,
        action: actions.voteDownForProAction
          ? async (rowData) => {
              await actions.voteDownForProAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_ikPssIrjEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTable)',
        label: t('service.Pro.Pro_Table.voteUp', { defaultValue: 'voteUp' }) as string,
        icon: <MdiIcon path="thumb-up" />,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || isLoading,
        action: actions.voteUpForProAction
          ? async (rowData) => {
              await actions.voteUpForProAction!(rowData);
            }
          : undefined,
      },
    ],
    [actions, isLoading],
  );

  const effectiveTableColumns = useMemo(() => {
    const cols = [
      ...columns,
      ...columnsActionCalculator('User/(esm/_qLFCImksEe25ONJ3V89cVA)/ClassType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ];
    return cols;
  }, [columns, rowActions]);

  const getRowIdentifier: (row: Pick<ServiceProStored, '__identifier'>) => string = (row) => row.__identifier!;

  const getSelectedRows: () => ServiceProStored[] = () => {
    return selectedRows.current;
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
    setItemStringified(rowsPerPageKey, newValue);
    setPage(0);

    setQueryCustomizer((prevQueryCustomizer: ServiceProQueryCustomizer) => {
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
        id: 'User/(esm/_C9hIwG5WEe2wNaja8kBvcQ)/TableColumnFilter/(discriminator/User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable)',
        attributeName: 'createdByName',
        label: t('service.Pro.Pro_Table.createdByName', { defaultValue: 'CreatedByName' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_3n0-AH4bEe2j59SYy0JH0Q)/TableColumnFilter/(discriminator/User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable)',
        attributeName: 'created',
        label: t('service.Pro.Pro_Table.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_3n_WEH4bEe2j59SYy0JH0Q)/TableColumnFilter/(discriminator/User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable)',
        attributeName: 'description',
        label: t('service.Pro.Pro_Table.description', { defaultValue: 'Description' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_3oKVMH4bEe2j59SYy0JH0Q)/TableColumnFilter/(discriminator/User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable)',
        attributeName: 'title',
        label: t('service.Pro.Pro_Table.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_eJb8QIfYEe2u0fVmwtP5bA)/TableColumnFilter/(discriminator/User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable)',
        attributeName: 'upVotes',
        label: t('service.Pro.Pro_Table.upVotes', { defaultValue: 'UpVotes' }) as string,
        filterType: FilterType.numeric,
      },

      {
        id: 'User/(esm/_eJg0wIfYEe2u0fVmwtP5bA)/TableColumnFilter/(discriminator/User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable)',
        attributeName: 'downVotes',
        label: t('service.Pro.Pro_Table.downVotes', { defaultValue: 'DownVotes' }) as string,
        filterType: FilterType.numeric,
      },
    ],
    [l10nLocale],
  );

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
      const strippedQueryCustomizer: ServiceProQueryCustomizer = {
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

  const handleOnSelection = (newSelectionModel: GridRowSelectionModel) => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, newSelectionModel);
    setSelectionModel(selectedRows.current.map(getRowIdentifier));
  };

  async function fetchData() {
    setIsInternalLoading(true);

    try {
      const processedQueryCustomizer = {
        ...processQueryCustomizer(queryCustomizer),
        _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
      };
      const { data: res, headers } = await actions.refreshAction!(processedQueryCustomizer);

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

  useEffect(() => {
    fetchData();
    handleOnSelection(selectionModel);
  }, [queryCustomizer, refreshCounter]);

  return (
    <div id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable" data-table-name="Pro_Table">
      <ComponentProxy
        filter={sidekickComponentFilter}
        isLoading={isLoading}
        filters={filters}
        onFiltersChange={handleFiltersChange}
        data={data}
      />
      <StripedDataGrid
        apiRef={apiRef}
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
        disableRowSelectionOnClick
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={handleOnSelection}
        keepNonExistentRowsSelected
        onRowClick={
          actions.openPageAction
            ? async (params: GridRowParams<ServiceProStored>) => await actions.openPageAction!(params.row, false)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
        filterDebounceMs={filterDebounceMs}
        rowCount={rowsPerPage}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.filterAction && true ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.filterAction!(
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
                  {t('judo.action.filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.refreshAction && true ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                    };
                    await actions.refreshAction!(processedQueryCustomizer);
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.exportAction && true ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableExportButton"
                  startIcon={<MdiIcon path="file-export-outline" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                      _seek: undefined,
                    };
                    await actions.exportAction!(processedQueryCustomizer);
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.export', { defaultValue: 'Export' })}
                </Button>
              ) : null}
              {actions.openCreateFormAction && true ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                    };
                    await actions.openCreateFormAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.open-create-form', { defaultValue: 'Create' })}
                </Button>
              ) : null}
              {actions.openAddSelectorAction && true ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                    };
                    await actions.openAddSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.open-add-selector', { defaultValue: 'Add' })}
                </Button>
              ) : null}
              {actions.openSetSelectorAction && true ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                    };
                    await actions.openSetSelectorAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.open-set-selector', { defaultValue: 'Set' })}
                </Button>
              ) : null}
              {actions.clearAction && data.length ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                    };
                    await actions.clearAction!();
                    handleOnSelection([]);
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.clear', { defaultValue: 'Clear' })}
                </Button>
              ) : null}
              {actions.bulkRemoveAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                    };
                    const { result: bulkResult } = await actions.bulkRemoveAction!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      handleOnSelection([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.bulk-remove', { defaultValue: 'Remove' })}
                </Button>
              ) : null}
              {actions.bulkDeleteAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getMask ? actions.getMask() : queryCustomizer._mask,
                    };
                    const { result: bulkResult } = await actions.bulkDeleteAction!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      handleOnSelection([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('judo.action.bulk-delete', { defaultValue: 'Delete' })}
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
