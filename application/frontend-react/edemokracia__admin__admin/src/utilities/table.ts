//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/utilities/table.ts'
// Template name: actor/src/utilities/table.ts
// Template file: actor/src/utilities/table.ts.hbs

import type { GridSortModel } from '@mui/x-data-grid';
import type { Filter } from '../components-api';

export interface PersistedTableData {
  sortModel?: GridSortModel;
  filters?: Filter[];
}

export interface RefreshableTable {
  fetchData: () => Promise<void>;
}
