import {
  getGridStringOperators,
  getGridNumericOperators,
  getGridDateOperators,
  getGridBooleanOperators,
  getGridSingleSelectOperators,
} from '@mui/x-data-grid';
import type { GridFilterOperator } from '@mui/x-data-grid';

function filterStringColumnOperators(operator: GridFilterOperator): boolean {
  // https://github.com/mui/mui-x/blob/master/packages/grid/x-data-grid/src/colDef/gridStringOperators.ts
  // startsWith and endsWith is filtered out because they'd need complex value mapping...
  return !['startsWith', 'endsWith', 'isEmpty', 'isNotEmpty', 'isAnyOf'].includes(operator.value);
}

function filterNumericColumnOperators(operator: GridFilterOperator): boolean {
  // https://github.com/mui/mui-x/blob/master/packages/grid/x-data-grid/src/colDef/gridNumericOperators.ts
  return !['isEmpty', 'isNotEmpty', 'isAnyOf'].includes(operator.value);
}

function filterDateColumnOperators(operator: GridFilterOperator): boolean {
  // https://github.com/mui/mui-x/blob/master/packages/grid/x-data-grid/src/colDef/gridDateOperators.ts
  return !['not', 'isEmpty', 'isNotEmpty'].includes(operator.value);
}

function filterDateTimeColumnOperators(operator: GridFilterOperator): boolean {
  // https://github.com/mui/mui-x/blob/master/packages/grid/x-data-grid/src/colDef/gridDateOperators.ts
  return !['is', 'not', 'isEmpty', 'isNotEmpty'].includes(operator.value);
}

function filterBooleanColumnOperators(operator: GridFilterOperator): boolean {
  // https://github.com/mui/mui-x/blob/master/packages/grid/x-data-grid/src/colDef/gridBooleanOperators.ts
  return true;
}

function filterSingleSelectColumnOperators(operator: GridFilterOperator): boolean {
  // https://github.com/mui/mui-x/blob/master/packages/grid/x-data-grid/src/colDef/gridBooleanOperators.ts
  return !['not', 'isAnyOf'].includes(operator.value);
}

export const stringColumnOperators: GridFilterOperator[] = getGridStringOperators().filter(filterStringColumnOperators);
export const numericColumnOperators: GridFilterOperator[] =
  getGridNumericOperators().filter(filterNumericColumnOperators);
export const dateColumnOperators: GridFilterOperator[] = getGridDateOperators().filter(filterDateColumnOperators);
export const dateTimeColumnOperators: GridFilterOperator[] =
  getGridDateOperators(true).filter(filterDateTimeColumnOperators); // showTime = true
export const booleanColumnOperators: GridFilterOperator[] =
  getGridBooleanOperators().filter(filterBooleanColumnOperators);
export const singleSelectColumnOperators: GridFilterOperator[] = getGridSingleSelectOperators().filter(
  filterSingleSelectColumnOperators,
);
