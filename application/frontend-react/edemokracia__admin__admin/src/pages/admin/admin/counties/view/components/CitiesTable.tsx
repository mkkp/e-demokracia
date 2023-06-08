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
} from '~/generated/data-api';
import { adminCountyServiceImpl, adminCityServiceImpl } from '~/generated/data-axios';
import {
  usePageDeleteCountiesAction,
  usePageRefreshCountiesAction,
  useRowDeleteCitiesAction,
  useRowViewCitiesAction,
  useTableCreateCitiesAction,
} from '../actions';

export interface CitiesTableProps {
  ownerData: AdminCountyStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminCountyStored, value: any) => void;
}

export const CitiesTable = (props: CitiesTableProps) => {
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [citiesSortModel, setCitiesSortModel] = useState<GridSortModel>([{ field: 'name', sort: 'asc' }]);

  const citiesColumns: GridColDef<AdminCityStored>[] = [
    {
      ...baseColumnConfig,
      field: 'name',
      headerName: t('admin.CountyView.cities.name', { defaultValue: 'Name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const pageDeleteCountiesAction = usePageDeleteCountiesAction();
  const pageRefreshCountiesAction = usePageRefreshCountiesAction();
  const rowDeleteCitiesAction = useRowDeleteCitiesAction();
  const rowViewCitiesAction = useRowViewCitiesAction();
  const tableCreateCitiesAction = useTableCreateCitiesAction();

  const citiesRowActions: TableRowAction<AdminCityStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminAdminCountiesViewEdemokraciaAdminAdminEdemokraciaAdminCountyCitiesRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminCityStored) => rowDeleteCitiesAction(ownerData, row, () => fetchOwnerData()),
      disabled: (row: AdminCityStored) => editMode || !row.__deleteable,
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
      rows={ownerData?.cities ?? []}
      getRowClassName={() => 'data-grid-row'}
      getCellClassName={() => 'data-grid-cell'}
      columns={[
        ...citiesColumns,
        ...columnsActionCalculator('RelationTypeedemokraciaAdminAdminEdemokraciaAdminCountyCities', citiesRowActions, {
          shownActions: 2,
        }),
      ]}
      disableRowSelectionOnClick
      onRowClick={(params: GridRowParams<AdminCityStored>) => {
        if (!editMode) {
          rowViewCitiesAction(ownerData, params.row);
        }
      }}
      sortModel={citiesSortModel}
      onSortModelChange={(newModel: GridSortModel) => {
        setCitiesSortModel(newModel);
      }}
      components={{
        Toolbar: () => (
          <GridToolbarContainer>
            <Button
              id="CreateActionedemokraciaAdminAdminEdemokraciaAdminAdminCountiesViewEdemokraciaAdminAdminEdemokraciaAdminCountyCitiesTableCreate"
              startIcon={<MdiIcon path="file_document_plus" />}
              variant="text"
              onClick={() =>
                tableCreateCitiesAction(ownerData, () => {
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
