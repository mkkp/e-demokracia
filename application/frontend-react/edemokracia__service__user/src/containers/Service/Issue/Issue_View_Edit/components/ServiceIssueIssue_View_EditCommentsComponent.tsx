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
import { ComponentProxy, useTrackComponent } from '@pandino/react-hooks';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, ElementType, FC, MouseEvent, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import {
  ContextMenu,
  StripedDataGrid,
  columnsActionCalculator,
  dateTimeColumnOperators,
  numericColumnOperators,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, basePageSizeOptions, baseTableConfig } from '~/config';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type {
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServiceIssue,
  ServiceIssueStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  applyInMemoryFilters,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  randomUtils,
  serviceDateToUiDate,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, SidekickComponentProps, TableRowAction } from '~/utilities';

export interface ServiceIssueIssue_View_EditCommentsComponentActionDefinitions {
  commentsFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  commentsRefreshAction?: (
    queryCustomizer: ServiceCommentQueryCustomizer,
  ) => Promise<JudoRestResponse<ServiceCommentStored[]>>;
  getCommentsMask?: () => string;
  commentsOpenPageAction?: (row: ServiceCommentStored, isDraft?: boolean) => Promise<void>;
  commentsVoteDownForCommentAction?: (row: ServiceCommentStored) => Promise<void>;
  commentsVoteUpForCommentAction?: (row: ServiceCommentStored) => Promise<void>;
  commentsAdditionalToolbarButtons?: (
    data: ServiceCommentStored[],
    isLoading: boolean,
    selectedRows: ServiceCommentStored[],
    clearSelections: () => void,
    ownerData: ServiceIssueStored,
    editMode: boolean,
    isFormUpdateable: () => boolean,
  ) => Record<string, ElementType>;
}

