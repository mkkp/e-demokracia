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
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
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

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponentActionDefinitions {
  voteEntriesFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  voteEntriesRefreshAction?: (
    queryCustomizer: ServiceYesNoVoteEntryQueryCustomizer,
  ) => Promise<ServiceYesNoVoteEntryStored[]>;
  voteEntriesOpenPageAction?: (row: ServiceYesNoVoteEntryStored) => Promise<void>;
}

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponentProps {
  uniqueId: string;
  actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceYesNoVoteDefinitionStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_jimiQFovEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable
// Name: voteEntries
export function ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponent(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_jimiQFovEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_jimiQFovEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceYesNoVoteEntryStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'created', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceYesNoVoteEntryQueryCustomizer>({
    _mask: '{value,created,createdBy}',
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
  const [lastItem, setLastItem] = useState<ServiceYesNoVoteEntryStored>();
  const [firstItem, setFirstItem] = useState<ServiceYesNoVoteEntryStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceYesNoVoteEntryStored[]>([]);

  const valueColumn: GridColDef<ServiceYesNoVoteEntryStored> = {
    ...baseColumnConfig,
    field: 'value',
    headerName: t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.value', {
      defaultValue: 'Value',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    sortable: false,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.YesNoVoteValue.${value}`, { defaultValue: value });
      }
    },
    description: t('judo.pages.table.column.not-sortable', { defaultValue: 'This column is not sortable.' }) as string,
  };
  const createdColumn: GridColDef<ServiceYesNoVoteEntryStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.created', {
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
  const createdByColumn: GridColDef<ServiceYesNoVoteEntryStored> = {
    ...baseColumnConfig,
    field: 'createdBy',
    headerName: t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.createdBy', {
      defaultValue: 'CreatedBy',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };

  const columns = useMemo<GridColDef<ServiceYesNoVoteEntryStored>[]>(
    () => [valueColumn, createdColumn, createdByColumn],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceYesNoVoteEntryStored>[] = [];

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_jinwYFovEe6_67aMO2jOsw)/TableColumnFilter/(discriminator/User/(esm/_jimiQFovEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'value',
        label: t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.value', {
          defaultValue: 'Value',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['YES', 'NO'],
      },

      {
        id: 'User/(esm/_jinJUFovEe6_67aMO2jOsw)/TableColumnFilter/(discriminator/User/(esm/_jimiQFovEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'created',
        label: t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.created', {
          defaultValue: 'Created',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_zorYgFowEe6_67aMO2jOsw)/TableColumnFilter/(discriminator/User/(esm/_jimiQFovEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'createdBy',
        label: t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.createdBy', {
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

    setQueryCustomizer((prevQueryCustomizer: ServiceYesNoVoteEntryQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceYesNoVoteEntryQueryCustomizer = {
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
    if (!isLoading && ownerData.__signedIdentifier) {
      setIsLoading(true);

      try {
        const res = await actions.voteEntriesRefreshAction!(processQueryCustomizer(queryCustomizer));

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
      id="User/(esm/_jimiQFovEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable"
      data-table-name="voteEntries"
    >
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[paginationModel.pageSize]}
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
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...columns,
          ...columnsActionCalculator('User/(esm/_j_gXIFojEe6_67aMO2jOsw)/RelationType', rowActions, t, {
            shownActions: 2,
          }),
        ]}
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        onRowClick={
          actions.voteEntriesOpenPageAction
            ? async (params: GridRowParams<ServiceYesNoVoteEntryStored>) =>
                await actions.voteEntriesOpenPageAction!(params.row)
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
              {actions.voteEntriesFilterAction && true ? (
                <Button
                  id="User/(esm/_jimiQFovEe6_67aMO2jOsw)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.voteEntriesFilterAction!(
                      'User/(esm/_jimiQFovEe6_67aMO2jOsw)/TabularReferenceTableFilterButton',
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
                  {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.entries.voteEntries.Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.voteEntriesRefreshAction && true ? (
                <Button
                  id="User/(esm/_jimiQFovEe6_67aMO2jOsw)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.voteEntriesRefreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.entries.voteEntries.Refresh', {
                    defaultValue: 'Refresh',
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
