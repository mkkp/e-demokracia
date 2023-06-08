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
  AdminIssue,
  AdminIssueStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminUserServiceImpl, adminDistrictServiceImpl } from '~/generated/data-axios';
import {
  usePageRefreshOwnerAction,
  useRowRemoveActivityDistrictsAction,
  useRowViewActivityDistrictsAction,
  useTableAddActivityDistrictsAction,
  useTableClearActivityDistrictsAction,
} from '../actions';

export interface ActivityDistrictsTableProps {
  ownerData: AdminUserStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminUserStored, value: any) => void;
}

export const ActivityDistrictsTable = (props: ActivityDistrictsTableProps) => {
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [activityDistrictsSortModel, setActivityDistrictsSortModel] = useState<GridSortModel>([
    { field: 'representation', sort: 'asc' },
  ]);

  const activityDistrictsColumns: GridColDef<AdminDistrictStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.UserView.activityDistricts.representation', { defaultValue: 'District' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const activityDistrictsRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapperActivityDistrictsRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.UserView.activityDistricts.representation', { defaultValue: 'District' }) as string,
      filterType: FilterType.string,
    },
  ];

  const activityDistrictsInitialQueryCustomizer: AdminDistrictQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: activityDistrictsSortModel.length
      ? [
          {
            attribute: activityDistrictsSortModel[0].field,
            descending: activityDistrictsSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageRefreshOwnerAction = usePageRefreshOwnerAction();
  const rowRemoveActivityDistrictsAction = useRowRemoveActivityDistrictsAction();
  const rowViewActivityDistrictsAction = useRowViewActivityDistrictsAction();
  const tableAddActivityDistrictsAction = useTableAddActivityDistrictsAction();
  const tableClearActivityDistrictsAction = useTableClearActivityDistrictsAction();

  const activityDistrictsRowActions: TableRowAction<AdminDistrictStored>[] = [
    {
      id: 'RemoveActionedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewEdemokraciaAdminAdminEdemokraciaAdminUserActivityDistrictsRowRemove',
      label: t('judo.pages.table.remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      action: async (row: AdminDistrictStored) => {
        storeDiff('activityDistricts', [
          ...(ownerData.activityDistricts || []).filter(
            (e: AdminDistrictStored) => e.__signedIdentifier !== row.__signedIdentifier,
          ),
        ]);
      },
    },
  ];

  const activityDistrictsRangeCall = async () =>
    openRangeDialog<AdminDistrictStored, AdminDistrictQueryCustomizer>({
      id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityDistricts',
      columns: activityDistrictsColumns,
      defaultSortField: activityDistrictsSortModel[0],
      rangeCall: async (queryCustomizer) =>
        await adminUserServiceImpl.getRangeForActivityDistricts(undefined, processQueryCustomizer(queryCustomizer)),
      single: false,
      alreadySelectedItems: activityDistrictsSelectionModel,
      filterOptions: activityDistrictsRangeFilterOptions,
      initialQueryCustomizer: activityDistrictsInitialQueryCustomizer,
    });

  const [activityDistrictsSelectionModel, setActivityDistrictsSelectionModel] = useState<GridRowSelectionModel>([]);

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
      rows={ownerData?.activityDistricts ?? []}
      getRowClassName={() => 'data-grid-row'}
      getCellClassName={() => 'data-grid-cell'}
      columns={[
        ...activityDistrictsColumns,
        ...columnsActionCalculator(
          'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityDistricts',
          activityDistrictsRowActions,
          { shownActions: 2 },
        ),
      ]}
      disableRowSelectionOnClick
      onRowClick={(params: GridRowParams<AdminDistrictStored>) => {
        if (!editMode) {
          rowViewActivityDistrictsAction(ownerData, params.row);
        }
      }}
      sortModel={activityDistrictsSortModel}
      onSortModelChange={(newModel: GridSortModel) => {
        setActivityDistrictsSortModel(newModel);
      }}
      components={{
        Toolbar: () => (
          <GridToolbarContainer>
            <Button
              id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityDistricts-clear"
              startIcon={<MdiIcon path="link_off" />}
              variant="text"
              onClick={async () => {
                storeDiff('activityDistricts', []);
              }}
              disabled={isOwnerLoading || false || !isFormUpdateable()}
            >
              {t('judo.pages.table.clear', { defaultValue: 'Clear' })}
            </Button>
            <Button
              id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityDistricts-add"
              startIcon={<MdiIcon path="attachment-plus" />}
              variant="text"
              onClick={async () => {
                const res = await activityDistrictsRangeCall();

                if (res) {
                  storeDiff('activityDistricts', [
                    ...(ownerData.activityDistricts || []),
                    ...(res as AdminDistrictStored[]),
                  ]);
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
