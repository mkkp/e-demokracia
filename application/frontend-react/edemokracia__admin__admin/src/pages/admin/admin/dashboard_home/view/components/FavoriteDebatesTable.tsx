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

import { Box, Typography } from '@mui/material';
import {
  AdminDashboard,
  AdminDashboardQueryCustomizer,
  AdminDashboardStored,
  AdminDebate,
  AdminDebateQueryCustomizer,
  AdminDebateStored,
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminVoteDefinition,
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminVoteEntry,
  AdminVoteEntryQueryCustomizer,
  AdminVoteEntryStored,
} from '~/generated/data-api';
import { adminDashboardServiceForClassImpl, adminDebateServiceForClassImpl } from '~/generated/data-axios';
import {
  usePageRefreshDashboardHomeAction,
  useRowViewFavoriteDebatesAction,
  useTableActionFavoriteDebatesAction,
  useTableRefreshRelationFavoriteDebatesAction,
  useAdminDebateAddToFavoritesAction,
  useAdminDebateCloseDebateAction,
  useAdminDebateCreateArgumentAction,
  useAdminDebateCreateCommentAction,
  useAdminDebateRemoveFromFavoritesAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_ADMIN_DASHBOARD_HOME_VIEW_FAVORITE_DEBATES = 'AdminAdminDashboardHomeViewFavoriteDebates';

export interface FavoriteDebatesTableProps {
  ownerData: JudoIdentifiable<AdminDashboard>;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminDashboardStored, value: any) => void;
  refreshCounter: number;
  validation: Map<keyof AdminDashboard, string>;
}

