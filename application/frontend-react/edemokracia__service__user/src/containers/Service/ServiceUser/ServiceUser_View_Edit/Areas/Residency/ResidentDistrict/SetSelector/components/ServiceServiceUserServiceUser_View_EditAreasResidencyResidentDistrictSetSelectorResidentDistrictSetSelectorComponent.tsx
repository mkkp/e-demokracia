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
import { CustomTablePagination, MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import { ContextMenu, StripedDataGrid, columnsActionCalculator } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, basePageSizeOptions, baseTableConfig, filterDebounceMs } from '~/config';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { useDataStore } from '~/hooks';
import type { ServiceDistrict, ServiceDistrictQueryCustomizer, ServiceDistrictStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  isRowSelectable,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  randomUtils,
  useErrorHandler,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, SidekickComponentProps, TableRowAction } from '~/utilities';

export interface ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorResidentDistrictSetSelectorComponentActionDefinitions {
  openCreateFormAction?: () => Promise<void>;
  filterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  selectorRangeAction?: (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ) => Promise<JudoRestResponse<ServiceDistrictStored[]>>;
  residentDistrictAdditionalToolbarButtons?: (
    data: ServiceDistrictStored[],
    isLoading: boolean,
    selectedRows: ServiceDistrictStored[],
    clearSelections: () => void,
  ) => Record<string, ElementType>;
}

export interface ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorResidentDistrictSetSelectorComponentProps {
  uniqueId: string;
  actions: ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorResidentDistrictSetSelectorComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
  validationError?: string;
  selectionDiff: ServiceDistrictStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceDistrictStored[]>>;
  alreadySelected: ServiceDistrictStored[];
}

export const SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_DISTRICT_SET_SELECTOR_RESIDENT_DISTRICT_SET_SELECTOR_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY =
  'ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorResidentDistrictSetSelectorComponentSidekickComponent';

