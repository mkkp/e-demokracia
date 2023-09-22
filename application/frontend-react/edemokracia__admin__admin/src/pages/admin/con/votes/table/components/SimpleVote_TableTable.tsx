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
  AdminCon,
  AdminConStored,
  AdminSimpleVote,
  AdminSimpleVoteQueryCustomizer,
  AdminSimpleVoteStored,
} from '~/generated/data-api';
import { adminConServiceForClassImpl, adminSimpleVoteServiceForClassImpl } from '~/generated/data-axios';
import { usePageFilterVotesAction, usePageRefreshVotesAction, useRowViewVotesAction } from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_CON_VOTES_TABLE_SIMPLE_VOTE_TABLE = 'AdminConVotesTableSimpleVote_Table';

export interface SimpleVote_TableTableProps {
  ownerData: JudoIdentifiable<AdminCon>;
  isOwnerLoading: boolean;
  setIsOwnerLoading: (value: boolean) => void;
}

export const SimpleVote_TableTable = forwardRef<RefreshableTable, SimpleVote_TableTableProps>((props, ref) => {
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

  const [data, setData] = useState<GridRowModel<AdminSimpleVoteStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'created', sort: null }]);
  const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminConVotesTableDefaultVotesSimpleVoteTable-${__identifier}-filterModel`;
  const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminConVotesTableDefaultVotesSimpleVoteTable-${__identifier}-filters`;
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [lastItem, setLastItem] = useState<AdminSimpleVoteStored>();
  const [firstItem, setFirstItem] = useState<AdminSimpleVoteStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
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

  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const selectedRows = useRef<AdminSimpleVoteStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  useEffect(() => {
    setFilters(
      getItemParsedWithDefault(
        `TableedemokraciaAdminAdminEdemokraciaAdminConVotesTableDefaultVotesSimpleVoteTable-${__identifier}-filters`,
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
        if (value !== undefined && value !== null) {
          return t(`enumerations.EdemokraciaSimpleVoteType.${value}`, { defaultValue: value });
        }
      },
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
  ];

  const votesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminConVotesTableDefaultVotesSimpleVoteTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.SimpleVoteTable.votes.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminConVotesTableDefaultVotesSimpleVoteTableTypeFilter',
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

  const pageFilterVotesAction = usePageFilterVotesAction(setFilters, setPage, setQueryCustomizer, openFilterDialog, 10);
  const pageRefreshVotesAction = usePageRefreshVotesAction();
  const rowViewVotesAction = useRowViewVotesAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminConVotesTableDefaultVotesSimpleVoteTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.SimpleVoteTable.votes.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminConVotesTableDefaultVotesSimpleVoteTableTypeFilter',
      attributeName: 'type',
      label: t('admin.SimpleVoteTable.votes.type', { defaultValue: 'Type' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['UP', 'DOWN'],
    },
  ];

  const rowActions: TableRowAction<AdminSimpleVoteStored>[] = [];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);

    setQueryCustomizer((prevQueryCustomizer: AdminSimpleVoteQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of votesColumns.map((c) => c.field)) {
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
      const strippedQueryCustomizer: AdminSimpleVoteQueryCustomizer = {
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
      const res = await adminConServiceForClassImpl.getVotes(ownerData, processQueryCustomizer(queryCustomizer));

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
          ...votesColumns,
          ...columnsActionCalculator('RelationTypeedemokraciaAdminAdminEdemokraciaAdminConVotes', rowActions, t, {
            shownActions: 2,
          }),
        ]}
        disableRowSelectionOnClick
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setSelectionModel(newRowSelectionModel);
        }}
        keepNonExistentRowsSelected
        onRowClick={(params: GridRowParams<AdminSimpleVoteStored>) =>
          rowViewVotesAction(ownerData, params.row, () => fetchData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterActionedemokraciaAdminAdminEdemokraciaAdminConVotesTableEdemokraciaAdminAdminEdemokraciaAdminConVotesPageFilter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  pageFilterVotesAction(
                    'FilterActionedemokraciaAdminAdminEdemokraciaAdminConVotesTableEdemokraciaAdminAdminEdemokraciaAdminConVotesPageFilter-filter',
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
