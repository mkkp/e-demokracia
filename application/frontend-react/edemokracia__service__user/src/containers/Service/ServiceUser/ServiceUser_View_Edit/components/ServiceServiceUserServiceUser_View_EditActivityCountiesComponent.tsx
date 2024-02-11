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
import { GridLogicOperator, GridToolbarContainer, useGridApiRef } from '@mui/x-data-grid';
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
import type { Dispatch, ElementType, MouseEvent, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import { ContextMenu, StripedDataGrid, columnsActionCalculator } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, basePageSizeOptions, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import type {
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  applyInMemoryFilters,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, TableRowAction } from '~/utilities';

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
  activityCountiesRefreshAction?: (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ) => Promise<JudoRestResponse<ServiceCountyStored[]>>;
  getActivityCountiesMask?: () => string;
  activityCountiesRemoveAction?: (row: ServiceCountyStored, silentMode?: boolean) => Promise<void>;
  activityCountiesOpenPageAction?: (row: ServiceCountyStored, isDraft?: boolean) => Promise<void>;
  activityCountiesAdditionalToolbarButtons?: (
    data: ServiceCountyStored[],
    isLoading: boolean,
    selectedRows: ServiceCountyStored[],
    clearSelections: () => void,
    ownerData: ServiceServiceUserStored,
    editMode: boolean,
    isFormUpdateable: () => boolean,
  ) => Record<string, ElementType>;
}

