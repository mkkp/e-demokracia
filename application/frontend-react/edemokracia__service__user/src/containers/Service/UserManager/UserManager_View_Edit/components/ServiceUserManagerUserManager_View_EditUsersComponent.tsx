//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/table.tsx
// Template file: actor/src/containers/components/table.tsx.hbs

import { useState, useEffect, useMemo, useRef } from 'react';
import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { Box, IconButton, Button, ButtonGroup, Typography } from '@mui/material';
import { GridToolbarContainer, GridLogicOperator } from '@mui/x-data-grid';
import type {
  GridColDef,
  GridFilterModel,
  GridRowModel,
  GridRowId,
  GridRenderCellParams,
  GridRowSelectionModel,
  GridSortItem,
  GridSortModel,
  GridValueFormatterParams,
  GridRowClassNameParams,
  GridRowParams,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { baseColumnConfig, baseTableConfig } from '~/config';
import { MdiIcon, CustomTablePagination } from '~/components';
import {
  booleanColumnOperators,
  dateColumnOperators,
  dateTimeColumnOperators,
  numericColumnOperators,
  singleSelectColumnOperators,
  stringColumnOperators,
  columnsActionCalculator,
  ContextMenu,
  StripedDataGrid,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import type {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserManager,
  ServiceUserManagerStored,
} from '~/services/data-api';
import { useL10N } from '~/l10n/l10n-context';
import {
  getUpdatedRowsSelected,
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult, TableRowAction } from '~/utilities';
import { useDataStore } from '~/hooks';
import { OBJECTCLASS } from '@pandino/pandino-api';

export interface ServiceUserManagerUserManager_View_EditUsersComponentActionDefinitions {
  serviceUserManagerUserManager_View_EditUsersAddOpenSelector?: () => Promise<void>;
  serviceUserManagerUserManager_View_EditUsersBulkDelete?: (
    selectedRows: ServiceServiceUserStored[],
  ) => Promise<DialogResult<ServiceServiceUserStored[]>>;
  serviceUserManagerUserManager_View_EditUsersBulkRemove?: (
    selectedRows: ServiceServiceUserStored[],
  ) => Promise<DialogResult<ServiceServiceUserStored[]>>;
  serviceUserManagerUserManager_View_EditUsersClear?: () => Promise<void>;
  serviceUserManagerUserManager_View_EditUsersCreateOpen?: () => Promise<void>;
  serviceUserManagerUserManager_View_EditUsersFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceUserManagerUserManager_View_EditUsersRefresh?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<ServiceServiceUserStored[]>;
  serviceUserManagerUserManager_View_EditUsersDelete?: (
    row: ServiceServiceUserStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceUserManagerUserManager_View_EditUsersRemove?: (
    row: ServiceServiceUserStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceUserManagerUserManager_View_EditUsersView?: (row: ServiceServiceUserStored) => Promise<void>;
}

export interface ServiceUserManagerUserManager_View_EditUsersComponentProps {
  uniqueId: string;
  actions: ServiceUserManagerUserManager_View_EditUsersComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceUserManager;
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

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
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

  const columns: GridColDef<ServiceServiceUserStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('service.UserManager.UserManager.View.Edit.representation', {
        defaultValue: 'Representation',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'userName',
      headerName: t('service.UserManager.UserManager.View.Edit.userName', { defaultValue: 'UserName' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'firstName',
      headerName: t('service.UserManager.UserManager.View.Edit.firstName', { defaultValue: 'FirstName' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'lastName',
      headerName: t('service.UserManager.UserManager.View.Edit.lastName', { defaultValue: 'LastName' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'phone',
      headerName: t('service.UserManager.UserManager.View.Edit.phone', { defaultValue: 'Phone' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'email',
      headerName: t('service.UserManager.UserManager.View.Edit.email', { defaultValue: 'Email' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'isAdmin',
      headerName: t('service.UserManager.UserManager.View.Edit.isAdmin', { defaultValue: 'IsAdmin' }) as string,
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
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.UserManager.UserManager.View.Edit.created', { defaultValue: 'Created' }) as string,
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

  const rowActions: TableRowAction<ServiceServiceUserStored>[] = [
    {
      id: 'User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceTableRowRemoveButton',
      label: t('service.UserManager.UserManager.View.Edit.service::UserManager::UserManager_View_Edit::users::Remove', {
        defaultValue: 'Remove',
      }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceServiceUserStored) => isLoading,
      action: actions.serviceUserManagerUserManager_View_EditUsersRemove
        ? async (rowData) => {
            await actions.serviceUserManagerUserManager_View_EditUsersRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceTableRowDeleteButton',
      label: t('service.UserManager.UserManager.View.Edit.service::UserManager::UserManager_View_Edit::users::Delete', {
        defaultValue: 'Delete',
      }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceServiceUserStored) => editMode || !row.__deleteable || isLoading,
      action: actions.serviceUserManagerUserManager_View_EditUsersDelete
        ? async (rowData) => {
            await actions.serviceUserManagerUserManager_View_EditUsersDelete!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_f8VLMH2GEe6V8KKnnZfChA',
      attributeName: 'representation',
      label: t('service.UserManager.UserManager.View.Edit.representation::Filter', {
        defaultValue: 'Representation',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_f8VyQn2GEe6V8KKnnZfChA',
      attributeName: 'userName',
      label: t('service.UserManager.UserManager.View.Edit.userName::Filter', { defaultValue: 'UserName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_f8WZUH2GEe6V8KKnnZfChA',
      attributeName: 'firstName',
      label: t('service.UserManager.UserManager.View.Edit.firstName::Filter', { defaultValue: 'FirstName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_f8WZVH2GEe6V8KKnnZfChA',
      attributeName: 'lastName',
      label: t('service.UserManager.UserManager.View.Edit.lastName::Filter', { defaultValue: 'LastName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_f8XAYn2GEe6V8KKnnZfChA',
      attributeName: 'phone',
      label: t('service.UserManager.UserManager.View.Edit.phone::Filter', { defaultValue: 'Phone' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_f8XncX2GEe6V8KKnnZfChA',
      attributeName: 'email',
      label: t('service.UserManager.UserManager.View.Edit.email::Filter', { defaultValue: 'Email' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_f8YOgH2GEe6V8KKnnZfChA',
      attributeName: 'isAdmin',
      label: t('service.UserManager.UserManager.View.Edit.isAdmin::Filter', { defaultValue: 'IsAdmin' }) as string,
      filterType: FilterType.boolean,
    },

    {
      id: '_f8YOhH2GEe6V8KKnnZfChA',
      attributeName: 'created',
      label: t('service.UserManager.UserManager.View.Edit.created::Filter', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },
  ];

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

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  async function fetchData() {
    if (!isLoading) {
      setIsLoading(true);

      try {
        const res = await actions.serviceUserManagerUserManager_View_EditUsersRefresh!(
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
    <>
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
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setSelectionModel(newRowSelectionModel);
        }}
        keepNonExistentRowsSelected
        onRowClick={
          actions.serviceUserManagerUserManager_View_EditUsersView
            ? async (params: GridRowParams<ServiceServiceUserStored>) =>
                await actions.serviceUserManagerUserManager_View_EditUsersView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceUserManagerUserManager_View_EditUsersFilter && true ? (
                <Button
                  id="User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.serviceUserManagerUserManager_View_EditUsersFilter!(
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
                  {t(
                    'service.UserManager.UserManager.View.Edit.service::UserManager::UserManager_View_Edit::users::Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceUserManagerUserManager_View_EditUsersRefresh && true ? (
                <Button
                  id="User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserManagerUserManager_View_EditUsersRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserManager.UserManager.View.Edit.service::UserManager::UserManager_View_Edit::users::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserManagerUserManager_View_EditUsersCreateOpen && true ? (
                <Button
                  id="User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserManagerUserManager_View_EditUsersCreateOpen!();
                  }}
                  disabled={editMode || isLoading}
                >
                  {t(
                    'service.UserManager.UserManager.View.Edit.service::UserManager::UserManager_View_Edit::users::Create',
                    { defaultValue: 'Create' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserManagerUserManager_View_EditUsersAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserManagerUserManager_View_EditUsersAddOpenSelector!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.UserManager.UserManager.View.Edit.service::UserManager::UserManager_View_Edit::users::Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserManagerUserManager_View_EditUsersClear && data.length ? (
                <Button
                  id="User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceUserManagerUserManager_View_EditUsersClear!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.UserManager.UserManager.View.Edit.service::UserManager::UserManager_View_Edit::users::Clear',
                    { defaultValue: 'Clear' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserManagerUserManager_View_EditUsersBulkRemove && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceUserManagerUserManager_View_EditUsersBulkRemove!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserManager.UserManager.View.Edit.service::UserManager::UserManager_View_Edit::users::BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.serviceUserManagerUserManager_View_EditUsersBulkDelete && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceUserManagerUserManager_View_EditUsersBulkDelete!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'service.UserManager.UserManager.View.Edit.service::UserManager::UserManager_View_Edit::users::BulkDelete',
                    { defaultValue: 'Delete' },
                  )}
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
      {validationError && (
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
      )}
    </>
  );
}
