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

import { Box, Typography } from '@mui/material';
import {
  AdminUser,
  AdminUserManager,
  AdminUserManagerQueryCustomizer,
  AdminUserManagerStored,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminUserManagerServiceForClassImpl, adminUserServiceForClassImpl } from '~/generated/data-axios';
import {
  usePageRefreshAdminUserManagerAction,
  useRowViewUsersAction,
  useTableActionUsersAction,
  useTableRefreshRelationUsersAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_ADMIN_ADMIN_USER_MANAGER_VIEW_USERS = 'AdminAdminAdminUserManagerViewUsers';

export interface UsersTableProps {
  ownerData: JudoIdentifiable<AdminUserManager>;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminUserManagerStored, value: any) => void;
  refreshCounter: number;
  validation: Map<keyof AdminUserManager, string>;
}

export const UsersTable = forwardRef<RefreshableTable, UsersTableProps>((props, ref) => {
  const { getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { ownerData, fetchOwnerData, editMode, isFormUpdateable, refreshCounter } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const openCRUDDialog = useCRUDDialog();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<AdminUserStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'representation', sort: null }]);
  const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsers-${ownerData.__signedIdentifier}-filterModel`;
  const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsers-${ownerData.__signedIdentifier}-filters`;
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [lastItem, setLastItem] = useState<AdminUserStored>();
  const [firstItem, setFirstItem] = useState<AdminUserStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [queryCustomizer, setQueryCustomizer] = useState<AdminUserQueryCustomizer>({
    _mask: '{representation,userName,firstName,lastName,phone,email,isAdmin,created}',
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

  const usersSortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const usersColumns: GridColDef<AdminUserStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.UserManagerView.users.representation', { defaultValue: 'Representation' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'userName',
      headerName: t('admin.UserManagerView.users.userName', { defaultValue: 'UserName' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'firstName',
      headerName: t('admin.UserManagerView.users.firstName', { defaultValue: 'FirstName' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'lastName',
      headerName: t('admin.UserManagerView.users.lastName', { defaultValue: 'LastName' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'phone',
      headerName: t('admin.UserManagerView.users.phone', { defaultValue: 'Phone' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'email',
      headerName: t('admin.UserManagerView.users.email', { defaultValue: 'Email' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'isAdmin',
      headerName: t('admin.UserManagerView.users.isAdmin', { defaultValue: 'IsAdmin' }) as string,
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
      field: 'created',
      headerName: t('admin.UserManagerView.users.created', { defaultValue: 'Created' }) as string,
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
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.UserManagerView.users.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersUserNameFilter',
      attributeName: 'userName',
      label: t('admin.UserManagerView.users.userName', { defaultValue: 'UserName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersFirstNameFilter',
      attributeName: 'firstName',
      label: t('admin.UserManagerView.users.firstName', { defaultValue: 'FirstName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersLastNameFilter',
      attributeName: 'lastName',
      label: t('admin.UserManagerView.users.lastName', { defaultValue: 'LastName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersPhoneFilter',
      attributeName: 'phone',
      label: t('admin.UserManagerView.users.phone', { defaultValue: 'Phone' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersEmailFilter',
      attributeName: 'email',
      label: t('admin.UserManagerView.users.email', { defaultValue: 'Email' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersIsAdminFilter',
      attributeName: 'isAdmin',
      label: t('admin.UserManagerView.users.isAdmin', { defaultValue: 'IsAdmin' }) as string,
      filterType: FilterType.boolean,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersCreatedFilter',
      attributeName: 'created',
      label: t('admin.UserManagerView.users.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },
  ];

  const usersInitialQueryCustomizer: AdminUserQueryCustomizer = {
    _mask: '{representation,userName,firstName,lastName,phone,email,isAdmin,created}',
    _orderBy: usersSortModel.length
      ? [
          {
            attribute: usersSortModel[0].field,
            descending: usersSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageRefreshAdminUserManagerAction = usePageRefreshAdminUserManagerAction();
  const rowViewUsersAction = useRowViewUsersAction();
  const tableActionUsersAction = useTableActionUsersAction(
    setFilters,
    setPage,
    setQueryCustomizer,
    openFilterDialog,
    10,
  );
  const tableRefreshRelationUsersAction = useTableRefreshRelationUsersAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.UserManagerView.users.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersUserNameFilter',
      attributeName: 'userName',
      label: t('admin.UserManagerView.users.userName', { defaultValue: 'UserName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersFirstNameFilter',
      attributeName: 'firstName',
      label: t('admin.UserManagerView.users.firstName', { defaultValue: 'FirstName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersLastNameFilter',
      attributeName: 'lastName',
      label: t('admin.UserManagerView.users.lastName', { defaultValue: 'LastName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersPhoneFilter',
      attributeName: 'phone',
      label: t('admin.UserManagerView.users.phone', { defaultValue: 'Phone' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersEmailFilter',
      attributeName: 'email',
      label: t('admin.UserManagerView.users.email', { defaultValue: 'Email' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersIsAdminFilter',
      attributeName: 'isAdmin',
      label: t('admin.UserManagerView.users.isAdmin', { defaultValue: 'IsAdmin' }) as string,
      filterType: FilterType.boolean,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsersCreatedFilter',
      attributeName: 'created',
      label: t('admin.UserManagerView.users.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },
  ];

  const rowActions: TableRowAction<AdminUserStored>[] = [];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

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
    if (ownerData && ownerData.__signedIdentifier) {
      setIsLoading(true);

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
        setIsLoading(false);
      }
    }
  }

  useImperativeHandle(ref, () => ({
    fetchData,
  }));

  useEffect(() => {
    fetchData();
  }, [queryCustomizer, refreshCounter]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) => (props.validation.has('users') ? `2px solid ${theme.palette.error.main}` : undefined),
        }}
        slotProps={{
          filterPanel: {
            logicOperators: [GridLogicOperator.And],
          },
        }}
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isLoading}
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
          rowViewUsersAction(ownerData, params.row, () => fetchOwnerData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterRelationActionedemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewEdemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableAction"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  tableActionUsersAction(
                    'FilterRelationActionedemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewEdemokraciaAdminAdminEdemokraciaAdminUserManagerUsersTableAction-filter',
                    filterOptions,
                    filters,
                  );
                }}
                disabled={isLoading}
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
      {props.validation.has('users') && (
        <Box
          sx={{
            color: (theme) => theme.palette.error.main,
            display: 'flex',
            alignItems: 'center',
            pl: 1,
            pr: 1,
          }}
        >
          <MdiIcon path="alert-circle-outline" sx={{ mr: 1 }} />
          <Typography>{props.validation.get('users')}</Typography>
        </Box>
      )}
    </>
  );
});
