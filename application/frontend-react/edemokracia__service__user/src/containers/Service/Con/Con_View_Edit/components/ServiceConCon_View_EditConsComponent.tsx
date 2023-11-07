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
import type { ServiceCon, ServiceConQueryCustomizer, ServiceConStored } from '~/services/data-api';
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

export interface ServiceConCon_View_EditConsComponentActionDefinitions {
  serviceConCon_View_EditArgumentsConsTableConsAddOpenSelector?: () => Promise<void>;
  serviceConCon_View_EditArgumentsConsTableConsBulkDelete?: (
    selectedRows: ServiceConStored[],
  ) => Promise<DialogResult<ServiceConStored[]>>;
  serviceConCon_View_EditArgumentsConsTableConsBulkRemove?: (
    selectedRows: ServiceConStored[],
  ) => Promise<DialogResult<ServiceConStored[]>>;
  serviceConCon_View_EditArgumentsConsTableConsClear?: () => Promise<void>;
  serviceConCon_View_EditArgumentsConsTableConsCreateOpen?: () => Promise<void>;
  serviceConCon_View_EditArgumentsConsTableConsFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceConCon_View_EditArgumentsConsTableConsRefresh?: (
    queryCustomizer: ServiceConQueryCustomizer,
  ) => Promise<ServiceConStored[]>;
  serviceConCon_View_EditArgumentsConsActionsCreateConArgumentOpenForm?: (row: ServiceConStored) => Promise<void>;
  serviceConCon_View_EditArgumentsProsActionsCreateProArgumentOpenForm?: (row: ServiceConStored) => Promise<void>;
  serviceConCon_View_EditArgumentsConsTableConsDelete?: (row: ServiceConStored, silentMode?: boolean) => Promise<void>;
  serviceConCon_View_EditArgumentsConsTableConsRemove?: (row: ServiceConStored, silentMode?: boolean) => Promise<void>;
  serviceConCon_View_EditArgumentsConsTableConsView?: (row: ServiceConStored) => Promise<void>;
  serviceConCon_View_EditConVoteDown?: (row: ServiceConStored, silentMode?: boolean) => Promise<void>;
  serviceConCon_View_EditConVoteUp?: (row: ServiceConStored, silentMode?: boolean) => Promise<void>;
}

