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
  useRowDeleteOwnedDebatesAction,
  useRowViewOwnedDebatesAction,
  useTableActionOwnedDebatesAction,
  useTableRefreshRelationOwnedDebatesAction,
  useAdminDebateAddToFavoritesAction,
  useAdminDebateCloseDebateAction,
  useAdminDebateCreateArgumentAction,
  useAdminDebateCreateCommentAction,
  useAdminDebateRemoveFromFavoritesAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_ADMIN_DASHBOARD_HOME_DASHBOARD_OWNED_DEBATES = 'AdminAdminDashboardHomeDashboardOwnedDebates';

export interface OwnedDebatesTableProps {
  ownerData: JudoIdentifiable<AdminDashboard>;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminDashboardStored, value: any) => void;
  refreshCounter: number;
  validation: Map<keyof AdminDashboard, string>;
}

export const OwnedDebatesTable = forwardRef<RefreshableTable, OwnedDebatesTableProps>((props, ref) => {
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
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'countyRepresentation', sort: null }]);
  const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebates-${ownerData.__signedIdentifier}-filterModel`;
  const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebates-${ownerData.__signedIdentifier}-filters`;
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [lastItem, setLastItem] = useState<AdminDebateStored>();
  const [firstItem, setFirstItem] = useState<AdminDebateStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [queryCustomizer, setQueryCustomizer] = useState<AdminDebateQueryCustomizer>({
    _mask:
      '{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,closeAt,status,issueTitle,isNotClosed,isFavorite,isNotFavorite}',
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

  const ownedDebatesSortModel: GridSortModel = [{ field: 'countyRepresentation', sort: null }];

  const ownedDebatesColumns: GridColDef<AdminDebateStored>[] = [
    {
      ...baseColumnConfig,
      field: 'scope',
      headerName: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.scope', {
        defaultValue: 'Scope',
      }) as string,
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
      headerName: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.countyRepresentation', {
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
      headerName: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.cityRepresentation', {
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
      headerName: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.districtRepresentation', {
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
      headerName: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.title', {
        defaultValue: 'Title',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'closeAt',
      headerName: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.closeAt', {
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
      headerName: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.status', {
        defaultValue: 'Status',
      }) as string,
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
      headerName: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.issueTitle', {
        defaultValue: 'IssueTitle',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const ownedDebatesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesScopeFilter',
      attributeName: 'scope',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.scope', {
        defaultValue: 'Scope',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesCountyRepresentationFilter',
      attributeName: 'countyRepresentation',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.countyRepresentation', {
        defaultValue: 'CountyRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesCityRepresentationFilter',
      attributeName: 'cityRepresentation',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.cityRepresentation', {
        defaultValue: 'CityRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesDistrictRepresentationFilter',
      attributeName: 'districtRepresentation',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.districtRepresentation', {
        defaultValue: 'DistrictRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesTitleFilter',
      attributeName: 'title',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.title', {
        defaultValue: 'Title',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesCloseAtFilter',
      attributeName: 'closeAt',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.closeAt', {
        defaultValue: 'CloseAt',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesStatusFilter',
      attributeName: 'status',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.status', {
        defaultValue: 'Status',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesIssueTitleFilter',
      attributeName: 'issueTitle',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.issueTitle', {
        defaultValue: 'IssueTitle',
      }) as string,
      filterType: FilterType.string,
    },
  ];

  const ownedDebatesInitialQueryCustomizer: AdminDebateQueryCustomizer = {
    _mask:
      '{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,closeAt,status,issueTitle,isNotClosed,isFavorite,isNotFavorite}',
    _orderBy: ownedDebatesSortModel.length
      ? [
          {
            attribute: ownedDebatesSortModel[0].field,
            descending: ownedDebatesSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageRefreshDashboardHomeAction = usePageRefreshDashboardHomeAction();
  const rowDeleteOwnedDebatesAction = useRowDeleteOwnedDebatesAction();
  const rowViewOwnedDebatesAction = useRowViewOwnedDebatesAction();
  const tableActionOwnedDebatesAction = useTableActionOwnedDebatesAction(
    setFilters,
    setPage,
    setQueryCustomizer,
    openFilterDialog,
    10,
  );
  const tableRefreshRelationOwnedDebatesAction = useTableRefreshRelationOwnedDebatesAction();
  const adminDebateAddToFavoritesAction = useAdminDebateAddToFavoritesAction();
  const adminDebateCloseDebateAction = useAdminDebateCloseDebateAction();
  const adminDebateCreateArgumentAction = useAdminDebateCreateArgumentAction();
  const adminDebateCreateCommentAction = useAdminDebateCreateCommentAction();
  const adminDebateRemoveFromFavoritesAction = useAdminDebateRemoveFromFavoritesAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesScopeFilter',
      attributeName: 'scope',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.scope', {
        defaultValue: 'Scope',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesCountyRepresentationFilter',
      attributeName: 'countyRepresentation',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.countyRepresentation', {
        defaultValue: 'CountyRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesCityRepresentationFilter',
      attributeName: 'cityRepresentation',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.cityRepresentation', {
        defaultValue: 'CityRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesDistrictRepresentationFilter',
      attributeName: 'districtRepresentation',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.districtRepresentation', {
        defaultValue: 'DistrictRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesTitleFilter',
      attributeName: 'title',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.title', {
        defaultValue: 'Title',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesCloseAtFilter',
      attributeName: 'closeAt',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.closeAt', {
        defaultValue: 'CloseAt',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesStatusFilter',
      attributeName: 'status',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.status', {
        defaultValue: 'Status',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebatesIssueTitleFilter',
      attributeName: 'issueTitle',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.ownedDebates.issueTitle', {
        defaultValue: 'IssueTitle',
      }) as string,
      filterType: FilterType.string,
    },
  ];

  const rowActions: TableRowAction<AdminDebateStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardEdemokraciaAdminAdminEdemokraciaAdminDashboardOwnedDebatesRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminDebateStored) =>
        rowDeleteOwnedDebatesAction(ownerData, row, () => {
          fetchOwnerData();
        }),
      disabled: (row: AdminDebateStored) => !row.__deleteable || isLoading,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardEdemokraciaAdminAdminEdemokraciaAdminDebateCloseDebateButtonCallOperation',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.favoriteDebates.closeDebate.ButtonCallOperation', {
        defaultValue: 'Close debate',
      }) as string,
      icon: <MdiIcon path="wechat" />,
      action: async (row: AdminDebateStored) =>
        adminDebateCloseDebateAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardEdemokraciaAdminAdminEdemokraciaAdminDebateAddToFavoritesButtonCallOperation',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.favoriteDebates.addToFavorites.ButtonCallOperation', {
        defaultValue: 'Add to favorites',
      }) as string,
      icon: <MdiIcon path="star-plus" />,
      action: async (row: AdminDebateStored) =>
        adminDebateAddToFavoritesAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardEdemokraciaAdminAdminEdemokraciaAdminDebateRemoveFromFavoritesButtonCallOperation',
      label: t(
        'edemokracia.admin.Admin.dashboardHome.Dashboard.favoriteDebates.removeFromFavorites.ButtonCallOperation',
        { defaultValue: 'Remove from favorites' },
      ) as string,
      icon: <MdiIcon path="star-minus" />,
      action: async (row: AdminDebateStored) =>
        adminDebateRemoveFromFavoritesAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardEdemokraciaAdminAdminEdemokraciaAdminDebateCreateArgumentButtonCallOperation',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.favoriteDebates.createArgument.ButtonCallOperation', {
        defaultValue: 'Add argument',
      }) as string,
      icon: <MdiIcon path="account-voice" />,
      action: async (row: AdminDebateStored) =>
        adminDebateCreateArgumentAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardEdemokraciaAdminAdminEdemokraciaAdminDebateCreateCommentButtonCallOperation',
      label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.favoriteDebates.createComment.ButtonCallOperation', {
        defaultValue: 'Add comment',
      }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      action: async (row: AdminDebateStored) =>
        adminDebateCreateCommentAction(row, () => {
          fetchOwnerData();
        }),
    },
  ];

  const bulkDeleteSelected = useCallback(() => {
    openCRUDDialog<AdminDebateStored>({
      dialogTitle: t('judo.dialogs.crud-bulk.delete.title', { defaultValue: 'Delete selected items' }),
      itemTitleFn: (item) => item.countyRepresentation!,
      selectedItems: selectedRows.current,
      action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
        await rowDeleteOwnedDebatesAction(ownerData, item, successHandler, errorHandler, true);
      },
      onClose: (needsRefresh) => {
        if (needsRefresh) {
          fetchOwnerData();
          setSelectionModel([]); // not resetting on fetchData because refreshes would always remove selections...
        }
      },
    });
  }, [ownerData]);
  const isBulkDeleteAvailable: () => boolean = useCallback(() => {
    // every row has the same `__deleteable` flag
    return !!selectionModel.length && true && !false && !!data[0]?.__deleteable;
  }, [ownerData, data, selectionModel]);

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: AdminDebateQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of ownedDebatesColumns.map((c) => c.field)) {
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
        const res = await adminDashboardServiceForClassImpl.getOwnedDebates(
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
            props.validation.has('ownedDebates') ? `2px solid ${theme.palette.error.main}` : undefined,
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
          ...ownedDebatesColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminDashboardOwnedDebates',
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
        onRowClick={(params: GridRowParams<AdminDebateStored>) =>
          rowViewOwnedDebatesAction(ownerData, params.row, () => fetchOwnerData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterRelationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardEdemokraciaAdminAdminEdemokraciaAdminDashboardOwnedDebatesTableAction"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  tableActionOwnedDebatesAction(
                    'FilterRelationActionedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardEdemokraciaAdminAdminEdemokraciaAdminDashboardOwnedDebatesTableAction-filter',
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
                  id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminDashboardOwnedDebates-bulk-delete"
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
      {props.validation.has('ownedDebates') && (
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
          <Typography>{props.validation.get('ownedDebates')}</Typography>
        </Box>
      )}
    </>
  );
});
