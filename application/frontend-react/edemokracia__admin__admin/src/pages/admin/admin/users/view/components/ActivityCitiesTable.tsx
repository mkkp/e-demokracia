//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/table.tsx
// Template file: actor/src/pages/components/table.tsx.hbs

import { useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import type {
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridValueFormatterParams,
  GridRowId,
  GridRowModel,
  GridRowSelectionModel,
  GridSortItem,
} from '@mui/x-data-grid';
import { GridToolbarContainer, DataGrid } from '@mui/x-data-grid';
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
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';

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
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminUserServiceImpl, adminCityServiceImpl } from '~/generated/data-axios';
import {
  usePageDeleteUsersAction,
  usePageRefreshUsersAction,
  useRowRemoveActivityCitiesAction,
  useRowViewActivityCitiesAction,
  useTableAddActivityCitiesAction,
  useTableClearActivityCitiesAction,
} from '../actions';

export interface ActivityCitiesTableProps {
  ownerData: AdminUserStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminUserStored, value: any) => void;
}

export const ActivityCitiesTable = (props: ActivityCitiesTableProps) => {
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [activityCitiesSortModel, setActivityCitiesSortModel] = useState<GridSortModel>([
    { field: 'representation', sort: 'asc' },
  ]);

  const activityCitiesColumns: GridColDef<AdminCityStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.UserView.activityCities.representation', { defaultValue: 'City' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const activityCitiesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUsersViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCitiesRepresentationFilter',
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

  const pageDeleteUsersAction = usePageDeleteUsersAction();
  const pageRefreshUsersAction = usePageRefreshUsersAction();
  const rowRemoveActivityCitiesAction = useRowRemoveActivityCitiesAction();
  const rowViewActivityCitiesAction = useRowViewActivityCitiesAction();
  const tableAddActivityCitiesAction = useTableAddActivityCitiesAction();
  const tableClearActivityCitiesAction = useTableClearActivityCitiesAction();

  const activityCitiesRowActions: TableRowAction<AdminCityStored>[] = [
    {
      id: 'RemoveActionedemokraciaAdminAdminEdemokraciaAdminAdminUsersViewEdemokraciaAdminAdminEdemokraciaAdminUserActivityCitiesRowRemove',
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
        await adminUserServiceImpl.getRangeForActivityCities(undefined, processQueryCustomizer(queryCustomizer)),
      single: false,
      alreadySelectedItems: activityCitiesSelectionModel,
      filterOptions: activityCitiesRangeFilterOptions,
      initialQueryCustomizer: activityCitiesInitialQueryCustomizer,
    });

  const [activityCitiesSelectionModel, setActivityCitiesSelectionModel] = useState<GridRowSelectionModel>([]);

  return (
    <DataGrid
      {...baseTableConfig}
      pageSizeOptions={[10]}
      sx={{
        // overflow: 'hidden',
        display: 'grid',
      }}
      getRowId={(row: { __identifier: string }) => row.__identifier}
      loading={isOwnerLoading}
      rows={ownerData?.activityCities ?? []}
      getRowClassName={() => 'data-grid-row'}
      getCellClassName={() => 'data-grid-cell'}
      columns={[
        ...activityCitiesColumns,
        ...columnsActionCalculator(
          'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCities',
          activityCitiesRowActions,
          { shownActions: 2 },
        ),
      ]}
      disableRowSelectionOnClick
      onRowClick={(params: GridRowParams<AdminCityStored>) => {
        if (!editMode) {
          rowViewActivityCitiesAction(ownerData, params.row);
        }
      }}
      sortModel={activityCitiesSortModel}
      onSortModelChange={(newModel: GridSortModel) => {
        setActivityCitiesSortModel(newModel);
      }}
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
                  storeDiff('activityCities', [...(ownerData.activityCities || []), ...(res as AdminCityStored[])]);
                }
              }}
              disabled={isOwnerLoading || false || !isFormUpdateable()}
            >
              {t('judo.pages.table.add', { defaultValue: 'Add' })}
            </Button>
            <div>{/* Placeholder */}</div>
          </GridToolbarContainer>
        ),
      }}
    />
  );
};