export interface ServiceConCon_View_EditConsComponentProps {
  uniqueId: string;
  actions: ServiceConCon_View_EditConsComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceCon;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable
// Name: cons
export function ServiceConCon_View_EditConsComponent(props: ServiceConCon_View_EditConsComponentProps) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceConStored>[]>(ownerData?.cons || []);
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
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceConQueryCustomizer>({
    _mask: '{title,upVotes,downVotes}',
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

  const selectedRows = useRef<ServiceConStored[]>([]);

  const columns: GridColDef<ServiceConStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('service.Con.Con.View.Edit.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'upVotes',
      headerName: t('service.Con.Con.View.Edit.upVotes', { defaultValue: 'up' }) as string,
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
      headerName: t('service.Con.Con.View.Edit.downVotes', { defaultValue: 'down' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      filterable: false && true,
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
  ];

  const rowActions: TableRowAction<ServiceConStored>[] = [
    {
      id: 'User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceTableRowRemoveButton',
      label: t('service.Con.Con.View.Edit.service::Con::Con_View_Edit::Arguments::cons::table::cons::Remove', {
        defaultValue: 'Remove',
      }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceConStored) => isLoading,
      action: actions.serviceConCon_View_EditArgumentsConsTableConsRemove
        ? async (rowData) => {
            await actions.serviceConCon_View_EditArgumentsConsTableConsRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceTableRowDeleteButton',
      label: t('service.Con.Con.View.Edit.service::Con::Con_View_Edit::Arguments::cons::table::cons::Delete', {
        defaultValue: 'Delete',
      }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceConStored) => editMode || !row.__deleteable || isLoading,
      action: actions.serviceConCon_View_EditArgumentsConsTableConsDelete
        ? async (rowData) => {
            await actions.serviceConCon_View_EditArgumentsConsTableConsDelete!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_DBYxIHjsEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Con.Con.View.Edit.createConArgument', { defaultValue: 'createConArgument' }) as string,
      icon: <MdiIcon path="chat-minus" />,
      disabled: (row: ServiceConStored) => editMode || isLoading,
      action: actions.serviceConCon_View_EditArgumentsConsActionsCreateConArgumentOpenForm
        ? async (rowData) => {
            await actions.serviceConCon_View_EditArgumentsConsActionsCreateConArgumentOpenForm!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_3sP2oIriEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Con.Con.View.Edit.voteDown', { defaultValue: 'voteDown' }) as string,
      icon: <MdiIcon path="thumb-down" />,
      disabled: (row: ServiceConStored) => editMode || isLoading,
      action: actions.serviceConCon_View_EditConVoteDown
        ? async (rowData) => {
            await actions.serviceConCon_View_EditConVoteDown!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_3sNaYIriEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Con.Con.View.Edit.voteUp', { defaultValue: 'voteUp' }) as string,
      icon: <MdiIcon path="thumb-up" />,
      disabled: (row: ServiceConStored) => editMode || isLoading,
      action: actions.serviceConCon_View_EditConVoteUp
        ? async (rowData) => {
            await actions.serviceConCon_View_EditConVoteUp!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_DBZYMHjsEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Con.Con.View.Edit.createProArgument', { defaultValue: 'createProArgument' }) as string,
      icon: <MdiIcon path="chat-plus" />,
      disabled: (row: ServiceConStored) => editMode || isLoading,
      action: actions.serviceConCon_View_EditArgumentsProsActionsCreateProArgumentOpenForm
        ? async (rowData) => {
            await actions.serviceConCon_View_EditArgumentsProsActionsCreateProArgumentOpenForm!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_fsmtIH2GEe6V8KKnnZfChA',
      attributeName: 'title',
      label: t('service.Con.Con.View.Edit.title::Filter', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fsmtJH2GEe6V8KKnnZfChA',
      attributeName: 'upVotes',
      label: t('service.Con.Con.View.Edit.upVotes::Filter', { defaultValue: 'up' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: '_fsnUMn2GEe6V8KKnnZfChA',
      attributeName: 'downVotes',
      label: t('service.Con.Con.View.Edit.downVotes::Filter', { defaultValue: 'down' }) as string,
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

    setQueryCustomizer((prevQueryCustomizer: ServiceConQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceConQueryCustomizer = {
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
    const newData = applyInMemoryFilters<ServiceConStored>(filters, ownerData?.cons ?? []);
    setData(newData);
  }, [ownerData?.cons, filters]);

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
          ...columnsActionCalculator('User/(esm/_FkTZYIezEe2kLcMqsIbMgQ)/RelationType', rowActions, t, {
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
          actions.serviceConCon_View_EditArgumentsConsTableConsView
            ? async (params: GridRowParams<ServiceConStored>) =>
                await actions.serviceConCon_View_EditArgumentsConsTableConsView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceConCon_View_EditArgumentsConsTableConsFilter && true ? (
                <Button
                  id="User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.serviceConCon_View_EditArgumentsConsTableConsFilter!(
                      'User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceTableFilterButton',
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
                  {t('service.Con.Con.View.Edit.service::Con::Con_View_Edit::Arguments::cons::table::cons::Filter', {
                    defaultValue: 'Set Filters',
                  })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceConCon_View_EditArgumentsConsTableConsRefresh && true ? (
                <Button
                  id="User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceConCon_View_EditArgumentsConsTableConsRefresh!(
                      processQueryCustomizer(queryCustomizer),
                    );
                  }}
                  disabled={isLoading}
                >
                  {t('service.Con.Con.View.Edit.service::Con::Con_View_Edit::Arguments::cons::table::cons::Refresh', {
                    defaultValue: 'Refresh',
                  })}
                </Button>
              ) : null}
              {actions.serviceConCon_View_EditArgumentsConsTableConsCreateOpen && true ? (
                <Button
                  id="User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceConCon_View_EditArgumentsConsTableConsCreateOpen!();
                  }}
                  disabled={editMode || isLoading}
                >
                  {t('service.Con.Con.View.Edit.service::Con::Con_View_Edit::Arguments::cons::table::cons::Create', {
                    defaultValue: 'Create',
                  })}
                </Button>
              ) : null}
              {actions.serviceConCon_View_EditArgumentsConsTableConsAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceConCon_View_EditArgumentsConsTableConsAddOpenSelector!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t('service.Con.Con.View.Edit.service::Con::Con_View_Edit::Arguments::cons::table::cons::Add', {
                    defaultValue: 'Add',
                  })}
                </Button>
              ) : null}
              {actions.serviceConCon_View_EditArgumentsConsTableConsClear && data.length ? (
                <Button
                  id="User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceConCon_View_EditArgumentsConsTableConsClear!();
                  }}
                  disabled={editMode || !isFormUpdateable() || isLoading}
                >
                  {t('service.Con.Con.View.Edit.service::Con::Con_View_Edit::Arguments::cons::table::cons::Clear', {
                    defaultValue: 'Clear',
                  })}
                </Button>
              ) : null}
              {actions.serviceConCon_View_EditArgumentsConsTableConsBulkRemove && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceConCon_View_EditArgumentsConsTableConsBulkRemove!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t(
                    'service.Con.Con.View.Edit.service::Con::Con_View_Edit::Arguments::cons::table::cons::BulkRemove',
                    { defaultValue: 'Remove' },
                  )}
                </Button>
              ) : null}
              {actions.serviceConCon_View_EditArgumentsConsTableConsBulkDelete && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } =
                      await actions.serviceConCon_View_EditArgumentsConsTableConsBulkDelete!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t(
                    'service.Con.Con.View.Edit.service::Con::Con_View_Edit::Arguments::cons::table::cons::BulkDelete',
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
