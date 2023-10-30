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
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceCreateIssueInput,
  ServiceCreateIssueInputQueryCustomizer,
  ServiceCreateIssueInputStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  ServiceUserIssues,
  ServiceUserIssuesQueryCustomizer,
  ServiceUserIssuesStored,
  _StringOperation,
} from '~/generated/data-api';
import {
  serviceCreateIssueInputServiceForClassImpl,
  serviceUserIssuesServiceForClassImpl,
} from '~/generated/data-axios';
export type CityLinkFilterInitializer = (ownerData: ServiceCreateIssueInput) => Filter[] | undefined;

export const CITY_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'CityLinkFilterInitializerHook';
export type CityLinkFilterInitializerHook = () => CityLinkFilterInitializer;

export interface CityLinkProps {
  ownerData: ServiceCreateIssueInput;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
  onChange: (value: ServiceCity | ServiceCityStored | null) => void;
  validation: Map<keyof ServiceCreateIssueInput, string>;
}

export function CityLink(props: CityLinkProps) {
  const { ownerData, disabled, readOnly, editMode, onChange, validation } = props;
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
      headerName: t('service.CreateIssueInputForm.city.representation', { defaultValue: 'Representation' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'name',
      headerName: t('service.CreateIssueInputForm.city.name', { defaultValue: 'Name' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'county',
      headerName: t('service.CreateIssueInputForm.city.county', { defaultValue: 'County' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const cityRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueCityRepresentationFilter',
      attributeName: 'representation',
      label: t('service.CreateIssueInputForm.city.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueCityNameFilter',
      attributeName: 'name',
      label: t('service.CreateIssueInputForm.city.name', { defaultValue: 'Name' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueCityCountyFilter',
      attributeName: 'county',
      label: t('service.CreateIssueInputForm.city.county', { defaultValue: 'County' }) as string,
      filterType: FilterType.string,
    },
  ];

  const cityInitialQueryCustomizer: ServiceCityQueryCustomizer = {
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
      id="LinkedemokraciaServiceUserEdemokraciaServiceUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueCity"
      label={t('service.CreateIssueInputForm.city', { defaultValue: 'City' }) as string}
      labelList={[
        ownerData.city?.representation?.toString() ?? '',
        ownerData.city?.name?.toString() ?? '',
        ownerData.city?.county?.toString() ?? '',
      ]}
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
      onSet={async () => {
        const res = await openRangeDialog<ServiceCityStored, ServiceCityQueryCustomizer>({
          id: 'RelationTypeedemokraciaServiceUserEdemokraciaServiceCreateIssueInputCity',
          columns: cityColumns,
          defaultSortField: ([{ field: 'representation', sort: null }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await serviceCreateIssueInputServiceForClassImpl.getRangeForCity(
              ownerData,
              processQueryCustomizer(queryCustomizer),
            ),
          single: true,
          alreadySelectedItems: ownerData.city ? [ownerData.city] : undefined,
          filterOptions: cityRangeFilterOptions,
          initialQueryCustomizer: cityInitialQueryCustomizer,
          initialFilters: callFilterInitializer && callFilterInitializer(ownerData),
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
          _mask: '{representation,name,county}',
          _orderBy: [{ attribute: 'representation', descending: false }],
          _seek: { limit: 10 },
        };
        return await serviceCreateIssueInputServiceForClassImpl.getRangeForCity(
          ownerData,
          processQueryCustomizer(queryCustomizer),
        );
      }}
      onUnset={async () => {
        // storeDiff('city', null);
        onChange(null);
      }}
    />
  );
}
