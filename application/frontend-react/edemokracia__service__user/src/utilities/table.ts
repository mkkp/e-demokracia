//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/utilities/table.ts'
// Template name: actor/src/utilities/table.ts
// Template file: actor/src/utilities/table.ts.hbs

import type { GridColDef, GridFilterModel, GridRowSelectionModel, GridSortModel } from '@mui/x-data-grid';
import type { MutableRefObject } from 'react';
import type { JudoStored } from '~/services/data-api/common';
import type { Filter } from '../components-api';

export interface PersistedColumnInfo {
  field: string;
  index: number;
  width?: number;
}

export interface PersistedTableData {
  sortModel?: GridSortModel;
  filterModel?: GridFilterModel;
  filters?: Filter[];
}

export interface RefreshableTable {
  fetchData: () => Promise<void>;
}

export interface SidekickComponentProps<T> {
  editMode?: boolean;
  isLoading?: boolean;
  filters: Filter[];
  onFiltersChange: (newFilters: Filter[]) => void;
  data: T[];
}

export const TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY = 'TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY';

export type ColumnCustomizerHook<T extends JudoStored<T>> = () => ColumnCustomizer<T>;
export type ColumnCustomizer<T extends JudoStored<T>> = (original: GridColDef<T>) => GridColDef<T>;

export const isRowSelectable = <T extends JudoStored<T>>(
  row: T & { __selected?: boolean },
  single?: boolean,
  alreadySelectedItems?: T[],
) => {
  if (Array.isArray(alreadySelectedItems) && alreadySelectedItems.length) {
    // This branch should be used by aggregation tables because in these cases callers would pass their in-memory
    // item list which we need to check.
    return !alreadySelectedItems.find((i) => i.__identifier === row.__identifier);
  } else if (!single) {
    // This branch should be used by association table relations which trigger instantly and always have to check the
    // backend state.
    return !row.__selected;
  }
  // This case is for single aggregations, because users can unset the element in edit mode but would not be able to
  // re-set them if we checked the backend response above (since the removal might not be persisted yet).
  return true;
};

export const getUpdatedRowsSelected = (
  selectedRows: MutableRefObject<any[]>,
  data: any[],
  selectionModel: GridRowSelectionModel,
): any[] => {
  const newSelectedRows: any[] = [];
  // if we are dealing with transient items, we give up...
  // our source of truth is the `selectionModel`
  for (const selection of selectionModel) {
    const prevItem =
      selectedRows.current.length && selectedRows.current[0].__identifier
        ? selectedRows.current.find((r) => r.__identifier === selection)
        : undefined;
    if (prevItem) {
      // we already have the item in our `selectedRows`, so keep it
      newSelectedRows.push(prevItem);
    } else {
      // `selection` is a new key, we need to look up the row data in our `data`
      const newItem = data.length && data[0].__identifier ? data.find((r) => r.__identifier === selection) : undefined;
      if (newItem) {
        // and add it if found
        newSelectedRows.push(newItem);
      }
    }
  }

  // since we created a new whitelist of selections, removed selections are left out
  return newSelectedRows;
};
