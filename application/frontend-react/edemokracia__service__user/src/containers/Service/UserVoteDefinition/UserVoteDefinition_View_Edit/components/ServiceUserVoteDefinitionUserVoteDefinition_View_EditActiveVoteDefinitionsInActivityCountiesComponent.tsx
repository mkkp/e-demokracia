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
import { MdiIcon, CustomTablePagination } from '~/components';
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
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/services/data-api';
import { useL10N } from '~/l10n/l10n-context';
import {
  getUpdatedRowsSelected,
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

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentActionDefinitions {
  serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesAddOpenSelector?: () => Promise<void>;
  serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesBulkDelete?: (
    selectedRows: ServiceVoteDefinitionStored[],
  ) => Promise<DialogResult<ServiceVoteDefinitionStored[]>>;
  serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesBulkRemove?: (
    selectedRows: ServiceVoteDefinitionStored[],
  ) => Promise<DialogResult<ServiceVoteDefinitionStored[]>>;
  serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesClear?: () => Promise<void>;
  serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesCreateOpen?: () => Promise<void>;
  serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesRefresh?: (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ) => Promise<ServiceVoteDefinitionStored[]>;
  serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesDelete?: (
    row: ServiceVoteDefinitionStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesRemove?: (
    row: ServiceVoteDefinitionStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesView?: (
    row: ServiceVoteDefinitionStored,
  ) => Promise<void>;
}

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentProps {
  uniqueId: string;
  actions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceUserVoteDefinition;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable
// Name: activeVoteDefinitionsInActivityCounties
export function ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponent(
  props: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceVoteDefinitionStored>[]>([]);
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
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceVoteDefinitionQueryCustomizer>({
    _mask: '{countyRepresentation,title,voteType,numberOfVotes,created,closeAt,status}',
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
  const [lastItem, setLastItem] = useState<ServiceVoteDefinitionStored>();
  const [firstItem, setFirstItem] = useState<ServiceVoteDefinitionStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceVoteDefinitionStored[]>([]);

  const columns: GridColDef<ServiceVoteDefinitionStored>[] = [
    {
      ...baseColumnConfig,
      field: 'countyRepresentation',
      headerName: t('service.UserVoteDefinition.UserVoteDefinition.View.Edit.countyRepresentation', {
        defaultValue: 'CountyRepresentation',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('service.UserVoteDefinition.UserVoteDefinition.View.Edit.title', {
        defaultValue: 'Title',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'voteType',
      headerName: t('service.UserVoteDefinition.UserVoteDefinition.View.Edit.voteType', {
        defaultValue: 'VoteType',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'singleSelect',
      filterable: false && true,
      sortable: false,
      valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
        if (value !== undefined && value !== null) {
          return t(`enumerations.VoteType.${value}`, { defaultValue: value });
        }
      },
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
    {
      ...baseColumnConfig,
      field: 'numberOfVotes',
      headerName: t('service.UserVoteDefinition.UserVoteDefinition.View.Edit.numberOfVotes', {
        defaultValue: 'NumberOfVotes',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      filterable: false && true,
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.UserVoteDefinition.UserVoteDefinition.View.Edit.created', {
        defaultValue: 'Created',
      }) as string,
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
      field: 'closeAt',
      headerName: t('service.UserVoteDefinition.UserVoteDefinition.View.Edit.closeAt', {
        defaultValue: 'CloseAt',
      }) as string,
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
      headerName: t('service.UserVoteDefinition.UserVoteDefinition.View.Edit.status', {
        defaultValue: 'Status',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'singleSelect',
      filterable: false && true,
      sortable: false,
      valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
        if (value !== undefined && value !== null) {
          return t(`enumerations.VoteStatus.${value}`, { defaultValue: value });
        }
      },
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
  ];

  const rowActions: TableRowAction<ServiceVoteDefinitionStored>[] = [
    {
      id: 'User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableRowRemoveButton',
      label: t(
        'service.UserVoteDefinition.UserVoteDefinition.View.Edit.service::UserVoteDefinition::UserVoteDefinition_View_Edit::root::tabBar::ActiveVoteDefinitionsByOwnerActivityArea::tabBar::ActiveVoteDefinitionsInActivityCountiesGroup::activeVoteDefinitionsInActivityCounties::Remove',
        { defaultValue: 'Remove' },
      ) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceVoteDefinitionStored) => isLoading,
      action:
        actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesRemove
          ? async (rowData) => {
              await actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesRemove!(
                rowData,
              );
            }
          : undefined,
    },
    {
      id: 'User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableRowDeleteButton',
      label: t(
        'service.UserVoteDefinition.UserVoteDefinition.View.Edit.service::UserVoteDefinition::UserVoteDefinition_View_Edit::root::tabBar::ActiveVoteDefinitionsByOwnerActivityArea::tabBar::ActiveVoteDefinitionsInActivityCountiesGroup::activeVoteDefinitionsInActivityCounties::Delete',
        { defaultValue: 'Delete' },
      ) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceVoteDefinitionStored) => editMode || !row.__deleteable || isLoading,
      action:
        actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesDelete
          ? async (rowData) => {
              await actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesDelete!(
                rowData,
              );
            }
          : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_f882Qn2GEe6V8KKnnZfChA',
      attributeName: 'countyRepresentation',
      label: t('service.UserVoteDefinition.UserVoteDefinition.View.Edit.countyRepresentation::Filter', {
        defaultValue: 'CountyRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_f89dUn2GEe6V8KKnnZfChA',
      attributeName: 'title',
      label: t('service.UserVoteDefinition.UserVoteDefinition.View.Edit.title::Filter', {
        defaultValue: 'Title',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_f8-EYX2GEe6V8KKnnZfChA',
      attributeName: 'voteType',
      label: t('service.UserVoteDefinition.UserVoteDefinition.View.Edit.voteType::Filter', {
        defaultValue: 'VoteType',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['YES_NO', 'YES_NO_ABSTAIN', 'SELECT_ANSWER', 'RATE', 'NO_VOTE'],
    },

    {
      id: '_f8-rcH2GEe6V8KKnnZfChA',
      attributeName: 'numberOfVotes',
      label: t('service.UserVoteDefinition.UserVoteDefinition.View.Edit.numberOfVotes::Filter', {
        defaultValue: 'NumberOfVotes',
      }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: '_f8-rdH2GEe6V8KKnnZfChA',
      attributeName: 'created',
      label: t('service.UserVoteDefinition.UserVoteDefinition.View.Edit.created::Filter', {
        defaultValue: 'Created',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: '_f8_Sg32GEe6V8KKnnZfChA',
      attributeName: 'closeAt',
      label: t('service.UserVoteDefinition.UserVoteDefinition.View.Edit.closeAt::Filter', {
        defaultValue: 'CloseAt',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: '_f8_5kn2GEe6V8KKnnZfChA',
      attributeName: 'status',
      label: t('service.UserVoteDefinition.UserVoteDefinition.View.Edit.status::Filter', {
        defaultValue: 'Status',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },
  ];

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
      const strippedQueryCustomizer: ServiceVoteDefinitionQueryCustomizer = {
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
    if (!isLoading) {
      setIsLoading(true);

      try {
        const res =
          await actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesRefresh!(
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
          ...columnsActionCalculator('User/(esm/_O_SswF5BEe6vsex_cZNQbQ)/RelationType', rowActions, t, {
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
          actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesView
            ? async (params: GridRowParams<ServiceVoteDefinitionStored>) =>
                await actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesView!(
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
              {actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesFilter &&
              true ? (
                <Button
                  id="User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults =
                      await actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesFilter!(
                        'User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableFilterButton',
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
                    'service.UserVoteDefinition.UserVoteDefinition.View.Edit.service::UserVoteDefinition::UserVoteDefinition_View_Edit::root::tabBar::ActiveVoteDefinitionsByOwnerActivityArea::tabBar::ActiveVoteDefinitionsInActivityCountiesGroup::activeVoteDefinitionsInActivityCounties::Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesRefresh &&
              true ? (
                <Button
                  id="User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserVoteDefinition.UserVoteDefinition.View.Edit.service::UserVoteDefinition::UserVoteDefinition_View_Edit::root::tabBar::ActiveVoteDefinitionsByOwnerActivityArea::tabBar::ActiveVoteDefinitionsInActivityCountiesGroup::activeVoteDefinitionsInActivityCounties::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesCreateOpen &&
              true ? (
                <Button
                  id="User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesCreateOpen!();
                  }}
                  disabled={editMode || isLoading}
                >
                  {t(
                    'service.UserVoteDefinition.UserVoteDefinition.View.Edit.service::UserVoteDefinition::UserVoteDefinition_View_Edit::root::tabBar::ActiveVoteDefinitionsByOwnerActivityArea::tabBar::ActiveVoteDefinitionsInActivityCountiesGroup::activeVoteDefinitionsInActivityCounties::Create',
                    { defaultValue: 'Create' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesAddOpenSelector &&
              true ? (
                <Button
                  id="User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesAddOpenSelector!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.UserVoteDefinition.UserVoteDefinition.View.Edit.service::UserVoteDefinition::UserVoteDefinition_View_Edit::root::tabBar::ActiveVoteDefinitionsByOwnerActivityArea::tabBar::ActiveVoteDefinitionsInActivityCountiesGroup::activeVoteDefinitionsInActivityCounties::Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesClear &&
              data.length ? (
                <Button
                  id="User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesClear!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.UserVoteDefinition.UserVoteDefinition.View.Edit.service::UserVoteDefinition::UserVoteDefinition_View_Edit::root::tabBar::ActiveVoteDefinitionsByOwnerActivityArea::tabBar::ActiveVoteDefinitionsInActivityCountiesGroup::activeVoteDefinitionsInActivityCounties::Clear',
                    { defaultValue: 'Clear' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesBulkRemove &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesBulkRemove!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserVoteDefinition.UserVoteDefinition.View.Edit.service::UserVoteDefinition::UserVoteDefinition_View_Edit::root::tabBar::ActiveVoteDefinitionsByOwnerActivityArea::tabBar::ActiveVoteDefinitionsInActivityCountiesGroup::activeVoteDefinitionsInActivityCounties::BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesBulkDelete &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesBulkDelete!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'service.UserVoteDefinition.UserVoteDefinition.View.Edit.service::UserVoteDefinition::UserVoteDefinition_View_Edit::root::tabBar::ActiveVoteDefinitionsByOwnerActivityArea::tabBar::ActiveVoteDefinitionsInActivityCountiesGroup::activeVoteDefinitionsInActivityCounties::BulkDelete',
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
