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
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceUserProfile,
  ServiceUserProfileStored,
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

export interface ServiceUserProfileUserProfile_View_EditActivityCountiesComponentActionDefinitions {
  serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddOpenSelector?: () => Promise<void>;
  serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesBulkDelete?: (
    selectedRows: ServiceCountyStored[],
  ) => Promise<DialogResult<ServiceCountyStored[]>>;
  serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesBulkRemove?: (
    selectedRows: ServiceCountyStored[],
  ) => Promise<DialogResult<ServiceCountyStored[]>>;
  serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesClear?: () => Promise<void>;
  serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesCreateOpen?: () => Promise<void>;
  serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesRefresh?: (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ) => Promise<ServiceCountyStored[]>;
  serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesDelete?: (
    row: ServiceCountyStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesRemove?: (
    row: ServiceCountyStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesView?: (
    row: ServiceCountyStored,
  ) => Promise<void>;
}

export interface ServiceUserProfileUserProfile_View_EditActivityCountiesComponentProps {
  uniqueId: string;
  actions: ServiceUserProfileUserProfile_View_EditActivityCountiesComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceUserProfile;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable
// Name: activityCounties
export function ServiceUserProfileUserProfile_View_EditActivityCountiesComponent(
  props: ServiceUserProfileUserProfile_View_EditActivityCountiesComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceCountyStored>[]>(ownerData?.activityCounties || []);
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
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceCountyQueryCustomizer>({
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

  const selectedRows = useRef<ServiceCountyStored[]>([]);

  const columns: GridColDef<ServiceCountyStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('service.UserProfile.UserProfile.View.Edit.representation', { defaultValue: 'County' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const rowActions: TableRowAction<ServiceCountyStored>[] = [
    {
      id: 'User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceTableRowRemoveButton',
      label: t(
        'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::tab_activity_counties::activityCounties::Remove',
        { defaultValue: 'Remove' },
      ) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceCountyStored) => isLoading,
      action: actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesRemove
        ? async (rowData) => {
            await actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesRemove!(
              rowData,
            );
          }
        : undefined,
    },
    {
      id: 'User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceTableRowDeleteButton',
      label: t(
        'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::tab_activity_counties::activityCounties::Delete',
        { defaultValue: 'Delete' },
      ) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceCountyStored) => editMode || !row.__deleteable || isLoading,
      action: actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesDelete
        ? async (rowData) => {
            await actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesDelete!(
              rowData,
            );
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_f8cf8X2GEe6V8KKnnZfChA',
      attributeName: 'representation',
      label: t('service.UserProfile.UserProfile.View.Edit.representation::Filter', {
        defaultValue: 'County',
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

    setQueryCustomizer((prevQueryCustomizer: ServiceCountyQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceCountyQueryCustomizer = {
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
    const newData = applyInMemoryFilters<ServiceCountyStored>(filters, ownerData?.activityCounties ?? []);
    setData(newData);
  }, [ownerData?.activityCounties, filters]);

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
          ...columnsActionCalculator('User/(esm/_gu_zQFvREe6jm_SkPSYEYw)/RelationType', rowActions, t, {
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
          actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesView
            ? async (params: GridRowParams<ServiceCountyStored>) =>
                await actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesView!(
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
              {actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesFilter &&
              true ? (
                <Button
                  id="User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults =
                      await actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesFilter!(
                        'User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceTableFilterButton',
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
                    'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::tab_activity_counties::activityCounties::Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesRefresh &&
              true ? (
                <Button
                  id="User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::tab_activity_counties::activityCounties::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesCreateOpen &&
              true ? (
                <Button
                  id="User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesCreateOpen!();
                  }}
                  disabled={editMode || isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::tab_activity_counties::activityCounties::Create',
                    { defaultValue: 'Create' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddOpenSelector &&
              true ? (
                <Button
                  id="User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddOpenSelector!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::tab_activity_counties::activityCounties::Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesClear &&
              data.length ? (
                <Button
                  id="User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesClear!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::tab_activity_counties::activityCounties::Clear',
                    { defaultValue: 'Clear' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesBulkRemove &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesBulkRemove!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::tab_activity_counties::activityCounties::BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesBulkDelete &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesBulkDelete!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'service.UserProfile.UserProfile.View.Edit.service::UserProfile::UserProfile_View_Edit::Areas::activity::tab_activity_counties::activityCounties::BulkDelete',
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
