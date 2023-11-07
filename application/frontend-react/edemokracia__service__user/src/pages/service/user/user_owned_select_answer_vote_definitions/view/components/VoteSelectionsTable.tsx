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
  serviceSelectAnswerVoteSelectionServiceForClassImpl,
} from '~/generated/data-axios';
import {
  useRowDeleteVoteSelectionsAction,
  useRowViewVoteSelectionsAction,
  useTableCreateVoteSelectionsAction,
  usePageRefreshUserOwnedSelectAnswerVoteDefinitionsAction,
} from '../actions';
import { applyInMemoryFilters } from '~/utilities';
import { GridLogicOperator } from '@mui/x-data-grid';

export const SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_VIEW_VOTE_SELECTIONS =
  'ServiceUserUserOwnedSelectAnswerVoteDefinitionsViewVoteSelections';

export interface VoteSelectionsTableProps {
  ownerData: ServiceSelectAnswerVoteDefinitionStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteDefinitionStored, value: any) => void;
  validation: Map<keyof ServiceSelectAnswerVoteDefinition, string>;
}

export const VoteSelectionsTable = (props: VoteSelectionsTableProps) => {
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { openFilterDialog } = useFilterDialog();
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const openCRUDDialog = useCRUDDialog();

  const filterModelKey = `TableedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualVoteSelectionsLabelWrapperVoteSelections-${ownerData.__identifier}-filterModel`;
  const filtersKey = `TableedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualVoteSelectionsLabelWrapperVoteSelections-${ownerData.__identifier}-filters`;
  const [voteSelectionsFilterModel, setVoteSelectionsFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [data, setData] = useState<ServiceSelectAnswerVoteSelectionStored[]>([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const selectedRows = useRef<ServiceSelectAnswerVoteSelectionStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  const [voteSelectionsSortModel, setVoteSelectionsSortModel] = useState<GridSortModel>([
    { field: 'description', sort: null },
  ]);

  const voteSelectionsColumns: GridColDef<ServiceSelectAnswerVoteSelectionStored>[] = [
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('service.SelectAnswerVoteDefinitionView.voteSelections.description', {
        defaultValue: 'Description',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('service.SelectAnswerVoteDefinitionView.voteSelections.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const voteSelectionsRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualVoteSelectionsLabelWrapperVoteSelectionsDescriptionFilter',
      attributeName: 'description',
      label: t('service.SelectAnswerVoteDefinitionView.voteSelections.description', {
        defaultValue: 'Description',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualVoteSelectionsLabelWrapperVoteSelectionsTitleFilter',
      attributeName: 'title',
      label: t('service.SelectAnswerVoteDefinitionView.voteSelections.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },
  ];

  const voteSelectionsInitialQueryCustomizer: ServiceSelectAnswerVoteSelectionQueryCustomizer = {
    _mask: '{description,title}',
    _orderBy: voteSelectionsSortModel.length
      ? [
          {
            attribute: voteSelectionsSortModel[0].field,
            descending: voteSelectionsSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const rowDeleteVoteSelectionsAction = useRowDeleteVoteSelectionsAction();
  const rowViewVoteSelectionsAction = useRowViewVoteSelectionsAction();
  const tableCreateVoteSelectionsAction = useTableCreateVoteSelectionsAction();
  const pageRefreshUserOwnedSelectAnswerVoteDefinitionsAction =
    usePageRefreshUserOwnedSelectAnswerVoteDefinitionsAction();

  const voteSelectionsRowActions: TableRowAction<ServiceSelectAnswerVoteSelectionStored>[] = [
    {
      id: 'DeleteActionedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceSelectAnswerVoteDefinitionVoteSelectionsRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: ServiceSelectAnswerVoteSelectionStored) =>
        rowDeleteVoteSelectionsAction(ownerData, row, () => fetchOwnerData()),
      disabled: (row: ServiceSelectAnswerVoteSelectionStored) => editMode || !row.__deleteable,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualVoteSelectionsLabelWrapperVoteSelectionsDescriptionFilter',
      attributeName: 'description',
      label: t('service.SelectAnswerVoteDefinitionView.voteSelections.description', {
        defaultValue: 'Description',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualVoteSelectionsLabelWrapperVoteSelectionsTitleFilter',
      attributeName: 'title',
      label: t('service.SelectAnswerVoteDefinitionView.voteSelections.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },
  ];

  const filter = async (id: string, filterOptions: FilterOption[], filters: Filter[]) => {
    const newFilters = await openFilterDialog(id, filterOptions, filters);

    if (Array.isArray(newFilters)) {
      setPaginationModel((prevState) => ({
        ...prevState,
        page: 0,
      }));
      setFilters(newFilters);
      setItemStringified(filtersKey, newFilters);
    }
  };

  const bulkDeleteSelected = useCallback(() => {
    openCRUDDialog<ServiceSelectAnswerVoteSelectionStored>({
      dialogTitle: t('judo.dialogs.crud-bulk.delete.title', { defaultValue: 'Delete selected items' }),
      itemTitleFn: (item) => item.description!,
      selectedItems: selectedRows.current,
      action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
        await rowDeleteVoteSelectionsAction(ownerData, item, successHandler, errorHandler, true);
      },
      onClose: (needsRefresh) => {
        if (needsRefresh) {
          fetchOwnerData();
          setSelectionModel([]); // not resetting on fetchData because refreshes would always remove selections...
        }
      },
    });
  }, []);
  const isBulkDeleteAvailable: () => boolean = useCallback(() => {
    // every row has the same `__deleteable` flag
    return !!selectionModel.length && true && isFormUpdateable() && !false && !!data[0]?.__deleteable;
  }, [ownerData, data, selectionModel]);

  useEffect(() => {
    if (ownerData?.__identifier) {
      const storedFilters = getItemParsed<Filter[]>(filtersKey);
      if (storedFilters !== null) {
        setFilters(storedFilters);
      }

      const storedFilterModel = getItemParsed<GridFilterModel>(filterModelKey);
      if (storedFilterModel !== null) {
        setVoteSelectionsFilterModel(storedFilterModel);
      }
    }
  }, [ownerData]);

  useEffect(() => {
    const newData = applyInMemoryFilters<ServiceSelectAnswerVoteSelectionStored>(
      filters,
      ownerData?.voteSelections ?? [],
    );
    setData(newData);
  }, [ownerData?.voteSelections, filters]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) =>
            props.validation.has('voteSelections') ? `2px solid ${theme.palette.error.main}` : undefined,
        }}
        slotProps={{
          filterPanel: {
            logicOperators: [GridLogicOperator.And],
          },
        }}
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isOwnerLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...voteSelectionsColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaServiceUserEdemokraciaServiceSelectAnswerVoteDefinitionVoteSelections',
            voteSelectionsRowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setSelectionModel(newRowSelectionModel);
        }}
        onRowClick={(params: GridRowParams<ServiceSelectAnswerVoteSelectionStored>) => {
          if (!editMode) {
            rowViewVoteSelectionsAction(ownerData, params.row, () => fetchOwnerData());
          }
        }}
        sortModel={voteSelectionsSortModel}
        onSortModelChange={(newModel: GridSortModel) => {
          setVoteSelectionsSortModel(newModel);
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="CreateActionedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceSelectAnswerVoteDefinitionVoteSelectionsTableCreate"
                startIcon={<MdiIcon path="file_document_plus" />}
                variant="text"
                onClick={() =>
                  tableCreateVoteSelectionsAction(ownerData, () => {
                    fetchOwnerData();
                  })
                }
                disabled={editMode || isOwnerLoading || false || !isFormUpdateable()}
              >
                {t('judo.pages.table.create', { defaultValue: 'Create' })}
              </Button>
              <Button
                id="TableedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualVoteSelectionsLabelWrapperVoteSelections-filter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() =>
                  filter(
                    'TableedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualVoteSelectionsLabelWrapperVoteSelections-filter',
                    filterOptions,
                    filters,
                  )
                }
                disabled={isOwnerLoading}
              >
                {t('judo.pages.table.set-filters', { defaultValue: 'Set filters' }) +
                  (filters.length !== 0 ? ' (' + filters.length + ')' : '')}
              </Button>
              {isBulkDeleteAvailable() ? (
                <Button
                  id="RelationTypeedemokraciaServiceUserEdemokraciaServiceSelectAnswerVoteDefinitionVoteSelections-bulk-delete"
                  disabled={isOwnerLoading || editMode}
                  variant="text"
                  startIcon={<MdiIcon path="delete-forever" />}
                  onClick={bulkDeleteSelected}
                >
                  {t('judo.pages.table.delete.selected', { defaultValue: 'Delete' })}
                </Button>
              ) : null}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
        }}
      />
      {props.validation.has('voteSelections') && (
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
          <Typography>{props.validation.get('voteSelections')}</Typography>
        </Box>
      )}
    </>
  );
};
