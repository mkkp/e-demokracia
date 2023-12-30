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
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceUserIssuesStored,
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

export interface ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityDistrictsComponentActionDefinitions {
  activeIssuesInActivityDistrictsFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  activeIssuesInActivityDistrictsRefreshAction?: (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ) => Promise<ServiceIssueStored[]>;
  activeIssuesInActivityDistrictsActivateForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityDistrictsAddToFavoritesForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityDistrictsCloseDebateAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityDistrictsCloseVoteForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityDistrictsCreateCommentAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityDistrictsCreateConArgumentAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityDistrictsCreateProArgumentAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityDistrictsDeleteOrArchiveForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityDistrictsRemoveFromFavoritesForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityDistrictsOpenPageAction?: (row: ServiceIssueStored) => Promise<void>;
}

export interface ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityDistrictsComponentProps {
  uniqueId: string;
  actions: ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityDistrictsComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceUserIssuesStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable
// Name: activeIssuesInActivityDistricts
export function ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityDistrictsComponent(
  props: ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityDistrictsComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceIssueStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'countyRepresentation', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceIssueQueryCustomizer>({
    _mask: '{countyRepresentation,cityRepresentation,districtRepresentation,title,created,status}',
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

  const countyRepresentationColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'countyRepresentation',
    headerName: t('service.UserIssues.UserIssues_View_Edit.countyRepresentation', {
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
    headerName: t('service.UserIssues.UserIssues_View_Edit.cityRepresentation', {
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
    headerName: t('service.UserIssues.UserIssues_View_Edit.districtRepresentation', {
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
    headerName: t('service.UserIssues.UserIssues_View_Edit.title', { defaultValue: 'Title' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const createdColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t('service.UserIssues.UserIssues_View_Edit.created', { defaultValue: 'Created' }) as string,
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
    headerName: t('service.UserIssues.UserIssues_View_Edit.status', { defaultValue: 'Status' }) as string,
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
      id: 'User/(esm/_FzSAQHkIEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.activate', { defaultValue: 'activate' }) as string,
      icon: <MdiIcon path="lock-open" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isIssueDraft || isLoading,
      action: actions.activeIssuesInActivityDistrictsActivateForIssueAction
        ? async (rowData) => {
            await actions.activeIssuesInActivityDistrictsActivateForIssueAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_knYd0FxEEe6ma86ynyYZNw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.addToFavorites', { defaultValue: 'addToFavorites' }) as string,
      icon: <MdiIcon path="star-plus" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.activeIssuesInActivityDistrictsAddToFavoritesForIssueAction
        ? async (rowData) => {
            await actions.activeIssuesInActivityDistrictsAddToFavoritesForIssueAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_8M4nYHj_Ee6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.closeDebate', { defaultValue: 'closeDebate' }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isIssueActive || isLoading,
      action: actions.activeIssuesInActivityDistrictsCloseDebateAction
        ? async (rowData) => {
            await actions.activeIssuesInActivityDistrictsCloseDebateAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_pXWdEHkFEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.closeVote', { defaultValue: 'closeVote' }) as string,
      icon: <MdiIcon path="lock-check" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isVoteClosable || isLoading,
      action: actions.activeIssuesInActivityDistrictsCloseVoteForIssueAction
        ? async (rowData) => {
            await actions.activeIssuesInActivityDistrictsCloseVoteForIssueAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_S8tEQIydEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.createComment', { defaultValue: 'createComment' }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.activeIssuesInActivityDistrictsCreateCommentAction
        ? async (rowData) => {
            await actions.activeIssuesInActivityDistrictsCreateCommentAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_qJPPC3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.createConArgument', {
        defaultValue: 'createConArgument',
      }) as string,
      icon: <MdiIcon path="chat-minus" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.activeIssuesInActivityDistrictsCreateConArgumentAction
        ? async (rowData) => {
            await actions.activeIssuesInActivityDistrictsCreateConArgumentAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_qJPPA3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.createProArgument', {
        defaultValue: 'createProArgument',
      }) as string,
      icon: <MdiIcon path="chat-plus" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.activeIssuesInActivityDistrictsCreateProArgumentAction
        ? async (rowData) => {
            await actions.activeIssuesInActivityDistrictsCreateProArgumentAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_FzSnUHkIEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.deleteOrArchive', {
        defaultValue: 'deleteOrArchive',
      }) as string,
      icon: <MdiIcon path="delete" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isIssueDeletable || isLoading,
      action: actions.activeIssuesInActivityDistrictsDeleteOrArchiveForIssueAction
        ? async (rowData) => {
            await actions.activeIssuesInActivityDistrictsDeleteOrArchiveForIssueAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_knZE4FxEEe6ma86ynyYZNw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.removeFromFavorites', {
        defaultValue: 'removeFromFavorites',
      }) as string,
      icon: <MdiIcon path="star-minus" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.activeIssuesInActivityDistrictsRemoveFromFavoritesForIssueAction
        ? async (rowData) => {
            await actions.activeIssuesInActivityDistrictsRemoveFromFavoritesForIssueAction!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_tvLXgFw-Ee6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'countyRepresentation',
        label: t('service.UserIssues.UserIssues_View_Edit.countyRepresentation', {
          defaultValue: 'CountyRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_tvKwcFw-Ee6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'cityRepresentation',
        label: t('service.UserIssues.UserIssues_View_Edit.cityRepresentation', {
          defaultValue: 'CityRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_tvLXgVw-Ee6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'districtRepresentation',
        label: t('service.UserIssues.UserIssues_View_Edit.districtRepresentation', {
          defaultValue: 'DistrictRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_zIeXwFrbEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'title',
        label: t('service.UserIssues.UserIssues_View_Edit.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_1PoRgFrbEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'created',
        label: t('service.UserIssues.UserIssues_View_Edit.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_1Po4kVrbEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'status',
        label: t('service.UserIssues.UserIssues_View_Edit.status', { defaultValue: 'Status' }) as string,
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
        const res = await actions.activeIssuesInActivityDistrictsRefreshAction!(
          processQueryCustomizer(queryCustomizer),
        );

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
      id="User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable"
      data-table-name="activeIssuesInActivityDistricts"
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
          ...columnsActionCalculator('User/(esm/_riB9EFrWEe6gN-oVBDDIOQ)/RelationType', rowActions, t, {
            shownActions: 2,
          }),
        ]}
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        onRowClick={
          actions.activeIssuesInActivityDistrictsOpenPageAction
            ? async (params: GridRowParams<ServiceIssueStored>) =>
                await actions.activeIssuesInActivityDistrictsOpenPageAction!(params.row)
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
              {actions.activeIssuesInActivityDistrictsFilterAction && true ? (
                <Button
                  id="User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.activeIssuesInActivityDistrictsFilterAction!(
                      'User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceTableFilterButton',
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
                    'service.UserIssues.UserIssues_View_Edit.root.tabBar.activeIssuesByActivityArea.tabBar.activeByActivityInDistrict.activeIssuesInActivityDistricts.Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.activeIssuesInActivityDistrictsRefreshAction && true ? (
                <Button
                  id="User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.activeIssuesInActivityDistrictsRefreshAction!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserIssues.UserIssues_View_Edit.root.tabBar.activeIssuesByActivityArea.tabBar.activeByActivityInDistrict.activeIssuesInActivityDistricts.Refresh',
                    { defaultValue: 'Refresh' },
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
