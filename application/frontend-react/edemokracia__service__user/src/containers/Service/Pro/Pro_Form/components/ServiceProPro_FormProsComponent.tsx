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
import { MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import {
  ContextMenu,
  StripedDataGrid,
  columnsActionCalculator,
  dateTimeColumnOperators,
  numericColumnOperators,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type { ServicePro, ServiceProQueryCustomizer, ServiceProStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  applyInMemoryFilters,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  serviceDateToUiDate,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, TableRowAction } from '~/utilities';

export interface ServiceProPro_FormProsComponentActionDefinitions {
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

export interface ServiceProPro_FormProsComponentProps {
  uniqueId: string;
  actions: ServiceProPro_FormProsComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceProStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable
// Name: pros
export function ServiceProPro_FormProsComponent(props: ServiceProPro_FormProsComponentProps) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceProStored>[]>(ownerData?.pros || []);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'createdByName', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceProQueryCustomizer>({
    _mask: '{createdByName,created,description,title,upVotes,downVotes}',
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

  const createdByNameColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'createdByName',
    headerName: t('service.Pro.Pro_Form.createdByName', { defaultValue: 'CreatedByName' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const createdColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t('service.Pro.Pro_Form.created', { defaultValue: 'Created' }) as string,
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
  const descriptionColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'description',
    headerName: t('service.Pro.Pro_Form.description', { defaultValue: 'Description' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const titleColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'title',
    headerName: t('service.Pro.Pro_Form.title', { defaultValue: 'Title' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const upVotesColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'upVotes',
    headerName: t('service.Pro.Pro_Form.upVotes', { defaultValue: 'UpVotes' }) as string,
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
    headerName: t('service.Pro.Pro_Form.downVotes', { defaultValue: 'DownVotes' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 100,
    type: 'number',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
      return value && new Intl.NumberFormat(l10nLocale).format(value);
    },
  };

  const columns = useMemo<GridColDef<ServiceProStored>[]>(
    () => [createdByNameColumn, createdColumn, descriptionColumn, titleColumn, upVotesColumn, downVotesColumn],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceProStored>[] = [
    {
      id: 'User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceTableRowDeleteButton',
      label: t('service.Pro.Pro_Form.pros.Delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceProStored) => editMode || !row.__deleteable || isLoading,
      action: actions.prosDeleteAction
        ? async (rowData) => {
            await actions.prosDeleteAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_KRUbO3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Pro.Pro_Form.createConArgument', { defaultValue: 'createConArgument' }) as string,
      icon: <MdiIcon path="chat-minus" />,
      disabled: (row: ServiceProStored) => editMode || isLoading,
      action: actions.prosCreateConArgumentAction
        ? async (rowData) => {
            await actions.prosCreateConArgumentAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_KRUbM3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Pro.Pro_Form.createProArgument', { defaultValue: 'createProArgument' }) as string,
      icon: <MdiIcon path="chat-plus" />,
      disabled: (row: ServiceProStored) => editMode || isLoading,
      action: actions.prosCreateProArgumentAction
        ? async (rowData) => {
            await actions.prosCreateProArgumentAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_ikQTwIrjEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Pro.Pro_Form.voteDown', { defaultValue: 'voteDown' }) as string,
      icon: <MdiIcon path="thumb-down" />,
      disabled: (row: ServiceProStored) => editMode || isLoading,
      action: actions.prosVoteDownForProAction
        ? async (rowData) => {
            await actions.prosVoteDownForProAction!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_ikPssIrjEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Pro.Pro_Form.voteUp', { defaultValue: 'voteUp' }) as string,
      icon: <MdiIcon path="thumb-up" />,
      disabled: (row: ServiceProStored) => editMode || isLoading,
      action: actions.prosVoteUpForProAction
        ? async (rowData) => {
            await actions.prosVoteUpForProAction!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_eKUtEIfYEe2u0fVmwtP5bA)/TableColumnFilter/(discriminator/User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'createdByName',
        label: t('service.Pro.Pro_Form.createdByName', { defaultValue: 'CreatedByName' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_eKV7MIfYEe2u0fVmwtP5bA)/TableColumnFilter/(discriminator/User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'created',
        label: t('service.Pro.Pro_Form.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_eKXwYIfYEe2u0fVmwtP5bA)/TableColumnFilter/(discriminator/User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'description',
        label: t('service.Pro.Pro_Form.description', { defaultValue: 'Description' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_eKY-gIfYEe2u0fVmwtP5bA)/TableColumnFilter/(discriminator/User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'title',
        label: t('service.Pro.Pro_Form.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_eKazsIfYEe2u0fVmwtP5bA)/TableColumnFilter/(discriminator/User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'upVotes',
        label: t('service.Pro.Pro_Form.upVotes', { defaultValue: 'UpVotes' }) as string,
        filterType: FilterType.numeric,
      },

      {
        id: 'User/(esm/_eKcB0IfYEe2u0fVmwtP5bA)/TableColumnFilter/(discriminator/User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'downVotes',
        label: t('service.Pro.Pro_Form.downVotes', { defaultValue: 'DownVotes' }) as string,
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

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  useEffect(() => {
    const newData = applyInMemoryFilters<ServiceProStored>(filters, ownerData?.pros ?? []);
    setData(newData);
  }, [ownerData?.pros, filters]);

  return (
    <div id="User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable" data-table-name="pros">
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
                  id="User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.prosFilterAction!(
                      'User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceTableFilterButton',
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
                  {t('service.Pro.Pro_Form.pros.Filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.prosRefreshAction && true ? (
                <Button
                  id="User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.prosRefreshAction!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.Pro.Pro_Form.pros.Refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.prosBulkDeleteAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceTableBulkDeleteButton"
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
                  {t('service.Pro.Pro_Form.pros.BulkDelete', { defaultValue: 'Delete' })}
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
