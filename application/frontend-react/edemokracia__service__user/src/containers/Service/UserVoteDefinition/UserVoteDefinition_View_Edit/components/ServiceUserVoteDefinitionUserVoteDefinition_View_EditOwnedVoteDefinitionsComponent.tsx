//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/table.tsx
// Template file: actor/src/containers/components/table.tsx.hbs

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import type { JudoIdentifiable } from '@judo/data-api-common';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
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
  dateTimeColumnOperators,
  numericColumnOperators,
  singleSelectColumnOperators,
  columnsActionCalculator,
  ContextMenu,
  StripedDataGrid,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import type {
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/services/data-api';
import { useL10N } from '~/l10n/l10n-context';
import {
  getUpdatedRowsSelected,
  serviceDateToUiDate,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult, TableRowAction } from '~/utilities';
import { useDataStore } from '~/hooks';
import { OBJECTCLASS } from '@pandino/pandino-api';

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponentActionDefinitions {
  ownedVoteDefinitionsFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  ownedVoteDefinitionsRefreshAction?: (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ) => Promise<ServiceVoteDefinitionStored[]>;
  ownedVoteDefinitionsOpenPageAction?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  ownedVoteDefinitionsVoteRatingAction?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  ownedVoteDefinitionsVoteSelectAnswerAction?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  ownedVoteDefinitionsVoteYesNoAction?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  ownedVoteDefinitionsVoteYesNoAbstainAction?: (row: ServiceVoteDefinitionStored) => Promise<void>;
}

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponentProps {
  uniqueId: string;
  actions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceUserVoteDefinitionStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable
// Name: ownedVoteDefinitions
export function ServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponent(
  props: ServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceVoteDefinitionStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'title', sort: 'asc' }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceVoteDefinitionQueryCustomizer>({
    _mask:
      '{scope,title,voteType,countyRepresentation,cityRepresentation,districtRepresentation,numberOfVotes,created,closeAt,status}',
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

  const columns = useMemo<GridColDef<ServiceVoteDefinitionStored>[]>(
    () => [
      {
        ...baseColumnConfig,
        field: 'scope',
        headerName: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.scope', {
          defaultValue: 'Scope',
        }) as string,
        headerClassName: 'data-grid-column-header',

        width: 170,
        type: 'singleSelect',
        filterable: false && true,
        sortable: false,
        valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
          if (value !== undefined && value !== null) {
            return t(`enumerations.IssueScope.${value}`, { defaultValue: value });
          }
        },
        description: t('judo.pages.table.column.not-sortable', {
          defaultValue: 'This column is not sortable.',
        }) as string,
      },
      {
        ...baseColumnConfig,
        field: 'title',
        headerName: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.title', {
          defaultValue: 'Title',
        }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
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
        description: t('judo.pages.table.column.not-sortable', {
          defaultValue: 'This column is not sortable.',
        }) as string,
      },
      {
        ...baseColumnConfig,
        field: 'countyRepresentation',
        headerName: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.countyRepresentation', {
          defaultValue: 'CountyRepresentation',
        }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'cityRepresentation',
        headerName: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.cityRepresentation', {
          defaultValue: 'CityRepresentation',
        }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'districtRepresentation',
        headerName: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.districtRepresentation', {
          defaultValue: 'DistrictRepresentation',
        }) as string,
        headerClassName: 'data-grid-column-header',

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
        description: t('judo.pages.table.column.not-sortable', {
          defaultValue: 'This column is not sortable.',
        }) as string,
      },
    ],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceVoteDefinitionStored>[] = [
    {
      id: 'User/(esm/_T6DvII4jEe29qs15q2b6yw)/OperationFormTableRowCallOperationButton/(discriminator/_Wq9bxY7EEe6rlbj78nBB0Q)',
      label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteYesNoAbstain', {
        defaultValue: 'voteYesNoAbstain',
      }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceVoteDefinitionStored) => editMode || !row.isYesNoAbstainType || isLoading,
      action: actions.ownedVoteDefinitionsVoteYesNoAbstainAction
        ? async (rowData) => {
            await actions.ownedVoteDefinitionsVoteYesNoAbstainAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_T6ChAI4jEe29qs15q2b6yw)/OperationFormTableRowCallOperationButton/(discriminator/_Wq9bxY7EEe6rlbj78nBB0Q)',
      label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteYesNo', {
        defaultValue: 'voteYesNo',
      }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceVoteDefinitionStored) => editMode || !row.isYesNoType || isLoading,
      action: actions.ownedVoteDefinitionsVoteYesNoAction
        ? async (rowData) => {
            await actions.ownedVoteDefinitionsVoteYesNoAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_T6Ar0I4jEe29qs15q2b6yw)/OperationFormTableRowCallOperationButton/(discriminator/_Wq9bxY7EEe6rlbj78nBB0Q)',
      label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteSelectAnswer', {
        defaultValue: 'voteSelectAnswer',
      }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceVoteDefinitionStored) => editMode || !row.isSelectAnswerType || isLoading,
      action: actions.ownedVoteDefinitionsVoteSelectAnswerAction
        ? async (rowData) => {
            await actions.ownedVoteDefinitionsVoteSelectAnswerAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_T5_dsI4jEe29qs15q2b6yw)/OperationFormTableRowCallOperationButton/(discriminator/_Wq9bxY7EEe6rlbj78nBB0Q)',
      label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteRating', {
        defaultValue: 'voteRating',
      }) as string,
      icon: <MdiIcon path="vote" />,
      disabled: (row: ServiceVoteDefinitionStored) => editMode || !row.isRatingType || isLoading,
      action: actions.ownedVoteDefinitionsVoteRatingAction
        ? async (rowData) => {
            await actions.ownedVoteDefinitionsVoteRatingAction!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: '_Wq38MI7EEe6rlbj78nBB0Q',
        attributeName: 'scope',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.scope', { defaultValue: 'Scope' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
      },

      {
        id: '_Wq4jQI7EEe6rlbj78nBB0Q',
        attributeName: 'title',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: '_Wq5KUI7EEe6rlbj78nBB0Q',
        attributeName: 'voteType',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteType', {
          defaultValue: 'VoteType',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['YES_NO', 'YES_NO_ABSTAIN', 'SELECT_ANSWER', 'RATE', 'NO_VOTE'],
      },

      {
        id: '_Wq5xYI7EEe6rlbj78nBB0Q',
        attributeName: 'countyRepresentation',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.countyRepresentation', {
          defaultValue: 'CountyRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: '_Wq6YcI7EEe6rlbj78nBB0Q',
        attributeName: 'cityRepresentation',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.cityRepresentation', {
          defaultValue: 'CityRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: '_Wq6_gI7EEe6rlbj78nBB0Q',
        attributeName: 'districtRepresentation',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.districtRepresentation', {
          defaultValue: 'DistrictRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: '_Wq6_hI7EEe6rlbj78nBB0Q',
        attributeName: 'numberOfVotes',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.numberOfVotes', {
          defaultValue: 'NumberOfVotes',
        }) as string,
        filterType: FilterType.numeric,
      },

      {
        id: '_Wq7mk47EEe6rlbj78nBB0Q',
        attributeName: 'created',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.created', {
          defaultValue: 'Created',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: '_Wq8Noo7EEe6rlbj78nBB0Q',
        attributeName: 'closeAt',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.closeAt', {
          defaultValue: 'CloseAt',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: '_Wq80so7EEe6rlbj78nBB0Q',
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
    if (!isLoading && ownerData.__signedIdentifier) {
      setIsLoading(true);

      try {
        const res = await actions.ownedVoteDefinitionsRefreshAction!(processQueryCustomizer(queryCustomizer));

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
      id="User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable"
      data-table-name="ownedVoteDefinitions"
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
          ...columnsActionCalculator('User/(esm/_7OZ8MF5AEe6vsex_cZNQbQ)/RelationType', rowActions, t, {
            shownActions: 2,
          }),
        ]}
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        onRowClick={
          actions.ownedVoteDefinitionsOpenPageAction
            ? async (params: GridRowParams<ServiceVoteDefinitionStored>) =>
                await actions.ownedVoteDefinitionsOpenPageAction!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.ownedVoteDefinitionsFilterAction && true ? (
                <Button
                  id="User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.ownedVoteDefinitionsFilterAction!(
                      'User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceTableFilterButton',
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
                    'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.OwnedVoteDefinitionsGroup.ownedVoteDefinitions.Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.ownedVoteDefinitionsRefreshAction && true ? (
                <Button
                  id="User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.ownedVoteDefinitionsRefreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.OwnedVoteDefinitionsGroup.ownedVoteDefinitions.Refresh',
                    { defaultValue: 'Refresh' },
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
