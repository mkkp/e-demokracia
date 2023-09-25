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
  AdminYesNoAbstainVoteDefinition,
  AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  AdminYesNoAbstainVoteDefinitionStored,
} from '~/generated/data-api';
import { adminAdminServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl } from '~/generated/data-axios';
import {
  usePageFilterUserOwnedYesNoAbstainVoteDefinitionsAction,
  usePageRefreshUserOwnedYesNoAbstainVoteDefinitionsAction,
  useRowViewUserOwnedYesNoAbstainVoteDefinitionsAction,
  useAdminYesNoAbstainVoteDefinitionTakeBackVoteAction,
  useAdminYesNoAbstainVoteDefinitionVoteAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_ADMIN_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_TABLE_YES_NO_ABSTAIN_VOTE_DEFINITION_TABLE =
  'AdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableYesNoAbstainVoteDefinition_Table';

export interface YesNoAbstainVoteDefinition_TableTableProps {
  isOwnerLoading: boolean;
  setIsOwnerLoading: (value: boolean) => void;
}

export const YesNoAbstainVoteDefinition_TableTable = forwardRef<
  RefreshableTable,
  YesNoAbstainVoteDefinition_TableTableProps
>((props, ref) => {
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

  const [data, setData] = useState<GridRowModel<AdminYesNoAbstainVoteDefinitionStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);
  const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableDefaultUserOwnedYesNoAbstainVoteDefinitionsYesNoAbstainVoteDefinitionTable-filterModel`;
  const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableDefaultUserOwnedYesNoAbstainVoteDefinitionsYesNoAbstainVoteDefinitionTable-filters`;
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [lastItem, setLastItem] = useState<AdminYesNoAbstainVoteDefinitionStored>();
  const [firstItem, setFirstItem] = useState<AdminYesNoAbstainVoteDefinitionStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [queryCustomizer, setQueryCustomizer] = useState<AdminYesNoAbstainVoteDefinitionQueryCustomizer>({
    _mask: '{title,created,description,status,closeAt,userHasVoteEntry,userHasNoVoteEntry}',
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
  const selectedRows = useRef<AdminYesNoAbstainVoteDefinitionStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  useEffect(() => {
    setItemStringified(filtersKey, filters);
  }, [filters]);
  useEffect(() => {
    setItemStringified(filterModelKey, filterModel);
  }, [filterModel]);

  const userOwnedYesNoAbstainVoteDefinitionsSortModel: GridSortModel = [{ field: 'title', sort: null }];

  const userOwnedYesNoAbstainVoteDefinitionsColumns: GridColDef<AdminYesNoAbstainVoteDefinitionStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.title', {
        defaultValue: 'Title',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.created', {
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
      headerName: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.description', {
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
      headerName: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.status', {
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
      headerName: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.closeAt', {
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

  const userOwnedYesNoAbstainVoteDefinitionsRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableDefaultUserOwnedYesNoAbstainVoteDefinitionsYesNoAbstainVoteDefinitionTableTitleFilter',
      attributeName: 'title',
      label: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.title', {
        defaultValue: 'Title',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableDefaultUserOwnedYesNoAbstainVoteDefinitionsYesNoAbstainVoteDefinitionTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.created', {
        defaultValue: 'Created',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableDefaultUserOwnedYesNoAbstainVoteDefinitionsYesNoAbstainVoteDefinitionTableDescriptionFilter',
      attributeName: 'description',
      label: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.description', {
        defaultValue: 'Description',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableDefaultUserOwnedYesNoAbstainVoteDefinitionsYesNoAbstainVoteDefinitionTableStatusFilter',
      attributeName: 'status',
      label: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.status', {
        defaultValue: 'Status',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableDefaultUserOwnedYesNoAbstainVoteDefinitionsYesNoAbstainVoteDefinitionTableCloseAtFilter',
      attributeName: 'closeAt',
      label: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.closeAt', {
        defaultValue: 'CloseAt',
      }) as string,
      filterType: FilterType.dateTime,
    },
  ];

  const userOwnedYesNoAbstainVoteDefinitionsInitialQueryCustomizer: AdminYesNoAbstainVoteDefinitionQueryCustomizer = {
    _mask: '{title,created,description,status,closeAt,userHasVoteEntry,userHasNoVoteEntry}',
    _orderBy: userOwnedYesNoAbstainVoteDefinitionsSortModel.length
      ? [
          {
            attribute: userOwnedYesNoAbstainVoteDefinitionsSortModel[0].field,
            descending: userOwnedYesNoAbstainVoteDefinitionsSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageFilterUserOwnedYesNoAbstainVoteDefinitionsAction = usePageFilterUserOwnedYesNoAbstainVoteDefinitionsAction(
    setFilters,
    setPage,
    setQueryCustomizer,
    openFilterDialog,
    10,
  );
  const pageRefreshUserOwnedYesNoAbstainVoteDefinitionsAction =
    usePageRefreshUserOwnedYesNoAbstainVoteDefinitionsAction();
  const rowViewUserOwnedYesNoAbstainVoteDefinitionsAction = useRowViewUserOwnedYesNoAbstainVoteDefinitionsAction();
  const adminYesNoAbstainVoteDefinitionTakeBackVoteAction = useAdminYesNoAbstainVoteDefinitionTakeBackVoteAction();
  const adminYesNoAbstainVoteDefinitionVoteAction = useAdminYesNoAbstainVoteDefinitionVoteAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableDefaultUserOwnedYesNoAbstainVoteDefinitionsYesNoAbstainVoteDefinitionTableTitleFilter',
      attributeName: 'title',
      label: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.title', {
        defaultValue: 'Title',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableDefaultUserOwnedYesNoAbstainVoteDefinitionsYesNoAbstainVoteDefinitionTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.created', {
        defaultValue: 'Created',
      }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableDefaultUserOwnedYesNoAbstainVoteDefinitionsYesNoAbstainVoteDefinitionTableDescriptionFilter',
      attributeName: 'description',
      label: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.description', {
        defaultValue: 'Description',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableDefaultUserOwnedYesNoAbstainVoteDefinitionsYesNoAbstainVoteDefinitionTableStatusFilter',
      attributeName: 'status',
      label: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.status', {
        defaultValue: 'Status',
      }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableDefaultUserOwnedYesNoAbstainVoteDefinitionsYesNoAbstainVoteDefinitionTableCloseAtFilter',
      attributeName: 'closeAt',
      label: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.closeAt', {
        defaultValue: 'CloseAt',
      }) as string,
      filterType: FilterType.dateTime,
    },
  ];

  const rowActions: TableRowAction<AdminYesNoAbstainVoteDefinitionStored>[] = [
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminYesNoAbstainVoteDefinitionTakeBackVoteButtonCallOperation',
      label: t(
        'admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.takeBackVote.ButtonCallOperation',
        { defaultValue: 'TakeBackVote' },
      ) as string,
      icon: <MdiIcon path="delete" />,
      action: async (row: AdminYesNoAbstainVoteDefinitionStored) =>
        adminYesNoAbstainVoteDefinitionTakeBackVoteAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminYesNoAbstainVoteDefinitionVoteButtonCallOperation',
      label: t('admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.vote.ButtonCallOperation', {
        defaultValue: 'Take a vote',
      }) as string,
      icon: <MdiIcon path="vote" />,
      action: async (row: AdminYesNoAbstainVoteDefinitionStored) =>
        adminYesNoAbstainVoteDefinitionVoteAction(row, () => fetchData()),
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);

    setQueryCustomizer((prevQueryCustomizer: AdminYesNoAbstainVoteDefinitionQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of userOwnedYesNoAbstainVoteDefinitionsColumns.map((c) => c.field)) {
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
      const strippedQueryCustomizer: AdminYesNoAbstainVoteDefinitionQueryCustomizer = {
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
      const res =
        await adminAdminServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.listUserOwnedYesNoAbstainVoteDefinitions(
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
          ...userOwnedYesNoAbstainVoteDefinitionsColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitions',
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
        onRowClick={(params: GridRowParams<AdminYesNoAbstainVoteDefinitionStored>) =>
          rowViewUserOwnedYesNoAbstainVoteDefinitionsAction(params.row, () => fetchData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterActionedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsPageFilter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  pageFilterUserOwnedYesNoAbstainVoteDefinitionsAction(
                    'FilterActionedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedYesNoAbstainVoteDefinitionsPageFilter-filter',
                    filterOptions,
                    filters,
                  );
                }}
                disabled={isOwnerLoading}
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
    </>
  );
});
