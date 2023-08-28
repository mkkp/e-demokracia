//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/table.tsx
// Template file: actor/src/pages/components/table.tsx.hbs

import { useEffect, useState, useImperativeHandle, useMemo, useRef, forwardRef } from 'react';
import type { MouseEvent } from 'react';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
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
import { GridToolbarContainer } from '@mui/x-data-grid';
import { MdiIcon, CustomTablePagination } from '~/components';
import { baseColumnConfig, baseTableConfig, toastConfig, dividerHeight } from '~/config';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { columnsActionCalculator } from '~/components/table';
import { FilterOption, FilterType, Filter } from '~/components-api';
import type { PersistedTableData, RefreshableTable, TableRowAction } from '~/utilities';
import {
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  processQueryCustomizer,
  mapAllFiltersToQueryCustomizerProperties,
  mapFilterModelToFilters,
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';
import { ContextMenu, StripedDataGrid } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';

import { Box, Typography } from '@mui/material';
import {
  AdminCity,
  AdminCityQueryCustomizer,
  AdminCityStored,
  AdminCounty,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminPro,
  AdminProStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminUserServiceForClassImpl, adminCityServiceForClassImpl } from '~/generated/data-axios';
import {
  usePageRefreshCreatedByAction,
  useRowRemoveActivityCitiesAction,
  useRowViewActivityCitiesAction,
  useTableAddActivityCitiesAction,
  useTableClearActivityCitiesAction,
} from '../actions';
import { applyInMemoryFilters } from '~/utilities';
export const ADMIN_PRO_CREATED_BY_VIEW_ACTIVITY_CITIES = 'AdminProCreatedByViewActivityCities';

export interface ActivityCitiesTableProps {
  ownerData: AdminUserStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminUserStored, value: any) => void;
  validation: Map<keyof AdminUser, string>;
}

export const ActivityCitiesTable = (props: ActivityCitiesTableProps) => {
  const { openFilterDialog } = useFilterDialog();
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [filters, setFilters] = useState<Filter[]>([]);
  const [data, setData] = useState<AdminCityStored[]>([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [activityCitiesSortModel, setActivityCitiesSortModel] = useState<GridSortModel>([
    { field: 'representation', sort: null },
  ]);

  const [activityCitiesFilterModel, setActivityCitiesFilterModel] = useState<GridFilterModel>({ items: [] });

  const activityCitiesColumns: GridColDef<AdminCityStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.UserView.activityCities.representation', { defaultValue: 'City' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const activityCitiesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCitiesRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.UserView.activityCities.representation', { defaultValue: 'City' }) as string,
      filterType: FilterType.string,
    },
  ];

  const activityCitiesInitialQueryCustomizer: AdminCityQueryCustomizer = {
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

  const activityCitiesRowActions: TableRowAction<AdminCityStored>[] = [
    {
      id: 'RemoveActionedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewEdemokraciaAdminAdminEdemokraciaAdminUserActivityCitiesRowRemove',
      label: t('judo.pages.table.remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      action: async (row: AdminCityStored) => {
        storeDiff('activityCities', [
          ...(ownerData.activityCities || []).filter(
            (e: AdminCityStored) => e.__signedIdentifier !== row.__signedIdentifier,
          ),
        ]);
      },
    },
  ];

  const activityCitiesRangeCall = async () =>
    openRangeDialog<AdminCityStored, AdminCityQueryCustomizer>({
      id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCities',
      columns: activityCitiesColumns,
      defaultSortField: activityCitiesSortModel[0],
      rangeCall: async (queryCustomizer) =>
        await adminUserServiceForClassImpl.getRangeForActivityCities(
          ownerData,
          processQueryCustomizer(queryCustomizer),
        ),
      single: false,
      alreadySelectedItems: activityCitiesSelectionModel,
      filterOptions: activityCitiesRangeFilterOptions,
      initialQueryCustomizer: activityCitiesInitialQueryCustomizer,
    });

  const [activityCitiesSelectionModel, setActivityCitiesSelectionModel] = useState<GridRowSelectionModel>([]);

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCitiesRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.UserView.activityCities.representation', { defaultValue: 'City' }) as string,
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
    }
  };

  useEffect(() => {
    const newData = applyInMemoryFilters<AdminCityStored>(filters, ownerData?.activityCities ?? []);
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
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isOwnerLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...activityCitiesColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCities',
            activityCitiesRowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        onRowClick={(params: GridRowParams<AdminCityStored>) => {
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
                id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCities-clear"
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
                id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCities-add"
                startIcon={<MdiIcon path="attachment-plus" />}
                variant="text"
                onClick={async () => {
                  const res = await activityCitiesRangeCall();

                  if (res) {
                    storeDiff('activityCities', [
                      ...(ownerData.activityCities || []),
                      ...(res.value as AdminCityStored[]),
                    ]);
                  }
                }}
                disabled={isOwnerLoading || false || !isFormUpdateable()}
              >
                {t('judo.pages.table.add', { defaultValue: 'Add' })}
              </Button>
              <Button
                id="TableedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCities-filter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() =>
                  filter(
                    'TableedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCities-filter',
                    filterOptions,
                    filters,
                  )
                }
                disabled={isOwnerLoading}
              >
                {t('judo.pages.table.set-filters', { defaultValue: 'Set filters' }) +
                  (filters.length !== 0 ? ' (' + filters.length + ')' : '')}
              </Button>
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
