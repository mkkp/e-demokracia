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
  AdminUser,
  AdminUserManager,
  AdminUserManagerStored,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminUserManagerServiceForClassImpl, adminUserServiceForClassImpl } from '~/generated/data-axios';
import { usePageFilterUsersAction, usePageRefreshUsersAction, useRowViewUsersAction } from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_USER_MANAGER_USERS_TABLE_USER_TABLE = 'AdminUserManagerUsersTableUser_Table';

export interface User_TableTableProps {
  ownerData: JudoIdentifiable<AdminUserManager>;
  isOwnerLoading: boolean;
  setIsOwnerLoading: (value: boolean) => void;
}

export const User_TableTable = forwardRef<RefreshableTable, User_TableTableProps>((props, ref) => {
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

  const [data, setData] = useState<GridRowModel<AdminUserStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'userName', sort: null }]);
  const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTable-${__identifier}-filterModel`;
  const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTable-${__identifier}-filters`;
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [lastItem, setLastItem] = useState<AdminUserStored>();
  const [firstItem, setFirstItem] = useState<AdminUserStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [queryCustomizer, setQueryCustomizer] = useState<AdminUserQueryCustomizer>({
    _mask: '{userName,isAdmin,firstName,lastName,phone,email,created}',
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
  const selectedRows = useRef<AdminUserStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  useEffect(() => {
    setFilters(
      getItemParsedWithDefault(
        `TableedemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTable-${__identifier}-filters`,
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

  const usersSortModel: GridSortModel = [{ field: 'userName', sort: null }];

  const usersColumns: GridColDef<AdminUserStored>[] = [
    {
      ...baseColumnConfig,
      field: 'userName',
      headerName: t('admin.UserTable.users.userName', { defaultValue: 'Username' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'isAdmin',
      headerName: t('admin.UserTable.users.isAdmin', { defaultValue: 'Has admin access' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'boolean',
      filterable: false && true,
      align: 'center',
      renderCell: (params: GridRenderCellParams<any, AdminUserStored>) => {
        if (params.row.isAdmin === null || params.row.isAdmin === undefined) {
          return <MdiIcon className="undefined" path="minus" color="#ddd" />;
        } else if (params.row.isAdmin) {
          return <MdiIcon className="true" path="check-circle" color="green" />;
        }
        return <MdiIcon className="false" path="close-circle" color="red" />;
      },
    },
    {
      ...baseColumnConfig,
      field: 'firstName',
      headerName: t('admin.UserTable.users.firstName', { defaultValue: 'First name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'lastName',
      headerName: t('admin.UserTable.users.lastName', { defaultValue: 'Last name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'phone',
      headerName: t('admin.UserTable.users.phone', { defaultValue: 'Phone' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'email',
      headerName: t('admin.UserTable.users.email', { defaultValue: 'Email' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('admin.UserTable.users.created', { defaultValue: 'Created' }) as string,
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

  const usersRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTableUserNameFilter',
      attributeName: 'userName',
      label: t('admin.UserTable.users.userName', { defaultValue: 'Username' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTableIsAdminFilter',
      attributeName: 'isAdmin',
      label: t('admin.UserTable.users.isAdmin', { defaultValue: 'Has admin access' }) as string,
      filterType: FilterType.boolean,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTableFirstNameFilter',
      attributeName: 'firstName',
      label: t('admin.UserTable.users.firstName', { defaultValue: 'First name' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTableLastNameFilter',
      attributeName: 'lastName',
      label: t('admin.UserTable.users.lastName', { defaultValue: 'Last name' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTablePhoneFilter',
      attributeName: 'phone',
      label: t('admin.UserTable.users.phone', { defaultValue: 'Phone' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTableEmailFilter',
      attributeName: 'email',
      label: t('admin.UserTable.users.email', { defaultValue: 'Email' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.UserTable.users.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },
  ];

  const usersInitialQueryCustomizer: AdminUserQueryCustomizer = {
    _mask: '{userName,isAdmin,firstName,lastName,phone,email,created}',
    _orderBy: usersSortModel.length
      ? [
          {
            attribute: usersSortModel[0].field,
            descending: usersSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageFilterUsersAction = usePageFilterUsersAction(setFilters, setPage, setQueryCustomizer, openFilterDialog, 10);
  const pageRefreshUsersAction = usePageRefreshUsersAction();
  const rowViewUsersAction = useRowViewUsersAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTableUserNameFilter',
      attributeName: 'userName',
      label: t('admin.UserTable.users.userName', { defaultValue: 'Username' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTableIsAdminFilter',
      attributeName: 'isAdmin',
      label: t('admin.UserTable.users.isAdmin', { defaultValue: 'Has admin access' }) as string,
      filterType: FilterType.boolean,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTableFirstNameFilter',
      attributeName: 'firstName',
      label: t('admin.UserTable.users.firstName', { defaultValue: 'First name' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTableLastNameFilter',
      attributeName: 'lastName',
      label: t('admin.UserTable.users.lastName', { defaultValue: 'Last name' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTablePhoneFilter',
      attributeName: 'phone',
      label: t('admin.UserTable.users.phone', { defaultValue: 'Phone' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTableEmailFilter',
      attributeName: 'email',
      label: t('admin.UserTable.users.email', { defaultValue: 'Email' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableDefaultUsersUserTableCreatedFilter',
      attributeName: 'created',
      label: t('admin.UserTable.users.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },
  ];

  const rowActions: TableRowAction<AdminUserStored>[] = [];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);

    setQueryCustomizer((prevQueryCustomizer: AdminUserQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of usersColumns.map((c) => c.field)) {
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
      const strippedQueryCustomizer: AdminUserQueryCustomizer = {
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
      const res = await adminUserManagerServiceForClassImpl.getUsers(
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
          ...usersColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserManagerUsers',
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
        onRowClick={(params: GridRowParams<AdminUserStored>) =>
          rowViewUsersAction(ownerData, params.row, () => fetchData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterActionedemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableEdemokraciaAdminAdminEdemokraciaAdminUserManagerUsersPageFilter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  pageFilterUsersAction(
                    'FilterActionedemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableEdemokraciaAdminAdminEdemokraciaAdminUserManagerUsersPageFilter-filter',
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
