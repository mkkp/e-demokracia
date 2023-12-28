//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/table.tsx
// Template file: actor/src/containers/components/table.tsx.hbs

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { GridLogicOperator, GridToolbarContainer } from '@mui/x-data-grid';
import type {
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridRowClassNameParams,
  GridRowId,
  GridRowModel,
  GridRowParams,
  GridRowSelectionModel,
  GridSortItem,
  GridSortModel,
  GridValidRowModel,
  GridValueFormatterParams,
} from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import { ContextMenu, StripedDataGrid, columnsActionCalculator } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import type {
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceUserProfile,
  ServiceUserProfileStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  applyInMemoryFilters,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, TableRowAction } from '~/utilities';

export interface ServiceUserProfileUserProfile_View_EditActivityDistrictsComponentActionDefinitions {
  activityDistrictsOpenAddSelectorAction?: () => Promise<void>;
  activityDistrictsBulkRemoveAction?: (
    selectedRows: ServiceDistrictStored[],
  ) => Promise<DialogResult<ServiceDistrictStored[]>>;
  activityDistrictsFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  activityDistrictsRefreshAction?: (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ) => Promise<ServiceDistrictStored[]>;
  activityDistrictsRemoveAction?: (row: ServiceDistrictStored, silentMode?: boolean) => Promise<void>;
  activityDistrictsOpenPageAction?: (row: ServiceDistrictStored) => Promise<void>;
}

export interface ServiceUserProfileUserProfile_View_EditActivityDistrictsComponentProps {
  uniqueId: string;
  actions: ServiceUserProfileUserProfile_View_EditActivityDistrictsComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceUserProfileStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable
// Name: activityDistricts
export function ServiceUserProfileUserProfile_View_EditActivityDistrictsComponent(
  props: ServiceUserProfileUserProfile_View_EditActivityDistrictsComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceDistrictStored>[]>(ownerData?.activityDistricts || []);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'representation', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceDistrictQueryCustomizer>({
    _mask: '{representation}',
    _seek: {
      limit: 10 + 1,
    },
    _orderBy: sortModel.length
      ? [
          {
            attribute: sortModel[0].field,
            descending: sortModel[0].sort === 'desc',
          },
        ]
      : [],
    ...mapAllFiltersToQueryCustomizerProperties(filters),
  });

  const selectedRows = useRef<ServiceDistrictStored[]>([]);

  const representationColumn: GridColDef<ServiceDistrictStored> = {
    ...baseColumnConfig,
    field: 'representation',
    headerName: t('service.UserProfile.UserProfile_View_Edit.representation', { defaultValue: 'District' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };

  const columns = useMemo<GridColDef<ServiceDistrictStored>[]>(() => [representationColumn], []);

  const rowActions: TableRowAction<ServiceDistrictStored>[] = [
    {
      id: 'User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceTableRowRemoveButton',
      label: t('service.UserProfile.UserProfile_View_Edit.Areas.activity.activity_districts.activityDistricts.Remove', {
        defaultValue: 'Remove',
      }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceDistrictStored) => !isFormUpdateable() || isLoading,
      action: actions.activityDistrictsRemoveAction
        ? async (rowData) => {
            await actions.activityDistrictsRemoveAction!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_fsW_sVvTEe6jm_SkPSYEYw)/TableColumnFilter/(discriminator/User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'representation',
        label: t('service.UserProfile.UserProfile_View_Edit.representation', { defaultValue: 'District' }) as string,
        filterType: FilterType.string,
      },
    ],
    [],
  );

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPaginationModel((prevState) => ({
      ...prevState,
      page: 0,
    }));
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceDistrictQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of columns.map((c) => c.field)) {
        delete (prevQueryCustomizer as any)[name];
      }
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: 10 + 1,
        },
        ...mapAllFiltersToQueryCustomizerProperties(newFilters),
      };
    });
  };

  function handleSortModelChange(newModel: GridSortModel) {
    setPaginationModel((prevState) => ({
      ...prevState,
      page: 0,
    }));
    setSortModel(newModel);

    const _orderBy = newModel
      .filter((m) => m.sort)
      .map((m) => ({
        attribute: m.field,
        descending: m.sort === 'desc',
      }));

    setQueryCustomizer((prevQueryCustomizer) => {
      const strippedQueryCustomizer: ServiceDistrictQueryCustomizer = {
        ...prevQueryCustomizer,
      };
      if (!!strippedQueryCustomizer._seek) {
        delete strippedQueryCustomizer._seek.lastItem;
      }
      // we need to reset _seek so that previous configuration is erased
      return {
        ...strippedQueryCustomizer,
        _orderBy,
        _seek: {
          limit: 10 + 1,
        },
      };
    });
  }

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  useEffect(() => {
    const newData = applyInMemoryFilters<ServiceDistrictStored>(filters, ownerData?.activityDistricts ?? []);
    setData(newData);
  }, [ownerData?.activityDistricts, filters]);

  return (
    <div
      id="User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable"
      data-table-name="activityDistricts"
    >
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[paginationModel.pageSize]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) => (validationError ? `2px solid ${theme.palette.error.main}` : undefined),
        }}
        slotProps={{
          filterPanel: {
            logicOperators: [GridLogicOperator.And],
          },
        }}
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...columns,
          ...columnsActionCalculator('User/(esm/_8b4xEFvREe6jm_SkPSYEYw)/RelationType', rowActions, t, {
            shownActions: 2,
          }),
        ]}
        disableRowSelectionOnClick
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setSelectionModel(newRowSelectionModel);
        }}
        keepNonExistentRowsSelected
        onRowClick={
          actions.activityDistrictsOpenPageAction
            ? async (params: GridRowParams<ServiceDistrictStored>) =>
                await actions.activityDistrictsOpenPageAction!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.activityDistrictsFilterAction && true ? (
                <Button
                  id="User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.activityDistrictsFilterAction!(
                      'User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceTableFilterButton',
                      filterOptions,
                      filterModel,
                      filters,
                    );
                    if (Array.isArray(filterResults.filters)) {
                      handleFiltersChange([...filterResults.filters!]);
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile_View_Edit.Areas.activity.activity_districts.activityDistricts.Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.activityDistrictsRefreshAction && true ? (
                <Button
                  id="User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.activityDistrictsRefreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile_View_Edit.Areas.activity.activity_districts.activityDistricts.Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.activityDistrictsOpenAddSelectorAction && isFormUpdateable() ? (
                <Button
                  id="User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.activityDistrictsOpenAddSelectorAction!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile_View_Edit.Areas.activity.activity_districts.activityDistricts.Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.activityDistrictsBulkRemoveAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.activityDistrictsBulkRemoveAction!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile_View_Edit.Areas.activity.activity_districts.activityDistricts.BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
        }}
      />
      {validationError ? (
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
          <Typography>{validationError}</Typography>
        </Box>
      ) : null}
    </div>
  );
}
