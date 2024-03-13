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
import { baseColumnConfig, basePageSizeOptions, baseTableConfig } from '~/config';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type {
  ServiceCon,
  ServiceConStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  applyInMemoryFilters,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  randomUtils,
  serviceDateToUiDate,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, SidekickComponentProps, TableRowAction } from '~/utilities';

export interface ServiceConCon_FormProsComponentActionDefinitions {
  prosBulkDeleteAction?: (selectedRows: ServiceProStored[]) => Promise<DialogResult<ServiceProStored[]>>;
  prosFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  prosRefreshAction?: (queryCustomizer: ServiceProQueryCustomizer) => Promise<JudoRestResponse<ServiceProStored[]>>;
  getProsMask?: () => string;
  prosCreateConArgumentAction?: (row: ServiceProStored) => Promise<void>;
  prosCreateProArgumentAction?: (row: ServiceProStored) => Promise<void>;
  prosDeleteAction?: (row: ServiceProStored, silentMode?: boolean) => Promise<void>;
  prosOpenPageAction?: (row: ServiceProStored, isDraft?: boolean) => Promise<void>;
  prosVoteDownForProAction?: (row: ServiceProStored) => Promise<void>;
  prosVoteUpForProAction?: (row: ServiceProStored) => Promise<void>;
  prosAdditionalToolbarButtons?: (
    data: ServiceProStored[],
    isLoading: boolean,
    selectedRows: ServiceProStored[],
    clearSelections: () => void,
    ownerData: ServiceConStored,
    editMode: boolean,
    isFormUpdateable: () => boolean,
  ) => Record<string, ElementType>;
}

