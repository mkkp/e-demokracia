//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/table.tsx
// Template file: actor/src/pages/components/table.tsx.hbs

import { useEffect, useState, useImperativeHandle, useMemo, useRef, forwardRef } from 'react';
import type { MouseEvent } from 'react';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
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
import { GridToolbarContainer } from '@mui/x-data-grid';
import { MdiIcon, CustomTablePagination } from '~/components';
import { baseColumnConfig, baseTableConfig, toastConfig, dividerHeight } from '~/config';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { columnsActionCalculator } from '~/components/table';
import { FilterOption, FilterType, Filter } from '~/components-api';
import type { PersistedTableData, RefreshableTable, TableRowAction } from '~/utilities';
import {
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  processQueryCustomizer,
  mapAllFiltersToQueryCustomizerProperties,
  mapFilterModelToFilters,
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';
import { ContextMenu, StripedDataGrid } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';

import {
  AdminSimpleVote,
  AdminSimpleVoteQueryCustomizer,
  AdminSimpleVoteStored,
  AdminUser,
  AdminUserStored,
} from '~/generated/data-api';
import { adminUserServiceForClassImpl, adminSimpleVoteServiceForClassImpl } from '~/generated/data-axios';
import {
  usePageAddVotesAction,
  usePageClearVotesAction,
  usePageFilterVotesAction,
  usePageRefreshVotesAction,
  usePageSetVotesAction,
  useRowRemoveVotesAction,
  useRowViewVotesAction,
} from '../actions';

export const ADMIN_USER_VOTES_TABLE_VOTE_TABLE = 'AdminUserVotesTableVote_Table';

export interface Vote_TableTableProps {
  ownerData: JudoIdentifiable<AdminUser>;
  isOwnerLoading: boolean;
  setIsOwnerLoading: (value: boolean) => void;
}

export const Vote_TableTable = forwardRef<RefreshableTable, Vote_TableTableProps>((props, ref) => {
  const { isOwnerLoading, setIsOwnerLoading, ownerData } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );

  const [data, setData] = useState<GridRowModel<AdminSimpleVoteStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'created', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>({ items: [] });
  const [lastItem, setLastItem] = useState<AdminSimpleVoteStored>();
  const [firstItem, setFirstItem] = useState<AdminSimpleVoteStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [queryCustomizer, setQueryCustomizer] = useState<AdminSimpleVoteQueryCustomizer>({
    _mask: '{created,type}',
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

  const votesSortModel: GridSortModel = [{ field: 'created', sort: null }];

  const votesColumns: GridColDef<AdminSimpleVoteStored>[] = [
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('admin.SimpleVoteTable.votes.created', { defaultValue: 'Created' }) as string,
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
      field: 'type',
      headerName: t('admin.SimpleVoteTable.votes.type', { defaultValue: 'Type' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'singleSelect',
      filterable: false && true,
      sortable: false,
      valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
        return t(`enumerations.EdemokraciaSimpleVoteType.${value}`, { defaultValue: value });
      },
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
  ];

  const votesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserVotesTableDefaultVotesVoteTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.SimpleVoteTable.votes.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserVotesTableDefaultVotesVoteTableTypeFilter',
      attributeName: 'type',
      label: t('admin.SimpleVoteTable.votes.type', { defaultValue: 'Type' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['UP', 'DOWN'],
    },
  ];

  const votesInitialQueryCustomizer: AdminSimpleVoteQueryCustomizer = {
    _mask: '{created,type}',
    _orderBy: votesSortModel.length
      ? [
          {
            attribute: votesSortModel[0].field,
            descending: votesSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageAddVotesAction = usePageAddVotesAction();
  const pageClearVotesAction = usePageClearVotesAction();
  const pageFilterVotesAction = usePageFilterVotesAction(setFilters, setPage, setQueryCustomizer, openFilterDialog, 10);
  const pageRefreshVotesAction = usePageRefreshVotesAction();
  const pageSetVotesAction = usePageSetVotesAction();
  const rowRemoveVotesAction = useRowRemoveVotesAction();
  const rowViewVotesAction = useRowViewVotesAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserVotesTableDefaultVotesVoteTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.SimpleVoteTable.votes.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserVotesTableDefaultVotesVoteTableTypeFilter',
      attributeName: 'type',
      label: t('admin.SimpleVoteTable.votes.type', { defaultValue: 'Type' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['UP', 'DOWN'],
    },
  ];

  const rowActions: TableRowAction<AdminSimpleVoteStored>[] = [
    {
      id: 'RemoveActionedemokraciaAdminAdminEdemokraciaAdminUserVotesTableEdemokraciaAdminAdminEdemokraciaAdminUserVotesRowRemove',
      label: t('judo.pages.table.remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      action: async (row: AdminSimpleVoteStored) => rowRemoveVotesAction(ownerData, row, () => fetchData()),
    },
  ];

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
      return {
        ...prevQueryCustomizer,
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
      const res = await adminUserServiceForClassImpl.getVotes(ownerData, processQueryCustomizer(queryCustomizer));

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
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isOwnerLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...votesColumns,
          ...columnsActionCalculator('RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserVotes', rowActions, t, {
            shownActions: 2,
          }),
        ]}
        disableRowSelectionOnClick
        onRowClick={(params: GridRowParams<AdminSimpleVoteStored>) =>
          rowViewVotesAction(ownerData, params.row, () => fetchData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterActionedemokraciaAdminAdminEdemokraciaAdminUserVotesTableEdemokraciaAdminAdminEdemokraciaAdminUserVotesPageFilter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  pageFilterVotesAction(
                    'FilterActionedemokraciaAdminAdminEdemokraciaAdminUserVotesTableEdemokraciaAdminAdminEdemokraciaAdminUserVotesPageFilter-filter',
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
