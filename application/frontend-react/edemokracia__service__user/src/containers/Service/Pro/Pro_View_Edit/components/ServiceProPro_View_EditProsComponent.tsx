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
import type { ServicePro, ServiceProQueryCustomizer, ServiceProStored } from '~/services/data-api';
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

export interface ServiceProPro_View_EditProsComponentActionDefinitions {
  prosBulkDeleteAction?: (selectedRows: ServiceProStored[]) => Promise<DialogResult<ServiceProStored[]>>;
  prosFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  prosRefreshAction?: (queryCustomizer: ServiceProQueryCustomizer) => Promise<ServiceProStored[]>;
  prosCreateConArgumentAction?: (row: ServiceProStored) => Promise<void>;
  prosCreateProArgumentAction?: (row: ServiceProStored) => Promise<void>;
  prosDeleteAction?: (row: ServiceProStored, silentMode?: boolean) => Promise<void>;
  prosOpenPageAction?: (row: ServiceProStored) => Promise<void>;
  prosVoteDownForProAction?: (row: ServiceProStored) => Promise<void>;
  prosVoteUpForProAction?: (row: ServiceProStored) => Promise<void>;
}

export interface ServiceProPro_View_EditProsComponentProps {
  uniqueId: string;
  actions: ServiceProPro_View_EditProsComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceProStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_KRUbNXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable
// Name: pros
export function ServiceProPro_View_EditProsComponent(props: ServiceProPro_View_EditProsComponentProps) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_KRUbNXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_KRUbNXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceProStored>[]>(ownerData?.pros || []);
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
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceProQueryCustomizer>({
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

  const selectedRows = useRef<ServiceProStored[]>([]);

  const columns: GridColDef<ServiceProStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('service.Pro.Pro_View_Edit.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'upVotes',
      headerName: t('service.Pro.Pro_View_Edit.upVotes', { defaultValue: 'up' }) as string,
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
      headerName: t('service.Pro.Pro_View_Edit.downVotes', { defaultValue: 'down' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      filterable: false && true,
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
  ];

  const rowActions: TableRowAction<ServiceProStored>[] = [
    {
      id: 'User/(esm/_KRUbNXjvEe6cB8og8p0UuQ)/TabularReferenceTableRowDeleteButton',
      label: t('service.Pro.Pro_View_Edit.Arguments.pros.table.pros.Delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceProStored) => editMode || !row.__deleteable || isLoading,
      action: actions.prosDeleteAction
        ? async (rowData) => {
            await actions.prosDeleteAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_ikPssIrjEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/_sZZBIIshEe6I4ZdrLoQBLA)',
      label: t('service.Pro.Pro_View_Edit.voteUp', { defaultValue: 'voteUp' }) as string,
      icon: <MdiIcon path="thumb-up" />,
      disabled: (row: ServiceProStored) => editMode || isLoading,
      action: actions.prosVoteUpForProAction
        ? async (rowData) => {
            await actions.prosVoteUpForProAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_ikQTwIrjEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/_sZZBIIshEe6I4ZdrLoQBLA)',
      label: t('service.Pro.Pro_View_Edit.voteDown', { defaultValue: 'voteDown' }) as string,
      icon: <MdiIcon path="thumb-down" />,
      disabled: (row: ServiceProStored) => editMode || isLoading,
      action: actions.prosVoteDownForProAction
        ? async (rowData) => {
            await actions.prosVoteDownForProAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_KRUbO3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/_sZZBIIshEe6I4ZdrLoQBLA)',
      label: t('service.Pro.Pro_View_Edit.createConArgument', { defaultValue: 'createConArgument' }) as string,
      icon: <MdiIcon path="chat-minus" />,
      disabled: (row: ServiceProStored) => editMode || isLoading,
      action: actions.prosCreateConArgumentAction
        ? async (rowData) => {
            await actions.prosCreateConArgumentAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_KRUbM3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/_sZZBIIshEe6I4ZdrLoQBLA)',
      label: t('service.Pro.Pro_View_Edit.createProArgument', { defaultValue: 'createProArgument' }) as string,
      icon: <MdiIcon path="chat-plus" />,
      disabled: (row: ServiceProStored) => editMode || isLoading,
      action: actions.prosCreateProArgumentAction
        ? async (rowData) => {
            await actions.prosCreateProArgumentAction!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_sZWk4oshEe6I4ZdrLoQBLA',
      attributeName: 'title',
      label: t('service.Pro.Pro_View_Edit.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_sZXL84shEe6I4ZdrLoQBLA',
      attributeName: 'upVotes',
      label: t('service.Pro.Pro_View_Edit.upVotes', { defaultValue: 'up' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: '_sZXzAoshEe6I4ZdrLoQBLA',
      attributeName: 'downVotes',
      label: t('service.Pro.Pro_View_Edit.downVotes', { defaultValue: 'down' }) as string,
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

    setQueryCustomizer((prevQueryCustomizer: ServiceProQueryCustomizer) => {
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
      const strippedQueryCustomizer: ServiceProQueryCustomizer = {
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
    const newData = applyInMemoryFilters<ServiceProStored>(filters, ownerData?.pros ?? []);
    setData(newData);
  }, [ownerData?.pros, filters]);

  return (
    <div id="User/(esm/_KRUbNXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable" data-table-name="pros">
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
          ...columnsActionCalculator('User/(esm/_KSx6sIezEe2kLcMqsIbMgQ)/RelationType', rowActions, t, {
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
          actions.prosOpenPageAction
            ? async (params: GridRowParams<ServiceProStored>) => await actions.prosOpenPageAction!(params.row)
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
                  id="User/(esm/_KRUbNXjvEe6cB8og8p0UuQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.prosFilterAction!(
                      'User/(esm/_KRUbNXjvEe6cB8og8p0UuQ)/TabularReferenceTableFilterButton',
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
                  {t('service.Pro.Pro_View_Edit.Arguments.pros.table.pros.Filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.prosRefreshAction && true ? (
                <Button
                  id="User/(esm/_KRUbNXjvEe6cB8og8p0UuQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.prosRefreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.Pro.Pro_View_Edit.Arguments.pros.table.pros.Refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.prosBulkDeleteAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_KRUbNXjvEe6cB8og8p0UuQ)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.prosBulkDeleteAction!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('service.Pro.Pro_View_Edit.Arguments.pros.table.pros.BulkDelete', { defaultValue: 'Delete' })}
                </Button>
              ) : null}
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
