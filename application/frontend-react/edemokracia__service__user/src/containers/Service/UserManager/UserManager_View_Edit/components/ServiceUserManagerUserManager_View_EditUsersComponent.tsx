//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/table.tsx
// Template file: actor/src/containers/components/table.tsx.hbs

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { GridLogicOperator, GridToolbarContainer } from '@mui/x-data-grid';
import type {
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridRowClassNameParams,
  GridRowId,
  GridRowModel,
  GridRowParams,
  GridRowSelectionModel,
  GridSortItem,
  GridSortModel,
  GridValidRowModel,
  GridValueFormatterParams,
} from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomTablePagination, MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import {
  ContextMenu,
  StripedDataGrid,
  booleanColumnOperators,
  columnsActionCalculator,
  dateTimeColumnOperators,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserManager,
  ServiceUserManagerStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  serviceDateToUiDate,
  useErrorHandler,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, TableRowAction } from '~/utilities';

export interface ServiceUserManagerUserManager_View_EditUsersComponentActionDefinitions {
  usersFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  usersRefreshAction?: (queryCustomizer: ServiceServiceUserQueryCustomizer) => Promise<ServiceServiceUserStored[]>;
  usersOpenPageAction?: (row: ServiceServiceUserStored) => Promise<void>;
}

