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
  ServiceUserProfile,
  ServiceUserProfileStored,
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

export interface ServiceUserProfileUserProfile_View_EditActivityCitiesComponentActionDefinitions {
  serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddOpenSelector?: () => Promise<void>;
  serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesBulkDelete?: (
    selectedRows: ServiceCityStored[],
  ) => Promise<DialogResult<ServiceCityStored[]>>;
  serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesBulkRemove?: (
    selectedRows: ServiceCityStored[],
  ) => Promise<DialogResult<ServiceCityStored[]>>;
  serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesClear?: () => Promise<void>;
  serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesCreateOpen?: () => Promise<void>;
  serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesRefresh?: (
    queryCustomizer: ServiceCityQueryCustomizer,
  ) => Promise<ServiceCityStored[]>;
  serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesDelete?: (
    row: ServiceCityStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesRemove?: (
    row: ServiceCityStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesView?: (
    row: ServiceCityStored,
  ) => Promise<void>;
}

export interface ServiceUserProfileUserProfile_View_EditActivityCitiesComponentProps {
  uniqueId: string;
  actions: ServiceUserProfileUserProfile_View_EditActivityCitiesComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceUserProfile;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable
// Name: activityCities
export function ServiceUserProfileUserProfile_View_EditActivityCitiesComponent(
  props: ServiceUserProfileUserProfile_View_EditActivityCitiesComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceCityStored>[]>(ownerData?.activityCities || []);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'representation', sort: 'asc' }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceCityQueryCustomizer>({
    _mask: '{representation}',
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
      field: 'representation',
      headerName: t('service.UserProfile.UserProfile.View.Edit.representation', { defaultValue: 'City' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const rowActions: TableRowAction<ServiceCityStored>[] = [
    {
      id: 'User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceTableRowRemoveButton',
      label: t(
        'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::activity_cities::activityCities::Remove',
        { defaultValue: 'Remove' },
      ) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceCityStored) => isLoading,
      action: actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesRemove
        ? async (rowData) => {
            await actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesRemove!(
              rowData,
            );
          }
        : undefined,
    },
    {
      id: 'User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceTableRowDeleteButton',
      label: t(
        'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::activity_cities::activityCities::Delete',
        { defaultValue: 'Delete' },
      ) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceCityStored) => editMode || !row.__deleteable || isLoading,
      action: actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesDelete
        ? async (rowData) => {
            await actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesDelete!(
              rowData,
            );
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_f8hYcH2GEe6V8KKnnZfChA',
      attributeName: 'representation',
      label: t('service.UserProfile.UserProfile.View.Edit.representation::Filter', { defaultValue: 'City' }) as string,
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
    const newData = applyInMemoryFilters<ServiceCityStored>(filters, ownerData?.activityCities ?? []);
    setData(newData);
  }, [ownerData?.activityCities, filters]);

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
          ...columnsActionCalculator('User/(esm/_vC1sUFvREe6jm_SkPSYEYw)/RelationType', rowActions, t, {
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
          actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesView
            ? async (params: GridRowParams<ServiceCityStored>) =>
                await actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesView!(
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
              {actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesFilter &&
              true ? (
                <Button
                  id="User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults =
                      await actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesFilter!(
                        'User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceTableFilterButton',
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
                    'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::activity_cities::activityCities::Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesRefresh &&
              true ? (
                <Button
                  id="User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::activity_cities::activityCities::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesCreateOpen &&
              true ? (
                <Button
                  id="User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesCreateOpen!();
                  }}
                  disabled={editMode || isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::activity_cities::activityCities::Create',
                    { defaultValue: 'Create' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddOpenSelector &&
              true ? (
                <Button
                  id="User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddOpenSelector!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::activity_cities::activityCities::Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesClear &&
              data.length ? (
                <Button
                  id="User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesClear!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::activity_cities::activityCities::Clear',
                    { defaultValue: 'Clear' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesBulkRemove &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesBulkRemove!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::activity_cities::activityCities::BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesBulkDelete &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesBulkDelete!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::activity_cities::activityCities::BulkDelete',
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
