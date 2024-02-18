//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/CustomTablePagination.tsx'
// Template name: actor/src/components/CustomTablePagination.tsx
// Template file: actor/src/components/CustomTablePagination.tsx.hbs

import TablePagination from '@mui/material/TablePagination';
import { type ChangeEventHandler, type Dispatch, type MouseEvent, type SetStateAction, useCallback } from 'react';

export interface CustomTablePaginationProps {
  pageSizeOptions: number[];
  setPageSize: (newValue: number) => void;
  pageChange: (isNext: boolean) => Promise<void>;
  isNextButtonEnabled: boolean;
  page: number;
  rowPerPage: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalCount?: number;
}

export const CustomTablePagination = (props: CustomTablePaginationProps) => {
  const handleChangePage = async (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    let isNext = true;
    if (newPage < props.page) {
      isNext = false;
    }

    props.setPage(newPage);

    await props.pageChange(isNext);
  };
  const onRowsPerPageChange = useCallback<ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>>(
    (evt) => props.setPageSize(Number(evt.target.value)),
    [],
  );

  return (
    <TablePagination
      component="div"
      count={props.totalCount ?? -1}
      page={props.page}
      onPageChange={handleChangePage}
      rowsPerPage={props.rowPerPage}
      rowsPerPageOptions={props.pageSizeOptions}
      onRowsPerPageChange={onRowsPerPageChange}
      labelDisplayedRows={({ from, to }) =>
        `${from}–${to}${props.totalCount !== undefined && props.totalCount > -1 ? ` / ${props.totalCount}` : ''}`
      }
      nextIconButtonProps={{
        disabled: !props.isNextButtonEnabled,
      }}
      backIconButtonProps={{
        disabled: props.page === 0,
      }}
    />
  );
};
