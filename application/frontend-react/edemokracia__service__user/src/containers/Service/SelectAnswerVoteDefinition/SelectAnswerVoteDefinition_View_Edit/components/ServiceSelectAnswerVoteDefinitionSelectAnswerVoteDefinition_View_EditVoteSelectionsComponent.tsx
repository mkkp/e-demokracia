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
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
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

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponentActionDefinitions {
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsAddOpenSelector?: () => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsBulkDelete?: (
    selectedRows: ServiceSelectAnswerVoteSelectionStored[],
  ) => Promise<DialogResult<ServiceSelectAnswerVoteSelectionStored[]>>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsBulkRemove?: (
    selectedRows: ServiceSelectAnswerVoteSelectionStored[],
  ) => Promise<DialogResult<ServiceSelectAnswerVoteSelectionStored[]>>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsClear?: () => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsCreateOpen?: () => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsRefresh?: (
    queryCustomizer: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ) => Promise<ServiceSelectAnswerVoteSelectionStored[]>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsDelete?: (
    row: ServiceSelectAnswerVoteSelectionStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsRemove?: (
    row: ServiceSelectAnswerVoteSelectionStored,
    silentMode?: boolean,
  ) => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsView?: (
    row: ServiceSelectAnswerVoteSelectionStored,
  ) => Promise<void>;
}

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponentProps {
  uniqueId: string;
  actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceSelectAnswerVoteDefinition;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable
// Name: voteSelections
export function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponent(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponentProps,
) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceSelectAnswerVoteSelectionStored>[]>(
    ownerData?.voteSelections || [],
  );
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'description', sort: 'asc' }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceSelectAnswerVoteSelectionQueryCustomizer>({
    _mask: '{description,title}',
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

  const selectedRows = useRef<ServiceSelectAnswerVoteSelectionStored[]>([]);

  const columns: GridColDef<ServiceSelectAnswerVoteSelectionStored>[] = [
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.description', {
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
      headerName: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.title', {
        defaultValue: 'Title',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const rowActions: TableRowAction<ServiceSelectAnswerVoteSelectionStored>[] = [
    {
      id: 'User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceTableRowRemoveButton',
      label: t(
        'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::VoteEntryBase::virtual::voteSelections::Remove',
        { defaultValue: 'Remove' },
      ) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceSelectAnswerVoteSelectionStored) => isLoading,
      action:
        actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsRemove
          ? async (rowData) => {
              await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsRemove!(
                rowData,
              );
            }
          : undefined,
    },
    {
      id: 'User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceTableRowDeleteButton',
      label: t(
        'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::VoteEntryBase::virtual::voteSelections::Delete',
        { defaultValue: 'Delete' },
      ) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceSelectAnswerVoteSelectionStored) => editMode || !row.__deleteable || isLoading,
      action:
        actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsDelete
          ? async (rowData) => {
              await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsDelete!(
                rowData,
              );
            }
          : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_fzsMkn2GEe6V8KKnnZfChA',
      attributeName: 'description',
      label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.description::Filter', {
        defaultValue: 'Description',
      }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fzszon2GEe6V8KKnnZfChA',
      attributeName: 'title',
      label: t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.title::Filter', {
        defaultValue: 'Title',
      }) as string,
      filterType: FilterType.string,
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPaginationModel((prevState) => ({
      ...prevState,
      page: 0,
    }));
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceSelectAnswerVoteSelectionQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceSelectAnswerVoteSelectionQueryCustomizer = {
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
          ...columnsActionCalculator('User/(esm/_-cKskFtqEe6Mx9dH3yj5gQ)/RelationType', rowActions, t, {
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
          actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsView
            ? async (params: GridRowParams<ServiceSelectAnswerVoteSelectionStored>) =>
                await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsView!(
                  params.row,
                )
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsFilter &&
              true ? (
                <Button
                  id="User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults =
                      await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsFilter!(
                        'User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceTableFilterButton',
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
                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::VoteEntryBase::virtual::voteSelections::Filter',
                    { defaultValue: 'Set Filters' },
                  )}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsRefresh &&
              true ? (
                <Button
                  id="User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::VoteEntryBase::virtual::voteSelections::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </Button>
              ) : null}
              {actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsCreateOpen &&
              true ? (
                <Button
                  id="User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsCreateOpen!();
                  }}
                  disabled={editMode || isLoading}
                >
                  {t(
                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::VoteEntryBase::virtual::voteSelections::Create',
                    { defaultValue: 'Create' },
                  )}
                </Button>
              ) : null}
              {actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsAddOpenSelector &&
              true ? (
                <Button
                  id="User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsAddOpenSelector!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::VoteEntryBase::virtual::voteSelections::Add',
                    { defaultValue: 'Add' },
                  )}
                </Button>
              ) : null}
              {actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsClear &&
              data.length ? (
                <Button
                  id="User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsClear!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t(
                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::VoteEntryBase::virtual::voteSelections::Clear',
                    { defaultValue: 'Clear' },
                  )}
                </Button>
              ) : null}
              {actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsBulkRemove &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsBulkRemove!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::VoteEntryBase::virtual::voteSelections::BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsBulkDelete &&
              selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsBulkDelete!(
                        selectedRows.current,
                      );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::VoteEntryBase::virtual::voteSelections::BulkDelete',
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
