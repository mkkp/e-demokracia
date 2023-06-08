//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/table.tsx
// Template file: actor/src/pages/components/table.tsx.hbs

import { useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import type {
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridValueFormatterParams,
  GridRowId,
  GridRowModel,
  GridRowSelectionModel,
  GridSortItem,
} from '@mui/x-data-grid';
import { GridToolbarContainer, DataGrid } from '@mui/x-data-grid';
import { MdiIcon, CustomTablePagination } from '~/components';
import { baseColumnConfig, baseTableConfig, toastConfig, dividerHeight } from '~/config';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { columnsActionCalculator } from '~/components/table';
import { FilterOption, FilterType, Filter } from '~/components-api';
import type { PersistedTableData, RefreshableTable, TableRowAction } from '~/utilities';
import {
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  processQueryCustomizer,
  mapAllFiltersToQueryCustomizerProperties,
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';

import {
  AdminIssueCategory,
  AdminIssueCategoryQueryCustomizer,
  AdminIssueCategoryStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminIssueCategoryServiceImpl } from '~/generated/data-axios';
import {
  usePageDeleteCategoriesAction,
  usePageRefreshCategoriesAction,
  useRowDeleteSubcategoriesAction,
  useRowViewSubcategoriesAction,
  useTableCreateSubcategoriesAction,
} from '../actions';

export interface SubcategoriesTableProps {
  ownerData: AdminIssueCategoryStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminIssueCategoryStored, value: any) => void;
}

export const SubcategoriesTable = (props: SubcategoriesTableProps) => {
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [subcategoriesSortModel, setSubcategoriesSortModel] = useState<GridSortModel>([
    { field: 'title', sort: 'asc' },
  ]);

  const subcategoriesColumns: GridColDef<AdminIssueCategoryStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('admin.IssueCategoryView.subcategories.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('admin.IssueCategoryView.subcategories.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const pageDeleteCategoriesAction = usePageDeleteCategoriesAction();
  const pageRefreshCategoriesAction = usePageRefreshCategoriesAction();
  const rowDeleteSubcategoriesAction = useRowDeleteSubcategoriesAction();
  const rowViewSubcategoriesAction = useRowViewSubcategoriesAction();
  const tableCreateSubcategoriesAction = useTableCreateSubcategoriesAction();

  const subcategoriesRowActions: TableRowAction<AdminIssueCategoryStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminAdminCategoriesViewEdemokraciaAdminAdminEdemokraciaAdminIssueCategorySubcategoriesRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminIssueCategoryStored) =>
        rowDeleteSubcategoriesAction(ownerData, row, () => fetchOwnerData()),
      disabled: (row: AdminIssueCategoryStored) => editMode || !row.__deleteable,
    },
  ];

  return (
    <DataGrid
      {...baseTableConfig}
      pageSizeOptions={[10]}
      sx={{
        // overflow: 'hidden',
        display: 'grid',
      }}
      getRowId={(row: { __identifier: string }) => row.__identifier}
      loading={isOwnerLoading}
      rows={ownerData?.subcategories ?? []}
      getRowClassName={() => 'data-grid-row'}
      getCellClassName={() => 'data-grid-cell'}
      columns={[
        ...subcategoriesColumns,
        ...columnsActionCalculator(
          'RelationTypeedemokraciaAdminAdminEdemokraciaAdminIssueCategorySubcategories',
          subcategoriesRowActions,
          { shownActions: 2 },
        ),
      ]}
      disableRowSelectionOnClick
      onRowClick={(params: GridRowParams<AdminIssueCategoryStored>) => {
        if (!editMode) {
          rowViewSubcategoriesAction(ownerData, params.row);
        }
      }}
      sortModel={subcategoriesSortModel}
      onSortModelChange={(newModel: GridSortModel) => {
        setSubcategoriesSortModel(newModel);
      }}
      components={{
        Toolbar: () => (
          <GridToolbarContainer>
            <Button
              id="CreateActionedemokraciaAdminAdminEdemokraciaAdminAdminCategoriesViewEdemokraciaAdminAdminEdemokraciaAdminIssueCategorySubcategoriesTableCreate"
              startIcon={<MdiIcon path="file_document_plus" />}
              variant="text"
              onClick={() =>
                tableCreateSubcategoriesAction(ownerData, () => {
                  fetchOwnerData();
                })
              }
              disabled={editMode || isOwnerLoading || false || !isFormUpdateable()}
            >
              {t('judo.pages.table.create', { defaultValue: 'Create' })}
            </Button>
            <div>{/* Placeholder */}</div>
          </GridToolbarContainer>
        ),
      }}
    />
  );
};
