//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/dialog/RangeDialog.tsx'
// Template name: actor/src/components/dialog/RangeDialog.tsx
// Template file: actor/src/components/dialog/RangeDialog.tsx.hbs

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import type {
  GridSortModel,
  GridFilterModel,
  GridRowModel,
  GridRowParams,
  GridColDef,
  GridRowClassNameParams,
  GridSortItem,
  GridRowSelectionModel,
  GridRowId,
} from '@mui/x-data-grid';
import { GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import type { MouseEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import type { JudoStored, QueryCustomizer } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import type { Filter, FilterOption } from '~/components-api';
import {
  mapAllFiltersToQueryCustomizerProperties,
  mapFilterModelToFilters,
  mapFilterToFilterModel,
  useErrorHandler,
  processQueryCustomizer,
  mapFiltersToQueryCustomizerProperty,
  isRowSelectable,
} from '~/utilities';
import { serverTableConfig, rangeDialogConfig } from '~/config';
import { SlideUpTransition } from '~/theme/animations';
import { CustomTablePagination } from '../CustomTablePagination';
import { useFilterDialog } from './hooks';
import type { ContextMenuApi } from '../table';
import { ContextMenu, StripedDataGrid } from '../table';
import { MdiIcon } from '../MdiIcon';
import { GridLogicOperator } from '@mui/x-data-grid';

interface RangeDialogProps<T extends JudoStored<T>, U extends QueryCustomizer<T>> {
  id: string;
  resolve: (value: any) => void;
  open: boolean;
  handleClose: () => void;
  single?: boolean;
  columns: GridColDef<T>[];
  defaultSortField: GridSortItem;
  rangeCall: (queryCustomizer: U) => Promise<Array<T>>;
  alreadySelectedItems?: T[];
  initalQueryCustomizer: U;
  initialFilters?: Filter[];
  filterOptions: FilterOption[];
  createTrigger?: () => Promise<T | undefined>;
  editMode?: boolean;
}

export const RangeDialog = <T extends JudoStored<T>, U extends QueryCustomizer<T>>({
  id,
  resolve,
  open,
  handleClose,
  single = false,
  columns,
  defaultSortField,
  rangeCall,
  alreadySelectedItems,
  initalQueryCustomizer,
  initialFilters,
  filterOptions,
  createTrigger,
  editMode,
}: RangeDialogProps<T, U>) => {
  const { openFilterDialog } = useFilterDialog();
  const { t } = useTranslation();
  const descriptionElementRef = useRef<HTMLElement>(null);
  const handleError = useErrorHandler();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([defaultSortField]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>({ items: [] });
  const [lastItem, setLastItem] = useState<T>();
  const [firstItem, setFirstItem] = useState<T>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<GridRowModel<T>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel | GridRowId | undefined>(
    single ? undefined : [],
  );
  const [selectedItems, setSelectedItems] = useState<T[] | T | undefined>([]);
  const [filters, setFilters] = useState<Filter[]>(initialFilters || []);
  const [queryCustomizer, setQueryCustomizer] = useState<U>({
    ...initalQueryCustomizer,
    ...mapAllFiltersToQueryCustomizerProperties(filters),
    _seek: {
      limit: rangeDialogConfig.numberOfElements + 1,
    },
  });

  const handlePageChange = async (isNext: boolean) => {
    setQueryCustomizer((prevQueryCustomizer) => {
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: isNext ? rangeDialogConfig.numberOfElements + 1 : rangeDialogConfig.numberOfElements,
          reverse: !isNext,
          lastItem: isNext ? lastItem : firstItem,
        },
      };
    });

    setIsNextButtonEnabled(!isNext);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await rangeCall(processQueryCustomizer(queryCustomizer));

      if (res.length > rangeDialogConfig.numberOfElements) {
        setIsNextButtonEnabled(true);
        res.pop();
      } else if (queryCustomizer._seek?.limit === rangeDialogConfig.numberOfElements + 1) {
        setIsNextButtonEnabled(false);
      }

      setData(res);
      setFirstItem(res[0]);
      setLastItem(res[res.length - 1]);
      setRowCount(res.length || 0);
    } catch (error) {
      handleError(error);
    }
    setIsLoading(false);
  };

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);

    setQueryCustomizer((prevQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of columns.map((c) => c.field)) {
        delete (prevQueryCustomizer as any)[name];
      }
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: rangeDialogConfig.numberOfElements + 1,
        },
        ...mapAllFiltersToQueryCustomizerProperties(newFilters),
      };
    });
  };

  const handleSortModelChange = (newModel: GridSortModel) => {
    setPage(0);
    setSortModel(newModel);

    const _orderBy = newModel
      .filter((m) => m.sort)
      .map((m) => ({
        attribute: m.field,
        descending: m.sort === 'desc',
      }));

    setQueryCustomizer((prevQueryCustomizer) => {
      const strippedQueryCustomizer: U = {
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
  };

  useEffect(() => {
    fetchData();
  }, [queryCustomizer]);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const cancel = () => {
    handleClose();
    resolve(undefined);
  };

  const ok = () => {
    handleClose();
    resolve({
      value: selectedItems,
      resolveSource: 'selection',
    });
  };

  const handleOnSelection = (newSelectionModel: GridRowSelectionModel) => {
    if (!Array.isArray(selectionModel)) return;

    // added new items
    if (newSelectionModel.length > selectionModel.length) {
      const diff = newSelectionModel.length - selectionModel.length;
      const newItemsId = [...newSelectionModel].slice(diff * -1);
      const newItems = data.filter((value) => newItemsId.indexOf(value.__identifier as GridRowId) !== -1);
      setSelectedItems((prevSelectedItems) => {
        if (!Array.isArray(prevSelectedItems)) return;

        return [...prevSelectedItems, ...newItems];
      });
    }

    // removed items
    if (newSelectionModel.length < selectionModel.length) {
      const removedItemsId = selectionModel.filter((value) => newSelectionModel.indexOf(value) === -1);
      setSelectedItems((prevSelectedItems) => {
        if (!Array.isArray(prevSelectedItems)) return;

        return [...prevSelectedItems.filter((value) => removedItemsId.indexOf(value.__identifier as GridRowId) === -1)];
      });
    }

    setSelectionModel(newSelectionModel);
  };

  const handleSingleOnSelection = (newSelectionModel: GridRowSelectionModel) => {
    if (Array.isArray(selectionModel)) return;

    if (newSelectionModel.length === 0) {
      setSelectionModel('');
      setSelectedItems(undefined);
      return;
    }

    const lastId = newSelectionModel[newSelectionModel.length - 1];

    setSelectionModel(lastId);
    setSelectedItems(data.find((value) => value.__identifier === lastId));
  };

  const handleIsRowSelectable = (params: GridRowParams<T & { __selected?: boolean }>) => {
    return isRowSelectable(params.row, single, alreadySelectedItems);
  };

  return (
    <Dialog
      id={id}
      open={open}
      onClose={cancel}
      scroll="paper"
      fullWidth={true}
      maxWidth={'md'}
      TransitionComponent={SlideUpTransition}
    >
      <DialogTitle id={`${id}-dialog-title`}>
        {t('judo.modal.range.label', { defaultValue: 'Select' }) as string}
      </DialogTitle>
      <DialogContent id={`${id}-data-grid`} dividers={true}>
        <StripedDataGrid
          sx={
            single
              ? {
                  // overflow: 'hidden',
                  display: 'grid',
                  '.MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer': {
                    display: 'none',
                  },
                }
              : {
                  // overflow: 'hidden',
                  display: 'grid',
                }
          }
          slotProps={{
            filterPanel: {
              logicOperators: [GridLogicOperator.And],
            },
          }}
          {...serverTableConfig}
          pageSizeOptions={[10]}
          getRowId={(row: T) => row.__identifier as GridRowId}
          loading={isLoading}
          rows={data}
          rowCount={rowCount}
          getRowClassName={(params: GridRowClassNameParams) => {
            return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
          }}
          sortModel={sortModel}
          onSortModelChange={handleSortModelChange}
          checkboxSelection
          onRowSelectionModelChange={!single ? handleOnSelection : handleSingleOnSelection}
          isRowSelectable={handleIsRowSelectable}
          rowSelectionModel={selectionModel}
          hideFooterSelectedRowCount={single}
          columns={columns}
          keepNonExistentRowsSelected
          components={{
            Toolbar: () => (
              <GridToolbarContainer>
                <Button
                  id={`${id}-set-filters`}
                  variant="text"
                  startIcon={<MdiIcon path="filter" />}
                  onClick={async () => {
                    const newFilters = await openFilterDialog('TODO', filterOptions, filters);

                    if (newFilters) {
                      handleFiltersChange(newFilters);
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('judo.modal.range.set-filters', { defaultValue: 'Set filters' }) as string}{' '}
                  {filters.length !== 0 ? '(' + filters.length + ')' : ''}
                </Button>
                {createTrigger && (
                  <Button
                    id={`${id}-create`}
                    variant="text"
                    startIcon={<MdiIcon path="file_document_plus" />}
                    onClick={async () => {
                      try {
                        const result = await createTrigger();
                        if (result) {
                          handleClose();
                          resolve({
                            value: result,
                            resolveSource: 'create',
                          });
                        }
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                    disabled={isLoading || editMode}
                  >
                    {t('judo.pages.table.create', { defaultValue: 'Create' })}
                  </Button>
                )}
                <div>{/* Placeholder */}</div>
              </GridToolbarContainer>
            ),
            Pagination: () => (
              <CustomTablePagination
                pageChange={handlePageChange}
                isNextButtonEnabled={isNextButtonEnabled}
                page={page}
                setPage={setPage}
                rowPerPage={rangeDialogConfig.numberOfElements}
              />
            ),
          }}
        />
        {editMode && createTrigger && (
          <Typography sx={{ fontStyle: 'italic' }}>
            {t('judo.modal.range.create-blocked-edit-mode', {
              defaultValue: 'Creating new elements is disabled because you have unsaved changes',
            })}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button id={`${id}-action-cancel`} variant="text" onClick={cancel}>
          {t('judo.modal.range.cancel', { defaultValue: 'Cancel' }) as string}
        </Button>
        <Button id={`${id}-action-submit`} variant="contained" onClick={ok}>
          {t('judo.modal.range.submit', { defaultValue: 'Select' }) as string}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
