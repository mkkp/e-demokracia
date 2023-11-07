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
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServiceIssue,
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

export interface ServiceIssueIssue_View_EditCommentsComponentActionDefinitions {
  serviceIssueIssue_View_EditOtherCommentsActionsCommentsAddOpenSelector?: () => Promise<void>;
  serviceIssueIssue_View_EditOtherCommentsActionsCommentsBulkDelete?: (
    selectedRows: ServiceCommentStored[],
  ) => Promise<DialogResult<ServiceCommentStored[]>>;
  serviceIssueIssue_View_EditOtherCommentsActionsCommentsBulkRemove?: (
    selectedRows: ServiceCommentStored[],
  ) => Promise<DialogResult<ServiceCommentStored[]>>;
  serviceIssueIssue_View_EditOtherCommentsActionsCommentsClear?: () => Promise<void>;
  serviceIssueIssue_View_EditOtherCommentsActionsCommentsCreateOpen?: () => Promise<void>;
  serviceIssueIssue_View_EditOtherCommentsActionsCommentsFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceIssueIssue_View_EditOtherCommentsActionsCommentsRefresh?: (
    queryCustomizer: ServiceCommentQueryCustomizer,
  ) => Promise<ServiceCommentStored[]>;
  serviceIssueIssue_View_EditOtherCommentsActionsCommentsDelete?: (
    row: ServiceCommentStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceIssueIssue_View_EditOtherCommentsActionsCommentsRemove?: (
    row: ServiceCommentStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceIssueIssue_View_EditOtherCommentsActionsCommentsView?: (row: ServiceCommentStored) => Promise<void>;
  serviceCommentComment_View_EditGroupVoteDown?: (row: ServiceCommentStored, silentMode?: boolean) => Promise<void>;
  serviceCommentComment_View_EditGroupVoteUp?: (row: ServiceCommentStored, silentMode?: boolean) => Promise<void>;
}

export interface ServiceIssueIssue_View_EditCommentsComponentProps {
  uniqueId: string;
  actions: ServiceIssueIssue_View_EditCommentsComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceIssue;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable
// Name: comments
export function ServiceIssueIssue_View_EditCommentsComponent(props: ServiceIssueIssue_View_EditCommentsComponentProps) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceCommentStored>[]>(ownerData?.comments || []);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'comment', sort: 'asc' }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceCommentQueryCustomizer>({
    _mask: '{comment,created,createdByName,upVotes,downVotes}',
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

  const selectedRows = useRef<ServiceCommentStored[]>([]);

  const columns: GridColDef<ServiceCommentStored>[] = [
    {
      ...baseColumnConfig,
      field: 'comment',
      headerName: t('service.Issue.Issue.View.Edit.comment', { defaultValue: 'Comment' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.Issue.Issue.View.Edit.created', { defaultValue: 'Created' }) as string,
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
    {
      ...baseColumnConfig,
      field: 'createdByName',
      headerName: t('service.Issue.Issue.View.Edit.createdByName', { defaultValue: 'CreatedByName' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'upVotes',
      headerName: t('service.Issue.Issue.View.Edit.upVotes', { defaultValue: 'up' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      filterable: false && true,
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
    {
      ...baseColumnConfig,
      field: 'downVotes',
      headerName: t('service.Issue.Issue.View.Edit.downVotes', { defaultValue: 'down' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      filterable: false && true,
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
  ];

  const rowActions: TableRowAction<ServiceCommentStored>[] = [
    {
      id: 'User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableRowRemoveButton',
      label: t(
        'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::comments::actions::comments::Remove',
        { defaultValue: 'Remove' },
      ) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceCommentStored) => isLoading,
      action: actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsRemove
        ? async (rowData) => {
            await actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableRowDeleteButton',
      label: t(
        'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::comments::actions::comments::Delete',
        { defaultValue: 'Delete' },
      ) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceCommentStored) => editMode || !row.__deleteable || isLoading,
      action: actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsDelete
        ? async (rowData) => {
            await actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsDelete!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_3lCIsH4bEe2j59SYy0JH0Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Issue.Issue.View.Edit.voteUp', { defaultValue: 'voteUp' }) as string,
      icon: <MdiIcon path="thumb-up" />,
      disabled: (row: ServiceCommentStored) => editMode || isLoading,
      action: actions.serviceCommentComment_View_EditGroupVoteUp
        ? async (rowData) => {
            await actions.serviceCommentComment_View_EditGroupVoteUp!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_3lHoQH4bEe2j59SYy0JH0Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Issue.Issue.View.Edit.voteDown', { defaultValue: 'voteDown' }) as string,
      icon: <MdiIcon path="thumb-down" />,
      disabled: (row: ServiceCommentStored) => editMode || isLoading,
      action: actions.serviceCommentComment_View_EditGroupVoteDown
        ? async (rowData) => {
            await actions.serviceCommentComment_View_EditGroupVoteDown!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_fwz3sn2GEe6V8KKnnZfChA',
      attributeName: 'comment',
      label: t('service.Issue.Issue.View.Edit.comment::Filter', { defaultValue: 'Comment' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fw0ew32GEe6V8KKnnZfChA',
      attributeName: 'created',
      label: t('service.Issue.Issue.View.Edit.created::Filter', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: '_fw1F0X2GEe6V8KKnnZfChA',
      attributeName: 'createdByName',
      label: t('service.Issue.Issue.View.Edit.createdByName::Filter', { defaultValue: 'CreatedByName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fw1F1X2GEe6V8KKnnZfChA',
      attributeName: 'upVotes',
      label: t('service.Issue.Issue.View.Edit.upVotes::Filter', { defaultValue: 'up' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: '_fw1s432GEe6V8KKnnZfChA',
      attributeName: 'downVotes',
      label: t('service.Issue.Issue.View.Edit.downVotes::Filter', { defaultValue: 'down' }) as string,
      filterType: FilterType.numeric,
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPaginationModel((prevState) => ({
      ...prevState,
      page: 0,
    }));
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceCommentQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceCommentQueryCustomizer = {
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
    const newData = applyInMemoryFilters<ServiceCommentStored>(filters, ownerData?.comments ?? []);
    setData(newData);
  }, [ownerData?.comments, filters]);

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
          ...columnsActionCalculator('User/(esm/_UjefsIybEe2VSOmaAz6G9Q)/RelationType', rowActions, t, {
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
          actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsView
            ? async (params: GridRowParams<ServiceCommentStored>) =>
                await actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsFilter && true ? (
                <Button
                  id="User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsFilter!(
                      'User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableFilterButton',
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
                    'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::comments::actions::comments::Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsRefresh && true ? (
                <Button
                  id="User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::comments::actions::comments::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsCreateOpen && true ? (
                <Button
                  id="User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsCreateOpen!();
                  }}
                  disabled={editMode || isLoading}
                >
                  {t(
                    'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::comments::actions::comments::Create',
                    { defaultValue: 'Create' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsAddOpenSelector!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::comments::actions::comments::Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsClear && data.length ? (
                <Button
                  id="User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsClear!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::comments::actions::comments::Clear',
                    { defaultValue: 'Clear' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsBulkRemove &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsBulkRemove!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::comments::actions::comments::BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsBulkDelete &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceIssueIssue_View_EditOtherCommentsActionsCommentsBulkDelete!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'service.Issue.Issue.View.Edit.service::Issue::Issue_View_Edit::other::comments::actions::comments::BulkDelete',
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
