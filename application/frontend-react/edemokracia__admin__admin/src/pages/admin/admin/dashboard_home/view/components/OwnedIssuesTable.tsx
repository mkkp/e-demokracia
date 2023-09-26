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
  AdminVoteEntry,
  AdminVoteEntryQueryCustomizer,
  AdminVoteEntryStored,
} from '~/generated/data-api';
import { adminDashboardServiceForClassImpl, adminIssueServiceForClassImpl } from '~/generated/data-axios';
import {
  usePageRefreshDashboardHomeAction,
  useRowDeleteIssuesOwnedAction,
  useRowViewIssuesOwnedAction,
  useTableActionIssuesOwnedAction,
  useTableRefreshRelationIssuesOwnedAction,
  useAdminIssueAddToFavoritesAction,
  useAdminIssueCreateCommentAction,
  useAdminIssueCreateDebateAction,
  useAdminIssueRemoveFromFavoritesAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_ADMIN_DASHBOARD_HOME_VIEW_OWNED_ISSUES = 'AdminAdminDashboardHomeViewOwnedIssues';

export interface OwnedIssuesTableProps {
  ownerData: JudoIdentifiable<AdminDashboard>;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminDashboardStored, value: any) => void;
  refreshCounter: number;
  validation: Map<keyof AdminDashboard, string>;
}

