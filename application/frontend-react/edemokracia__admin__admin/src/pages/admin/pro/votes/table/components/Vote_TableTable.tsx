//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/table.tsx
// Template file: actor/src/pages/components/table.tsx.hbs

import { useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import type {
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridValueFormatterParams,
  GridRowId,
  GridRowModel,
  GridRowSelectionModel,
  GridSortItem,
} from '@mui/x-data-grid';
import { GridToolbarContainer, DataGrid } from '@mui/x-data-grid';
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
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';

import {
  AdminPro,
  AdminProStored,
  AdminSimpleVote,
  AdminSimpleVoteQueryCustomizer,
  AdminSimpleVoteStored,
} from '~/generated/data-api';
import { adminProServiceImpl, adminSimpleVoteServiceImpl } from '~/generated/data-axios';
import {
  usePageCreateVotesAction,
  usePageFilterVotesAction,
  usePageRefreshVotesAction,
  useRowDeleteVotesAction,
  useRowViewVotesAction,
} from '../actions';

export interface Vote_TableTableProps {
  ownerData: JudoIdentifiable<AdminPro>;
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
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'created', sort: 'asc' }]);
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
    _orderBy: [
      {
        attribute: sortModel[0].field,
        descending: sortModel[0].sort === 'desc',
      },
    ],
    ...mapAllFiltersToQueryCustomizerProperties(filters, 'created', 'type'),
  });

  const votesSortModel: GridSortModel = [{ field: 'created', sort: 'asc' }];

  const votesColumns: GridColDef<AdminSimpleVoteStored>[] = [
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('admin.SimpleVoteTable.votes.created', { defaultValue: 'Created' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'dateTime',
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
      type: 'string',
      sortable: false,
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
  ];

  const pageCreateVotesAction = usePageCreateVotesAction();
  const pageFilterVotesAction = usePageFilterVotesAction(setFilters, setPage, setQueryCustomizer, openFilterDialog);
  const pageRefreshVotesAction = usePageRefreshVotesAction();
  const rowDeleteVotesAction = useRowDeleteVotesAction();
  const rowViewVotesAction = useRowViewVotesAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminProVotesTableDefaultVotesVoteTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.SimpleVoteTable.votes.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminProVotesTableDefaultVotesVoteTableTypeFilter',
      attributeName: 'type',
      label: t('admin.SimpleVoteTable.votes.type', { defaultValue: 'Type' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['UP', 'DOWN'],
    },
  ];

  const rowActions: TableRowAction<AdminSimpleVoteStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminProVotesTableEdemokraciaAdminAdminEdemokraciaAdminProVotesRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminSimpleVoteStored) => rowDeleteVotesAction(ownerData, row, () => fetchData()),
      disabled: (row: AdminSimpleVoteStored) => !row.__deleteable,
    },
  ];

  function handleSortModelChange(newModel: GridSortModel) {
    setPage(0);
    setSortModel(newModel);

    const { field, sort } = newModel[0];

    setQueryCustomizer((prevQueryCustomizer) => {
      return {
        ...prevQueryCustomizer,
        _orderBy: [{ attribute: field, descending: sort === 'desc' }],
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
      const res = await adminProServiceImpl.getVotes(ownerData, processQueryCustomizer(queryCustomizer));

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
    <DataGrid
      {...baseTableConfig}
      pageSizeOptions={[10]}
      sx={{
        // overflow: 'hidden',
        display: 'grid',
      }}
      getRowId={(row: { __identifier: string }) => row.__identifier}
      loading={isOwnerLoading}
      rows={data}
      getRowClassName={() => 'data-grid-row'}
      getCellClassName={() => 'data-grid-cell'}
      columns={[
        ...votesColumns,
        ...columnsActionCalculator('RelationTypeedemokraciaAdminAdminEdemokraciaAdminProVotes', rowActions, {
          shownActions: 2,
        }),
      ]}
      disableRowSelectionOnClick
      onRowClick={(params: GridRowParams<AdminSimpleVoteStored>) => rowViewVotesAction(ownerData, params.row)}
      sortModel={sortModel}
      onSortModelChange={handleSortModelChange}
      components={{
        Toolbar: () => (
          <GridToolbarContainer>
            <Button
              id="FilterActionedemokraciaAdminAdminEdemokraciaAdminProVotesTableEdemokraciaAdminAdminEdemokraciaAdminProVotesPageFilter"
              startIcon={<MdiIcon path="filter" />}
              variant="text"
              onClick={() => {
                pageFilterVotesAction(
                  'FilterActionedemokraciaAdminAdminEdemokraciaAdminProVotesTableEdemokraciaAdminAdminEdemokraciaAdminProVotesPageFilter-filter',
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
  );
});
