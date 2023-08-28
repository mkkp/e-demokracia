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
import { adminIssueServiceForClassImpl, adminIssueAttachmentServiceForClassImpl } from '~/generated/data-axios';
import {
  usePageRefreshIssueAction,
  useRowDeleteAttachmentsAction,
  useRowViewAttachmentsAction,
  useTableCreateAttachmentsAction,
} from '../actions';
import { applyInMemoryFilters } from '~/utilities';
export const ADMIN_DEBATE_ISSUE_VIEW_ATTACHMENTS = 'AdminDebateIssueViewAttachments';

export interface AttachmentsTableProps {
  ownerData: AdminIssueStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminIssueStored, value: any) => void;
  validation: Map<keyof AdminIssue, string>;
}

export const AttachmentsTable = (props: AttachmentsTableProps) => {
  const { openFilterDialog } = useFilterDialog();
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [filters, setFilters] = useState<Filter[]>([]);
  const [data, setData] = useState<AdminIssueAttachmentStored[]>([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [attachmentsSortModel, setAttachmentsSortModel] = useState<GridSortModel>([{ field: 'link', sort: null }]);

  const [attachmentsFilterModel, setAttachmentsFilterModel] = useState<GridFilterModel>({ items: [] });

  const attachmentsColumns: GridColDef<AdminIssueAttachmentStored>[] = [
    {
      ...baseColumnConfig,
      field: 'link',
      headerName: t('admin.IssueView.attachments.link', { defaultValue: 'Link' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'file',
      headerName: t('admin.IssueView.attachments.file', { defaultValue: 'File' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && false,
      sortable: false,
      align: 'center',
      renderCell: (params: GridRenderCellParams<any, AdminIssueAttachmentStored>) => {
        return params.row.file ? (
          <Button
            id="ColumnedemokraciaAdminAdminEdemokraciaAdminDebateIssueViewDefaultIssueViewOtherAttachmentsAttachmentsAttachmentsLabelWrapperAttachmentsFile-download"
            startIcon={<MdiIcon path="file-document-outline" mimeType={{ type: 'image', subType: '*' }} />}
            size="small"
            variant="text"
            onClick={(event: any) => {
              event.preventDefault();
              event.stopPropagation();
              downloadFile(params.row, 'file');
            }}
          >
            {extractFileNameFromToken(params.row.file)}
          </Button>
        ) : (
          <MdiIcon path="minus" />
        );
      },
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
    {
      ...baseColumnConfig,
      field: 'type',
      headerName: t('admin.IssueView.attachments.type', { defaultValue: 'Type' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 170,
      type: 'singleSelect',
      filterable: false && true,
      sortable: false,
      valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
        return t(`enumerations.EdemokraciaAttachmentType.${value}`, { defaultValue: value });
      },
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
  ];

  const attachmentsRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDebateIssueViewDefaultIssueViewOtherAttachmentsAttachmentsAttachmentsLabelWrapperAttachmentsLinkFilter',
      attributeName: 'link',
      label: t('admin.IssueView.attachments.link', { defaultValue: 'Link' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDebateIssueViewDefaultIssueViewOtherAttachmentsAttachmentsAttachmentsLabelWrapperAttachmentsTypeFilter',
      attributeName: 'type',
      label: t('admin.IssueView.attachments.type', { defaultValue: 'Type' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['LINK', 'IMAGE', 'VIDEO', 'MAP'],
    },
  ];

  const attachmentsInitialQueryCustomizer: AdminIssueAttachmentQueryCustomizer = {
    _mask: '{link,file,type}',
    _orderBy: attachmentsSortModel.length
      ? [
          {
            attribute: attachmentsSortModel[0].field,
            descending: attachmentsSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const pageRefreshIssueAction = usePageRefreshIssueAction();
  const rowDeleteAttachmentsAction = useRowDeleteAttachmentsAction();
  const rowViewAttachmentsAction = useRowViewAttachmentsAction();
  const tableCreateAttachmentsAction = useTableCreateAttachmentsAction();

  const attachmentsRowActions: TableRowAction<AdminIssueAttachmentStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminDebateIssueViewEdemokraciaAdminAdminEdemokraciaAdminIssueAttachmentsRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminIssueAttachmentStored) =>
        rowDeleteAttachmentsAction(ownerData, row, () => fetchOwnerData()),
      disabled: (row: AdminIssueAttachmentStored) => editMode || !row.__deleteable,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDebateIssueViewDefaultIssueViewOtherAttachmentsAttachmentsAttachmentsLabelWrapperAttachmentsLinkFilter',
      attributeName: 'link',
      label: t('admin.IssueView.attachments.link', { defaultValue: 'Link' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDebateIssueViewDefaultIssueViewOtherAttachmentsAttachmentsAttachmentsLabelWrapperAttachmentsTypeFilter',
      attributeName: 'type',
      label: t('admin.IssueView.attachments.type', { defaultValue: 'Type' }) as string,
      filterType: FilterType.enumeration,
      enumValues: ['LINK', 'IMAGE', 'VIDEO', 'MAP'],
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
    const newData = applyInMemoryFilters<AdminIssueAttachmentStored>(filters, ownerData?.attachments ?? []);
    setData(newData);
  }, [ownerData?.attachments, filters]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) =>
            props.validation.has('attachments') ? `2px solid ${theme.palette.error.main}` : undefined,
        }}
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isOwnerLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...attachmentsColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaAdminIssueAttachments',
            attachmentsRowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        onRowClick={(params: GridRowParams<AdminIssueAttachmentStored>) => {
          if (!editMode) {
            rowViewAttachmentsAction(ownerData, params.row, () => fetchOwnerData());
          }
        }}
        sortModel={attachmentsSortModel}
        onSortModelChange={(newModel: GridSortModel) => {
          setAttachmentsSortModel(newModel);
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="CreateActionedemokraciaAdminAdminEdemokraciaAdminDebateIssueViewEdemokraciaAdminAdminEdemokraciaAdminIssueAttachmentsTableCreate"
                startIcon={<MdiIcon path="file_document_plus" />}
                variant="text"
                onClick={() =>
                  tableCreateAttachmentsAction(ownerData, () => {
                    fetchOwnerData();
                  })
                }
                disabled={editMode || isOwnerLoading || false || !isFormUpdateable()}
              >
                {t('judo.pages.table.create', { defaultValue: 'Create' })}
              </Button>
              <Button
                id="TableedemokraciaAdminAdminEdemokraciaAdminDebateIssueViewDefaultIssueViewOtherAttachmentsAttachmentsAttachmentsLabelWrapperAttachments-filter"
                startIcon={<MdiIcon path="filter" />}
                variant="text"
                onClick={() =>
                  filter(
                    'TableedemokraciaAdminAdminEdemokraciaAdminDebateIssueViewDefaultIssueViewOtherAttachmentsAttachmentsAttachmentsLabelWrapperAttachments-filter',
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
      {props.validation.has('attachments') && (
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
          <Typography>{props.validation.get('attachments')}</Typography>
        </Box>
      )}
    </>
  );
};