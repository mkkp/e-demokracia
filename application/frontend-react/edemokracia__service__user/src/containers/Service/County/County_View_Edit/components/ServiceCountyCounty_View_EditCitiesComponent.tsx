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
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyStored,
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

export interface ServiceCountyCounty_View_EditCitiesComponentActionDefinitions {
  serviceCountyCounty_View_EditCitiesAddOpenSelector?: () => Promise<void>;
  serviceCountyCounty_View_EditCitiesBulkDelete?: (
    selectedRows: ServiceCityStored[],
  ) => Promise<DialogResult<ServiceCityStored[]>>;
  serviceCountyCounty_View_EditCitiesBulkRemove?: (
    selectedRows: ServiceCityStored[],
  ) => Promise<DialogResult<ServiceCityStored[]>>;
  serviceCountyCounty_View_EditCitiesClear?: () => Promise<void>;
  serviceCountyCounty_View_EditCitiesCreateOpen?: () => Promise<void>;
  serviceCountyCounty_View_EditCitiesFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceCountyCounty_View_EditCitiesRefresh?: (
    queryCustomizer: ServiceCityQueryCustomizer,
  ) => Promise<ServiceCityStored[]>;
  serviceCountyCounty_View_EditCitiesDelete?: (row: ServiceCityStored, silentMode?: boolean) => Promise<void>;
  serviceCountyCounty_View_EditCitiesRemove?: (row: ServiceCityStored, silentMode?: boolean) => Promise<void>;
  serviceCountyCounty_View_EditCitiesView?: (row: ServiceCityStored) => Promise<void>;
}

export interface ServiceCountyCounty_View_EditCitiesComponentProps {
  uniqueId: string;
  actions: ServiceCountyCounty_View_EditCitiesComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceCounty;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable
// Name: cities
export function ServiceCountyCounty_View_EditCitiesComponent(props: ServiceCountyCounty_View_EditCitiesComponentProps) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceCityStored>[]>(ownerData?.cities || []);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'name', sort: 'asc' }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceCityQueryCustomizer>({
    _mask: '{name}',
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

  const selectedRows = useRef<ServiceCityStored[]>([]);

  const columns: GridColDef<ServiceCityStored>[] = [
    {
      ...baseColumnConfig,
      field: 'name',
      headerName: t('service.County.County.View.Edit.name', { defaultValue: 'Name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const rowActions: TableRowAction<ServiceCityStored>[] = [
    {
      id: 'User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/TabularReferenceTableRowRemoveButton',
      label: t('service.County.County.View.Edit.service::County::County_View_Edit::cities::Remove', {
        defaultValue: 'Remove',
      }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceCityStored) => isLoading,
      action: actions.serviceCountyCounty_View_EditCitiesRemove
        ? async (rowData) => {
            await actions.serviceCountyCounty_View_EditCitiesRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/TabularReferenceTableRowDeleteButton',
      label: t('service.County.County.View.Edit.service::County::County_View_Edit::cities::Delete', {
        defaultValue: 'Delete',
      }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceCityStored) => editMode || !row.__deleteable || isLoading,
      action: actions.serviceCountyCounty_View_EditCitiesDelete
        ? async (rowData) => {
            await actions.serviceCountyCounty_View_EditCitiesDelete!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_ftMjAH2GEe6V8KKnnZfChA',
      attributeName: 'name',
      label: t('service.County.County.View.Edit.name::Filter', { defaultValue: 'Name' }) as string,
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

    setQueryCustomizer((prevQueryCustomizer: ServiceCityQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceCityQueryCustomizer = {
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
    const newData = applyInMemoryFilters<ServiceCityStored>(filters, ownerData?.cities ?? []);
    setData(newData);
  }, [ownerData?.cities, filters]);

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
          ...columnsActionCalculator('User/(esm/_23Z_YH2nEe27Ga2Ojs4Fgg)/RelationType', rowActions, t, {
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
          actions.serviceCountyCounty_View_EditCitiesView
            ? async (params: GridRowParams<ServiceCityStored>) =>
                await actions.serviceCountyCounty_View_EditCitiesView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceCountyCounty_View_EditCitiesFilter && true ? (
                <Button
                  id="User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.serviceCountyCounty_View_EditCitiesFilter!(
                      'User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/TabularReferenceTableFilterButton',
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
                  {t('service.County.County.View.Edit.service::County::County_View_Edit::cities::Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceCountyCounty_View_EditCitiesRefresh && true ? (
                <Button
                  id="User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceCountyCounty_View_EditCitiesRefresh!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.County.County.View.Edit.service::County::County_View_Edit::cities::Refresh', {
                    defaultValue: 'Refresh',
                  })}
                </Button>
              ) : null}
              {actions.serviceCountyCounty_View_EditCitiesCreateOpen && true ? (
                <Button
                  id="User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceCountyCounty_View_EditCitiesCreateOpen!();
                  }}
                  disabled={editMode || isLoading}
                >
                  {t('service.County.County.View.Edit.service::County::County_View_Edit::cities::Create', {
                    defaultValue: 'Create',
                  })}
                </Button>
              ) : null}
              {actions.serviceCountyCounty_View_EditCitiesAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceCountyCounty_View_EditCitiesAddOpenSelector!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t('service.County.County.View.Edit.service::County::County_View_Edit::cities::Add', {
                    defaultValue: 'Add',
                  })}
                </Button>
              ) : null}
              {actions.serviceCountyCounty_View_EditCitiesClear && data.length ? (
                <Button
                  id="User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceCountyCounty_View_EditCitiesClear!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t('service.County.County.View.Edit.service::County::County_View_Edit::cities::Clear', {
                    defaultValue: 'Clear',
                  })}
                </Button>
              ) : null}
              {actions.serviceCountyCounty_View_EditCitiesBulkRemove && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceCountyCounty_View_EditCitiesBulkRemove!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('service.County.County.View.Edit.service::County::County_View_Edit::cities::BulkRemove', {
                    defaultValue: 'Remove',
                  })}
                </Button>
              ) : null}
              {actions.serviceCountyCounty_View_EditCitiesBulkDelete && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceCountyCounty_View_EditCitiesBulkDelete!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('service.County.County.View.Edit.service::County::County_View_Edit::cities::BulkDelete', {
                    defaultValue: 'Delete',
                  })}
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
