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
import type { Dispatch, ElementType, MouseEvent, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import { ContextMenu, StripedDataGrid, columnsActionCalculator, numericColumnOperators } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, basePageSizeOptions, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type {
  ServiceIssue,
  ServiceIssueStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  applyInMemoryFilters,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, TableRowAction } from '~/utilities';

export interface ServiceIssueIssue_View_EditProsComponentActionDefinitions {
  prosBulkDeleteAction?: (selectedRows: ServiceProStored[]) => Promise<DialogResult<ServiceProStored[]>>;
  prosFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  prosRefreshAction?: (queryCustomizer: ServiceProQueryCustomizer) => Promise<ServiceProStored[]>;
  getProsMask?: () => string;
  prosCreateConArgumentAction?: (row: ServiceProStored) => Promise<void>;
  prosCreateProArgumentAction?: (row: ServiceProStored) => Promise<void>;
  prosDeleteAction?: (row: ServiceProStored, silentMode?: boolean) => Promise<void>;
  prosOpenPageAction?: (row: ServiceProStored, isDraft?: boolean) => Promise<void>;
  prosVoteDownForProAction?: (row: ServiceProStored) => Promise<void>;
  prosVoteUpForProAction?: (row: ServiceProStored) => Promise<void>;
  prosAdditionalToolbarButtons?: (
    data: ServiceProStored[],
    isLoading: boolean,
    selectedRows: ServiceProStored[],
    clearSelections: () => void,
    ownerData: ServiceIssueStored,
    editMode: boolean,
    isFormUpdateable: () => boolean,
  ) => Record<string, ElementType>;
}

export interface ServiceIssueIssue_View_EditProsComponentProps {
  uniqueId: string;
  actions: ServiceIssueIssue_View_EditProsComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
  validationError?: string;
  ownerData: ServiceIssueStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable
// Name: pros
export function ServiceIssueIssue_View_EditProsComponent(props: ServiceIssueIssue_View_EditProsComponentProps) {
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
  const filterModelKey = `User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceProStored>[]>(ownerData?.pros || []);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: rowsPerPage,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceProQueryCustomizer>({
    _mask: '{downVotes,title,upVotes}',
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

  const selectedRows = useRef<ServiceProStored[]>([]);

  const titleColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'title',
    headerName: t('service.Issue.Issue_View_Edit.pros.title', { defaultValue: 'Title' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const upVotesColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'upVotes',
    headerName: t('service.Issue.Issue_View_Edit.pros.upVotes', { defaultValue: 'up' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 100,
    type: 'number',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
      return value && new Intl.NumberFormat(l10nLocale).format(value);
    },
  };
  const downVotesColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'downVotes',
    headerName: t('service.Issue.Issue_View_Edit.pros.downVotes', { defaultValue: 'down' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 100,
    type: 'number',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
      return value && new Intl.NumberFormat(l10nLocale).format(value);
    },
  };

  const columns = useMemo<GridColDef<ServiceProStored>[]>(
    () => [titleColumn, upVotesColumn, downVotesColumn],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceProStored>[] = useMemo(
    () => [
      {
        id: 'User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceTableRowDeleteButton',
        label: t('service.Issue.Issue_View_Edit.other.arguments.pros.table.pros.Delete', {
          defaultValue: 'Delete',
        }) as string,
        icon: <MdiIcon path="delete_forever" />,
        isCRUD: true,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || editMode || !row.__deleteable || isLoading,
        action: actions.prosDeleteAction
          ? async (rowData) => {
              await actions.prosDeleteAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_KRUbO3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.Issue.Issue_View_Edit.createConArgument', { defaultValue: 'createConArgument' }) as string,
        icon: <MdiIcon path="chat-minus" />,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.prosCreateConArgumentAction
          ? async (rowData) => {
              await actions.prosCreateConArgumentAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_KRUbM3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.Issue.Issue_View_Edit.createProArgument', { defaultValue: 'createProArgument' }) as string,
        icon: <MdiIcon path="chat-plus" />,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.prosCreateProArgumentAction
          ? async (rowData) => {
              await actions.prosCreateProArgumentAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_ikQTwIrjEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.Issue.Issue_View_Edit.voteDown', { defaultValue: 'voteDown' }) as string,
        icon: <MdiIcon path="thumb-down" />,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.prosVoteDownForProAction
          ? async (rowData) => {
              await actions.prosVoteDownForProAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_ikPssIrjEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.Issue.Issue_View_Edit.voteUp', { defaultValue: 'voteUp' }) as string,
        icon: <MdiIcon path="thumb-up" />,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.prosVoteUpForProAction
          ? async (rowData) => {
              await actions.prosVoteUpForProAction!(rowData);
            }
          : undefined,
      },
    ],
    [actions, isLoading],
  );

  const effectiveTableColumns = useMemo(
    () => [
      ...columns,
      ...columnsActionCalculator('User/(esm/_7XpxEH2fEe2LTNnGda5kaw)/RelationType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ],
    [columns, rowActions],
  );

  const getRowIdentifier: (row: Pick<ServiceProStored, '__identifier'>) => string = (row) => row.__identifier!;

  const getSelectedRows: () => ServiceProStored[] = () => {
    return selectedRows.current;
  };

  const clearSelections = () => {
    handleOnSelection([]);
  };

  const additionalToolbarActions: Record<string, ElementType> = actions?.prosAdditionalToolbarButtons
    ? actions.prosAdditionalToolbarButtons(
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
    setPaginationModel((prevState) => ({
      ...prevState,
      pageSize: newValue,
      page: 0,
    }));

    setQueryCustomizer((prevQueryCustomizer: ServiceProQueryCustomizer) => {
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
        id: 'User/(esm/_qJPPBnjvEe6cB8og8p0UuQ)/TableColumnFilter/(discriminator/User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'title',
        label: t('service.Issue.Issue_View_Edit.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_qJPPB3jvEe6cB8og8p0UuQ)/TableColumnFilter/(discriminator/User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'upVotes',
        label: t('service.Issue.Issue_View_Edit.upVotes', { defaultValue: 'up' }) as string,
        filterType: FilterType.numeric,
      },

      {
        id: 'User/(esm/_qJPPCHjvEe6cB8og8p0UuQ)/TableColumnFilter/(discriminator/User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable)',
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

    setQueryCustomizer((prevQueryCustomizer: ServiceProQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceProQueryCustomizer = {
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
    const newData = applyInMemoryFilters<ServiceProStored>(filters, ownerData?.pros ?? []);
    setData(newData);
    handleOnSelection(selectionModel);
  }, [ownerData?.pros, filters]);

  return (
    <div id="User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable" data-table-name="pros">
      <StripedDataGrid
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
          actions.prosOpenPageAction
            ? async (params: GridRowParams<ServiceProStored>) => await actions.prosOpenPageAction!(params.row, false)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.prosFilterAction && true ? (
                <Button
                  id="User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.prosFilterAction!(
                      'User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceTableFilterButton',
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
                  {t('service.Issue.Issue_View_Edit.other.arguments.pros.table.pros.Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.prosRefreshAction && true ? (
                <Button
                  id="User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getProsMask ? actions.getProsMask() : queryCustomizer._mask,
                    };
                    await actions.prosRefreshAction!(processedQueryCustomizer);
                  }}
                  disabled={isLoading}
                >
                  {t('service.Issue.Issue_View_Edit.other.arguments.pros.table.pros.Refresh', {
                    defaultValue: 'Refresh',
                  })}
                </Button>
              ) : null}
              {actions.prosBulkDeleteAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getProsMask ? actions.getProsMask() : queryCustomizer._mask,
                    };
                    const { result: bulkResult } = await actions.prosBulkDeleteAction!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      handleOnSelection([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('service.Issue.Issue_View_Edit.other.arguments.pros.table.pros.BulkDelete', {
                    defaultValue: 'Delete',
                  })}
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
