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
import { adminUserServiceForClassImpl, adminDistrictServiceForClassImpl } from '~/generated/data-axios';
import {
  usePageRefreshCreatedByAction,
  useRowRemoveActivityDistrictsAction,
  useRowViewActivityDistrictsAction,
  useTableAddActivityDistrictsAction,
  useTableClearActivityDistrictsAction,
} from '../actions';
import { applyInMemoryFilters } from '~/utilities';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_ADMIN_VIEW_ACTIVITY_DISTRICTS = 'AdminAdminViewActivityDistricts';

export interface ActivityDistrictsTableProps {
  ownerData: AdminUserStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminUserStored, value: any) => void;
  validation: Map<keyof AdminUser, string>;
}

export const ActivityDistrictsTable = (props: ActivityDistrictsTableProps) => {
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { openFilterDialog } = useFilterDialog();
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const openCRUDDialog = useCRUDDialog();

  const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminIssueCreatedByViewDefaultUserViewEditAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapperActivityDistricts-${ownerData.__identifier}-filterModel`;
  const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminIssueCreatedByViewDefaultUserViewEditAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapperActivityDistricts-${ownerData.__identifier}-filters`;
  const [activityDistrictsFilterModel, setActivityDistrictsFilterModel] = useState<GridFilterModel>(
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

  const [activityDistrictsSortModel, setActivityDistrictsSortModel] = useState<GridSortModel>([
    { field: 'representation', sort: null },
  ]);

  const activityDistrictsColumns: GridColDef<AdminDistrictStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.UserView.activityDistricts.representation', { defaultValue: 'District' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const activityDistrictsRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminIssueCreatedByViewDefaultUserViewEditAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapperActivityDistrictsRepresentationFilter',
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

  const pageRefreshCreatedByAction = usePageRefreshCreatedByAction();
  const rowRemoveActivityDistrictsAction = useRowRemoveActivityDistrictsAction();
  const rowViewActivityDistrictsAction = useRowViewActivityDistrictsAction();
  const tableAddActivityDistrictsAction = useTableAddActivityDistrictsAction();
  const tableClearActivityDistrictsAction = useTableClearActivityDistrictsAction();

  const activityDistrictsRowActions: TableRowAction<AdminDistrictStored>[] = [
    {
      id: 'RemoveActionedemokraciaAdminAdminEdemokraciaAdminIssueCreatedByViewEdemokraciaAdminAdminEdemokraciaAdminUserActivityDistrictsRowRemove',
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

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminIssueCreatedByViewDefaultUserViewEditAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapperActivityDistrictsRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.UserView.activityDistricts.representation', { defaultValue: 'District' }) as string,
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
    openCRUDDialog<AdminDistrictStored>({
      dialogTitle: t('judo.dialogs.crud-bulk.remove.title', { defaultValue: 'Remove selected items' }),
      itemTitleFn: (item) => item.representation!,
      selectedItems: selectedRows.current,
      action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
        await rowRemoveActivityDistrictsAction(ownerData, item, successHandler, errorHandler);
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
        setActivityDistrictsFilterModel(storedFilterModel);
      }
    }
  }, [ownerData]);

  useEffect(() => {
    const newData = applyInMemoryFilters<AdminDistrictStored>(filters, ownerData?.activityDistricts ?? []);
    setData(newData);
  }, [ownerData?.activityDistricts, filters]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) =>
            props.validation.has('activityDistricts') ? `2px solid ${theme.palette.error.main}` : undefined,
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
          ...activityDistrictsColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityDistricts',
            activityDistrictsRowActions,
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
            rowViewActivityDistrictsAction(ownerData, params.row, () => fetchOwnerData());
          }
        }}
        sortModel={activityDistrictsSortModel}
        onSortModelChange={(newModel: GridSortModel) => {
          setActivityDistrictsSortModel(newModel);
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
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
                  const res = await openRangeDialog<AdminDistrictStored, AdminDistrictQueryCustomizer>({
                    id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityDistricts',
                    columns: activityDistrictsColumns,
                    defaultSortField: activityDistrictsSortModel[0],
                    rangeCall: async (queryCustomizer) =>
                      await adminUserServiceForClassImpl.getRangeForActivityDistricts(
                        ownerData,
                        processQueryCustomizer(queryCustomizer),
                      ),
                    single: false,
                    alreadySelectedItems: ownerData.activityDistricts ? [...ownerData.activityDistricts] : undefined,
                    filterOptions: activityDistrictsRangeFilterOptions,
                    initialQueryCustomizer: activityDistrictsInitialQueryCustomizer,
                  });

                  if (res) {
                    const newList = [...(ownerData.activityDistricts || []), ...(res.value as AdminDistrictStored[])];
                    storeDiff('activityDistricts', newList);
                  }
                }}
                disabled={isOwnerLoading || false || !isFormUpdateable()}
              >
                {t('judo.pages.table.add', { defaultValue: 'Add' })}
              </Button>
              <Button
                id="TableedemokraciaAdminAdminEdemokraciaAdminIssueCreatedByViewDefaultUserViewEditAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapperActivityDistricts-filter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() =>
                  filter(
                    'TableedemokraciaAdminAdminEdemokraciaAdminIssueCreatedByViewDefaultUserViewEditAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapperActivityDistricts-filter',
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
                  id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityDistricts-bulk-remove"
                  disabled={isOwnerLoading}
                  variant="text"
                  startIcon={<MdiIcon path="link-off" />}
                  onClick={() => {
                    const newList = data.filter((e) => !selectionModel.find((s) => s === e.__identifier));
                    storeDiff('activityDistricts', newList);
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
      {props.validation.has('activityDistricts') && (
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
          <Typography>{props.validation.get('activityDistricts')}</Typography>
        </Box>
      )}
    </>
  );
};
