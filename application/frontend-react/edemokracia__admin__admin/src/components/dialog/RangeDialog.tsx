//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/dialog/RangeDialog.tsx'
// Template name: actor/src/components/dialog/RangeDialog.tsx
// Template file: actor/src/components/dialog/RangeDialog.tsx.hbs

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import {
  GridSortModel,
  GridRowModel,
  DataGrid,
  GridRowParams,
  GridColDef,
  GridSortItem,
  GridRowSelectionModel,
  GridToolbarContainer,
  GridRowId,
} from '@mui/x-data-grid';
import { useEffect, useRef, useState } from 'react';
import type { JudoStored, QueryCustomizer } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import type { Filter, FilterOption } from '../../components-api';
import {
  useErrorHandler,
  processQueryCustomizer,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  mapFiltersToQueryCustomizerProperty,
} from '../../utilities';
import { serverTableConfig, rangeDialogConfig } from '../../config';
import { CustomTablePagination } from '../CustomTablePagination';
import { useFilterDialog } from './hooks';

interface RangeDialogProps<T extends JudoStored<T>, U extends QueryCustomizer<T>> {
  id: string;
  resolve: (value: any) => void;
  open: boolean;
  handleClose: () => void;
  single?: boolean;
  columns: GridColDef<T>[];
  defaultSortField: GridSortItem;
  rangeCall: (queryCustomizer: U) => Promise<Array<T>>;
  alreadySelectedItems: GridRowSelectionModel | GridRowId;
  initalQueryCustomizer: U;
  filterOptions: FilterOption[];
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
  filterOptions,
}: RangeDialogProps<T, U>) => {
  const { openFilterDialog } = useFilterDialog();
  const { t } = useTranslation();
  const descriptionElementRef = useRef<HTMLElement>(null);
  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rowCount, setRowCount] = useState<number>(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([defaultSortField]);
  const [lastItem, setLastItem] = useState<T>();
  const [firstItem, setFirstItem] = useState<T>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<GridRowModel<T>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel | GridRowId | undefined>(
    single ? undefined : [],
  );
  const [selectedItems, setSelectedItems] = useState<T[] | T | undefined>([]);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [queryCustomizer, setQueryCustomizer] = useState<U>({
    ...initalQueryCustomizer,
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
      handleFetchError(error);
    }
    setIsLoading(false);
  };

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);

    setQueryCustomizer((prevQueryCustomizer) => {
      const tempQueryCustomizer: any = { ...prevQueryCustomizer };

      filterOptions.forEach((filter) => {
        tempQueryCustomizer[filter.attributeName] = mapFiltersToQueryCustomizerProperty(
          newFilters,
          filter.attributeName,
        );
      });

      return {
        ...prevQueryCustomizer,
        _seek: {
          lastItem: undefined,
          limit: rangeDialogConfig.numberOfElements + 1,
          reverse: undefined,
        },
        ...tempQueryCustomizer,
      };
    });
  };

  const handleSortModelChange = (newModel: GridSortModel) => {
    setPage(0);
    setSortModel(newModel);

    const { field, sort } = newModel[0];

    setQueryCustomizer((prevQueryCustomizer) => {
      return {
        ...prevQueryCustomizer,
        _orderBy: [{ attribute: field, descending: sort === 'desc' }],
      };
    });
  };

  // useEffect(() => {
  //   setPage(0);
  //   const { field, sort } = sortModel[0];

  //   setQueryCustomizer((prevQueryCustomizer) => {
  //     const tempQueryCustomizer = { ...prevQueryCustomizer };

  //     filterOptions.forEach(
  //       (filter) =>
  //         // @ts-ignore
  //         (tempQueryCustomizer[filter.attributeName] = mapFiltersToQueryCustomizerProperty(
  //           filters,
  //           filter.attributeName,
  //         )),
  //     );

  //     return {
  //       ...prevQueryCustomizer,
  //       _seek: {
  //         lastItem: undefined,
  //         limit: rangeDialogConfig.numberOfElements + 1,
  //         reverse: undefined,
  //       },
  //       _orderBy: [{ attribute: field, descending: sort === 'desc' }],
  //       ...tempQueryCustomizer,
  //     };
  //   });
  // }, [sortModel, filters]);

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
    resolve(selectedItems);
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
    return !params.row.__selected;
  };

  return (
    <Dialog id={id} open={open} onClose={cancel} scroll="paper" fullWidth={true} maxWidth={'md'}>
      <DialogTitle id={`${id}-dialog-title`}>
        {t('judo.modal.range.label', { defaultValue: 'Select' }) as string}
      </DialogTitle>
      <DialogContent id={`${id}-data-grid`} dividers={true}>
        <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
          <DataGrid
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
            {...serverTableConfig}
            pageSizeOptions={[10]}
            getRowId={(row: T) => row.__identifier as GridRowId}
            loading={isLoading}
            rows={data}
            rowCount={rowCount}
            getRowClassName={() => 'data-grid-row'}
            getCellClassName={() => 'data-grid-cell'}
            sortModel={sortModel}
            onSortModelChange={handleSortModelChange}
            checkboxSelection
            onRowSelectionModelChange={!single ? handleOnSelection : handleSingleOnSelection}
            isRowSelectable={!single ? handleIsRowSelectable : undefined}
            rowSelectionModel={selectionModel}
            hideFooterSelectedRowCount={single}
            columns={columns}
            keepNonExistentRowsSelected
            components={{
              Toolbar: () => (
                <GridToolbarContainer>
                  <Button
                    id={`${id}-set-filters`}
                    variant="outlined"
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
        </DialogContentText>
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
