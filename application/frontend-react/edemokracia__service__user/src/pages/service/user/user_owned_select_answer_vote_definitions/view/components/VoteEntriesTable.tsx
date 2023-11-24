//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/table.tsx
// Template file: actor/src/pages/components/table.tsx.hbs

import { useEffect, useState, useImperativeHandle, useMemo, useRef, forwardRef, useCallback } from 'react';
import type { MouseEvent } from 'react';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
import type {
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridValueFormatterParams,
  GridRowClassNameParams,
  GridRowId,
  GridRowModel,
  GridRowSelectionModel,
  GridSortItem,
} from '@mui/x-data-grid';
import { GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import { MdiIcon, CustomTablePagination } from '~/components';
import { baseColumnConfig, baseTableConfig, toastConfig, DIVIDER_HEIGHT } from '~/config';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { columnsActionCalculator } from '~/components/table';
import { FilterOption, FilterType, Filter } from '~/components-api';
import type { PersistedTableData, RefreshableTable, TableRowAction } from '~/utilities';
import { useDataStore, useCRUDDialog } from '~/hooks';
import {
  decodeToken,
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  processQueryCustomizer,
  mapAllFiltersToQueryCustomizerProperties,
  mapFilterModelToFilters,
  mapFilterToFilterModel,
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  getUpdatedRowsSelected,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';
import { ContextMenu, StripedDataGrid } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';

import { Box, Typography } from '@mui/material';
import {
  EdemokraciaVoteStatus,
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteEntryStored,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/generated/data-api';
import {
  serviceSelectAnswerVoteDefinitionServiceForClassImpl,
  serviceSelectAnswerVoteEntryServiceForClassImpl,
} from '~/generated/data-axios';
import {
  useRowViewVoteEntriesAction,
  useTableActionVoteEntriesAction,
  useTableRefreshRelationVoteEntriesAction,
  usePageRefreshUserOwnedSelectAnswerVoteDefinitionsAction,
} from '../actions';
import { GridLogicOperator } from '@mui/x-data-grid';

export const SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_VIEW_VOTE_ENTRIES =
  'ServiceUserUserOwnedSelectAnswerVoteDefinitionsViewVoteEntries';

export interface VoteEntriesTableProps {
  ownerData: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteDefinitionStored, value: any) => void;
  refreshCounter: number;
  validation: Map<keyof ServiceSelectAnswerVoteDefinition, string>;
}

export const VoteEntriesTable = forwardRef<RefreshableTable, VoteEntriesTableProps>((props, ref) => {
  const { getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { ownerData, isOwnerLoading, fetchOwnerData, editMode, isFormUpdateable, refreshCounter } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const openCRUDDialog = useCRUDDialog();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceSelectAnswerVoteEntryStored>[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'created', sort: null }]);
  const filterModelKey = `TableedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditEntriesLabelWrapperEntriesVoteEntriesLabelWrapperVoteEntries-${ownerData.__signedIdentifier}-filterModel`;
  const filtersKey = `TableedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditEntriesLabelWrapperEntriesVoteEntriesLabelWrapperVoteEntries-${ownerData.__signedIdentifier}-filters`;
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [lastItem, setLastItem] = useState<ServiceSelectAnswerVoteEntryStored>();
  const [firstItem, setFirstItem] = useState<ServiceSelectAnswerVoteEntryStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceSelectAnswerVoteEntryQueryCustomizer>({
    _mask: '{created,createdBy,valueRepresentation}',
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

  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const selectedRows = useRef<ServiceSelectAnswerVoteEntryStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  const voteEntriesSortModel: GridSortModel = [{ field: 'created', sort: null }];

  const voteEntriesColumns: GridColDef<ServiceSelectAnswerVoteEntryStored>[] = [
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.SelectAnswerVoteDefinitionView.voteEntries.created', {
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
      field: 'createdBy',
      headerName: t('service.SelectAnswerVoteDefinitionView.voteEntries.createdBy', {
        defaultValue: 'CreatedBy',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'valueRepresentation',
      headerName: t('service.SelectAnswerVoteDefinitionView.voteEntries.valueRepresentation', {
        defaultValue: 'ValueRepresentation',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const voteEntriesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditEntriesLabelWrapperEntriesVoteEntriesLabelWrapperVoteEntriesCreatedFilter',
      attributeName: 'created',
      label: t('service.SelectAnswerVoteDefinitionView.voteEntries.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditEntriesLabelWrapperEntriesVoteEntriesLabelWrapperVoteEntriesCreatedByFilter',
      attributeName: 'createdBy',
      label: t('service.SelectAnswerVoteDefinitionView.voteEntries.createdBy', { defaultValue: 'CreatedBy' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditEntriesLabelWrapperEntriesVoteEntriesLabelWrapperVoteEntriesValueRepresentationFilter',
      attributeName: 'valueRepresentation',
      label: t('service.SelectAnswerVoteDefinitionView.voteEntries.valueRepresentation', {
        defaultValue: 'ValueRepresentation',
      }) as string,
      filterType: FilterType.string,
    },
  ];

  const voteEntriesInitialQueryCustomizer: ServiceSelectAnswerVoteEntryQueryCustomizer = {
    _mask: '{created,createdBy,valueRepresentation}',
    _orderBy: voteEntriesSortModel.length
      ? [
          {
            attribute: voteEntriesSortModel[0].field,
            descending: voteEntriesSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const rowViewVoteEntriesAction = useRowViewVoteEntriesAction();
  const tableActionVoteEntriesAction = useTableActionVoteEntriesAction(
    setFilters,
    setPage,
    setQueryCustomizer,
    openFilterDialog,
    10,
  );
  const tableRefreshRelationVoteEntriesAction = useTableRefreshRelationVoteEntriesAction();
  const pageRefreshUserOwnedSelectAnswerVoteDefinitionsAction =
    usePageRefreshUserOwnedSelectAnswerVoteDefinitionsAction();

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditEntriesLabelWrapperEntriesVoteEntriesLabelWrapperVoteEntriesCreatedFilter',
      attributeName: 'created',
      label: t('service.SelectAnswerVoteDefinitionView.voteEntries.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditEntriesLabelWrapperEntriesVoteEntriesLabelWrapperVoteEntriesCreatedByFilter',
      attributeName: 'createdBy',
      label: t('service.SelectAnswerVoteDefinitionView.voteEntries.createdBy', { defaultValue: 'CreatedBy' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditEntriesLabelWrapperEntriesVoteEntriesLabelWrapperVoteEntriesValueRepresentationFilter',
      attributeName: 'valueRepresentation',
      label: t('service.SelectAnswerVoteDefinitionView.voteEntries.valueRepresentation', {
        defaultValue: 'ValueRepresentation',
      }) as string,
      filterType: FilterType.string,
    },
  ];

  const rowActions: TableRowAction<ServiceSelectAnswerVoteEntryStored>[] = [];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceSelectAnswerVoteEntryQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of voteEntriesColumns.map((c) => c.field)) {
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
      const strippedQueryCustomizer: ServiceSelectAnswerVoteEntryQueryCustomizer = {
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

  async function fetchData() {
    if (ownerData && ownerData.__signedIdentifier) {
      setIsLoading(true);

      try {
        const res = await serviceSelectAnswerVoteDefinitionServiceForClassImpl.getVoteEntries(
          ownerData,
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
        handleFetchError(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  useImperativeHandle(ref, () => ({
    fetchData,
  }));

  useEffect(() => {
    fetchData();
  }, [queryCustomizer, refreshCounter]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) =>
            props.validation.has('voteEntries') ? `2px solid ${theme.palette.error.main}` : undefined,
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
          ...voteEntriesColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaServiceUserEdemokraciaServiceSelectAnswerVoteDefinitionVoteEntries',
            rowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        onRowClick={(params: GridRowParams<ServiceSelectAnswerVoteEntryStored>) =>
          rowViewVoteEntriesAction(ownerData, params.row, () => fetchOwnerData())
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="FilterRelationActionedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceSelectAnswerVoteDefinitionVoteEntriesTableAction"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() => {
                  tableActionVoteEntriesAction(
                    'FilterRelationActionedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceSelectAnswerVoteDefinitionVoteEntriesTableAction-filter',
                    filterOptions,
                    filters,
                  );
                }}
                disabled={isLoading}
              >
                {t('judo.pages.table.set-filters', { defaultValue: 'Set filters' }) +
                  (filters.length !== 0 ? ' (' + filters.length + ')' : '')}
              </Button>
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
      {props.validation.has('voteEntries') && (
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
          <Typography>{props.validation.get('voteEntries')}</Typography>
        </Box>
      )}
    </>
  );
});