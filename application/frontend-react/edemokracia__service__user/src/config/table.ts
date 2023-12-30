//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/config/table.ts'
// Template name: actor/src/config/table.ts
// Template file: actor/src/config/table.ts.hbs

import type { DataGridProps, GridColDef } from '@mui/x-data-grid';
import { density } from '../theme/density';

export const baseColumnConfig: Partial<GridColDef<any>> = {
  groupable: false,
  hideable: true,
  filterable: false,
};

export const baseTableConfig: Partial<DataGridProps<any>> = {
  autoHeight: true,
  sortingOrder: ['asc', 'desc', null],
  pagination: true, // is false for DataGridPro by default
  disableColumnFilter: !false,
  disableColumnSelector: true,
  density: density.dataGridDensity || 'standard',
};

export const serverTableConfig: Partial<DataGridProps<any>> = {
  ...baseTableConfig,
  sortingMode: 'server',
  paginationMode: 'server',
};
