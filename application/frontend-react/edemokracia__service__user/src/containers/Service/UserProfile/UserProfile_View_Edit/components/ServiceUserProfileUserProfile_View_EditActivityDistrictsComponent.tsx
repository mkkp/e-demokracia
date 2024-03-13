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
import { ComponentProxy, useTrackComponent } from '@pandino/react-hooks';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, ElementType, FC, MouseEvent, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import { ContextMenu, StripedDataGrid, columnsActionCalculator } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, basePageSizeOptions, baseTableConfig } from '~/config';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { useDataStore } from '~/hooks';
import type {
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceUserProfile,
  ServiceUserProfileStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  applyInMemoryFilters,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  randomUtils,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, SidekickComponentProps, TableRowAction } from '~/utilities';

export interface ServiceUserProfileUserProfile_View_EditActivityDistrictsComponentActionDefinitions {
  activityDistrictsOpenAddSelectorAction?: () => Promise<void>;
  activityDistrictsBulkRemoveAction?: (
    selectedRows: ServiceDistrictStored[],
  ) => Promise<DialogResult<ServiceDistrictStored[]>>;
  activityDistrictsClearAction?: () => Promise<void>;
  activityDistrictsFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  activityDistrictsRefreshAction?: (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ) => Promise<JudoRestResponse<ServiceDistrictStored[]>>;
  getActivityDistrictsMask?: () => string;
  activityDistrictsRemoveAction?: (row: ServiceDistrictStored, silentMode?: boolean) => Promise<void>;
  activityDistrictsOpenPageAction?: (row: ServiceDistrictStored, isDraft?: boolean) => Promise<void>;
  activityDistrictsAdditionalToolbarButtons?: (
    data: ServiceDistrictStored[],
    isLoading: boolean,
    selectedRows: ServiceDistrictStored[],
    clearSelections: () => void,
    ownerData: ServiceUserProfileStored,
    editMode: boolean,
    isFormUpdateable: () => boolean,
  ) => Record<string, ElementType>;
}

