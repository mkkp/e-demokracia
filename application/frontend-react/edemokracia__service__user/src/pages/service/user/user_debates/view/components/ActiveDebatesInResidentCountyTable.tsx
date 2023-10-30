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
  ServiceDebate,
  ServiceDebateQueryCustomizer,
  ServiceDebateStored,
  ServiceUserDebates,
  ServiceUserDebatesQueryCustomizer,
  ServiceUserDebatesStored,
} from '~/generated/data-api';
import { serviceUserDebatesServiceForClassImpl, serviceDebateServiceForClassImpl } from '~/generated/data-axios';
import {
  useServiceDebateAddToFavoritesAction,
  useServiceDebateCloseDebateAction,
  useServiceDebateCreateArgumentAction,
  useServiceDebateCreateCommentAction,
  useServiceDebateRemoveFromFavoritesAction,
  usePageRefreshUserDebatesAction,
  useRowViewActiveDebatesInResidentCountyAction,
  useTableActionActiveDebatesInResidentCountyAction,
  useTableRefreshRelationActiveDebatesInResidentCountyAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const SERVICE_USER_USER_DEBATES_VIEW_ACTIVE_DEBATES_IN_RESIDENT_COUNTY =
  'ServiceUserUserDebatesViewActiveDebatesInResidentCounty';

export interface ActiveDebatesInResidentCountyTableProps {
  ownerData: JudoIdentifiable<ServiceUserDebates>;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof ServiceUserDebatesStored, value: any) => void;
  refreshCounter: number;
  validation: Map<keyof ServiceUserDebates, string>;
}

