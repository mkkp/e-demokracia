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
  AdminDashboard,
  AdminDashboardStored,
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
import { adminIssueServiceImpl, adminIssueAttachmentServiceImpl } from '~/generated/data-axios';
import {
  usePageDeleteIssuesAction,
  usePageRefreshIssuesAction,
  useRowDeleteAttachmentsAction,
  useRowViewAttachmentsAction,
  useTableCreateAttachmentsAction,
} from '../actions';

export interface AttachmentsTableProps {
  ownerData: AdminIssueStored;
  isOwnerLoading: boolean;
  fetchOwnerData: () => Promise<void>;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof AdminIssueStored, value: any) => void;
}

export const AttachmentsTable = (props: AttachmentsTableProps) => {
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff, fetchOwnerData } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [attachmentsSortModel, setAttachmentsSortModel] = useState<GridSortModel>([{ field: 'link', sort: 'asc' }]);

  const attachmentsColumns: GridColDef<AdminIssueAttachmentStored>[] = [
    {
      ...baseColumnConfig,
      field: 'link',
      headerName: t('admin.IssueView.attachments.link', { defaultValue: 'Link' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'file',
      headerName: t('admin.IssueView.attachments.file', { defaultValue: 'File' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      sortable: false,
      align: 'center',
      renderCell: (params: GridRenderCellParams<any, AdminIssueAttachmentStored>) => {
        return params.row.file ? (
          <Button
            id="ColumnedemokraciaAdminAdminEdemokraciaAdminDashboardIssuesViewDefaultIssueViewOtherAttachmentsAttachmentsAttachmentsLabelWrapperAttachmentsFile-download"
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
      type: 'string',
      sortable: false,
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
  ];

  const pageDeleteIssuesAction = usePageDeleteIssuesAction();
  const pageRefreshIssuesAction = usePageRefreshIssuesAction();
  const rowDeleteAttachmentsAction = useRowDeleteAttachmentsAction();
  const rowViewAttachmentsAction = useRowViewAttachmentsAction();
  const tableCreateAttachmentsAction = useTableCreateAttachmentsAction();

  const attachmentsRowActions: TableRowAction<AdminIssueAttachmentStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminDashboardIssuesViewEdemokraciaAdminAdminEdemokraciaAdminIssueAttachmentsRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminIssueAttachmentStored) =>
        rowDeleteAttachmentsAction(ownerData, row, () => fetchOwnerData()),
      disabled: (row: AdminIssueAttachmentStored) => editMode || !row.__deleteable,
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
      rows={ownerData?.attachments ?? []}
      getRowClassName={() => 'data-grid-row'}
      getCellClassName={() => 'data-grid-cell'}
      columns={[
        ...attachmentsColumns,
        ...columnsActionCalculator(
          'RelationTypeedemokraciaAdminAdminEdemokraciaAdminIssueAttachments',
          attachmentsRowActions,
          { shownActions: 2 },
        ),
      ]}
      disableRowSelectionOnClick
      onRowClick={(params: GridRowParams<AdminIssueAttachmentStored>) => {
        if (!editMode) {
          rowViewAttachmentsAction(ownerData, params.row);
        }
      }}
      sortModel={attachmentsSortModel}
      onSortModelChange={(newModel: GridSortModel) => {
        setAttachmentsSortModel(newModel);
      }}
      components={{
        Toolbar: () => (
          <GridToolbarContainer>
            <Button
              id="CreateActionedemokraciaAdminAdminEdemokraciaAdminDashboardIssuesViewEdemokraciaAdminAdminEdemokraciaAdminIssueAttachmentsTableCreate"
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
            <div>{/* Placeholder */}</div>
          </GridToolbarContainer>
        ),
      }}
    />
  );
};
