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
import { baseColumnConfig, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type {
  ServiceDashboard,
  ServiceDashboardStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  serviceDateToUiDate,
  useErrorHandler,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, TableRowAction } from '~/utilities';

export interface ServiceDashboardDashboard_View_EditOwnedIssuesComponentActionDefinitions {
  issuesOwnedOpenAddSelectorAction?: () => Promise<void>;
  issuesOwnedBulkDeleteAction?: (selectedRows: ServiceIssueStored[]) => Promise<DialogResult<ServiceIssueStored[]>>;
  issuesOwnedBulkRemoveAction?: (selectedRows: ServiceIssueStored[]) => Promise<DialogResult<ServiceIssueStored[]>>;
  issuesOwnedFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  issuesOwnedRefreshAction?: (queryCustomizer: ServiceIssueQueryCustomizer) => Promise<ServiceIssueStored[]>;
  issuesOwnedActivateForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  issuesOwnedAddToFavoritesForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  issuesOwnedCloseDebateAction?: (row: ServiceIssueStored) => Promise<void>;
  issuesOwnedCloseVoteForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  issuesOwnedCreateCommentAction?: (row: ServiceIssueStored) => Promise<void>;
  issuesOwnedCreateConArgumentAction?: (row: ServiceIssueStored) => Promise<void>;
  issuesOwnedCreateProArgumentAction?: (row: ServiceIssueStored) => Promise<void>;
  issuesOwnedDeleteOrArchiveForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  issuesOwnedRemoveFromFavoritesForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  issuesOwnedDeleteAction?: (row: ServiceIssueStored, silentMode?: boolean) => Promise<void>;
  issuesOwnedRemoveAction?: (row: ServiceIssueStored, silentMode?: boolean) => Promise<void>;
  issuesOwnedOpenPageAction?: (row: ServiceIssueStored) => Promise<void>;
}

export interface ServiceDashboardDashboard_View_EditOwnedIssuesComponentProps {
  uniqueId: string;
  actions: ServiceDashboardDashboard_View_EditOwnedIssuesComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceDashboardStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable
// Name: ownedIssues
export function ServiceDashboardDashboard_View_EditOwnedIssuesComponent(
  props: ServiceDashboardDashboard_View_EditOwnedIssuesComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceIssueStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'countyRepresentation', sort: 'asc' }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceIssueQueryCustomizer>({
    _mask: '{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,created,status}',
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
  const [page, setPage] = useState<number>(0);
  const [rowCount, setRowCount] = useState<number>(0);
  const [lastItem, setLastItem] = useState<ServiceIssueStored>();
  const [firstItem, setFirstItem] = useState<ServiceIssueStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceIssueStored[]>([]);

  const scopeColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'scope',
    headerName: t('service.Dashboard.Dashboard_View_Edit.scope', { defaultValue: 'Scope' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    sortable: false,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.IssueScope.${value}`, { defaultValue: value });
      }
    },
    description: t('judo.pages.table.column.not-sortable', { defaultValue: 'This column is not sortable.' }) as string,
  };
  const countyRepresentationColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'countyRepresentation',
    headerName: t('service.Dashboard.Dashboard_View_Edit.countyRepresentation', {
      defaultValue: 'CountyRepresentation',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const cityRepresentationColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'cityRepresentation',
    headerName: t('service.Dashboard.Dashboard_View_Edit.cityRepresentation', {
      defaultValue: 'CityRepresentation',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const districtRepresentationColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'districtRepresentation',
    headerName: t('service.Dashboard.Dashboard_View_Edit.districtRepresentation', {
      defaultValue: 'DistrictRepresentation',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const titleColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'title',
    headerName: t('service.Dashboard.Dashboard_View_Edit.title', { defaultValue: 'Title' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const createdColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t('service.Dashboard.Dashboard_View_Edit.created', { defaultValue: 'Created' }) as string,
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
    headerName: t('service.Dashboard.Dashboard_View_Edit.status', { defaultValue: 'Status' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    sortable: false,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.IssueStatus.${value}`, { defaultValue: value });
      }
    },
    description: t('judo.pages.table.column.not-sortable', { defaultValue: 'This column is not sortable.' }) as string,
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

  const rowActions: TableRowAction<ServiceIssueStored>[] = [
    {
      id: 'User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableRowRemoveButton',
      label: t('service.Dashboard.Dashboard_View_Edit.Selector.issues.IssueTabBar.myissues.ownedIssues.Remove', {
        defaultValue: 'Remove',
      }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceIssueStored) => !isFormUpdateable() || isLoading,
      action: actions.issuesOwnedRemoveAction
        ? async (rowData) => {
            await actions.issuesOwnedRemoveAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableRowDeleteButton',
      label: t('service.Dashboard.Dashboard_View_Edit.Selector.issues.IssueTabBar.myissues.ownedIssues.Delete', {
        defaultValue: 'Delete',
      }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.__deleteable || isLoading,
      action: actions.issuesOwnedDeleteAction
        ? async (rowData) => {
            await actions.issuesOwnedDeleteAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_FzSAQHkIEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Dashboard.Dashboard_View_Edit.activate', { defaultValue: 'activate' }) as string,
      icon: <MdiIcon path="lock-open" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isIssueDraft || isLoading,
      action: actions.issuesOwnedActivateForIssueAction
        ? async (rowData) => {
            await actions.issuesOwnedActivateForIssueAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_knYd0FxEEe6ma86ynyYZNw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Dashboard.Dashboard_View_Edit.addToFavorites', { defaultValue: 'addToFavorites' }) as string,
      icon: <MdiIcon path="star-plus" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.issuesOwnedAddToFavoritesForIssueAction
        ? async (rowData) => {
            await actions.issuesOwnedAddToFavoritesForIssueAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_8M4nYHj_Ee6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Dashboard.Dashboard_View_Edit.closeDebate', { defaultValue: 'closeDebate' }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isIssueActive || isLoading,
      action: actions.issuesOwnedCloseDebateAction
        ? async (rowData) => {
            await actions.issuesOwnedCloseDebateAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_pXWdEHkFEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Dashboard.Dashboard_View_Edit.closeVote', { defaultValue: 'closeVote' }) as string,
      icon: <MdiIcon path="lock-check" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isVoteClosable || isLoading,
      action: actions.issuesOwnedCloseVoteForIssueAction
        ? async (rowData) => {
            await actions.issuesOwnedCloseVoteForIssueAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_S8tEQIydEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Dashboard.Dashboard_View_Edit.createComment', { defaultValue: 'createComment' }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.issuesOwnedCreateCommentAction
        ? async (rowData) => {
            await actions.issuesOwnedCreateCommentAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_qJPPC3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Dashboard.Dashboard_View_Edit.createConArgument', {
        defaultValue: 'createConArgument',
      }) as string,
      icon: <MdiIcon path="chat-minus" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.issuesOwnedCreateConArgumentAction
        ? async (rowData) => {
            await actions.issuesOwnedCreateConArgumentAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_qJPPA3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Dashboard.Dashboard_View_Edit.createProArgument', {
        defaultValue: 'createProArgument',
      }) as string,
      icon: <MdiIcon path="chat-plus" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.issuesOwnedCreateProArgumentAction
        ? async (rowData) => {
            await actions.issuesOwnedCreateProArgumentAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_FzSnUHkIEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Dashboard.Dashboard_View_Edit.deleteOrArchive', { defaultValue: 'deleteOrArchive' }) as string,
      icon: <MdiIcon path="delete" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isIssueDeletable || isLoading,
      action: actions.issuesOwnedDeleteOrArchiveForIssueAction
        ? async (rowData) => {
            await actions.issuesOwnedDeleteOrArchiveForIssueAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_knZE4FxEEe6ma86ynyYZNw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Dashboard.Dashboard_View_Edit.removeFromFavorites', {
        defaultValue: 'removeFromFavorites',
      }) as string,
      icon: <MdiIcon path="star-minus" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.issuesOwnedRemoveFromFavoritesForIssueAction
        ? async (rowData) => {
            await actions.issuesOwnedRemoveFromFavoritesForIssueAction!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_CTsBk1w4Ee6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'scope',
        label: t('service.Dashboard.Dashboard_View_Edit.scope', { defaultValue: 'Scope' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
      },

      {
        id: 'User/(esm/_L-LswFw_Ee6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'countyRepresentation',
        label: t('service.Dashboard.Dashboard_View_Edit.countyRepresentation', {
          defaultValue: 'CountyRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_L-LFsFw_Ee6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'cityRepresentation',
        label: t('service.Dashboard.Dashboard_View_Edit.cityRepresentation', {
          defaultValue: 'CityRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_L-LswVw_Ee6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'districtRepresentation',
        label: t('service.Dashboard.Dashboard_View_Edit.districtRepresentation', {
          defaultValue: 'DistrictRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_CTragFw4Ee6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'title',
        label: t('service.Dashboard.Dashboard_View_Edit.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_CTqzcFw4Ee6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'created',
        label: t('service.Dashboard.Dashboard_View_Edit.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_CTraglw4Ee6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'status',
        label: t('service.Dashboard.Dashboard_View_Edit.status', { defaultValue: 'Status' }) as string,
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
          limit: 10 + 1,
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
          limit: 10 + 1,
        },
      };
    });
  }

  async function handlePageChange(isNext: boolean) {
    setQueryCustomizer((prevQueryCustomizer) => {
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: isNext ? 10 + 1 : 10,
          reverse: !isNext,
          lastItem: isNext ? lastItem : firstItem,
        },
      };
    });

    setIsNextButtonEnabled(!isNext);
  }

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  async function fetchData() {
    if (!isLoading && ownerData.__signedIdentifier) {
      setIsLoading(true);

      try {
        const res = await actions.issuesOwnedRefreshAction!(processQueryCustomizer(queryCustomizer));

        if (res.length > 10) {
          setIsNextButtonEnabled(true);
          res.pop();
        } else if (queryCustomizer._seek?.limit === 10 + 1) {
          setIsNextButtonEnabled(false);
        }

        setData(res);
        setFirstItem(res[0]);
        setLastItem(res[res.length - 1]);
        setRowCount(res.length || 0);
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [queryCustomizer, refreshCounter]);

  return (
    <div
      id="User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable"
      data-table-name="ownedIssues"
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
          ...columnsActionCalculator('User/(esm/_OQ7kkIyQEe2VSOmaAz6G9Q)/RelationType', rowActions, t, {
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
          actions.issuesOwnedOpenPageAction
            ? async (params: GridRowParams<ServiceIssueStored>) => await actions.issuesOwnedOpenPageAction!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
        rowCount={10}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.issuesOwnedFilterAction && true ? (
                <Button
                  id="User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.issuesOwnedFilterAction!(
                      'User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableFilterButton',
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
                  {t('service.Dashboard.Dashboard_View_Edit.Selector.issues.IssueTabBar.myissues.ownedIssues.Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.issuesOwnedRefreshAction && true ? (
                <Button
                  id="User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.issuesOwnedRefreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.Dashboard.Dashboard_View_Edit.Selector.issues.IssueTabBar.myissues.ownedIssues.Refresh', {
                    defaultValue: 'Refresh',
                  })}
                </Button>
              ) : null}
              {actions.issuesOwnedOpenAddSelectorAction && isFormUpdateable() ? (
                <Button
                  id="User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.issuesOwnedOpenAddSelectorAction!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t('service.Dashboard.Dashboard_View_Edit.Selector.issues.IssueTabBar.myissues.ownedIssues.Add', {
                    defaultValue: 'Add',
                  })}
                </Button>
              ) : null}
              {actions.issuesOwnedBulkRemoveAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.issuesOwnedBulkRemoveAction!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.Dashboard.Dashboard_View_Edit.Selector.issues.IssueTabBar.myissues.ownedIssues.BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.issuesOwnedBulkDeleteAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.issuesOwnedBulkDeleteAction!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'service.Dashboard.Dashboard_View_Edit.Selector.issues.IssueTabBar.myissues.ownedIssues.BulkDelete',
                    { defaultValue: 'Delete' },
                  )}
                </Button>
              ) : null}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
          Pagination: () => (
            <CustomTablePagination
              pageChange={handlePageChange}
              isNextButtonEnabled={isNextButtonEnabled}
              page={page}
              setPage={setPage}
              rowPerPage={10}
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