export interface ServiceConCon_FormProsComponentProps {
  uniqueId: string;
  actions: ServiceConCon_FormProsComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
  validationError?: string;
  ownerData: ServiceConStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

export const SERVICE_CON_CON_FORM_PROS_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY =
  'ServiceConCon_FormProsComponentSidekickComponent';

// XMIID: User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable
// Name: pros
export function ServiceConCon_FormProsComponent(props: ServiceConCon_FormProsComponentProps) {
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
  const sidekickComponentFilter = `(&(${OBJECTCLASS}=${CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY})(component=${SERVICE_CON_CON_FORM_PROS_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY}))`;
  const filterModelKey = `User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-filterModel`;
  const filtersKey = `User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-filters`;
  const rowsPerPageKey = `User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-rowsPerPage`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceProStored>[]>(ownerData?.pros || []);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'createdByName', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [rowsPerPage, setRowsPerPage] = useState<number>(getItemParsedWithDefault(rowsPerPageKey, 10));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: rowsPerPage,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceProQueryCustomizer>({
    _mask: '{created,createdByName,description,downVotes,title,upVotes}',
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
  const SidekickComponent = useTrackComponent<FC<SidekickComponentProps<ServiceProStored>>>(sidekickComponentFilter);

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const selectedRows = useRef<ServiceProStored[]>([]);

  const createdByNameColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'createdByName',
    headerName: t('service.Con.Con_Form.pros.createdByName', { defaultValue: 'CreatedByName' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const createdColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t('service.Con.Con_Form.pros.created', { defaultValue: 'Created' }) as string,
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
    headerName: t('service.Con.Con_Form.pros.description', { defaultValue: 'Description' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const titleColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'title',
    headerName: t('service.Con.Con_Form.pros.title', { defaultValue: 'Title' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const upVotesColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'upVotes',
    headerName: t('service.Con.Con_Form.pros.upVotes', { defaultValue: 'UpVotes' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 100,
    type: 'number',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
      if (value === null || value === undefined) {
        return '';
      }
      return new Intl.NumberFormat(l10nLocale).format(value);
    },
  };
  const downVotesColumn: GridColDef<ServiceProStored> = {
    ...baseColumnConfig,
    field: 'downVotes',
    headerName: t('service.Con.Con_Form.pros.downVotes', { defaultValue: 'DownVotes' }) as string,
    headerClassName: 'data-grid-column-header',

    width: 100,
    type: 'number',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
      if (value === null || value === undefined) {
        return '';
      }
      return new Intl.NumberFormat(l10nLocale).format(value);
    },
  };

  const columns = useMemo<GridColDef<ServiceProStored>[]>(
    () => [createdByNameColumn, createdColumn, descriptionColumn, titleColumn, upVotesColumn, downVotesColumn],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceProStored>[] = useMemo(
    () => [
      {
        id: 'User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableRowDeleteButton',
        label: t('judo.action.delete', { defaultValue: 'Delete' }) as string,
        icon: <MdiIcon path="delete_forever" />,
        isCRUD: true,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || editMode || !row.__deleteable || isLoading,
        action: actions.prosDeleteAction
          ? async (rowData) => {
              await actions.prosDeleteAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_KRUbO3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
        label: t('service.Con.Con_Form.createConArgument', { defaultValue: 'createConArgument' }) as string,
        icon: <MdiIcon path="chat-minus" />,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.prosCreateConArgumentAction
          ? async (rowData) => {
              await actions.prosCreateConArgumentAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_KRUbM3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
        label: t('service.Con.Con_Form.createProArgument', { defaultValue: 'createProArgument' }) as string,
        icon: <MdiIcon path="chat-plus" />,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.prosCreateProArgumentAction
          ? async (rowData) => {
              await actions.prosCreateProArgumentAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_ikQTwIrjEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
        label: t('service.Con.Con_Form.voteDown', { defaultValue: 'voteDown' }) as string,
        icon: <MdiIcon path="thumb-down" />,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.prosVoteDownForProAction
          ? async (rowData) => {
              await actions.prosVoteDownForProAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_ikPssIrjEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
        label: t('service.Con.Con_Form.voteUp', { defaultValue: 'voteUp' }) as string,
        icon: <MdiIcon path="thumb-up" />,
        disabled: (row: ServiceProStored) => getSelectedRows().length > 0 || editMode || isLoading,
        action: actions.prosVoteUpForProAction
          ? async (rowData) => {
              await actions.prosVoteUpForProAction!(rowData);
            }
          : undefined,
      },
    ],
    [actions, isLoading],
  );

  const effectiveTableColumns = useMemo(() => {
    const cols = [
      ...columns,
      ...columnsActionCalculator('User/(esm/_WgzWwIezEe2kLcMqsIbMgQ)/RelationType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ];
    return cols;
  }, [columns, rowActions]);

  const getRowIdentifier: (row: Pick<ServiceProStored, '__identifier'>) => string = (row) => row.__identifier!;

  const getSelectedRows: () => ServiceProStored[] = () => {
    return selectedRows.current;
  };

  const clearSelections = () => {
    handleOnSelection([]);
  };

  const additionalToolbarActions: Record<string, ElementType> = actions?.prosAdditionalToolbarButtons
    ? actions.prosAdditionalToolbarButtons(
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
    setPaginationModel((prevState) => ({
      ...prevState,
      pageSize: newValue,
      page: 0,
    }));

    setQueryCustomizer((prevQueryCustomizer: ServiceProQueryCustomizer) => {
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
        id: 'User/(esm/_cJIRYIfYEe2u0fVmwtP5bA)/TableColumnFilter/(discriminator/User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'createdByName',
        label: t('service.Con.Con_Form.createdByName', { defaultValue: 'CreatedByName' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_cJKGkIfYEe2u0fVmwtP5bA)/TableColumnFilter/(discriminator/User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'created',
        label: t('service.Con.Con_Form.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_cJL7wIfYEe2u0fVmwtP5bA)/TableColumnFilter/(discriminator/User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'description',
        label: t('service.Con.Con_Form.description', { defaultValue: 'Description' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_cJNw8IfYEe2u0fVmwtP5bA)/TableColumnFilter/(discriminator/User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'title',
        label: t('service.Con.Con_Form.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_cJPmIIfYEe2u0fVmwtP5bA)/TableColumnFilter/(discriminator/User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'upVotes',
        label: t('service.Con.Con_Form.upVotes', { defaultValue: 'UpVotes' }) as string,
        filterType: FilterType.numeric,
      },

      {
        id: 'User/(esm/_cJQ0QIfYEe2u0fVmwtP5bA)/TableColumnFilter/(discriminator/User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'downVotes',
        label: t('service.Con.Con_Form.downVotes', { defaultValue: 'DownVotes' }) as string,
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
          limit: rowsPerPage + 1,
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
          limit: rowsPerPage + 1,
        },
      };
    });
  }

  const handleOnSelection = (newSelectionModel: GridRowSelectionModel) => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, newSelectionModel);
    setSelectionModel(selectedRows.current.map(getRowIdentifier));
  };

  useEffect(() => {
    const newData = applyInMemoryFilters<ServiceProStored>(filters, ownerData?.pros ?? []);
    setData(newData);
    handleOnSelection(selectionModel);
  }, [ownerData?.pros, filters]);

  return (
    <div id="User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable" data-table-name="pros">
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
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={handleOnSelection}
        keepNonExistentRowsSelected
        onRowClick={
          actions.prosOpenPageAction
            ? async (params: GridRowParams<ServiceProStored>) => await actions.prosOpenPageAction!(params.row, true)
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
                  id="User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.prosFilterAction!(
                      'User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableFilterButton',
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
              {actions.prosRefreshAction && true ? (
                <Button
                  id="User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getProsMask ? actions.getProsMask() : queryCustomizer._mask,
                    };
                    await actions.prosRefreshAction!(processedQueryCustomizer);
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.prosBulkDeleteAction && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getProsMask ? actions.getProsMask() : queryCustomizer._mask,
                    };
                    const { result: bulkResult } = await actions.prosBulkDeleteAction!(selectedRows.current);
                    if (bulkResult === 'submit') {
                      handleOnSelection([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('judo.action.bulk-delete', { defaultValue: 'Delete' })}
                </Button>
              ) : null}
              {<AdditionalToolbarActions />}
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
