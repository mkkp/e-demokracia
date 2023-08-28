//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/table.tsx
// Template file: actor/src/pages/components/table.tsx.hbs

import { useEffect, useState, useImperativeHandle, useMemo, useRef, forwardRef } from 'react';
import type { MouseEvent } from 'react';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
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
import { GridToolbarContainer } from '@mui/x-data-grid';
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
  mapFilterModelToFilters,
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';
import { ContextMenu, StripedDataGrid } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';

import { Box, Typography } from '@mui/material';
import {
  AdminComment,
  AdminCommentQueryCustomizer,
  AdminCommentStored,
  AdminCon,
  AdminConQueryCustomizer,
  AdminConStored,
  AdminDebate,
  AdminDebateQueryCustomizer,
  AdminDebateStored,
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminPro,
  AdminProQueryCustomizer,
  AdminProStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
  AdminVoteDefinition,
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  EdemokraciaDebateStatus,
} from '~/generated/data-api';
import { adminDebateServiceForClassImpl, adminCommentServiceForClassImpl } from '~/generated/data-axios';
import {
  usePageDeleteDebatesAction,
  usePageRefreshDebatesAction,
  useAdminCommentVoteDownAction,
  useAdminCommentVoteUpAction,
  useRowDeleteCommentsAction,
  useRowViewCommentsAction,
} from '../actions';
import { applyInMemoryFilters } from '~/utilities';
export const ADMIN_ADMIN_DEBATES_VIEW_COMMENTS = 'AdminAdminDebatesViewComments';

export interface CommentsTableProps {
  ownerData: AdminDebateStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminDebateStored, value: any) => void;
  validation: Map<keyof AdminDebate, string>;
}

export const CommentsTable = (props: CommentsTableProps) => {
  const { openFilterDialog } = useFilterDialog();
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [filters, setFilters] = useState<Filter[]>([]);
  const [data, setData] = useState<AdminCommentStored[]>([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [commentsSortModel, setCommentsSortModel] = useState<GridSortModel>([{ field: 'created', sort: null }]);

  const [commentsFilterModel, setCommentsFilterModel] = useState<GridFilterModel>({ items: [] });

  const commentsColumns: GridColDef<AdminCommentStored>[] = [
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('admin.DebateView.comments.created', { defaultValue: 'Created' }) as string,
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
      field: 'comment',
      headerName: t('admin.DebateView.comments.comment', { defaultValue: 'Comment' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'createdByName',
      headerName: t('admin.DebateView.comments.createdByName', { defaultValue: 'Created by' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'upVotes',
      headerName: t('admin.DebateView.comments.upVotes', { defaultValue: 'up' }) as string,
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
      headerName: t('admin.DebateView.comments.downVotes', { defaultValue: 'down' }) as string,
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
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewDefaultDebateViewTabBarCommentsCommentsCommentsLabelWrapperCommentsCreatedFilter',
      attributeName: 'created',
      label: t('admin.DebateView.comments.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewDefaultDebateViewTabBarCommentsCommentsCommentsLabelWrapperCommentsCommentFilter',
      attributeName: 'comment',
      label: t('admin.DebateView.comments.comment', { defaultValue: 'Comment' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewDefaultDebateViewTabBarCommentsCommentsCommentsLabelWrapperCommentsCreatedByNameFilter',
      attributeName: 'createdByName',
      label: t('admin.DebateView.comments.createdByName', { defaultValue: 'Created by' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewDefaultDebateViewTabBarCommentsCommentsCommentsLabelWrapperCommentsUpVotesFilter',
      attributeName: 'upVotes',
      label: t('admin.DebateView.comments.upVotes', { defaultValue: 'up' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewDefaultDebateViewTabBarCommentsCommentsCommentsLabelWrapperCommentsDownVotesFilter',
      attributeName: 'downVotes',
      label: t('admin.DebateView.comments.downVotes', { defaultValue: 'down' }) as string,
      filterType: FilterType.numeric,
    },
  ];

  const commentsInitialQueryCustomizer: AdminCommentQueryCustomizer = {
    _mask: '{created,comment,createdByName,upVotes,downVotes}',
    _orderBy: commentsSortModel.length
      ? [
          {
            attribute: commentsSortModel[0].field,
            descending: commentsSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageDeleteDebatesAction = usePageDeleteDebatesAction();
  const pageRefreshDebatesAction = usePageRefreshDebatesAction();
  const adminCommentVoteDownAction = useAdminCommentVoteDownAction();
  const adminCommentVoteUpAction = useAdminCommentVoteUpAction();
  const rowDeleteCommentsAction = useRowDeleteCommentsAction();
  const rowViewCommentsAction = useRowViewCommentsAction();

  const commentsRowActions: TableRowAction<AdminCommentStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewEdemokraciaAdminAdminEdemokraciaAdminDebateCommentsRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminCommentStored) => rowDeleteCommentsAction(ownerData, row, () => fetchOwnerData()),
      disabled: (row: AdminCommentStored) => editMode || !row.__deleteable,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewEdemokraciaAdminAdminEdemokraciaAdminCommentVoteUpButtonCallOperation',
      label: t('admin.DebateView.comments.voteUp.ButtonCallOperation', { defaultValue: '' }) as string,
      icon: <MdiIcon path="thumb-up" />,
      action: async (row: AdminCommentStored) => adminCommentVoteUpAction(row, () => fetchOwnerData()),
      disabled: (row: AdminCommentStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewEdemokraciaAdminAdminEdemokraciaAdminCommentVoteDownButtonCallOperation',
      label: t('admin.DebateView.comments.voteDown.ButtonCallOperation', { defaultValue: '' }) as string,
      icon: <MdiIcon path="thumb-down" />,
      action: async (row: AdminCommentStored) => adminCommentVoteDownAction(row, () => fetchOwnerData()),
      disabled: (row: AdminCommentStored) => editMode,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewDefaultDebateViewTabBarCommentsCommentsCommentsLabelWrapperCommentsCreatedFilter',
      attributeName: 'created',
      label: t('admin.DebateView.comments.created', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewDefaultDebateViewTabBarCommentsCommentsCommentsLabelWrapperCommentsCommentFilter',
      attributeName: 'comment',
      label: t('admin.DebateView.comments.comment', { defaultValue: 'Comment' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewDefaultDebateViewTabBarCommentsCommentsCommentsLabelWrapperCommentsCreatedByNameFilter',
      attributeName: 'createdByName',
      label: t('admin.DebateView.comments.createdByName', { defaultValue: 'Created by' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewDefaultDebateViewTabBarCommentsCommentsCommentsLabelWrapperCommentsUpVotesFilter',
      attributeName: 'upVotes',
      label: t('admin.DebateView.comments.upVotes', { defaultValue: 'up' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewDefaultDebateViewTabBarCommentsCommentsCommentsLabelWrapperCommentsDownVotesFilter',
      attributeName: 'downVotes',
      label: t('admin.DebateView.comments.downVotes', { defaultValue: 'down' }) as string,
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
    }
  };

  useEffect(() => {
    const newData = applyInMemoryFilters<AdminCommentStored>(filters, ownerData?.comments ?? []);
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
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isOwnerLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...commentsColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminDebateComments',
            commentsRowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        onRowClick={(params: GridRowParams<AdminCommentStored>) => {
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
                id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewDefaultDebateViewTabBarCommentsCommentsCommentsLabelWrapperComments-filter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() =>
                  filter(
                    'TableedemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewDefaultDebateViewTabBarCommentsCommentsCommentsLabelWrapperComments-filter',
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