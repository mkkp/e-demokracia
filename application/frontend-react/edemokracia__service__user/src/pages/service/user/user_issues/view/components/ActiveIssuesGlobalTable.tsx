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
  useServiceIssueActivateAction,
  useServiceIssueAddToFavoritesAction,
  useServiceIssueCloseDebateAction,
  useServiceIssueCloseVoteAction,
  useServiceIssueCreateCommentAction,
  useServiceIssueCreateConArgumentAction,
  useServiceIssueCreateProArgumentAction,
  useServiceIssueDeleteOrArchiveAction,
  useServiceIssueRemoveFromFavoritesAction,
  usePageRefreshUserIssuesAction,
  useRowViewActiveIssuesGlobalAction,
  useTableActionActiveIssuesGlobalAction,
  useTableRefreshRelationActiveIssuesGlobalAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const SERVICE_USER_USER_ISSUES_VIEW_ACTIVE_ISSUES_GLOBAL = 'ServiceUserUserIssuesViewActiveIssuesGlobal';

export interface ActiveIssuesGlobalTableProps {
  ownerData: JudoIdentifiable<ServiceUserIssues>;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof ServiceUserIssuesStored, value: any) => void;
  refreshCounter: number;
  validation: Map<keyof ServiceUserIssues, string>;
}

