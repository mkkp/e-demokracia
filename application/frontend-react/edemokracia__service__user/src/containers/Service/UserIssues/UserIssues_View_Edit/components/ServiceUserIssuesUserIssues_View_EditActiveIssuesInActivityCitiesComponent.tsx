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
import { baseColumnConfig, basePageSizeOptions, baseTableConfig } from '~/config';
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
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  serviceDateToUiDate,
  useErrorHandler,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, TableRowAction } from '~/utilities';

export interface ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCitiesComponentActionDefinitions {
  activeIssuesInActivityCitiesFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  activeIssuesInActivityCitiesRefreshAction?: (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ) => Promise<ServiceIssueStored[]>;
  getActiveIssuesInActivityCitiesMask?: () => string;
  activeIssuesInActivityCitiesActivateForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityCitiesAddToFavoritesForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityCitiesCloseDebateAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityCitiesCloseVoteForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityCitiesCreateCommentAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityCitiesCreateConArgumentAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityCitiesCreateProArgumentAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityCitiesDeleteOrArchiveForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityCitiesRemoveFromFavoritesForIssueAction?: (row: ServiceIssueStored) => Promise<void>;
  activeIssuesInActivityCitiesOpenPageAction?: (row: ServiceIssueStored, isDraft?: boolean) => Promise<void>;
  activeIssuesInActivityCitiesAdditionalToolbarButtons?: (
    data: ServiceIssueStored[],
    isLoading: boolean,
    selectedRows: ServiceIssueStored[],
    clearSelections: () => void,
    ownerData: ServiceUserIssuesStored,
    editMode: boolean,
    isFormUpdateable: () => boolean,
  ) => Record<string, ElementType>;
}

