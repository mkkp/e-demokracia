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
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionQueryCustomizer,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/generated/data-api';
import {
  serviceUserVoteDefinitionServiceForClassImpl,
  serviceVoteDefinitionServiceForClassImpl,
} from '~/generated/data-axios';
import {
  usePageRefreshUserVoteDefinitionsAction,
  useRowViewActiveVoteDefinitionsInActivityCitiesAction,
  useTableActionActiveVoteDefinitionsInActivityCitiesAction,
  useTableRefreshRelationActiveVoteDefinitionsInActivityCitiesAction,
  useServiceVoteDefinitionVoteRatingAction,
  useServiceVoteDefinitionVoteSelectAnswerAction,
  useServiceVoteDefinitionVoteYesNoAction,
  useServiceVoteDefinitionVoteYesNoAbstainAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const SERVICE_USER_USER_VOTE_DEFINITIONS_VIEW_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_CITIES =
  'ServiceUserUserVoteDefinitionsViewActiveVoteDefinitionsInActivityCities';

export interface ActiveVoteDefinitionsInActivityCitiesTableProps {
  ownerData: JudoIdentifiable<ServiceUserVoteDefinition>;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof ServiceUserVoteDefinitionStored, value: any) => void;
  refreshCounter: number;
  validation: Map<keyof ServiceUserVoteDefinition, string>;
}

export const ActiveVoteDefinitionsInActivityCitiesTable = forwardRef<
  RefreshableTable,
  ActiveVoteDefinitionsInActivityCitiesTableProps