export interface ServiceUserProfileUserProfile_View_EditActivityDistrictsComponentProps {
  uniqueId: string;
  actions: ServiceUserProfileUserProfile_View_EditActivityDistrictsComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
  validationError?: string;
  ownerData: ServiceUserProfileStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

export const SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_ACTIVITY_DISTRICTS_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY =
  'ServiceUserProfileUserProfile_View_EditActivityDistrictsComponentSidekickComponent';

// XMIID: User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable
// Name: activityDistricts
export function ServiceUserProfileUserProfile_View_EditActivityDistrictsComponent(
  props: ServiceUserProfileUserProfile_View_EditActivityDistrictsComponentProps,
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
  const generatorUUIDv4 = randomUtils.getGeneratorUUIDv4();
  const sidekickComponentFilter = `(&(${OBJECTCLASS}=${CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY})(component=${SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_ACTIVITY_DISTRICTS_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY}))`;
  const filterModelKey = `User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-filterModel`;
  const filtersKey = `User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-filters`;
  const rowsPerPageKey = `User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-rowsPerPage`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { t } = useTranslation();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceDistrictStored>[]>(ownerData?.activityDistricts || []);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'representation', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [rowsPerPage, setRowsPerPage] = useState<number>(getItemParsedWithDefault(rowsPerPageKey, 10));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: rowsPerPage,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceDistrictQueryCustomizer>({
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
  const SidekickComponent =
    useTrackComponent<FC<SidekickComponentProps<ServiceDistrictStored>>>(sidekickComponentFilter);

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const selectedRows = useRef<ServiceDistrictStored[]>([]);

  const representationColumn: GridColDef<ServiceDistrictStored> = {
    ...baseColumnConfig,
    field: 'representation',
    headerName: t('service.UserProfile.UserProfile_View_Edit.activityDistricts.representation', {
      defaultValue: 'District',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };

  const columns = useMemo<GridColDef<ServiceDistrictStored>[]>(() => [representationColumn], []);

  const rowActions: TableRowAction<ServiceDistrictStored>[] = useMemo(
    () => [
      {
        id: 'User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceTableRowRemoveButton',
        label: t('judo.action.remove', { defaultValue: 'Remove' }) as string,
        icon: <MdiIcon path="link_off" />,
        isCRUD: true,
        disabled: (row: ServiceDistrictStored) => getSelectedRows().length > 0 || !isFormUpdateable() || isLoading,
        action: actions.activityDistrictsRemoveAction
          ? async (rowData) => {
              await actions.activityDistrictsRemoveAction!(rowData);
            }
          : undefined,
      },
    ],
    [actions, isLoading],
  );

  const effectiveTableColumns = useMemo(() => {
    const cols = [
      ...columns,
      ...columnsActionCalculator('User/(esm/_8b4xEFvREe6jm_SkPSYEYw)/RelationType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ];
    return cols;
  }, [columns, rowActions]);

  const getRowIdentifier: (row: Pick<ServiceDistrictStored, '__identifier'>) => string = (row) => row.__identifier!;

  const getSelectedRows: () => ServiceDistrictStored[] = () => {
    return selectedRows.current;
  };

  const clearSelections = () => {
    handleOnSelection([]);
  };

  const additionalToolbarActions: Record<string, ElementType> = actions?.activityDistrictsAdditionalToolbarButtons
    ? actions.activityDistrictsAdditionalToolbarButtons(
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
    setItemStringified(rowsPerPageKey, newValue);
    setPaginationModel((prevState) => ({
      ...prevState,
      pageSize: newValue,
      page: 0,
    }));

    setQueryCustomizer((prevQueryCustomizer: ServiceDistrictQueryCustomizer) => {
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
    const newData = applyInMemoryFilters<ServiceDistrictStored>(filters, ownerData?.activityDistricts ?? []);
    setData(newData);
    handleOnSelection(selectionModel);
  }, [ownerData?.activityDistricts, filters]);

  return (
    <div
      id="User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable"
      data-table-name="activityDistricts"
    >
      <ComponentProxy
        filter={sidekickComponentFilter}
        editMode={editMode}
        isLoading={isLoading}
        filters={filters}
        onFiltersChange={handleFiltersChange}
        data={data}
      />
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
          actions.activityDistrictsOpenPageAction
            ? async (params: GridRowParams<ServiceDistrictStored>) =>
                await actions.activityDistrictsOpenPageAction!(params.row, false)
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
                  {t('judo.action.filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.activityDistrictsRefreshAction && true ? (
                <Button
                  id="User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getActivityDistrictsMask
                        ? actions.getActivityDistrictsMask()
                        : queryCustomizer._mask,
                    };
                    await actions.activityDistrictsRefreshAction!(processedQueryCustomizer);
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.activityDistrictsOpenAddSelectorAction && isFormUpdateable() ? (
                <Button
                  id="User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getActivityDistrictsMask
                        ? actions.getActivityDistrictsMask()
                        : queryCustomizer._mask,
                    };
                    await actions.activityDistrictsOpenAddSelectorAction!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t('judo.action.open-add-selector', { defaultValue: 'Add' })}
                </Button>
              ) : null}
              {actions.activityDistrictsClearAction && data.length && isFormUpdateable() ? (
                <Button
                  id="User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getActivityDistrictsMask
                        ? actions.getActivityDistrictsMask()
                        : queryCustomizer._mask,
                    };
                    await actions.activityDistrictsClearAction!();
                    handleOnSelection([]);
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t('judo.action.clear', { defaultValue: 'Clear' })}
                </Button>
              ) : null}
              {actions.activityDistrictsBulkRemoveAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getActivityDistrictsMask
                        ? actions.getActivityDistrictsMask()
                        : queryCustomizer._mask,
                    };
                    const { result: bulkResult } = await actions.activityDistrictsBulkRemoveAction!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      handleOnSelection([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.bulk-remove', { defaultValue: 'Remove' })}
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
