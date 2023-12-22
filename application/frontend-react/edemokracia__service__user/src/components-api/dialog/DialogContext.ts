//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components-api/dialog/DialogContext.ts'
// Template name: actor/src/components-api/dialog/DialogContext.ts
// Template file: actor/src/components-api/dialog/DialogContext.ts.hbs

import type { GridColDef, GridRowId, GridRowSelectionModel, GridSortItem } from '@mui/x-data-grid';
import type { ReactNode } from 'react';
import type { JudoStored, QueryCustomizer } from '~/services/data-api/common';
import { Filter, FilterOption } from './FilterDialog';

export interface DialogProviderProps {
  children: ReactNode;
}

export interface PageDialogProviderContext {
  openPageDialog: (page: ReactNode) => Promise<void>;
}

export interface ConfirmDialogProviderContext {
  openConfirmDialog: (
    id: string,
    confirmationMessage: string | ReactNode,
    title?: string | ReactNode,
  ) => Promise<boolean>;
}

export interface FilterDialogProviderContext {
  openFilterDialog: (id: string, filterOptions: FilterOption[], filters?: Filter[]) => Promise<Filter[]>;
}