export interface ServiceUserManagerUserManager_View_EditUsersComponentProps {
  uniqueId: string;
  actions: ServiceUserManagerUserManager_View_EditUsersComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceUserManagerStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable
// Name: users
export function ServiceUserManagerUserManager_View_EditUsersComponent(
  props: ServiceUserManagerUserManager_View_EditUsersComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceServiceUserStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'representation', sort: 'asc' }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceServiceUserQueryCustomizer>({
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
  const [page, setPage] = useState<number>(0);
  const [rowCount, setRowCount] = useState<number>(0);
  const [lastItem, setLastItem] = useState<ServiceServiceUserStored>();
  const [firstItem, setFirstItem] = useState<ServiceServiceUserStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceServiceUserStored[]>([]);

  const representationColumn: GridColDef<ServiceServiceUserStored> = {
    ...baseColumnConfig,
    field: 'representation',
    headerName: t('service.UserManager.UserManager_View_Edit.representation', {
      defaultValue: 'Representation',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const userNameColumn: GridColDef<ServiceServiceUserStored> = {
    ...baseColumnConfig,
    field: 'userName',
    headerName: t('service.UserManager.UserManager_View_Edit.userName', { defaultValue: 'UserName' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const firstNameColumn: GridColDef<ServiceServiceUserStored> = {
    ...baseColumnConfig,
    field: 'firstName',
    headerName: t('service.UserManager.UserManager_View_Edit.firstName', { defaultValue: 'FirstName' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const lastNameColumn: GridColDef<ServiceServiceUserStored> = {
    ...baseColumnConfig,
    field: 'lastName',
    headerName: t('service.UserManager.UserManager_View_Edit.lastName', { defaultValue: 'LastName' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const phoneColumn: GridColDef<ServiceServiceUserStored> = {
    ...baseColumnConfig,
    field: 'phone',
    headerName: t('service.UserManager.UserManager_View_Edit.phone', { defaultValue: 'Phone' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const emailColumn: GridColDef<ServiceServiceUserStored> = {
    ...baseColumnConfig,
    field: 'email',
    headerName: t('service.UserManager.UserManager_View_Edit.email', { defaultValue: 'Email' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const isAdminColumn: GridColDef<ServiceServiceUserStored> = {
    ...baseColumnConfig,
    field: 'isAdmin',
    headerName: t('service.UserManager.UserManager_View_Edit.isAdmin', { defaultValue: 'IsAdmin' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 100,
    type: 'boolean',
    filterable: false && true,
    align: 'center',
    renderCell: (params: GridRenderCellParams<any, ServiceServiceUserStored>) => {
      if (params.row.isAdmin === null || params.row.isAdmin === undefined) {
        return <MdiIcon className="undefined" path="minus" color="#ddd" />;
      } else if (params.row.isAdmin) {
        return <MdiIcon className="true" path="check-circle" color="green" />;
      }
      return <MdiIcon className="false" path="close-circle" color="red" />;
    },
  };
  const createdColumn: GridColDef<ServiceServiceUserStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t('service.UserManager.UserManager_View_Edit.created', { defaultValue: 'Created' }) as string,
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
  };

  const columns = useMemo<GridColDef<ServiceServiceUserStored>[]>(
    () => [
      representationColumn,
      userNameColumn,
      firstNameColumn,
      lastNameColumn,
      phoneColumn,
      emailColumn,
      isAdminColumn,
      createdColumn,
    ],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceServiceUserStored>[] = [];

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_MKAvcFvVEe6jm_SkPSYEYw)/TableColumnFilter/(discriminator/User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'representation',
        label: t('service.UserManager.UserManager_View_Edit.representation', {
          defaultValue: 'Representation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_MKAIYFvVEe6jm_SkPSYEYw)/TableColumnFilter/(discriminator/User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'userName',
        label: t('service.UserManager.UserManager_View_Edit.userName', { defaultValue: 'UserName' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_MJ728FvVEe6jm_SkPSYEYw)/TableColumnFilter/(discriminator/User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'firstName',
        label: t('service.UserManager.UserManager_View_Edit.firstName', { defaultValue: 'FirstName' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_MJ9FEFvVEe6jm_SkPSYEYw)/TableColumnFilter/(discriminator/User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'lastName',
        label: t('service.UserManager.UserManager_View_Edit.lastName', { defaultValue: 'LastName' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_MJ9sIFvVEe6jm_SkPSYEYw)/TableColumnFilter/(discriminator/User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'phone',
        label: t('service.UserManager.UserManager_View_Edit.phone', { defaultValue: 'Phone' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_MJ-TMFvVEe6jm_SkPSYEYw)/TableColumnFilter/(discriminator/User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'email',
        label: t('service.UserManager.UserManager_View_Edit.email', { defaultValue: 'Email' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_MJ-6QFvVEe6jm_SkPSYEYw)/TableColumnFilter/(discriminator/User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'isAdmin',
        label: t('service.UserManager.UserManager_View_Edit.isAdmin', { defaultValue: 'IsAdmin' }) as string,
        filterType: FilterType.boolean,
      },

      {
        id: 'User/(esm/_MJ_hUFvVEe6jm_SkPSYEYw)/TableColumnFilter/(discriminator/User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'created',
        label: t('service.UserManager.UserManager_View_Edit.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },
    ],
    [l10nLocale],
  );

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceServiceUserQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of columns.map((c) => c.field)) {
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
      const strippedQueryCustomizer: ServiceServiceUserQueryCustomizer = {
        ...prevQueryCustomizer,
      };
      if (!!strippedQueryCustomizer._seek) {
        delete strippedQueryCustomizer._seek.lastItem;
      }
      // we need to reset _seek so that previous configuration is erased
      return {
        ...strippedQueryCustomizer,
        _orderBy,
        _seek: {
          limit: 10 + 1,
        },
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

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  async function fetchData() {
    if (!isLoading && ownerData.__signedIdentifier) {
      setIsLoading(true);

      try {
        const res = await actions.usersRefreshAction!(processQueryCustomizer(queryCustomizer));

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
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [queryCustomizer, refreshCounter]);

  return (
    <div id="User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable" data-table-name="users">
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[paginationModel.pageSize]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) => (validationError ? `2px solid ${theme.palette.error.main}` : undefined),
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
          ...columns,
          ...columnsActionCalculator('User/(esm/_X0EKgFvPEe6jm_SkPSYEYw)/RelationType', rowActions, t, {
            shownActions: 2,
          }),
        ]}
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        onRowClick={
          actions.usersOpenPageAction
            ? async (params: GridRowParams<ServiceServiceUserStored>) => await actions.usersOpenPageAction!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
        rowCount={10}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.usersFilterAction && true ? (
                <Button
                  id="User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.usersFilterAction!(
                      'User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceTableFilterButton',
                      filterOptions,
                      filterModel,
                      filters,
                    );
                    if (Array.isArray(filterResults.filters)) {
                      handleFiltersChange([...filterResults.filters!]);
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('service.UserManager.UserManager_View_Edit.users.Filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.usersRefreshAction && true ? (
                <Button
                  id="User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.usersRefreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.UserManager.UserManager_View_Edit.users.Refresh', { defaultValue: 'Refresh' })}
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
      {validationError ? (
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
          <Typography>{validationError}</Typography>
        </Box>
      ) : null}
    </div>
  );
}
