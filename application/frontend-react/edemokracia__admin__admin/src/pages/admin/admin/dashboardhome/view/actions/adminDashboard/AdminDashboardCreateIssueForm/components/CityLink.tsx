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

export interface CityLinkProps {
  ownerData: AdminCreateIssueInput;
  disabled: boolean;
  editMode: boolean;
  storeDiff: (attributeName: keyof AdminCreateIssueInput, value: any) => void;
  validation: Map<keyof AdminCreateIssueInput, string>;
}

export function CityLink(props: CityLinkProps) {
  const { ownerData, disabled, editMode, storeDiff, validation } = props;
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
      headerName: t('admin.CreateIssueInputForm.city.representation', { defaultValue: 'Representation' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'name',
      headerName: t('admin.CreateIssueInputForm.city.name', { defaultValue: 'Name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'county',
      headerName: t('admin.CreateIssueInputForm.city.county', { defaultValue: 'County' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const cityRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardCreateIssueInputDefaultCreateIssueInputFormIssueLabelWrapperIssueCityRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.CreateIssueInputForm.city.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardCreateIssueInputDefaultCreateIssueInputFormIssueLabelWrapperIssueCityNameFilter',
      attributeName: 'name',
      label: t('admin.CreateIssueInputForm.city.name', { defaultValue: 'Name' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardCreateIssueInputDefaultCreateIssueInputFormIssueLabelWrapperIssueCityCountyFilter',
      attributeName: 'county',
      label: t('admin.CreateIssueInputForm.city.county', { defaultValue: 'County' }) as string,
      filterType: FilterType.string,
    },
  ];

  const cityInitialQueryCustomizer: AdminCityQueryCustomizer = {
    _mask: '{representation,name,county}',
    _orderBy: citySortModel.length
      ? [
          {
            attribute: citySortModel[0].field,
            descending: citySortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  return (
    <AggregationInput
      name="city"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminDashboardCreateIssueInputDefaultCreateIssueInputFormIssueLabelWrapperIssueCity"
      label={t('admin.CreateIssueInputForm.city', { defaultValue: 'City' }) as string}
      labelList={[
        ownerData.city?.representation?.toString() ?? '',
        ownerData.city?.name?.toString() ?? '',
        ownerData.city?.county?.toString() ?? '',
      ]}
      value={ownerData.city}
      error={!!validation.get('city')}
      helperText={validation.get('city')}
      icon={<MdiIcon path="map" />}
      disabled={disabled}
      editMode={editMode}
      onSet={async () => {
        const res = await openRangeDialog<AdminCityStored, AdminCityQueryCustomizer>({
          id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminCreateIssueInputCity',
          columns: cityColumns,
          defaultSortField: ([{ field: 'representation', sort: 'asc' }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await adminCreateIssueInputServiceImpl.getRangeForCity(ownerData, processQueryCustomizer(queryCustomizer)),
          single: true,
          alreadySelectedItems: ownerData.city?.__identifier as GridRowId,
          filterOptions: cityRangeFilterOptions,
          initialQueryCustomizer: cityInitialQueryCustomizer,
        });

        if (res === undefined) return;
        storeDiff('city', res as AdminCityStored);
      }}
      onUnset={async () => {
        storeDiff('city', null);
      }}
    />
  );
}
