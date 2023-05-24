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
  AdminVoteDefinition,
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
} from '~/generated/data-api';
import { adminAdminServiceForVoteDefinitionsImpl } from '~/generated/data-axios';
import {
  usePageFilterVoteDefinitionsAction,
  usePageRefreshVoteDefinitionsAction,
  useRowDeleteVoteDefinitionsAction,
  useRowViewVoteDefinitionsAction,
  useAdminVoteDefinitionVoteRatingAction,
  useAdminVoteDefinitionVoteSelectAnswerAction,
  useAdminVoteDefinitionVoteYesNoAction,
  useAdminVoteDefinitionVoteYesNoAbstainAction,
} from '../actions';

export interface VoteDefinition_TableTableProps {
  isOwnerLoading: boolean;
  setIsOwnerLoading: (value: boolean) => void;
}

export const VoteDefinition_TableTable = forwardRef<RefreshableTable, VoteDefinition_TableTableProps>((props, ref) => {
  const { isOwnerLoading, setIsOwnerLoading } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );

  const [data, setData] = useState<GridRowModel<AdminVoteDefinitionStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'title', sort: 'asc' }]);
  const [lastItem, setLastItem] = useState<AdminVoteDefinitionStored>();
  const [firstItem, setFirstItem] = useState<AdminVoteDefinitionStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [queryCustomizer, setQueryCustomizer] = useState<AdminVoteDefinitionQueryCustomizer>({
    _mask:
      '{voteType,title,numberOfVotes,created,status,closeAt,description,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType}',
    _seek: {
      limit: 10 + 1,
    },
    _orderBy: [
      {
        attribute: sortModel[0].field,
        descending: sortModel[0].sort === 'desc',
      },
    ],
    ...mapAllFiltersToQueryCustomizerProperties(
      filters,
      'voteType',
      'title',
      'numberOfVotes',
      'created',
      'status',
      'closeAt',
      'description',
    ),
  });

  const voteDefinitionsSortModel: GridSortModel = [{ field: 'title', sort: 'asc' }];

  const voteDefinitionsColumns: GridColDef<AdminVoteDefinitionStored>[] = [
    {
      ...baseColumnConfig,
      field: 'voteType',
      headerName: t('admin.VoteDefinitionTable.voteDefinitions.voteType', { defaultValue: 'VoteType' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'string',
      sortable: false,
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('admin.VoteDefinitionTable.voteDefinitions.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'numberOfVotes',
      headerName: t('admin.VoteDefinitionTable.voteDefinitions.numberOfVotes', {
        defaultValue: 'NumberOfVotes',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('admin.VoteDefinitionTable.voteDefinitions.created', { defaultValue: 'Created' }) as string,
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
      field: 'status',
      headerName: t('admin.VoteDefinitionTable.voteDefinitions.status', { defaultValue: 'Status' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'string',
      sortable: false,
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
    {
      ...baseColumnConfig,
      field: 'closeAt',
      headerName: t('admin.VoteDefinitionTable.voteDefinitions.closeAt', { defaultValue: 'CloseAt' }) as string,
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
      field: 'description',
      headerName: t('admin.VoteDefinitionTable.voteDefinitions.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const pageFilterVoteDefinitionsAction = usePageFilterVoteDefinitionsAction(
    setFilters,
    setPage,
    setQueryCustomizer,
    openFilterDialog,
  );
  const pageRefreshVoteDefinitionsAction = usePageRefreshVoteDefinitionsAction();
  const rowDeleteVoteDefinitionsAction = useRowDeleteVoteDefinitionsAction();
  const rowViewVoteDefinitionsAction = useRowViewVoteDefinitionsAction();
  const adminVoteDefinitionVoteRatingAction = useAdminVoteDefinitionVoteRatingAction();
  const adminVoteDefinitionVoteSelectAnswerAction = useAdminVoteDefinitionVoteSelectAnswerAction();
  const adminVoteDefinitionVoteYesNoAction = useAdminVoteDefinitionVoteYesNoAction();
  const adminVoteDefinitionVoteYesNoAbstainAction = useAdminVoteDefinitionVoteYesNoAbstainAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsTableDefaultVoteDefinitionsVoteDefinitionTableVoteTypeFilter',
      attributeName: 'voteType',
      label: t('admin.VoteDefinitionTable.voteDefinitions.voteType', { defaultValue: 'VoteType' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['YES_NO', 'YES_NO_ABSTAIN', 'SELECT_ANSWER', 'RATE', 'NO_VOTE'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsTableDefaultVoteDefinitionsVoteDefinitionTableTitleFilter',
      attributeName: 'title',
      label: t('admin.VoteDefinitionTable.voteDefinitions.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsTableDefaultVoteDefinitionsVoteDefinitionTableNumberOfVotesFilter',
      attributeName: 'numberOfVotes',
      label: t('admin.VoteDefinitionTable.voteDefinitions.numberOfVotes', { defaultValue: 'NumberOfVotes' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsTableDefaultVoteDefinitionsVoteDefinitionTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.VoteDefinitionTable.voteDefinitions.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsTableDefaultVoteDefinitionsVoteDefinitionTableStatusFilter',
      attributeName: 'status',
      label: t('admin.VoteDefinitionTable.voteDefinitions.status', { defaultValue: 'Status' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsTableDefaultVoteDefinitionsVoteDefinitionTableCloseAtFilter',
      attributeName: 'closeAt',
      label: t('admin.VoteDefinitionTable.voteDefinitions.closeAt', { defaultValue: 'CloseAt' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsTableDefaultVoteDefinitionsVoteDefinitionTableDescriptionFilter',
      attributeName: 'description',
      label: t('admin.VoteDefinitionTable.voteDefinitions.description', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },
  ];

  const rowActions: TableRowAction<AdminVoteDefinitionStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminVoteDefinitionStored) => rowDeleteVoteDefinitionsAction(row, () => fetchData()),
      disabled: (row: AdminVoteDefinitionStored) => !row.__deleteable,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteYesNoButtonCallOperation',
      label: t('admin.VoteDefinitionTable.voteDefinitions.voteYesNo.ButtonCallOperation', {
        defaultValue: 'Vote',
      }) as string,
      icon: <MdiIcon path="chevron_right" />,
      action: async (row: AdminVoteDefinitionStored) => adminVoteDefinitionVoteYesNoAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteYesNoAbstainButtonCallOperation',
      label: t('admin.VoteDefinitionTable.voteDefinitions.voteYesNoAbstain.ButtonCallOperation', {
        defaultValue: 'VoteYesNoAbstain',
      }) as string,
      icon: <MdiIcon path="chevron_right" />,
      action: async (row: AdminVoteDefinitionStored) =>
        adminVoteDefinitionVoteYesNoAbstainAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteSelectAnswerButtonCallOperation',
      label: t('admin.VoteDefinitionTable.voteDefinitions.voteSelectAnswer.ButtonCallOperation', {
        defaultValue: 'VoteSelectAnswer',
      }) as string,
      icon: <MdiIcon path="chevron_right" />,
      action: async (row: AdminVoteDefinitionStored) =>
        adminVoteDefinitionVoteSelectAnswerAction(row, () => fetchData()),
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteRatingButtonCallOperation',
      label: t('admin.VoteDefinitionTable.voteDefinitions.voteRating.ButtonCallOperation', {
        defaultValue: 'VoteRating',
      }) as string,
      icon: <MdiIcon path="chevron_right" />,
      action: async (row: AdminVoteDefinitionStored) => adminVoteDefinitionVoteRatingAction(row, () => fetchData()),
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
      const res = await adminAdminServiceForVoteDefinitionsImpl.listVoteDefinitions(
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
    <DataGrid
      {...baseTableConfig}
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
        ...voteDefinitionsColumns,
        ...columnsActionCalculator(
          'RelationTypeedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitions',
          rowActions,
          { shownActions: 2 },
        ),
      ]}
      disableRowSelectionOnClick
      onRowClick={(params: GridRowParams<AdminVoteDefinitionStored>) => rowViewVoteDefinitionsAction(params.row)}
      sortModel={sortModel}
      onSortModelChange={handleSortModelChange}
      components={{
        Toolbar: () => (
          <GridToolbarContainer>
            <Button
              id="FilterActionedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsPageFilter"
              variant="text"
              onClick={() => {
                pageFilterVoteDefinitionsAction(
                  'FilterActionedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsTableEdemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsPageFilter-filter',
                  filterOptions,
                  filters,
                );
              }}
              disabled={isOwnerLoading}
            >
              <MdiIcon path="filter" />
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
