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
  EdemokraciaIssueScope,
  EdemokraciaIssueStatus,
  EdemokraciaVoteType,
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServiceCon,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserIssues,
  ServiceUserIssuesStored,
} from '~/generated/data-api';
import { serviceIssueServiceForClassImpl, serviceConServiceForClassImpl } from '~/generated/data-axios';
import {
  useServiceConCreateConArgumentAction,
  useServiceConCreateProArgumentAction,
  useServiceConVoteDownAction,
  useServiceConVoteUpAction,
  useRowDeleteConsAction,
  useRowViewConsAction,
  usePageRefreshActiveIssuesInActivityDistrictsAction,
} from '../actions';
import { applyInMemoryFilters } from '~/utilities';
import { GridLogicOperator } from '@mui/x-data-grid';

export const SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_DISTRICTS_VIEW_CONS =
  'ServiceUserIssuesActiveIssuesInActivityDistrictsViewCons';

export interface ConsTableProps {
  ownerData: ServiceIssueStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof ServiceIssueStored, value: any) => void;
  validation: Map<keyof ServiceIssue, string>;
}

export const ConsTable = (props: ConsTableProps) => {
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { openFilterDialog } = useFilterDialog();
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const openCRUDDialog = useCRUDDialog();

  const filterModelKey = `TableedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityDistrictsViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperConsTableConsLabelWrapperCons-${ownerData.__identifier}-filterModel`;
  const filtersKey = `TableedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityDistrictsViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperConsTableConsLabelWrapperCons-${ownerData.__identifier}-filters`;
  const [consFilterModel, setConsFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [data, setData] = useState<ServiceConStored[]>([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const selectedRows = useRef<ServiceConStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  const [consSortModel, setConsSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);

  const consColumns: GridColDef<ServiceConStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('service.IssueView.cons.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'upVotes',
      headerName: t('service.IssueView.cons.upVotes', { defaultValue: 'up' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      filterable: false && true,
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
    {
      ...baseColumnConfig,
      field: 'downVotes',
      headerName: t('service.IssueView.cons.downVotes', { defaultValue: 'down' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      filterable: false && true,
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
  ];

  const consRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityDistrictsViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperConsTableConsLabelWrapperConsTitleFilter',
      attributeName: 'title',
      label: t('service.IssueView.cons.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityDistrictsViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperConsTableConsLabelWrapperConsUpVotesFilter',
      attributeName: 'upVotes',
      label: t('service.IssueView.cons.upVotes', { defaultValue: 'up' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityDistrictsViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperConsTableConsLabelWrapperConsDownVotesFilter',
      attributeName: 'downVotes',
      label: t('service.IssueView.cons.downVotes', { defaultValue: 'down' }) as string,
      filterType: FilterType.numeric,
    },
  ];

  const consInitialQueryCustomizer: ServiceConQueryCustomizer = {
    _mask: '{title,upVotes,downVotes}',
    _orderBy: consSortModel.length
      ? [
          {
            attribute: consSortModel[0].field,
            descending: consSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const serviceConCreateConArgumentAction = useServiceConCreateConArgumentAction();
  const serviceConCreateProArgumentAction = useServiceConCreateProArgumentAction();
  const serviceConVoteDownAction = useServiceConVoteDownAction();
  const serviceConVoteUpAction = useServiceConVoteUpAction();
  const rowDeleteConsAction = useRowDeleteConsAction();
  const rowViewConsAction = useRowViewConsAction();
  const pageRefreshActiveIssuesInActivityDistrictsAction = usePageRefreshActiveIssuesInActivityDistrictsAction();

  const consRowActions: TableRowAction<ServiceConStored>[] = [
    {
      id: 'DeleteActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityDistrictsViewEdemokraciaServiceUserEdemokraciaServiceIssueConsRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: ServiceConStored) => rowDeleteConsAction(ownerData, row, () => fetchOwnerData()),
      disabled: (row: ServiceConStored) => editMode || !row.__deleteable,
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityDistrictsViewEdemokraciaServiceUserEdemokraciaServiceConVoteUpButtonCallOperation',
      label: t('service.IssueView.cons.voteUp.ButtonCallOperation', { defaultValue: '' }) as string,
      icon: <MdiIcon path="thumb-up" />,
      action: async (row: ServiceConStored) => serviceConVoteUpAction(row, () => fetchOwnerData()),
      disabled: (row: ServiceConStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityDistrictsViewEdemokraciaServiceUserEdemokraciaServiceConVoteDownButtonCallOperation',
      label: t('service.IssueView.cons.voteDown.ButtonCallOperation', { defaultValue: '' }) as string,
      icon: <MdiIcon path="thumb-down" />,
      action: async (row: ServiceConStored) => serviceConVoteDownAction(row, () => fetchOwnerData()),
      disabled: (row: ServiceConStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityDistrictsViewEdemokraciaServiceUserEdemokraciaServiceConCreateProArgumentButtonCallOperation',
      label: t('service.IssueView.cons.createProArgument.ButtonCallOperation', {
        defaultValue: 'Add Pro Argument',
      }) as string,
      icon: <MdiIcon path="chat-plus" />,
      action: async (row: ServiceConStored) => serviceConCreateProArgumentAction(row, () => fetchOwnerData()),
      disabled: (row: ServiceConStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityDistrictsViewEdemokraciaServiceUserEdemokraciaServiceConCreateConArgumentButtonCallOperation',
      label: t('service.IssueView.cons.createConArgument.ButtonCallOperation', {
        defaultValue: 'Add Con Argument',
      }) as string,
      icon: <MdiIcon path="chat-minus" />,
      action: async (row: ServiceConStored) => serviceConCreateConArgumentAction(row, () => fetchOwnerData()),
      disabled: (row: ServiceConStored) => editMode,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityDistrictsViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperConsTableConsLabelWrapperConsTitleFilter',
      attributeName: 'title',
      label: t('service.IssueView.cons.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityDistrictsViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperConsTableConsLabelWrapperConsUpVotesFilter',
      attributeName: 'upVotes',
      label: t('service.IssueView.cons.upVotes', { defaultValue: 'up' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityDistrictsViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperConsTableConsLabelWrapperConsDownVotesFilter',
      attributeName: 'downVotes',
      label: t('service.IssueView.cons.downVotes', { defaultValue: 'down' }) as string,
      filterType: FilterType.numeric,
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

  const bulkDeleteSelected = useCallback(() => {
    openCRUDDialog<ServiceConStored>({
      dialogTitle: t('judo.dialogs.crud-bulk.delete.title', { defaultValue: 'Delete selected items' }),
      itemTitleFn: (item) => item.title!,
      selectedItems: selectedRows.current,
      action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
        await rowDeleteConsAction(ownerData, item, successHandler, errorHandler, true);
      },
      onClose: (needsRefresh) => {
        if (needsRefresh) {
          fetchOwnerData();
          setSelectionModel([]); // not resetting on fetchData because refreshes would always remove selections...
        }
      },
    });
  }, []);
  const isBulkDeleteAvailable: () => boolean = useCallback(() => {
    // every row has the same `__deleteable` flag
    return !!selectionModel.length && true && isFormUpdateable() && !true && !!data[0]?.__deleteable;
  }, [ownerData, data, selectionModel]);

  useEffect(() => {
    if (ownerData?.__identifier) {
      const storedFilters = getItemParsed<Filter[]>(filtersKey);
      if (storedFilters !== null) {
        setFilters(storedFilters);
      }

      const storedFilterModel = getItemParsed<GridFilterModel>(filterModelKey);
      if (storedFilterModel !== null) {
        setConsFilterModel(storedFilterModel);
      }
    }
  }, [ownerData]);

  useEffect(() => {
    const newData = applyInMemoryFilters<ServiceConStored>(filters, ownerData?.cons ?? []);
    setData(newData);
  }, [ownerData?.cons, filters]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) => (props.validation.has('cons') ? `2px solid ${theme.palette.error.main}` : undefined),
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
          ...consColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaServiceUserEdemokraciaServiceIssueCons',
            consRowActions,
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
        onRowClick={(params: GridRowParams<ServiceConStored>) => {
          if (!editMode) {
            rowViewConsAction(ownerData, params.row, () => fetchOwnerData());
          }
        }}
        sortModel={consSortModel}
        onSortModelChange={(newModel: GridSortModel) => {
          setConsSortModel(newModel);
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="TableedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityDistrictsViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperConsTableConsLabelWrapperCons-filter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() =>
                  filter(
                    'TableedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityDistrictsViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperConsTableConsLabelWrapperCons-filter',
                    filterOptions,
                    filters,
                  )
                }
                disabled={isOwnerLoading}
              >
                {t('judo.pages.table.set-filters', { defaultValue: 'Set filters' }) +
                  (filters.length !== 0 ? ' (' + filters.length + ')' : '')}
              </Button>
              {isBulkDeleteAvailable() ? (
                <Button
                  id="RelationTypeedemokraciaServiceUserEdemokraciaServiceIssueCons-bulk-delete"
                  disabled={isOwnerLoading || editMode}
                  variant="text"
                  startIcon={<MdiIcon path="delete-forever" />}
                  onClick={bulkDeleteSelected}
                >
                  {t('judo.pages.table.delete.selected', { defaultValue: 'Delete' })}
                </Button>
              ) : null}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
        }}
      />
      {props.validation.has('cons') && (
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
          <Typography>{props.validation.get('cons')}</Typography>
        </Box>
      )}
    </>
  );
};
