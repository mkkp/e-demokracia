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
  AdminDashboard,
  AdminDashboardStored,
  AdminVoteDefinition,
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
} from '~/generated/data-api';
import { adminDashboardServiceForClassImpl, adminVoteDefinitionServiceForClassImpl } from '~/generated/data-axios';
import {
  usePageFilterOwnedVoteDefinitionsAction,
  usePageRefreshOwnedVoteDefinitionsAction,
  useRowDeleteOwnedVoteDefinitionsAction,
  useRowViewOwnedVoteDefinitionsAction,
  useAdminVoteDefinitionVoteRatingAction,
  useAdminVoteDefinitionVoteSelectAnswerAction,
  useAdminVoteDefinitionVoteYesNoAction,
  useAdminVoteDefinitionVoteYesNoAbstainAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_DASHBOARD_OWNED_VOTE_DEFINITIONS_TABLE_VOTE_DEFINITION_TABLE =
  'AdminDashboardOwnedVoteDefinitionsTableVoteDefinition_Table';

export interface VoteDefinition_TableTableProps {
  ownerData: JudoIdentifiable<AdminDashboard>;
  isOwnerLoading: boolean;
  setIsOwnerLoading: (value: boolean) => void;
}

export const VoteDefinition_TableTable = forwardRef<RefreshableTable, VoteDefinition_TableTableProps>((props, ref) => {
  const { getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { isOwnerLoading, setIsOwnerLoading, ownerData } = props;
  const { sub: __identifier } = decodeToken<{ sub: string }>(ownerData.__signedIdentifier)!;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const openCRUDDialog = useCRUDDialog();

  const [data, setData] = useState<GridRowModel<AdminVoteDefinitionStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);
  const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTable-${__identifier}-filterModel`;
  const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTable-${__identifier}-filters`;
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [lastItem, setLastItem] = useState<AdminVoteDefinitionStored>();
  const [firstItem, setFirstItem] = useState<AdminVoteDefinitionStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [queryCustomizer, setQueryCustomizer] = useState<AdminVoteDefinitionQueryCustomizer>({
    _mask:
      '{voteType,title,numberOfVotes,created,status,closeAt,description,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType}',
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
  const selectedRows = useRef<AdminVoteDefinitionStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  useEffect(() => {
    setFilters(
      getItemParsedWithDefault(
        `TableedemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTable-${__identifier}-filters`,
        [...filters],
      ),
    );
  }, [ownerData]);
  useEffect(() => {
    setItemStringified(filtersKey, filters);
  }, [filters]);
  useEffect(() => {
    setItemStringified(filterModelKey, filterModel);
  }, [filterModel]);

  const ownedVoteDefinitionsSortModel: GridSortModel = [{ field: 'title', sort: null }];

  const ownedVoteDefinitionsColumns: GridColDef<AdminVoteDefinitionStored>[] = [
    {
      ...baseColumnConfig,
      field: 'voteType',
      headerName: t('admin.VoteDefinitionTable.ownedVoteDefinitions.voteType', { defaultValue: 'VoteType' }) as string,
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
      field: 'title',
      headerName: t('admin.VoteDefinitionTable.ownedVoteDefinitions.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'numberOfVotes',
      headerName: t('admin.VoteDefinitionTable.ownedVoteDefinitions.numberOfVotes', {
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
      headerName: t('admin.VoteDefinitionTable.ownedVoteDefinitions.created', { defaultValue: 'Created' }) as string,
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
      headerName: t('admin.VoteDefinitionTable.ownedVoteDefinitions.status', { defaultValue: 'Status' }) as string,
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
      headerName: t('admin.VoteDefinitionTable.ownedVoteDefinitions.closeAt', { defaultValue: 'CloseAt' }) as string,
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
      headerName: t('admin.VoteDefinitionTable.ownedVoteDefinitions.description', {
        defaultValue: 'Description',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const ownedVoteDefinitionsRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTableVoteTypeFilter',
      attributeName: 'voteType',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.voteType', { defaultValue: 'VoteType' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['YES_NO', 'YES_NO_ABSTAIN', 'SELECT_ANSWER', 'RATE', 'NO_VOTE'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTableTitleFilter',
      attributeName: 'title',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTableNumberOfVotesFilter',
      attributeName: 'numberOfVotes',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.numberOfVotes', {
        defaultValue: 'NumberOfVotes',
      }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTableStatusFilter',
      attributeName: 'status',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTableCloseAtFilter',
      attributeName: 'closeAt',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.closeAt', { defaultValue: 'CloseAt' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTableDescriptionFilter',
      attributeName: 'description',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.description', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },
  ];

  const ownedVoteDefinitionsInitialQueryCustomizer: AdminVoteDefinitionQueryCustomizer = {
    _mask:
      '{voteType,title,numberOfVotes,created,status,closeAt,description,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType}',
    _orderBy: ownedVoteDefinitionsSortModel.length
      ? [
          {
            attribute: ownedVoteDefinitionsSortModel[0].field,
            descending: ownedVoteDefinitionsSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageFilterOwnedVoteDefinitionsAction = usePageFilterOwnedVoteDefinitionsAction(
    setFilters,
    setPage,
    setQueryCustomizer,
    openFilterDialog,
    10,
  );
  const pageRefreshOwnedVoteDefinitionsAction = usePageRefreshOwnedVoteDefinitionsAction();
  const rowDeleteOwnedVoteDefinitionsAction = useRowDeleteOwnedVoteDefinitionsAction();
  const rowViewOwnedVoteDefinitionsAction = useRowViewOwnedVoteDefinitionsAction();
  const adminVoteDefinitionVoteRatingAction = useAdminVoteDefinitionVoteRatingAction();
  const adminVoteDefinitionVoteSelectAnswerAction = useAdminVoteDefinitionVoteSelectAnswerAction();
  const adminVoteDefinitionVoteYesNoAction = useAdminVoteDefinitionVoteYesNoAction();
  const adminVoteDefinitionVoteYesNoAbstainAction = useAdminVoteDefinitionVoteYesNoAbstainAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTableVoteTypeFilter',
      attributeName: 'voteType',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.voteType', { defaultValue: 'VoteType' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['YES_NO', 'YES_NO_ABSTAIN', 'SELECT_ANSWER', 'RATE', 'NO_VOTE'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTableTitleFilter',
      attributeName: 'title',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTableNumberOfVotesFilter',
      attributeName: 'numberOfVotes',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.numberOfVotes', {
        defaultValue: 'NumberOfVotes',
      }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTableStatusFilter',
      attributeName: 'status',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTableCloseAtFilter',
      attributeName: 'closeAt',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.closeAt', { defaultValue: 'CloseAt' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableDefaultOwnedVoteDefinitionsVoteDefinitionTableDescriptionFilter',
      attributeName: 'description',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.description', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },
  ];

  const rowActions: TableRowAction<AdminVoteDefinitionStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminVoteDefinitionStored) =>
        rowDeleteOwnedVoteDefinitionsAction(ownerData, row, () => fetchData()),
      disabled: (row: AdminVoteDefinitionStored) => !row.__deleteable,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteYesNoButtonCallOperation',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.voteYesNo.ButtonCallOperation', {
        defaultValue: 'Take a vote',
      }) as string,
      icon: <MdiIcon path="vote" />,
      action: async (row: AdminVoteDefinitionStored) => adminVoteDefinitionVoteYesNoAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteYesNoAbstainButtonCallOperation',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.voteYesNoAbstain.ButtonCallOperation', {
        defaultValue: 'Take a vote',
      }) as string,
      icon: <MdiIcon path="vote" />,
      action: async (row: AdminVoteDefinitionStored) =>
        adminVoteDefinitionVoteYesNoAbstainAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteSelectAnswerButtonCallOperation',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.voteSelectAnswer.ButtonCallOperation', {
        defaultValue: 'Take a vote',
      }) as string,
      icon: <MdiIcon path="vote" />,
      action: async (row: AdminVoteDefinitionStored) =>
        adminVoteDefinitionVoteSelectAnswerAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteRatingButtonCallOperation',
      label: t('admin.VoteDefinitionTable.ownedVoteDefinitions.voteRating.ButtonCallOperation', {
        defaultValue: 'Take a vote',
      }) as string,
      icon: <MdiIcon path="vote" />,
      action: async (row: AdminVoteDefinitionStored) => adminVoteDefinitionVoteRatingAction(row, () => fetchData()),
    },
  ];

  const bulkDeleteSelected = useCallback(() => {
    openCRUDDialog<AdminVoteDefinitionStored>({
      dialogTitle: t('judo.dialogs.crud-bulk.delete.title', { defaultValue: 'Delete selected items' }),
      itemTitleFn: (item) => item.title!,
      selectedItems: selectedRows.current,
      action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
        await rowDeleteOwnedVoteDefinitionsAction(ownerData, item, successHandler, errorHandler, true);
      },
      onClose: (needsRefresh) => {
        if (needsRefresh) {
          fetchData();
          setSelectionModel([]); // not resetting on fetchData because refreshes would always remove selections...
        }
      },
    });
  }, [ownerData]);
  const isBulkDeleteAvailable: () => boolean = useCallback(() => {
    // every row has the same `__deleteable` flag
    return !!selectionModel.length && !false && !!data[0]?.__deleteable;
  }, [data, selectionModel]);

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);

    setQueryCustomizer((prevQueryCustomizer: AdminVoteDefinitionQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of ownedVoteDefinitionsColumns.map((c) => c.field)) {
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
      const strippedQueryCustomizer: AdminVoteDefinitionQueryCustomizer = {
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
      const res = await adminDashboardServiceForClassImpl.getOwnedVoteDefinitions(
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
          ...ownedVoteDefinitionsColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitions',
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
        onRowClick={(params: GridRowParams<AdminVoteDefinitionStored>) =>
          rowViewOwnedVoteDefinitionsAction(ownerData, params.row, () => fetchData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterActionedemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsPageFilter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  pageFilterOwnedVoteDefinitionsAction(
                    'FilterActionedemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitionsPageFilter-filter',
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
                  id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminDashboardOwnedVoteDefinitions-bulk-delete"
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
});