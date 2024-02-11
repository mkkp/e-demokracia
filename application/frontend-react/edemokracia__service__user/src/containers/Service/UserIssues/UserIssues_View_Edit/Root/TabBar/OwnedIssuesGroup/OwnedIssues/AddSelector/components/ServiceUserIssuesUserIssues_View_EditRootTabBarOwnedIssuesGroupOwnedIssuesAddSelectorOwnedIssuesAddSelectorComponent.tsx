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
import { CustomTablePagination, MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import {
  ContextMenu,
  StripedDataGrid,
  columnsActionCalculator,
  dateTimeColumnOperators,
  singleSelectColumnOperators,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, basePageSizeOptions, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type { ServiceIssue, ServiceIssueQueryCustomizer, ServiceIssueStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  isRowSelectable,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  serviceDateToUiDate,
  useErrorHandler,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, TableRowAction } from '~/utilities';

export interface ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponentActionDefinitions {
  openFormAction?: () => Promise<void>;
  filterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  selectorRangeAction?: (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ) => Promise<JudoRestResponse<ServiceIssueStored[]>>;
  ownedIssuesAdditionalToolbarButtons?: (
    data: ServiceIssueStored[],
    isLoading: boolean,
    selectedRows: ServiceIssueStored[],
    clearSelections: () => void,
  ) => Record<string, ElementType>;
}

export interface ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponentProps {
  uniqueId: string;
  actions: ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
  validationError?: string;
  selectionDiff: ServiceIssueStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceIssueStored[]>>;
  alreadySelected: ServiceIssueStored[];
}

// XMIID: User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTable
// Name: ownedIssues::Add::Selector
export function ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponent(
  props: ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponentProps,
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
  const filterModelKey = `User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceIssueStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'scope', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: rowsPerPage,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceIssueQueryCustomizer>({
    _mask: '{cityRepresentation,countyRepresentation,created,districtRepresentation,scope,status,title}',
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
  const [lastItem, setLastItem] = useState<ServiceIssueStored>();
  const [firstItem, setFirstItem] = useState<ServiceIssueStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const scopeColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'scope',
    headerName: t(
      'service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.AddSelector.scope',
      { defaultValue: 'Scope' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.IssueScope.${value}`, { defaultValue: value });
      }
    },
  };
  const countyRepresentationColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'countyRepresentation',
    headerName: t(
      'service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.AddSelector.countyRepresentation',
      { defaultValue: 'CountyRepresentation' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const cityRepresentationColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'cityRepresentation',
    headerName: t(
      'service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.AddSelector.cityRepresentation',
      { defaultValue: 'CityRepresentation' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const districtRepresentationColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'districtRepresentation',
    headerName: t(
      'service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.AddSelector.districtRepresentation',
      { defaultValue: 'DistrictRepresentation' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const titleColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'title',
    headerName: t(
      'service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.AddSelector.title',
      { defaultValue: 'Title' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const createdColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t(
      'service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.AddSelector.created',
      { defaultValue: 'Created' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'dateTime',
    filterable: false && true,
    valueGetter: ({ value }) => value && serviceDateToUiDate(value),
    valueFormatter: ({ value }: GridValueFormatterParams<Date>) => {
      return (
        value &&
        new Intl.DateTimeFormat(l10nLocale, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(value)
      );
    },
  };
  const statusColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'status',
    headerName: t(
      'service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.AddSelector.status',
      { defaultValue: 'Status' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.IssueStatus.${value}`, { defaultValue: value });
      }
    },
  };

  const columns = useMemo<GridColDef<ServiceIssueStored>[]>(
    () => [
      scopeColumn,
      countyRepresentationColumn,
      cityRepresentationColumn,
      districtRepresentationColumn,
      titleColumn,
      createdColumn,
      statusColumn,
    ],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceIssueStored>[] = useMemo(() => [], [actions, isLoading]);

  const effectiveTableColumns = useMemo(() => {
    const cols = [
      ...columns,
      ...columnsActionCalculator('User/(esm/_jK5OoVq4Ee6_67aMO2jOsw)/RelationType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ];
    return cols;
  }, [columns, rowActions]);

  const getRowIdentifier: (row: Pick<ServiceIssueStored, '__identifier'>) => string = (row) => row.__identifier!;

  const getSelectedRows: () => ServiceIssueStored[] = () => {
    return selectionDiff;
  };

  const clearSelections = () => {
    handleOnSelection([]);
  };

  const additionalToolbarActions: Record<string, ElementType> = actions?.ownedIssuesAdditionalToolbarButtons
    ? actions.ownedIssuesAdditionalToolbarButtons(data, isLoading, getSelectedRows(), clearSelections)
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
    setPage(0);

    setQueryCustomizer((prevQueryCustomizer: ServiceIssueQueryCustomizer) => {
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
        id: 'User/(esm/_JF8G4FrXEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'scope',
        label: t('service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.AddSelector.scope', {
          defaultValue: 'Scope',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
      },

      {
        id: 'User/(esm/_3_u-sVypEe6iZvXMSZbCNQ)/TableColumnFilter/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'countyRepresentation',
        label: t(
          'service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.AddSelector.countyRepresentation',
          { defaultValue: 'CountyRepresentation' },
        ) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_3_u-sFypEe6iZvXMSZbCNQ)/TableColumnFilter/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'cityRepresentation',
        label: t(
          'service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.AddSelector.cityRepresentation',
          { defaultValue: 'CityRepresentation' },
        ) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_3_vlwFypEe6iZvXMSZbCNQ)/TableColumnFilter/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'districtRepresentation',
        label: t(
          'service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.AddSelector.districtRepresentation',
          { defaultValue: 'DistrictRepresentation' },
        ) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_LF2JIFrXEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'title',
        label: t('service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.AddSelector.title', {
          defaultValue: 'Title',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_oGiJwFraEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'created',
        label: t(
          'service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.AddSelector.created',
          { defaultValue: 'Created' },
        ) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_oGj-8VraEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'status',
        label: t(
          'service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.AddSelector.status',
          { defaultValue: 'Status' },
        ) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED', 'VOTING'],
      },
    ],
    [l10nLocale],
  );

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceIssueQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceIssueQueryCustomizer = {
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

  const handleIsRowSelectable = useCallback((params: GridRowParams<ServiceIssueStored & { __selected?: boolean }>) => {
    return isRowSelectable(params.row, !false, alreadySelected);
  }, []);

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
    if (!isLoading) {
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
  }

  useEffect(() => {
    fetchData();
    handleOnSelection(selectionModel);
  }, [queryCustomizer, refreshCounter]);

  return (
    <div
      id="User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTable"
      data-table-name="ownedIssues::Add::Selector"
    >
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
        rowCount={rowsPerPage}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.filterAction && true ? (
                <Button
                  id="User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.filterAction!(
                      'User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTableFilterButton',
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
                  {t('service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.Table.Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.selectorRangeAction && true ? (
                <Button
                  id="User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTableRefreshButton"
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
                  {t('service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.Table.Refresh', {
                    defaultValue: 'Refresh',
                  })}
                </Button>
              ) : null}
              {actions.openFormAction && true ? (
                <Button
                  id="User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                    };
                    await actions.openFormAction!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.Table.Create', {
                    defaultValue: 'Create',
                  })}
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
