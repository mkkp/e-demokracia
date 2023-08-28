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
  AdminDebateStored,
  AdminPro,
  AdminProQueryCustomizer,
  AdminProStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminProServiceForClassImpl, adminConServiceForClassImpl } from '~/generated/data-axios';
import {
  useAdminConCreateCommentAction,
  useAdminConCreateSubArgumentAction,
  useAdminConVoteDownAction,
  useAdminConVoteUpAction,
  usePageDeleteProsAction,
  usePageRefreshProsAction,
  useRowDeleteConsAction,
  useRowViewConsAction,
} from '../actions';
import { applyInMemoryFilters } from '~/utilities';
export const ADMIN_DEBATE_PROS_VIEW_CONS = 'AdminDebateProsViewCons';

export interface ConsTableProps {
  ownerData: AdminProStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminProStored, value: any) => void;
  validation: Map<keyof AdminPro, string>;
}

export const ConsTable = (props: ConsTableProps) => {
  const { openFilterDialog } = useFilterDialog();
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [filters, setFilters] = useState<Filter[]>([]);
  const [data, setData] = useState<AdminConStored[]>([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [consSortModel, setConsSortModel] = useState<GridSortModel>([{ field: 'title', sort: null }]);

  const [consFilterModel, setConsFilterModel] = useState<GridFilterModel>({ items: [] });

  const consColumns: GridColDef<AdminConStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('admin.ProView.cons.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'upVotes',
      headerName: t('admin.ProView.cons.upVotes', { defaultValue: 'up' }) as string,
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
      headerName: t('admin.ProView.cons.downVotes', { defaultValue: 'down' }) as string,
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
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDebateProsViewDefaultProViewTabBarArgumentsArgumentsConsLabelWrapperConsTitleFilter',
      attributeName: 'title',
      label: t('admin.ProView.cons.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDebateProsViewDefaultProViewTabBarArgumentsArgumentsConsLabelWrapperConsUpVotesFilter',
      attributeName: 'upVotes',
      label: t('admin.ProView.cons.upVotes', { defaultValue: 'up' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDebateProsViewDefaultProViewTabBarArgumentsArgumentsConsLabelWrapperConsDownVotesFilter',
      attributeName: 'downVotes',
      label: t('admin.ProView.cons.downVotes', { defaultValue: 'down' }) as string,
      filterType: FilterType.numeric,
    },
  ];

  const consInitialQueryCustomizer: AdminConQueryCustomizer = {
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

  const adminConCreateCommentAction = useAdminConCreateCommentAction();
  const adminConCreateSubArgumentAction = useAdminConCreateSubArgumentAction();
  const adminConVoteDownAction = useAdminConVoteDownAction();
  const adminConVoteUpAction = useAdminConVoteUpAction();
  const pageDeleteProsAction = usePageDeleteProsAction();
  const pageRefreshProsAction = usePageRefreshProsAction();
  const rowDeleteConsAction = useRowDeleteConsAction();
  const rowViewConsAction = useRowViewConsAction();

  const consRowActions: TableRowAction<AdminConStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminDebateProsViewEdemokraciaAdminAdminEdemokraciaAdminProConsRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminConStored) => rowDeleteConsAction(ownerData, row, () => fetchOwnerData()),
      disabled: (row: AdminConStored) => editMode || !row.__deleteable,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDebateProsViewEdemokraciaAdminAdminEdemokraciaAdminConVoteUpButtonCallOperation',
      label: t('admin.ProView.cons.voteUp.ButtonCallOperation', { defaultValue: '' }) as string,
      icon: <MdiIcon path="thumb-up" />,
      action: async (row: AdminConStored) => adminConVoteUpAction(row, () => fetchOwnerData()),
      disabled: (row: AdminConStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDebateProsViewEdemokraciaAdminAdminEdemokraciaAdminConVoteDownButtonCallOperation',
      label: t('admin.ProView.cons.voteDown.ButtonCallOperation', { defaultValue: '' }) as string,
      icon: <MdiIcon path="thumb-down" />,
      action: async (row: AdminConStored) => adminConVoteDownAction(row, () => fetchOwnerData()),
      disabled: (row: AdminConStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDebateProsViewEdemokraciaAdminAdminEdemokraciaAdminConCreateSubArgumentButtonCallOperation',
      label: t('admin.ProView.cons.createSubArgument.ButtonCallOperation', { defaultValue: 'Add argument' }) as string,
      icon: <MdiIcon path="account-voice" />,
      action: async (row: AdminConStored) => adminConCreateSubArgumentAction(row, () => fetchOwnerData()),
      disabled: (row: AdminConStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDebateProsViewEdemokraciaAdminAdminEdemokraciaAdminConCreateCommentButtonCallOperation',
      label: t('admin.ProView.cons.createComment.ButtonCallOperation', { defaultValue: 'Add comment' }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      action: async (row: AdminConStored) => adminConCreateCommentAction(row, () => fetchOwnerData()),
      disabled: (row: AdminConStored) => editMode,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDebateProsViewDefaultProViewTabBarArgumentsArgumentsConsLabelWrapperConsTitleFilter',
      attributeName: 'title',
      label: t('admin.ProView.cons.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDebateProsViewDefaultProViewTabBarArgumentsArgumentsConsLabelWrapperConsUpVotesFilter',
      attributeName: 'upVotes',
      label: t('admin.ProView.cons.upVotes', { defaultValue: 'up' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDebateProsViewDefaultProViewTabBarArgumentsArgumentsConsLabelWrapperConsDownVotesFilter',
      attributeName: 'downVotes',
      label: t('admin.ProView.cons.downVotes', { defaultValue: 'down' }) as string,
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
    const newData = applyInMemoryFilters<AdminConStored>(filters, ownerData?.cons ?? []);
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
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isOwnerLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...consColumns,
          ...columnsActionCalculator('RelationTypeedemokraciaAdminAdminEdemokraciaAdminProCons', consRowActions, t, {
            shownActions: 2,
          }),
        ]}
        disableRowSelectionOnClick
        onRowClick={(params: GridRowParams<AdminConStored>) => {
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
                id="TableedemokraciaAdminAdminEdemokraciaAdminDebateProsViewDefaultProViewTabBarArgumentsArgumentsConsLabelWrapperCons-filter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() =>
                  filter(
                    'TableedemokraciaAdminAdminEdemokraciaAdminDebateProsViewDefaultProViewTabBarArgumentsArgumentsConsLabelWrapperCons-filter',
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
