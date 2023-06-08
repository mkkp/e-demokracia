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
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminUser,
  AdminUserStored,
} from '~/generated/data-api';
import { adminCityServiceImpl, adminDistrictServiceImpl } from '~/generated/data-axios';
import {
  useRowDeleteDistrictsAction,
  useRowViewDistrictsAction,
  useTableCreateDistrictsAction,
  usePageRefreshActivityCitiesAction,
} from '../actions';

export interface DistrictsTableProps {
  ownerData: AdminCityStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminCityStored, value: any) => void;
}

export const DistrictsTable = (props: DistrictsTableProps) => {
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [districtsSortModel, setDistrictsSortModel] = useState<GridSortModel>([{ field: 'name', sort: 'asc' }]);

  const districtsColumns: GridColDef<AdminDistrictStored>[] = [
    {
      ...baseColumnConfig,
      field: 'name',
      headerName: t('admin.CityView.districts.name', { defaultValue: 'Name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const rowDeleteDistrictsAction = useRowDeleteDistrictsAction();
  const rowViewDistrictsAction = useRowViewDistrictsAction();
  const tableCreateDistrictsAction = useTableCreateDistrictsAction();
  const pageRefreshActivityCitiesAction = usePageRefreshActivityCitiesAction();

  const districtsRowActions: TableRowAction<AdminDistrictStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminUserActivityCitiesViewEdemokraciaAdminAdminEdemokraciaAdminCityDistrictsRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminDistrictStored) => rowDeleteDistrictsAction(ownerData, row, () => fetchOwnerData()),
      disabled: (row: AdminDistrictStored) => editMode || !row.__deleteable,
    },
  ];

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
      rows={ownerData?.districts ?? []}
      getRowClassName={() => 'data-grid-row'}
      getCellClassName={() => 'data-grid-cell'}
      columns={[
        ...districtsColumns,
        ...columnsActionCalculator(
          'RelationTypeedemokraciaAdminAdminEdemokraciaAdminCityDistricts',
          districtsRowActions,
          { shownActions: 2 },
        ),
      ]}
      disableRowSelectionOnClick
      onRowClick={(params: GridRowParams<AdminDistrictStored>) => {
        if (!editMode) {
          rowViewDistrictsAction(ownerData, params.row);
        }
      }}
      sortModel={districtsSortModel}
      onSortModelChange={(newModel: GridSortModel) => {
        setDistrictsSortModel(newModel);
      }}
      components={{
        Toolbar: () => (
          <GridToolbarContainer>
            <Button
              id="CreateActionedemokraciaAdminAdminEdemokraciaAdminUserActivityCitiesViewEdemokraciaAdminAdminEdemokraciaAdminCityDistrictsTableCreate"
              startIcon={<MdiIcon path="file_document_plus" />}
              variant="text"
              onClick={() =>
                tableCreateDistrictsAction(ownerData, () => {
                  fetchOwnerData();
                })
              }
              disabled={editMode || isOwnerLoading || false || !isFormUpdateable()}
            >
              {t('judo.pages.table.create', { defaultValue: 'Create' })}
            </Button>
            <div>{/* Placeholder */}</div>
          </GridToolbarContainer>
        ),
      }}
    />
  );
};
