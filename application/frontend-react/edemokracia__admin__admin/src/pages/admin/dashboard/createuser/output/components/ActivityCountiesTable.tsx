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
import { adminUserServiceImpl, adminCountyServiceImpl } from '~/generated/data-axios';
import {
  usePageRefreshOutputAction,
  useRowRemoveActivityCountiesAction,
  useRowViewActivityCountiesAction,
  useTableAddActivityCountiesAction,
  useTableClearActivityCountiesAction,
} from '../actions';

export interface ActivityCountiesTableProps {
  ownerData: AdminUserStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminUserStored, value: any) => void;
}

export const ActivityCountiesTable = (props: ActivityCountiesTableProps) => {
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [activityCountiesSortModel, setActivityCountiesSortModel] = useState<GridSortModel>([
    { field: 'representation', sort: 'asc' },
  ]);

  const activityCountiesColumns: GridColDef<AdminCountyStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.UserView.activityCounties.representation', { defaultValue: 'County' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const activityCountiesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardCreateUserOutputDefaultUserViewAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCountiesActivityCountiesLabelWrapperActivityCountiesRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.UserView.activityCounties.representation', { defaultValue: 'County' }) as string,
      filterType: FilterType.string,
    },
  ];

  const activityCountiesInitialQueryCustomizer: AdminCountyQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: activityCountiesSortModel.length
      ? [
          {
            attribute: activityCountiesSortModel[0].field,
            descending: activityCountiesSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageRefreshOutputAction = usePageRefreshOutputAction();
  const rowRemoveActivityCountiesAction = useRowRemoveActivityCountiesAction();
  const rowViewActivityCountiesAction = useRowViewActivityCountiesAction();
  const tableAddActivityCountiesAction = useTableAddActivityCountiesAction();
  const tableClearActivityCountiesAction = useTableClearActivityCountiesAction();

  const activityCountiesRowActions: TableRowAction<AdminCountyStored>[] = [
    {
      id: 'RemoveActionedemokraciaAdminAdminEdemokraciaAdminDashboardCreateUserOutputEdemokraciaAdminAdminEdemokraciaAdminUserActivityCountiesRowRemove',
      label: t('judo.pages.table.remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      action: async (row: AdminCountyStored) => {
        storeDiff('activityCounties', [
          ...(ownerData.activityCounties || []).filter(
            (e: AdminCountyStored) => e.__signedIdentifier !== row.__signedIdentifier,
          ),
        ]);
      },
    },
  ];

  const activityCountiesRangeCall = async () =>
    openRangeDialog<AdminCountyStored, AdminCountyQueryCustomizer>({
      id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCounties',
      columns: activityCountiesColumns,
      defaultSortField: activityCountiesSortModel[0],
      rangeCall: async (queryCustomizer) =>
        await adminUserServiceImpl.getRangeForActivityCounties(undefined, processQueryCustomizer(queryCustomizer)),
      single: false,
      alreadySelectedItems: activityCountiesSelectionModel,
      filterOptions: activityCountiesRangeFilterOptions,
      initialQueryCustomizer: activityCountiesInitialQueryCustomizer,
    });

  const [activityCountiesSelectionModel, setActivityCountiesSelectionModel] = useState<GridRowSelectionModel>([]);

  return (
    <DataGrid
      {...baseTableConfig}
      sx={{
        // overflow: 'hidden',
        display: 'grid',
      }}
      getRowId={(row: { __identifier: string }) => row.__identifier}
      loading={isOwnerLoading}
      rows={ownerData?.activityCounties ?? []}
      getRowClassName={() => 'data-grid-row'}
      getCellClassName={() => 'data-grid-cell'}
      columns={[
        ...activityCountiesColumns,
        ...columnsActionCalculator(
          'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCounties',
          activityCountiesRowActions,
          { shownActions: 2 },
        ),
      ]}
      disableRowSelectionOnClick
      onRowClick={(params: GridRowParams<AdminCountyStored>) => {
        if (!editMode) {
          rowViewActivityCountiesAction(ownerData, params.row);
        }
      }}
      sortModel={activityCountiesSortModel}
      onSortModelChange={(newModel: GridSortModel) => {
        setActivityCountiesSortModel(newModel);
      }}
      components={{
        Toolbar: () => (
          <GridToolbarContainer>
            <Button
              id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCounties-clear"
              variant="text"
              onClick={async () => {
                storeDiff('activityCounties', []);
              }}
              disabled={isOwnerLoading || false || !isFormUpdateable()}
            >
              <MdiIcon path="link_off" />
              {t('judo.pages.table.clear', { defaultValue: 'Clear' })}
            </Button>
            <Button
              id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCounties-add"
              variant="text"
              onClick={async () => {
                const res = await activityCountiesRangeCall();

                if (res) {
                  storeDiff('activityCounties', [
                    ...(ownerData.activityCounties || []),
                    ...(res as AdminCountyStored[]),
                  ]);
                }
              }}
              disabled={isOwnerLoading || false || !isFormUpdateable()}
            >
              <MdiIcon path="attachment-plus" />
              {t('judo.pages.table.add', { defaultValue: 'Add' })}
            </Button>
            <div>{/* Placeholder */}</div>
          </GridToolbarContainer>
        ),
      }}
    />
  );
};
