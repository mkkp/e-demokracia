//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/table.tsx
// Template file: actor/src/containers/components/table.tsx.hbs

import { useState, useEffect, useMemo, useRef } from 'react';
import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { Box, IconButton, Button, ButtonGroup, Typography } from '@mui/material';
import { GridToolbarContainer, GridLogicOperator } from '@mui/x-data-grid';
import type {
  GridColDef,
  GridFilterModel,
  GridRowModel,
  GridRowId,
  GridRenderCellParams,
  GridRowSelectionModel,
  GridSortItem,
  GridSortModel,
  GridValueFormatterParams,
  GridRowClassNameParams,
  GridRowParams,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { baseColumnConfig, baseTableConfig } from '~/config';
import { MdiIcon } from '~/components';
import {
  booleanColumnOperators,
  dateColumnOperators,
  dateTimeColumnOperators,
  numericColumnOperators,
  singleSelectColumnOperators,
  stringColumnOperators,
  columnsActionCalculator,
  ContextMenu,
  StripedDataGrid,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import type {
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
import { useL10N } from '~/l10n/l10n-context';
import {
  getUpdatedRowsSelected,
  applyInMemoryFilters,
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult, TableRowAction } from '~/utilities';
import { useDataStore } from '~/hooks';
import { OBJECTCLASS } from '@pandino/pandino-api';

export interface ServiceServiceUserServiceUser_View_EditActivityDistrictsComponentActionDefinitions {
  serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddOpenSelector?: () => Promise<void>;
  serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsBulkDelete?: (
    selectedRows: ServiceDistrictStored[],
  ) => Promise<DialogResult<ServiceDistrictStored[]>>;
  serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsBulkRemove?: (
    selectedRows: ServiceDistrictStored[],
  ) => Promise<DialogResult<ServiceDistrictStored[]>>;
  serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsClear?: () => Promise<void>;
  serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsCreateOpen?: () => Promise<void>;
  serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsRefresh?: (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ) => Promise<ServiceDistrictStored[]>;
  serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsDelete?: (
    row: ServiceDistrictStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsRemove?: (
    row: ServiceDistrictStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsView?: (
    row: ServiceDistrictStored,
  ) => Promise<void>;
}

export interface ServiceServiceUserServiceUser_View_EditActivityDistrictsComponentProps {
  uniqueId: string;
  actions: ServiceServiceUserServiceUser_View_EditActivityDistrictsComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceServiceUser;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable
// Name: activityDistricts
export function ServiceServiceUserServiceUser_View_EditActivityDistrictsComponent(
  props: ServiceServiceUserServiceUser_View_EditActivityDistrictsComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceDistrictStored>[]>(ownerData?.activityDistricts || []);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'representation', sort: 'asc' }]);
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

  const columns: GridColDef<ServiceDistrictStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('service.ServiceUser.ServiceUser.View.Edit.representation', { defaultValue: 'District' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const rowActions: TableRowAction<ServiceDistrictStored>[] = [
    {
      id: 'User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceTableRowRemoveButton',
      label: t(
        'service.ServiceUser.ServiceUser.View.Edit.service::ServiceUser::ServiceUser_View_Edit::Areas::activity::activity_districts::activityDistricts::Remove',
        { defaultValue: 'Remove' },
      ) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceDistrictStored) => isLoading,
      action: actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsRemove
        ? async (rowData) => {
            await actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsRemove!(
              rowData,
            );
          }
        : undefined,
    },
    {
      id: 'User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceTableRowDeleteButton',
      label: t(
        'service.ServiceUser.ServiceUser.View.Edit.service::ServiceUser::ServiceUser_View_Edit::Areas::activity::activity_districts::activityDistricts::Delete',
        { defaultValue: 'Delete' },
      ) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceDistrictStored) => editMode || !row.__deleteable || isLoading,
      action: actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsDelete
        ? async (rowData) => {
            await actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsDelete!(
              rowData,
            );
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_fz_HgH2GEe6V8KKnnZfChA',
      attributeName: 'representation',
      label: t('service.ServiceUser.ServiceUser.View.Edit.representation::Filter', {
        defaultValue: 'District',
      }) as string,
      filterType: FilterType.string,
    },
  ];

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
      return {
        ...strippedQueryCustomizer,
        _orderBy,
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
    <>
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
          ...columnsActionCalculator('User/(esm/_c8TWIIXoEe2kLcMqsIbMgQ)/RelationType', rowActions, t, {
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
          actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsView
            ? async (params: GridRowParams<ServiceDistrictStored>) =>
                await actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsView!(
                  params.row,
                )
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsFilter &&
              true ? (
                <Button
                  id="User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults =
                      await actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsFilter!(
                        'User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceTableFilterButton',
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
                    'service.ServiceUser.ServiceUser.View.Edit.service::ServiceUser::ServiceUser_View_Edit::Areas::activity::activity_districts::activityDistricts::Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsRefresh &&
              true ? (
                <Button
                  id="User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.ServiceUser.ServiceUser.View.Edit.service::ServiceUser::ServiceUser_View_Edit::Areas::activity::activity_districts::activityDistricts::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsCreateOpen &&
              true ? (
                <Button
                  id="User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsCreateOpen!();
                  }}
                  disabled={editMode || isLoading}
                >
                  {t(
                    'service.ServiceUser.ServiceUser.View.Edit.service::ServiceUser::ServiceUser_View_Edit::Areas::activity::activity_districts::activityDistricts::Create',
                    { defaultValue: 'Create' },
                  )}
                </Button>
              ) : null}
              {actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddOpenSelector &&
              true ? (
                <Button
                  id="User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddOpenSelector!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.ServiceUser.ServiceUser.View.Edit.service::ServiceUser::ServiceUser_View_Edit::Areas::activity::activity_districts::activityDistricts::Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsClear &&
              data.length ? (
                <Button
                  id="User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsClear!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.ServiceUser.ServiceUser.View.Edit.service::ServiceUser::ServiceUser_View_Edit::Areas::activity::activity_districts::activityDistricts::Clear',
                    { defaultValue: 'Clear' },
                  )}
                </Button>
              ) : null}
              {actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsBulkRemove &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsBulkRemove!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.ServiceUser.ServiceUser.View.Edit.service::ServiceUser::ServiceUser_View_Edit::Areas::activity::activity_districts::activityDistricts::BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsBulkDelete &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsBulkDelete!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'service.ServiceUser.ServiceUser.View.Edit.service::ServiceUser::ServiceUser_View_Edit::Areas::activity::activity_districts::activityDistricts::BulkDelete',
                    { defaultValue: 'Delete' },
                  )}
                </Button>
              ) : null}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
        }}
      />
      {validationError && (
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
      )}
    </>
  );
}
