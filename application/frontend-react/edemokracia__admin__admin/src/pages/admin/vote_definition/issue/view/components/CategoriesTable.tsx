//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/table.tsx
// Template file: actor/src/pages/components/table.tsx.hbs

import { useEffect, useState, useImperativeHandle, useMemo, useRef, forwardRef, useCallback } from 'react';
import type { MouseEvent } from 'react';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
import type {
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridValueFormatterParams,
  GridRowClassNameParams,
  GridRowId,
  GridRowModel,
  GridRowSelectionModel,
  GridSortItem,
} from '@mui/x-data-grid';
import { GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import { MdiIcon, CustomTablePagination } from '~/components';
import { baseColumnConfig, baseTableConfig, toastConfig, DIVIDER_HEIGHT } from '~/config';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { columnsActionCalculator } from '~/components/table';
import { FilterOption, FilterType, Filter } from '~/components-api';
import type { PersistedTableData, RefreshableTable, TableRowAction } from '~/utilities';
import { useDataStore, useCRUDDialog } from '~/hooks';
import {
  decodeToken,
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  processQueryCustomizer,
  mapAllFiltersToQueryCustomizerProperties,
  mapFilterModelToFilters,
  mapFilterToFilterModel,
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  getUpdatedRowsSelected,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';
import { ContextMenu, StripedDataGrid } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';

import { Box, Typography } from '@mui/material';
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
  AdminVoteDefinition,
  AdminVoteDefinitionStored,
  EdemokraciaIssueStatus,
  EdemokraciaVoteType,
} from '~/generated/data-api';
import { adminIssueServiceForClassImpl, adminIssueCategoryServiceForClassImpl } from '~/generated/data-axios';
import {
  useRowRemoveCategoriesAction,
  useRowViewCategoriesAction,
  useTableAddCategoriesAction,
  useTableClearCategoriesAction,
  usePageRefreshIssueAction,
} from '../actions';
import { applyInMemoryFilters } from '~/utilities';
import { GridLogicOperator } from '@mui/x-data-grid';

export const ADMIN_VOTE_DEFINITION_ISSUE_VIEW_CATEGORIES = 'AdminVoteDefinitionIssueViewCategories';

export interface CategoriesTableProps {
  ownerData: AdminIssueStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminIssueStored, value: any) => void;
  validation: Map<keyof AdminIssue, string>;
}

