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
  ServiceDashboard,
  ServiceDashboardQueryCustomizer,
  ServiceDashboardStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  ServiceVoteEntry,
  ServiceVoteEntryQueryCustomizer,
  ServiceVoteEntryStored,
} from '~/generated/data-api';
import { serviceDashboardServiceForClassImpl, serviceIssueServiceForClassImpl } from '~/generated/data-axios';
import {
  useRowDeleteIssuesOwnedAction,
  useRowViewIssuesOwnedAction,
  useTableActionIssuesOwnedAction,
  useTableRefreshRelationIssuesOwnedAction,
  useServiceIssueActivateAction,
  useServiceIssueAddToFavoritesAction,
  useServiceIssueCloseDebateAction,
  useServiceIssueCloseVoteAction,
  useServiceIssueCreateCommentAction,
  useServiceIssueCreateConArgumentAction,
  useServiceIssueCreateProArgumentAction,
  useServiceIssueDeleteOrArchiveAction,
  useServiceIssueRemoveFromFavoritesAction,
  usePageRefreshDashboardHomeAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const SERVICE_USER_DASHBOARD_HOME_VIEW_OWNED_ISSUES = 'ServiceUserDashboardHomeViewOwnedIssues';

export interface OwnedIssuesTableProps {
  ownerData: JudoIdentifiable<ServiceDashboard>;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof ServiceDashboardStored, value: any) => void;
  refreshCounter: number;
  validation: Map<keyof ServiceDashboard, string>;
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
  const [data, setData] = useState<GridRowModel<ServiceIssueStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'countyRepresentation', sort: null }]);
  const filterModelKey = `TableedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssues-${ownerData.__signedIdentifier}-filterModel`;
  const filtersKey = `TableedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssues-${ownerData.__signedIdentifier}-filters`;
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
      '{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,created,status,isFavorite,isNotFavorite,isIssueActive,isIssueNotActive,isVoteClosable,isVoteNotClosable,isIssueDraft,isIssueNotDraft,isIssueDeletable,isIssueNotDeletable}',
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

  const issuesOwnedSortModel: GridSortModel = [{ field: 'countyRepresentation', sort: null }];

  const issuesOwnedColumns: GridColDef<ServiceIssueStored>[] = [
    {
      ...baseColumnConfig,
      field: 'scope',
      headerName: t('service.DashboardView.issuesOwned.scope', { defaultValue: 'Scope' }) as string,
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
      headerName: t('service.DashboardView.issuesOwned.countyRepresentation', {
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
      headerName: t('service.DashboardView.issuesOwned.cityRepresentation', {
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
      headerName: t('service.DashboardView.issuesOwned.districtRepresentation', {
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
      headerName: t('service.DashboardView.issuesOwned.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.DashboardView.issuesOwned.created', { defaultValue: 'Created' }) as string,
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
      headerName: t('service.DashboardView.issuesOwned.status', { defaultValue: 'Status' }) as string,
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
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesScopeFilter',
      attributeName: 'scope',
      label: t('service.DashboardView.issuesOwned.scope', { defaultValue: 'Scope' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesCountyRepresentationFilter',
      attributeName: 'countyRepresentation',
      label: t('service.DashboardView.issuesOwned.countyRepresentation', {
        defaultValue: 'CountyRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesCityRepresentationFilter',
      attributeName: 'cityRepresentation',
      label: t('service.DashboardView.issuesOwned.cityRepresentation', {
        defaultValue: 'CityRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesDistrictRepresentationFilter',
      attributeName: 'districtRepresentation',
      label: t('service.DashboardView.issuesOwned.districtRepresentation', {
        defaultValue: 'DistrictRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesTitleFilter',
      attributeName: 'title',
      label: t('service.DashboardView.issuesOwned.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesCreatedFilter',
      attributeName: 'created',
      label: t('service.DashboardView.issuesOwned.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesStatusFilter',
      attributeName: 'status',
      label: t('service.DashboardView.issuesOwned.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED', 'VOTING'],
    },
  ];

  const issuesOwnedInitialQueryCustomizer: ServiceIssueQueryCustomizer = {
    _mask:
      '{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,created,status,isFavorite,isNotFavorite,isIssueActive,isIssueNotActive,isVoteClosable,isVoteNotClosable,isIssueDraft,isIssueNotDraft,isIssueDeletable,isIssueNotDeletable}',
    _orderBy: issuesOwnedSortModel.length
      ? [
          {
            attribute: issuesOwnedSortModel[0].field,
            descending: issuesOwnedSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

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
  const serviceIssueActivateAction = useServiceIssueActivateAction();
  const serviceIssueAddToFavoritesAction = useServiceIssueAddToFavoritesAction();
  const serviceIssueCloseDebateAction = useServiceIssueCloseDebateAction();
  const serviceIssueCloseVoteAction = useServiceIssueCloseVoteAction();
  const serviceIssueCreateCommentAction = useServiceIssueCreateCommentAction();
  const serviceIssueCreateConArgumentAction = useServiceIssueCreateConArgumentAction();
  const serviceIssueCreateProArgumentAction = useServiceIssueCreateProArgumentAction();
  const serviceIssueDeleteOrArchiveAction = useServiceIssueDeleteOrArchiveAction();
  const serviceIssueRemoveFromFavoritesAction = useServiceIssueRemoveFromFavoritesAction();
  const pageRefreshDashboardHomeAction = usePageRefreshDashboardHomeAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesScopeFilter',
      attributeName: 'scope',
      label: t('service.DashboardView.issuesOwned.scope', { defaultValue: 'Scope' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesCountyRepresentationFilter',
      attributeName: 'countyRepresentation',
      label: t('service.DashboardView.issuesOwned.countyRepresentation', {
        defaultValue: 'CountyRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesCityRepresentationFilter',
      attributeName: 'cityRepresentation',
      label: t('service.DashboardView.issuesOwned.cityRepresentation', {
        defaultValue: 'CityRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesDistrictRepresentationFilter',
      attributeName: 'districtRepresentation',
      label: t('service.DashboardView.issuesOwned.districtRepresentation', {
        defaultValue: 'DistrictRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesTitleFilter',
      attributeName: 'title',
      label: t('service.DashboardView.issuesOwned.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesCreatedFilter',
      attributeName: 'created',
      label: t('service.DashboardView.issuesOwned.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssuesStatusFilter',
      attributeName: 'status',
      label: t('service.DashboardView.issuesOwned.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED', 'VOTING'],
    },
  ];

  const rowActions: TableRowAction<ServiceIssueStored>[] = [
    {
      id: 'DeleteActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewEdemokraciaServiceUserEdemokraciaServiceDashboardIssuesOwnedRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: ServiceIssueStored) =>
        rowDeleteIssuesOwnedAction(ownerData, row, () => {
          fetchOwnerData();
        }),
      disabled: (row: ServiceIssueStored) => !row.__deleteable || isLoading,
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewEdemokraciaServiceUserEdemokraciaServiceIssueAddToFavoritesButtonCallOperation',
      label: t('service.DashboardView.favoriteIssues.addToFavorites.ButtonCallOperation', {
        defaultValue: 'Add to favorites',
      }) as string,
      icon: <MdiIcon path="star-plus" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueAddToFavoritesAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewEdemokraciaServiceUserEdemokraciaServiceIssueRemoveFromFavoritesButtonCallOperation',
      label: t('service.DashboardView.favoriteIssues.removeFromFavorites.ButtonCallOperation', {
        defaultValue: 'Remove from favorites',
      }) as string,
      icon: <MdiIcon path="star-minus" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueRemoveFromFavoritesAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewEdemokraciaServiceUserEdemokraciaServiceIssueCloseDebateButtonCallOperation',
      label: t('service.DashboardView.favoriteIssues.closeDebate.ButtonCallOperation', {
        defaultValue: 'Close debate and start vote',
      }) as string,
      icon: <MdiIcon path="vote" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueCloseDebateAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewEdemokraciaServiceUserEdemokraciaServiceIssueCloseVoteButtonCallOperation',
      label: t('service.DashboardView.favoriteIssues.closeVote.ButtonCallOperation', {
        defaultValue: 'Close Vote',
      }) as string,
      icon: <MdiIcon path="lock-check" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueCloseVoteAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewEdemokraciaServiceUserEdemokraciaServiceIssueActivateButtonCallOperation',
      label: t('service.DashboardView.favoriteIssues.activate.ButtonCallOperation', {
        defaultValue: 'Activate',
      }) as string,
      icon: <MdiIcon path="lock-open" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueActivateAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewEdemokraciaServiceUserEdemokraciaServiceIssueDeleteOrArchiveButtonCallOperation',
      label: t('service.DashboardView.favoriteIssues.deleteOrArchive.ButtonCallOperation', {
        defaultValue: 'Delete',
      }) as string,
      icon: <MdiIcon path="delete" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueDeleteOrArchiveAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewEdemokraciaServiceUserEdemokraciaServiceIssueCreateConArgumentButtonCallOperation',
      label: t('service.DashboardView.favoriteIssues.createConArgument.ButtonCallOperation', {
        defaultValue: 'Add Con Argument',
      }) as string,
      icon: <MdiIcon path="chat-minus" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueCreateConArgumentAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewEdemokraciaServiceUserEdemokraciaServiceIssueCreateProArgumentButtonCallOperation',
      label: t('service.DashboardView.favoriteIssues.createProArgument.ButtonCallOperation', {
        defaultValue: 'Add Pro Argument',
      }) as string,
      icon: <MdiIcon path="chat-plus" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueCreateProArgumentAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewEdemokraciaServiceUserEdemokraciaServiceIssueCreateCommentButtonCallOperation',
      label: t('service.DashboardView.favoriteIssues.createComment.ButtonCallOperation', {
        defaultValue: 'Add comment',
      }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueCreateCommentAction(row, () => {
          fetchOwnerData();
        }),
    },
  ];

  const bulkDeleteSelected = useCallback(() => {
    openCRUDDialog<ServiceIssueStored>({
      dialogTitle: t('judo.dialogs.crud-bulk.delete.title', { defaultValue: 'Delete selected items' }),
      itemTitleFn: (item) => item.countyRepresentation!,
      selectedItems: selectedRows.current,
      action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
        await rowDeleteIssuesOwnedAction(ownerData, item, successHandler, errorHandler, true);
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

    setQueryCustomizer((prevQueryCustomizer: ServiceIssueQueryCustomizer) => {
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
    if (ownerData && ownerData.__signedIdentifier) {
      setIsLoading(true);

      try {
        const res = await serviceDashboardServiceForClassImpl.getIssuesOwned(
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
            'RelationTypeedemokraciaServiceUserEdemokraciaServiceDashboardIssuesOwned',
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
        onRowClick={(params: GridRowParams<ServiceIssueStored>) =>
          rowViewIssuesOwnedAction(ownerData, params.row, () => fetchOwnerData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterRelationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewEdemokraciaServiceUserEdemokraciaServiceDashboardIssuesOwnedTableAction"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  tableActionIssuesOwnedAction(
                    'FilterRelationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewEdemokraciaServiceUserEdemokraciaServiceDashboardIssuesOwnedTableAction-filter',
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
                  id="RelationTypeedemokraciaServiceUserEdemokraciaServiceDashboardIssuesOwned-bulk-delete"
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
