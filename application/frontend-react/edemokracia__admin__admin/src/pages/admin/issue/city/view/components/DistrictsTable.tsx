//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPages(#application)
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
  AdminCity,
  AdminCityQueryCustomizer,
  AdminCityStored,
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminIssue,
  AdminIssueStored,
} from '~/generated/data-api';
import { adminCityServiceForClassImpl, adminDistrictServiceForClassImpl } from '~/generated/data-axios';
import {
  useRowDeleteDistrictsAction,
  useRowViewDistrictsAction,
  useTableCreateDistrictsAction,
  usePageRefreshCityAction,
} from '../actions';
import { applyInMemoryFilters } from '~/utilities';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_ISSUE_CITY_VIEW_DISTRICTS = 'AdminIssueCityViewDistricts';

export interface DistrictsTableProps {
  ownerData: AdminCityStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminCityStored, value: any) => void;
  validation: Map<keyof AdminCity, string>;
}

export const DistrictsTable = (props: DistrictsTableProps) => {
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { openFilterDialog } = useFilterDialog();
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const openCRUDDialog = useCRUDDialog();

  const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminIssueCityViewDefaultCityViewEditDistrictsLabelWrapperDistricts-${ownerData.__identifier}-filterModel`;
  const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminIssueCityViewDefaultCityViewEditDistrictsLabelWrapperDistricts-${ownerData.__identifier}-filters`;
  const [districtsFilterModel, setDistrictsFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [data, setData] = useState<AdminDistrictStored[]>([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const selectedRows = useRef<AdminDistrictStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  const [districtsSortModel, setDistrictsSortModel] = useState<GridSortModel>([{ field: 'name', sort: null }]);

  const districtsColumns: GridColDef<AdminDistrictStored>[] = [
    {
      ...baseColumnConfig,
      field: 'name',
      headerName: t('admin.CityView.districts.name', { defaultValue: 'Name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const districtsRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminIssueCityViewDefaultCityViewEditDistrictsLabelWrapperDistrictsNameFilter',
      attributeName: 'name',
      label: t('admin.CityView.districts.name', { defaultValue: 'Name' }) as string,
      filterType: FilterType.string,
    },
  ];

  const districtsInitialQueryCustomizer: AdminDistrictQueryCustomizer = {
    _mask: '{name}',
    _orderBy: districtsSortModel.length
      ? [
          {
            attribute: districtsSortModel[0].field,
            descending: districtsSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const rowDeleteDistrictsAction = useRowDeleteDistrictsAction();
  const rowViewDistrictsAction = useRowViewDistrictsAction();
  const tableCreateDistrictsAction = useTableCreateDistrictsAction();
  const pageRefreshCityAction = usePageRefreshCityAction();

  const districtsRowActions: TableRowAction<AdminDistrictStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminIssueCityViewEdemokraciaAdminAdminEdemokraciaAdminCityDistrictsRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminDistrictStored) => rowDeleteDistrictsAction(ownerData, row, () => fetchOwnerData()),
      disabled: (row: AdminDistrictStored) => editMode || !row.__deleteable,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminIssueCityViewDefaultCityViewEditDistrictsLabelWrapperDistrictsNameFilter',
      attributeName: 'name',
      label: t('admin.CityView.districts.name', { defaultValue: 'Name' }) as string,
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

  const bulkDeleteSelected = useCallback(() => {
    openCRUDDialog<AdminDistrictStored>({
      dialogTitle: t('judo.dialogs.crud-bulk.delete.title', { defaultValue: 'Delete selected items' }),
      itemTitleFn: (item) => item.name!,
      selectedItems: selectedRows.current,
      action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
        await rowDeleteDistrictsAction(ownerData, item, successHandler, errorHandler, true);
      },
      onClose: (needsRefresh) => {
        if (needsRefresh) {
          fetchOwnerData();
          setSelectionModel([]); // not resetting on fetchData because refreshes would always remove selections...
        }
      },
    });
  }, []);
  const isBulkDeleteAvailable: () => boolean = useCallback(() => {
    // every row has the same `__deleteable` flag
    return !!selectionModel.length && true && isFormUpdateable() && !false && !!data[0]?.__deleteable;
  }, [ownerData, data, selectionModel]);

  useEffect(() => {
    if (ownerData?.__identifier) {
      const storedFilters = getItemParsed<Filter[]>(filtersKey);
      if (storedFilters !== null) {
        setFilters(storedFilters);
      }

      const storedFilterModel = getItemParsed<GridFilterModel>(filterModelKey);
      if (storedFilterModel !== null) {
        setDistrictsFilterModel(storedFilterModel);
      }
    }
  }, [ownerData]);

  useEffect(() => {
    const newData = applyInMemoryFilters<AdminDistrictStored>(filters, ownerData?.districts ?? []);
    setData(newData);
  }, [ownerData?.districts, filters]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) => (props.validation.has('districts') ? `2px solid ${theme.palette.error.main}` : undefined),
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
          ...districtsColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminCityDistricts',
            districtsRowActions,
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
        onRowClick={(params: GridRowParams<AdminDistrictStored>) => {
          if (!editMode) {
            rowViewDistrictsAction(ownerData, params.row, () => fetchOwnerData());
          }
        }}
        sortModel={districtsSortModel}
        onSortModelChange={(newModel: GridSortModel) => {
          setDistrictsSortModel(newModel);
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="CreateActionedemokraciaAdminAdminEdemokraciaAdminIssueCityViewEdemokraciaAdminAdminEdemokraciaAdminCityDistrictsTableCreate"
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
              <Button
                id="TableedemokraciaAdminAdminEdemokraciaAdminIssueCityViewDefaultCityViewEditDistrictsLabelWrapperDistricts-filter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() =>
                  filter(
                    'TableedemokraciaAdminAdminEdemokraciaAdminIssueCityViewDefaultCityViewEditDistrictsLabelWrapperDistricts-filter',
                    filterOptions,
                    filters,
                  )
                }
                disabled={isOwnerLoading}
              >
                {t('judo.pages.table.set-filters', { defaultValue: 'Set filters' }) +
                  (filters.length !== 0 ? ' (' + filters.length + ')' : '')}
              </Button>
              {isBulkDeleteAvailable() ? (
                <Button
                  disabled={isOwnerLoading || editMode}
                  variant="text"
                  startIcon={<MdiIcon path="delete-forever" />}
                  onClick={bulkDeleteSelected}
                >
                  {t('judo.pages.table.delete.selected', { defaultValue: 'Delete' })}
                </Button>
              ) : null}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
        }}
      />
      {props.validation.has('districts') && (
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
          <Typography>{props.validation.get('districts')}</Typography>
        </Box>
      )}
    </>
  );
};