>((props, ref) => {
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
  const filterModelKey = `TableedemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCities-${ownerData.__signedIdentifier}-filterModel`;
  const filtersKey = `TableedemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCities-${ownerData.__signedIdentifier}-filters`;
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
      '{countyRepresentation,cityRepresentation,title,voteType,numberOfVotes,created,closeAt,scope,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType}',
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

  const activeVoteDefinitionsInActivityCitiesSortModel: GridSortModel = [{ field: 'countyRepresentation', sort: null }];

  const activeVoteDefinitionsInActivityCitiesColumns: GridColDef<ServiceVoteDefinitionStored>[] = [
    {
      ...baseColumnConfig,
      field: 'countyRepresentation',
      headerName: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.countyRepresentation', {
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
      headerName: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.cityRepresentation', {
        defaultValue: 'CityRepresentation',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.title', {
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
      headerName: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.voteType', {
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
      field: 'numberOfVotes',
      headerName: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.numberOfVotes', {
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
      headerName: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.created', {
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
      headerName: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.closeAt', {
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
      field: 'scope',
      headerName: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.scope', {
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
      field: 'status',
      headerName: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.status', {
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

  const activeVoteDefinitionsInActivityCitiesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesCountyRepresentationFilter',
      attributeName: 'countyRepresentation',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.countyRepresentation', {
        defaultValue: 'CountyRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesCityRepresentationFilter',
      attributeName: 'cityRepresentation',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.cityRepresentation', {
        defaultValue: 'CityRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesTitleFilter',
      attributeName: 'title',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.title', {
        defaultValue: 'Title',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesVoteTypeFilter',
      attributeName: 'voteType',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.voteType', {
        defaultValue: 'VoteType',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['YES_NO', 'YES_NO_ABSTAIN', 'SELECT_ANSWER', 'RATE', 'NO_VOTE'],
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesNumberOfVotesFilter',
      attributeName: 'numberOfVotes',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.numberOfVotes', {
        defaultValue: 'NumberOfVotes',
      }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesCreatedFilter',
      attributeName: 'created',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.created', {
        defaultValue: 'Created',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesCloseAtFilter',
      attributeName: 'closeAt',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.closeAt', {
        defaultValue: 'CloseAt',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesScopeFilter',
      attributeName: 'scope',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.scope', {
        defaultValue: 'Scope',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesStatusFilter',
      attributeName: 'status',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.status', {
        defaultValue: 'Status',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },
  ];

  const activeVoteDefinitionsInActivityCitiesInitialQueryCustomizer: ServiceVoteDefinitionQueryCustomizer = {
    _mask:
      '{countyRepresentation,cityRepresentation,title,voteType,numberOfVotes,created,closeAt,scope,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType}',
    _orderBy: activeVoteDefinitionsInActivityCitiesSortModel.length
      ? [
          {
            attribute: activeVoteDefinitionsInActivityCitiesSortModel[0].field,
            descending: activeVoteDefinitionsInActivityCitiesSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageRefreshUserVoteDefinitionsAction = usePageRefreshUserVoteDefinitionsAction();
  const rowViewActiveVoteDefinitionsInActivityCitiesAction = useRowViewActiveVoteDefinitionsInActivityCitiesAction();
  const tableActionActiveVoteDefinitionsInActivityCitiesAction =
    useTableActionActiveVoteDefinitionsInActivityCitiesAction(
      setFilters,
      setPage,
      setQueryCustomizer,
      openFilterDialog,
      10,
    );
  const tableRefreshRelationActiveVoteDefinitionsInActivityCitiesAction =
    useTableRefreshRelationActiveVoteDefinitionsInActivityCitiesAction();
  const serviceVoteDefinitionVoteRatingAction = useServiceVoteDefinitionVoteRatingAction();
  const serviceVoteDefinitionVoteSelectAnswerAction = useServiceVoteDefinitionVoteSelectAnswerAction();
  const serviceVoteDefinitionVoteYesNoAction = useServiceVoteDefinitionVoteYesNoAction();
  const serviceVoteDefinitionVoteYesNoAbstainAction = useServiceVoteDefinitionVoteYesNoAbstainAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesCountyRepresentationFilter',
      attributeName: 'countyRepresentation',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.countyRepresentation', {
        defaultValue: 'CountyRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesCityRepresentationFilter',
      attributeName: 'cityRepresentation',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.cityRepresentation', {
        defaultValue: 'CityRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesTitleFilter',
      attributeName: 'title',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.title', {
        defaultValue: 'Title',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesVoteTypeFilter',
      attributeName: 'voteType',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.voteType', {
        defaultValue: 'VoteType',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['YES_NO', 'YES_NO_ABSTAIN', 'SELECT_ANSWER', 'RATE', 'NO_VOTE'],
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesNumberOfVotesFilter',
      attributeName: 'numberOfVotes',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.numberOfVotes', {
        defaultValue: 'NumberOfVotes',
      }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesCreatedFilter',
      attributeName: 'created',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.created', {
        defaultValue: 'Created',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesCloseAtFilter',
      attributeName: 'closeAt',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.closeAt', {
        defaultValue: 'CloseAt',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesScopeFilter',
      attributeName: 'scope',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.scope', {
        defaultValue: 'Scope',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCitiesStatusFilter',
      attributeName: 'status',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInActivityCities.status', {
        defaultValue: 'Status',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },
  ];

  const rowActions: TableRowAction<ServiceVoteDefinitionStored>[] = [
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceVoteDefinitionVoteYesNoButtonCallOperation',
      label: t('service.UserVoteDefinitionView.activeVoteDefinitionsInResidentDistrict.voteYesNo.ButtonCallOperation', {
        defaultValue: 'Take a vote',
      }) as string,
      icon: <MdiIcon path="vote" />,
      action: async (row: ServiceVoteDefinitionStored) =>
        serviceVoteDefinitionVoteYesNoAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceVoteDefinitionVoteYesNoAbstainButtonCallOperation',
      label: t(
        'service.UserVoteDefinitionView.activeVoteDefinitionsInResidentDistrict.voteYesNoAbstain.ButtonCallOperation',
        { defaultValue: 'Take a vote' },
      ) as string,
      icon: <MdiIcon path="vote" />,
      action: async (row: ServiceVoteDefinitionStored) =>
        serviceVoteDefinitionVoteYesNoAbstainAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceVoteDefinitionVoteSelectAnswerButtonCallOperation',
      label: t(
        'service.UserVoteDefinitionView.activeVoteDefinitionsInResidentDistrict.voteSelectAnswer.ButtonCallOperation',
        { defaultValue: 'Take a vote' },
      ) as string,
      icon: <MdiIcon path="vote" />,
      action: async (row: ServiceVoteDefinitionStored) =>
        serviceVoteDefinitionVoteSelectAnswerAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceVoteDefinitionVoteRatingButtonCallOperation',
      label: t(
        'service.UserVoteDefinitionView.activeVoteDefinitionsInResidentDistrict.voteRating.ButtonCallOperation',
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
      for (const name of activeVoteDefinitionsInActivityCitiesColumns.map((c) => c.field)) {
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
        const res = await serviceUserVoteDefinitionServiceForClassImpl.getActiveVoteDefinitionsInActivityCities(
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
            props.validation.has('activeVoteDefinitionsInActivityCities')
              ? `2px solid ${theme.palette.error.main}`
              : undefined,
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
          ...activeVoteDefinitionsInActivityCitiesColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaServiceUserEdemokraciaServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCities',
            rowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        onRowClick={(params: GridRowParams<ServiceVoteDefinitionStored>) =>
          rowViewActiveVoteDefinitionsInActivityCitiesAction(ownerData, params.row, () => fetchOwnerData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterRelationActionedemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesTableAction"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  tableActionActiveVoteDefinitionsInActivityCitiesAction(
                    'FilterRelationActionedemokraciaServiceUserEdemokraciaServiceUserUserVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesTableAction-filter',
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
      {props.validation.has('activeVoteDefinitionsInActivityCities') && (
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
          <Typography>{props.validation.get('activeVoteDefinitionsInActivityCities')}</Typography>
        </Box>
      )}
    </>
  );
});
