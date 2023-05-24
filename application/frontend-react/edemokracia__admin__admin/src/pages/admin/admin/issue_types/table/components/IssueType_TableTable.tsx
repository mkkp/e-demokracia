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

import { AdminIssueType, AdminIssueTypeQueryCustomizer, AdminIssueTypeStored } from '~/generated/data-api';
import { adminAdminServiceForIssueTypesImpl } from '~/generated/data-axios';
import {
  usePageCreateIssueTypesAction,
  usePageFilterIssueTypesAction,
  usePageRefreshIssueTypesAction,
  useRowDeleteIssueTypesAction,
  useRowViewIssueTypesAction,
} from '../actions';

export interface IssueType_TableTableProps {
  isOwnerLoading: boolean;
  setIsOwnerLoading: (value: boolean) => void;
}

export const IssueType_TableTable = forwardRef<RefreshableTable, IssueType_TableTableProps>((props, ref) => {
  const { isOwnerLoading, setIsOwnerLoading } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );

  const [data, setData] = useState<GridRowModel<AdminIssueTypeStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'title', sort: 'asc' }]);
  const [lastItem, setLastItem] = useState<AdminIssueTypeStored>();
  const [firstItem, setFirstItem] = useState<AdminIssueTypeStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [queryCustomizer, setQueryCustomizer] = useState<AdminIssueTypeQueryCustomizer>({
    _mask: '{title,voteType,description}',
    _seek: {
      limit: 10 + 1,
    },
    _orderBy: [
      {
        attribute: sortModel[0].field,
        descending: sortModel[0].sort === 'desc',
      },
    ],
    ...mapAllFiltersToQueryCustomizerProperties(filters, 'title', 'voteType', 'description'),
  });

  const issueTypesSortModel: GridSortModel = [{ field: 'title', sort: 'asc' }];

  const issueTypesColumns: GridColDef<AdminIssueTypeStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('admin.IssueTypeTable.issueTypes.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'voteType',
      headerName: t('admin.IssueTypeTable.issueTypes.voteType', { defaultValue: 'Default vote type' }) as string,
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
      field: 'description',
      headerName: t('admin.IssueTypeTable.issueTypes.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const pageCreateIssueTypesAction = usePageCreateIssueTypesAction();
  const pageFilterIssueTypesAction = usePageFilterIssueTypesAction(
    setFilters,
    setPage,
    setQueryCustomizer,
    openFilterDialog,
  );
  const pageRefreshIssueTypesAction = usePageRefreshIssueTypesAction();
  const rowDeleteIssueTypesAction = useRowDeleteIssueTypesAction();
  const rowViewIssueTypesAction = useRowViewIssueTypesAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminIssueTypesTableDefaultIssueTypesIssueTypeTableTitleFilter',
      attributeName: 'title',
      label: t('admin.IssueTypeTable.issueTypes.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminIssueTypesTableDefaultIssueTypesIssueTypeTableVoteTypeFilter',
      attributeName: 'voteType',
      label: t('admin.IssueTypeTable.issueTypes.voteType', { defaultValue: 'Default vote type' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['YES_NO', 'YES_NO_ABSTAIN', 'SELECT_ANSWER', 'RATE', 'NO_VOTE'],
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminIssueTypesTableDefaultIssueTypesIssueTypeTableDescriptionFilter',
      attributeName: 'description',
      label: t('admin.IssueTypeTable.issueTypes.description', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },
  ];

  const rowActions: TableRowAction<AdminIssueTypeStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminAdminIssueTypesTableEdemokraciaAdminAdminEdemokraciaAdminAdminIssueTypesRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminIssueTypeStored) => rowDeleteIssueTypesAction(row, () => fetchData()),
      disabled: (row: AdminIssueTypeStored) => !row.__deleteable,
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
      const res = await adminAdminServiceForIssueTypesImpl.listIssueTypes(processQueryCustomizer(queryCustomizer));

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
        ...issueTypesColumns,
        ...columnsActionCalculator('RelationTypeedemokraciaAdminAdminEdemokraciaAdminAdminIssueTypes', rowActions, {
          shownActions: 2,
        }),
      ]}
      disableRowSelectionOnClick
      onRowClick={(params: GridRowParams<AdminIssueTypeStored>) => rowViewIssueTypesAction(params.row)}
      sortModel={sortModel}
      onSortModelChange={handleSortModelChange}
      components={{
        Toolbar: () => (
          <GridToolbarContainer>
            <Button
              id="FilterActionedemokraciaAdminAdminEdemokraciaAdminAdminIssueTypesTableEdemokraciaAdminAdminEdemokraciaAdminAdminIssueTypesPageFilter"
              variant="text"
              onClick={() => {
                pageFilterIssueTypesAction(
                  'FilterActionedemokraciaAdminAdminEdemokraciaAdminAdminIssueTypesTableEdemokraciaAdminAdminEdemokraciaAdminAdminIssueTypesPageFilter-filter',
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
