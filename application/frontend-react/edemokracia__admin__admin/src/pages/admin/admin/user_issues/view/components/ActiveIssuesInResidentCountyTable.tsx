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
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminUserIssues,
  AdminUserIssuesQueryCustomizer,
  AdminUserIssuesStored,
} from '~/generated/data-api';
import { adminUserIssuesServiceForClassImpl, adminIssueServiceForClassImpl } from '~/generated/data-axios';
import {
  usePageRefreshUserIssuesAction,
  useAdminIssueCreateCommentAction,
  useAdminIssueCreateDebateAction,
  useRowViewActiveIssuesInResidentCountyAction,
  useTableActionActiveIssuesInResidentCountyAction,
  useTableRefreshRelationActiveIssuesInResidentCountyAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_ADMIN_USER_ISSUES_VIEW_ACTIVE_ISSUES_IN_RESIDENT_COUNTY =
  'AdminAdminUserIssuesViewActiveIssuesInResidentCounty';

export interface ActiveIssuesInResidentCountyTableProps {
  ownerData: JudoIdentifiable<AdminUserIssues>;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminUserIssuesStored, value: any) => void;
  refreshCounter: number;
  validation: Map<keyof AdminUserIssues, string>;
}

export const ActiveIssuesInResidentCountyTable = forwardRef<RefreshableTable, ActiveIssuesInResidentCountyTableProps>(
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
    const [data, setData] = useState<GridRowModel<AdminIssueStored>[]>([]);
    const [rowCount, setRowCount] = useState<number>(0);
    const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);
    const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapperActiveIssuesInResidentCounty-${ownerData.__signedIdentifier}-filterModel`;
    const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapperActiveIssuesInResidentCounty-${ownerData.__signedIdentifier}-filters`;
    const [filterModel, setFilterModel] = useState<GridFilterModel>(
      getItemParsedWithDefault(filterModelKey, { items: [] }),
    );
    const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
    const [lastItem, setLastItem] = useState<AdminIssueStored>();
    const [firstItem, setFirstItem] = useState<AdminIssueStored>();
    const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
    const [page, setPage] = useState<number>(0);
    const [queryCustomizer, setQueryCustomizer] = useState<AdminIssueQueryCustomizer>({
      _mask: '{scope,title,created,numberOfDebates,status}',
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

    const activeIssuesInResidentCountySortModel: GridSortModel = [{ field: 'title', sort: null }];

    const activeIssuesInResidentCountyColumns: GridColDef<AdminIssueStored>[] = [
      {
        ...baseColumnConfig,
        field: 'scope',
        headerName: t('admin.UserIssuesView.activeIssuesInResidentCounty.scope', { defaultValue: 'Scope' }) as string,
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
        field: 'title',
        headerName: t('admin.UserIssuesView.activeIssuesInResidentCounty.title', { defaultValue: 'Title' }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'created',
        headerName: t('admin.UserIssuesView.activeIssuesInResidentCounty.created', {
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
        headerName: t('admin.UserIssuesView.activeIssuesInResidentCounty.numberOfDebates', {
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
        headerName: t('admin.UserIssuesView.activeIssuesInResidentCounty.status', { defaultValue: 'Status' }) as string,
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

    const activeIssuesInResidentCountyRangeFilterOptions: FilterOption[] = [
      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapperActiveIssuesInResidentCountyScopeFilter',
        attributeName: 'scope',
        label: t('admin.UserIssuesView.activeIssuesInResidentCounty.scope', { defaultValue: 'Scope' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapperActiveIssuesInResidentCountyTitleFilter',
        attributeName: 'title',
        label: t('admin.UserIssuesView.activeIssuesInResidentCounty.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapperActiveIssuesInResidentCountyCreatedFilter',
        attributeName: 'created',
        label: t('admin.UserIssuesView.activeIssuesInResidentCounty.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapperActiveIssuesInResidentCountyNumberOfDebatesFilter',
        attributeName: 'numberOfDebates',
        label: t('admin.UserIssuesView.activeIssuesInResidentCounty.numberOfDebates', {
          defaultValue: 'NumberOfDebates',
        }) as string,
        filterType: FilterType.numeric,
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapperActiveIssuesInResidentCountyStatusFilter',
        attributeName: 'status',
        label: t('admin.UserIssuesView.activeIssuesInResidentCounty.status', { defaultValue: 'Status' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED'],
      },
    ];

    const activeIssuesInResidentCountyInitialQueryCustomizer: AdminIssueQueryCustomizer = {
      _mask: '{scope,title,created,numberOfDebates,status}',
      _orderBy: activeIssuesInResidentCountySortModel.length
        ? [
            {
              attribute: activeIssuesInResidentCountySortModel[0].field,
              descending: activeIssuesInResidentCountySortModel[0].sort === 'desc',
            },
          ]
        : [],
    };

    const pageRefreshUserIssuesAction = usePageRefreshUserIssuesAction();
    const adminIssueCreateCommentAction = useAdminIssueCreateCommentAction();
    const adminIssueCreateDebateAction = useAdminIssueCreateDebateAction();
    const rowViewActiveIssuesInResidentCountyAction = useRowViewActiveIssuesInResidentCountyAction();
    const tableActionActiveIssuesInResidentCountyAction = useTableActionActiveIssuesInResidentCountyAction(
      setFilters,
      setPage,
      setQueryCustomizer,
      openFilterDialog,
      10,
    );
    const tableRefreshRelationActiveIssuesInResidentCountyAction =
      useTableRefreshRelationActiveIssuesInResidentCountyAction();

    const filterOptions: FilterOption[] = [
      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapperActiveIssuesInResidentCountyScopeFilter',
        attributeName: 'scope',
        label: t('admin.UserIssuesView.activeIssuesInResidentCounty.scope', { defaultValue: 'Scope' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapperActiveIssuesInResidentCountyTitleFilter',
        attributeName: 'title',
        label: t('admin.UserIssuesView.activeIssuesInResidentCounty.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapperActiveIssuesInResidentCountyCreatedFilter',
        attributeName: 'created',
        label: t('admin.UserIssuesView.activeIssuesInResidentCounty.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapperActiveIssuesInResidentCountyNumberOfDebatesFilter',
        attributeName: 'numberOfDebates',
        label: t('admin.UserIssuesView.activeIssuesInResidentCounty.numberOfDebates', {
          defaultValue: 'NumberOfDebates',
        }) as string,
        filterType: FilterType.numeric,
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapperActiveIssuesInResidentCountyStatusFilter',
        attributeName: 'status',
        label: t('admin.UserIssuesView.activeIssuesInResidentCounty.status', { defaultValue: 'Status' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED'],
      },
    ];

    const rowActions: TableRowAction<AdminIssueStored>[] = [
      {
        id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewEdemokraciaAdminAdminEdemokraciaAdminIssueCreateDebateButtonCallOperation',
        label: t('admin.UserIssuesView.activeIssuesInResidentDistrict.createDebate.ButtonCallOperation', {
          defaultValue: 'Create debate',
        }) as string,
        icon: <MdiIcon path="wechat" />,
        action: async (row: AdminIssueStored) =>
          adminIssueCreateDebateAction(row, () => {
            fetchOwnerData();
          }),
      },
      {
        id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewEdemokraciaAdminAdminEdemokraciaAdminIssueCreateCommentButtonCallOperation',
        label: t('admin.UserIssuesView.activeIssuesInResidentDistrict.createComment.ButtonCallOperation', {
          defaultValue: 'Add comment',
        }) as string,
        icon: <MdiIcon path="comment-text-multiple" />,
        action: async (row: AdminIssueStored) =>
          adminIssueCreateCommentAction(row, () => {
            fetchOwnerData();
          }),
      },
    ];

    const handleFiltersChange = (newFilters: Filter[]) => {
      setPage(0);
      setFilters(newFilters);
      setItemStringified(filtersKey, newFilters);

      setQueryCustomizer((prevQueryCustomizer: AdminIssueQueryCustomizer) => {
        // remove previous filter values, so that we can always start with a clean slate
        for (const name of activeIssuesInResidentCountyColumns.map((c) => c.field)) {
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
          const res = await adminUserIssuesServiceForClassImpl.getActiveIssuesInResidentCounty(
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
              props.validation.has('activeIssuesInResidentCounty')
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
            ...activeIssuesInResidentCountyColumns,
            ...columnsActionCalculator(
              'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInResidentCounty',
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
            rowViewActiveIssuesInResidentCountyAction(ownerData, params.row, () => fetchOwnerData())
          }
          sortModel={sortModel}
          onSortModelChange={handleSortModelChange}
          components={{
            Toolbar: () => (
              <GridToolbarContainer>
                <Button
                  id="FilterRelationActionedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewEdemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInResidentCountyTableAction"
                  startIcon={<MdiIcon path="filter" />}
                  variant="text"
                  onClick={() => {
                    tableActionActiveIssuesInResidentCountyAction(
                      'FilterRelationActionedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewEdemokraciaAdminAdminEdemokraciaAdminUserIssuesActiveIssuesInResidentCountyTableAction-filter',
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
        {props.validation.has('activeIssuesInResidentCounty') && (
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
            <Typography>{props.validation.get('activeIssuesInResidentCounty')}</Typography>
          </Box>
        )}
      </>
    );
  },
);
