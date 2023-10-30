//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForViewDialogs(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/table.tsx
// Template file: actor/src/pages/components/table.tsx.hbs

import { useEffect, useState, useImperativeHandle, useMemo, useRef, forwardRef, useCallback } from 'react';
import type { MouseEvent } from 'react';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
import type {
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridValueFormatterParams,
  GridRowClassNameParams,
  GridRowId,
  GridRowModel,
  GridRowSelectionModel,
  GridSortItem,
} from '@mui/x-data-grid';
import { GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import { MdiIcon, CustomTablePagination } from '~/components';
import { baseColumnConfig, baseTableConfig, toastConfig, DIVIDER_HEIGHT } from '~/config';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { columnsActionCalculator } from '~/components/table';
import { FilterOption, FilterType, Filter } from '~/components-api';
import type { PersistedTableData, RefreshableTable, TableRowAction } from '~/utilities';
import { useDataStore, useCRUDDialog } from '~/hooks';
import {
  decodeToken,
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  processQueryCustomizer,
  mapAllFiltersToQueryCustomizerProperties,
  mapFilterModelToFilters,
  mapFilterToFilterModel,
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  getUpdatedRowsSelected,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';
import { ContextMenu, StripedDataGrid } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';

import { Box, Typography } from '@mui/material';
import {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServicePro,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/generated/data-api';
import { serviceServiceUserServiceForClassImpl, serviceCityServiceForClassImpl } from '~/generated/data-axios';
import {
  usePageRefreshCreatedByAction,
  useRowRemoveActivityCitiesAction,
  useRowViewActivityCitiesAction,
  useTableAddActivityCitiesAction,
  useTableClearActivityCitiesAction,
} from '../actions';
import { applyInMemoryFilters } from '~/utilities';
import { GridLogicOperator } from '@mui/x-data-grid';

export const SERVICE_USER_VIEW_ACTIVITY_CITIES = 'ServiceUserViewActivityCities';

export interface ActivityCitiesTableProps {
  ownerData: ServiceServiceUserStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof ServiceServiceUserStored, value: any) => void;
  validation: Map<keyof ServiceServiceUser, string>;
}

export const ActivityCitiesTable = (props: ActivityCitiesTableProps) => {
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { openFilterDialog } = useFilterDialog();
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const openCRUDDialog = useCRUDDialog();

  const filterModelKey = `TableedemokraciaServiceUserEdemokraciaServiceProCreatedByViewDefaultServiceUserViewEditAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCities-${ownerData.__identifier}-filterModel`;
  const filtersKey = `TableedemokraciaServiceUserEdemokraciaServiceProCreatedByViewDefaultServiceUserViewEditAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCities-${ownerData.__identifier}-filters`;
  const [activityCitiesFilterModel, setActivityCitiesFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [data, setData] = useState<ServiceCityStored[]>([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const selectedRows = useRef<ServiceCityStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  const [activityCitiesSortModel, setActivityCitiesSortModel] = useState<GridSortModel>([
    { field: 'representation', sort: null },
  ]);

  const activityCitiesColumns: GridColDef<ServiceCityStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('service.ServiceUserView.activityCities.representation', { defaultValue: 'City' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const activityCitiesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceProCreatedByViewDefaultServiceUserViewEditAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCitiesRepresentationFilter',
      attributeName: 'representation',
      label: t('service.ServiceUserView.activityCities.representation', { defaultValue: 'City' }) as string,
      filterType: FilterType.string,
    },
  ];

  const activityCitiesInitialQueryCustomizer: ServiceCityQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: activityCitiesSortModel.length
      ? [
          {
            attribute: activityCitiesSortModel[0].field,
            descending: activityCitiesSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageRefreshCreatedByAction = usePageRefreshCreatedByAction();
  const rowRemoveActivityCitiesAction = useRowRemoveActivityCitiesAction();
  const rowViewActivityCitiesAction = useRowViewActivityCitiesAction();
  const tableAddActivityCitiesAction = useTableAddActivityCitiesAction();
  const tableClearActivityCitiesAction = useTableClearActivityCitiesAction();

  const activityCitiesRowActions: TableRowAction<ServiceCityStored>[] = [
    {
      id: 'RemoveActionedemokraciaServiceUserEdemokraciaServiceProCreatedByViewEdemokraciaServiceUserEdemokraciaServiceServiceUserActivityCitiesRowRemove',
      label: t('judo.pages.table.remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      action: async (row: ServiceCityStored) => {
        storeDiff('activityCities', [
          ...(ownerData.activityCities || []).filter(
            (e: ServiceCityStored) => e.__signedIdentifier !== row.__signedIdentifier,
          ),
        ]);
      },
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceProCreatedByViewDefaultServiceUserViewEditAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCitiesRepresentationFilter',
      attributeName: 'representation',
      label: t('service.ServiceUserView.activityCities.representation', { defaultValue: 'City' }) as string,
      filterType: FilterType.string,
    },
  ];

  const filter = async (id: string, filterOptions: FilterOption[], filters: Filter[]) => {
    const newFilters = await openFilterDialog(id, filterOptions, filters);

    if (Array.isArray(newFilters)) {
      setPaginationModel((prevState) => ({
        ...prevState,
        page: 0,
      }));
      setFilters(newFilters);
      setItemStringified(filtersKey, newFilters);
    }
  };

  const bulkRemoveSelected = useCallback(() => {
    openCRUDDialog<ServiceCityStored>({
      dialogTitle: t('judo.dialogs.crud-bulk.remove.title', { defaultValue: 'Remove selected items' }),
      itemTitleFn: (item) => item.representation!,
      selectedItems: selectedRows.current,
      action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
        await rowRemoveActivityCitiesAction(ownerData, item, successHandler, errorHandler);
      },
      onClose: (needsRefresh) => {
        if (needsRefresh) {
          fetchOwnerData();
          setSelectionModel([]); // not resetting on fetchData because refreshes would always remove selections...
        }
      },
    });
  }, [ownerData]);
  const isBulkRemoveAvailable: () => boolean = useCallback(() => {
    return !!selectionModel.length && true && isFormUpdateable() && !false;
  }, [ownerData, selectionModel]);

  useEffect(() => {
    if (ownerData?.__identifier) {
      const storedFilters = getItemParsed<Filter[]>(filtersKey);
      if (storedFilters !== null) {
        setFilters(storedFilters);
      }

      const storedFilterModel = getItemParsed<GridFilterModel>(filterModelKey);
      if (storedFilterModel !== null) {
        setActivityCitiesFilterModel(storedFilterModel);
      }
    }
  }, [ownerData]);

  useEffect(() => {
    const newData = applyInMemoryFilters<ServiceCityStored>(filters, ownerData?.activityCities ?? []);
    setData(newData);
  }, [ownerData?.activityCities, filters]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) =>
            props.validation.has('activityCities') ? `2px solid ${theme.palette.error.main}` : undefined,
        }}
        slotProps={{
          filterPanel: {
            logicOperators: [GridLogicOperator.And],
          },
        }}
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isOwnerLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...activityCitiesColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaServiceUserEdemokraciaServiceServiceUserActivityCities',
            activityCitiesRowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setSelectionModel(newRowSelectionModel);
        }}
        onRowClick={(params: GridRowParams<ServiceCityStored>) => {
          if (!editMode) {
            rowViewActivityCitiesAction(ownerData, params.row, () => fetchOwnerData());
          }
        }}
        sortModel={activityCitiesSortModel}
        onSortModelChange={(newModel: GridSortModel) => {
          setActivityCitiesSortModel(newModel);
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="RelationTypeedemokraciaServiceUserEdemokraciaServiceServiceUserActivityCities-clear"
                startIcon={<MdiIcon path="link_off" />}
                variant="text"
                onClick={async () => {
                  storeDiff('activityCities', []);
                }}
                disabled={isOwnerLoading || false || !isFormUpdateable()}
              >
                {t('judo.pages.table.clear', { defaultValue: 'Clear' })}
              </Button>
              <Button
                id="RelationTypeedemokraciaServiceUserEdemokraciaServiceServiceUserActivityCities-add"
                startIcon={<MdiIcon path="attachment-plus" />}
                variant="text"
                onClick={async () => {
                  const res = await openRangeDialog<ServiceCityStored, ServiceCityQueryCustomizer>({
                    id: 'RelationTypeedemokraciaServiceUserEdemokraciaServiceServiceUserActivityCities',
                    columns: activityCitiesColumns,
                    defaultSortField: activityCitiesSortModel[0],
                    rangeCall: async (queryCustomizer) =>
                      await serviceServiceUserServiceForClassImpl.getRangeForActivityCities(
                        ownerData,
                        processQueryCustomizer(queryCustomizer),
                      ),
                    single: false,
                    alreadySelectedItems: ownerData.activityCities ? [...ownerData.activityCities] : undefined,
                    filterOptions: activityCitiesRangeFilterOptions,
                    initialQueryCustomizer: activityCitiesInitialQueryCustomizer,
                  });

                  if (res) {
                    const newList = [...(ownerData.activityCities || []), ...(res.value as ServiceCityStored[])];
                    storeDiff('activityCities', newList);
                  }
                }}
                disabled={isOwnerLoading || false || !isFormUpdateable()}
              >
                {t('judo.pages.table.add', { defaultValue: 'Add' })}
              </Button>
              <Button
                id="TableedemokraciaServiceUserEdemokraciaServiceProCreatedByViewDefaultServiceUserViewEditAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCities-filter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() =>
                  filter(
                    'TableedemokraciaServiceUserEdemokraciaServiceProCreatedByViewDefaultServiceUserViewEditAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCities-filter',
                    filterOptions,
                    filters,
                  )
                }
                disabled={isOwnerLoading}
              >
                {t('judo.pages.table.set-filters', { defaultValue: 'Set filters' }) +
                  (filters.length !== 0 ? ' (' + filters.length + ')' : '')}
              </Button>
              {isBulkRemoveAvailable() ? (
                <Button
                  id="RelationTypeedemokraciaServiceUserEdemokraciaServiceServiceUserActivityCities-bulk-remove"
                  disabled={isOwnerLoading}
                  variant="text"
                  startIcon={<MdiIcon path="link-off" />}
                  onClick={() => {
                    const newList = data.filter((e) => !selectionModel.find((s) => s === e.__identifier));
                    storeDiff('activityCities', newList);
                    setSelectionModel([]);
                  }}
                >
                  {t('judo.pages.table.remove.selected', { defaultValue: 'Remove' })}
                </Button>
              ) : null}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
        }}
      />
      {props.validation.has('activityCities') && (
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
          <Typography>{props.validation.get('activityCities')}</Typography>
        </Box>
      )}
    </>
  );
};
