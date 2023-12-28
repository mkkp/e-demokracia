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
import { MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import { ContextMenu, StripedDataGrid, columnsActionCalculator } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import type {
  ServiceIssue,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceIssueStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  applyInMemoryFilters,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, TableRowAction } from '~/utilities';

export interface ServiceIssueIssue_View_EditCategoriesComponentActionDefinitions {
  categoriesOpenAddSelectorAction?: () => Promise<void>;
  categoriesBulkRemoveAction?: (
    selectedRows: ServiceIssueCategoryStored[],
  ) => Promise<DialogResult<ServiceIssueCategoryStored[]>>;
  categoriesClearAction?: () => Promise<void>;
  categoriesFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  categoriesRefreshAction?: (
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ) => Promise<ServiceIssueCategoryStored[]>;
  categoriesRemoveAction?: (row: ServiceIssueCategoryStored, silentMode?: boolean) => Promise<void>;
  categoriesOpenPageAction?: (row: ServiceIssueCategoryStored) => Promise<void>;
}

export interface ServiceIssueIssue_View_EditCategoriesComponentProps {
  uniqueId: string;
  actions: ServiceIssueIssue_View_EditCategoriesComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceIssueStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable
// Name: categories
export function ServiceIssueIssue_View_EditCategoriesComponent(
  props: ServiceIssueIssue_View_EditCategoriesComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceIssueCategoryStored>[]>(ownerData?.categories || []);
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
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceIssueCategoryQueryCustomizer>({
    _mask: '{title,description}',
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

  const selectedRows = useRef<ServiceIssueCategoryStored[]>([]);

  const titleColumn: GridColDef<ServiceIssueCategoryStored> = {
    ...baseColumnConfig,
    field: 'title',
    headerName: t('service.Issue.Issue_View_Edit.title', { defaultValue: 'Title' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const descriptionColumn: GridColDef<ServiceIssueCategoryStored> = {
    ...baseColumnConfig,
    field: 'description',
    headerName: t('service.Issue.Issue_View_Edit.description', { defaultValue: 'Description' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };

  const columns = useMemo<GridColDef<ServiceIssueCategoryStored>[]>(() => [titleColumn, descriptionColumn], []);

  const rowActions: TableRowAction<ServiceIssueCategoryStored>[] = [
    {
      id: 'User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceTableRowRemoveButton',
      label: t('service.Issue.Issue_View_Edit.other.categories.categories.Remove', {
        defaultValue: 'Remove',
      }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceIssueCategoryStored) => !isFormUpdateable() || isLoading,
      action: actions.categoriesRemoveAction
        ? async (rowData) => {
            await actions.categoriesRemoveAction!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_LRJ3AYd9Ee2kLcMqsIbMgQ)/TableColumnFilter/(discriminator/User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'title',
        label: t('service.Issue.Issue_View_Edit.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_LRJ3Aod9Ee2kLcMqsIbMgQ)/TableColumnFilter/(discriminator/User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'description',
        label: t('service.Issue.Issue_View_Edit.description', { defaultValue: 'Description' }) as string,
        filterType: FilterType.string,
      },
    ],
    [],
  );

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPaginationModel((prevState) => ({
      ...prevState,
      page: 0,
    }));
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceIssueCategoryQueryCustomizer) => {
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
    setPaginationModel((prevState) => ({
      ...prevState,
      page: 0,
    }));
    setSortModel(newModel);

    const _orderBy = newModel
      .filter((m) => m.sort)
      .map((m) => ({
        attribute: m.field,
        descending: m.sort === 'desc',
      }));

    setQueryCustomizer((prevQueryCustomizer) => {
      const strippedQueryCustomizer: ServiceIssueCategoryQueryCustomizer = {
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

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  useEffect(() => {
    const newData = applyInMemoryFilters<ServiceIssueCategoryStored>(filters, ownerData?.categories ?? []);
    setData(newData);
  }, [ownerData?.categories, filters]);

  return (
    <div id="User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable" data-table-name="categories">
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
          ...columnsActionCalculator('User/(esm/_qYyG8GksEe25ONJ3V89cVA)/RelationType', rowActions, t, {
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
          actions.categoriesOpenPageAction
            ? async (params: GridRowParams<ServiceIssueCategoryStored>) =>
                await actions.categoriesOpenPageAction!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.categoriesFilterAction && true ? (
                <Button
                  id="User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.categoriesFilterAction!(
                      'User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceTableFilterButton',
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
                  {t('service.Issue.Issue_View_Edit.other.categories.categories.Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.categoriesRefreshAction && true ? (
                <Button
                  id="User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.categoriesRefreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.Issue.Issue_View_Edit.other.categories.categories.Refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.categoriesOpenAddSelectorAction && isFormUpdateable() ? (
                <Button
                  id="User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.categoriesOpenAddSelectorAction!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t('service.Issue.Issue_View_Edit.other.categories.categories.Add', { defaultValue: 'Add' })}
                </Button>
              ) : null}
              {actions.categoriesClearAction && data.length && isFormUpdateable() ? (
                <Button
                  id="User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.categoriesClearAction!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t('service.Issue.Issue_View_Edit.other.categories.categories.Clear', { defaultValue: 'Clear' })}
                </Button>
              ) : null}
              {actions.categoriesBulkRemoveAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.categoriesBulkRemoveAction!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('service.Issue.Issue_View_Edit.other.categories.categories.BulkRemove', {
                    defaultValue: 'Remove',
                  })}
                </Button>
              ) : null}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
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