export const CategoriesTable = (props: CategoriesTableProps) => {
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { openFilterDialog } = useFilterDialog();
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const openCRUDDialog = useCRUDDialog();

  const filterModelKey = `TableedemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueViewDefaultIssueViewEditOtherCategoriesCategoriesCategoriesLabelWrapperCategories-${ownerData.__identifier}-filterModel`;
  const filtersKey = `TableedemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueViewDefaultIssueViewEditOtherCategoriesCategoriesCategoriesLabelWrapperCategories-${ownerData.__identifier}-filters`;
  const [categoriesFilterModel, setCategoriesFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [data, setData] = useState<AdminIssueCategoryStored[]>([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const selectedRows = useRef<AdminIssueCategoryStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  const [categoriesSortModel, setCategoriesSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);

  const categoriesColumns: GridColDef<AdminIssueCategoryStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('admin.IssueView.categories.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('admin.IssueView.categories.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const categoriesRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueViewDefaultIssueViewEditOtherCategoriesCategoriesCategoriesLabelWrapperCategoriesTitleFilter',
      attributeName: 'title',
      label: t('admin.IssueView.categories.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueViewDefaultIssueViewEditOtherCategoriesCategoriesCategoriesLabelWrapperCategoriesDescriptionFilter',
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

  const rowRemoveCategoriesAction = useRowRemoveCategoriesAction();
  const rowViewCategoriesAction = useRowViewCategoriesAction();
  const tableAddCategoriesAction = useTableAddCategoriesAction();
  const tableClearCategoriesAction = useTableClearCategoriesAction();
  const pageRefreshIssueAction = usePageRefreshIssueAction();

  const categoriesRowActions: TableRowAction<AdminIssueCategoryStored>[] = [
    {
      id: 'RemoveActionedemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueViewEdemokraciaAdminAdminEdemokraciaAdminIssueCategoriesRowRemove',
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

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueViewDefaultIssueViewEditOtherCategoriesCategoriesCategoriesLabelWrapperCategoriesTitleFilter',
      attributeName: 'title',
      label: t('admin.IssueView.categories.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueViewDefaultIssueViewEditOtherCategoriesCategoriesCategoriesLabelWrapperCategoriesDescriptionFilter',
      attributeName: 'description',
      label: t('admin.IssueView.categories.description', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },
  ];

  const filter = async (id: string, filterOptions: FilterOption[], filters: Filter[]) => {
    const newFilters = await openFilterDialog(id, filterOptions, filters);

    if (Array.isArray(newFilters)) {
      setPaginationModel((prevState) => ({
        ...prevState,
        page: 0,
      }));
      setFilters(newFilters);
      setItemStringified(filtersKey, newFilters);
    }
  };

  const bulkRemoveSelected = useCallback(() => {
    openCRUDDialog<AdminIssueCategoryStored>({
      dialogTitle: t('judo.dialogs.crud-bulk.remove.title', { defaultValue: 'Remove selected items' }),
      itemTitleFn: (item) => item.title!,
      selectedItems: selectedRows.current,
      action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
        await rowRemoveCategoriesAction(ownerData, item, successHandler, errorHandler);
      },
      onClose: (needsRefresh) => {
        if (needsRefresh) {
          fetchOwnerData();
          setSelectionModel([]); // not resetting on fetchData because refreshes would always remove selections...
        }
      },
    });
  }, []);
  const isBulkRemoveAvailable: () => boolean = useCallback(() => {
    return !!selectionModel.length && true && isFormUpdateable() && !false;
  }, [ownerData, selectionModel]);

  useEffect(() => {
    if (ownerData?.__identifier) {
      const storedFilters = getItemParsed<Filter[]>(filtersKey);
      if (storedFilters !== null) {
        setFilters(storedFilters);
      }

      const storedFilterModel = getItemParsed<GridFilterModel>(filterModelKey);
      if (storedFilterModel !== null) {
        setCategoriesFilterModel(storedFilterModel);
      }
    }
  }, [ownerData]);

  useEffect(() => {
    const newData = applyInMemoryFilters<AdminIssueCategoryStored>(filters, ownerData?.categories ?? []);
    setData(newData);
  }, [ownerData?.categories, filters]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) => (props.validation.has('categories') ? `2px solid ${theme.palette.error.main}` : undefined),
        }}
        slotProps={{
          filterPanel: {
            logicOperators: [GridLogicOperator.And],
          },
        }}
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isOwnerLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...categoriesColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminIssueCategories',
            categoriesRowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setSelectionModel(newRowSelectionModel);
        }}
        onRowClick={(params: GridRowParams<AdminIssueCategoryStored>) => {
          if (!editMode) {
            rowViewCategoriesAction(ownerData, params.row, () => fetchOwnerData());
          }
        }}
        sortModel={categoriesSortModel}
        onSortModelChange={(newModel: GridSortModel) => {
          setCategoriesSortModel(newModel);
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
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
                  const res = await openRangeDialog<AdminIssueCategoryStored, AdminIssueCategoryQueryCustomizer>({
                    id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminIssueCategories',
                    columns: categoriesColumns,
                    defaultSortField: categoriesSortModel[0],
                    rangeCall: async (queryCustomizer) =>
                      await adminIssueServiceForClassImpl.getRangeForCategories(
                        ownerData,
                        processQueryCustomizer(queryCustomizer),
                      ),
                    single: false,
                    alreadySelectedItems: ownerData.categories ? [...ownerData.categories] : undefined,
                    filterOptions: categoriesRangeFilterOptions,
                    initialQueryCustomizer: categoriesInitialQueryCustomizer,
                  });

                  if (res) {
                    const newList = [...(ownerData.categories || []), ...(res.value as AdminIssueCategoryStored[])];
                    storeDiff('categories', newList);
                  }
                }}
                disabled={isOwnerLoading || false || !isFormUpdateable()}
              >
                {t('judo.pages.table.add', { defaultValue: 'Add' })}
              </Button>
              <Button
                id="TableedemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueViewDefaultIssueViewEditOtherCategoriesCategoriesCategoriesLabelWrapperCategories-filter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() =>
                  filter(
                    'TableedemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueViewDefaultIssueViewEditOtherCategoriesCategoriesCategoriesLabelWrapperCategories-filter',
                    filterOptions,
                    filters,
                  )
                }
                disabled={isOwnerLoading}
              >
                {t('judo.pages.table.set-filters', { defaultValue: 'Set filters' }) +
                  (filters.length !== 0 ? ' (' + filters.length + ')' : '')}
              </Button>
              {isBulkRemoveAvailable() ? (
                <Button
                  disabled={isOwnerLoading}
                  variant="text"
                  startIcon={<MdiIcon path="link-off" />}
                  onClick={() => {
                    const newList = data.filter((e) => !selectionModel.find((s) => s === e.__identifier));
                    storeDiff('categories', newList);
                    setSelectionModel([]);
                  }}
                >
                  {t('judo.pages.table.remove.selected', { defaultValue: 'Remove' })}
                </Button>
              ) : null}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
        }}
      />
      {props.validation.has('categories') && (
        <Box
          sx={{
            color: (theme) => theme.palette.error.main,
            display: 'flex',
            alignItems: 'center',
            pl: 1,
            pr: 1,
          }}
        >
          <MdiIcon path="alert-circle-outline" sx={{ mr: 1 }} />
          <Typography>{props.validation.get('categories')}</Typography>
        </Box>
      )}
    </>
  );
};