export interface ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCitiesComponentProps {
  uniqueId: string;
  actions: ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCitiesComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
  validationError?: string;
  ownerData: ServiceUserIssuesStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable
// Name: activeIssuesInActivityCities
export function ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCitiesComponent(
  props: ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCitiesComponentProps,
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
  const filterModelKey = `User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceIssueStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'countyRepresentation', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: rowsPerPage,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceIssueQueryCustomizer>({
    _mask: '{cityRepresentation,countyRepresentation,created,status,title}',
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

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const selectedRows = useRef<ServiceIssueStored[]>([]);

  const countyRepresentationColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'countyRepresentation',
    headerName: t('service.UserIssues.UserIssues_View_Edit.activeIssuesInActivityCities.countyRepresentation', {
      defaultValue: 'CountyRepresentation',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const cityRepresentationColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'cityRepresentation',
    headerName: t('service.UserIssues.UserIssues_View_Edit.activeIssuesInActivityCities.cityRepresentation', {
      defaultValue: 'CityRepresentation',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const titleColumn: GridColDef<ServiceIssueStored> = {
    ...baseColumnConfig,
    field: 'title',
    headerName: t('service.UserIssues.UserIssues_View_Edit.activeIssuesInActivityCities.title', {
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
    headerName: t('service.UserIssues.UserIssues_View_Edit.activeIssuesInActivityCities.created', {
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
    headerName: t('service.UserIssues.UserIssues_View_Edit.activeIssuesInActivityCities.status', {
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
    () => [countyRepresentationColumn, cityRepresentationColumn, titleColumn, createdColumn, statusColumn],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceIssueStored>[] = useMemo(
    () => [
      {
        id: 'User/(esm/_FzSAQHkIEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.activate', { defaultValue: 'activate' }) as string,
        icon: <MdiIcon path="lock-open" />,
        disabled: (row: ServiceIssueStored) =>
          getSelectedRows().length > 0 || editMode || !row.isIssueDraft || isLoading,
        action: actions.activeIssuesInActivityCitiesActivateForIssueAction
          ? async (rowData) => {
              await actions.activeIssuesInActivityCitiesActivateForIssueAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_knYd0FxEEe6ma86ynyYZNw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.addToFavorites', {
          defaultValue: 'addToFavorites',
        }) as string,
        icon: <MdiIcon path="star-plus" />,
        disabled: (row: ServiceIssueStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.activeIssuesInActivityCitiesAddToFavoritesForIssueAction
          ? async (rowData) => {
              await actions.activeIssuesInActivityCitiesAddToFavoritesForIssueAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_8M4nYHj_Ee6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.closeDebate', { defaultValue: 'closeDebate' }) as string,
        icon: <MdiIcon path="vote" />,
        disabled: (row: ServiceIssueStored) =>
          getSelectedRows().length > 0 || editMode || !row.isIssueActive || isLoading,
        action: actions.activeIssuesInActivityCitiesCloseDebateAction
          ? async (rowData) => {
              await actions.activeIssuesInActivityCitiesCloseDebateAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_pXWdEHkFEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.closeVote', { defaultValue: 'closeVote' }) as string,
        icon: <MdiIcon path="lock-check" />,
        disabled: (row: ServiceIssueStored) =>
          getSelectedRows().length > 0 || editMode || !row.isVoteClosable || isLoading,
        action: actions.activeIssuesInActivityCitiesCloseVoteForIssueAction
          ? async (rowData) => {
              await actions.activeIssuesInActivityCitiesCloseVoteForIssueAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_S8tEQIydEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.createComment', { defaultValue: 'createComment' }) as string,
        icon: <MdiIcon path="comment-text-multiple" />,
        disabled: (row: ServiceIssueStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.activeIssuesInActivityCitiesCreateCommentAction
          ? async (rowData) => {
              await actions.activeIssuesInActivityCitiesCreateCommentAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_qJPPC3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.createConArgument', {
          defaultValue: 'createConArgument',
        }) as string,
        icon: <MdiIcon path="chat-minus" />,
        disabled: (row: ServiceIssueStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.activeIssuesInActivityCitiesCreateConArgumentAction
          ? async (rowData) => {
              await actions.activeIssuesInActivityCitiesCreateConArgumentAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_qJPPA3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.createProArgument', {
          defaultValue: 'createProArgument',
        }) as string,
        icon: <MdiIcon path="chat-plus" />,
        disabled: (row: ServiceIssueStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.activeIssuesInActivityCitiesCreateProArgumentAction
          ? async (rowData) => {
              await actions.activeIssuesInActivityCitiesCreateProArgumentAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_FzSnUHkIEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.deleteOrArchive', {
          defaultValue: 'deleteOrArchive',
        }) as string,
        icon: <MdiIcon path="delete" />,
        disabled: (row: ServiceIssueStored) =>
          getSelectedRows().length > 0 || editMode || !row.isIssueDeletable || isLoading,
        action: actions.activeIssuesInActivityCitiesDeleteOrArchiveForIssueAction
          ? async (rowData) => {
              await actions.activeIssuesInActivityCitiesDeleteOrArchiveForIssueAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_knZE4FxEEe6ma86ynyYZNw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserIssues.UserIssues_View_Edit.removeFromFavorites', {
          defaultValue: 'removeFromFavorites',
        }) as string,
        icon: <MdiIcon path="star-minus" />,
        disabled: (row: ServiceIssueStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.activeIssuesInActivityCitiesRemoveFromFavoritesForIssueAction
          ? async (rowData) => {
              await actions.activeIssuesInActivityCitiesRemoveFromFavoritesForIssueAction!(rowData);
            }
          : undefined,
      },
    ],
    [actions, isLoading],
  );

  const effectiveTableColumns = useMemo(
    () => [
      ...columns,
      ...columnsActionCalculator('User/(esm/_jlpVUFrWEe6gN-oVBDDIOQ)/RelationType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ],
    [columns, rowActions],
  );

  const getRowIdentifier: (row: Pick<ServiceIssueStored, '__identifier'>) => string = (row) => row.__identifier!;

  const getSelectedRows: () => ServiceIssueStored[] = () => {
    return [];
  };

  const clearSelections = () => {
    handleOnSelection([]);
  };

  const additionalToolbarActions: Record<string, ElementType> =
    actions?.activeIssuesInActivityCitiesAdditionalToolbarButtons
      ? actions.activeIssuesInActivityCitiesAdditionalToolbarButtons(
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
        id: 'User/(esm/_mrZywVw-Ee6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'countyRepresentation',
        label: t('service.UserIssues.UserIssues_View_Edit.countyRepresentation', {
          defaultValue: 'CountyRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_mrZywFw-Ee6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'cityRepresentation',
        label: t('service.UserIssues.UserIssues_View_Edit.cityRepresentation', {
          defaultValue: 'CityRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_8B99cVraEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'title',
        label: t('service.UserIssues.UserIssues_View_Edit.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_-wziQFraEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'created',
        label: t('service.UserIssues.UserIssues_View_Edit.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_-w0JUFraEe6gN-oVBDDIOQ)/TableColumnFilter/(discriminator/User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable)',
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
    if (!isLoading && ownerData.__signedIdentifier) {
      setIsInternalLoading(true);

      try {
        const processedQueryCustomizer = {
          ...processQueryCustomizer(queryCustomizer),
          _mask: actions.getActiveIssuesInActivityCitiesMask
            ? actions.getActiveIssuesInActivityCitiesMask()
            : queryCustomizer._mask,
        };
        const res = await actions.activeIssuesInActivityCitiesRefreshAction!(processedQueryCustomizer);

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
      id="User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable"
      data-table-name="activeIssuesInActivityCities"
    >
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
        keepNonExistentRowsSelected
        onRowClick={
          actions.activeIssuesInActivityCitiesOpenPageAction
            ? async (params: GridRowParams<ServiceIssueStored>) =>
                await actions.activeIssuesInActivityCitiesOpenPageAction!(params.row, false)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
        rowCount={rowsPerPage}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.activeIssuesInActivityCitiesFilterAction && true ? (
                <Button
                  id="User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.activeIssuesInActivityCitiesFilterAction!(
                      'User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceTableFilterButton',
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
                    'service.UserIssues.UserIssues_View_Edit.root.tabBar.activeIssuesByActivityArea.tabBar.activeByActivityInCity.activeIssuesInActivityCities.Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.activeIssuesInActivityCitiesRefreshAction && true ? (
                <Button
                  id="User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getActiveIssuesInActivityCitiesMask
                        ? actions.getActiveIssuesInActivityCitiesMask()
                        : queryCustomizer._mask,
                    };
                    await actions.activeIssuesInActivityCitiesRefreshAction!(processedQueryCustomizer);
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserIssues.UserIssues_View_Edit.root.tabBar.activeIssuesByActivityArea.tabBar.activeByActivityInCity.activeIssuesInActivityCities.Refresh',
                    { defaultValue: 'Refresh' },
                  )}
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
