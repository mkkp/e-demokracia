//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/utilities/table.ts'
// Template name: actor/src/utilities/table.ts
// Template file: actor/src/utilities/table.ts.hbs

import type { GridSortModel, GridFilterModel } from '@mui/x-data-grid';
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
