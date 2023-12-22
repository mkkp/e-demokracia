//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/dialog/DialogProvider.tsx'
// Template name: actor/src/components/dialog/DialogProvider.tsx
// Template file: actor/src/components/dialog/DialogProvider.tsx.hbs

import { useState } from 'react';
import type { ReactNode } from 'react';
import type { JudoStored, QueryCustomizer } from '~/services/data-api/common';
import type {
  ConfirmDialogProviderContext,
  DialogProviderProps,
  FilterDialogProviderContext,
  PageDialogProviderContext,
} from '../../components-api';
import type { Filter, FilterOption } from '../../components-api';
import { ConfirmationDialog } from './ConfirmationDialog';
import { FilterDialog } from './FilterDialog';
import { OperationFaultDialog } from './OperationFaultDialog';
import { PageDialog } from './PageDialog';
import { ConfirmDialogContextState, FilterDialogContextState, PageDialogContextState } from './hooks';

export const DialogProvider = ({ children }: DialogProviderProps) => {
  // Page Dialog
  const [isOpenPageDialog, setIsOpenPageDialog] = useState(false);
  const [pageDialog, setPageDialog] = useState<ReactNode>();

  const handleClosePageDialog = () => {
    setIsOpenPageDialog(false);
  };

  const handleOpenPageDialog = async (page: ReactNode) => {
    setIsOpenPageDialog(true);
    return new Promise<void>((resolve) => {
      setPageDialog(<PageDialog page={page} handleClose={handleClosePageDialog} open={true} resolve={resolve} />);
    });
  };

  const pageDialogContext: PageDialogProviderContext = {
    openPageDialog: handleOpenPageDialog,
  };

  // Confirmation Dialog
  const [isOpenConfirmDialog, setIsOpenConfirmDialog] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState<ReactNode>();

  const handleCloseConfirmDialog = () => {
    setIsOpenConfirmDialog(false);
    return false;
  };

  const handleOpenConfirmDialog = async (
    id: string,
    confirmationMessage: string | ReactNode,
    title?: string | ReactNode,
  ) => {
    setIsOpenConfirmDialog(true);

    return new Promise<boolean>((resolve) => {
      setConfirmDialog(
        <ConfirmationDialog
          id={id}
          confirmationMessage={confirmationMessage}
          title={title}
          handleClose={handleCloseConfirmDialog}
          open={true}
          resolve={resolve}
        />,
      );
    });
  };

  const confirmDialogContext: ConfirmDialogProviderContext = {
    openConfirmDialog: handleOpenConfirmDialog,
  };

  // Filter dialog
  const [isOpenFilterDialog, setIsOpenFilterDialog] = useState(false);
  const [filterDialog, setFilterDialog] = useState<ReactNode>();

  const handleCloseFilterDialog = () => {
    setIsOpenFilterDialog(false);
    return false;
  };

  const handleOpenFilterDialog = async (id: string, filterOptions: FilterOption[], filters?: Filter[]) => {
    setIsOpenFilterDialog(true);

    return new Promise<Filter[]>((resolve) => {
      setFilterDialog(
        <FilterDialog
          id={id}
          filters={filters}
          filterOptions={filterOptions}
          handleClose={handleCloseFilterDialog}
          open={true}
          resolve={resolve}
        />,
      );
    });
  };

  const filterDialogContext: FilterDialogProviderContext = {
    openFilterDialog: handleOpenFilterDialog,
  };

  return (
    <PageDialogContextState.Provider value={pageDialogContext}>
      <ConfirmDialogContextState.Provider value={confirmDialogContext}>
        <FilterDialogContextState.Provider value={filterDialogContext}>
          {children}
          {isOpenPageDialog && pageDialog}
          {isOpenConfirmDialog && confirmDialog}
          {isOpenFilterDialog && filterDialog}
        </FilterDialogContextState.Provider>
      </ConfirmDialogContextState.Provider>
    </PageDialogContextState.Provider>
  );
};
