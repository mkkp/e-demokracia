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
  singleSelectColumnOperators,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, basePageSizeOptions, baseTableConfig, filterDebounceMs } from '~/config';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type {
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntryStored,
} from '~/services/data-api';
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

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponentActionDefinitions {
  voteEntriesFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  voteEntriesRefreshAction?: (
    queryCustomizer: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ) => Promise<JudoRestResponse<ServiceYesNoAbstainVoteEntryStored[]>>;
  getVoteEntriesMask?: () => string;
  voteEntriesOpenPageAction?: (row: ServiceYesNoAbstainVoteEntryStored, isDraft?: boolean) => Promise<void>;
  voteEntriesAdditionalToolbarButtons?: (
    data: ServiceYesNoAbstainVoteEntryStored[],
    isLoading: boolean,
    selectedRows: ServiceYesNoAbstainVoteEntryStored[],
    clearSelections: () => void,
    ownerData: ServiceYesNoAbstainVoteDefinitionStored,
    editMode: boolean,
    isFormUpdateable: () => boolean,
  ) => Record<string, ElementType>;
}

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponentProps {
  uniqueId: string;
  actions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
  validationError?: string;
  ownerData: ServiceYesNoAbstainVoteDefinitionStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

export const SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_YES_NO_ABSTAIN_VOTE_DEFINITION_VIEW_EDIT_VOTE_ENTRIES_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY =
  'ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponentSidekickComponent';

// XMIID: User/(esm/_7M-IPlsnEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable
// Name: voteEntries
export function ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponent(
  props: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponentProps,
) {
  const {
    uniqueId,
    actions,
    refreshCounter,
    isOwnerLoading,
    isDraft,
    validationError,
    ownerData,
    editMode,
    isFormUpdateable,
  } = props;
  const apiRef = useGridApiRef();
  const generatorUUIDv4 = randomUtils.getGeneratorUUIDv4();
  const sidekickComponentFilter = `(&(${OBJECTCLASS}=${CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY})(component=${SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_YES_NO_ABSTAIN_VOTE_DEFINITION_VIEW_EDIT_VOTE_ENTRIES_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY}))`;
  const filterModelKey = `User/(esm/_7M-IPlsnEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-filterModel`;
  const filtersKey = `User/(esm/_7M-IPlsnEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-filters`;
  const rowsPerPageKey = `User/(esm/_7M-IPlsnEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-rowsPerPage`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceYesNoAbstainVoteEntryStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'value', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [rowsPerPage, setRowsPerPage] = useState<number>(getItemParsedWithDefault(rowsPerPageKey, 10));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: rowsPerPage,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceYesNoAbstainVoteEntryQueryCustomizer>({
    _mask: '{created,createdBy,value}',
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
  const [lastItem, setLastItem] = useState<ServiceYesNoAbstainVoteEntryStored>();
  const [firstItem, setFirstItem] = useState<ServiceYesNoAbstainVoteEntryStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const SidekickComponent =
    useTrackComponent<FC<SidekickComponentProps<ServiceYesNoAbstainVoteEntryStored>>>(sidekickComponentFilter);

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const selectedRows = useRef<ServiceYesNoAbstainVoteEntryStored[]>([]);

  const valueColumn: GridColDef<ServiceYesNoAbstainVoteEntryStored> = {
    ...baseColumnConfig,
    field: 'value',
    headerName: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.voteEntries.value', {
      defaultValue: 'Value',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.YesNoAbstainVoteValue.${value}`, { defaultValue: value });
      }
    },
  };
  const createdColumn: GridColDef<ServiceYesNoAbstainVoteEntryStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.voteEntries.created', {
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
  const createdByColumn: GridColDef<ServiceYesNoAbstainVoteEntryStored> = {
    ...baseColumnConfig,
    field: 'createdBy',
    headerName: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.voteEntries.createdBy', {
      defaultValue: 'CreatedBy',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };

  const columns = useMemo<GridColDef<ServiceYesNoAbstainVoteEntryStored>[]>(
    () => [valueColumn, createdColumn, createdByColumn],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceYesNoAbstainVoteEntryStored>[] = useMemo(() => [], [actions, isLoading]);

  const effectiveTableColumns = useMemo(() => {
    const cols = [
      ...columns,
      ...columnsActionCalculator('User/(esm/_-O5k4FsjEe6Mx9dH3yj5gQ)/RelationType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ];
    return cols;
  }, [columns, rowActions]);

  const getRowIdentifier: (row: Pick<ServiceYesNoAbstainVoteEntryStored, '__identifier'>) => string = (row) =>
    row.__identifier!;

  const getSelectedRows: () => ServiceYesNoAbstainVoteEntryStored[] = () => {
    return [];
  };

  const clearSelections = () => {
    handleOnSelection([]);
  };

  const additionalToolbarActions: Record<string, ElementType> = actions?.voteEntriesAdditionalToolbarButtons
    ? actions.voteEntriesAdditionalToolbarButtons(
        data,
        isLoading,
        getSelectedRows(),
        clearSelections,
        ownerData,
        editMode,
        isFormUpdateable,
      )
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

    setQueryCustomizer((prevQueryCustomizer: ServiceYesNoAbstainVoteEntryQueryCustomizer) => {
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
        id: 'User/(esm/_7M-IP1snEe6Mx9dH3yj5gQ)/TableColumnFilter/(discriminator/User/(esm/_7M-IPlsnEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'value',
        label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.value', {
          defaultValue: 'Value',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['YES', 'NO', 'ABSTAIN'],
      },

      {
        id: 'User/(esm/_7M-IQFsnEe6Mx9dH3yj5gQ)/TableColumnFilter/(discriminator/User/(esm/_7M-IPlsnEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'created',
        label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.created', {
          defaultValue: 'Created',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_7M-IQVsnEe6Mx9dH3yj5gQ)/TableColumnFilter/(discriminator/User/(esm/_7M-IPlsnEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'createdBy',
        label: t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.createdBy', {
          defaultValue: 'CreatedBy',
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

    setQueryCustomizer((prevQueryCustomizer: ServiceYesNoAbstainVoteEntryQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceYesNoAbstainVoteEntryQueryCustomizer = {
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
    if (ownerData.__signedIdentifier) {
      setIsInternalLoading(true);

      try {
        const processedQueryCustomizer = {
          ...processQueryCustomizer(queryCustomizer),
          _mask: actions.getVoteEntriesMask ? actions.getVoteEntriesMask() : queryCustomizer._mask,
        };
        const { data: res, headers } = await actions.voteEntriesRefreshAction!(processedQueryCustomizer);

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
      id="User/(esm/_7M-IPlsnEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable"
      data-table-name="voteEntries"
    >
      <ComponentProxy
        filter={sidekickComponentFilter}
        editMode={editMode}
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
          border: (theme) => (validationError ? `2px solid ${theme.palette.error.main}` : undefined),
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
        keepNonExistentRowsSelected
        onRowClick={
          actions.voteEntriesOpenPageAction
            ? async (params: GridRowParams<ServiceYesNoAbstainVoteEntryStored>) =>
                await actions.voteEntriesOpenPageAction!(params.row, false)
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
              {actions.voteEntriesFilterAction && true ? (
                <Button
                  id="User/(esm/_7M-IPlsnEe6Mx9dH3yj5gQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.voteEntriesFilterAction!(
                      'User/(esm/_7M-IPlsnEe6Mx9dH3yj5gQ)/TabularReferenceTableFilterButton',
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
              {actions.voteEntriesRefreshAction && true ? (
                <Button
                  id="User/(esm/_7M-IPlsnEe6Mx9dH3yj5gQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getVoteEntriesMask ? actions.getVoteEntriesMask() : queryCustomizer._mask,
                    };
                    await actions.voteEntriesRefreshAction!(processedQueryCustomizer);
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.refresh', { defaultValue: 'Refresh' })}
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
