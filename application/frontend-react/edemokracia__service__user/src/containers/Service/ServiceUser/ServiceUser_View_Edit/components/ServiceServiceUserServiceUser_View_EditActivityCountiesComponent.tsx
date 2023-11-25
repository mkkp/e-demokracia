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
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
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
import { columnsActionCalculator, ContextMenu, StripedDataGrid } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import type {
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
import {
  getUpdatedRowsSelected,
  applyInMemoryFilters,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
} from '~/utilities';
import type { DialogResult, TableRowAction } from '~/utilities';
import { useDataStore } from '~/hooks';
import { OBJECTCLASS } from '@pandino/pandino-api';

export interface ServiceServiceUserServiceUser_View_EditActivityCountiesComponentActionDefinitions {
  activityCountiesOpenAddSelectorAction?: () => Promise<void>;
  activityCountiesBulkRemoveAction?: (
    selectedRows: ServiceCountyStored[],
  ) => Promise<DialogResult<ServiceCountyStored[]>>;
  activityCountiesClearAction?: () => Promise<void>;
  activityCountiesFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  activityCountiesRefreshAction?: (queryCustomizer: ServiceCountyQueryCustomizer) => Promise<ServiceCountyStored[]>;
  activityCountiesRemoveAction?: (row: ServiceCountyStored, silentMode?: boolean) => Promise<void>;
  activityCountiesOpenPageAction?: (row: ServiceCountyStored) => Promise<void>;
}

export interface ServiceServiceUserServiceUser_View_EditActivityCountiesComponentProps {
  uniqueId: string;
  actions: ServiceServiceUserServiceUser_View_EditActivityCountiesComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceServiceUserStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable
// Name: activityCounties
export function ServiceServiceUserServiceUser_View_EditActivityCountiesComponent(
  props: ServiceServiceUserServiceUser_View_EditActivityCountiesComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { t } = useTranslation();

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
      headerName: t('service.ServiceUser.ServiceUser_View_Edit.representation', { defaultValue: 'County' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const rowActions: TableRowAction<ServiceCountyStored>[] = [
    {
      id: 'User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceTableRowRemoveButton',
      label: t(
        'service.ServiceUser.ServiceUser_View_Edit.Areas.activity.tab_activity_counties.activityCounties.Remove',
        { defaultValue: 'Remove' },
      ) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceCountyStored) => isLoading,
      action: actions.activityCountiesRemoveAction
        ? async (rowData) => {
            await actions.activityCountiesRemoveAction!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_G5nS4oujEe6laYH8Xw7WEw',
      attributeName: 'representation',
      label: t('service.ServiceUser.ServiceUser_View_Edit.representation', { defaultValue: 'County' }) as string,
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
    <div
      id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable"
      data-table-name="activityCounties"
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
          ...columnsActionCalculator('User/(esm/_uAEOkIXnEe2kLcMqsIbMgQ)/RelationType', rowActions, t, {
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
          actions.activityCountiesOpenPageAction
            ? async (params: GridRowParams<ServiceCountyStored>) =>
                await actions.activityCountiesOpenPageAction!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.activityCountiesFilterAction && true ? (
                <Button
                  id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.activityCountiesFilterAction!(
                      'User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceTableFilterButton',
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
                    'service.ServiceUser.ServiceUser_View_Edit.Areas.activity.tab_activity_counties.activityCounties.Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.activityCountiesRefreshAction && true ? (
                <Button
                  id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.activityCountiesRefreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.ServiceUser.ServiceUser_View_Edit.Areas.activity.tab_activity_counties.activityCounties.Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.activityCountiesOpenAddSelectorAction && true ? (
                <Button
                  id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.activityCountiesOpenAddSelectorAction!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.ServiceUser.ServiceUser_View_Edit.Areas.activity.tab_activity_counties.activityCounties.Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.activityCountiesClearAction && data.length ? (
                <Button
                  id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.activityCountiesClearAction!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.ServiceUser.ServiceUser_View_Edit.Areas.activity.tab_activity_counties.activityCounties.Clear',
                    { defaultValue: 'Clear' },
                  )}
                </Button>
              ) : null}
              {actions.activityCountiesBulkRemoveAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.activityCountiesBulkRemoveAction!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.ServiceUser.ServiceUser_View_Edit.Areas.activity.tab_activity_counties.activityCounties.BulkRemove',
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
