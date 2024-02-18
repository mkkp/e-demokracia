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
import { GridLogicOperator, GridToolbarContainer, useGridApiRef } from '@mui/x-data-grid';
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
import type { Dispatch, ElementType, MouseEvent, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import { ContextMenu, StripedDataGrid, columnsActionCalculator, singleSelectColumnOperators } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, basePageSizeOptions, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import type {
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssueStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  applyInMemoryFilters,
  fileHandling,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, TableRowAction } from '~/utilities';

export interface ServiceIssueIssue_View_EditAttachmentsComponentActionDefinitions {
  attachmentsBulkDeleteAction?: (
    selectedRows: ServiceIssueAttachmentStored[],
  ) => Promise<DialogResult<ServiceIssueAttachmentStored[]>>;
  attachmentsBulkRemoveAction?: (
    selectedRows: ServiceIssueAttachmentStored[],
  ) => Promise<DialogResult<ServiceIssueAttachmentStored[]>>;
  attachmentsOpenCreateFormAction?: () => Promise<void>;
  attachmentsFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  attachmentsRefreshAction?: (
    queryCustomizer: ServiceIssueAttachmentQueryCustomizer,
  ) => Promise<JudoRestResponse<ServiceIssueAttachmentStored[]>>;
  getAttachmentsMask?: () => string;
  attachmentsDeleteAction?: (row: ServiceIssueAttachmentStored, silentMode?: boolean) => Promise<void>;
  attachmentsRemoveAction?: (row: ServiceIssueAttachmentStored, silentMode?: boolean) => Promise<void>;
  attachmentsOpenPageAction?: (row: ServiceIssueAttachmentStored, isDraft?: boolean) => Promise<void>;
  attachmentsAdditionalToolbarButtons?: (
    data: ServiceIssueAttachmentStored[],
    isLoading: boolean,
    selectedRows: ServiceIssueAttachmentStored[],
    clearSelections: () => void,
    ownerData: ServiceIssueStored,
    editMode: boolean,
    isFormUpdateable: () => boolean,
  ) => Record<string, ElementType>;
}

export interface ServiceIssueIssue_View_EditAttachmentsComponentProps {
  uniqueId: string;
  actions: ServiceIssueIssue_View_EditAttachmentsComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
  validationError?: string;
  ownerData: ServiceIssueStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable
// Name: attachments
export function ServiceIssueIssue_View_EditAttachmentsComponent(
  props: ServiceIssueIssue_View_EditAttachmentsComponentProps,
) {
  const {
    uniqueId,
    actions,
    refreshCounter,
    isOwnerLoading,
    isDraft,
    validationError,
    ownerData,
    editMode,
    isFormUpdateable,
  } = props;
  const apiRef = useGridApiRef();
  const filterModelKey = `User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;
  const rowsPerPageKey = `User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-rowsPerPage`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceIssueAttachmentStored>[]>(ownerData?.attachments || []);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'link', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [rowsPerPage, setRowsPerPage] = useState<number>(getItemParsedWithDefault(rowsPerPageKey, 10));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: rowsPerPage,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceIssueAttachmentQueryCustomizer>({
    _mask: '{file,link,type}',
    _seek: {
      limit: rowsPerPage + 1,
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

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const selectedRows = useRef<ServiceIssueAttachmentStored[]>([]);

  const linkColumn: GridColDef<ServiceIssueAttachmentStored> = {
    ...baseColumnConfig,
    field: 'link',
    headerName: t('service.Issue.Issue_View_Edit.attachments.link', { defaultValue: 'Link' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const fileColumn: GridColDef<ServiceIssueAttachmentStored> = {
    ...baseColumnConfig,
    field: 'file',
    headerName: t('service.Issue.Issue_View_Edit.attachments.file', { defaultValue: 'File' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 500,
    type: 'string',
    filterable: false && false,
    sortable: false,
    align: 'center',
    renderCell: (params: GridRenderCellParams<any, ServiceIssueAttachmentStored>) => {
      return params.row.file ? (
        <ButtonGroup size="small" variant="outlined">
          <Button
            id="User/(esm/_6knBMId8Ee2kLcMqsIbMgQ)/TableColumn/(discriminator/User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable)-download"
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
            id="User/(esm/_6knBMId8Ee2kLcMqsIbMgQ)/TableColumn/(discriminator/User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable)-view"
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
    description: t('judo.pages.table.column.not-sortable', { defaultValue: 'This column is not sortable.' }) as string,
  };
  const typeColumn: GridColDef<ServiceIssueAttachmentStored> = {
    ...baseColumnConfig,
    field: 'type',
    headerName: t('service.Issue.Issue_View_Edit.attachments.type', { defaultValue: 'Type' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.AttachmentType.${value}`, { defaultValue: value });
      }
    },
  };

  const columns = useMemo<GridColDef<ServiceIssueAttachmentStored>[]>(() => [linkColumn, fileColumn, typeColumn], []);

  const rowActions: TableRowAction<ServiceIssueAttachmentStored>[] = useMemo(
    () => [
      {
        id: 'User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableRowRemoveButton',
        label: t('judo.action.remove', { defaultValue: 'Remove' }) as string,
        icon: <MdiIcon path="link_off" />,
        isCRUD: true,
        disabled: (row: ServiceIssueAttachmentStored) => isLoading,
        action: actions.attachmentsRemoveAction
          ? async (rowData) => {
              await actions.attachmentsRemoveAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableRowDeleteButton',
        label: t('judo.action.delete', { defaultValue: 'Delete' }) as string,
        icon: <MdiIcon path="delete_forever" />,
        isCRUD: true,
        disabled: (row: ServiceIssueAttachmentStored) =>
          getSelectedRows().length > 0 || editMode || !row.__deleteable || isLoading,
        action: actions.attachmentsDeleteAction
          ? async (rowData) => {
              await actions.attachmentsDeleteAction!(rowData);
            }
          : undefined,
      },
    ],
    [actions, isLoading],
  );

  const effectiveTableColumns = useMemo(() => {
    const cols = [
      ...columns,
      ...columnsActionCalculator('User/(esm/_qXz2kGksEe25ONJ3V89cVA)/RelationType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ];
    return cols;
  }, [columns, rowActions]);

  const getRowIdentifier: (row: Pick<ServiceIssueAttachmentStored, '__identifier'>) => string = (row) =>
    row.__identifier!;

  const getSelectedRows: () => ServiceIssueAttachmentStored[] = () => {
    return selectedRows.current;
  };

  const clearSelections = () => {
    handleOnSelection([]);
  };

  const additionalToolbarActions: Record<string, ElementType> = actions?.attachmentsAdditionalToolbarButtons
    ? actions.attachmentsAdditionalToolbarButtons(
        data,
        isLoading,
        getSelectedRows(),
        clearSelections,
        ownerData,
        editMode,
        isFormUpdateable,
      )
    : {};
  const AdditionalToolbarActions = () => {
    return (
      <>
        {Object.keys(additionalToolbarActions).map((key) => {
          const AdditionalButton = additionalToolbarActions[key];
          return <AdditionalButton key={key} />;
        })}
      </>
    );
  };

  const pageSizeOptions = useMemo(() => {
    const opts: Set<number> = new Set([rowsPerPage, ...basePageSizeOptions]);
    return Array.from(opts.values()).sort((a, b) => a - b);
  }, [rowsPerPage]);

  const setPageSize = useCallback((newValue: number) => {
    setRowsPerPage(newValue);
    setItemStringified(rowsPerPageKey, newValue);
    setPaginationModel((prevState) => ({
      ...prevState,
      pageSize: newValue,
      page: 0,
    }));

    setQueryCustomizer((prevQueryCustomizer: ServiceIssueAttachmentQueryCustomizer) => {
      // we need to reset _seek so that previous configuration is erased
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: newValue + 1,
        },
      };
    });
  }, []);

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_6kmaIYd8Ee2kLcMqsIbMgQ)/TableColumnFilter/(discriminator/User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'link',
        label: t('service.Issue.Issue_View_Edit.link', { defaultValue: 'Link' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_6knBMYd8Ee2kLcMqsIbMgQ)/TableColumnFilter/(discriminator/User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'type',
        label: t('service.Issue.Issue_View_Edit.type', { defaultValue: 'Type' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['LINK', 'IMAGE', 'VIDEO', 'MAP'],
      },
    ],
    [],
  );

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPaginationModel((prevState) => ({
      ...prevState,
      page: 0,
    }));
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
          limit: rowsPerPage + 1,
        },
        ...mapAllFiltersToQueryCustomizerProperties(newFilters),
      };
    });
  };

  function handleSortModelChange(newModel: GridSortModel) {
    setPaginationModel((prevState) => ({
      ...prevState,
      page: 0,
    }));
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
      // we need to reset _seek so that previous configuration is erased
      return {
        ...strippedQueryCustomizer,
        _orderBy,
        _seek: {
          limit: rowsPerPage + 1,
        },
      };
    });
  }

  const handleOnSelection = (newSelectionModel: GridRowSelectionModel) => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, newSelectionModel);
    setSelectionModel(selectedRows.current.map(getRowIdentifier));
  };

  useEffect(() => {
    const newData = applyInMemoryFilters<ServiceIssueAttachmentStored>(filters, ownerData?.attachments ?? []);
    setData(newData);
    handleOnSelection(selectionModel);
  }, [ownerData?.attachments, filters]);

  return (
    <div
      id="User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable"
      data-table-name="attachments"
    >
      <StripedDataGrid
        apiRef={apiRef}
        {...baseTableConfig}
        pageSizeOptions={pageSizeOptions}
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
        getRowId={getRowIdentifier}
        loading={isLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={effectiveTableColumns}
        disableRowSelectionOnClick
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={handleOnSelection}
        keepNonExistentRowsSelected
        onRowClick={
          actions.attachmentsOpenPageAction
            ? async (params: GridRowParams<ServiceIssueAttachmentStored>) =>
                await actions.attachmentsOpenPageAction!(params.row, false)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.attachmentsFilterAction && true ? (
                <Button
                  id="User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.attachmentsFilterAction!(
                      'User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableFilterButton',
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
                  {t('judo.action.filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.attachmentsRefreshAction && true ? (
                <Button
                  id="User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getAttachmentsMask ? actions.getAttachmentsMask() : queryCustomizer._mask,
                    };
                    await actions.attachmentsRefreshAction!(processedQueryCustomizer);
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.attachmentsOpenCreateFormAction && true ? (
                <Button
                  id="User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getAttachmentsMask ? actions.getAttachmentsMask() : queryCustomizer._mask,
                    };
                    await actions.attachmentsOpenCreateFormAction!();
                  }}
                  disabled={false}
                >
                  {t('judo.action.open-create-form', { defaultValue: 'Create' })}
                </Button>
              ) : null}
              {actions.attachmentsBulkRemoveAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getAttachmentsMask ? actions.getAttachmentsMask() : queryCustomizer._mask,
                    };
                    const { result: bulkResult } = await actions.attachmentsBulkRemoveAction!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      handleOnSelection([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.bulk-remove', { defaultValue: 'Remove' })}
                </Button>
              ) : null}
              {actions.attachmentsBulkDeleteAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getAttachmentsMask ? actions.getAttachmentsMask() : queryCustomizer._mask,
                    };
                    const { result: bulkResult } = await actions.attachmentsBulkDeleteAction!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      handleOnSelection([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('judo.action.bulk-delete', { defaultValue: 'Delete' })}
                </Button>
              ) : null}
              {<AdditionalToolbarActions />}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
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
