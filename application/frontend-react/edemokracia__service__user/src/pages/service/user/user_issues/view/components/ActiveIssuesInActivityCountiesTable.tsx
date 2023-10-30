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
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceUserIssuesQueryCustomizer,
  ServiceUserIssuesStored,
} from '~/generated/data-api';
import { serviceUserIssuesServiceForClassImpl, serviceIssueServiceForClassImpl } from '~/generated/data-axios';
import {
  useServiceIssueAddToFavoritesAction,
  useServiceIssueCreateCommentAction,
  useServiceIssueCreateDebateAction,
  useServiceIssueRemoveFromFavoritesAction,
  usePageRefreshUserIssuesAction,
  useRowViewActiveIssuesInActivityCountiesAction,
  useTableActionActiveIssuesInActivityCountiesAction,
  useTableRefreshRelationActiveIssuesInActivityCountiesAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const SERVICE_USER_USER_ISSUES_VIEW_ACTIVE_ISSUES_IN_ACTIVITY_COUNTIES =
  'ServiceUserUserIssuesViewActiveIssuesInActivityCounties';

export interface ActiveIssuesInActivityCountiesTableProps {
  ownerData: JudoIdentifiable<ServiceUserIssues>;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof ServiceUserIssuesStored, value: any) => void;
  refreshCounter: number;
  validation: Map<keyof ServiceUserIssues, string>;
}

