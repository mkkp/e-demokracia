//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#linkComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/link.tsx
// Template file: actor/src/pages/components/link.tsx.hbs

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
  EdemokraciaIssueScope,
  EdemokraciaIssueStatus,
  EdemokraciaVoteType,
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServiceCon,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserIssues,
  ServiceUserIssuesStored,
  _StringOperation,
} from '~/generated/data-api';
import { serviceIssueServiceForClassImpl, serviceCityServiceForClassImpl } from '~/generated/data-axios';
import { useLinkViewCityAction } from '../actions';

export type CityLinkFilterInitializer = (ownerData: ServiceIssueStored) => Filter[] | undefined;

export const CITY_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'CityLinkFilterInitializerHook';
export type CityLinkFilterInitializerHook = () => CityLinkFilterInitializer;

export interface CityLinkProps {
  ownerData: ServiceIssueStored;
  validation: Map<keyof ServiceIssueStored, string>;
  fetchOwnerData: () => Promise<void>;
  onChange: (value: ServiceCity | ServiceCityStored | null) => void;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
}

export function CityLink(props: CityLinkProps) {
  const { ownerData, disabled, readOnly, editMode, fetchOwnerData, onChange, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const { service: filterInitializerHook } = useTrackService<CityLinkFilterInitializerHook>(
    `(${OBJECTCLASS}=${CITY_LINK_FILTER_INITIALIZER_INTERFACE_KEY})`,
  );
  const callFilterInitializer: CityLinkFilterInitializer | undefined = filterInitializerHook && filterInitializerHook();

  const citySortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const cityColumns: GridColDef<ServiceCityStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('service.IssueView.city.representation', { defaultValue: 'Representation' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const cityRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityViewDefaultIssueViewEditOtherAreaAreaCityRepresentationFilter',
      attributeName: 'representation',
      label: t('service.IssueView.city.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },
  ];

  const cityInitialQueryCustomizer: ServiceCityQueryCustomizer = {
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
      id="LinkedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentCityViewDefaultIssueViewEditOtherAreaAreaCity"
      label={t('service.IssueView.city', { defaultValue: 'City' }) as string}
      labelList={[ownerData.city?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('city')}
      helperText={validation.get('city')}
      icon={<MdiIcon path="city" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(city) => {
        // storeDiff('city', city);
        onChange(city as ServiceCityStored);
      }}
      onView={async () => linkViewCityAction(ownerData, ownerData?.city!, () => fetchOwnerData())}
      onUnset={async () => {
        // storeDiff('city', null);
        onChange(null);
      }}
      onSet={async () => {
        const res = await openRangeDialog<ServiceCityStored, ServiceCityQueryCustomizer>({
          id: 'RelationTypeedemokraciaServiceUserEdemokraciaServiceIssueCity',
          columns: cityColumns,
          defaultSortField: ([{ field: 'representation', sort: null }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await serviceIssueServiceForClassImpl.getRangeForCity(ownerData, processQueryCustomizer(queryCustomizer)),
          single: true,
          alreadySelectedItems: ownerData.city ? [ownerData.city] : undefined,
          filterOptions: cityRangeFilterOptions,
          initialQueryCustomizer: cityInitialQueryCustomizer,
          initialFilters: callFilterInitializer && callFilterInitializer(ownerData),
          editMode: editMode,
        });

        if (res === undefined) return;
        // storeDiff('city', res.value as ServiceCityStored);
        onChange(res.value as ServiceCityStored);
      }}
      onAutoCompleteSearch={async (searchText: string) => {
        const queryCustomizer: ServiceCityQueryCustomizer = {
          ...(searchText?.length
            ? {
                representation: [{ operator: _StringOperation.like, value: searchText }],
              }
            : {}),
          ...mapAllFiltersToQueryCustomizerProperties(
            (callFilterInitializer && callFilterInitializer(ownerData)) || [],
          ),
          _mask: '{representation}',
          _orderBy: [{ attribute: 'representation', descending: false }],
          _seek: { limit: 10 },
        };
        return await serviceIssueServiceForClassImpl.getRangeForCity(
          ownerData,
          processQueryCustomizer(queryCustomizer),
        );
      }}
    />
  );
}
