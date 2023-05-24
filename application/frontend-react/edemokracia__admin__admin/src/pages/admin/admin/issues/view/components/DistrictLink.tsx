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
import { adminIssueServiceImpl, adminDistrictServiceImpl } from '~/generated/data-axios';

import { useLinkViewDistrictAction } from '../actions';

export interface DistrictLinkProps {
  ownerData: AdminIssueStored;
  storeDiff: (attributeName: keyof AdminIssueStored, value: any) => void;
  validation: Map<keyof AdminIssueStored, string>;
  fetchOwnerData: () => Promise<void>;
  disabled: boolean;
  editMode: boolean;
}

export function DistrictLink(props: DistrictLinkProps) {
  const { ownerData, disabled, editMode, fetchOwnerData, storeDiff, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const districtSortModel: GridSortModel = [{ field: 'representation', sort: 'asc' }];

  const districtColumns: GridColDef<AdminDistrictStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.IssueView.district.representation', { defaultValue: 'Representation' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const districtRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherAreaAreaDistrictRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.IssueView.district.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },
  ];

  const districtInitialQueryCustomizer: AdminDistrictQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: districtSortModel.length
      ? [
          {
            attribute: districtSortModel[0].field,
            descending: districtSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const linkViewDistrictAction = useLinkViewDistrictAction();

  return (
    <AggregationInput
      name="district"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherAreaAreaDistrict"
      label={t('admin.IssueView.district', { defaultValue: 'District' }) as string}
      labelList={[ownerData.district?.representation?.toString() ?? '']}
      value={ownerData.district}
      error={!!validation.get('district')}
      helperText={validation.get('district')}
      icon={<MdiIcon path="home-city" />}
      disabled={disabled}
      editMode={editMode}
      onView={async () => linkViewDistrictAction(ownerData, ownerData?.district!)}
      onUnset={async () => {
        storeDiff('district', null);
      }}
      onSet={async () => {
        const res = await openRangeDialog<AdminDistrictStored, AdminDistrictQueryCustomizer>({
          id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminIssueDistrict',
          columns: districtColumns,
          defaultSortField: ([{ field: 'representation', sort: 'asc' }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await adminIssueServiceImpl.getRangeForDistrict(ownerData, processQueryCustomizer(queryCustomizer)),
          single: true,
          alreadySelectedItems: ownerData.district?.__identifier as GridRowId,
          filterOptions: districtRangeFilterOptions,
          initialQueryCustomizer: districtInitialQueryCustomizer,
        });

        if (res === undefined) return;
        storeDiff('district', res as AdminDistrictStored);
      }}
    />
  );
}
