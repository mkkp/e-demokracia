//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/utilities/interfaces.ts'
// Template name: actor/src/utilities/interfaces.ts
// Template file: actor/src/utilities/interfaces.ts.hbs

import type { GridColDef } from '@mui/x-data-grid';
import type { TFunction } from 'i18next';
import { ColumnsActionsOptions, TableRowAction } from './table-row-actions';

export type ColumnActionsProvider<R> = (
  id: string,
  actions: TableRowAction<R>[],
  t: TFunction<string, any>,
  options?: ColumnsActionsOptions,
) => GridColDef[];

export interface DialogResult<T> {
  result: 'close' | 'submit' | 'submit-draft';
  data?: T;
  openCreated?: boolean;
}

/**
 * This is a copy of the MUI Date and DateTime picker validation internal API. Since the source is considered internal
 * we cannot risk breaks due to those APIs being moved, etc... only if the types change.
 */
export interface BaseDateValidationProps {
  maxDate?: Date;
  minDate?: Date;
  disablePast?: boolean;
  disableFuture?: boolean;
}