export const ActiveIssuesInActivityCountiesTable = forwardRef<
  RefreshableTable,
  ActiveIssuesInActivityCountiesTableProps
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
  const [data, setData] = useState<GridRowModel<ServiceIssueStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'countyRepresentation', sort: null }]);
  const filterModelKey = `TableedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapperActiveIssuesInActivityCounties-${ownerData.__signedIdentifier}-filterModel`;
  const filtersKey = `TableedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapperActiveIssuesInActivityCounties-${ownerData.__signedIdentifier}-filters`;
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [lastItem, setLastItem] = useState<ServiceIssueStored>();
  const [firstItem, setFirstItem] = useState<ServiceIssueStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceIssueQueryCustomizer>({
    _mask: '{countyRepresentation,title,created,numberOfDebates,status,isFavorite,isNotFavorite}',
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

  const activeIssuesInActivityCountiesSortModel: GridSortModel = [{ field: 'countyRepresentation', sort: null }];

  const activeIssuesInActivityCountiesColumns: GridColDef<ServiceIssueStored>[] = [
    {
      ...baseColumnConfig,
      field: 'countyRepresentation',
      headerName: t('service.UserIssuesView.activeIssuesInActivityCounties.countyRepresentation', {
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
      headerName: t('service.UserIssuesView.activeIssuesInActivityCounties.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.UserIssuesView.activeIssuesInActivityCounties.created', {
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
      field: 'numberOfDebates',
      headerName: t('service.UserIssuesView.activeIssuesInActivityCounties.numberOfDebates', {
        defaultValue: 'NumberOfDebates',
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
      headerName: t('service.UserIssuesView.activeIssuesInActivityCounties.status', {
        defaultValue: 'Status',
      }) as string,
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

  const activeIssuesInActivityCountiesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapperActiveIssuesInActivityCountiesCountyRepresentationFilter',
      attributeName: 'countyRepresentation',
      label: t('service.UserIssuesView.activeIssuesInActivityCounties.countyRepresentation', {
        defaultValue: 'CountyRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapperActiveIssuesInActivityCountiesTitleFilter',
      attributeName: 'title',
      label: t('service.UserIssuesView.activeIssuesInActivityCounties.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapperActiveIssuesInActivityCountiesCreatedFilter',
      attributeName: 'created',
      label: t('service.UserIssuesView.activeIssuesInActivityCounties.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapperActiveIssuesInActivityCountiesNumberOfDebatesFilter',
      attributeName: 'numberOfDebates',
      label: t('service.UserIssuesView.activeIssuesInActivityCounties.numberOfDebates', {
        defaultValue: 'NumberOfDebates',
      }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapperActiveIssuesInActivityCountiesStatusFilter',
      attributeName: 'status',
      label: t('service.UserIssuesView.activeIssuesInActivityCounties.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },
  ];

  const activeIssuesInActivityCountiesInitialQueryCustomizer: ServiceIssueQueryCustomizer = {
    _mask: '{countyRepresentation,title,created,numberOfDebates,status,isFavorite,isNotFavorite}',
    _orderBy: activeIssuesInActivityCountiesSortModel.length
      ? [
          {
            attribute: activeIssuesInActivityCountiesSortModel[0].field,
            descending: activeIssuesInActivityCountiesSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const serviceIssueAddToFavoritesAction = useServiceIssueAddToFavoritesAction();
  const serviceIssueCreateCommentAction = useServiceIssueCreateCommentAction();
  const serviceIssueCreateDebateAction = useServiceIssueCreateDebateAction();
  const serviceIssueRemoveFromFavoritesAction = useServiceIssueRemoveFromFavoritesAction();
  const pageRefreshUserIssuesAction = usePageRefreshUserIssuesAction();
  const rowViewActiveIssuesInActivityCountiesAction = useRowViewActiveIssuesInActivityCountiesAction();
  const tableActionActiveIssuesInActivityCountiesAction = useTableActionActiveIssuesInActivityCountiesAction(
    setFilters,
    setPage,
    setQueryCustomizer,
    openFilterDialog,
    10,
  );
  const tableRefreshRelationActiveIssuesInActivityCountiesAction =
    useTableRefreshRelationActiveIssuesInActivityCountiesAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapperActiveIssuesInActivityCountiesCountyRepresentationFilter',
      attributeName: 'countyRepresentation',
      label: t('service.UserIssuesView.activeIssuesInActivityCounties.countyRepresentation', {
        defaultValue: 'CountyRepresentation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapperActiveIssuesInActivityCountiesTitleFilter',
      attributeName: 'title',
      label: t('service.UserIssuesView.activeIssuesInActivityCounties.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapperActiveIssuesInActivityCountiesCreatedFilter',
      attributeName: 'created',
      label: t('service.UserIssuesView.activeIssuesInActivityCounties.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapperActiveIssuesInActivityCountiesNumberOfDebatesFilter',
      attributeName: 'numberOfDebates',
      label: t('service.UserIssuesView.activeIssuesInActivityCounties.numberOfDebates', {
        defaultValue: 'NumberOfDebates',
      }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapperActiveIssuesInActivityCountiesStatusFilter',
      attributeName: 'status',
      label: t('service.UserIssuesView.activeIssuesInActivityCounties.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },
  ];

  const rowActions: TableRowAction<ServiceIssueStored>[] = [
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewEdemokraciaServiceUserEdemokraciaServiceIssueCreateDebateButtonCallOperation',
      label: t('service.UserIssuesView.activeIssuesInResidentDistrict.createDebate.ButtonCallOperation', {
        defaultValue: 'Create debate',
      }) as string,
      icon: <MdiIcon path="wechat" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueCreateDebateAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewEdemokraciaServiceUserEdemokraciaServiceIssueAddToFavoritesButtonCallOperation',
      label: t('service.UserIssuesView.activeIssuesInResidentDistrict.addToFavorites.ButtonCallOperation', {
        defaultValue: 'Add to favorites',
      }) as string,
      icon: <MdiIcon path="star-plus" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueAddToFavoritesAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewEdemokraciaServiceUserEdemokraciaServiceIssueRemoveFromFavoritesButtonCallOperation',
      label: t('service.UserIssuesView.activeIssuesInResidentDistrict.removeFromFavorites.ButtonCallOperation', {
        defaultValue: 'Remove from favorites',
      }) as string,
      icon: <MdiIcon path="star-minus" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueRemoveFromFavoritesAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewEdemokraciaServiceUserEdemokraciaServiceIssueCreateCommentButtonCallOperation',
      label: t('service.UserIssuesView.activeIssuesInResidentDistrict.createComment.ButtonCallOperation', {
        defaultValue: 'Add comment',
      }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueCreateCommentAction(row, () => {
          fetchOwnerData();
        }),
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceIssueQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of activeIssuesInActivityCountiesColumns.map((c) => c.field)) {
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
        const res = await serviceUserIssuesServiceForClassImpl.getActiveIssuesInActivityCounties(
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
            props.validation.has('activeIssuesInActivityCounties')
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
          ...activeIssuesInActivityCountiesColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityCounties',
            rowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        onRowClick={(params: GridRowParams<ServiceIssueStored>) =>
          rowViewActiveIssuesInActivityCountiesAction(ownerData, params.row, () => fetchOwnerData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterRelationActionedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewEdemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityCountiesTableAction"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  tableActionActiveIssuesInActivityCountiesAction(
                    'FilterRelationActionedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewEdemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityCountiesTableAction-filter',
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
      {props.validation.has('activeIssuesInActivityCounties') && (
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
          <Typography>{props.validation.get('activeIssuesInActivityCounties')}</Typography>
        </Box>
      )}
    </>
  );
});