export const FavoriteDebatesTable = forwardRef<RefreshableTable, FavoriteDebatesTableProps>((props, ref) => {
  const { getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { ownerData, isOwnerLoading, fetchOwnerData, editMode, isFormUpdateable, refreshCounter } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const openCRUDDialog = useCRUDDialog();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<AdminDebateStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);
  const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebatesFavoriteDebatesFavoriteDebatesLabelWrapperFavoriteDebates-${ownerData.__signedIdentifier}-filterModel`;
  const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebatesFavoriteDebatesFavoriteDebatesLabelWrapperFavoriteDebates-${ownerData.__signedIdentifier}-filters`;
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [lastItem, setLastItem] = useState<AdminDebateStored>();
  const [firstItem, setFirstItem] = useState<AdminDebateStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [queryCustomizer, setQueryCustomizer] = useState<AdminDebateQueryCustomizer>({
    _mask: '{title,closeAt,status,issueTitle,isNotClosed,isFavorite,isNotFavorite}',
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

  const favoriteDebatesSortModel: GridSortModel = [{ field: 'title', sort: null }];

  const favoriteDebatesColumns: GridColDef<AdminDebateStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('admin.DashboardView.favoriteDebates.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'closeAt',
      headerName: t('admin.DashboardView.favoriteDebates.closeAt', { defaultValue: 'CloseAt' }) as string,
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
      headerName: t('admin.DashboardView.favoriteDebates.status', { defaultValue: 'Status' }) as string,
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
      field: 'issueTitle',
      headerName: t('admin.DashboardView.favoriteDebates.issueTitle', { defaultValue: 'IssueTitle' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const favoriteDebatesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebatesFavoriteDebatesFavoriteDebatesLabelWrapperFavoriteDebatesTitleFilter',
      attributeName: 'title',
      label: t('admin.DashboardView.favoriteDebates.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebatesFavoriteDebatesFavoriteDebatesLabelWrapperFavoriteDebatesCloseAtFilter',
      attributeName: 'closeAt',
      label: t('admin.DashboardView.favoriteDebates.closeAt', { defaultValue: 'CloseAt' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebatesFavoriteDebatesFavoriteDebatesLabelWrapperFavoriteDebatesStatusFilter',
      attributeName: 'status',
      label: t('admin.DashboardView.favoriteDebates.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebatesFavoriteDebatesFavoriteDebatesLabelWrapperFavoriteDebatesIssueTitleFilter',
      attributeName: 'issueTitle',
      label: t('admin.DashboardView.favoriteDebates.issueTitle', { defaultValue: 'IssueTitle' }) as string,
      filterType: FilterType.string,
    },
  ];

  const favoriteDebatesInitialQueryCustomizer: AdminDebateQueryCustomizer = {
    _mask: '{title,closeAt,status,issueTitle,isNotClosed,isFavorite,isNotFavorite}',
    _orderBy: favoriteDebatesSortModel.length
      ? [
          {
            attribute: favoriteDebatesSortModel[0].field,
            descending: favoriteDebatesSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageRefreshDashboardHomeAction = usePageRefreshDashboardHomeAction();
  const rowViewFavoriteDebatesAction = useRowViewFavoriteDebatesAction();
  const tableActionFavoriteDebatesAction = useTableActionFavoriteDebatesAction(
    setFilters,
    setPage,
    setQueryCustomizer,
    openFilterDialog,
    10,
  );
  const tableRefreshRelationFavoriteDebatesAction = useTableRefreshRelationFavoriteDebatesAction();
  const adminDebateAddToFavoritesAction = useAdminDebateAddToFavoritesAction();
  const adminDebateCloseDebateAction = useAdminDebateCloseDebateAction();
  const adminDebateCreateArgumentAction = useAdminDebateCreateArgumentAction();
  const adminDebateCreateCommentAction = useAdminDebateCreateCommentAction();
  const adminDebateRemoveFromFavoritesAction = useAdminDebateRemoveFromFavoritesAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebatesFavoriteDebatesFavoriteDebatesLabelWrapperFavoriteDebatesTitleFilter',
      attributeName: 'title',
      label: t('admin.DashboardView.favoriteDebates.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebatesFavoriteDebatesFavoriteDebatesLabelWrapperFavoriteDebatesCloseAtFilter',
      attributeName: 'closeAt',
      label: t('admin.DashboardView.favoriteDebates.closeAt', { defaultValue: 'CloseAt' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebatesFavoriteDebatesFavoriteDebatesLabelWrapperFavoriteDebatesStatusFilter',
      attributeName: 'status',
      label: t('admin.DashboardView.favoriteDebates.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebatesFavoriteDebatesFavoriteDebatesLabelWrapperFavoriteDebatesIssueTitleFilter',
      attributeName: 'issueTitle',
      label: t('admin.DashboardView.favoriteDebates.issueTitle', { defaultValue: 'IssueTitle' }) as string,
      filterType: FilterType.string,
    },
  ];

  const rowActions: TableRowAction<AdminDebateStored>[] = [
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewEdemokraciaAdminAdminEdemokraciaAdminDebateCloseDebateButtonCallOperation',
      label: t('admin.DashboardView.favoriteDebates.closeDebate.ButtonCallOperation', {
        defaultValue: 'Close debate',
      }) as string,
      icon: <MdiIcon path="wechat" />,
      action: async (row: AdminDebateStored) =>
        adminDebateCloseDebateAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewEdemokraciaAdminAdminEdemokraciaAdminDebateAddToFavoritesButtonCallOperation',
      label: t('admin.DashboardView.favoriteDebates.addToFavorites.ButtonCallOperation', {
        defaultValue: 'Add to favorites',
      }) as string,
      icon: <MdiIcon path="star-plus" />,
      action: async (row: AdminDebateStored) =>
        adminDebateAddToFavoritesAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewEdemokraciaAdminAdminEdemokraciaAdminDebateRemoveFromFavoritesButtonCallOperation',
      label: t('admin.DashboardView.favoriteDebates.removeFromFavorites.ButtonCallOperation', {
        defaultValue: 'Remove from favorites',
      }) as string,
      icon: <MdiIcon path="star-minus" />,
      action: async (row: AdminDebateStored) =>
        adminDebateRemoveFromFavoritesAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewEdemokraciaAdminAdminEdemokraciaAdminDebateCreateArgumentButtonCallOperation',
      label: t('admin.DashboardView.favoriteDebates.createArgument.ButtonCallOperation', {
        defaultValue: 'Add argument',
      }) as string,
      icon: <MdiIcon path="account-voice" />,
      action: async (row: AdminDebateStored) =>
        adminDebateCreateArgumentAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewEdemokraciaAdminAdminEdemokraciaAdminDebateCreateCommentButtonCallOperation',
      label: t('admin.DashboardView.favoriteDebates.createComment.ButtonCallOperation', {
        defaultValue: 'Add comment',
      }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      action: async (row: AdminDebateStored) =>
        adminDebateCreateCommentAction(row, () => {
          fetchOwnerData();
        }),
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: AdminDebateQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of favoriteDebatesColumns.map((c) => c.field)) {
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
    if (ownerData && ownerData.__signedIdentifier) {
      setIsLoading(true);

      try {
        const res = await adminDashboardServiceForClassImpl.getFavoriteDebates(
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
        setIsLoading(false);
      }
    }
  }

  useImperativeHandle(ref, () => ({
    fetchData,
  }));

  useEffect(() => {
    fetchData();
  }, [queryCustomizer, refreshCounter]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) =>
            props.validation.has('favoriteDebates') ? `2px solid ${theme.palette.error.main}` : undefined,
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
          ...favoriteDebatesColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminDashboardFavoriteDebates',
            rowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        onRowClick={(params: GridRowParams<AdminDebateStored>) =>
          rowViewFavoriteDebatesAction(ownerData, params.row, () => fetchOwnerData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterRelationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewEdemokraciaAdminAdminEdemokraciaAdminDashboardFavoriteDebatesTableAction"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  tableActionFavoriteDebatesAction(
                    'FilterRelationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewEdemokraciaAdminAdminEdemokraciaAdminDashboardFavoriteDebatesTableAction-filter',
                    filterOptions,
                    filters,
                  );
                }}
                disabled={isLoading}
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
      {props.validation.has('favoriteDebates') && (
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
          <Typography>{props.validation.get('favoriteDebates')}</Typography>
        </Box>
      )}
    </>
  );
});
