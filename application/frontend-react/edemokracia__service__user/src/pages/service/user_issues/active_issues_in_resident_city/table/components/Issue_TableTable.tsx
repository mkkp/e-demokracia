//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/table.tsx
// Template file: actor/src/pages/components/table.tsx.hbs

import { useEffect, useState, useImperativeHandle, useMemo, useRef, forwardRef, useCallback } from 'react';
import type { MouseEvent } from 'react';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
import type {
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridValueFormatterParams,
  GridRowClassNameParams,
  GridRowId,
  GridRowModel,
  GridRowSelectionModel,
  GridSortItem,
} from '@mui/x-data-grid';
import { GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import { MdiIcon, CustomTablePagination } from '~/components';
import { baseColumnConfig, baseTableConfig, toastConfig, DIVIDER_HEIGHT } from '~/config';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { columnsActionCalculator } from '~/components/table';
import { FilterOption, FilterType, Filter } from '~/components-api';
import type { PersistedTableData, RefreshableTable, TableRowAction } from '~/utilities';
import { useDataStore, useCRUDDialog } from '~/hooks';
import {
  decodeToken,
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  processQueryCustomizer,
  mapAllFiltersToQueryCustomizerProperties,
  mapFilterModelToFilters,
  mapFilterToFilterModel,
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  getUpdatedRowsSelected,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';
import { ContextMenu, StripedDataGrid } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';

import {
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceUserIssuesStored,
} from '~/generated/data-api';
import { serviceUserIssuesServiceForClassImpl, serviceIssueServiceForClassImpl } from '~/generated/data-axios';
import {
  useServiceIssueActivateAction,
  useServiceIssueAddToFavoritesAction,
  useServiceIssueCloseDebateAction,
  useServiceIssueCloseVoteAction,
  useServiceIssueCreateCommentAction,
  useServiceIssueCreateConArgumentAction,
  useServiceIssueCreateProArgumentAction,
  useServiceIssueDeleteOrArchiveAction,
  useServiceIssueRemoveFromFavoritesAction,
  usePageFilterActiveIssuesInResidentCityAction,
  usePageRefreshActiveIssuesInResidentCityAction,
  useRowViewActiveIssuesInResidentCityAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_CITY_TABLE_ISSUE_TABLE =
  'ServiceUserIssuesActiveIssuesInResidentCityTableIssue_Table';

export interface Issue_TableTableProps {
  ownerData: JudoIdentifiable<ServiceUserIssues>;
  isOwnerLoading: boolean;
  setIsOwnerLoading: (value: boolean) => void;
}

export const Issue_TableTable = forwardRef<RefreshableTable, Issue_TableTableProps>((props, ref) => {
  const { getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { isOwnerLoading, setIsOwnerLoading, ownerData } = props;
  const { sub: __identifier } = decodeToken<{ sub: string }>(ownerData.__signedIdentifier)!;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const openCRUDDialog = useCRUDDialog();

  const [data, setData] = useState<GridRowModel<ServiceIssueStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);
  const filterModelKey = `TableedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableDefaultActiveIssuesInResidentCityIssueTable-${__identifier}-filterModel`;
  const filtersKey = `TableedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableDefaultActiveIssuesInResidentCityIssueTable-${__identifier}-filters`;
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [lastItem, setLastItem] = useState<ServiceIssueStored>();
  const [firstItem, setFirstItem] = useState<ServiceIssueStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceIssueQueryCustomizer>({
    _mask:
      '{scope,title,status,created,description,isFavorite,isNotFavorite,isVoteClosable,isIssueDraft,isIssueDeletable}',
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

  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const selectedRows = useRef<ServiceIssueStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  useEffect(() => {
    setFilters(
      getItemParsedWithDefault(
        `TableedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableDefaultActiveIssuesInResidentCityIssueTable-${__identifier}-filters`,
        [...filters],
      ),
    );
  }, [ownerData]);
  useEffect(() => {
    setItemStringified(filtersKey, filters);
  }, [filters]);
  useEffect(() => {
    setItemStringified(filterModelKey, filterModel);
  }, [filterModel]);

  const activeIssuesInResidentCitySortModel: GridSortModel = [{ field: 'title', sort: null }];

  const activeIssuesInResidentCityColumns: GridColDef<ServiceIssueStored>[] = [
    {
      ...baseColumnConfig,
      field: 'scope',
      headerName: t('service.IssueTable.activeIssuesInResidentCity.scope', { defaultValue: 'Scope' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'singleSelect',
      filterable: false && true,
      sortable: false,
      valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
        if (value !== undefined && value !== null) {
          return t(`enumerations.EdemokraciaIssueScope.${value}`, { defaultValue: value });
        }
      },
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('service.IssueTable.activeIssuesInResidentCity.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'status',
      headerName: t('service.IssueTable.activeIssuesInResidentCity.status', { defaultValue: 'Status' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'singleSelect',
      filterable: false && true,
      sortable: false,
      valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
        if (value !== undefined && value !== null) {
          return t(`enumerations.EdemokraciaIssueStatus.${value}`, { defaultValue: value });
        }
      },
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.IssueTable.activeIssuesInResidentCity.created', { defaultValue: 'Created' }) as string,
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
      field: 'description',
      headerName: t('service.IssueTable.activeIssuesInResidentCity.description', {
        defaultValue: 'Description',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const activeIssuesInResidentCityRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableDefaultActiveIssuesInResidentCityIssueTableScopeFilter',
      attributeName: 'scope',
      label: t('service.IssueTable.activeIssuesInResidentCity.scope', { defaultValue: 'Scope' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableDefaultActiveIssuesInResidentCityIssueTableTitleFilter',
      attributeName: 'title',
      label: t('service.IssueTable.activeIssuesInResidentCity.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableDefaultActiveIssuesInResidentCityIssueTableStatusFilter',
      attributeName: 'status',
      label: t('service.IssueTable.activeIssuesInResidentCity.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED', 'VOTING'],
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableDefaultActiveIssuesInResidentCityIssueTableCreatedFilter',
      attributeName: 'created',
      label: t('service.IssueTable.activeIssuesInResidentCity.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableDefaultActiveIssuesInResidentCityIssueTableDescriptionFilter',
      attributeName: 'description',
      label: t('service.IssueTable.activeIssuesInResidentCity.description', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },
  ];

  const activeIssuesInResidentCityInitialQueryCustomizer: ServiceIssueQueryCustomizer = {
    _mask:
      '{scope,title,status,created,description,isFavorite,isNotFavorite,isVoteClosable,isIssueDraft,isIssueDeletable}',
    _orderBy: activeIssuesInResidentCitySortModel.length
      ? [
          {
            attribute: activeIssuesInResidentCitySortModel[0].field,
            descending: activeIssuesInResidentCitySortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const serviceIssueActivateAction = useServiceIssueActivateAction();
  const serviceIssueAddToFavoritesAction = useServiceIssueAddToFavoritesAction();
  const serviceIssueCloseDebateAction = useServiceIssueCloseDebateAction();
  const serviceIssueCloseVoteAction = useServiceIssueCloseVoteAction();
  const serviceIssueCreateCommentAction = useServiceIssueCreateCommentAction();
  const serviceIssueCreateConArgumentAction = useServiceIssueCreateConArgumentAction();
  const serviceIssueCreateProArgumentAction = useServiceIssueCreateProArgumentAction();
  const serviceIssueDeleteOrArchiveAction = useServiceIssueDeleteOrArchiveAction();
  const serviceIssueRemoveFromFavoritesAction = useServiceIssueRemoveFromFavoritesAction();
  const pageFilterActiveIssuesInResidentCityAction = usePageFilterActiveIssuesInResidentCityAction(
    setFilters,
    setPage,
    setQueryCustomizer,
    openFilterDialog,
    10,
  );
  const pageRefreshActiveIssuesInResidentCityAction = usePageRefreshActiveIssuesInResidentCityAction();
  const rowViewActiveIssuesInResidentCityAction = useRowViewActiveIssuesInResidentCityAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableDefaultActiveIssuesInResidentCityIssueTableScopeFilter',
      attributeName: 'scope',
      label: t('service.IssueTable.activeIssuesInResidentCity.scope', { defaultValue: 'Scope' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableDefaultActiveIssuesInResidentCityIssueTableTitleFilter',
      attributeName: 'title',
      label: t('service.IssueTable.activeIssuesInResidentCity.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableDefaultActiveIssuesInResidentCityIssueTableStatusFilter',
      attributeName: 'status',
      label: t('service.IssueTable.activeIssuesInResidentCity.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED', 'VOTING'],
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableDefaultActiveIssuesInResidentCityIssueTableCreatedFilter',
      attributeName: 'created',
      label: t('service.IssueTable.activeIssuesInResidentCity.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableDefaultActiveIssuesInResidentCityIssueTableDescriptionFilter',
      attributeName: 'description',
      label: t('service.IssueTable.activeIssuesInResidentCity.description', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },
  ];

  const rowActions: TableRowAction<ServiceIssueStored>[] = [
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableEdemokraciaServiceUserEdemokraciaServiceIssueAddToFavoritesButtonCallOperation',
      label: t('service.IssueTable.activeIssuesInResidentCity.addToFavorites.ButtonCallOperation', {
        defaultValue: 'Add to favorites',
      }) as string,
      icon: <MdiIcon path="star-plus" />,
      action: async (row: ServiceIssueStored) => serviceIssueAddToFavoritesAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableEdemokraciaServiceUserEdemokraciaServiceIssueRemoveFromFavoritesButtonCallOperation',
      label: t('service.IssueTable.activeIssuesInResidentCity.removeFromFavorites.ButtonCallOperation', {
        defaultValue: 'Remove from favorites',
      }) as string,
      icon: <MdiIcon path="star-minus" />,
      action: async (row: ServiceIssueStored) => serviceIssueRemoveFromFavoritesAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableEdemokraciaServiceUserEdemokraciaServiceIssueCloseDebateButtonCallOperation',
      label: t('service.IssueTable.activeIssuesInResidentCity.closeDebate.ButtonCallOperation', {
        defaultValue: 'Close debate and start vote',
      }) as string,
      icon: <MdiIcon path="vote" />,
      action: async (row: ServiceIssueStored) => serviceIssueCloseDebateAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableEdemokraciaServiceUserEdemokraciaServiceIssueCloseVoteButtonCallOperation',
      label: t('service.IssueTable.activeIssuesInResidentCity.closeVote.ButtonCallOperation', {
        defaultValue: 'Close Vote',
      }) as string,
      icon: <MdiIcon path="lock-check" />,
      action: async (row: ServiceIssueStored) => serviceIssueCloseVoteAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableEdemokraciaServiceUserEdemokraciaServiceIssueActivateButtonCallOperation',
      label: t('service.IssueTable.activeIssuesInResidentCity.activate.ButtonCallOperation', {
        defaultValue: 'Activate',
      }) as string,
      icon: <MdiIcon path="lock-open" />,
      action: async (row: ServiceIssueStored) => serviceIssueActivateAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableEdemokraciaServiceUserEdemokraciaServiceIssueDeleteOrArchiveButtonCallOperation',
      label: t('service.IssueTable.activeIssuesInResidentCity.deleteOrArchive.ButtonCallOperation', {
        defaultValue: 'Delete',
      }) as string,
      icon: <MdiIcon path="delete" />,
      action: async (row: ServiceIssueStored) => serviceIssueDeleteOrArchiveAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableEdemokraciaServiceUserEdemokraciaServiceIssueCreateConArgumentButtonCallOperation',
      label: t('service.IssueTable.activeIssuesInResidentCity.createConArgument.ButtonCallOperation', {
        defaultValue: 'Add Con Argument',
      }) as string,
      icon: <MdiIcon path="chat-minus" />,
      action: async (row: ServiceIssueStored) => serviceIssueCreateConArgumentAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableEdemokraciaServiceUserEdemokraciaServiceIssueCreateProArgumentButtonCallOperation',
      label: t('service.IssueTable.activeIssuesInResidentCity.createProArgument.ButtonCallOperation', {
        defaultValue: 'Add Pro Argument',
      }) as string,
      icon: <MdiIcon path="chat-plus" />,
      action: async (row: ServiceIssueStored) => serviceIssueCreateProArgumentAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableEdemokraciaServiceUserEdemokraciaServiceIssueCreateCommentButtonCallOperation',
      label: t('service.IssueTable.activeIssuesInResidentCity.createComment.ButtonCallOperation', {
        defaultValue: 'Add comment',
      }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      action: async (row: ServiceIssueStored) => serviceIssueCreateCommentAction(row, () => fetchData()),
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceIssueQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of activeIssuesInResidentCityColumns.map((c) => c.field)) {
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

  async function fetchData() {
    setIsOwnerLoading(true);

    try {
      const res = await serviceUserIssuesServiceForClassImpl.getActiveIssuesInResidentCity(
        ownerData,
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
      handleFetchError(error);
    } finally {
      setIsOwnerLoading(false);
    }
  }

  useImperativeHandle(ref, () => ({
    fetchData,
  }));

  useEffect(() => {
    fetchData();
  }, [queryCustomizer]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
        }}
        slotProps={{
          filterPanel: {
            logicOperators: [GridLogicOperator.And],
          },
        }}
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isOwnerLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...activeIssuesInResidentCityColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCity',
            rowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        onRowClick={(params: GridRowParams<ServiceIssueStored>) =>
          rowViewActiveIssuesInResidentCityAction(ownerData, params.row, () => fetchData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableEdemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityPageFilter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  pageFilterActiveIssuesInResidentCityAction(
                    'FilterActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityTableEdemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityPageFilter-filter',
                    filterOptions,
                    filters,
                  );
                }}
                disabled={isOwnerLoading}
              >
                {t('judo.pages.table.set-filters', { defaultValue: 'Set filters' }) +
                  (filters.length !== 0 ? ' (' + filters.length + ')' : '')}
              </Button>
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
    </>
  );
});
