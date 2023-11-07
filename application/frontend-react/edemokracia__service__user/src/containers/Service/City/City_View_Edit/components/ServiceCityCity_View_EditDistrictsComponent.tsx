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
  ServiceCityStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
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

export interface ServiceCityCity_View_EditDistrictsComponentActionDefinitions {
  serviceCityCity_View_EditDistrictsAddOpenSelector?: () => Promise<void>;
  serviceCityCity_View_EditDistrictsBulkDelete?: (
    selectedRows: ServiceDistrictStored[],
  ) => Promise<DialogResult<ServiceDistrictStored[]>>;
  serviceCityCity_View_EditDistrictsBulkRemove?: (
    selectedRows: ServiceDistrictStored[],
  ) => Promise<DialogResult<ServiceDistrictStored[]>>;
  serviceCityCity_View_EditDistrictsClear?: () => Promise<void>;
  serviceCityCity_View_EditDistrictsCreateOpen?: () => Promise<void>;
  serviceCityCity_View_EditDistrictsFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceCityCity_View_EditDistrictsRefresh?: (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ) => Promise<ServiceDistrictStored[]>;
  serviceCityCity_View_EditDistrictsDelete?: (row: ServiceDistrictStored, silentMode?: boolean) => Promise<void>;
  serviceCityCity_View_EditDistrictsRemove?: (row: ServiceDistrictStored, silentMode?: boolean) => Promise<void>;
  serviceCityCity_View_EditDistrictsView?: (row: ServiceDistrictStored) => Promise<void>;
}

export interface ServiceCityCity_View_EditDistrictsComponentProps {
  uniqueId: string;
  actions: ServiceCityCity_View_EditDistrictsComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceCity;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_cLC8gIXhEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable
// Name: districts
export function ServiceCityCity_View_EditDistrictsComponent(props: ServiceCityCity_View_EditDistrictsComponentProps) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_cLC8gIXhEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_cLC8gIXhEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceDistrictStored>[]>(ownerData?.districts || []);
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
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceDistrictQueryCustomizer>({
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

  const selectedRows = useRef<ServiceDistrictStored[]>([]);

  const columns: GridColDef<ServiceDistrictStored>[] = [
    {
      ...baseColumnConfig,
      field: 'name',
      headerName: t('service.City.City.View.Edit.name', { defaultValue: 'Name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const rowActions: TableRowAction<ServiceDistrictStored>[] = [
    {
      id: 'User/(esm/_cLC8gIXhEe2kLcMqsIbMgQ)/TabularReferenceTableRowRemoveButton',
      label: t('service.City.City.View.Edit.service::City::City_View_Edit::districts::Remove', {
        defaultValue: 'Remove',
      }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceDistrictStored) => isLoading,
      action: actions.serviceCityCity_View_EditDistrictsRemove
        ? async (rowData) => {
            await actions.serviceCityCity_View_EditDistrictsRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_cLC8gIXhEe2kLcMqsIbMgQ)/TabularReferenceTableRowDeleteButton',
      label: t('service.City.City.View.Edit.service::City::City_View_Edit::districts::Delete', {
        defaultValue: 'Delete',
      }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceDistrictStored) => editMode || !row.__deleteable || isLoading,
      action: actions.serviceCityCity_View_EditDistrictsDelete
        ? async (rowData) => {
            await actions.serviceCityCity_View_EditDistrictsDelete!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_frpq4n2GEe6V8KKnnZfChA',
      attributeName: 'name',
      label: t('service.City.City.View.Edit.name::Filter', { defaultValue: 'Name' }) as string,
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

    setQueryCustomizer((prevQueryCustomizer: ServiceDistrictQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceDistrictQueryCustomizer = {
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
    const newData = applyInMemoryFilters<ServiceDistrictStored>(filters, ownerData?.districts ?? []);
    setData(newData);
  }, [ownerData?.districts, filters]);

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
          ...columnsActionCalculator('User/(esm/_a0XksX2iEe2LTNnGda5kaw)/RelationType', rowActions, t, {
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
          actions.serviceCityCity_View_EditDistrictsView
            ? async (params: GridRowParams<ServiceDistrictStored>) =>
                await actions.serviceCityCity_View_EditDistrictsView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceCityCity_View_EditDistrictsFilter && true ? (
                <Button
                  id="User/(esm/_cLC8gIXhEe2kLcMqsIbMgQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.serviceCityCity_View_EditDistrictsFilter!(
                      'User/(esm/_cLC8gIXhEe2kLcMqsIbMgQ)/TabularReferenceTableFilterButton',
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
                  {t('service.City.City.View.Edit.service::City::City_View_Edit::districts::Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceCityCity_View_EditDistrictsRefresh && true ? (
                <Button
                  id="User/(esm/_cLC8gIXhEe2kLcMqsIbMgQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceCityCity_View_EditDistrictsRefresh!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.City.City.View.Edit.service::City::City_View_Edit::districts::Refresh', {
                    defaultValue: 'Refresh',
                  })}
                </Button>
              ) : null}
              {actions.serviceCityCity_View_EditDistrictsCreateOpen && true ? (
                <Button
                  id="User/(esm/_cLC8gIXhEe2kLcMqsIbMgQ)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceCityCity_View_EditDistrictsCreateOpen!();
                  }}
                  disabled={editMode || isLoading}
                >
                  {t('service.City.City.View.Edit.service::City::City_View_Edit::districts::Create', {
                    defaultValue: 'Create',
                  })}
                </Button>
              ) : null}
              {actions.serviceCityCity_View_EditDistrictsAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_cLC8gIXhEe2kLcMqsIbMgQ)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceCityCity_View_EditDistrictsAddOpenSelector!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t('service.City.City.View.Edit.service::City::City_View_Edit::districts::Add', {
                    defaultValue: 'Add',
                  })}
                </Button>
              ) : null}
              {actions.serviceCityCity_View_EditDistrictsClear && data.length ? (
                <Button
                  id="User/(esm/_cLC8gIXhEe2kLcMqsIbMgQ)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceCityCity_View_EditDistrictsClear!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t('service.City.City.View.Edit.service::City::City_View_Edit::districts::Clear', {
                    defaultValue: 'Clear',
                  })}
                </Button>
              ) : null}
              {actions.serviceCityCity_View_EditDistrictsBulkRemove && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_cLC8gIXhEe2kLcMqsIbMgQ)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceCityCity_View_EditDistrictsBulkRemove!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('service.City.City.View.Edit.service::City::City_View_Edit::districts::BulkRemove', {
                    defaultValue: 'Remove',
                  })}
                </Button>
              ) : null}
              {actions.serviceCityCity_View_EditDistrictsBulkDelete && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_cLC8gIXhEe2kLcMqsIbMgQ)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceCityCity_View_EditDistrictsBulkDelete!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('service.City.City.View.Edit.service::City::City_View_Edit::districts::BulkDelete', {
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
