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
import { MdiIcon } from '~/components';
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
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
} from '~/services/data-api';
import { useL10N } from '~/l10n/l10n-context';
import {
  getUpdatedRowsSelected,
  applyInMemoryFilters,
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

export interface ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponentActionDefinitions {
  serviceIssueCategoryIssueCategory_View_EditSubcategoriesAddOpenSelector?: () => Promise<void>;
  serviceIssueCategoryIssueCategory_View_EditSubcategoriesBulkDelete?: (
    selectedRows: ServiceIssueCategoryStored[],
  ) => Promise<DialogResult<ServiceIssueCategoryStored[]>>;
  serviceIssueCategoryIssueCategory_View_EditSubcategoriesBulkRemove?: (
    selectedRows: ServiceIssueCategoryStored[],
  ) => Promise<DialogResult<ServiceIssueCategoryStored[]>>;
  serviceIssueCategoryIssueCategory_View_EditSubcategoriesClear?: () => Promise<void>;
  serviceIssueCategoryIssueCategory_View_EditSubcategoriesCreateOpen?: () => Promise<void>;
  serviceIssueCategoryIssueCategory_View_EditSubcategoriesFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceIssueCategoryIssueCategory_View_EditSubcategoriesRefresh?: (
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ) => Promise<ServiceIssueCategoryStored[]>;
  serviceIssueCategoryIssueCategory_View_EditSubcategoriesDelete?: (
    row: ServiceIssueCategoryStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceIssueCategoryIssueCategory_View_EditSubcategoriesRemove?: (
    row: ServiceIssueCategoryStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceIssueCategoryIssueCategory_View_EditSubcategoriesView?: (row: ServiceIssueCategoryStored) => Promise<void>;
}

export interface ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponentProps {
  uniqueId: string;
  actions: ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceIssueCategory;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable
// Name: subcategories
export function ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponent(
  props: ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceIssueCategoryStored>[]>(ownerData?.subcategories || []);
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

  const columns: GridColDef<ServiceIssueCategoryStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('service.IssueCategory.IssueCategory.View.Edit.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('service.IssueCategory.IssueCategory.View.Edit.description', {
        defaultValue: 'Description',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const rowActions: TableRowAction<ServiceIssueCategoryStored>[] = [
    {
      id: 'User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceTableRowRemoveButton',
      label: t(
        'service.IssueCategory.IssueCategory.View.Edit.service::IssueCategory::IssueCategory_View_Edit::subcategories::Remove',
        { defaultValue: 'Remove' },
      ) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceIssueCategoryStored) => isLoading,
      action: actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesRemove
        ? async (rowData) => {
            await actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceTableRowDeleteButton',
      label: t(
        'service.IssueCategory.IssueCategory.View.Edit.service::IssueCategory::IssueCategory_View_Edit::subcategories::Delete',
        { defaultValue: 'Delete' },
      ) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceIssueCategoryStored) => editMode || !row.__deleteable || isLoading,
      action: actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesDelete
        ? async (rowData) => {
            await actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesDelete!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_fw8akH2GEe6V8KKnnZfChA',
      attributeName: 'title',
      label: t('service.IssueCategory.IssueCategory.View.Edit.title::Filter', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fw8alH2GEe6V8KKnnZfChA',
      attributeName: 'description',
      label: t('service.IssueCategory.IssueCategory.View.Edit.description::Filter', {
        defaultValue: 'Description',
      }) as string,
      filterType: FilterType.string,
    },
  ];

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
      return {
        ...strippedQueryCustomizer,
        _orderBy,
      };
    });
  }

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  useEffect(() => {
    const newData = applyInMemoryFilters<ServiceIssueCategoryStored>(filters, ownerData?.subcategories ?? []);
    setData(newData);
  }, [ownerData?.subcategories, filters]);

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
          ...columnsActionCalculator('User/(esm/_qT2joGksEe25ONJ3V89cVA)/RelationType', rowActions, t, {
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
          actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesView
            ? async (params: GridRowParams<ServiceIssueCategoryStored>) =>
                await actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesFilter && true ? (
                <Button
                  id="User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesFilter!(
                      'User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceTableFilterButton',
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
                    'service.IssueCategory.IssueCategory.View.Edit.service::IssueCategory::IssueCategory_View_Edit::subcategories::Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesRefresh && true ? (
                <Button
                  id="User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.IssueCategory.IssueCategory.View.Edit.service::IssueCategory::IssueCategory_View_Edit::subcategories::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesCreateOpen && true ? (
                <Button
                  id="User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesCreateOpen!();
                  }}
                  disabled={editMode || isLoading}
                >
                  {t(
                    'service.IssueCategory.IssueCategory.View.Edit.service::IssueCategory::IssueCategory_View_Edit::subcategories::Create',
                    { defaultValue: 'Create' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesAddOpenSelector!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.IssueCategory.IssueCategory.View.Edit.service::IssueCategory::IssueCategory_View_Edit::subcategories::Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesClear && data.length ? (
                <Button
                  id="User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesClear!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.IssueCategory.IssueCategory.View.Edit.service::IssueCategory::IssueCategory_View_Edit::subcategories::Clear',
                    { defaultValue: 'Clear' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesBulkRemove &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesBulkRemove!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.IssueCategory.IssueCategory.View.Edit.service::IssueCategory::IssueCategory_View_Edit::subcategories::BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesBulkDelete &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesBulkDelete!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'service.IssueCategory.IssueCategory.View.Edit.service::IssueCategory::IssueCategory_View_Edit::subcategories::BulkDelete',
                    { defaultValue: 'Delete' },
                  )}
                </Button>
              ) : null}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
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
