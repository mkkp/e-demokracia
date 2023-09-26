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
export type CountyLinkFilterInitializer = (ownerData: AdminCreateIssueInput) => Filter[] | undefined;

export const COUNTY_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'CountyLinkFilterInitializerHook';
export type CountyLinkFilterInitializerHook = () => CountyLinkFilterInitializer;

export interface CountyLinkProps {
  ownerData: AdminCreateIssueInput;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
  onChange: (value: AdminCounty | AdminCountyStored | null) => void;
  validation: Map<keyof AdminCreateIssueInput, string>;
}

export function CountyLink(props: CountyLinkProps) {
  const { ownerData, disabled, readOnly, editMode, onChange, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const { service: filterInitializerHook } = useTrackService<CountyLinkFilterInitializerHook>(
    `(${OBJECTCLASS}=${COUNTY_LINK_FILTER_INITIALIZER_INTERFACE_KEY})`,
  );
  const callFilterInitializer: CountyLinkFilterInitializer | undefined =
    filterInitializerHook && filterInitializerHook();

  const countySortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const countyColumns: GridColDef<AdminCountyStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.CreateIssueInputForm.county.representation', { defaultValue: 'Representation' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'name',
      headerName: t('admin.CreateIssueInputForm.county.name', { defaultValue: 'Name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const countyRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueCountyRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.CreateIssueInputForm.county.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueCountyNameFilter',
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
      id="LinkedemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueCounty"
      label={t('admin.CreateIssueInputForm.county', { defaultValue: 'County' }) as string}
      labelList={[ownerData.county?.representation?.toString() ?? '', ownerData.county?.name?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('county')}
      helperText={validation.get('county')}
      icon={<MdiIcon path="city" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(county) => {
        // storeDiff('county', county);
        onChange(county as AdminCountyStored);
      }}
      onSet={async () => {
        const res = await openRangeDialog<AdminCountyStored, AdminCountyQueryCustomizer>({
          id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminCreateIssueInputCounty',
          columns: countyColumns,
          defaultSortField: ([{ field: 'representation', sort: null }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await adminCreateIssueInputServiceForClassImpl.getRangeForCounty(
              ownerData,
              processQueryCustomizer(queryCustomizer),
            ),
          single: true,
          alreadySelectedItems: ownerData.county ? [ownerData.county] : undefined,
          filterOptions: countyRangeFilterOptions,
          initialQueryCustomizer: countyInitialQueryCustomizer,
          initialFilters: callFilterInitializer && callFilterInitializer(ownerData),
        });

        if (res === undefined) return;
        // storeDiff('county', res.value as AdminCountyStored);
        onChange(res.value as AdminCountyStored);
      }}
      onAutoCompleteSearch={async (searchText: string) => {
        const queryCustomizer: AdminCountyQueryCustomizer = {
          ...(searchText?.length
            ? {
                representation: [{ operator: _StringOperation.like, value: searchText }],
              }
            : {}),
          ...mapAllFiltersToQueryCustomizerProperties(
            (callFilterInitializer && callFilterInitializer(ownerData)) || [],
          ),
          _mask: '{representation,name}',
          _orderBy: [{ attribute: 'representation', descending: false }],
          _seek: { limit: 10 },
        };
        return await adminCreateIssueInputServiceForClassImpl.getRangeForCounty(
          ownerData,
          processQueryCustomizer(queryCustomizer),
        );
      }}
      onUnset={async () => {
        // storeDiff('county', null);
        onChange(null);
      }}
    />
  );
}
