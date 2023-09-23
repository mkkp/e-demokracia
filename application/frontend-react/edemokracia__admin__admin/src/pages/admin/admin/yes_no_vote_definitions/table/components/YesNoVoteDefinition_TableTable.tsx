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

import {
  AdminYesNoVoteDefinition,
  AdminYesNoVoteDefinitionQueryCustomizer,
  AdminYesNoVoteDefinitionStored,
} from '~/generated/data-api';
import { adminAdminServiceForYesNoVoteDefinitionsImpl } from '~/generated/data-axios';
import {
  usePageFilterYesNoVoteDefinitionsAction,
  usePageRefreshYesNoVoteDefinitionsAction,
  useRowDeleteYesNoVoteDefinitionsAction,
  useRowViewYesNoVoteDefinitionsAction,
  useAdminYesNoVoteDefinitionTakeBackVoteAction,
  useAdminYesNoVoteDefinitionVoteAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_ADMIN_YES_NO_VOTE_DEFINITIONS_TABLE_YES_NO_VOTE_DEFINITION_TABLE =
  'AdminAdminYesNoVoteDefinitionsTableYesNoVoteDefinition_Table';

export interface YesNoVoteDefinition_TableTableProps {
  isOwnerLoading: boolean;
  setIsOwnerLoading: (value: boolean) => void;
}

export const YesNoVoteDefinition_TableTable = forwardRef<RefreshableTable, YesNoVoteDefinition_TableTableProps>(
  (props, ref) => {
    const { getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
    const { isOwnerLoading, setIsOwnerLoading } = props;
    const { t } = useTranslation();
    const { openFilterDialog } = useFilterDialog();
    const { openRangeDialog } = useRangeDialog();
    const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
    const { locale: l10nLocale } = useL10N();
    const handleFetchError = useErrorHandler(
      `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
    );
    const openCRUDDialog = useCRUDDialog();

    const [data, setData] = useState<GridRowModel<AdminYesNoVoteDefinitionStored>[]>([]);
    const [rowCount, setRowCount] = useState<number>(0);
    const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);
    const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableDefaultYesNoVoteDefinitionsYesNoVoteDefinitionTable-filterModel`;
    const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableDefaultYesNoVoteDefinitionsYesNoVoteDefinitionTable-filters`;
    const [filterModel, setFilterModel] = useState<GridFilterModel>(
      getItemParsedWithDefault(filterModelKey, { items: [] }),
    );
    const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
    const [lastItem, setLastItem] = useState<AdminYesNoVoteDefinitionStored>();
    const [firstItem, setFirstItem] = useState<AdminYesNoVoteDefinitionStored>();
    const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
    const [page, setPage] = useState<number>(0);
    const [queryCustomizer, setQueryCustomizer] = useState<AdminYesNoVoteDefinitionQueryCustomizer>({
      _mask: '{title,created,description,status,closeAt,userHasNoVoteEntry,userHasVoteEntry}',
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
    const selectedRows = useRef<AdminYesNoVoteDefinitionStored[]>([]);

    useEffect(() => {
      selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
    }, [selectionModel]);

    useEffect(() => {
      setItemStringified(filtersKey, filters);
    }, [filters]);
    useEffect(() => {
      setItemStringified(filterModelKey, filterModel);
    }, [filterModel]);

    const yesNoVoteDefinitionsSortModel: GridSortModel = [{ field: 'title', sort: null }];

    const yesNoVoteDefinitionsColumns: GridColDef<AdminYesNoVoteDefinitionStored>[] = [
      {
        ...baseColumnConfig,
        field: 'title',
        headerName: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.title', { defaultValue: 'Title' }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'created',
        headerName: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.created', {
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
        field: 'description',
        headerName: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.description', {
          defaultValue: 'Description',
        }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'status',
        headerName: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.status', {
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
      {
        ...baseColumnConfig,
        field: 'closeAt',
        headerName: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.closeAt', {
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
    ];

    const yesNoVoteDefinitionsRangeFilterOptions: FilterOption[] = [
      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableDefaultYesNoVoteDefinitionsYesNoVoteDefinitionTableTitleFilter',
        attributeName: 'title',
        label: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableDefaultYesNoVoteDefinitionsYesNoVoteDefinitionTableCreatedFilter',
        attributeName: 'created',
        label: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableDefaultYesNoVoteDefinitionsYesNoVoteDefinitionTableDescriptionFilter',
        attributeName: 'description',
        label: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.description', {
          defaultValue: 'Description',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableDefaultYesNoVoteDefinitionsYesNoVoteDefinitionTableStatusFilter',
        attributeName: 'status',
        label: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.status', { defaultValue: 'Status' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED'],
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableDefaultYesNoVoteDefinitionsYesNoVoteDefinitionTableCloseAtFilter',
        attributeName: 'closeAt',
        label: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.closeAt', { defaultValue: 'CloseAt' }) as string,
        filterType: FilterType.dateTime,
      },
    ];

    const yesNoVoteDefinitionsInitialQueryCustomizer: AdminYesNoVoteDefinitionQueryCustomizer = {
      _mask: '{title,created,description,status,closeAt,userHasNoVoteEntry,userHasVoteEntry}',
      _orderBy: yesNoVoteDefinitionsSortModel.length
        ? [
            {
              attribute: yesNoVoteDefinitionsSortModel[0].field,
              descending: yesNoVoteDefinitionsSortModel[0].sort === 'desc',
            },
          ]
        : [],
    };

    const pageFilterYesNoVoteDefinitionsAction = usePageFilterYesNoVoteDefinitionsAction(
      setFilters,
      setPage,
      setQueryCustomizer,
      openFilterDialog,
      10,
    );
    const pageRefreshYesNoVoteDefinitionsAction = usePageRefreshYesNoVoteDefinitionsAction();
    const rowDeleteYesNoVoteDefinitionsAction = useRowDeleteYesNoVoteDefinitionsAction();
    const rowViewYesNoVoteDefinitionsAction = useRowViewYesNoVoteDefinitionsAction();
    const adminYesNoVoteDefinitionTakeBackVoteAction = useAdminYesNoVoteDefinitionTakeBackVoteAction();
    const adminYesNoVoteDefinitionVoteAction = useAdminYesNoVoteDefinitionVoteAction();

    const filterOptions: FilterOption[] = [
      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableDefaultYesNoVoteDefinitionsYesNoVoteDefinitionTableTitleFilter',
        attributeName: 'title',
        label: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableDefaultYesNoVoteDefinitionsYesNoVoteDefinitionTableCreatedFilter',
        attributeName: 'created',
        label: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableDefaultYesNoVoteDefinitionsYesNoVoteDefinitionTableDescriptionFilter',
        attributeName: 'description',
        label: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.description', {
          defaultValue: 'Description',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableDefaultYesNoVoteDefinitionsYesNoVoteDefinitionTableStatusFilter',
        attributeName: 'status',
        label: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.status', { defaultValue: 'Status' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED'],
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableDefaultYesNoVoteDefinitionsYesNoVoteDefinitionTableCloseAtFilter',
        attributeName: 'closeAt',
        label: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.closeAt', { defaultValue: 'CloseAt' }) as string,
        filterType: FilterType.dateTime,
      },
    ];

    const rowActions: TableRowAction<AdminYesNoVoteDefinitionStored>[] = [
      {
        id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsRowDelete',
        label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
        icon: <MdiIcon path="delete_forever" />,
        action: async (row: AdminYesNoVoteDefinitionStored) =>
          rowDeleteYesNoVoteDefinitionsAction(row, () => fetchData()),
        disabled: (row: AdminYesNoVoteDefinitionStored) => !row.__deleteable,
      },
      {
        id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminYesNoVoteDefinitionVoteButtonCallOperation',
        label: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.vote.ButtonCallOperation', {
          defaultValue: 'Take a vote',
        }) as string,
        icon: <MdiIcon path="vote" />,
        action: async (row: AdminYesNoVoteDefinitionStored) =>
          adminYesNoVoteDefinitionVoteAction(row, () => fetchData()),
      },
      {
        id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminYesNoVoteDefinitionTakeBackVoteButtonCallOperation',
        label: t('admin.YesNoVoteDefinitionTable.yesNoVoteDefinitions.takeBackVote.ButtonCallOperation', {
          defaultValue: 'TakeBackVote',
        }) as string,
        icon: <MdiIcon path="delete" />,
        action: async (row: AdminYesNoVoteDefinitionStored) =>
          adminYesNoVoteDefinitionTakeBackVoteAction(row, () => fetchData()),
      },
    ];

    const bulkDeleteSelected = useCallback(() => {
      openCRUDDialog<AdminYesNoVoteDefinitionStored>({
        dialogTitle: t('judo.dialogs.crud-bulk.delete.title', { defaultValue: 'Delete selected items' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows.current,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          await rowDeleteYesNoVoteDefinitionsAction(item, successHandler, errorHandler, true);
        },
        onClose: (needsRefresh) => {
          if (needsRefresh) {
            fetchData();
            setSelectionModel([]); // not resetting on fetchData because refreshes would always remove selections...
          }
        },
        // autoCloseOnSuccess: true,
      });
    }, []);
    const isBulkDeleteAvailable: () => boolean = useCallback(() => {
      // every row has the same `__deleteable` flag
      return !!selectionModel.length && !false && !!data[0]?.__deleteable;
    }, [data, selectionModel]);

    const handleFiltersChange = (newFilters: Filter[]) => {
      setPage(0);
      setFilters(newFilters);

      setQueryCustomizer((prevQueryCustomizer: AdminYesNoVoteDefinitionQueryCustomizer) => {
        // remove previous filter values, so that we can always start with a clean slate
        for (const name of yesNoVoteDefinitionsColumns.map((c) => c.field)) {
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
        const strippedQueryCustomizer: AdminYesNoVoteDefinitionQueryCustomizer = {
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
      setIsOwnerLoading(true);

      try {
        const res = await adminAdminServiceForYesNoVoteDefinitionsImpl.listYesNoVoteDefinitions(
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
        setIsOwnerLoading(false);
      }
    }

    useImperativeHandle(ref, () => ({
      fetchData,
    }));

    useEffect(() => {
      fetchData();
    }, [queryCustomizer]);

    return (
      <>
        <StripedDataGrid
          {...baseTableConfig}
          pageSizeOptions={[10]}
          sx={{
            // overflow: 'hidden',
            display: 'grid',
          }}
          slotProps={{
            filterPanel: {
              logicOperators: [GridLogicOperator.And],
            },
          }}
          getRowId={(row: { __identifier: string }) => row.__identifier}
          loading={isOwnerLoading}
          rows={data}
          getRowClassName={(params: GridRowClassNameParams) => {
            return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
          }}
          columns={[
            ...yesNoVoteDefinitionsColumns,
            ...columnsActionCalculator(
              'RelationTypeedemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitions',
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
          onRowClick={(params: GridRowParams<AdminYesNoVoteDefinitionStored>) =>
            rowViewYesNoVoteDefinitionsAction(params.row, () => fetchData())
          }
          sortModel={sortModel}
          onSortModelChange={handleSortModelChange}
          components={{
            Toolbar: () => (
              <GridToolbarContainer>
                <Button
                  id="FilterActionedemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsPageFilter"
                  startIcon={<MdiIcon path="filter" />}
                  variant="text"
                  onClick={() => {
                    pageFilterYesNoVoteDefinitionsAction(
                      'FilterActionedemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminAdminYesNoVoteDefinitionsPageFilter-filter',
                      filterOptions,
                      filters,
                    );
                  }}
                  disabled={isOwnerLoading}
                >
                  {t('judo.pages.table.set-filters', { defaultValue: 'Set filters' }) +
                    (filters.length !== 0 ? ' (' + filters.length + ')' : '')}
                </Button>
                {isBulkDeleteAvailable() ? (
                  <Button
                    disabled={isOwnerLoading}
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
      </>
    );
  },
);
