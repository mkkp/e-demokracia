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
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteEntryStored,
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

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponentActionDefinitions {
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesAddOpenSelector?: () => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesBulkDelete?: (
    selectedRows: ServiceSelectAnswerVoteEntryStored[],
  ) => Promise<DialogResult<ServiceSelectAnswerVoteEntryStored[]>>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesBulkRemove?: (
    selectedRows: ServiceSelectAnswerVoteEntryStored[],
  ) => Promise<DialogResult<ServiceSelectAnswerVoteEntryStored[]>>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesClear?: () => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesCreateOpen?: () => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesRefresh?: (
    queryCustomizer: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ) => Promise<ServiceSelectAnswerVoteEntryStored[]>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesDelete?: (
    row: ServiceSelectAnswerVoteEntryStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesRemove?: (
    row: ServiceSelectAnswerVoteEntryStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesView?: (
    row: ServiceSelectAnswerVoteEntryStored,
  ) => Promise<void>;
}

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponentProps {
  uniqueId: string;
  actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceSelectAnswerVoteDefinition;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable
// Name: voteEntries
export function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponent(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceSelectAnswerVoteEntryStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'created', sort: 'asc' }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceSelectAnswerVoteEntryQueryCustomizer>({
    _mask: '{created,createdBy,valueRepresentation}',
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
  const [lastItem, setLastItem] = useState<ServiceSelectAnswerVoteEntryStored>();
  const [firstItem, setFirstItem] = useState<ServiceSelectAnswerVoteEntryStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceSelectAnswerVoteEntryStored[]>([]);

  const columns: GridColDef<ServiceSelectAnswerVoteEntryStored>[] = [
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.created', {
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
      field: 'createdBy',
      headerName: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.createdBy', {
        defaultValue: 'CreatedBy',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'valueRepresentation',
      headerName: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.valueRepresentation', {
        defaultValue: 'ValueRepresentation',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const rowActions: TableRowAction<ServiceSelectAnswerVoteEntryStored>[] = [
    {
      id: 'User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceTableRowRemoveButton',
      label: t(
        'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::entries::voteEntries::Remove',
        { defaultValue: 'Remove' },
      ) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceSelectAnswerVoteEntryStored) => isLoading,
      action: actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesRemove
        ? async (rowData) => {
            await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesRemove!(
              rowData,
            );
          }
        : undefined,
    },
    {
      id: 'User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceTableRowDeleteButton',
      label: t(
        'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::entries::voteEntries::Delete',
        { defaultValue: 'Delete' },
      ) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceSelectAnswerVoteEntryStored) => editMode || !row.__deleteable || isLoading,
      action: actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesDelete
        ? async (rowData) => {
            await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesDelete!(
              rowData,
            );
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_fzweAn2GEe6V8KKnnZfChA',
      attributeName: 'created',
      label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.created::Filter', {
        defaultValue: 'Created',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: '_fzxFEn2GEe6V8KKnnZfChA',
      attributeName: 'createdBy',
      label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.createdBy::Filter', {
        defaultValue: 'CreatedBy',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fzxsIX2GEe6V8KKnnZfChA',
      attributeName: 'valueRepresentation',
      label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.valueRepresentation::Filter', {
        defaultValue: 'ValueRepresentation',
      }) as string,
      filterType: FilterType.string,
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceSelectAnswerVoteEntryQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceSelectAnswerVoteEntryQueryCustomizer = {
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
        const res =
          await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesRefresh!(
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
          ...columnsActionCalculator('User/(esm/_AXx6IFtqEe6Mx9dH3yj5gQ)/RelationType', rowActions, t, {
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
          actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesView
            ? async (params: GridRowParams<ServiceSelectAnswerVoteEntryStored>) =>
                await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesView!(
                  params.row,
                )
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesFilter &&
              true ? (
                <Button
                  id="User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults =
                      await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesFilter!(
                        'User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceTableFilterButton',
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
                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::entries::voteEntries::Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesRefresh &&
              true ? (
                <Button
                  id="User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::entries::voteEntries::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesCreateOpen &&
              true ? (
                <Button
                  id="User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesCreateOpen!();
                  }}
                  disabled={editMode || isLoading}
                >
                  {t(
                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::entries::voteEntries::Create',
                    { defaultValue: 'Create' },
                  )}
                </Button>
              ) : null}
              {actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesAddOpenSelector &&
              true ? (
                <Button
                  id="User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesAddOpenSelector!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::entries::voteEntries::Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesClear &&
              data.length ? (
                <Button
                  id="User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesClear!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::entries::voteEntries::Clear',
                    { defaultValue: 'Clear' },
                  )}
                </Button>
              ) : null}
              {actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesBulkRemove &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesBulkRemove!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::entries::voteEntries::BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesBulkDelete &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesBulkDelete!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::entries::voteEntries::BulkDelete',
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
