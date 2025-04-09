//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/table/EagerTable.tsx'
// Template name: actor/src/components/table/EagerTable.tsx
// Template file: actor/src/components/table/EagerTable.tsx.hbs

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import {
  GridColDef,
  GridEventListener,
  GridFilterModel,
  GridLogicOperator,
  GridRowClassNameParams,
  GridRowEditStopReasons,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridRowSelectionModel,
  GridSortModel,
  GridToolbarContainer,
  GridValidRowModel,
  useGridApiRef,
} from '@mui/x-data-grid';
import { ComponentProxy, useTrackService } from '@pandino/react-hooks';
import { ElementType, MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import { ContextMenu, ContextMenuApi, StripedDataGrid, columnsActionCalculator } from '~/components/table';
import { RowHighlightLegend } from '~/components/table';
import { basePageSizeOptions, baseTableConfig } from '~/config';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type { QueryCustomizer } from '~/services/data-api/common/QueryCustomizer';
import { draftIdentifierPrefix } from '~/services/data-api/common/utils';
import { transformRowStylings } from '~/theme/table-row-highlighting';
import type { RowStylerConfigured, TableRowHighlightingHook } from '~/theme/table-row-highlighting';
import {
  ToolBarActionProps,
  applyInMemoryFilters,
  calculateActionName,
  fileHandling,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
} from '~/utilities';
import type { DialogResultReason, FiltersSerializer, TableRowAction } from '~/utilities';
import { MdiIcon } from '../MdiIcon';
import { FixedTableFilters } from './FixedTableFilters';

interface EagerTableProps<T extends GridValidRowModel, TStored extends GridValidRowModel> {
  sidekickComponentFilter: string;
  uniqueId: string;
  dataProp: T[];
  defaultSortParamsForTable: GridSortModel;
  tablePageLimit: number;
  tableColumns: GridColDef<TStored>[];
  tableRowActions: TableRowAction<T, TStored>[];
  tableFilterOptions: FilterOption[];
  isOwnerLoading?: boolean;
  validationError?: string;
  actions: any;
  allowSelectMultiple?: boolean;
  dataElementId: string;
  crudOperationsDisplayed: number;
  transferOperationsDisplayed: number;
  onRowClick?: GridEventListener<'rowClick'>;
  dataElement?: any;
  isSelectorTable?: boolean;
  editMode?: boolean;
  containerHasTable?: boolean;
  toolBarActions: ToolBarActionProps<T>[];
  additionalToolbarButtons?: (...args: any[]) => Record<string, ElementType>;
  tableHasSelectorColumn?: boolean;
  maskAction: () => string;
  ownerData?: any;
  checkboxSelection?: boolean;
  isFormUpdateable?: () => boolean;
  enabledByName?: string;
  relationName: string;
  filtersSerializer: FiltersSerializer;
  navigable?: boolean;
  editable?: boolean;
  applyRowEdit?: (rowData: TStored) => Promise<any>;
  onRowEditCanceled?: (rowId: string) => void;
  actionsColumnWidth?: number;
  annotations?: string[];
}

export function EagerTable<T extends GridValidRowModel, TStored extends T, S extends QueryCustomizer<T>>(
  props: EagerTableProps<T, TStored>,
) {
  const {
    sidekickComponentFilter,
    uniqueId,
    dataProp,
    defaultSortParamsForTable,
    tablePageLimit,
    tableColumns,
    tableRowActions,
    tableFilterOptions,
    isOwnerLoading,
    validationError,
    actions,
    allowSelectMultiple,
    dataElementId,
    crudOperationsDisplayed,
    transferOperationsDisplayed,
    onRowClick,
    dataElement,
    editMode,
    containerHasTable,
    toolBarActions,
    additionalToolbarButtons,
    tableHasSelectorColumn,
    maskAction,
    ownerData,
    isFormUpdateable,
    enabledByName,
    relationName,
    checkboxSelection,
    filtersSerializer,
    navigable = true,
    editable = false,
    applyRowEdit,
    onRowEditCanceled,
    actionsColumnWidth,
    annotations = [],
  } = props;

  const apiRef = useGridApiRef();
  const filterModelKey = `${uniqueId}-filterModel`;
  const filtersKey = `${uniqueId}-filters`;
  const rowsPerPageKey = `${uniqueId}-rowsPerPage`;
  const sortModelKey = `${uniqueId}-sortModel`;

  const { openConfirmDialog } = useConfirmDialog();
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { t } = useTranslation();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<T>[]>(dataProp);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>(
    getItemParsedWithDefault(sortModelKey, defaultSortParamsForTable),
  );
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(
    filtersSerializer.deserialize(getItemParsedWithDefault(filtersKey, [])),
  );
  const [rowsPerPage, setRowsPerPage] = useState<number>(getItemParsedWithDefault(rowsPerPageKey, tablePageLimit));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: rowsPerPage,
    page: 0,
  });
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const [queryCustomizer, setQueryCustomizer] = useState<S | QueryCustomizer<T>>({
    _mask: maskAction(),
    _seek: {
      limit: rowsPerPage + 1,
    },
    _orderBy: sortModel.length
      ? sortModel.map((s) => ({
          attribute: s.field,
          descending: s.sort === 'desc',
        }))
      : [],
    ...mapAllFiltersToQueryCustomizerProperties(filters),
  });

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const selectedRows = useRef<TStored[]>([]);

  const columns = useMemo<GridColDef<TStored>[]>(() => tableColumns, [l10nLocale]);

  const getSelectedRows: () => T[] = useCallback(() => {
    if (tableHasSelectorColumn) {
      return selectedRows.current;
    } else {
      return [];
    }
  }, [selectedRows.current]);

  const editActions = useMemo(
    () => [
      {
        id: `${uniqueId}-row-edit`,
        icon: <MdiIcon path="pencil" />,
        isCRUD: true,
        isEditAction: true,
        hidden: (row: any) =>
          rowModesModel[row.__identifier]?.mode === GridRowModes.Edit || !editable || row.__updateable === false,
        disabled: () => false,
        tooltip: t('judo.action.edit', { defaultValue: 'Edit' }),
        action: async (rowData: TStored) => {
          setRowModesModel({ ...rowModesModel, [rowData.__identifier!]: { mode: GridRowModes.Edit } });
        },
      },
      {
        id: `${uniqueId}-row-save`,
        icon: <MdiIcon path="content-save" />,
        isCRUD: true,
        isEditAction: true,
        hidden: (row: any) => !(rowModesModel[row.__identifier]?.mode === GridRowModes.Edit),
        disabled: () => false,
        tooltip: t('judo.action.save', { defaultValue: 'Save' }),
        action: async (rowData: TStored) => {
          setRowModesModel({ ...rowModesModel, [rowData.__identifier!]: { mode: GridRowModes.View } });
        },
      },
      {
        id: `${uniqueId}-row-cancel`,
        icon: <MdiIcon path="undo" />,
        isCRUD: true,
        isEditAction: true,
        hidden: (row: any) => !(rowModesModel[row.__identifier]?.mode === GridRowModes.Edit),
        disabled: () => false,
        tooltip: t('judo.action.undo', { defaultValue: 'Undo / Cancel' }),
        action: async (rowData: TStored) => {
          setRowModesModel({
            ...rowModesModel,
            [rowData.__identifier!]: { mode: GridRowModes.View, ignoreModifications: true },
          });
          if (rowData.__identifier!.startsWith(draftIdentifierPrefix)) {
            setData((prevData) => {
              return prevData.filter((d) => d.__identifier! !== rowData.__identifier!);
            });
          }
          if (typeof onRowEditCanceled === 'function') {
            onRowEditCanceled(rowData.__identifier!);
          }
        },
      },
    ],
    [tableRowActions, rowModesModel, applyRowEdit],
  );

  const effectiveTableColumns = useMemo(() => {
    const cols = [
      ...columns,
      ...columnsActionCalculator(
        dataElementId,
        [...(editable ? editActions : []), ...tableRowActions],
        t,
        isLoading,
        editable,
        rowModesModel,
        getSelectedRows,
        ownerData,
        { crudOperationsDisplayed: crudOperationsDisplayed, transferOperationsDisplayed: transferOperationsDisplayed },
      ),
    ];
    return cols;
  }, [columns, editActions, tableRowActions, getSelectedRows, ownerData, isLoading, editable, rowModesModel]);

  const getRowIdentifier: (row: T) => string = (row) => row.__identifier!;

  const clearSelections = () => {
    handleOnSelection([]);
  };

  const pageSizeOptions = useMemo(() => {
    const opts: Set<number> = new Set([rowsPerPage, ...basePageSizeOptions]);
    return Array.from(opts.values()).sort((a, b) => a - b);
  }, [rowsPerPage]);

  const filterOptions = useMemo<FilterOption[]>(() => tableFilterOptions, [l10nLocale]);

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPaginationModel((prevState) => ({
      ...prevState,
      page: 0,
    }));
    setFilters(newFilters);
    setItemStringified(filtersKey, filtersSerializer.serialize(newFilters));

    setQueryCustomizer((prevQueryCustomizer: S | QueryCustomizer<T>) => {
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
    setItemStringified(sortModelKey, newModel);

    const _orderBy = newModel
      .filter((m: any) => m.sort)
      .map((m: any) => ({
        attribute: m.field,
        descending: m.sort === 'desc',
      }));

    setQueryCustomizer((prevQueryCustomizer) => {
      const strippedQueryCustomizer: S | QueryCustomizer<T> = {
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

  let handleOnSelection = (newSelectionModel: GridRowSelectionModel) => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, newSelectionModel);
    setSelectionModel(selectedRows.current.map(getRowIdentifier));
  };

  useEffect(() => {
    const newData = applyInMemoryFilters<T>(filters, dataElement ?? []);
    setData(newData);
    handleOnSelection(selectionModel);
  }, [dataElement, filters]);

  let additionalToolbarActions: Record<string, ElementType>;

  if (additionalToolbarButtons) {
    if (containerHasTable) {
      additionalToolbarActions = additionalToolbarButtons(data, isLoading, getSelectedRows(), clearSelections);
    } else {
      additionalToolbarActions = additionalToolbarButtons(
        data,
        isLoading,
        getSelectedRows(),
        clearSelections,
        ownerData,
        editMode,
        isFormUpdateable,
      );
    }
  } else {
    additionalToolbarActions = {};
  }

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

  async function filterAction(id: string) {
    const filterResults = await actions[calculateActionName(relationName, 'filterAction')]!(
      id,
      filterOptions,
      filterModel,
      filters,
    );
    if (Array.isArray(filterResults.filters)) {
      handleFiltersChange([...filterResults.filters!]);
    }
  }

  const processRowUpdate = useCallback(
    async (newRow: GridRowModel) => {
      try {
        await applyRowEdit!(newRow as TStored);
        // https://mui.com/x/react-data-grid/editing/#server-side-persistence
        // "Please note that the processRowUpdate must return the row object to update the Data Grid internal state."
        return newRow;
      } catch (error) {
        // we need to reject with the identifier in order for MUI to be able to detect which row should be kept in edit mode
        return Promise.reject(new Error(newRow.__identifier));
      }
    },
    [applyRowEdit],
  );

  const handleProcessRowUpdateError = useCallback(
    (error: Error) => {
      // the message is expected to be the row identifier
      setRowModesModel({ ...rowModesModel, [error.message]: { mode: GridRowModes.Edit } });
    },
    [rowModesModel],
  );

  return (
    <>
      <ComponentProxy
        filter={sidekickComponentFilter}
        editMode={containerHasTable ? editMode : undefined}
        isLoading={isLoading}
        filters={filters}
        onFiltersChange={handleFiltersChange}
        data={data}
        boundAttributeName={relationName}
        annotations={annotations}
      />
      <FixedTableFilters
        filters={filters}
        ownerData={ownerData}
        filtersSerializer={filtersSerializer}
        tableFilterOptions={tableFilterOptions}
        onFiltersChange={handleFiltersChange}
      >
      </FixedTableFilters>
      <StripedDataGrid
        apiRef={apiRef as unknown as any}
        {...baseTableConfig}
        pageSizeOptions={pageSizeOptions}
        sx={{
          overflow: 'hidden',
          display: 'grid',
          border: (theme) => (props.validationError ? `2px solid ${theme.palette.error.main}` : undefined),
        }}
        editMode="row"
        processRowUpdate={processRowUpdate}
        rowModesModel={rowModesModel}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        slotProps={{
          filterPanel: {
            logicOperators: [GridLogicOperator.And],
          },
        }}
        getRowId={getRowIdentifier}
        loading={isLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          const styles: string[] = [];
          styles.push(params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd');
          if (navigable) {
            styles.push('navigable');
          }
          return styles.join(' ');
        }}
        columns={effectiveTableColumns}
        disableRowSelectionOnClick
        hideFooterSelectedRowCount={!allowSelectMultiple}
        checkboxSelection={checkboxSelection !== false}
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={handleOnSelection}
        keepNonExistentRowsSelected
        onRowClick={onRowClick}
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        slots={{
          toolbar: () => (
            <GridToolbarContainer>
              {toolBarActions.map((toolBarAction: ToolBarActionProps<T>) =>
                actions[toolBarAction.name] &&
                toolBarAction.enabled(
                  data,
                  selectionModel,
                  getSelectedRows(),
                  ownerData,
                  isFormUpdateable,
                  rowModesModel,
                ) ? (
                  <Tooltip title={toolBarAction.tooltip} key={toolBarAction.id}>
                    <Button
                      id={toolBarAction.id}
                      startIcon={<MdiIcon path={toolBarAction.startIcon ? toolBarAction.startIcon : ''} />}
                      variant={toolBarAction.variant}
                      onClick={async () => {
                        if (
                          toolBarAction.confirmation &&
                          (typeof toolBarAction.confirmationCondition === 'undefined' ||
                            toolBarAction.confirmationCondition === true)
                        ) {
                          const result = await openConfirmDialog(
                            toolBarAction.id,
                            toolBarAction.confirmation,
                            t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }) as string,
                          );

                          if (!result) {
                            return;
                          }
                        }
                        if (toolBarAction.name === calculateActionName(relationName, 'inlineCreateRowAction')) {
                          const templateResult: T | undefined = await actions[toolBarAction.name]!();
                          const id = `${draftIdentifierPrefix}${uuidv4()}`;
                          setData((oldRows) => [
                            { ...(templateResult || {}), __identifier: id } as unknown as T,
                            ...oldRows,
                          ]);
                          setRowModesModel((oldModel) => ({
                            ...oldModel,
                            [id]: { mode: GridRowModes.Edit },
                          }));
                        }
                        if (toolBarAction.name === calculateActionName(relationName, 'filterAction')) {
                          await filterAction(toolBarAction.id);
                        } else {
                          let processedQueryCustomizer = {
                            ...processQueryCustomizer(queryCustomizer),
                          };
                          if (
                            toolBarActions.find(
                              (tbAction: ToolBarActionProps<T>) =>
                                tbAction.name === calculateActionName(relationName, 'refreshAction'),
                            )
                          ) {
                            processedQueryCustomizer = {
                              ...processedQueryCustomizer,
                              _mask: maskAction ? maskAction() : queryCustomizer._mask,
                            };
                          }

                          if (toolBarAction.name === calculateActionName(relationName, 'exportAction')) {
                            processedQueryCustomizer = {
                              ...processedQueryCustomizer,
                              _seek: undefined,
                            };
                          }

                          if (
                            toolBarAction.name === calculateActionName(relationName, 'refreshAction') ||
                            toolBarAction.name === calculateActionName(relationName, 'exportAction') ||
                            toolBarAction.name === calculateActionName(relationName, 'selectorRangeAction')
                          ) {
                            actions[toolBarAction.name]!(processedQueryCustomizer);
                          } else {
                            if (toolBarAction.isBulk) {
                              const { result: bulkResult } = await actions[toolBarAction.name]!(selectedRows.current);
                              const reason: DialogResultReason = bulkResult;
                              if (reason === 'submit' || reason === 'delete') {
                                handleOnSelection([]); // not resetting on refreshes because refreshes would always remove selections...
                              }
                            } else {
                              if (toolBarAction.name === calculateActionName(relationName, 'clearAction')) {
                                await actions[toolBarAction.name]!();
                                handleOnSelection([]);
                              } else {
                                await actions[toolBarAction.name]!();
                              }
                            }
                          }
                        }
                      }}
                      disabled={isLoading}
                    >
                      {t(`${toolBarAction.label['translationKey']}`, {
                        defaultValue: `${toolBarAction.label['defaultValue']}`,
                      })}
                      {toolBarAction.name === calculateActionName(relationName, 'filterAction') && filters.length
                        ? ` (${filters.length})`
                        : ''}
                    </Button>
                  </Tooltip>
                ) : null,
              )}
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
    </>
  );
}
