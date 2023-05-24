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
import { adminIssueServiceImpl, adminCityServiceImpl } from '~/generated/data-axios';

import { useLinkViewCityAction } from '../actions';

export interface CityLinkProps {
  ownerData: AdminIssueStored;
  storeDiff: (attributeName: keyof AdminIssueStored, value: any) => void;
  validation: Map<keyof AdminIssueStored, string>;
  fetchOwnerData: () => Promise<void>;
  disabled: boolean;
  editMode: boolean;
}

export function CityLink(props: CityLinkProps) {
  const { ownerData, disabled, editMode, fetchOwnerData, storeDiff, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const citySortModel: GridSortModel = [{ field: 'representation', sort: 'asc' }];

  const cityColumns: GridColDef<AdminCityStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.IssueView.city.representation', { defaultValue: 'Representation' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const cityRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherAreaAreaCityRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.IssueView.city.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },
  ];

  const cityInitialQueryCustomizer: AdminCityQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: citySortModel.length
      ? [
          {
            attribute: citySortModel[0].field,
            descending: citySortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const linkViewCityAction = useLinkViewCityAction();

  return (
    <AggregationInput
      name="city"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherAreaAreaCity"
      label={t('admin.IssueView.city', { defaultValue: 'City' }) as string}
      labelList={[ownerData.city?.representation?.toString() ?? '']}
      value={ownerData.city}
      error={!!validation.get('city')}
      helperText={validation.get('city')}
      icon={<MdiIcon path="city" />}
      disabled={disabled}
      editMode={editMode}
      onView={async () => linkViewCityAction(ownerData, ownerData?.city!)}
      onUnset={async () => {
        storeDiff('city', null);
      }}
      onSet={async () => {
        const res = await openRangeDialog<AdminCityStored, AdminCityQueryCustomizer>({
          id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminIssueCity',
          columns: cityColumns,
          defaultSortField: ([{ field: 'representation', sort: 'asc' }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await adminIssueServiceImpl.getRangeForCity(ownerData, processQueryCustomizer(queryCustomizer)),
          single: true,
          alreadySelectedItems: ownerData.city?.__identifier as GridRowId,
          filterOptions: cityRangeFilterOptions,
          initialQueryCustomizer: cityInitialQueryCustomizer,
        });

        if (res === undefined) return;
        storeDiff('city', res as AdminCityStored);
      }}
    />
  );
}
