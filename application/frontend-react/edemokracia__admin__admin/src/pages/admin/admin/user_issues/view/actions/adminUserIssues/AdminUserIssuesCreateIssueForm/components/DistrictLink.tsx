//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForActionFormPages(#application)
// Path expression: #pagePath(#getActionContainer(#self.value))+'actions/'+#pageActionFormPathSuffix(#self.value)+'/components/'+#linkComponentName(#self.key)+'.tsx'
// Template name: actor/src/pages/actions/actionForm/components/link.tsx
// Template file: actor/src/pages/actions/actionForm/components/link.tsx.hbs

import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
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
import { useTrackService } from '@pandino/react-hooks';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { MdiIcon } from '~/components';
import {
  AggregationInput,
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  TrinaryLogicCombobox,
} from '~/components/widgets';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { FilterType } from '~/components-api';
import type { FilterOption, Filter } from '~/components-api';
import { baseColumnConfig, toastConfig } from '~/config';
import {
  fileHandling,
  mapAllFiltersToQueryCustomizerProperties,
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
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminIssueType,
  AdminIssueTypeQueryCustomizer,
  AdminIssueTypeStored,
  AdminUserIssues,
  AdminUserIssuesQueryCustomizer,
  AdminUserIssuesStored,
  _StringOperation,
} from '~/generated/data-api';
import { adminCreateIssueInputServiceForClassImpl, adminUserIssuesServiceForClassImpl } from '~/generated/data-axios';
export type DistrictLinkFilterInitializer = (ownerData: AdminCreateIssueInput) => Filter[] | undefined;

export const DISTRICT_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'DistrictLinkFilterInitializerHook';
export type DistrictLinkFilterInitializerHook = () => DistrictLinkFilterInitializer;

export interface DistrictLinkProps {
  ownerData: AdminCreateIssueInput;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
  onChange: (value: AdminDistrict | AdminDistrictStored | null) => void;
  validation: Map<keyof AdminCreateIssueInput, string>;
}

export function DistrictLink(props: DistrictLinkProps) {
  const { ownerData, disabled, readOnly, editMode, onChange, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const { service: filterInitializerHook } = useTrackService<DistrictLinkFilterInitializerHook>(
    `(${OBJECTCLASS}=${DISTRICT_LINK_FILTER_INITIALIZER_INTERFACE_KEY})`,
  );
  const callFilterInitializer: DistrictLinkFilterInitializer | undefined =
    filterInitializerHook && filterInitializerHook();

  const districtSortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const districtColumns: GridColDef<AdminDistrictStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.CreateIssueInputForm.district.representation', { defaultValue: 'Representation' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'name',
      headerName: t('admin.CreateIssueInputForm.district.name', { defaultValue: 'Name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'county',
      headerName: t('admin.CreateIssueInputForm.district.county', { defaultValue: 'County' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'city',
      headerName: t('admin.CreateIssueInputForm.district.city', { defaultValue: 'City' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const districtRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueDistrictRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.CreateIssueInputForm.district.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueDistrictNameFilter',
      attributeName: 'name',
      label: t('admin.CreateIssueInputForm.district.name', { defaultValue: 'Name' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueDistrictCountyFilter',
      attributeName: 'county',
      label: t('admin.CreateIssueInputForm.district.county', { defaultValue: 'County' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueDistrictCityFilter',
      attributeName: 'city',
      label: t('admin.CreateIssueInputForm.district.city', { defaultValue: 'City' }) as string,
      filterType: FilterType.string,
    },
  ];

  const districtInitialQueryCustomizer: AdminDistrictQueryCustomizer = {
    _mask: '{representation,name,county,city}',
    _orderBy: districtSortModel.length
      ? [
          {
            attribute: districtSortModel[0].field,
            descending: districtSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  return (
    <AggregationInput
      name="district"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueDistrict"
      label={t('admin.CreateIssueInputForm.district', { defaultValue: 'District' }) as string}
      labelList={[
        ownerData.district?.representation?.toString() ?? '',
        ownerData.district?.name?.toString() ?? '',
        ownerData.district?.county?.toString() ?? '',
        ownerData.district?.city?.toString() ?? '',
      ]}
      ownerData={ownerData}
      error={!!validation.get('district')}
      helperText={validation.get('district')}
      icon={<MdiIcon path="home-city" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(district) => {
        // storeDiff('district', district);
        onChange(district as AdminDistrictStored);
      }}
      onSet={async () => {
        const res = await openRangeDialog<AdminDistrictStored, AdminDistrictQueryCustomizer>({
          id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminCreateIssueInputDistrict',
          columns: districtColumns,
          defaultSortField: ([{ field: 'representation', sort: null }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await adminCreateIssueInputServiceForClassImpl.getRangeForDistrict(
              ownerData,
              processQueryCustomizer(queryCustomizer),
            ),
          single: true,
          alreadySelectedItems: ownerData.district ? [ownerData.district] : undefined,
          filterOptions: districtRangeFilterOptions,
          initialQueryCustomizer: districtInitialQueryCustomizer,
          initialFilters: callFilterInitializer && callFilterInitializer(ownerData),
        });

        if (res === undefined) return;
        // storeDiff('district', res.value as AdminDistrictStored);
        onChange(res.value as AdminDistrictStored);
      }}
      onAutoCompleteSearch={async (searchText: string) => {
        const queryCustomizer: AdminDistrictQueryCustomizer = {
          ...(searchText?.length
            ? {
                representation: [{ operator: _StringOperation.like, value: searchText }],
              }
            : {}),
          ...mapAllFiltersToQueryCustomizerProperties(
            (callFilterInitializer && callFilterInitializer(ownerData)) || [],
          ),
          _mask: '{representation,name,county,city}',
          _orderBy: [{ attribute: 'representation', descending: false }],
          _seek: { limit: 10 },
        };
        return await adminCreateIssueInputServiceForClassImpl.getRangeForDistrict(
          ownerData,
          processQueryCustomizer(queryCustomizer),
        );
      }}
      onUnset={async () => {
        // storeDiff('district', null);
        onChange(null);
      }}
    />
  );
}