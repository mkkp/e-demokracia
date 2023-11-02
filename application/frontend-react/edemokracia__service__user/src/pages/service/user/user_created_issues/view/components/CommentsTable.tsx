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
} from '~/generated/data-api';
import { serviceIssueServiceForClassImpl, serviceCommentServiceForClassImpl } from '~/generated/data-axios';
import {
  useServiceCommentVoteDownAction,
  useServiceCommentVoteUpAction,
  useRowViewCommentsAction,
  usePageDeleteUserCreatedIssuesAction,
  usePageRefreshUserCreatedIssuesAction,
} from '../actions';
import { applyInMemoryFilters } from '~/utilities';
import { GridLogicOperator } from '@mui/x-data-grid';

export const SERVICE_USER_USER_CREATED_ISSUES_VIEW_COMMENTS = 'ServiceUserUserCreatedIssuesViewComments';

export interface CommentsTableProps {
  ownerData: ServiceIssueStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof ServiceIssueStored, value: any) => void;
  validation: Map<keyof ServiceIssue, string>;
}

export const CommentsTable = (props: CommentsTableProps) => {
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { openFilterDialog } = useFilterDialog();
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const openCRUDDialog = useCRUDDialog();

  const filterModelKey = `TableedemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperComments-${ownerData.__identifier}-filterModel`;
  const filtersKey = `TableedemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperComments-${ownerData.__identifier}-filters`;
  const [commentsFilterModel, setCommentsFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [data, setData] = useState<ServiceCommentStored[]>([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const selectedRows = useRef<ServiceCommentStored[]>([]);

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  const [commentsSortModel, setCommentsSortModel] = useState<GridSortModel>([{ field: 'comment', sort: null }]);

  const commentsColumns: GridColDef<ServiceCommentStored>[] = [
    {
      ...baseColumnConfig,
      field: 'comment',
      headerName: t('service.IssueView.comments.comment', { defaultValue: 'Comment' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.IssueView.comments.created', { defaultValue: 'Created' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'dateTime',
      filterable: false && true,
      valueGetter: ({ value }) => value && serviceDateToUiDate(value),
      valueFormatter: ({ value }: GridValueFormatterParams<Date>) => {
        return (
          value &&
          new Intl.DateTimeFormat(l10nLocale, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          }).format(value)
        );
      },
    },
    {
      ...baseColumnConfig,
      field: 'createdByName',
      headerName: t('service.IssueView.comments.createdByName', { defaultValue: 'CreatedByName' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'upVotes',
      headerName: t('service.IssueView.comments.upVotes', { defaultValue: 'up' }) as string,
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
      headerName: t('service.IssueView.comments.downVotes', { defaultValue: 'down' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      filterable: false && true,
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
  ];

  const commentsRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperCommentsCommentFilter',
      attributeName: 'comment',
      label: t('service.IssueView.comments.comment', { defaultValue: 'Comment' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperCommentsCreatedFilter',
      attributeName: 'created',
      label: t('service.IssueView.comments.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperCommentsCreatedByNameFilter',
      attributeName: 'createdByName',
      label: t('service.IssueView.comments.createdByName', { defaultValue: 'CreatedByName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperCommentsUpVotesFilter',
      attributeName: 'upVotes',
      label: t('service.IssueView.comments.upVotes', { defaultValue: 'up' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperCommentsDownVotesFilter',
      attributeName: 'downVotes',
      label: t('service.IssueView.comments.downVotes', { defaultValue: 'down' }) as string,
      filterType: FilterType.numeric,
    },
  ];

  const commentsInitialQueryCustomizer: ServiceCommentQueryCustomizer = {
    _mask: '{comment,created,createdByName,upVotes,downVotes}',
    _orderBy: commentsSortModel.length
      ? [
          {
            attribute: commentsSortModel[0].field,
            descending: commentsSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const serviceCommentVoteDownAction = useServiceCommentVoteDownAction();
  const serviceCommentVoteUpAction = useServiceCommentVoteUpAction();
  const rowViewCommentsAction = useRowViewCommentsAction();
  const pageDeleteUserCreatedIssuesAction = usePageDeleteUserCreatedIssuesAction();
  const pageRefreshUserCreatedIssuesAction = usePageRefreshUserCreatedIssuesAction();

  const commentsRowActions: TableRowAction<ServiceCommentStored>[] = [
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewEdemokraciaServiceUserEdemokraciaServiceCommentVoteUpButtonCallOperation',
      label: t('service.IssueView.comments.voteUp.ButtonCallOperation', { defaultValue: '' }) as string,
      icon: <MdiIcon path="thumb-up" />,
      action: async (row: ServiceCommentStored) => serviceCommentVoteUpAction(row, () => fetchOwnerData()),
      disabled: (row: ServiceCommentStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewEdemokraciaServiceUserEdemokraciaServiceCommentVoteDownButtonCallOperation',
      label: t('service.IssueView.comments.voteDown.ButtonCallOperation', { defaultValue: '' }) as string,
      icon: <MdiIcon path="thumb-down" />,
      action: async (row: ServiceCommentStored) => serviceCommentVoteDownAction(row, () => fetchOwnerData()),
      disabled: (row: ServiceCommentStored) => editMode,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperCommentsCommentFilter',
      attributeName: 'comment',
      label: t('service.IssueView.comments.comment', { defaultValue: 'Comment' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperCommentsCreatedFilter',
      attributeName: 'created',
      label: t('service.IssueView.comments.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperCommentsCreatedByNameFilter',
      attributeName: 'createdByName',
      label: t('service.IssueView.comments.createdByName', { defaultValue: 'CreatedByName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperCommentsUpVotesFilter',
      attributeName: 'upVotes',
      label: t('service.IssueView.comments.upVotes', { defaultValue: 'up' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperCommentsDownVotesFilter',
      attributeName: 'downVotes',
      label: t('service.IssueView.comments.downVotes', { defaultValue: 'down' }) as string,
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

  useEffect(() => {
    if (ownerData?.__identifier) {
      const storedFilters = getItemParsed<Filter[]>(filtersKey);
      if (storedFilters !== null) {
        setFilters(storedFilters);
      }

      const storedFilterModel = getItemParsed<GridFilterModel>(filterModelKey);
      if (storedFilterModel !== null) {
        setCommentsFilterModel(storedFilterModel);
      }
    }
  }, [ownerData]);

  useEffect(() => {
    const newData = applyInMemoryFilters<ServiceCommentStored>(filters, ownerData?.comments ?? []);
    setData(newData);
  }, [ownerData?.comments, filters]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) => (props.validation.has('comments') ? `2px solid ${theme.palette.error.main}` : undefined),
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
          ...commentsColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaServiceUserEdemokraciaServiceIssueComments',
            commentsRowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        onRowClick={(params: GridRowParams<ServiceCommentStored>) => {
          if (!editMode) {
            rowViewCommentsAction(ownerData, params.row, () => fetchOwnerData());
          }
        }}
        sortModel={commentsSortModel}
        onSortModelChange={(newModel: GridSortModel) => {
          setCommentsSortModel(newModel);
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="TableedemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperComments-filter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() =>
                  filter(
                    'TableedemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperComments-filter',
                    filterOptions,
                    filters,
                  )
                }
                disabled={isOwnerLoading}
              >
                {t('judo.pages.table.set-filters', { defaultValue: 'Set filters' }) +
                  (filters.length !== 0 ? ' (' + filters.length + ')' : '')}
              </Button>
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
        }}
      />
      {props.validation.has('comments') && (
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
          <Typography>{props.validation.get('comments')}</Typography>
        </Box>
      )}
    </>
  );
};
