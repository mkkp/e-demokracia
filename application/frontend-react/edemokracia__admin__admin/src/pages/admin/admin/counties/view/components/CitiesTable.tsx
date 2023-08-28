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
} from '~/generated/data-api';
import { adminCountyServiceForClassImpl, adminCityServiceForClassImpl } from '~/generated/data-axios';
import {
  usePageDeleteCountiesAction,
  usePageRefreshCountiesAction,
  useRowDeleteCitiesAction,
  useRowViewCitiesAction,
  useTableCreateCitiesAction,
} from '../actions';
import { applyInMemoryFilters } from '~/utilities';
export const ADMIN_ADMIN_COUNTIES_VIEW_CITIES = 'AdminAdminCountiesViewCities';

export interface CitiesTableProps {
  ownerData: AdminCountyStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminCountyStored, value: any) => void;
  validation: Map<keyof AdminCounty, string>;
}

export const CitiesTable = (props: CitiesTableProps) => {
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

  const [citiesSortModel, setCitiesSortModel] = useState<GridSortModel>([{ field: 'name', sort: null }]);

  const [citiesFilterModel, setCitiesFilterModel] = useState<GridFilterModel>({ items: [] });

  const citiesColumns: GridColDef<AdminCityStored>[] = [
    {
      ...baseColumnConfig,
      field: 'name',
      headerName: t('admin.CountyView.cities.name', { defaultValue: 'Name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const citiesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminCountiesViewDefaultCountyViewCitiesLabelWrapperCitiesNameFilter',
      attributeName: 'name',
      label: t('admin.CountyView.cities.name', { defaultValue: 'Name' }) as string,
      filterType: FilterType.string,
    },
  ];

  const citiesInitialQueryCustomizer: AdminCityQueryCustomizer = {
    _mask: '{name}',
    _orderBy: citiesSortModel.length
      ? [
          {
            attribute: citiesSortModel[0].field,
            descending: citiesSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

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

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminCountiesViewDefaultCountyViewCitiesLabelWrapperCitiesNameFilter',
      attributeName: 'name',
      label: t('admin.CountyView.cities.name', { defaultValue: 'Name' }) as string,
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
    const newData = applyInMemoryFilters<AdminCityStored>(filters, ownerData?.cities ?? []);
    setData(newData);
  }, [ownerData?.cities, filters]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) => (props.validation.has('cities') ? `2px solid ${theme.palette.error.main}` : undefined),
        }}
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isOwnerLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...citiesColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminCountyCities',
            citiesRowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        onRowClick={(params: GridRowParams<AdminCityStored>) => {
          if (!editMode) {
            rowViewCitiesAction(ownerData, params.row, () => fetchOwnerData());
          }
        }}
        sortModel={citiesSortModel}
        onSortModelChange={(newModel: GridSortModel) => {
          setCitiesSortModel(newModel);
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
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
              <Button
                id="TableedemokraciaAdminAdminEdemokraciaAdminAdminCountiesViewDefaultCountyViewCitiesLabelWrapperCities-filter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() =>
                  filter(
                    'TableedemokraciaAdminAdminEdemokraciaAdminAdminCountiesViewDefaultCountyViewCitiesLabelWrapperCities-filter',
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
      {props.validation.has('cities') && (
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
          <Typography>{props.validation.get('cities')}</Typography>
        </Box>
      )}
    </>
  );
};