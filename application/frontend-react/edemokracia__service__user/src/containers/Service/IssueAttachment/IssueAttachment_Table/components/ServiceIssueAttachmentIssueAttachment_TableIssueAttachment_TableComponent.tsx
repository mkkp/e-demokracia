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
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
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

export interface ServiceIssueAttachmentIssueAttachment_TableIssueAttachment_TableComponentActionDefinitions {
  serviceIssueAttachmentIssueAttachment_TableAddOpenSelector?: () => Promise<void>;
  serviceIssueAttachmentIssueAttachment_TableBulkDelete?: (
    selectedRows: ServiceIssueAttachmentStored[],
  ) => Promise<DialogResult<ServiceIssueAttachmentStored[]>>;
  serviceIssueAttachmentIssueAttachment_TableBulkRemove?: (
    selectedRows: ServiceIssueAttachmentStored[],
  ) => Promise<DialogResult<ServiceIssueAttachmentStored[]>>;
  serviceIssueAttachmentIssueAttachment_TableClear?: () => Promise<void>;
  serviceIssueAttachmentIssueAttachment_TableCreateOpen?: () => Promise<void>;
  serviceIssueAttachmentIssueAttachment_TableTableFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceIssueAttachmentIssueAttachment_TableTableRefresh?: (
    queryCustomizer: ServiceIssueAttachmentQueryCustomizer,
  ) => Promise<ServiceIssueAttachmentStored[]>;
  serviceIssueAttachmentIssueAttachment_TableDelete?: (
    row: ServiceIssueAttachmentStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceIssueAttachmentIssueAttachment_TableRemove?: (
    row: ServiceIssueAttachmentStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceIssueAttachmentIssueAttachment_TableView?: (row: ServiceIssueAttachmentStored) => Promise<void>;
}

export interface ServiceIssueAttachmentIssueAttachment_TableIssueAttachment_TableComponentProps {
  uniqueId: string;
  actions: ServiceIssueAttachmentIssueAttachment_TableIssueAttachment_TableComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
}

// XMIID: User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableTable
// Name: IssueAttachment_Table
export function ServiceIssueAttachmentIssueAttachment_TableIssueAttachment_TableComponent(
  props: ServiceIssueAttachmentIssueAttachment_TableIssueAttachment_TableComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError } = props;
  const filterModelKey = `User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceIssueAttachmentStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'link', sort: 'asc' }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceIssueAttachmentQueryCustomizer>({
    _mask: '{link,file,type}',
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
  const [lastItem, setLastItem] = useState<ServiceIssueAttachmentStored>();
  const [firstItem, setFirstItem] = useState<ServiceIssueAttachmentStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceIssueAttachmentStored[]>([]);

  const columns: GridColDef<ServiceIssueAttachmentStored>[] = [
    {
      ...baseColumnConfig,
      field: 'link',
      headerName: t('service.IssueAttachment.IssueAttachment.Table.link', { defaultValue: 'Link' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'file',
      headerName: t('service.IssueAttachment.IssueAttachment.Table.file', { defaultValue: 'File' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && false,
      sortable: false,
      align: 'center',
      renderCell: (params: GridRenderCellParams<any, ServiceIssueAttachmentStored>) => {
        return params.row.file ? (
          <ButtonGroup size="small" variant="outlined">
            <Button
              id="User/(esm/_Rd-RkG5CEe2Q6M99rsfqSQ)/TabularTable/(discriminator/User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableTable)-download"
              startIcon={<MdiIcon path="file-document-outline" mimeType={{ type: '*', subType: '*' }} />}
              onClick={(event: any) => {
                event.preventDefault();
                event.stopPropagation();
                downloadFile(params.row, 'file', 'attachment');
              }}
            >
              {extractFileNameFromToken(params.row.file)}
            </Button>
            <Button
              id="User/(esm/_Rd-RkG5CEe2Q6M99rsfqSQ)/TabularTable/(discriminator/User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableTable)-view"
              onClick={(event: any) => {
                event.preventDefault();
                event.stopPropagation();
                downloadFile(params.row, 'file', 'inline');
              }}
            >
              <MdiIcon path="eye" sx={{ mr: 0.5 }} />
            </Button>
          </ButtonGroup>
        ) : (
          <MdiIcon path="minus" />
        );
      },
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
    {
      ...baseColumnConfig,
      field: 'type',
      headerName: t('service.IssueAttachment.IssueAttachment.Table.type', { defaultValue: 'Type' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'singleSelect',
      filterable: false && true,
      sortable: false,
      valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
        if (value !== undefined && value !== null) {
          return t(`enumerations.AttachmentType.${value}`, { defaultValue: value });
        }
      },
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
  ];

  const rowActions: TableRowAction<ServiceIssueAttachmentStored>[] = [
    {
      id: 'User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableRowRemoveButton',
      label: t(
        'service.IssueAttachment.IssueAttachment.Table.service::IssueAttachment::IssueAttachment_Table::Remove',
        { defaultValue: 'Remove' },
      ) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceIssueAttachmentStored) => isLoading,
      action: actions.serviceIssueAttachmentIssueAttachment_TableRemove
        ? async (rowData) => {
            await actions.serviceIssueAttachmentIssueAttachment_TableRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableRowDeleteButton',
      label: t(
        'service.IssueAttachment.IssueAttachment.Table.service::IssueAttachment::IssueAttachment_Table::Delete',
        { defaultValue: 'Delete' },
      ) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceIssueAttachmentStored) => !row.__deleteable || isLoading,
      action: actions.serviceIssueAttachmentIssueAttachment_TableDelete
        ? async (rowData) => {
            await actions.serviceIssueAttachmentIssueAttachment_TableDelete!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_gCQ0En2GEe6V8KKnnZfChA',
      attributeName: 'link',
      label: t('service.IssueAttachment.IssueAttachment.Table.link::Filter', { defaultValue: 'Link' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_gCSCMH2GEe6V8KKnnZfChA',
      attributeName: 'type',
      label: t('service.IssueAttachment.IssueAttachment.Table.type::Filter', { defaultValue: 'Type' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['LINK', 'IMAGE', 'VIDEO', 'MAP'],
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceIssueAttachmentQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceIssueAttachmentQueryCustomizer = {
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
        const res = await actions.serviceIssueAttachmentIssueAttachment_TableTableRefresh!(
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
          ...columnsActionCalculator('User/(esm/_p5aDVGksEe25ONJ3V89cVA)/ClassType', rowActions, t, {
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
          actions.serviceIssueAttachmentIssueAttachment_TableView
            ? async (params: GridRowParams<ServiceIssueAttachmentStored>) =>
                await actions.serviceIssueAttachmentIssueAttachment_TableView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceIssueAttachmentIssueAttachment_TableTableFilter && true ? (
                <Button
                  id="User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.serviceIssueAttachmentIssueAttachment_TableTableFilter!(
                      'User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableTableFilterButton',
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
                    'service.IssueAttachment.IssueAttachment.Table.service::IssueAttachment::IssueAttachment_Table::Table::Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceIssueAttachmentIssueAttachment_TableTableRefresh && true ? (
                <Button
                  id="User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueAttachmentIssueAttachment_TableTableRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.IssueAttachment.IssueAttachment.Table.service::IssueAttachment::IssueAttachment_Table::Table::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueAttachmentIssueAttachment_TableCreateOpen && true ? (
                <Button
                  id="User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueAttachmentIssueAttachment_TableCreateOpen!();
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.IssueAttachment.IssueAttachment.Table.service::IssueAttachment::IssueAttachment_Table::Create',
                    { defaultValue: 'Create' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueAttachmentIssueAttachment_TableAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueAttachmentIssueAttachment_TableAddOpenSelector!();
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.IssueAttachment.IssueAttachment.Table.service::IssueAttachment::IssueAttachment_Table::Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueAttachmentIssueAttachment_TableClear && data.length ? (
                <Button
                  id="User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueAttachmentIssueAttachment_TableClear!();
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.IssueAttachment.IssueAttachment.Table.service::IssueAttachment::IssueAttachment_Table::Clear',
                    { defaultValue: 'Clear' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueAttachmentIssueAttachment_TableBulkRemove && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceIssueAttachmentIssueAttachment_TableBulkRemove!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.IssueAttachment.IssueAttachment.Table.service::IssueAttachment::IssueAttachment_Table::BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueAttachmentIssueAttachment_TableBulkDelete && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceIssueAttachmentIssueAttachment_TableBulkDelete!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'service.IssueAttachment.IssueAttachment.Table.service::IssueAttachment::IssueAttachment_Table::BulkDelete',
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