// XMIID: User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorTable
// Name: residentDistrict::Set::Selector
export function ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorResidentDistrictSetSelectorComponent(
  props: ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorResidentDistrictSetSelectorComponentProps,
) {
  const {
    uniqueId,
    actions,
    refreshCounter,
    isOwnerLoading,
    isDraft,
    validationError,
    selectionDiff,
    setSelectionDiff,
    alreadySelected,
  } = props;
  const apiRef = useGridApiRef();
  const generatorUUIDv4 = randomUtils.getGeneratorUUIDv4();
  const sidekickComponentFilter = `(&(${OBJECTCLASS}=${CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY})(component=${SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_DISTRICT_SET_SELECTOR_RESIDENT_DISTRICT_SET_SELECTOR_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY}))`;
  const filterModelKey = `User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorTable-${uniqueId}-${generatorUUIDv4}-filterModel`;
  const filtersKey = `User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorTable-${uniqueId}-${generatorUUIDv4}-filters`;
  const rowsPerPageKey = `User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorTable-${uniqueId}-${generatorUUIDv4}-rowsPerPage`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceDistrictStored>[]>([]);
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
  const [page, setPage] = useState<number>(0);
  const [rowCount, setRowCount] = useState<number>(0);
  const [lastItem, setLastItem] = useState<ServiceDistrictStored>();
  const [firstItem, setFirstItem] = useState<ServiceDistrictStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const SidekickComponent =
    useTrackComponent<FC<SidekickComponentProps<ServiceDistrictStored>>>(sidekickComponentFilter);

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const representationColumn: GridColDef<ServiceDistrictStored> = {
    ...baseColumnConfig,
    field: 'representation',
    headerName: t(
      'service.ServiceUser.ServiceUser_View_Edit.Areas.Residency.residentDistrict.SetSelector.representation',
      { defaultValue: 'District' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };

  const columns = useMemo<GridColDef<ServiceDistrictStored>[]>(() => [representationColumn], []);

  const rowActions: TableRowAction<ServiceDistrictStored>[] = useMemo(() => [], [actions, isLoading]);

  const effectiveTableColumns = useMemo(() => {
    const cols = [
      ...columns,
      ...columnsActionCalculator('User/(esm/_iEh0MIXoEe2kLcMqsIbMgQ)/RelationType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ];
    return cols;
  }, [columns, rowActions]);

  const getRowIdentifier: (row: Pick<ServiceDistrictStored, '__identifier'>) => string = (row) => row.__identifier!;

  const getSelectedRows: () => ServiceDistrictStored[] = () => {
    return selectionDiff;
  };

  const clearSelections = () => {
    handleOnSelection([]);
  };

  const additionalToolbarActions: Record<string, ElementType> = actions?.residentDistrictAdditionalToolbarButtons
    ? actions.residentDistrictAdditionalToolbarButtons(data, isLoading, getSelectedRows(), clearSelections)
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
    setPage(0);

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
        id: 'User/(esm/_o1oK4IdkEe2kLcMqsIbMgQ)/TableColumnFilter/(discriminator/User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorTable)',
        attributeName: 'representation',
        label: t(
          'service.ServiceUser.ServiceUser_View_Edit.Areas.Residency.residentDistrict.SetSelector.representation',
          { defaultValue: 'District' },
        ) as string,
        filterType: FilterType.string,
      },
    ],
    [],
  );

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
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
    setPage(0);
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

  async function handlePageChange(isNext: boolean) {
    setQueryCustomizer((prevQueryCustomizer) => {
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: isNext ? rowsPerPage + 1 : rowsPerPage,
          reverse: !isNext,
          lastItem: isNext ? lastItem : firstItem,
        },
      };
    });

    setIsNextButtonEnabled(!isNext);
  }

  const handleIsRowSelectable = useCallback(
    (params: GridRowParams<ServiceDistrictStored & { __selected?: boolean }>) => {
      return isRowSelectable(params.row, !false, alreadySelected);
    },
    [],
  );

  const handleOnSelection = (newSelectionModel: GridRowSelectionModel) => {
    if (!Array.isArray(selectionModel)) return;
    if (newSelectionModel.length === 0) {
      setSelectionModel([]);
      setSelectionDiff([]);
      return;
    }

    const lastId = newSelectionModel[newSelectionModel.length - 1];

    setSelectionModel([lastId]);
    setSelectionDiff([data.find((value) => value.__identifier === lastId)!]);
  };

  async function fetchData() {
    setIsInternalLoading(true);

    try {
      const processedQueryCustomizer = {
        ...processQueryCustomizer(queryCustomizer),
      };
      const { data: res, headers } = await actions.selectorRangeAction!(processedQueryCustomizer);

      if (res.length > rowsPerPage) {
        setIsNextButtonEnabled(true);
        res.pop();
      } else if (queryCustomizer._seek?.limit === rowsPerPage + 1) {
        setIsNextButtonEnabled(false);
      }

      setData(res);
      setFirstItem(res[0]);
      setLastItem(res[res.length - 1]);
      setRowCount(res.length || 0);
    } catch (error) {
      handleError(error);
    } finally {
      setIsInternalLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    handleOnSelection(selectionModel);
  }, [queryCustomizer, refreshCounter]);

  return (
    <div
      id="User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorTable"
      data-table-name="residentDistrict::Set::Selector"
    >
      <ComponentProxy
        filter={sidekickComponentFilter}
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
        isRowSelectable={handleIsRowSelectable}
        hideFooterSelectedRowCount={!false}
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={handleOnSelection}
        keepNonExistentRowsSelected
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
        filterDebounceMs={filterDebounceMs}
        rowCount={rowsPerPage}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.filterAction && true ? (
                <Button
                  id="User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.filterAction!(
                      'User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorTableFilterButton',
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
              {actions.selectorRangeAction && true ? (
                <Button
                  id="User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                    };
                    await actions.selectorRangeAction!(processedQueryCustomizer);
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.openCreateFormAction && true ? (
                <Button
                  id="User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                    };
                    await actions.openCreateFormAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.open-create-form', { defaultValue: 'Create' })}
                </Button>
              ) : null}
              {<AdditionalToolbarActions />}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
          Pagination: () => (
            <CustomTablePagination
              pageSizeOptions={pageSizeOptions}
              setPageSize={setPageSize}
              pageChange={handlePageChange}
              isNextButtonEnabled={isNextButtonEnabled}
              page={page}
              setPage={setPage}
              rowPerPage={rowsPerPage}
            />
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
