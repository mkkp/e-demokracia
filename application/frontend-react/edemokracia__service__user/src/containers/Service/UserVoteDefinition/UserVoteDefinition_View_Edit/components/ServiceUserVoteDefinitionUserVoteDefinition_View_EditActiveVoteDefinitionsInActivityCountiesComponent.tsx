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
  columnsActionCalculator,
  dateTimeColumnOperators,
  numericColumnOperators,
  singleSelectColumnOperators,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type {
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
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

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentActionDefinitions {
  activeVoteDefinitionsInActivityCountiesOpenAddSelectorAction?: () => Promise<void>;
  activeVoteDefinitionsInActivityCountiesBulkRemoveAction?: (
    selectedRows: ServiceVoteDefinitionStored[],
  ) => Promise<DialogResult<ServiceVoteDefinitionStored[]>>;
  activeVoteDefinitionsInActivityCountiesFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  activeVoteDefinitionsInActivityCountiesRefreshAction?: (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ) => Promise<ServiceVoteDefinitionStored[]>;
  activeVoteDefinitionsInActivityCountiesRemoveAction?: (
    row: ServiceVoteDefinitionStored,
    silentMode?: boolean,
  ) => Promise<void>;
  activeVoteDefinitionsInActivityCountiesOpenPageAction?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  activeVoteDefinitionsInActivityCountiesVoteRatingAction?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  activeVoteDefinitionsInActivityCountiesVoteSelectAnswerAction?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  activeVoteDefinitionsInActivityCountiesVoteYesNoAction?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  activeVoteDefinitionsInActivityCountiesVoteYesNoAbstainAction?: (row: ServiceVoteDefinitionStored) => Promise<void>;
}

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentProps {
  uniqueId: string;
  actions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceUserVoteDefinitionStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable
// Name: activeVoteDefinitionsInActivityCounties
export function ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponent(
  props: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceVoteDefinitionStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'countyRepresentation', sort: 'asc' }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceVoteDefinitionQueryCustomizer>({
    _mask: '{countyRepresentation,title,voteType,numberOfVotes,created,closeAt,status}',
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
  const [lastItem, setLastItem] = useState<ServiceVoteDefinitionStored>();
  const [firstItem, setFirstItem] = useState<ServiceVoteDefinitionStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);

  const selectedRows = useRef<ServiceVoteDefinitionStored[]>([]);

  const countyRepresentationColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'countyRepresentation',
    headerName: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.countyRepresentation', {
      defaultValue: 'CountyRepresentation',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const titleColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'title',
    headerName: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.title', { defaultValue: 'Title' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const voteTypeColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'voteType',
    headerName: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteType', {
      defaultValue: 'VoteType',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    sortable: false,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.VoteType.${value}`, { defaultValue: value });
      }
    },
    description: t('judo.pages.table.column.not-sortable', { defaultValue: 'This column is not sortable.' }) as string,
  };
  const numberOfVotesColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'numberOfVotes',
    headerName: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.numberOfVotes', {
      defaultValue: 'NumberOfVotes',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 100,
    type: 'number',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
      return value && new Intl.NumberFormat(l10nLocale).format(value);
    },
  };
  const createdColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.created', {
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
  const closeAtColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'closeAt',
    headerName: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.closeAt', {
      defaultValue: 'CloseAt',
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
  const statusColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'status',
    headerName: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.status', {
      defaultValue: 'Status',
    }) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    sortable: false,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.VoteStatus.${value}`, { defaultValue: value });
      }
    },
    description: t('judo.pages.table.column.not-sortable', { defaultValue: 'This column is not sortable.' }) as string,
  };

  const columns = useMemo<GridColDef<ServiceVoteDefinitionStored>[]>(
    () => [
      countyRepresentationColumn,
      titleColumn,
      voteTypeColumn,
      numberOfVotesColumn,
      createdColumn,
      closeAtColumn,
      statusColumn,
    ],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceVoteDefinitionStored>[] = [
    {
      id: 'User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableRowRemoveButton',
      label: t(
        'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.ActiveVoteDefinitionsByOwnerActivityArea.tabBar.ActiveVoteDefinitionsInActivityCountiesGroup.activeVoteDefinitionsInActivityCounties.Remove',
        { defaultValue: 'Remove' },
      ) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceVoteDefinitionStored) => !isFormUpdateable() || isLoading,
      action: actions.activeVoteDefinitionsInActivityCountiesRemoveAction
        ? async (rowData) => {
            await actions.activeVoteDefinitionsInActivityCountiesRemoveAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_T5_dsI4jEe29qs15q2b6yw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteRating', {
        defaultValue: 'voteRating',
      }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceVoteDefinitionStored) => editMode || !row.isRatingType || isLoading,
      action: actions.activeVoteDefinitionsInActivityCountiesVoteRatingAction
        ? async (rowData) => {
            await actions.activeVoteDefinitionsInActivityCountiesVoteRatingAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_T6Ar0I4jEe29qs15q2b6yw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteSelectAnswer', {
        defaultValue: 'voteSelectAnswer',
      }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceVoteDefinitionStored) => editMode || !row.isSelectAnswerType || isLoading,
      action: actions.activeVoteDefinitionsInActivityCountiesVoteSelectAnswerAction
        ? async (rowData) => {
            await actions.activeVoteDefinitionsInActivityCountiesVoteSelectAnswerAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_T6DvII4jEe29qs15q2b6yw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteYesNoAbstain', {
        defaultValue: 'voteYesNoAbstain',
      }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceVoteDefinitionStored) => editMode || !row.isYesNoAbstainType || isLoading,
      action: actions.activeVoteDefinitionsInActivityCountiesVoteYesNoAbstainAction
        ? async (rowData) => {
            await actions.activeVoteDefinitionsInActivityCountiesVoteYesNoAbstainAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_T6ChAI4jEe29qs15q2b6yw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableRowButtonGroup)',
      label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteYesNo', {
        defaultValue: 'voteYesNo',
      }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceVoteDefinitionStored) => editMode || !row.isYesNoType || isLoading,
      action: actions.activeVoteDefinitionsInActivityCountiesVoteYesNoAction
        ? async (rowData) => {
            await actions.activeVoteDefinitionsInActivityCountiesVoteYesNoAction!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_SV_XSF5LEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'countyRepresentation',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.countyRepresentation', {
          defaultValue: 'CountyRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_SV-wMF5LEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'title',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_SV_XRV5LEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'voteType',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteType', {
          defaultValue: 'VoteType',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['YES_NO', 'YES_NO_ABSTAIN', 'SELECT_ANSWER', 'RATE', 'NO_VOTE'],
      },

      {
        id: 'User/(esm/_SV_XRF5LEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'numberOfVotes',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.numberOfVotes', {
          defaultValue: 'NumberOfVotes',
        }) as string,
        filterType: FilterType.numeric,
      },

      {
        id: 'User/(esm/_SV-wMV5LEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'created',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.created', {
          defaultValue: 'Created',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_SV-wNF5LEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'closeAt',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.closeAt', {
          defaultValue: 'CloseAt',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_SV-wM15LEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'status',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.status', {
          defaultValue: 'Status',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
      },
    ],
    [l10nLocale],
  );

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceVoteDefinitionQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceVoteDefinitionQueryCustomizer = {
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
        const res = await actions.activeVoteDefinitionsInActivityCountiesRefreshAction!(
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
    <div
      id="User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable"
      data-table-name="activeVoteDefinitionsInActivityCounties"
    >
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
          ...columnsActionCalculator('User/(esm/_O_SswF5BEe6vsex_cZNQbQ)/RelationType', rowActions, t, {
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
          actions.activeVoteDefinitionsInActivityCountiesOpenPageAction
            ? async (params: GridRowParams<ServiceVoteDefinitionStored>) =>
                await actions.activeVoteDefinitionsInActivityCountiesOpenPageAction!(params.row)
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
              {actions.activeVoteDefinitionsInActivityCountiesFilterAction && true ? (
                <Button
                  id="User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.activeVoteDefinitionsInActivityCountiesFilterAction!(
                      'User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableFilterButton',
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
                    'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.ActiveVoteDefinitionsByOwnerActivityArea.tabBar.ActiveVoteDefinitionsInActivityCountiesGroup.activeVoteDefinitionsInActivityCounties.Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.activeVoteDefinitionsInActivityCountiesRefreshAction && true ? (
                <Button
                  id="User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.activeVoteDefinitionsInActivityCountiesRefreshAction!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.ActiveVoteDefinitionsByOwnerActivityArea.tabBar.ActiveVoteDefinitionsInActivityCountiesGroup.activeVoteDefinitionsInActivityCounties.Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.activeVoteDefinitionsInActivityCountiesOpenAddSelectorAction && isFormUpdateable() ? (
                <Button
                  id="User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.activeVoteDefinitionsInActivityCountiesOpenAddSelectorAction!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.ActiveVoteDefinitionsByOwnerActivityArea.tabBar.ActiveVoteDefinitionsInActivityCountiesGroup.activeVoteDefinitionsInActivityCounties.Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.activeVoteDefinitionsInActivityCountiesBulkRemoveAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.activeVoteDefinitionsInActivityCountiesBulkRemoveAction!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.ActiveVoteDefinitionsByOwnerActivityArea.tabBar.ActiveVoteDefinitionsInActivityCountiesGroup.activeVoteDefinitionsInActivityCounties.BulkRemove',
                    { defaultValue: 'Remove' },
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
