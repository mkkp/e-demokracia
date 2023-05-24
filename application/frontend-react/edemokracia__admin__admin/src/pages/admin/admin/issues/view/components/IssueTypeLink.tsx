//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#linkComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/link.tsx
// Template file: actor/src/pages/components/link.tsx.hbs

import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import type {
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridValueFormatterParams,
  GridRowId,
  GridSortItem,
} from '@mui/x-data-grid';
import { MdiIcon } from '~/components';
import {
  AggregationInput,
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  TrinaryLogicCombobox,
} from '~/components/widgets';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { FilterOption, FilterType } from '~/components-api';
import { baseColumnConfig, toastConfig } from '~/config';
import {
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  processQueryCustomizer,
  PersistedTableData,
  TableRowAction,
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
import { adminIssueServiceImpl, adminIssueTypeServiceImpl } from '~/generated/data-axios';

import { useLinkViewIssueTypeAction } from '../actions';

export interface IssueTypeLinkProps {
  ownerData: AdminIssueStored;
  storeDiff: (attributeName: keyof AdminIssueStored, value: any) => void;
  validation: Map<keyof AdminIssueStored, string>;
  fetchOwnerData: () => Promise<void>;
  disabled: boolean;
  editMode: boolean;
}

export function IssueTypeLink(props: IssueTypeLinkProps) {
  const { ownerData, disabled, editMode, fetchOwnerData, storeDiff, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const issueTypeSortModel: GridSortModel = [{ field: 'title', sort: 'asc' }];

  const issueTypeColumns: GridColDef<AdminIssueTypeStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('admin.IssueView.issueType.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('admin.IssueView.issueType.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const issueTypeRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewIssueLabelWrapperIssueIssueTypeTitleFilter',
      attributeName: 'title',
      label: t('admin.IssueView.issueType.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewIssueLabelWrapperIssueIssueTypeDescriptionFilter',
      attributeName: 'description',
      label: t('admin.IssueView.issueType.description', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },
  ];

  const issueTypeInitialQueryCustomizer: AdminIssueTypeQueryCustomizer = {
    _mask: '{title,description}',
    _orderBy: issueTypeSortModel.length
      ? [
          {
            attribute: issueTypeSortModel[0].field,
            descending: issueTypeSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const linkViewIssueTypeAction = useLinkViewIssueTypeAction();

  return (
    <AggregationInput
      name="issueType"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewIssueLabelWrapperIssueIssueType"
      label={t('admin.IssueView.issueType', { defaultValue: 'Issue Type' }) as string}
      labelList={[ownerData.issueType?.title?.toString() ?? '', ownerData.issueType?.description?.toString() ?? '']}
      value={ownerData.issueType}
      error={!!validation.get('issueType')}
      helperText={validation.get('issueType')}
      icon={<MdiIcon path="folder-open" />}
      disabled={disabled}
      editMode={editMode}
      onView={async () => linkViewIssueTypeAction(ownerData, ownerData?.issueType!)}
      onUnset={async () => {
        storeDiff('issueType', null);
      }}
      onSet={async () => {
        const res = await openRangeDialog<AdminIssueTypeStored, AdminIssueTypeQueryCustomizer>({
          id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminIssueIssueType',
          columns: issueTypeColumns,
          defaultSortField: ([{ field: 'title', sort: 'asc' }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await adminIssueServiceImpl.getRangeForIssueType(ownerData, processQueryCustomizer(queryCustomizer)),
          single: true,
          alreadySelectedItems: ownerData.issueType?.__identifier as GridRowId,
          filterOptions: issueTypeRangeFilterOptions,
          initialQueryCustomizer: issueTypeInitialQueryCustomizer,
        });

        if (res === undefined) return;
        storeDiff('issueType', res as AdminIssueTypeStored);
      }}
    />
  );
}
