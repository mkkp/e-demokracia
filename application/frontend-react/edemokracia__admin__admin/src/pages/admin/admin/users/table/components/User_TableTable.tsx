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

import { AdminUser, AdminUserQueryCustomizer, AdminUserStored } from '~/generated/data-api';
import { adminAdminServiceForUsersImpl } from '~/generated/data-axios';
import {
  usePageFilterUsersAction,
  usePageRefreshUsersAction,
  useRowDeleteUsersAction,
  useRowViewUsersAction,
} from '../actions';

export interface User_TableTableProps {
  isOwnerLoading: boolean;
  setIsOwnerLoading: (value: boolean) => void;
}

export const User_TableTable = forwardRef<RefreshableTable, User_TableTableProps>((props, ref) => {
  const { isOwnerLoading, setIsOwnerLoading } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );

  const [data, setData] = useState<GridRowModel<AdminUserStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'userName', sort: 'asc' }]);
  const [lastItem, setLastItem] = useState<AdminUserStored>();
  const [firstItem, setFirstItem] = useState<AdminUserStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [queryCustomizer, setQueryCustomizer] = useState<AdminUserQueryCustomizer>({
    _mask: '{userName,isAdmin,firstName,lastName,phone,email,created}',
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
      'userName',
      'isAdmin',
      'firstName',
      'lastName',
      'phone',
      'email',
      'created',
    ),
  });

  const usersSortModel: GridSortModel = [{ field: 'userName', sort: 'asc' }];

  const usersColumns: GridColDef<AdminUserStored>[] = [
    {
      ...baseColumnConfig,
      field: 'userName',
      headerName: t('admin.UserTable.users.userName', { defaultValue: 'Username' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'isAdmin',
      headerName: t('admin.UserTable.users.isAdmin', { defaultValue: 'Has admin access' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'boolean',
      align: 'center',
      renderCell: (params: GridRenderCellParams<any, AdminUserStored>) => {
        return params.row.isAdmin ? (
          <MdiIcon path="check-circle" color="green" />
        ) : (
          <MdiIcon path="close-circle" color="red" />
        );
      },
    },
    {
      ...baseColumnConfig,
      field: 'firstName',
      headerName: t('admin.UserTable.users.firstName', { defaultValue: 'First name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'lastName',
      headerName: t('admin.UserTable.users.lastName', { defaultValue: 'Last name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'phone',
      headerName: t('admin.UserTable.users.phone', { defaultValue: 'Phone' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'email',
      headerName: t('admin.UserTable.users.email', { defaultValue: 'Email' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('admin.UserTable.users.created', { defaultValue: 'Created' }) as string,
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
  ];

  const pageFilterUsersAction = usePageFilterUsersAction(setFilters, setPage, setQueryCustomizer, openFilterDialog);
  const pageRefreshUsersAction = usePageRefreshUsersAction();
  const rowDeleteUsersAction = useRowDeleteUsersAction();
  const rowViewUsersAction = useRowViewUsersAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUsersTableDefaultUsersUserTableUserNameFilter',
      attributeName: 'userName',
      label: t('admin.UserTable.users.userName', { defaultValue: 'Username' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUsersTableDefaultUsersUserTableIsAdminFilter',
      attributeName: 'isAdmin',
      label: t('admin.UserTable.users.isAdmin', { defaultValue: 'Has admin access' }) as string,
      filterType: FilterType.boolean,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUsersTableDefaultUsersUserTableFirstNameFilter',
      attributeName: 'firstName',
      label: t('admin.UserTable.users.firstName', { defaultValue: 'First name' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUsersTableDefaultUsersUserTableLastNameFilter',
      attributeName: 'lastName',
      label: t('admin.UserTable.users.lastName', { defaultValue: 'Last name' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUsersTableDefaultUsersUserTablePhoneFilter',
      attributeName: 'phone',
      label: t('admin.UserTable.users.phone', { defaultValue: 'Phone' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUsersTableDefaultUsersUserTableEmailFilter',
      attributeName: 'email',
      label: t('admin.UserTable.users.email', { defaultValue: 'Email' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminUsersTableDefaultUsersUserTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.UserTable.users.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },
  ];

  const rowActions: TableRowAction<AdminUserStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminAdminUsersTableEdemokraciaAdminAdminEdemokraciaAdminAdminUsersRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminUserStored) => rowDeleteUsersAction(row, () => fetchData()),
      disabled: (row: AdminUserStored) => !row.__deleteable,
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
      const res = await adminAdminServiceForUsersImpl.listUsers(processQueryCustomizer(queryCustomizer));

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
        ...usersColumns,
        ...columnsActionCalculator('RelationTypeedemokraciaAdminAdminEdemokraciaAdminAdminUsers', rowActions, {
          shownActions: 2,
        }),
      ]}
      disableRowSelectionOnClick
      onRowClick={(params: GridRowParams<AdminUserStored>) => rowViewUsersAction(params.row)}
      sortModel={sortModel}
      onSortModelChange={handleSortModelChange}
      components={{
        Toolbar: () => (
          <GridToolbarContainer>
            <Button
              id="FilterActionedemokraciaAdminAdminEdemokraciaAdminAdminUsersTableEdemokraciaAdminAdminEdemokraciaAdminAdminUsersPageFilter"
              variant="text"
              onClick={() => {
                pageFilterUsersAction(
                  'FilterActionedemokraciaAdminAdminEdemokraciaAdminAdminUsersTableEdemokraciaAdminAdminEdemokraciaAdminAdminUsersPageFilter-filter',
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
