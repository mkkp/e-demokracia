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
  AdminCity,
  AdminCityQueryCustomizer,
  AdminCityStored,
  AdminComment,
  AdminCommentQueryCustomizer,
  AdminCommentStored,
  AdminCounty,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminDebate,
  AdminDebateStored,
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminIssue,
  AdminIssueAttachment,
  AdminIssueAttachmentQueryCustomizer,
  AdminIssueAttachmentStored,
  AdminIssueCategory,
  AdminIssueCategoryQueryCustomizer,
  AdminIssueCategoryStored,
  AdminIssueDebate,
  AdminIssueDebateQueryCustomizer,
  AdminIssueDebateStored,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminIssueType,
  AdminIssueTypeQueryCustomizer,
  AdminIssueTypeStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
  EdemokraciaIssueStatus,
  EdemokraciaVoteType,
} from '~/generated/data-api';
import { adminIssueServiceImpl, adminIssueCategoryServiceImpl } from '~/generated/data-axios';
import {
  usePageRefreshIssueAction,
  useRowRemoveCategoriesAction,
  useRowViewCategoriesAction,
  useTableAddCategoriesAction,
  useTableClearCategoriesAction,
} from '../actions';

export interface CategoriesTableProps {
  ownerData: AdminIssueStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminIssueStored, value: any) => void;
}

export const CategoriesTable = (props: CategoriesTableProps) => {
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [categoriesSortModel, setCategoriesSortModel] = useState<GridSortModel>([{ field: 'title', sort: 'asc' }]);

  const categoriesColumns: GridColDef<AdminIssueCategoryStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('admin.IssueView.categories.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('admin.IssueView.categories.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const categoriesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDebateIssueViewDefaultIssueViewOtherCategoriesCategoriesCategoriesLabelWrapperCategoriesTitleFilter',
      attributeName: 'title',
      label: t('admin.IssueView.categories.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDebateIssueViewDefaultIssueViewOtherCategoriesCategoriesCategoriesLabelWrapperCategoriesDescriptionFilter',
      attributeName: 'description',
      label: t('admin.IssueView.categories.description', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },
  ];

  const categoriesInitialQueryCustomizer: AdminIssueCategoryQueryCustomizer = {
    _mask: '{title,description}',
    _orderBy: categoriesSortModel.length
      ? [
          {
            attribute: categoriesSortModel[0].field,
            descending: categoriesSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageRefreshIssueAction = usePageRefreshIssueAction();
  const rowRemoveCategoriesAction = useRowRemoveCategoriesAction();
  const rowViewCategoriesAction = useRowViewCategoriesAction();
  const tableAddCategoriesAction = useTableAddCategoriesAction();
  const tableClearCategoriesAction = useTableClearCategoriesAction();

  const categoriesRowActions: TableRowAction<AdminIssueCategoryStored>[] = [
    {
      id: 'RemoveActionedemokraciaAdminAdminEdemokraciaAdminDebateIssueViewEdemokraciaAdminAdminEdemokraciaAdminIssueCategoriesRowRemove',
      label: t('judo.pages.table.remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      action: async (row: AdminIssueCategoryStored) => {
        storeDiff('categories', [
          ...(ownerData.categories || []).filter(
            (e: AdminIssueCategoryStored) => e.__signedIdentifier !== row.__signedIdentifier,
          ),
        ]);
      },
    },
  ];

  const categoriesRangeCall = async () =>
    openRangeDialog<AdminIssueCategoryStored, AdminIssueCategoryQueryCustomizer>({
      id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminIssueCategories',
      columns: categoriesColumns,
      defaultSortField: categoriesSortModel[0],
      rangeCall: async (queryCustomizer) =>
        await adminIssueServiceImpl.getRangeForCategories(undefined, processQueryCustomizer(queryCustomizer)),
      single: false,
      alreadySelectedItems: categoriesSelectionModel,
      filterOptions: categoriesRangeFilterOptions,
      initialQueryCustomizer: categoriesInitialQueryCustomizer,
    });

  const [categoriesSelectionModel, setCategoriesSelectionModel] = useState<GridRowSelectionModel>([]);

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
      rows={ownerData?.categories ?? []}
      getRowClassName={() => 'data-grid-row'}
      getCellClassName={() => 'data-grid-cell'}
      columns={[
        ...categoriesColumns,
        ...columnsActionCalculator(
          'RelationTypeedemokraciaAdminAdminEdemokraciaAdminIssueCategories',
          categoriesRowActions,
          { shownActions: 2 },
        ),
      ]}
      disableRowSelectionOnClick
      onRowClick={(params: GridRowParams<AdminIssueCategoryStored>) => {
        if (!editMode) {
          rowViewCategoriesAction(ownerData, params.row);
        }
      }}
      sortModel={categoriesSortModel}
      onSortModelChange={(newModel: GridSortModel) => {
        setCategoriesSortModel(newModel);
      }}
      components={{
        Toolbar: () => (
          <GridToolbarContainer>
            <Button
              id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminIssueCategories-clear"
              startIcon={<MdiIcon path="link_off" />}
              variant="text"
              onClick={async () => {
                storeDiff('categories', []);
              }}
              disabled={isOwnerLoading || false || !isFormUpdateable()}
            >
              {t('judo.pages.table.clear', { defaultValue: 'Clear' })}
            </Button>
            <Button
              id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminIssueCategories-add"
              startIcon={<MdiIcon path="attachment-plus" />}
              variant="text"
              onClick={async () => {
                const res = await categoriesRangeCall();

                if (res) {
                  storeDiff('categories', [...(ownerData.categories || []), ...(res as AdminIssueCategoryStored[])]);
                }
              }}
              disabled={isOwnerLoading || false || !isFormUpdateable()}
            >
              {t('judo.pages.table.add', { defaultValue: 'Add' })}
            </Button>
            <div>{/* Placeholder */}</div>
          </GridToolbarContainer>
        ),
      }}
    />
  );
};
