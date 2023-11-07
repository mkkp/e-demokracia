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
import { MdiIcon } from '~/components';
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
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssueStored,
} from '~/services/data-api';
import { useL10N } from '~/l10n/l10n-context';
import {
  getUpdatedRowsSelected,
  applyInMemoryFilters,
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

export interface ServiceIssueIssue_View_EditAttachmentsComponentActionDefinitions {
  serviceIssueIssue_View_EditOtherAttachmentsAttachmentsAddOpenSelector?: () => Promise<void>;
  serviceIssueIssue_View_EditOtherAttachmentsAttachmentsBulkDelete?: (
    selectedRows: ServiceIssueAttachmentStored[],
  ) => Promise<DialogResult<ServiceIssueAttachmentStored[]>>;
  serviceIssueIssue_View_EditOtherAttachmentsAttachmentsBulkRemove?: (
    selectedRows: ServiceIssueAttachmentStored[],
  ) => Promise<DialogResult<ServiceIssueAttachmentStored[]>>;
  serviceIssueIssue_View_EditOtherAttachmentsAttachmentsClear?: () => Promise<void>;
  serviceIssueIssue_View_EditOtherAttachmentsAttachmentsCreateOpen?: () => Promise<void>;
  serviceIssueIssue_View_EditOtherAttachmentsAttachmentsFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceIssueIssue_View_EditOtherAttachmentsAttachmentsRefresh?: (
    queryCustomizer: ServiceIssueAttachmentQueryCustomizer,
  ) => Promise<ServiceIssueAttachmentStored[]>;
  serviceIssueIssue_View_EditOtherAttachmentsAttachmentsDelete?: (
    row: ServiceIssueAttachmentStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceIssueIssue_View_EditOtherAttachmentsAttachmentsRemove?: (
    row: ServiceIssueAttachmentStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceIssueIssue_View_EditOtherAttachmentsAttachmentsView?: (row: ServiceIssueAttachmentStored) => Promise<void>;
}

export interface ServiceIssueIssue_View_EditAttachmentsComponentProps {
  uniqueId: string;
  actions: ServiceIssueIssue_View_EditAttachmentsComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceIssue;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable
// Name: attachments
export function ServiceIssueIssue_View_EditAttachmentsComponent(
  props: ServiceIssueIssue_View_EditAttachmentsComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceIssueAttachmentStored>[]>(ownerData?.attachments || []);
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

  const selectedRows = useRef<ServiceIssueAttachmentStored[]>([]);

  const columns: GridColDef<ServiceIssueAttachmentStored>[] = [
    {
      ...baseColumnConfig,
      field: 'link',
      headerName: t('service.Issue.Issue.View.Edit.link', { defaultValue: 'Link' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'file',
      headerName: t('service.Issue.Issue.View.Edit.file', { defaultValue: 'File' }) as string,
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
              id="User/(esm/_6knBMId8Ee2kLcMqsIbMgQ)/TabularTable/(discriminator/User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable)-download"
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
              id="User/(esm/_6knBMId8Ee2kLcMqsIbMgQ)/TabularTable/(discriminator/User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable)-view"
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
      headerName: t('service.Issue.Issue.View.Edit.type', { defaultValue: 'Type' }) as string,
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
      id: 'User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableRowRemoveButton',
      label: t(
        'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::attachments::attachments::Remove',
        { defaultValue: 'Remove' },
      ) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceIssueAttachmentStored) => isLoading,
      action: actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsRemove
        ? async (rowData) => {
            await actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableRowDeleteButton',
      label: t(
        'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::attachments::attachments::Delete',
        { defaultValue: 'Delete' },
      ) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceIssueAttachmentStored) => editMode || !row.__deleteable || isLoading,
      action: actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsDelete
        ? async (rowData) => {
            await actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsDelete!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_fwnqcH2GEe6V8KKnnZfChA',
      attributeName: 'link',
      label: t('service.Issue.Issue.View.Edit.link::Filter', { defaultValue: 'Link' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fwoRgn2GEe6V8KKnnZfChA',
      attributeName: 'type',
      label: t('service.Issue.Issue.View.Edit.type::Filter', { defaultValue: 'Type' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['LINK', 'IMAGE', 'VIDEO', 'MAP'],
    },
  ];

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
          limit: 10 + 1,
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
      return {
        ...strippedQueryCustomizer,
        _orderBy,
      };
    });
  }

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  useEffect(() => {
    const newData = applyInMemoryFilters<ServiceIssueAttachmentStored>(filters, ownerData?.attachments ?? []);
    setData(newData);
  }, [ownerData?.attachments, filters]);

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
          ...columnsActionCalculator('User/(esm/_qXz2kGksEe25ONJ3V89cVA)/RelationType', rowActions, t, {
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
          actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsView
            ? async (params: GridRowParams<ServiceIssueAttachmentStored>) =>
                await actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsFilter && true ? (
                <Button
                  id="User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsFilter!(
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
                  {t(
                    'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::attachments::attachments::Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsRefresh && true ? (
                <Button
                  id="User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::attachments::attachments::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsCreateOpen && true ? (
                <Button
                  id="User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsCreateOpen!();
                  }}
                  disabled={editMode || isLoading}
                >
                  {t(
                    'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::attachments::attachments::Create',
                    { defaultValue: 'Create' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsAddOpenSelector!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::attachments::attachments::Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsClear && data.length ? (
                <Button
                  id="User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsClear!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::attachments::attachments::Clear',
                    { defaultValue: 'Clear' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsBulkRemove && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsBulkRemove!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::attachments::attachments::BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsBulkDelete && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceIssueIssue_View_EditOtherAttachmentsAttachmentsBulkDelete!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::attachments::attachments::BulkDelete',
                    { defaultValue: 'Delete' },
                  )}
                </Button>
              ) : null}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
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
