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
import { CustomTablePagination, MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import {
  ContextMenu,
  StripedDataGrid,
  columnsActionCalculator,
  dateTimeColumnOperators,
  singleSelectColumnOperators,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, basePageSizeOptions, baseTableConfig, filterDebounceMs } from '~/config';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type {
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceUserIssuesStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  randomUtils,
  serviceDateToUiDate,
  useErrorHandler,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, SidekickComponentProps, TableRowAction } from '~/utilities';

export interface ServiceUserIssuesUserIssues_View_EditActiveIssuesGlobalComponentActionDefinitions {
  activeIssuesGlobalFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  activeIssuesGlobalRefreshAction?: (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ) => Promise<JudoRestResponse<ServiceIssueStored[]>>;
  getActiveIssuesGlobalMask?: () => string;
  activeIssuesGlobalActivateForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesGlobalAddToFavoritesForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesGlobalCloseDebateAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesGlobalCloseVoteForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesGlobalCreateCommentAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesGlobalCreateConArgumentAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesGlobalCreateProArgumentAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesGlobalDeleteOrArchiveForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesGlobalRemoveFromFavoritesForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesGlobalOpenPageAction?: (row: ServiceIssueStored, isDraft?: boolean) => Promise<void>;
  activeIssuesGlobalAdditionalToolbarButtons?: (
    data: ServiceIssueStored[],
    isLoading: boolean,
    selectedRows: ServiceIssueStored[],
    clearSelections: () => void,
    ownerData: ServiceUserIssuesStored,
    editMode: boolean,
    isFormUpdateable: () => boolean,
  ) => Record<string, ElementType>;
}

export interface ServiceUserIssuesUserIssues_View_EditActiveIssuesGlobalComponentProps {
  uniqueId: string;
  actions: ServiceUserIssuesUserIssues_View_EditActiveIssuesGlobalComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
  validationError?: string;
  ownerData: ServiceUserIssuesStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

export const SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_ACTIVE_ISSUES_GLOBAL_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY =
  'ServiceUserIssuesUserIssues_View_EditActiveIssuesGlobalComponentSidekickComponent';

// XMIID: User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable
// Name: activeIssuesGlobal
export function ServiceUserIssuesUserIssues_View_EditActiveIssuesGlobalComponent(
  props: ServiceUserIssuesUserIssues_View_EditActiveIssuesGlobalComponentProps,
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
  const generatorUUIDv4 = randomUtils.getGeneratorUUIDv4();
  const sidekickComponentFilter = `(&(${OBJECTCLASS}=${CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY})(component=${SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_ACTIVE_ISSUES_GLOBAL_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY}))`;
  const filterModelKey = `User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-filterModel`;
  const filtersKey = `User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-filters`;
  const rowsPerPageKey = `User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-rowsPerPage`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceIssueStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [rowsPerPage, setRowsPerPage] = useState<number>(getItemParsedWithDefault(rowsPerPageKey, 10));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: rowsPerPage,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceIssueQueryCustomizer>({
    _mask: '{created,status,title}',
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
  const [page, setPage] = useState<number>(0);
  const [rowCount, setRowCount] = useState<number>(0);
  const [lastItem, setLastItem] = useState<ServiceIssueStored>();
  const [firstItem, setFirstItem] = useState<ServiceIssueStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const SidekickComponent = useTrackComponent<FC<SidekickComponentProps<ServiceIssueStored>>>(sidekickComponentFilter);

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const selectedRows = useRef<ServiceIssueStored[]>([]);

  const titleColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'title',
    headerName: t('service.UserIssues.UserIssues_View_Edit.activeIssuesGlobal.title', {
      defaultValue: 'Title',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const createdColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t('service.UserIssues.UserIssues_View_Edit.activeIssuesGlobal.created', {
      defaultValue: 'Created',
    }) as string,
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
  const statusColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'status',
    headerName: t('service.UserIssues.UserIssues_View_Edit.activeIssuesGlobal.status', {
      defaultValue: 'Status',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.IssueStatus.${value}`, { defaultValue: value });
      }
    },
  };

  const columns = useMemo<GridColDef<ServiceIssueStored>[]>(
    () => [titleColumn, createdColumn, statusColumn],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceIssueStored>[] = useMemo(
    () => [
      {
        id: 'User/(esm/_FzSAQHkIEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.activate', { defaultValue: 'activate' }) as string,
        icon: <MdiIcon path="lock-open" />,
        disabled: (row: ServiceIssueStored) =>
          getSelectedRows().length > 0 || editMode || !row.isIssueDraft || isLoading,
        action: actions.activeIssuesGlobalActivateForIssueAction
          ? async (rowData) => {
              await actions.activeIssuesGlobalActivateForIssueAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_knYd0FxEEe6ma86ynyYZNw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.addToFavorites', {
          defaultValue: 'addToFavorites',
        }) as string,
        icon: <MdiIcon path="star-plus" />,
        disabled: (row: ServiceIssueStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.activeIssuesGlobalAddToFavoritesForIssueAction
          ? async (rowData) => {
              await actions.activeIssuesGlobalAddToFavoritesForIssueAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_8M4nYHj_Ee6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.closeDebate', { defaultValue: 'closeDebate' }) as string,
        icon: <MdiIcon path="vote" />,
        disabled: (row: ServiceIssueStored) =>
          getSelectedRows().length > 0 || editMode || !row.isIssueActive || isLoading,
        action: actions.activeIssuesGlobalCloseDebateAction
          ? async (rowData) => {
              await actions.activeIssuesGlobalCloseDebateAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_pXWdEHkFEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.closeVote', { defaultValue: 'closeVote' }) as string,
        icon: <MdiIcon path="lock-check" />,
        disabled: (row: ServiceIssueStored) =>
          getSelectedRows().length > 0 || editMode || !row.isVoteClosable || isLoading,
        action: actions.activeIssuesGlobalCloseVoteForIssueAction
          ? async (rowData) => {
              await actions.activeIssuesGlobalCloseVoteForIssueAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_S8tEQIydEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.createComment', { defaultValue: 'createComment' }) as string,
        icon: <MdiIcon path="comment-text-multiple" />,
        disabled: (row: ServiceIssueStored) => getSelectedRows().length > 0 || editMode || !row.isEditable || isLoading,
        action: actions.activeIssuesGlobalCreateCommentAction
          ? async (rowData) => {
              await actions.activeIssuesGlobalCreateCommentAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_qJPPC3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.createConArgument', {
          defaultValue: 'createConArgument',
        }) as string,
        icon: <MdiIcon path="chat-minus" />,
        disabled: (row: ServiceIssueStored) =>
          getSelectedRows().length > 0 || editMode || !row.isIssueActive || isLoading,
        action: actions.activeIssuesGlobalCreateConArgumentAction
          ? async (rowData) => {
              await actions.activeIssuesGlobalCreateConArgumentAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_qJPPA3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.createProArgument', {
          defaultValue: 'createProArgument',
        }) as string,
        icon: <MdiIcon path="chat-plus" />,
        disabled: (row: ServiceIssueStored) =>
          getSelectedRows().length > 0 || editMode || !row.isIssueActive || isLoading,
        action: actions.activeIssuesGlobalCreateProArgumentAction
          ? async (rowData) => {
              await actions.activeIssuesGlobalCreateProArgumentAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_FzSnUHkIEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.deleteOrArchive', {
          defaultValue: 'deleteOrArchive',
        }) as string,
        icon: <MdiIcon path="delete" />,
        disabled: (row: ServiceIssueStored) =>
          getSelectedRows().length > 0 || editMode || !row.isIssueDeletable || isLoading,
        action: actions.activeIssuesGlobalDeleteOrArchiveForIssueAction
          ? async (rowData) => {
              await actions.activeIssuesGlobalDeleteOrArchiveForIssueAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_knZE4FxEEe6ma86ynyYZNw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.removeFromFavorites', {
          defaultValue: 'removeFromFavorites',
        }) as string,
        icon: <MdiIcon path="star-minus" />,
        disabled: (row: ServiceIssueStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.activeIssuesGlobalRemoveFromFavoritesForIssueAction
          ? async (rowData) => {
              await actions.activeIssuesGlobalRemoveFromFavoritesForIssueAction!(rowData);
            }
          : undefined,
      },
    ],
    [actions, isLoading],
  );

  const effectiveTableColumns = useMemo(() => {
    const cols = [
      ...columns,
      ...columnsActionCalculator('User/(esm/_NM0voFrKEe6_67aMO2jOsw)/RelationType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ];
    return cols;
  }, [columns, rowActions]);

  const getRowIdentifier: (row: Pick<ServiceIssueStored, '__identifier'>) => string = (row) => row.__identifier!;

  const getSelectedRows: () => ServiceIssueStored[] = () => {
    return [];
  };

  const clearSelections = () => {
    handleOnSelection([]);
  };

  const additionalToolbarActions: Record<string, ElementType> = actions?.activeIssuesGlobalAdditionalToolbarButtons
    ? actions.activeIssuesGlobalAdditionalToolbarButtons(
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
    setPage(0);

    setQueryCustomizer((prevQueryCustomizer: ServiceIssueQueryCustomizer) => {
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
        id: 'User/(esm/_pMksIFrXEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'title',
        label: t('service.UserIssues.UserIssues_View_Edit.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_qKFV4FraEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'created',
        label: t('service.UserIssues.UserIssues_View_Edit.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_qKF88FraEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'status',
        label: t('service.UserIssues.UserIssues_View_Edit.status', { defaultValue: 'Status' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED', 'VOTING'],
      },
    ],
    [l10nLocale],
  );

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceIssueQueryCustomizer) => {
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
    setPage(0);
    setSortModel(newModel);

    const _orderBy = newModel
      .filter((m) => m.sort)
      .map((m) => ({
        attribute: m.field,
        descending: m.sort === 'desc',
      }));

    setQueryCustomizer((prevQueryCustomizer) => {
      const strippedQueryCustomizer: ServiceIssueQueryCustomizer = {
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

  async function handlePageChange(isNext: boolean) {
    setQueryCustomizer((prevQueryCustomizer) => {
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: isNext ? rowsPerPage + 1 : rowsPerPage,
          reverse: !isNext,
          lastItem: isNext ? lastItem : firstItem,
        },
      };
    });

    setIsNextButtonEnabled(!isNext);
  }

  const handleOnSelection = (newSelectionModel: GridRowSelectionModel) => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, newSelectionModel);
    setSelectionModel(selectedRows.current.map(getRowIdentifier));
  };

  async function fetchData() {
    if (ownerData.__signedIdentifier) {
      setIsInternalLoading(true);

      try {
        const processedQueryCustomizer = {
          ...processQueryCustomizer(queryCustomizer),
          _mask: actions.getActiveIssuesGlobalMask ? actions.getActiveIssuesGlobalMask() : queryCustomizer._mask,
        };
        const { data: res, headers } = await actions.activeIssuesGlobalRefreshAction!(processedQueryCustomizer);

        if (res.length > rowsPerPage) {
          setIsNextButtonEnabled(true);
          res.pop();
        } else if (queryCustomizer._seek?.limit === rowsPerPage + 1) {
          setIsNextButtonEnabled(false);
        }

        setData(res);
        setFirstItem(res[0]);
        setLastItem(res[res.length - 1]);
        setRowCount(res.length || 0);
      } catch (error) {
        handleError(error);
      } finally {
        setIsInternalLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchData();
    handleOnSelection(selectionModel);
  }, [queryCustomizer, refreshCounter]);

  return (
    <div
      id="User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable"
      data-table-name="activeIssuesGlobal"
    >
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
          actions.activeIssuesGlobalOpenPageAction
            ? async (params: GridRowParams<ServiceIssueStored>) =>
                await actions.activeIssuesGlobalOpenPageAction!(params.row, false)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
        filterDebounceMs={filterDebounceMs}
        rowCount={rowsPerPage}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.activeIssuesGlobalFilterAction && true ? (
                <Button
                  id="User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.activeIssuesGlobalFilterAction!(
                      'User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceTableFilterButton',
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
              {actions.activeIssuesGlobalRefreshAction && true ? (
                <Button
                  id="User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getActiveIssuesGlobalMask
                        ? actions.getActiveIssuesGlobalMask()
                        : queryCustomizer._mask,
                    };
                    await actions.activeIssuesGlobalRefreshAction!(processedQueryCustomizer);
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
          Pagination: () => (
            <CustomTablePagination
              pageSizeOptions={pageSizeOptions}
              setPageSize={setPageSize}
              pageChange={handlePageChange}
              isNextButtonEnabled={isNextButtonEnabled}
              page={page}
              setPage={setPage}
              rowPerPage={rowsPerPage}
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