export interface ServiceIssueIssue_View_EditCommentsComponentProps {
  uniqueId: string;
  actions: ServiceIssueIssue_View_EditCommentsComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
  validationError?: string;
  ownerData: ServiceIssueStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_COMMENTS_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY =
  'ServiceIssueIssue_View_EditCommentsComponentSidekickComponent';

// XMIID: User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable
// Name: comments
export function ServiceIssueIssue_View_EditCommentsComponent(props: ServiceIssueIssue_View_EditCommentsComponentProps) {
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
  const generatorUUIDv4 = randomUtils.getGeneratorUUIDv4();
  const sidekickComponentFilter = `(&(${OBJECTCLASS}=${CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY})(component=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_COMMENTS_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY}))`;
  const filterModelKey = `User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-filterModel`;
  const filtersKey = `User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-filters`;
  const rowsPerPageKey = `User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-rowsPerPage`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceCommentStored>[]>(ownerData?.comments || []);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'comment', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [rowsPerPage, setRowsPerPage] = useState<number>(getItemParsedWithDefault(rowsPerPageKey, 10));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: rowsPerPage,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceCommentQueryCustomizer>({
    _mask: '{comment,created,createdByName,downVotes,upVotes}',
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
  const SidekickComponent =
    useTrackComponent<FC<SidekickComponentProps<ServiceCommentStored>>>(sidekickComponentFilter);

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const selectedRows = useRef<ServiceCommentStored[]>([]);

  const commentColumn: GridColDef<ServiceCommentStored> = {
    ...baseColumnConfig,
    field: 'comment',
    headerName: t('service.Issue.Issue_View_Edit.comments.comment', { defaultValue: 'Comment' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const createdColumn: GridColDef<ServiceCommentStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t('service.Issue.Issue_View_Edit.comments.created', { defaultValue: 'Created' }) as string,
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
  const createdByNameColumn: GridColDef<ServiceCommentStored> = {
    ...baseColumnConfig,
    field: 'createdByName',
    headerName: t('service.Issue.Issue_View_Edit.comments.createdByName', { defaultValue: 'CreatedByName' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const upVotesColumn: GridColDef<ServiceCommentStored> = {
    ...baseColumnConfig,
    field: 'upVotes',
    headerName: t('service.Issue.Issue_View_Edit.comments.upVotes', { defaultValue: 'up' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 100,
    type: 'number',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
      if (value === null || value === undefined) {
        return '';
      }
      return new Intl.NumberFormat(l10nLocale).format(value);
    },
  };
  const downVotesColumn: GridColDef<ServiceCommentStored> = {
    ...baseColumnConfig,
    field: 'downVotes',
    headerName: t('service.Issue.Issue_View_Edit.comments.downVotes', { defaultValue: 'down' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 100,
    type: 'number',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
      if (value === null || value === undefined) {
        return '';
      }
      return new Intl.NumberFormat(l10nLocale).format(value);
    },
  };

  const columns = useMemo<GridColDef<ServiceCommentStored>[]>(
    () => [commentColumn, createdColumn, createdByNameColumn, upVotesColumn, downVotesColumn],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceCommentStored>[] = useMemo(
    () => [
      {
        id: 'User/(esm/_3lHoQH4bEe2j59SYy0JH0Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableRowButtonGroup)',
        label: t('service.Issue.Issue_View_Edit.voteDown', { defaultValue: 'voteDown' }) as string,
        icon: <MdiIcon path="thumb-down" />,
        disabled: (row: ServiceCommentStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.commentsVoteDownForCommentAction
          ? async (rowData) => {
              await actions.commentsVoteDownForCommentAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_3lCIsH4bEe2j59SYy0JH0Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableRowButtonGroup)',
        label: t('service.Issue.Issue_View_Edit.voteUp', { defaultValue: 'voteUp' }) as string,
        icon: <MdiIcon path="thumb-up" />,
        disabled: (row: ServiceCommentStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.commentsVoteUpForCommentAction
          ? async (rowData) => {
              await actions.commentsVoteUpForCommentAction!(rowData);
            }
          : undefined,
      },
    ],
    [actions, isLoading],
  );

  const effectiveTableColumns = useMemo(() => {
    const cols = [
      ...columns,
      ...columnsActionCalculator('User/(esm/_UjefsIybEe2VSOmaAz6G9Q)/RelationType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ];
    return cols;
  }, [columns, rowActions]);

  const getRowIdentifier: (row: Pick<ServiceCommentStored, '__identifier'>) => string = (row) => row.__identifier!;

  const getSelectedRows: () => ServiceCommentStored[] = () => {
    return [];
  };

  const clearSelections = () => {
    handleOnSelection([]);
  };

  const additionalToolbarActions: Record<string, ElementType> = actions?.commentsAdditionalToolbarButtons
    ? actions.commentsAdditionalToolbarButtons(
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

    setQueryCustomizer((prevQueryCustomizer: ServiceCommentQueryCustomizer) => {
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
        id: 'User/(esm/_mvrxcIybEe2VSOmaAz6G9Q)/TableColumnFilter/(discriminator/User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'comment',
        label: t('service.Issue.Issue_View_Edit.comment', { defaultValue: 'Comment' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_mvvb0IybEe2VSOmaAz6G9Q)/TableColumnFilter/(discriminator/User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'created',
        label: t('service.Issue.Issue_View_Edit.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_mvzGMIybEe2VSOmaAz6G9Q)/TableColumnFilter/(discriminator/User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'createdByName',
        label: t('service.Issue.Issue_View_Edit.createdByName', { defaultValue: 'CreatedByName' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_mv2JgIybEe2VSOmaAz6G9Q)/TableColumnFilter/(discriminator/User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'upVotes',
        label: t('service.Issue.Issue_View_Edit.upVotes', { defaultValue: 'up' }) as string,
        filterType: FilterType.numeric,
      },

      {
        id: 'User/(esm/_mv5z4IybEe2VSOmaAz6G9Q)/TableColumnFilter/(discriminator/User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'downVotes',
        label: t('service.Issue.Issue_View_Edit.downVotes', { defaultValue: 'down' }) as string,
        filterType: FilterType.numeric,
      },
    ],
    [l10nLocale],
  );

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
      const strippedQueryCustomizer: ServiceCommentQueryCustomizer = {
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
    const newData = applyInMemoryFilters<ServiceCommentStored>(filters, ownerData?.comments ?? []);
    setData(newData);
    handleOnSelection(selectionModel);
  }, [ownerData?.comments, filters]);

  return (
    <div id="User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable" data-table-name="comments">
      <ComponentProxy
        filter={sidekickComponentFilter}
        editMode={editMode}
        isLoading={isLoading}
        filters={filters}
        onFiltersChange={handleFiltersChange}
        data={data}
      />
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
        keepNonExistentRowsSelected
        onRowClick={
          actions.commentsOpenPageAction
            ? async (params: GridRowParams<ServiceCommentStored>) =>
                await actions.commentsOpenPageAction!(params.row, false)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.commentsFilterAction && true ? (
                <Button
                  id="User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.commentsFilterAction!(
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
                  {t('judo.action.filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.commentsRefreshAction && true ? (
                <Button
                  id="User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getCommentsMask ? actions.getCommentsMask() : queryCustomizer._mask,
                    };
                    await actions.commentsRefreshAction!(processedQueryCustomizer);
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.refresh', { defaultValue: 'Refresh' })}
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
