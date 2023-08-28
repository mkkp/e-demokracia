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
  AdminDashboard,
  AdminDashboardStored,
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
import { adminDebateServiceForClassImpl, adminProServiceForClassImpl } from '~/generated/data-axios';
import {
  usePageDeleteDebatesAction,
  usePageRefreshDebatesAction,
  useRowDeleteProsAction,
  useRowViewProsAction,
  useAdminProCreateCommentAction,
  useAdminProCreateSubArgumentAction,
  useAdminProVoteDownAction,
  useAdminProVoteUpAction,
} from '../actions';
import { applyInMemoryFilters } from '~/utilities';
export const ADMIN_DASHBOARD_DEBATES_VIEW_PROS = 'AdminDashboardDebatesViewPros';

export interface ProsTableProps {
  ownerData: AdminDebateStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminDebateStored, value: any) => void;
  validation: Map<keyof AdminDebate, string>;
}

export const ProsTable = (props: ProsTableProps) => {
  const { openFilterDialog } = useFilterDialog();
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [filters, setFilters] = useState<Filter[]>([]);
  const [data, setData] = useState<AdminProStored[]>([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [prosSortModel, setProsSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);

  const [prosFilterModel, setProsFilterModel] = useState<GridFilterModel>({ items: [] });

  const prosColumns: GridColDef<AdminProStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('admin.DebateView.pros.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'upVotes',
      headerName: t('admin.DebateView.pros.upVotes', { defaultValue: 'up' }) as string,
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
      headerName: t('admin.DebateView.pros.downVotes', { defaultValue: 'down' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      filterable: false && true,
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
  ];

  const prosRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArgumentsProsLabelWrapperProsTitleFilter',
      attributeName: 'title',
      label: t('admin.DebateView.pros.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArgumentsProsLabelWrapperProsUpVotesFilter',
      attributeName: 'upVotes',
      label: t('admin.DebateView.pros.upVotes', { defaultValue: 'up' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArgumentsProsLabelWrapperProsDownVotesFilter',
      attributeName: 'downVotes',
      label: t('admin.DebateView.pros.downVotes', { defaultValue: 'down' }) as string,
      filterType: FilterType.numeric,
    },
  ];

  const prosInitialQueryCustomizer: AdminProQueryCustomizer = {
    _mask: '{title,upVotes,downVotes}',
    _orderBy: prosSortModel.length
      ? [
          {
            attribute: prosSortModel[0].field,
            descending: prosSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageDeleteDebatesAction = usePageDeleteDebatesAction();
  const pageRefreshDebatesAction = usePageRefreshDebatesAction();
  const rowDeleteProsAction = useRowDeleteProsAction();
  const rowViewProsAction = useRowViewProsAction();
  const adminProCreateCommentAction = useAdminProCreateCommentAction();
  const adminProCreateSubArgumentAction = useAdminProCreateSubArgumentAction();
  const adminProVoteDownAction = useAdminProVoteDownAction();
  const adminProVoteUpAction = useAdminProVoteUpAction();

  const prosRowActions: TableRowAction<AdminProStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminDebateProsRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminProStored) => rowDeleteProsAction(ownerData, row, () => fetchOwnerData()),
      disabled: (row: AdminProStored) => editMode || !row.__deleteable,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminProVoteUpButtonCallOperation',
      label: t('admin.DebateView.pros.voteUp.ButtonCallOperation', { defaultValue: '' }) as string,
      icon: <MdiIcon path="thumb-up" />,
      action: async (row: AdminProStored) => adminProVoteUpAction(row, () => fetchOwnerData()),
      disabled: (row: AdminProStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminProVoteDownButtonCallOperation',
      label: t('admin.DebateView.pros.voteDown.ButtonCallOperation', { defaultValue: '' }) as string,
      icon: <MdiIcon path="thumb-down" />,
      action: async (row: AdminProStored) => adminProVoteDownAction(row, () => fetchOwnerData()),
      disabled: (row: AdminProStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminProCreateSubArgumentButtonCallOperation',
      label: t('admin.DebateView.pros.createSubArgument.ButtonCallOperation', {
        defaultValue: 'Add argument',
      }) as string,
      icon: <MdiIcon path="account-voice" />,
      action: async (row: AdminProStored) => adminProCreateSubArgumentAction(row, () => fetchOwnerData()),
      disabled: (row: AdminProStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminProCreateCommentButtonCallOperation',
      label: t('admin.DebateView.pros.createComment.ButtonCallOperation', { defaultValue: 'Add comment' }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      action: async (row: AdminProStored) => adminProCreateCommentAction(row, () => fetchOwnerData()),
      disabled: (row: AdminProStored) => editMode,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArgumentsProsLabelWrapperProsTitleFilter',
      attributeName: 'title',
      label: t('admin.DebateView.pros.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArgumentsProsLabelWrapperProsUpVotesFilter',
      attributeName: 'upVotes',
      label: t('admin.DebateView.pros.upVotes', { defaultValue: 'up' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArgumentsProsLabelWrapperProsDownVotesFilter',
      attributeName: 'downVotes',
      label: t('admin.DebateView.pros.downVotes', { defaultValue: 'down' }) as string,
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
    const newData = applyInMemoryFilters<AdminProStored>(filters, ownerData?.pros ?? []);
    setData(newData);
  }, [ownerData?.pros, filters]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) => (props.validation.has('pros') ? `2px solid ${theme.palette.error.main}` : undefined),
        }}
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isOwnerLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...prosColumns,
          ...columnsActionCalculator('RelationTypeedemokraciaAdminAdminEdemokraciaAdminDebatePros', prosRowActions, t, {
            shownActions: 2,
          }),
        ]}
        disableRowSelectionOnClick
        onRowClick={(params: GridRowParams<AdminProStored>) => {
          if (!editMode) {
            rowViewProsAction(ownerData, params.row, () => fetchOwnerData());
          }
        }}
        sortModel={prosSortModel}
        onSortModelChange={(newModel: GridSortModel) => {
          setProsSortModel(newModel);
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="TableedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArgumentsProsLabelWrapperPros-filter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() =>
                  filter(
                    'TableedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArgumentsProsLabelWrapperPros-filter',
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
      {props.validation.has('pros') && (
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
          <Typography>{props.validation.get('pros')}</Typography>
        </Box>
      )}
    </>
  );
};