export const OwnedIssuesTable = forwardRef<RefreshableTable, OwnedIssuesTableProps>((props, ref) => {
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
  const [data, setData] = useState<GridRowModel<AdminIssueStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'countyRepresentation', sort: null }]);
  const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssues-${ownerData.__signedIdentifier}-filterModel`;
  const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssues-${ownerData.__signedIdentifier}-filters`;
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [lastItem, setLastItem] = useState<AdminIssueStored>();
  const [firstItem, setFirstItem] = useState<AdminIssueStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [queryCustomizer, setQueryCustomizer] = useState<AdminIssueQueryCustomizer>({
    _mask:
      '{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,created,numberOfDebates,status,isFavorite,isNotFavorite}',
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

  const issuesOwnedSortModel: GridSortModel = [{ field: 'countyRepresentation', sort: null }];

  const issuesOwnedColumns: GridColDef<AdminIssueStored>[] = [
    {
      ...baseColumnConfig,
      field: 'scope',
      headerName: t('admin.DashboardView.issuesOwned.scope', { defaultValue: 'Scope' }) as string,
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
      field: 'countyRepresentation',
      headerName: t('admin.DashboardView.issuesOwned.countyRepresentation', {
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
      headerName: t('admin.DashboardView.issuesOwned.cityRepresentation', {
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
      headerName: t('admin.DashboardView.issuesOwned.districtRepresentation', {
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
      headerName: t('admin.DashboardView.issuesOwned.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('admin.DashboardView.issuesOwned.created', { defaultValue: 'Created' }) as string,
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
      headerName: t('admin.DashboardView.issuesOwned.numberOfDebates', { defaultValue: 'NumberOfDebates' }) as string,
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
      field: 'status',
      headerName: t('admin.DashboardView.issuesOwned.status', { defaultValue: 'Status' }) as string,
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
  ];

  const issuesOwnedRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesScopeFilter',
      attributeName: 'scope',
      label: t('admin.DashboardView.issuesOwned.scope', { defaultValue: 'Scope' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesCountyRepresentationFilter',
      attributeName: 'countyRepresentation',
      label: t('admin.DashboardView.issuesOwned.countyRepresentation', {
        defaultValue: 'CountyRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesCityRepresentationFilter',
      attributeName: 'cityRepresentation',
      label: t('admin.DashboardView.issuesOwned.cityRepresentation', { defaultValue: 'CityRepresentation' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesDistrictRepresentationFilter',
      attributeName: 'districtRepresentation',
      label: t('admin.DashboardView.issuesOwned.districtRepresentation', {
        defaultValue: 'DistrictRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesTitleFilter',
      attributeName: 'title',
      label: t('admin.DashboardView.issuesOwned.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesCreatedFilter',
      attributeName: 'created',
      label: t('admin.DashboardView.issuesOwned.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesNumberOfDebatesFilter',
      attributeName: 'numberOfDebates',
      label: t('admin.DashboardView.issuesOwned.numberOfDebates', { defaultValue: 'NumberOfDebates' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesStatusFilter',
      attributeName: 'status',
      label: t('admin.DashboardView.issuesOwned.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED'],
    },
  ];

  const issuesOwnedInitialQueryCustomizer: AdminIssueQueryCustomizer = {
    _mask:
      '{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,created,numberOfDebates,status,isFavorite,isNotFavorite}',
    _orderBy: issuesOwnedSortModel.length
      ? [
          {
            attribute: issuesOwnedSortModel[0].field,
            descending: issuesOwnedSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageRefreshDashboardHomeAction = usePageRefreshDashboardHomeAction();
  const rowDeleteIssuesOwnedAction = useRowDeleteIssuesOwnedAction();
  const rowViewIssuesOwnedAction = useRowViewIssuesOwnedAction();
  const tableActionIssuesOwnedAction = useTableActionIssuesOwnedAction(
    setFilters,
    setPage,
    setQueryCustomizer,
    openFilterDialog,
    10,
  );
  const tableRefreshRelationIssuesOwnedAction = useTableRefreshRelationIssuesOwnedAction();
  const adminIssueAddToFavoritesAction = useAdminIssueAddToFavoritesAction();
  const adminIssueCreateCommentAction = useAdminIssueCreateCommentAction();
  const adminIssueCreateDebateAction = useAdminIssueCreateDebateAction();
  const adminIssueRemoveFromFavoritesAction = useAdminIssueRemoveFromFavoritesAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesScopeFilter',
      attributeName: 'scope',
      label: t('admin.DashboardView.issuesOwned.scope', { defaultValue: 'Scope' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesCountyRepresentationFilter',
      attributeName: 'countyRepresentation',
      label: t('admin.DashboardView.issuesOwned.countyRepresentation', {
        defaultValue: 'CountyRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesCityRepresentationFilter',
      attributeName: 'cityRepresentation',
      label: t('admin.DashboardView.issuesOwned.cityRepresentation', { defaultValue: 'CityRepresentation' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesDistrictRepresentationFilter',
      attributeName: 'districtRepresentation',
      label: t('admin.DashboardView.issuesOwned.districtRepresentation', {
        defaultValue: 'DistrictRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesTitleFilter',
      attributeName: 'title',
      label: t('admin.DashboardView.issuesOwned.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesCreatedFilter',
      attributeName: 'created',
      label: t('admin.DashboardView.issuesOwned.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesNumberOfDebatesFilter',
      attributeName: 'numberOfDebates',
      label: t('admin.DashboardView.issuesOwned.numberOfDebates', { defaultValue: 'NumberOfDebates' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesStatusFilter',
      attributeName: 'status',
      label: t('admin.DashboardView.issuesOwned.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED'],
    },
  ];

  const rowActions: TableRowAction<AdminIssueStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewEdemokraciaAdminAdminEdemokraciaAdminDashboardIssuesOwnedRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminIssueStored) =>
        rowDeleteIssuesOwnedAction(ownerData, row, () => {
          fetchOwnerData();
        }),
      disabled: (row: AdminIssueStored) => !row.__deleteable || isLoading,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewEdemokraciaAdminAdminEdemokraciaAdminIssueCreateDebateButtonCallOperation',
      label: t('admin.DashboardView.favoriteIssues.createDebate.ButtonCallOperation', {
        defaultValue: 'Create debate',
      }) as string,
      icon: <MdiIcon path="wechat" />,
      action: async (row: AdminIssueStored) =>
        adminIssueCreateDebateAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewEdemokraciaAdminAdminEdemokraciaAdminIssueAddToFavoritesButtonCallOperation',
      label: t('admin.DashboardView.favoriteIssues.addToFavorites.ButtonCallOperation', {
        defaultValue: 'Add to favorites',
      }) as string,
      icon: <MdiIcon path="star-plus" />,
      action: async (row: AdminIssueStored) =>
        adminIssueAddToFavoritesAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewEdemokraciaAdminAdminEdemokraciaAdminIssueRemoveFromFavoritesButtonCallOperation',
      label: t('admin.DashboardView.favoriteIssues.removeFromFavorites.ButtonCallOperation', {
        defaultValue: 'Remove from favorites',
      }) as string,
      icon: <MdiIcon path="star-minus" />,
      action: async (row: AdminIssueStored) =>
        adminIssueRemoveFromFavoritesAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewEdemokraciaAdminAdminEdemokraciaAdminIssueCreateCommentButtonCallOperation',
      label: t('admin.DashboardView.favoriteIssues.createComment.ButtonCallOperation', {
        defaultValue: 'Add comment',
      }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      action: async (row: AdminIssueStored) =>
        adminIssueCreateCommentAction(row, () => {
          fetchOwnerData();
        }),
    },
  ];

  const bulkDeleteSelected = useCallback(() => {
    openCRUDDialog<AdminIssueStored>({
      dialogTitle: t('judo.dialogs.crud-bulk.delete.title', { defaultValue: 'Delete selected items' }),
      itemTitleFn: (item) => item.countyRepresentation!,
      selectedItems: selectedRows.current,
      action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
        await rowDeleteIssuesOwnedAction(ownerData, item, successHandler, errorHandler, true);
      },
      onClose: (needsRefresh) => {
        if (needsRefresh) {
          fetchData();
          setSelectionModel([]); // not resetting on fetchData because refreshes would always remove selections...
        }
      },
    });
  }, []);
  const isBulkDeleteAvailable: () => boolean = useCallback(() => {
    // every row has the same `__deleteable` flag
    return !!selectionModel.length && true && !false && !!data[0]?.__deleteable;
  }, [ownerData, data, selectionModel]);

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: AdminIssueQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of issuesOwnedColumns.map((c) => c.field)) {
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
    if (ownerData && ownerData.__signedIdentifier) {
      setIsLoading(true);

      try {
        const res = await adminDashboardServiceForClassImpl.getIssuesOwned(
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
            props.validation.has('issuesOwned') ? `2px solid ${theme.palette.error.main}` : undefined,
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
          ...issuesOwnedColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminDashboardIssuesOwned',
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
          rowViewIssuesOwnedAction(ownerData, params.row, () => fetchOwnerData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterRelationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewEdemokraciaAdminAdminEdemokraciaAdminDashboardIssuesOwnedTableAction"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  tableActionIssuesOwnedAction(
                    'FilterRelationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeViewEdemokraciaAdminAdminEdemokraciaAdminDashboardIssuesOwnedTableAction-filter',
                    filterOptions,
                    filters,
                  );
                }}
                disabled={isLoading}
              >
                {t('judo.pages.table.set-filters', { defaultValue: 'Set filters' }) +
                  (filters.length !== 0 ? ' (' + filters.length + ')' : '')}
              </Button>
              {isBulkDeleteAvailable() ? (
                <Button
                  disabled={isLoading}
                  variant="text"
                  startIcon={<MdiIcon path="delete-forever" />}
                  onClick={bulkDeleteSelected}
                >
                  {t('judo.pages.table.delete.selected', { defaultValue: 'Delete' })}
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
      {props.validation.has('issuesOwned') && (
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
          <Typography>{props.validation.get('issuesOwned')}</Typography>
        </Box>
      )}
    </>
  );
});
