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
import { serviceDashboardServiceForClassImpl, serviceVoteDefinitionServiceForClassImpl } from '~/generated/data-axios';
import {
  useRowViewFavoriteVoteDefinitionsAction,
  useTableActionFavoriteVoteDefinitionsAction,
  useTableRefreshRelationFavoriteVoteDefinitionsAction,
  usePageRefreshDashboardHomeAction,
  useServiceVoteDefinitionVoteRatingAction,
  useServiceVoteDefinitionVoteSelectAnswerAction,
  useServiceVoteDefinitionVoteYesNoAction,
  useServiceVoteDefinitionVoteYesNoAbstainAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const SERVICE_USER_DASHBOARD_HOME_DASHBOARD_FAVORITE_VOTE_DEFINITIONS =
  'ServiceUserDashboardHomeDashboardFavoriteVoteDefinitions';

export interface FavoriteVoteDefinitionsTableProps {
  ownerData: JudoIdentifiable<ServiceDashboard>;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof ServiceDashboardStored, value: any) => void;
  refreshCounter: number;
  validation: Map<keyof ServiceDashboard, string>;
}

export const FavoriteVoteDefinitionsTable = forwardRef<RefreshableTable, FavoriteVoteDefinitionsTableProps>(
  (props, ref) => {
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
    const [data, setData] = useState<GridRowModel<ServiceVoteDefinitionStored>[]>([]);
    const [rowCount, setRowCount] = useState<number>(0);
    const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'countyRepresentation', sort: null }]);
    const filterModelKey = `TableedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitions-${ownerData.__signedIdentifier}-filterModel`;
    const filtersKey = `TableedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitions-${ownerData.__signedIdentifier}-filters`;
    const [filterModel, setFilterModel] = useState<GridFilterModel>(
      getItemParsedWithDefault(filterModelKey, { items: [] }),
    );
    const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
    const [lastItem, setLastItem] = useState<ServiceVoteDefinitionStored>();
    const [firstItem, setFirstItem] = useState<ServiceVoteDefinitionStored>();
    const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
    const [page, setPage] = useState<number>(0);
    const [queryCustomizer, setQueryCustomizer] = useState<ServiceVoteDefinitionQueryCustomizer>({
      _mask:
        '{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,voteType,created,closeAt,numberOfVotes,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType}',
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
    const selectedRows = useRef<ServiceVoteDefinitionStored[]>([]);

    useEffect(() => {
      selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
    }, [selectionModel]);

    const favoriteVoteDefinitionsSortModel: GridSortModel = [{ field: 'countyRepresentation', sort: null }];

    const favoriteVoteDefinitionsColumns: GridColDef<ServiceVoteDefinitionStored>[] = [
      {
        ...baseColumnConfig,
        field: 'scope',
        headerName: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.scope', {
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
        headerName: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.countyRepresentation', {
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
        headerName: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.cityRepresentation', {
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
        headerName: t(
          'edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.districtRepresentation',
          { defaultValue: 'DistrictRepresentation' },
        ) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'title',
        headerName: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.title', {
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
        headerName: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.voteType', {
          defaultValue: 'VoteType',
        }) as string,
        headerClassName: 'data-grid-column-header',

        width: 170,
        type: 'singleSelect',
        filterable: false && true,
        sortable: false,
        valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
          if (value !== undefined && value !== null) {
            return t(`enumerations.EdemokraciaVoteType.${value}`, { defaultValue: value });
          }
        },
        description: t('judo.pages.table.column.not-sortable', {
          defaultValue: 'This column is not sortable.',
        }) as string,
      },
      {
        ...baseColumnConfig,
        field: 'created',
        headerName: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.created', {
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
        headerName: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.closeAt', {
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
        field: 'numberOfVotes',
        headerName: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.numberOfVotes', {
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
        field: 'status',
        headerName: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.status', {
          defaultValue: 'Status',
        }) as string,
        headerClassName: 'data-grid-column-header',

        width: 170,
        type: 'singleSelect',
        filterable: false && true,
        sortable: false,
        valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
          if (value !== undefined && value !== null) {
            return t(`enumerations.EdemokraciaVoteStatus.${value}`, { defaultValue: value });
          }
        },
        description: t('judo.pages.table.column.not-sortable', {
          defaultValue: 'This column is not sortable.',
        }) as string,
      },
    ];

    const favoriteVoteDefinitionsRangeFilterOptions: FilterOption[] = [
      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsScopeFilter',
        attributeName: 'scope',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.scope', {
          defaultValue: 'Scope',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsCountyRepresentationFilter',
        attributeName: 'countyRepresentation',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.countyRepresentation', {
          defaultValue: 'CountyRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsCityRepresentationFilter',
        attributeName: 'cityRepresentation',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.cityRepresentation', {
          defaultValue: 'CityRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsDistrictRepresentationFilter',
        attributeName: 'districtRepresentation',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.districtRepresentation', {
          defaultValue: 'DistrictRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsTitleFilter',
        attributeName: 'title',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.title', {
          defaultValue: 'Title',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsVoteTypeFilter',
        attributeName: 'voteType',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.voteType', {
          defaultValue: 'VoteType',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['YES_NO', 'YES_NO_ABSTAIN', 'SELECT_ANSWER', 'RATE', 'NO_VOTE'],
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsCreatedFilter',
        attributeName: 'created',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.created', {
          defaultValue: 'Created',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsCloseAtFilter',
        attributeName: 'closeAt',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.closeAt', {
          defaultValue: 'CloseAt',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsNumberOfVotesFilter',
        attributeName: 'numberOfVotes',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.numberOfVotes', {
          defaultValue: 'NumberOfVotes',
        }) as string,
        filterType: FilterType.numeric,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsStatusFilter',
        attributeName: 'status',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.status', {
          defaultValue: 'Status',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
      },
    ];

    const favoriteVoteDefinitionsInitialQueryCustomizer: ServiceVoteDefinitionQueryCustomizer = {
      _mask:
        '{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,voteType,created,closeAt,numberOfVotes,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType}',
      _orderBy: favoriteVoteDefinitionsSortModel.length
        ? [
            {
              attribute: favoriteVoteDefinitionsSortModel[0].field,
              descending: favoriteVoteDefinitionsSortModel[0].sort === 'desc',
            },
          ]
        : [],
    };

    const rowViewFavoriteVoteDefinitionsAction = useRowViewFavoriteVoteDefinitionsAction();
    const tableActionFavoriteVoteDefinitionsAction = useTableActionFavoriteVoteDefinitionsAction(
      setFilters,
      setPage,
      setQueryCustomizer,
      openFilterDialog,
      10,
    );
    const tableRefreshRelationFavoriteVoteDefinitionsAction = useTableRefreshRelationFavoriteVoteDefinitionsAction();
    const pageRefreshDashboardHomeAction = usePageRefreshDashboardHomeAction();
    const serviceVoteDefinitionVoteRatingAction = useServiceVoteDefinitionVoteRatingAction();
    const serviceVoteDefinitionVoteSelectAnswerAction = useServiceVoteDefinitionVoteSelectAnswerAction();
    const serviceVoteDefinitionVoteYesNoAction = useServiceVoteDefinitionVoteYesNoAction();
    const serviceVoteDefinitionVoteYesNoAbstainAction = useServiceVoteDefinitionVoteYesNoAbstainAction();

    const filterOptions: FilterOption[] = [
      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsScopeFilter',
        attributeName: 'scope',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.scope', {
          defaultValue: 'Scope',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsCountyRepresentationFilter',
        attributeName: 'countyRepresentation',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.countyRepresentation', {
          defaultValue: 'CountyRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsCityRepresentationFilter',
        attributeName: 'cityRepresentation',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.cityRepresentation', {
          defaultValue: 'CityRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsDistrictRepresentationFilter',
        attributeName: 'districtRepresentation',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.districtRepresentation', {
          defaultValue: 'DistrictRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsTitleFilter',
        attributeName: 'title',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.title', {
          defaultValue: 'Title',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsVoteTypeFilter',
        attributeName: 'voteType',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.voteType', {
          defaultValue: 'VoteType',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['YES_NO', 'YES_NO_ABSTAIN', 'SELECT_ANSWER', 'RATE', 'NO_VOTE'],
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsCreatedFilter',
        attributeName: 'created',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.created', {
          defaultValue: 'Created',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsCloseAtFilter',
        attributeName: 'closeAt',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.closeAt', {
          defaultValue: 'CloseAt',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsNumberOfVotesFilter',
        attributeName: 'numberOfVotes',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.numberOfVotes', {
          defaultValue: 'NumberOfVotes',
        }) as string,
        filterType: FilterType.numeric,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitionsStatusFilter',
        attributeName: 'status',
        label: t('edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.status', {
          defaultValue: 'Status',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
      },
    ];

    const rowActions: TableRowAction<ServiceVoteDefinitionStored>[] = [
      {
        id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardEdemokraciaServiceUserEdemokraciaServiceVoteDefinitionVoteYesNoButtonCallOperation',
        label: t(
          'edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.voteYesNo.ButtonCallOperation',
          { defaultValue: 'Take a vote' },
        ) as string,
        icon: <MdiIcon path="vote" />,
        action: async (row: ServiceVoteDefinitionStored) =>
          serviceVoteDefinitionVoteYesNoAction(row, () => {
            fetchOwnerData();
          }),
      },
      {
        id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardEdemokraciaServiceUserEdemokraciaServiceVoteDefinitionVoteYesNoAbstainButtonCallOperation',
        label: t(
          'edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.voteYesNoAbstain.ButtonCallOperation',
          { defaultValue: 'Take a vote' },
        ) as string,
        icon: <MdiIcon path="vote" />,
        action: async (row: ServiceVoteDefinitionStored) =>
          serviceVoteDefinitionVoteYesNoAbstainAction(row, () => {
            fetchOwnerData();
          }),
      },
      {
        id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardEdemokraciaServiceUserEdemokraciaServiceVoteDefinitionVoteSelectAnswerButtonCallOperation',
        label: t(
          'edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.voteSelectAnswer.ButtonCallOperation',
          { defaultValue: 'Take a vote' },
        ) as string,
        icon: <MdiIcon path="vote" />,
        action: async (row: ServiceVoteDefinitionStored) =>
          serviceVoteDefinitionVoteSelectAnswerAction(row, () => {
            fetchOwnerData();
          }),
      },
      {
        id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardEdemokraciaServiceUserEdemokraciaServiceVoteDefinitionVoteRatingButtonCallOperation',
        label: t(
          'edemokracia.service.User.dashboardHome.Dashboard.favoriteVoteDefinitions.voteRating.ButtonCallOperation',
          { defaultValue: 'Take a vote' },
        ) as string,
        icon: <MdiIcon path="vote" />,
        action: async (row: ServiceVoteDefinitionStored) =>
          serviceVoteDefinitionVoteRatingAction(row, () => {
            fetchOwnerData();
          }),
      },
    ];

    const handleFiltersChange = (newFilters: Filter[]) => {
      setPage(0);
      setFilters(newFilters);
      setItemStringified(filtersKey, newFilters);

      setQueryCustomizer((prevQueryCustomizer: ServiceVoteDefinitionQueryCustomizer) => {
        // remove previous filter values, so that we can always start with a clean slate
        for (const name of favoriteVoteDefinitionsColumns.map((c) => c.field)) {
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

    async function fetchData() {
      if (ownerData && ownerData.__signedIdentifier) {
        setIsLoading(true);

        try {
          const res = await serviceDashboardServiceForClassImpl.getFavoriteVoteDefinitions(
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
              props.validation.has('favoriteVoteDefinitions') ? `2px solid ${theme.palette.error.main}` : undefined,
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
            ...favoriteVoteDefinitionsColumns,
            ...columnsActionCalculator(
              'RelationTypeedemokraciaServiceUserEdemokraciaServiceDashboardFavoriteVoteDefinitions',
              rowActions,
              t,
              { shownActions: 2 },
            ),
          ]}
          disableRowSelectionOnClick
          keepNonExistentRowsSelected
          onRowClick={(params: GridRowParams<ServiceVoteDefinitionStored>) =>
            rowViewFavoriteVoteDefinitionsAction(ownerData, params.row, () => fetchOwnerData())
          }
          sortModel={sortModel}
          onSortModelChange={handleSortModelChange}
          components={{
            Toolbar: () => (
              <GridToolbarContainer>
                <Button
                  id="FilterRelationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardEdemokraciaServiceUserEdemokraciaServiceDashboardFavoriteVoteDefinitionsTableAction"
                  startIcon={<MdiIcon path="filter" />}
                  variant="text"
                  onClick={() => {
                    tableActionFavoriteVoteDefinitionsAction(
                      'FilterRelationActionedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeDashboardEdemokraciaServiceUserEdemokraciaServiceDashboardFavoriteVoteDefinitionsTableAction-filter',
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
        {props.validation.has('favoriteVoteDefinitions') && (
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
            <Typography>{props.validation.get('favoriteVoteDefinitions')}</Typography>
          </Box>
        )}
      </>
    );
  },
);