export const ActiveIssuesGlobalTable = forwardRef<RefreshableTable, ActiveIssuesGlobalTableProps>((props, ref) => {
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
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);
  const filterModelKey = `TableedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalActiveIssuesGlobalLabelWrapperActiveIssuesGlobal-${ownerData.__signedIdentifier}-filterModel`;
  const filtersKey = `TableedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalActiveIssuesGlobalLabelWrapperActiveIssuesGlobal-${ownerData.__signedIdentifier}-filters`;
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
      '{title,created,status,isFavorite,isNotFavorite,isIssueActive,isIssueNotActive,isVoteClosable,isVoteNotClosable,isIssueDraft,isIssueNotDraft,isIssueDeletable,isIssueNotDeletable}',
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

  const activeIssuesGlobalSortModel: GridSortModel = [{ field: 'title', sort: null }];

  const activeIssuesGlobalColumns: GridColDef<ServiceIssueStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('service.UserIssuesView.activeIssuesGlobal.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.UserIssuesView.activeIssuesGlobal.created', { defaultValue: 'Created' }) as string,
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
      headerName: t('service.UserIssuesView.activeIssuesGlobal.status', { defaultValue: 'Status' }) as string,
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

  const activeIssuesGlobalRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalActiveIssuesGlobalLabelWrapperActiveIssuesGlobalTitleFilter',
      attributeName: 'title',
      label: t('service.UserIssuesView.activeIssuesGlobal.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalActiveIssuesGlobalLabelWrapperActiveIssuesGlobalCreatedFilter',
      attributeName: 'created',
      label: t('service.UserIssuesView.activeIssuesGlobal.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalActiveIssuesGlobalLabelWrapperActiveIssuesGlobalStatusFilter',
      attributeName: 'status',
      label: t('service.UserIssuesView.activeIssuesGlobal.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED', 'VOTING'],
    },
  ];

  const activeIssuesGlobalInitialQueryCustomizer: ServiceIssueQueryCustomizer = {
    _mask:
      '{title,created,status,isFavorite,isNotFavorite,isIssueActive,isIssueNotActive,isVoteClosable,isVoteNotClosable,isIssueDraft,isIssueNotDraft,isIssueDeletable,isIssueNotDeletable}',
    _orderBy: activeIssuesGlobalSortModel.length
      ? [
          {
            attribute: activeIssuesGlobalSortModel[0].field,
            descending: activeIssuesGlobalSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const serviceIssueActivateAction = useServiceIssueActivateAction();
  const serviceIssueAddToFavoritesAction = useServiceIssueAddToFavoritesAction();
  const serviceIssueCloseDebateAction = useServiceIssueCloseDebateAction();
  const serviceIssueCloseVoteAction = useServiceIssueCloseVoteAction();
  const serviceIssueCreateCommentAction = useServiceIssueCreateCommentAction();
  const serviceIssueCreateConArgumentAction = useServiceIssueCreateConArgumentAction();
  const serviceIssueCreateProArgumentAction = useServiceIssueCreateProArgumentAction();
  const serviceIssueDeleteOrArchiveAction = useServiceIssueDeleteOrArchiveAction();
  const serviceIssueRemoveFromFavoritesAction = useServiceIssueRemoveFromFavoritesAction();
  const pageRefreshUserIssuesAction = usePageRefreshUserIssuesAction();
  const rowViewActiveIssuesGlobalAction = useRowViewActiveIssuesGlobalAction();
  const tableActionActiveIssuesGlobalAction = useTableActionActiveIssuesGlobalAction(
    setFilters,
    setPage,
    setQueryCustomizer,
    openFilterDialog,
    10,
  );
  const tableRefreshRelationActiveIssuesGlobalAction = useTableRefreshRelationActiveIssuesGlobalAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalActiveIssuesGlobalLabelWrapperActiveIssuesGlobalTitleFilter',
      attributeName: 'title',
      label: t('service.UserIssuesView.activeIssuesGlobal.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalActiveIssuesGlobalLabelWrapperActiveIssuesGlobalCreatedFilter',
      attributeName: 'created',
      label: t('service.UserIssuesView.activeIssuesGlobal.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalActiveIssuesGlobalLabelWrapperActiveIssuesGlobalStatusFilter',
      attributeName: 'status',
      label: t('service.UserIssuesView.activeIssuesGlobal.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED', 'VOTING'],
    },
  ];

  const rowActions: TableRowAction<ServiceIssueStored>[] = [
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
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewEdemokraciaServiceUserEdemokraciaServiceIssueCloseDebateButtonCallOperation',
      label: t('service.UserIssuesView.activeIssuesInResidentDistrict.closeDebate.ButtonCallOperation', {
        defaultValue: 'Close debate and start vote',
      }) as string,
      icon: <MdiIcon path="vote" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueCloseDebateAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewEdemokraciaServiceUserEdemokraciaServiceIssueCloseVoteButtonCallOperation',
      label: t('service.UserIssuesView.activeIssuesInResidentDistrict.closeVote.ButtonCallOperation', {
        defaultValue: 'Close Vote',
      }) as string,
      icon: <MdiIcon path="lock-check" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueCloseVoteAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewEdemokraciaServiceUserEdemokraciaServiceIssueActivateButtonCallOperation',
      label: t('service.UserIssuesView.activeIssuesInResidentDistrict.activate.ButtonCallOperation', {
        defaultValue: 'Activate',
      }) as string,
      icon: <MdiIcon path="lock-open" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueActivateAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewEdemokraciaServiceUserEdemokraciaServiceIssueDeleteOrArchiveButtonCallOperation',
      label: t('service.UserIssuesView.activeIssuesInResidentDistrict.deleteOrArchive.ButtonCallOperation', {
        defaultValue: 'Delete',
      }) as string,
      icon: <MdiIcon path="delete" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueDeleteOrArchiveAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewEdemokraciaServiceUserEdemokraciaServiceIssueCreateConArgumentButtonCallOperation',
      label: t('service.UserIssuesView.activeIssuesInResidentDistrict.createConArgument.ButtonCallOperation', {
        defaultValue: 'Add Con Argument',
      }) as string,
      icon: <MdiIcon path="chat-minus" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueCreateConArgumentAction(row, () => {
          fetchOwnerData();
        }),
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewEdemokraciaServiceUserEdemokraciaServiceIssueCreateProArgumentButtonCallOperation',
      label: t('service.UserIssuesView.activeIssuesInResidentDistrict.createProArgument.ButtonCallOperation', {
        defaultValue: 'Add Pro Argument',
      }) as string,
      icon: <MdiIcon path="chat-plus" />,
      action: async (row: ServiceIssueStored) =>
        serviceIssueCreateProArgumentAction(row, () => {
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
      for (const name of activeIssuesGlobalColumns.map((c) => c.field)) {
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
        const res = await serviceUserIssuesServiceForClassImpl.getActiveIssuesGlobal(
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
            props.validation.has('activeIssuesGlobal') ? `2px solid ${theme.palette.error.main}` : undefined,
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
          ...activeIssuesGlobalColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesGlobal',
            rowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        onRowClick={(params: GridRowParams<ServiceIssueStored>) =>
          rowViewActiveIssuesGlobalAction(ownerData, params.row, () => fetchOwnerData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterRelationActionedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewEdemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesGlobalTableAction"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  tableActionActiveIssuesGlobalAction(
                    'FilterRelationActionedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewEdemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesGlobalTableAction-filter',
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
      {props.validation.has('activeIssuesGlobal') && (
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
          <Typography>{props.validation.get('activeIssuesGlobal')}</Typography>
        </Box>
      )}
    </>
  );
});
