//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/table.tsx
// Template file: actor/src/containers/components/table.tsx.hbs

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
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
import { MdiIcon, CustomTablePagination } from '~/components';
import {
  dateTimeColumnOperators,
  singleSelectColumnOperators,
  columnsActionCalculator,
  ContextMenu,
  StripedDataGrid,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import type {
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceUserIssuesStored,
} from '~/services/data-api';
import { useL10N } from '~/l10n/l10n-context';
import {
  getUpdatedRowsSelected,
  serviceDateToUiDate,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult, TableRowAction } from '~/utilities';
import { useDataStore } from '~/hooks';
import { OBJECTCLASS } from '@pandino/pandino-api';

export interface ServiceUserIssuesUserIssues_View_EditOwnedIssuesComponentActionDefinitions {
  ownedIssuesFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  ownedIssuesRefreshAction?: (queryCustomizer: ServiceIssueQueryCustomizer) => Promise<ServiceIssueStored[]>;
  ownedIssuesActivateForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  ownedIssuesAddToFavoritesForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  ownedIssuesCloseDebateAction?: (row: ServiceIssueStored) => Promise<void>;
  ownedIssuesCloseVoteForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  ownedIssuesCreateCommentAction?: (row: ServiceIssueStored) => Promise<void>;
  ownedIssuesCreateConArgumentAction?: (row: ServiceIssueStored) => Promise<void>;
  ownedIssuesCreateProArgumentAction?: (row: ServiceIssueStored) => Promise<void>;
  ownedIssuesDeleteOrArchiveForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  ownedIssuesRemoveFromFavoritesForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  ownedIssuesOpenPageAction?: (row: ServiceIssueStored) => Promise<void>;
}

export interface ServiceUserIssuesUserIssues_View_EditOwnedIssuesComponentProps {
  uniqueId: string;
  actions: ServiceUserIssuesUserIssues_View_EditOwnedIssuesComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceUserIssuesStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable
// Name: ownedIssues
export function ServiceUserIssuesUserIssues_View_EditOwnedIssuesComponent(
  props: ServiceUserIssuesUserIssues_View_EditOwnedIssuesComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

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

  const columns = useMemo<GridColDef<ServiceIssueStored>[]>(
    () => [
      {
        ...baseColumnConfig,
        field: 'scope',
        headerName: t('service.UserIssues.UserIssues_View_Edit.scope', { defaultValue: 'Scope' }) as string,
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
        description: t('judo.pages.table.column.not-sortable', {
          defaultValue: 'This column is not sortable.',
        }) as string,
      },
      {
        ...baseColumnConfig,
        field: 'countyRepresentation',
        headerName: t('service.UserIssues.UserIssues_View_Edit.countyRepresentation', {
          defaultValue: 'CountyRepresentation',
        }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'cityRepresentation',
        headerName: t('service.UserIssues.UserIssues_View_Edit.cityRepresentation', {
          defaultValue: 'CityRepresentation',
        }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'districtRepresentation',
        headerName: t('service.UserIssues.UserIssues_View_Edit.districtRepresentation', {
          defaultValue: 'DistrictRepresentation',
        }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'title',
        headerName: t('service.UserIssues.UserIssues_View_Edit.title', { defaultValue: 'Title' }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
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
      },
      {
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
        description: t('judo.pages.table.column.not-sortable', {
          defaultValue: 'This column is not sortable.',
        }) as string,
      },
    ],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceIssueStored>[] = [
    {
      id: 'User/(esm/_FzSAQHkIEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.activate', { defaultValue: 'activate' }) as string,
      icon: <MdiIcon path="lock-open" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isIssueDraft || isLoading,
      action: actions.ownedIssuesActivateForIssueAction
        ? async (rowData) => {
            await actions.ownedIssuesActivateForIssueAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_knYd0FxEEe6ma86ynyYZNw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.addToFavorites', { defaultValue: 'addToFavorites' }) as string,
      icon: <MdiIcon path="star-plus" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.ownedIssuesAddToFavoritesForIssueAction
        ? async (rowData) => {
            await actions.ownedIssuesAddToFavoritesForIssueAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_8M4nYHj_Ee6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.closeDebate', { defaultValue: 'closeDebate' }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isIssueActive || isLoading,
      action: actions.ownedIssuesCloseDebateAction
        ? async (rowData) => {
            await actions.ownedIssuesCloseDebateAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_pXWdEHkFEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.closeVote', { defaultValue: 'closeVote' }) as string,
      icon: <MdiIcon path="lock-check" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isVoteClosable || isLoading,
      action: actions.ownedIssuesCloseVoteForIssueAction
        ? async (rowData) => {
            await actions.ownedIssuesCloseVoteForIssueAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_S8tEQIydEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.createComment', { defaultValue: 'createComment' }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.ownedIssuesCreateCommentAction
        ? async (rowData) => {
            await actions.ownedIssuesCreateCommentAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_qJPPC3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.createConArgument', {
        defaultValue: 'createConArgument',
      }) as string,
      icon: <MdiIcon path="chat-minus" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.ownedIssuesCreateConArgumentAction
        ? async (rowData) => {
            await actions.ownedIssuesCreateConArgumentAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_qJPPA3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.createProArgument', {
        defaultValue: 'createProArgument',
      }) as string,
      icon: <MdiIcon path="chat-plus" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.ownedIssuesCreateProArgumentAction
        ? async (rowData) => {
            await actions.ownedIssuesCreateProArgumentAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_FzSnUHkIEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.deleteOrArchive', {
        defaultValue: 'deleteOrArchive',
      }) as string,
      icon: <MdiIcon path="delete" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isIssueDeletable || isLoading,
      action: actions.ownedIssuesDeleteOrArchiveForIssueAction
        ? async (rowData) => {
            await actions.ownedIssuesDeleteOrArchiveForIssueAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_knZE4FxEEe6ma86ynyYZNw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues_View_Edit.removeFromFavorites', {
        defaultValue: 'removeFromFavorites',
      }) as string,
      icon: <MdiIcon path="star-minus" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.ownedIssuesRemoveFromFavoritesForIssueAction
        ? async (rowData) => {
            await actions.ownedIssuesRemoveFromFavoritesForIssueAction!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_JF8G4FrXEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'scope',
        label: t('service.UserIssues.UserIssues_View_Edit.scope', { defaultValue: 'Scope' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
      },

      {
        id: 'User/(esm/_3_u-sVypEe6iZvXMSZbCNQ)/TableColumnFilter/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'countyRepresentation',
        label: t('service.UserIssues.UserIssues_View_Edit.countyRepresentation', {
          defaultValue: 'CountyRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_3_u-sFypEe6iZvXMSZbCNQ)/TableColumnFilter/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'cityRepresentation',
        label: t('service.UserIssues.UserIssues_View_Edit.cityRepresentation', {
          defaultValue: 'CityRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_3_vlwFypEe6iZvXMSZbCNQ)/TableColumnFilter/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'districtRepresentation',
        label: t('service.UserIssues.UserIssues_View_Edit.districtRepresentation', {
          defaultValue: 'DistrictRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_LF2JIFrXEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'title',
        label: t('service.UserIssues.UserIssues_View_Edit.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_oGiJwFraEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'created',
        label: t('service.UserIssues.UserIssues_View_Edit.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_oGj-8VraEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable)',
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
      return {
        ...strippedQueryCustomizer,
        _orderBy,
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
        const res = await actions.ownedIssuesRefreshAction!(processQueryCustomizer(queryCustomizer));

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
      id="User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable"
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
          ...columnsActionCalculator('User/(esm/_jK5OoVq4Ee6_67aMO2jOsw)/RelationType', rowActions, t, {
            shownActions: 2,
          }),
        ]}
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        onRowClick={
          actions.ownedIssuesOpenPageAction
            ? async (params: GridRowParams<ServiceIssueStored>) => await actions.ownedIssuesOpenPageAction!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.ownedIssuesFilterAction && true ? (
                <Button
                  id="User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.ownedIssuesFilterAction!(
                      'User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceTableFilterButton',
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
                  {t('service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.ownedIssuesRefreshAction && true ? (
                <Button
                  id="User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.ownedIssuesRefreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.Refresh', {
                    defaultValue: 'Refresh',
                  })}
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
