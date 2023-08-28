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
import { adminIssueServiceForClassImpl, adminCountyServiceForClassImpl } from '~/generated/data-axios';

import { useLinkViewCountyAction } from '../actions';

export interface CountyLinkProps {
  ownerData: AdminIssueStored;
  storeDiff: (attributeName: keyof AdminIssueStored, value: any) => void;
  validation: Map<keyof AdminIssueStored, string>;
  fetchOwnerData: () => Promise<void>;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
}

export function CountyLink(props: CountyLinkProps) {
  const { ownerData, disabled, readOnly, editMode, fetchOwnerData, storeDiff, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const countySortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const countyColumns: GridColDef<AdminCountyStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.IssueView.county.representation', { defaultValue: 'Representation' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const countyRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardCreateIssueOutputDefaultIssueViewOtherAreaAreaCountyRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.IssueView.county.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },
  ];

  const countyInitialQueryCustomizer: AdminCountyQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: countySortModel.length
      ? [
          {
            attribute: countySortModel[0].field,
            descending: countySortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const linkViewCountyAction = useLinkViewCountyAction();

  return (
    <AggregationInput
      name="county"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminDashboardCreateIssueOutputDefaultIssueViewOtherAreaAreaCounty"
      label={t('admin.IssueView.county', { defaultValue: 'County' }) as string}
      labelList={[ownerData.county?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('county')}
      helperText={validation.get('county')}
      icon={<MdiIcon path="map" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(county) => {
        storeDiff('county', county);
      }}
      onView={async () => linkViewCountyAction(ownerData, ownerData?.county!, () => fetchOwnerData())}
      onUnset={async () => {
        storeDiff('county', null);
      }}
      onSet={async () => {
        const res = await openRangeDialog<AdminCountyStored, AdminCountyQueryCustomizer>({
          id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminIssueCounty',
          columns: countyColumns,
          defaultSortField: ([{ field: 'representation', sort: null }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await adminIssueServiceForClassImpl.getRangeForCounty(ownerData, processQueryCustomizer(queryCustomizer)),
          single: true,
          alreadySelectedItems: ownerData.county?.__identifier as GridRowId,
          filterOptions: countyRangeFilterOptions,
          initialQueryCustomizer: countyInitialQueryCustomizer,
          editMode: editMode,
        });

        if (res === undefined) return;
        storeDiff('county', res.value as AdminCountyStored);
      }}
      onAutoCompleteSearch={async (searchText: string) => {
        const queryCustomizer: AdminCountyQueryCustomizer = {
          ...(searchText?.length
            ? {
                representation: [{ operator: _StringOperation.like, value: searchText }],
              }
            : {}),
          _mask: '{representation}',
          _orderBy: [{ attribute: 'representation', descending: false }],
          _seek: { limit: 10 },
        };
        return await adminIssueServiceForClassImpl.getRangeForCounty(
          ownerData,
          processQueryCustomizer(queryCustomizer),
        );
      }}
    />
  );
}
