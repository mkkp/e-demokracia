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
  numericColumnOperators,
  singleSelectColumnOperators,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, basePageSizeOptions, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type {
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/services/data-api';
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

export interface ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorOwnedVoteDefinitionsAddSelectorComponentActionDefinitions {
  openFormAction?: () => Promise<void>;
  filterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  selectorRangeAction?: (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ) => Promise<JudoRestResponse<ServiceVoteDefinitionStored[]>>;
  ownedVoteDefinitionsAdditionalToolbarButtons?: (
    data: ServiceVoteDefinitionStored[],
    isLoading: boolean,
    selectedRows: ServiceVoteDefinitionStored[],
    clearSelections: () => void,
  ) => Record<string, ElementType>;
}

export interface ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorOwnedVoteDefinitionsAddSelectorComponentProps {
  uniqueId: string;
  actions: ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorOwnedVoteDefinitionsAddSelectorComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
  validationError?: string;
  selectionDiff: ServiceVoteDefinitionStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceVoteDefinitionStored[]>>;
  alreadySelected: ServiceVoteDefinitionStored[];
}

// XMIID: User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable
// Name: ownedVoteDefinitions::Add::Selector
export function ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorOwnedVoteDefinitionsAddSelectorComponent(
  props: ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorOwnedVoteDefinitionsAddSelectorComponentProps,
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
  const filterModelKey = `User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceVoteDefinitionStored>[]>([]);
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
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceVoteDefinitionQueryCustomizer>({
    _mask:
      '{cityRepresentation,closeAt,countyRepresentation,created,districtRepresentation,numberOfVotes,scope,status,title,voteType}',
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
  const [lastItem, setLastItem] = useState<ServiceVoteDefinitionStored>();
  const [firstItem, setFirstItem] = useState<ServiceVoteDefinitionStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const scopeColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'scope',
    headerName: t(
      'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.scope',
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
  const countyRepresentationColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'countyRepresentation',
    headerName: t(
      'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.countyRepresentation',
      { defaultValue: 'CountyRepresentation' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const cityRepresentationColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'cityRepresentation',
    headerName: t(
      'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.cityRepresentation',
      { defaultValue: 'CityRepresentation' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const districtRepresentationColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'districtRepresentation',
    headerName: t(
      'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.districtRepresentation',
      { defaultValue: 'DistrictRepresentation' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const titleColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'title',
    headerName: t(
      'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.title',
      { defaultValue: 'Title' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const voteTypeColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'voteType',
    headerName: t(
      'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.voteType',
      { defaultValue: 'VoteType' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.VoteType.${value}`, { defaultValue: value });
      }
    },
  };
  const createdColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t(
      'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.created',
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
  const closeAtColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'closeAt',
    headerName: t(
      'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.closeAt',
      { defaultValue: 'CloseAt' },
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
  const numberOfVotesColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'numberOfVotes',
    headerName: t(
      'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.numberOfVotes',
      { defaultValue: 'NumberOfVotes' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 100,
    type: 'number',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
      return value && new Intl.NumberFormat(l10nLocale).format(value);
    },
  };
  const statusColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'status',
    headerName: t(
      'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.status',
      { defaultValue: 'Status' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.VoteStatus.${value}`, { defaultValue: value });
      }
    },
  };

  const columns = useMemo<GridColDef<ServiceVoteDefinitionStored>[]>(
    () => [
      scopeColumn,
      countyRepresentationColumn,
      cityRepresentationColumn,
      districtRepresentationColumn,
      titleColumn,
      voteTypeColumn,
      createdColumn,
      closeAtColumn,
      numberOfVotesColumn,
      statusColumn,
    ],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceVoteDefinitionStored>[] = useMemo(() => [], [actions, isLoading]);

  const effectiveTableColumns = useMemo(() => {
    const cols = [
      ...columns,
      ...columnsActionCalculator('User/(esm/_LYtscGBWEe6M1JBD8stPIg)/RelationType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ];
    return cols;
  }, [columns, rowActions]);

  const getRowIdentifier: (row: Pick<ServiceVoteDefinitionStored, '__identifier'>) => string = (row) =>
    row.__identifier!;

  const getSelectedRows: () => ServiceVoteDefinitionStored[] = () => {
    return selectionDiff;
  };

  const clearSelections = () => {
    handleOnSelection([]);
  };

  const additionalToolbarActions: Record<string, ElementType> = actions?.ownedVoteDefinitionsAdditionalToolbarButtons
    ? actions.ownedVoteDefinitionsAdditionalToolbarButtons(data, isLoading, getSelectedRows(), clearSelections)
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

    setQueryCustomizer((prevQueryCustomizer: ServiceVoteDefinitionQueryCustomizer) => {
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
        id: 'User/(esm/_ZexBImBWEe6M1JBD8stPIg)/TableColumnFilter/(discriminator/User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'scope',
        label: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.scope',
          { defaultValue: 'Scope' },
        ) as string,
        filterType: FilterType.enumeration,
        enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
      },

      {
        id: 'User/(esm/_ZexoMWBWEe6M1JBD8stPIg)/TableColumnFilter/(discriminator/User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'countyRepresentation',
        label: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.countyRepresentation',
          { defaultValue: 'CountyRepresentation' },
        ) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_ZeyPQGBWEe6M1JBD8stPIg)/TableColumnFilter/(discriminator/User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'cityRepresentation',
        label: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.cityRepresentation',
          { defaultValue: 'CityRepresentation' },
        ) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_ZexoMGBWEe6M1JBD8stPIg)/TableColumnFilter/(discriminator/User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'districtRepresentation',
        label: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.districtRepresentation',
          { defaultValue: 'DistrictRepresentation' },
        ) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_ZetWwGBWEe6M1JBD8stPIg)/TableColumnFilter/(discriminator/User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'title',
        label: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.title',
          { defaultValue: 'Title' },
        ) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_ZexBIWBWEe6M1JBD8stPIg)/TableColumnFilter/(discriminator/User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'voteType',
        label: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.voteType',
          { defaultValue: 'VoteType' },
        ) as string,
        filterType: FilterType.enumeration,
        enumValues: ['YES_NO', 'YES_NO_ABSTAIN', 'SELECT_ANSWER', 'RATE', 'NO_VOTE'],
      },

      {
        id: 'User/(esm/_ZetWwWBWEe6M1JBD8stPIg)/TableColumnFilter/(discriminator/User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'created',
        label: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.created',
          { defaultValue: 'Created' },
        ) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_Zeuk4GBWEe6M1JBD8stPIg)/TableColumnFilter/(discriminator/User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'closeAt',
        label: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.closeAt',
          { defaultValue: 'CloseAt' },
        ) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_ZexBIGBWEe6M1JBD8stPIg)/TableColumnFilter/(discriminator/User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'numberOfVotes',
        label: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.numberOfVotes',
          { defaultValue: 'NumberOfVotes' },
        ) as string,
        filterType: FilterType.numeric,
      },

      {
        id: 'User/(esm/_Zet90WBWEe6M1JBD8stPIg)/TableColumnFilter/(discriminator/User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable)',
        attributeName: 'status',
        label: t(
          'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector.status',
          { defaultValue: 'Status' },
        ) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
      },
    ],
    [l10nLocale],
  );

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceVoteDefinitionQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceVoteDefinitionQueryCustomizer = {
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
    (params: GridRowParams<ServiceVoteDefinitionStored & { __selected?: boolean }>) => {
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
      id="User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable"
      data-table-name="ownedVoteDefinitions::Add::Selector"
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
                  id="User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.filterAction!(
                      'User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTableFilterButton',
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
                    'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.Table.Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.selectorRangeAction && true ? (
                <Button
                  id="User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTableRefreshButton"
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
                  {t(
                    'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.Table.Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.openFormAction && true ? (
                <Button
                  id="User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTableCreateButton"
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
                  {t(
                    'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.Table.Create',
                    { defaultValue: 'Create' },
                  )}
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