export const ActiveDebatesInResidentCountyTable = forwardRef<RefreshableTable, ActiveDebatesInResidentCountyTableProps>(
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
    const [data, setData] = useState<GridRowModel<ServiceDebateStored>[]>([]);
    const [rowCount, setRowCount] = useState<number>(0);
    const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'countyRepresentation', sort: null }]);
    const filterModelKey = `TableedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapperActiveDebatesInResidentCounty-${ownerData.__signedIdentifier}-filterModel`;
    const filtersKey = `TableedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapperActiveDebatesInResidentCounty-${ownerData.__signedIdentifier}-filters`;
    const [filterModel, setFilterModel] = useState<GridFilterModel>(
      getItemParsedWithDefault(filterModelKey, { items: [] }),
    );
    const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
    const [lastItem, setLastItem] = useState<ServiceDebateStored>();
    const [firstItem, setFirstItem] = useState<ServiceDebateStored>();
    const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
    const [page, setPage] = useState<number>(0);
    const [queryCustomizer, setQueryCustomizer] = useState<ServiceDebateQueryCustomizer>({
      _mask: '{countyRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite}',
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
    const selectedRows = useRef<ServiceDebateStored[]>([]);

    useEffect(() => {
      selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
    }, [selectionModel]);

    const activeDebatesInResidentCountySortModel: GridSortModel = [{ field: 'countyRepresentation', sort: null }];

    const activeDebatesInResidentCountyColumns: GridColDef<ServiceDebateStored>[] = [
      {
        ...baseColumnConfig,
        field: 'countyRepresentation',
        headerName: t('service.UserDebatesView.activeDebatesInResidentCounty.countyRepresentation', {
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
        headerName: t('service.UserDebatesView.activeDebatesInResidentCounty.title', {
          defaultValue: 'Title',
        }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'issueTitle',
        headerName: t('service.UserDebatesView.activeDebatesInResidentCounty.issueTitle', {
          defaultValue: 'IssueTitle',
        }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'closeAt',
        headerName: t('service.UserDebatesView.activeDebatesInResidentCounty.closeAt', {
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
        headerName: t('service.UserDebatesView.activeDebatesInResidentCounty.status', {
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
    ];

    const activeDebatesInResidentCountyRangeFilterOptions: FilterOption[] = [
      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapperActiveDebatesInResidentCountyCountyRepresentationFilter',
        attributeName: 'countyRepresentation',
        label: t('service.UserDebatesView.activeDebatesInResidentCounty.countyRepresentation', {
          defaultValue: 'CountyRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapperActiveDebatesInResidentCountyTitleFilter',
        attributeName: 'title',
        label: t('service.UserDebatesView.activeDebatesInResidentCounty.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapperActiveDebatesInResidentCountyIssueTitleFilter',
        attributeName: 'issueTitle',
        label: t('service.UserDebatesView.activeDebatesInResidentCounty.issueTitle', {
          defaultValue: 'IssueTitle',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapperActiveDebatesInResidentCountyCloseAtFilter',
        attributeName: 'closeAt',
        label: t('service.UserDebatesView.activeDebatesInResidentCounty.closeAt', {
          defaultValue: 'CloseAt',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapperActiveDebatesInResidentCountyStatusFilter',
        attributeName: 'status',
        label: t('service.UserDebatesView.activeDebatesInResidentCounty.status', { defaultValue: 'Status' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
      },
    ];

    const activeDebatesInResidentCountyInitialQueryCustomizer: ServiceDebateQueryCustomizer = {
      _mask: '{countyRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite}',
      _orderBy: activeDebatesInResidentCountySortModel.length
        ? [
            {
              attribute: activeDebatesInResidentCountySortModel[0].field,
              descending: activeDebatesInResidentCountySortModel[0].sort === 'desc',
            },
          ]
        : [],
    };

    const serviceDebateAddToFavoritesAction = useServiceDebateAddToFavoritesAction();
    const serviceDebateCloseDebateAction = useServiceDebateCloseDebateAction();
    const serviceDebateCreateArgumentAction = useServiceDebateCreateArgumentAction();
    const serviceDebateCreateCommentAction = useServiceDebateCreateCommentAction();
    const serviceDebateRemoveFromFavoritesAction = useServiceDebateRemoveFromFavoritesAction();
    const pageRefreshUserDebatesAction = usePageRefreshUserDebatesAction();
    const rowViewActiveDebatesInResidentCountyAction = useRowViewActiveDebatesInResidentCountyAction();
    const tableActionActiveDebatesInResidentCountyAction = useTableActionActiveDebatesInResidentCountyAction(
      setFilters,
      setPage,
      setQueryCustomizer,
      openFilterDialog,
      10,
    );
    const tableRefreshRelationActiveDebatesInResidentCountyAction =
      useTableRefreshRelationActiveDebatesInResidentCountyAction();

    const filterOptions: FilterOption[] = [
      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapperActiveDebatesInResidentCountyCountyRepresentationFilter',
        attributeName: 'countyRepresentation',
        label: t('service.UserDebatesView.activeDebatesInResidentCounty.countyRepresentation', {
          defaultValue: 'CountyRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapperActiveDebatesInResidentCountyTitleFilter',
        attributeName: 'title',
        label: t('service.UserDebatesView.activeDebatesInResidentCounty.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapperActiveDebatesInResidentCountyIssueTitleFilter',
        attributeName: 'issueTitle',
        label: t('service.UserDebatesView.activeDebatesInResidentCounty.issueTitle', {
          defaultValue: 'IssueTitle',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapperActiveDebatesInResidentCountyCloseAtFilter',
        attributeName: 'closeAt',
        label: t('service.UserDebatesView.activeDebatesInResidentCounty.closeAt', {
          defaultValue: 'CloseAt',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapperActiveDebatesInResidentCountyStatusFilter',
        attributeName: 'status',
        label: t('service.UserDebatesView.activeDebatesInResidentCounty.status', { defaultValue: 'Status' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
      },
    ];

    const rowActions: TableRowAction<ServiceDebateStored>[] = [
      {
        id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewEdemokraciaServiceUserEdemokraciaServiceDebateCloseDebateButtonCallOperation',
        label: t('service.UserDebatesView.activeDebatesInResidentDistrict.closeDebate.ButtonCallOperation', {
          defaultValue: 'Close debate',
        }) as string,
        icon: <MdiIcon path="wechat" />,
        action: async (row: ServiceDebateStored) =>
          serviceDebateCloseDebateAction(row, () => {
            fetchOwnerData();
          }),
      },
      {
        id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewEdemokraciaServiceUserEdemokraciaServiceDebateAddToFavoritesButtonCallOperation',
        label: t('service.UserDebatesView.activeDebatesInResidentDistrict.addToFavorites.ButtonCallOperation', {
          defaultValue: 'Add to favorites',
        }) as string,
        icon: <MdiIcon path="star-plus" />,
        action: async (row: ServiceDebateStored) =>
          serviceDebateAddToFavoritesAction(row, () => {
            fetchOwnerData();
          }),
      },
      {
        id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewEdemokraciaServiceUserEdemokraciaServiceDebateRemoveFromFavoritesButtonCallOperation',
        label: t('service.UserDebatesView.activeDebatesInResidentDistrict.removeFromFavorites.ButtonCallOperation', {
          defaultValue: 'Remove from favorites',
        }) as string,
        icon: <MdiIcon path="star-minus" />,
        action: async (row: ServiceDebateStored) =>
          serviceDebateRemoveFromFavoritesAction(row, () => {
            fetchOwnerData();
          }),
      },
      {
        id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewEdemokraciaServiceUserEdemokraciaServiceDebateCreateArgumentButtonCallOperation',
        label: t('service.UserDebatesView.activeDebatesInResidentDistrict.createArgument.ButtonCallOperation', {
          defaultValue: 'Add argument',
        }) as string,
        icon: <MdiIcon path="account-voice" />,
        action: async (row: ServiceDebateStored) =>
          serviceDebateCreateArgumentAction(row, () => {
            fetchOwnerData();
          }),
      },
      {
        id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewEdemokraciaServiceUserEdemokraciaServiceDebateCreateCommentButtonCallOperation',
        label: t('service.UserDebatesView.activeDebatesInResidentDistrict.createComment.ButtonCallOperation', {
          defaultValue: 'Add comment',
        }) as string,
        icon: <MdiIcon path="comment-text-multiple" />,
        action: async (row: ServiceDebateStored) =>
          serviceDebateCreateCommentAction(row, () => {
            fetchOwnerData();
          }),
      },
    ];

    const handleFiltersChange = (newFilters: Filter[]) => {
      setPage(0);
      setFilters(newFilters);
      setItemStringified(filtersKey, newFilters);

      setQueryCustomizer((prevQueryCustomizer: ServiceDebateQueryCustomizer) => {
        // remove previous filter values, so that we can always start with a clean slate
        for (const name of activeDebatesInResidentCountyColumns.map((c) => c.field)) {
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
        const strippedQueryCustomizer: ServiceDebateQueryCustomizer = {
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
          const res = await serviceUserDebatesServiceForClassImpl.getActiveDebatesInResidentCounty(
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
              props.validation.has('activeDebatesInResidentCounty')
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
            ...activeDebatesInResidentCountyColumns,
            ...columnsActionCalculator(
              'RelationTypeedemokraciaServiceUserEdemokraciaServiceUserDebatesActiveDebatesInResidentCounty',
              rowActions,
              t,
              { shownActions: 2 },
            ),
          ]}
          disableRowSelectionOnClick
          keepNonExistentRowsSelected
          onRowClick={(params: GridRowParams<ServiceDebateStored>) =>
            rowViewActiveDebatesInResidentCountyAction(ownerData, params.row, () => fetchOwnerData())
          }
          sortModel={sortModel}
          onSortModelChange={handleSortModelChange}
          components={{
            Toolbar: () => (
              <GridToolbarContainer>
                <Button
                  id="FilterRelationActionedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewEdemokraciaServiceUserEdemokraciaServiceUserDebatesActiveDebatesInResidentCountyTableAction"
                  startIcon={<MdiIcon path="filter" />}
                  variant="text"
                  onClick={() => {
                    tableActionActiveDebatesInResidentCountyAction(
                      'FilterRelationActionedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewEdemokraciaServiceUserEdemokraciaServiceUserDebatesActiveDebatesInResidentCountyTableAction-filter',
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
        {props.validation.has('activeDebatesInResidentCounty') && (
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
            <Typography>{props.validation.get('activeDebatesInResidentCounty')}</Typography>
          </Box>
        )}
      </>
    );
  },
);
