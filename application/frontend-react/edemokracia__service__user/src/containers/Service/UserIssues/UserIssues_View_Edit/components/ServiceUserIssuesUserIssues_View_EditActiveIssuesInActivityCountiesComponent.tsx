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
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceUserIssuesStored,
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

export interface ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentActionDefinitions {
  serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesAddOpenSelector?: () => Promise<void>;
  serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesBulkDelete?: (
    selectedRows: ServiceIssueStored[],
  ) => Promise<DialogResult<ServiceIssueStored[]>>;
  serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesBulkRemove?: (
    selectedRows: ServiceIssueStored[],
  ) => Promise<DialogResult<ServiceIssueStored[]>>;
  serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesClear?: () => Promise<void>;
  serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesCreateOpen?: () => Promise<void>;
  serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesRefresh?: (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ) => Promise<ServiceIssueStored[]>;
  serviceIssueIssue_View_EditActionsPageActionButtonsActivate?: (
    row: ServiceIssueStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceIssueIssue_View_EditActionsPageActionButtonsAddToFavorites?: (
    row: ServiceIssueStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceIssueIssue_View_EditActionsPageActionButtonsCloseDebateOpenForm?: (row: ServiceIssueStored) => Promise<void>;
  serviceIssueIssue_View_EditActionsPageActionButtonsCloseVote?: (
    row: ServiceIssueStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceIssueIssue_View_EditActionsPageActionButtonsDeleteOrArchive?: (
    row: ServiceIssueStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceIssueIssue_View_EditActionsPageActionButtonsRemoveFromFavorites?: (
    row: ServiceIssueStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesDelete?: (
    row: ServiceIssueStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesRemove?: (
    row: ServiceIssueStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesView?: (
    row: ServiceIssueStored,
  ) => Promise<void>;
}

export interface ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentProps {
  uniqueId: string;
  actions: ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceUserIssues;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable
// Name: activeIssuesInActivityCounties
export function ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponent(
  props: ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
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
    _mask: '{countyRepresentation,title,created,status}',
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

  const columns: GridColDef<ServiceIssueStored>[] = [
    {
      ...baseColumnConfig,
      field: 'countyRepresentation',
      headerName: t('service.UserIssues.UserIssues.View.Edit.countyRepresentation', {
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
      headerName: t('service.UserIssues.UserIssues.View.Edit.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.UserIssues.UserIssues.View.Edit.created', { defaultValue: 'Created' }) as string,
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
      headerName: t('service.UserIssues.UserIssues.View.Edit.status', { defaultValue: 'Status' }) as string,
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
  ];

  const rowActions: TableRowAction<ServiceIssueStored>[] = [
    {
      id: 'User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableRowRemoveButton',
      label: t(
        'service.UserIssues.UserIssues.View.Edit.service::UserIssues::UserIssues_View_Edit::root::tabBar::activeIssuesByActivityArea::tabBar::activeByActivityInCounty::activeIssuesInActivityCounties::Remove',
        { defaultValue: 'Remove' },
      ) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceIssueStored) => isLoading,
      action:
        actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesRemove
          ? async (rowData) => {
              await actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesRemove!(
                rowData,
              );
            }
          : undefined,
    },
    {
      id: 'User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableRowDeleteButton',
      label: t(
        'service.UserIssues.UserIssues.View.Edit.service::UserIssues::UserIssues_View_Edit::root::tabBar::activeIssuesByActivityArea::tabBar::activeByActivityInCounty::activeIssuesInActivityCounties::Delete',
        { defaultValue: 'Delete' },
      ) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.__deleteable || isLoading,
      action:
        actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesDelete
          ? async (rowData) => {
              await actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesDelete!(
                rowData,
              );
            }
          : undefined,
    },
    {
      id: 'User/(esm/_FzSAQHkIEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues.View.Edit.activate', { defaultValue: 'activate' }) as string,
      icon: <MdiIcon path="lock-open" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isIssueDraft || isLoading,
      action: actions.serviceIssueIssue_View_EditActionsPageActionButtonsActivate
        ? async (rowData) => {
            await actions.serviceIssueIssue_View_EditActionsPageActionButtonsActivate!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_pXWdEHkFEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues.View.Edit.closeVote', { defaultValue: 'closeVote' }) as string,
      icon: <MdiIcon path="lock-check" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isVoteClosable || isLoading,
      action: actions.serviceIssueIssue_View_EditActionsPageActionButtonsCloseVote
        ? async (rowData) => {
            await actions.serviceIssueIssue_View_EditActionsPageActionButtonsCloseVote!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_FzSnUHkIEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues.View.Edit.deleteOrArchive', {
        defaultValue: 'deleteOrArchive',
      }) as string,
      icon: <MdiIcon path="delete" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isIssueDeletable || isLoading,
      action: actions.serviceIssueIssue_View_EditActionsPageActionButtonsDeleteOrArchive
        ? async (rowData) => {
            await actions.serviceIssueIssue_View_EditActionsPageActionButtonsDeleteOrArchive!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_knZE4FxEEe6ma86ynyYZNw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues.View.Edit.removeFromFavorites', {
        defaultValue: 'removeFromFavorites',
      }) as string,
      icon: <MdiIcon path="star-minus" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.serviceIssueIssue_View_EditActionsPageActionButtonsRemoveFromFavorites
        ? async (rowData) => {
            await actions.serviceIssueIssue_View_EditActionsPageActionButtonsRemoveFromFavorites!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_8M4nYHj_Ee6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues.View.Edit.closeDebate', { defaultValue: 'closeDebate' }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceIssueStored) => editMode || !row.isIssueActive || isLoading,
      action: actions.serviceIssueIssue_View_EditActionsPageActionButtonsCloseDebateOpenForm
        ? async (rowData) => {
            await actions.serviceIssueIssue_View_EditActionsPageActionButtonsCloseDebateOpenForm!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_knYd0FxEEe6ma86ynyYZNw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserIssues.UserIssues.View.Edit.addToFavorites', { defaultValue: 'addToFavorites' }) as string,
      icon: <MdiIcon path="star-plus" />,
      disabled: (row: ServiceIssueStored) => editMode || isLoading,
      action: actions.serviceIssueIssue_View_EditActionsPageActionButtonsAddToFavorites
        ? async (rowData) => {
            await actions.serviceIssueIssue_View_EditActionsPageActionButtonsAddToFavorites!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_f2MG8n2GEe6V8KKnnZfChA',
      attributeName: 'countyRepresentation',
      label: t('service.UserIssues.UserIssues.View.Edit.countyRepresentation::Filter', {
        defaultValue: 'CountyRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_f2MuAn2GEe6V8KKnnZfChA',
      attributeName: 'title',
      label: t('service.UserIssues.UserIssues.View.Edit.title::Filter', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_f2NVEn2GEe6V8KKnnZfChA',
      attributeName: 'created',
      label: t('service.UserIssues.UserIssues.View.Edit.created::Filter', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: '_f2N8IH2GEe6V8KKnnZfChA',
      attributeName: 'status',
      label: t('service.UserIssues.UserIssues.View.Edit.status::Filter', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED', 'VOTING'],
    },
  ];

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
    if (!isLoading) {
      setIsLoading(true);

      try {
        const res =
          await actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesRefresh!(
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
          ...columnsActionCalculator('User/(esm/_aMsB4FrWEe6gN-oVBDDIOQ)/RelationType', rowActions, t, {
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
          actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesView
            ? async (params: GridRowParams<ServiceIssueStored>) =>
                await actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesView!(
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
              {actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesFilter &&
              true ? (
                <Button
                  id="User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults =
                      await actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesFilter!(
                        'User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableFilterButton',
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
                    'service.UserIssues.UserIssues.View.Edit.service::UserIssues::UserIssues_View_Edit::root::tabBar::activeIssuesByActivityArea::tabBar::activeByActivityInCounty::activeIssuesInActivityCounties::Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesRefresh &&
              true ? (
                <Button
                  id="User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserIssues.UserIssues.View.Edit.service::UserIssues::UserIssues_View_Edit::root::tabBar::activeIssuesByActivityArea::tabBar::activeByActivityInCounty::activeIssuesInActivityCounties::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesCreateOpen &&
              true ? (
                <Button
                  id="User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesCreateOpen!();
                  }}
                  disabled={editMode || isLoading}
                >
                  {t(
                    'service.UserIssues.UserIssues.View.Edit.service::UserIssues::UserIssues_View_Edit::root::tabBar::activeIssuesByActivityArea::tabBar::activeByActivityInCounty::activeIssuesInActivityCounties::Create',
                    { defaultValue: 'Create' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesAddOpenSelector &&
              true ? (
                <Button
                  id="User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesAddOpenSelector!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.UserIssues.UserIssues.View.Edit.service::UserIssues::UserIssues_View_Edit::root::tabBar::activeIssuesByActivityArea::tabBar::activeByActivityInCounty::activeIssuesInActivityCounties::Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesClear &&
              data.length ? (
                <Button
                  id="User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesClear!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.UserIssues.UserIssues.View.Edit.service::UserIssues::UserIssues_View_Edit::root::tabBar::activeIssuesByActivityArea::tabBar::activeByActivityInCounty::activeIssuesInActivityCounties::Clear',
                    { defaultValue: 'Clear' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesBulkRemove &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesBulkRemove!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserIssues.UserIssues.View.Edit.service::UserIssues::UserIssues_View_Edit::root::tabBar::activeIssuesByActivityArea::tabBar::activeByActivityInCounty::activeIssuesInActivityCounties::BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesBulkDelete &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceUserIssuesUserIssues_View_EditRootTabBarActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveIssuesInActivityCountiesBulkDelete!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'service.UserIssues.UserIssues.View.Edit.service::UserIssues::UserIssues_View_Edit::root::tabBar::activeIssuesByActivityArea::tabBar::activeByActivityInCounty::activeIssuesInActivityCounties::BulkDelete',
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
