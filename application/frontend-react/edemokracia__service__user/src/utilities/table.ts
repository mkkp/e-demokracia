//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/utilities/table.ts'
// Template name: actor/src/utilities/table.ts
// Template file: actor/src/utilities/table.ts.hbs

import type { MutableRefObject } from 'react';
import type { GridSortModel, GridFilterModel, GridRowSelectionModel } from '@mui/x-data-grid';
import type { JudoStored } from '@judo/data-api-common';
import type { Filter } from '../components-api';

export interface PersistedTableData {
  sortModel?: GridSortModel;
  filterModel?: GridFilterModel;
  filters?: Filter[];
}

export interface RefreshableTable {
  fetchData: () => Promise<void>;
}

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

export const getUpdatedRowsSelected = <T extends JudoStored<any>>(
  selectedRows: MutableRefObject<T[]>,
  data: T[],
  selectionModel: GridRowSelectionModel,
): T[] => {
  const newSelectedRows: T[] = [];
  // our source of truth is the `selectionModel`
  for (const selection of selectionModel) {
    const prevItem = selectedRows.current.find((r) => r.__identifier === selection);
    if (prevItem) {
      // we already have the item in our `selectedRows`, so keep it
      newSelectedRows.push(prevItem);
    } else {
      // `selection` is a new key, we need to look up the row data in our `data`
      const newItem = data.find((r) => r.__identifier === selection);
      if (newItem) {
        // and add it if found
        newSelectedRows.push(newItem);
      }
    }
  }

  // since we created a new whitelist of selections, removed selections are left out
  return newSelectedRows;
};
