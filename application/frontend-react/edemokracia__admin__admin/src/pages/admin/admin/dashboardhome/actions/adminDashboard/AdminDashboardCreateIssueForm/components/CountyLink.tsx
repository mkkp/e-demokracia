//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForActionFormPages(#application)
// Path expression: #pagePath(#getActionContainer(#self.value))+'actions/'+#pageActionFormPathSuffix(#self.value)+'/components/'+#linkComponentName(#self.key)+'.tsx'
// Template name: actor/src/pages/actions/actionForm/components/link.tsx
// Template file: actor/src/pages/actions/actionForm/components/link.tsx.hbs

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
  AdminCounty,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminCreateIssueInput,
  AdminCreateIssueInputQueryCustomizer,
  AdminCreateIssueInputStored,
  AdminDashboard,
  AdminDashboardQueryCustomizer,
  AdminDashboardStored,
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminIssueType,
  AdminIssueTypeQueryCustomizer,
  AdminIssueTypeStored,
} from '~/generated/data-api';
import { adminCreateIssueInputServiceImpl, adminDashboardServiceImpl } from '~/generated/data-axios';

export interface CountyLinkProps {
  ownerData: AdminCreateIssueInput;
  disabled: boolean;
  editMode: boolean;
  storeDiff: (attributeName: keyof AdminCreateIssueInput, value: any) => void;
  validation: Map<keyof AdminCreateIssueInput, string>;
}

export function CountyLink(props: CountyLinkProps) {
  const { ownerData, disabled, editMode, storeDiff, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const countySortModel: GridSortModel = [{ field: 'representation', sort: 'asc' }];

  const countyColumns: GridColDef<AdminCountyStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.CreateIssueInputForm.county.representation', { defaultValue: 'Representation' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'name',
      headerName: t('admin.CreateIssueInputForm.county.name', { defaultValue: 'Name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const countyRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardCreateIssueInputDefaultCreateIssueInputFormIssueLabelWrapperIssueCountyRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.CreateIssueInputForm.county.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardCreateIssueInputDefaultCreateIssueInputFormIssueLabelWrapperIssueCountyNameFilter',
      attributeName: 'name',
      label: t('admin.CreateIssueInputForm.county.name', { defaultValue: 'Name' }) as string,
      filterType: FilterType.string,
    },
  ];

  const countyInitialQueryCustomizer: AdminCountyQueryCustomizer = {
    _mask: '{representation,name}',
    _orderBy: countySortModel.length
      ? [
          {
            attribute: countySortModel[0].field,
            descending: countySortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  return (
    <AggregationInput
      name="county"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminDashboardCreateIssueInputDefaultCreateIssueInputFormIssueLabelWrapperIssueCounty"
      label={t('admin.CreateIssueInputForm.county', { defaultValue: 'County' }) as string}
      labelList={[ownerData.county?.representation?.toString() ?? '', ownerData.county?.name?.toString() ?? '']}
      value={ownerData.county}
      error={!!validation.get('county')}
      helperText={validation.get('county')}
      icon={<MdiIcon path="city" />}
      disabled={disabled}
      editMode={editMode}
      onSet={async () => {
        const res = await openRangeDialog<AdminCountyStored, AdminCountyQueryCustomizer>({
          id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminCreateIssueInputCounty',
          columns: countyColumns,
          defaultSortField: ([{ field: 'representation', sort: 'asc' }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await adminCreateIssueInputServiceImpl.getRangeForCounty(
              ownerData,
              processQueryCustomizer(queryCustomizer),
            ),
          single: true,
          alreadySelectedItems: ownerData.county?.__identifier as GridRowId,
          filterOptions: countyRangeFilterOptions,
          initialQueryCustomizer: countyInitialQueryCustomizer,
        });

        if (res === undefined) return;
        storeDiff('county', res as AdminCountyStored);
      }}
      onUnset={async () => {
        storeDiff('county', null);
      }}
    />
  );
}