export interface ServiceServiceUserServiceUser_View_EditActivityCountiesComponentProps {
  uniqueId: string;
  actions: ServiceServiceUserServiceUser_View_EditActivityCountiesComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
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
  const {
    uniqueId,
    actions,
    refreshCounter,
    isOwnerLoading,
    isDraft,
    validationError,
    ownerData,
    editMode,
    isFormUpdateable,
  } = props;
  const apiRef = useGridApiRef();
  const filterModelKey = `User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { t } = useTranslation();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceCountyStored>[]>(ownerData?.activityCounties || []);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'representation', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: rowsPerPage,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceCountyQueryCustomizer>({
    _mask: '{representation}',
    _seek: {
      limit: rowsPerPage + 1,
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

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const selectedRows = useRef<ServiceCountyStored[]>([]);

  const representationColumn: GridColDef<ServiceCountyStored> = {
    ...baseColumnConfig,
    field: 'representation',
    headerName: t('service.ServiceUser.ServiceUser_View_Edit.activityCounties.representation', {
      defaultValue: 'County',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };

  const columns = useMemo<GridColDef<ServiceCountyStored>[]>(() => [representationColumn], []);

  const rowActions: TableRowAction<ServiceCountyStored>[] = useMemo(
    () => [
      {
        id: 'User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceTableRowRemoveButton',
        label: t(
          'service.ServiceUser.ServiceUser_View_Edit.Areas.activity.tab_activity_counties.activityCounties.Remove',
          { defaultValue: 'Remove' },
        ) as string,
        icon: <MdiIcon path="link_off" />,
        isCRUD: true,
        disabled: (row: ServiceCountyStored) => getSelectedRows().length > 0 || !isFormUpdateable() || isLoading,
        action: actions.activityCountiesRemoveAction
          ? async (rowData) => {
              await actions.activityCountiesRemoveAction!(rowData);
            }
          : undefined,
      },
    ],
    [actions, isLoading],
  );

  const effectiveTableColumns = useMemo(() => {
    const cols = [
      ...columns,
      ...columnsActionCalculator('User/(esm/_uAEOkIXnEe2kLcMqsIbMgQ)/RelationType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ];
    return cols;
  }, [columns, rowActions]);

  const getRowIdentifier: (row: Pick<ServiceCountyStored, '__identifier'>) => string = (row) => row.__identifier!;

  const getSelectedRows: () => ServiceCountyStored[] = () => {
    return selectedRows.current;
  };

  const clearSelections = () => {
    handleOnSelection([]);
  };

  const additionalToolbarActions: Record<string, ElementType> = actions?.activityCountiesAdditionalToolbarButtons
    ? actions.activityCountiesAdditionalToolbarButtons(
        data,
        isLoading,
        getSelectedRows(),
        clearSelections,
        ownerData,
        editMode,
        isFormUpdateable,
      )
    : {};
  const AdditionalToolbarActions = () => {
    return (
      <>
        {Object.keys(additionalToolbarActions).map((key) => {
          const AdditionalButton = additionalToolbarActions[key];
          return <AdditionalButton key={key} />;
        })}
      </>
    );
  };

  const pageSizeOptions = useMemo(() => {
    const opts: Set<number> = new Set([rowsPerPage, ...basePageSizeOptions]);
    return Array.from(opts.values()).sort((a, b) => a - b);
  }, [rowsPerPage]);

  const setPageSize = useCallback((newValue: number) => {
    setRowsPerPage(newValue);
    setPaginationModel((prevState) => ({
      ...prevState,
      pageSize: newValue,
      page: 0,
    }));

    setQueryCustomizer((prevQueryCustomizer: ServiceCountyQueryCustomizer) => {
      // we need to reset _seek so that previous configuration is erased
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: newValue + 1,
        },
      };
    });
  }, []);

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_cnA48IdkEe2kLcMqsIbMgQ)/TableColumnFilter/(discriminator/User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'representation',
        label: t('service.ServiceUser.ServiceUser_View_Edit.representation', { defaultValue: 'County' }) as string,
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

    setQueryCustomizer((prevQueryCustomizer: ServiceCountyQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of columns.map((c) => c.field)) {
        delete (prevQueryCustomizer as any)[name];
      }
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: rowsPerPage + 1,
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
      // we need to reset _seek so that previous configuration is erased
      return {
        ...strippedQueryCustomizer,
        _orderBy,
        _seek: {
          limit: rowsPerPage + 1,
        },
      };
    });
  }

  const handleOnSelection = (newSelectionModel: GridRowSelectionModel) => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, newSelectionModel);
    setSelectionModel(selectedRows.current.map(getRowIdentifier));
  };

  useEffect(() => {
    const newData = applyInMemoryFilters<ServiceCountyStored>(filters, ownerData?.activityCounties ?? []);
    setData(newData);
    handleOnSelection(selectionModel);
  }, [ownerData?.activityCounties, filters]);

  return (
    <div
      id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable"
      data-table-name="activityCounties"
    >
      <StripedDataGrid
        apiRef={apiRef}
        {...baseTableConfig}
        pageSizeOptions={pageSizeOptions}
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
        getRowId={getRowIdentifier}
        loading={isLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={effectiveTableColumns}
        disableRowSelectionOnClick
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={handleOnSelection}
        keepNonExistentRowsSelected
        onRowClick={
          actions.activityCountiesOpenPageAction
            ? async (params: GridRowParams<ServiceCountyStored>) =>
                await actions.activityCountiesOpenPageAction!(params.row, false)
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
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getActivityCountiesMask
                        ? actions.getActivityCountiesMask()
                        : queryCustomizer._mask,
                    };
                    await actions.activityCountiesRefreshAction!(processedQueryCustomizer);
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.ServiceUser.ServiceUser_View_Edit.Areas.activity.tab_activity_counties.activityCounties.Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.activityCountiesOpenAddSelectorAction && isFormUpdateable() ? (
                <Button
                  id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getActivityCountiesMask
                        ? actions.getActivityCountiesMask()
                        : queryCustomizer._mask,
                    };
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
              {actions.activityCountiesClearAction && data.length && isFormUpdateable() ? (
                <Button
                  id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getActivityCountiesMask
                        ? actions.getActivityCountiesMask()
                        : queryCustomizer._mask,
                    };
                    await actions.activityCountiesClearAction!();
                    handleOnSelection([]);
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
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getActivityCountiesMask
                        ? actions.getActivityCountiesMask()
                        : queryCustomizer._mask,
                    };
                    const { result: bulkResult } = await actions.activityCountiesBulkRemoveAction!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      handleOnSelection([]); // not resetting on refreshes because refreshes would always remove selections...
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
              {<AdditionalToolbarActions />}
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
