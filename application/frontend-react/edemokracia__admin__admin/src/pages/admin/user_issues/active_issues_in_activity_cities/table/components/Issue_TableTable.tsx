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
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminUserIssues,
  AdminUserIssuesStored,
} from '~/generated/data-api';
import { adminUserIssuesServiceForClassImpl, adminIssueServiceForClassImpl } from '~/generated/data-axios';
import {
  useAdminIssueAddToFavoritesAction,
  useAdminIssueCreateCommentAction,
  useAdminIssueCreateDebateAction,
  useAdminIssueRemoveFromFavoritesAction,
  usePageFilterActiveIssuesInActivityCitiesAction,
  usePageRefreshActiveIssuesInActivityCitiesAction,
  useRowViewActiveIssuesInActivityCitiesAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_TABLE_ISSUE_TABLE =
  'AdminUserIssuesActiveIssuesInActivityCitiesTableIssue_Table';

export interface Issue_TableTableProps {
  ownerData: JudoIdentifiable<AdminUserIssues>;
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

  const [data, setData] = useState<GridRowModel<AdminIssueStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);
  const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableDefaultActiveIssuesInActivityCitiesIssueTable-${__identifier}-filterModel`;
  const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableDefaultActiveIssuesInActivityCitiesIssueTable-${__identifier}-filters`;
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [lastItem, setLastItem] = useState<AdminIssueStored>();
  const [firstItem, setFirstItem] = useState<AdminIssueStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [queryCustomizer, setQueryCustomizer] = useState<AdminIssueQueryCustomizer>({
    _mask: '{scope,title,status,created,numberOfDebates,description,isFavorite,isNotFavorite}',
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
  const selectedRows = useRef<AdminIssueStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  useEffect(() => {
    setFilters(
      getItemParsedWithDefault(
        `TableedemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableDefaultActiveIssuesInActivityCitiesIssueTable-${__identifier}-filters`,
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

  const activeIssuesInActivityCitiesSortModel: GridSortModel = [{ field: 'title', sort: null }];

  const activeIssuesInActivityCitiesColumns: GridColDef<AdminIssueStored>[] = [
    {
      ...baseColumnConfig,
      field: 'scope',
      headerName: t('admin.IssueTable.activeIssuesInActivityCities.scope', { defaultValue: 'Scope' }) as string,
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
      headerName: t('admin.IssueTable.activeIssuesInActivityCities.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'status',
      headerName: t('admin.IssueTable.activeIssuesInActivityCities.status', { defaultValue: 'Status' }) as string,
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
      headerName: t('admin.IssueTable.activeIssuesInActivityCities.created', { defaultValue: 'Created' }) as string,
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
      field: 'numberOfDebates',
      headerName: t('admin.IssueTable.activeIssuesInActivityCities.numberOfDebates', {
        defaultValue: 'Debates',
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
      field: 'description',
      headerName: t('admin.IssueTable.activeIssuesInActivityCities.description', {
        defaultValue: 'Description',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const activeIssuesInActivityCitiesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableDefaultActiveIssuesInActivityCitiesIssueTableScopeFilter',
      attributeName: 'scope',
      label: t('admin.IssueTable.activeIssuesInActivityCities.scope', { defaultValue: 'Scope' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableDefaultActiveIssuesInActivityCitiesIssueTableTitleFilter',
      attributeName: 'title',
      label: t('admin.IssueTable.activeIssuesInActivityCities.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableDefaultActiveIssuesInActivityCitiesIssueTableStatusFilter',
      attributeName: 'status',
      label: t('admin.IssueTable.activeIssuesInActivityCities.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableDefaultActiveIssuesInActivityCitiesIssueTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.IssueTable.activeIssuesInActivityCities.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableDefaultActiveIssuesInActivityCitiesIssueTableNumberOfDebatesFilter',
      attributeName: 'numberOfDebates',
      label: t('admin.IssueTable.activeIssuesInActivityCities.numberOfDebates', { defaultValue: 'Debates' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableDefaultActiveIssuesInActivityCitiesIssueTableDescriptionFilter',
      attributeName: 'description',
      label: t('admin.IssueTable.activeIssuesInActivityCities.description', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },
  ];

  const activeIssuesInActivityCitiesInitialQueryCustomizer: AdminIssueQueryCustomizer = {
    _mask: '{scope,title,status,created,numberOfDebates,description,isFavorite,isNotFavorite}',
    _orderBy: activeIssuesInActivityCitiesSortModel.length
      ? [
          {
            attribute: activeIssuesInActivityCitiesSortModel[0].field,
            descending: activeIssuesInActivityCitiesSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const adminIssueAddToFavoritesAction = useAdminIssueAddToFavoritesAction();
  const adminIssueCreateCommentAction = useAdminIssueCreateCommentAction();
  const adminIssueCreateDebateAction = useAdminIssueCreateDebateAction();
  const adminIssueRemoveFromFavoritesAction = useAdminIssueRemoveFromFavoritesAction();
  const pageFilterActiveIssuesInActivityCitiesAction = usePageFilterActiveIssuesInActivityCitiesAction(
    setFilters,
    setPage,
    setQueryCustomizer,
    openFilterDialog,
    10,
  );
  const pageRefreshActiveIssuesInActivityCitiesAction = usePageRefreshActiveIssuesInActivityCitiesAction();
  const rowViewActiveIssuesInActivityCitiesAction = useRowViewActiveIssuesInActivityCitiesAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableDefaultActiveIssuesInActivityCitiesIssueTableScopeFilter',
      attributeName: 'scope',
      label: t('admin.IssueTable.activeIssuesInActivityCities.scope', { defaultValue: 'Scope' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableDefaultActiveIssuesInActivityCitiesIssueTableTitleFilter',
      attributeName: 'title',
      label: t('admin.IssueTable.activeIssuesInActivityCities.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableDefaultActiveIssuesInActivityCitiesIssueTableStatusFilter',
      attributeName: 'status',
      label: t('admin.IssueTable.activeIssuesInActivityCities.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableDefaultActiveIssuesInActivityCitiesIssueTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.IssueTable.activeIssuesInActivityCities.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableDefaultActiveIssuesInActivityCitiesIssueTableNumberOfDebatesFilter',
      attributeName: 'numberOfDebates',
      label: t('admin.IssueTable.activeIssuesInActivityCities.numberOfDebates', { defaultValue: 'Debates' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableDefaultActiveIssuesInActivityCitiesIssueTableDescriptionFilter',
      attributeName: 'description',
      label: t('admin.IssueTable.activeIssuesInActivityCities.description', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },
  ];

  const rowActions: TableRowAction<AdminIssueStored>[] = [
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableEdemokraciaAdminAdminEdemokraciaAdminIssueCreateDebateButtonCallOperation',
      label: t('admin.IssueTable.activeIssuesInActivityCities.createDebate.ButtonCallOperation', {
        defaultValue: 'Create debate',
      }) as string,
      icon: <MdiIcon path="wechat" />,
      action: async (row: AdminIssueStored) => adminIssueCreateDebateAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableEdemokraciaAdminAdminEdemokraciaAdminIssueAddToFavoritesButtonCallOperation',
      label: t('admin.IssueTable.activeIssuesInActivityCities.addToFavorites.ButtonCallOperation', {
        defaultValue: 'Add to favorites',
      }) as string,
      icon: <MdiIcon path="star-plus" />,
      action: async (row: AdminIssueStored) => adminIssueAddToFavoritesAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableEdemokraciaAdminAdminEdemokraciaAdminIssueRemoveFromFavoritesButtonCallOperation',
      label: t('admin.IssueTable.activeIssuesInActivityCities.removeFromFavorites.ButtonCallOperation', {
        defaultValue: 'Remove from favorites',
      }) as string,
      icon: <MdiIcon path="star-minus" />,
      action: async (row: AdminIssueStored) => adminIssueRemoveFromFavoritesAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableEdemokraciaAdminAdminEdemokraciaAdminIssueCreateCommentButtonCallOperation',
      label: t('admin.IssueTable.activeIssuesInActivityCities.createComment.ButtonCallOperation', {
        defaultValue: 'Add comment',
      }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      action: async (row: AdminIssueStored) => adminIssueCreateCommentAction(row, () => fetchData()),
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);

    setQueryCustomizer((prevQueryCustomizer: AdminIssueQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of activeIssuesInActivityCitiesColumns.map((c) => c.field)) {
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
      const strippedQueryCustomizer: AdminIssueQueryCustomizer = {
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
      const res = await adminUserIssuesServiceForClassImpl.getActiveIssuesInActivityCities(
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
          ...activeIssuesInActivityCitiesColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCities',
            rowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setSelectionModel(newRowSelectionModel);
        }}
        keepNonExistentRowsSelected
        onRowClick={(params: GridRowParams<AdminIssueStored>) =>
          rowViewActiveIssuesInActivityCitiesAction(ownerData, params.row, () => fetchData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterActionedemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableEdemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesPageFilter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  pageFilterActiveIssuesInActivityCitiesAction(
                    'FilterActionedemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesTableEdemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInActivityCitiesPageFilter-filter',
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
