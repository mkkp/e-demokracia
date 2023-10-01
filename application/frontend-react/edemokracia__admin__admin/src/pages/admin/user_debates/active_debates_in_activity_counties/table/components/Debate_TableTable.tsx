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
  AdminDebate,
  AdminDebateQueryCustomizer,
  AdminDebateStored,
  AdminUserDebates,
  AdminUserDebatesStored,
} from '~/generated/data-api';
import { adminUserDebatesServiceForClassImpl, adminDebateServiceForClassImpl } from '~/generated/data-axios';
import {
  useAdminDebateAddToFavoritesAction,
  useAdminDebateCloseDebateAction,
  useAdminDebateCreateArgumentAction,
  useAdminDebateCreateCommentAction,
  useAdminDebateRemoveFromFavoritesAction,
  usePageFilterActiveDebatesInActivityCountiesAction,
  usePageRefreshActiveDebatesInActivityCountiesAction,
  useRowViewActiveDebatesInActivityCountiesAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_USER_DEBATES_ACTIVE_DEBATES_IN_ACTIVITY_COUNTIES_TABLE_DEBATE_TABLE =
  'AdminUserDebatesActiveDebatesInActivityCountiesTableDebate_Table';

export interface Debate_TableTableProps {
  ownerData: JudoIdentifiable<AdminUserDebates>;
  isOwnerLoading: boolean;
  setIsOwnerLoading: (value: boolean) => void;
}

export const Debate_TableTable = forwardRef<RefreshableTable, Debate_TableTableProps>((props, ref) => {
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

  const [data, setData] = useState<GridRowModel<AdminDebateStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'issueTitle', sort: null }]);
  const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableDefaultActiveDebatesInActivityCountiesDebateTable-${__identifier}-filterModel`;
  const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableDefaultActiveDebatesInActivityCountiesDebateTable-${__identifier}-filters`;
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [lastItem, setLastItem] = useState<AdminDebateStored>();
  const [firstItem, setFirstItem] = useState<AdminDebateStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [queryCustomizer, setQueryCustomizer] = useState<AdminDebateQueryCustomizer>({
    _mask: '{issueTitle,title,status,closeAt,description,isNotClosed,isFavorite,isNotFavorite}',
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
  const selectedRows = useRef<AdminDebateStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  useEffect(() => {
    setFilters(
      getItemParsedWithDefault(
        `TableedemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableDefaultActiveDebatesInActivityCountiesDebateTable-${__identifier}-filters`,
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

  const activeDebatesInActivityCountiesSortModel: GridSortModel = [{ field: 'issueTitle', sort: null }];

  const activeDebatesInActivityCountiesColumns: GridColDef<AdminDebateStored>[] = [
    {
      ...baseColumnConfig,
      field: 'issueTitle',
      headerName: t('admin.DebateTable.activeDebatesInActivityCounties.issueTitle', {
        defaultValue: 'Issue',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('admin.DebateTable.activeDebatesInActivityCounties.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'status',
      headerName: t('admin.DebateTable.activeDebatesInActivityCounties.status', { defaultValue: 'Status' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'singleSelect',
      filterable: false && true,
      sortable: false,
      valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
        if (value !== undefined && value !== null) {
          return t(`enumerations.EdemokraciaDebateStatus.${value}`, { defaultValue: value });
        }
      },
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
    {
      ...baseColumnConfig,
      field: 'closeAt',
      headerName: t('admin.DebateTable.activeDebatesInActivityCounties.closeAt', {
        defaultValue: 'Close at',
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
      field: 'description',
      headerName: t('admin.DebateTable.activeDebatesInActivityCounties.description', {
        defaultValue: 'Description',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const activeDebatesInActivityCountiesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableDefaultActiveDebatesInActivityCountiesDebateTableIssueTitleFilter',
      attributeName: 'issueTitle',
      label: t('admin.DebateTable.activeDebatesInActivityCounties.issueTitle', { defaultValue: 'Issue' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableDefaultActiveDebatesInActivityCountiesDebateTableTitleFilter',
      attributeName: 'title',
      label: t('admin.DebateTable.activeDebatesInActivityCounties.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableDefaultActiveDebatesInActivityCountiesDebateTableStatusFilter',
      attributeName: 'status',
      label: t('admin.DebateTable.activeDebatesInActivityCounties.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableDefaultActiveDebatesInActivityCountiesDebateTableCloseAtFilter',
      attributeName: 'closeAt',
      label: t('admin.DebateTable.activeDebatesInActivityCounties.closeAt', { defaultValue: 'Close at' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableDefaultActiveDebatesInActivityCountiesDebateTableDescriptionFilter',
      attributeName: 'description',
      label: t('admin.DebateTable.activeDebatesInActivityCounties.description', {
        defaultValue: 'Description',
      }) as string,
      filterType: FilterType.string,
    },
  ];

  const activeDebatesInActivityCountiesInitialQueryCustomizer: AdminDebateQueryCustomizer = {
    _mask: '{issueTitle,title,status,closeAt,description,isNotClosed,isFavorite,isNotFavorite}',
    _orderBy: activeDebatesInActivityCountiesSortModel.length
      ? [
          {
            attribute: activeDebatesInActivityCountiesSortModel[0].field,
            descending: activeDebatesInActivityCountiesSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const adminDebateAddToFavoritesAction = useAdminDebateAddToFavoritesAction();
  const adminDebateCloseDebateAction = useAdminDebateCloseDebateAction();
  const adminDebateCreateArgumentAction = useAdminDebateCreateArgumentAction();
  const adminDebateCreateCommentAction = useAdminDebateCreateCommentAction();
  const adminDebateRemoveFromFavoritesAction = useAdminDebateRemoveFromFavoritesAction();
  const pageFilterActiveDebatesInActivityCountiesAction = usePageFilterActiveDebatesInActivityCountiesAction(
    setFilters,
    setPage,
    setQueryCustomizer,
    openFilterDialog,
    10,
  );
  const pageRefreshActiveDebatesInActivityCountiesAction = usePageRefreshActiveDebatesInActivityCountiesAction();
  const rowViewActiveDebatesInActivityCountiesAction = useRowViewActiveDebatesInActivityCountiesAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableDefaultActiveDebatesInActivityCountiesDebateTableIssueTitleFilter',
      attributeName: 'issueTitle',
      label: t('admin.DebateTable.activeDebatesInActivityCounties.issueTitle', { defaultValue: 'Issue' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableDefaultActiveDebatesInActivityCountiesDebateTableTitleFilter',
      attributeName: 'title',
      label: t('admin.DebateTable.activeDebatesInActivityCounties.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableDefaultActiveDebatesInActivityCountiesDebateTableStatusFilter',
      attributeName: 'status',
      label: t('admin.DebateTable.activeDebatesInActivityCounties.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableDefaultActiveDebatesInActivityCountiesDebateTableCloseAtFilter',
      attributeName: 'closeAt',
      label: t('admin.DebateTable.activeDebatesInActivityCounties.closeAt', { defaultValue: 'Close at' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableDefaultActiveDebatesInActivityCountiesDebateTableDescriptionFilter',
      attributeName: 'description',
      label: t('admin.DebateTable.activeDebatesInActivityCounties.description', {
        defaultValue: 'Description',
      }) as string,
      filterType: FilterType.string,
    },
  ];

  const rowActions: TableRowAction<AdminDebateStored>[] = [
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableEdemokraciaAdminAdminEdemokraciaAdminDebateCloseDebateButtonCallOperation',
      label: t('admin.DebateTable.activeDebatesInActivityCounties.closeDebate.ButtonCallOperation', {
        defaultValue: 'Close debate',
      }) as string,
      icon: <MdiIcon path="wechat" />,
      action: async (row: AdminDebateStored) => adminDebateCloseDebateAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableEdemokraciaAdminAdminEdemokraciaAdminDebateAddToFavoritesButtonCallOperation',
      label: t('admin.DebateTable.activeDebatesInActivityCounties.addToFavorites.ButtonCallOperation', {
        defaultValue: 'Add to favorites',
      }) as string,
      icon: <MdiIcon path="star-plus" />,
      action: async (row: AdminDebateStored) => adminDebateAddToFavoritesAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableEdemokraciaAdminAdminEdemokraciaAdminDebateRemoveFromFavoritesButtonCallOperation',
      label: t('admin.DebateTable.activeDebatesInActivityCounties.removeFromFavorites.ButtonCallOperation', {
        defaultValue: 'Remove from favorites',
      }) as string,
      icon: <MdiIcon path="star-minus" />,
      action: async (row: AdminDebateStored) => adminDebateRemoveFromFavoritesAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableEdemokraciaAdminAdminEdemokraciaAdminDebateCreateArgumentButtonCallOperation',
      label: t('admin.DebateTable.activeDebatesInActivityCounties.createArgument.ButtonCallOperation', {
        defaultValue: 'Add argument',
      }) as string,
      icon: <MdiIcon path="account-voice" />,
      action: async (row: AdminDebateStored) => adminDebateCreateArgumentAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableEdemokraciaAdminAdminEdemokraciaAdminDebateCreateCommentButtonCallOperation',
      label: t('admin.DebateTable.activeDebatesInActivityCounties.createComment.ButtonCallOperation', {
        defaultValue: 'Add comment',
      }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      action: async (row: AdminDebateStored) => adminDebateCreateCommentAction(row, () => fetchData()),
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);

    setQueryCustomizer((prevQueryCustomizer: AdminDebateQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of activeDebatesInActivityCountiesColumns.map((c) => c.field)) {
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
      const strippedQueryCustomizer: AdminDebateQueryCustomizer = {
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
      const res = await adminUserDebatesServiceForClassImpl.getActiveDebatesInActivityCounties(
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
          ...activeDebatesInActivityCountiesColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCounties',
            rowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        onRowClick={(params: GridRowParams<AdminDebateStored>) =>
          rowViewActiveDebatesInActivityCountiesAction(ownerData, params.row, () => fetchData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterActionedemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableEdemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesPageFilter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  pageFilterActiveDebatesInActivityCountiesAction(
                    'FilterActionedemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesTableEdemokraciaAdminAdminEdemokraciaAdminUserDebatesActiveDebatesInActivityCountiesPageFilter-filter',
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
