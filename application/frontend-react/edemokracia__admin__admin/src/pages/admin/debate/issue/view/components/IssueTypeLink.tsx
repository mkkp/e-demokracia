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
  GridFilterModel,
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
  _StringOperation,
} from '~/generated/data-api';
import { adminIssueServiceForClassImpl, adminIssueTypeServiceForClassImpl } from '~/generated/data-axios';

import { useLinkViewIssueTypeAction } from '../actions';

export interface IssueTypeLinkProps {
  ownerData: AdminIssueStored;
  storeDiff: (attributeName: keyof AdminIssueStored, value: any) => void;
  validation: Map<keyof AdminIssueStored, string>;
  fetchOwnerData: () => Promise<void>;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
}

export function IssueTypeLink(props: IssueTypeLinkProps) {
  const { ownerData, disabled, readOnly, editMode, fetchOwnerData, storeDiff, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const issueTypeSortModel: GridSortModel = [{ field: 'title', sort: null }];

  const issueTypeColumns: GridColDef<AdminIssueTypeStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('admin.IssueView.issueType.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('admin.IssueView.issueType.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const issueTypeRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDebateIssueViewDefaultIssueViewIssueLabelWrapperIssueIssueTypeTitleFilter',
      attributeName: 'title',
      label: t('admin.IssueView.issueType.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDebateIssueViewDefaultIssueViewIssueLabelWrapperIssueIssueTypeDescriptionFilter',
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
      id="LinkedemokraciaAdminAdminEdemokraciaAdminDebateIssueViewDefaultIssueViewIssueLabelWrapperIssueIssueType"
      label={t('admin.IssueView.issueType', { defaultValue: 'Issue Type' }) as string}
      labelList={[ownerData.issueType?.title?.toString() ?? '', ownerData.issueType?.description?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('issueType')}
      helperText={validation.get('issueType')}
      icon={<MdiIcon path="folder-open" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'title'}
      onAutoCompleteSelect={(issueType) => {
        storeDiff('issueType', issueType);
      }}
      onView={async () => linkViewIssueTypeAction(ownerData, ownerData?.issueType!, () => fetchOwnerData())}
      onUnset={async () => {
        storeDiff('issueType', null);
      }}
      onSet={async () => {
        const res = await openRangeDialog<AdminIssueTypeStored, AdminIssueTypeQueryCustomizer>({
          id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminIssueIssueType',
          columns: issueTypeColumns,
          defaultSortField: ([{ field: 'title', sort: null }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await adminIssueServiceForClassImpl.getRangeForIssueType(
              ownerData,
              processQueryCustomizer(queryCustomizer),
            ),
          single: true,
          alreadySelectedItems: ownerData.issueType?.__identifier as GridRowId,
          filterOptions: issueTypeRangeFilterOptions,
          initialQueryCustomizer: issueTypeInitialQueryCustomizer,
          editMode: editMode,
        });

        if (res === undefined) return;
        storeDiff('issueType', res.value as AdminIssueTypeStored);
      }}
      onAutoCompleteSearch={async (searchText: string) => {
        const queryCustomizer: AdminIssueTypeQueryCustomizer = {
          ...(searchText?.length
            ? {
                title: [{ operator: _StringOperation.like, value: searchText }],
              }
            : {}),
          _mask: '{title,description}',
          _orderBy: [{ attribute: 'title', descending: false }],
          _seek: { limit: 10 },
        };
        return await adminIssueServiceForClassImpl.getRangeForIssueType(
          ownerData,
          processQueryCustomizer(queryCustomizer),
        );
      }}
    />
  );
}
