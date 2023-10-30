//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForViewDialogs(#application)
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
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  _StringOperation,
} from '~/generated/data-api';
import { serviceServiceUserServiceForClassImpl, serviceCityServiceForClassImpl } from '~/generated/data-axios';
import { useLinkViewResidentCityAction } from '../actions';

export type ResidentCityLinkFilterInitializer = (ownerData: ServiceServiceUserStored) => Filter[] | undefined;

export const RESIDENT_CITY_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'ResidentCityLinkFilterInitializerHook';
export type ResidentCityLinkFilterInitializerHook = () => ResidentCityLinkFilterInitializer;

export interface ResidentCityLinkProps {
  ownerData: ServiceServiceUserStored;
  validation: Map<keyof ServiceServiceUserStored, string>;
  fetchOwnerData: () => Promise<void>;
  onChange: (value: ServiceCity | ServiceCityStored | null) => void;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
}

export function ResidentCityLink(props: ResidentCityLinkProps) {
  const { ownerData, disabled, readOnly, editMode, fetchOwnerData, onChange, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const { service: filterInitializerHook } = useTrackService<ResidentCityLinkFilterInitializerHook>(
    `(${OBJECTCLASS}=${RESIDENT_CITY_LINK_FILTER_INITIALIZER_INTERFACE_KEY})`,
  );
  const callFilterInitializer: ResidentCityLinkFilterInitializer | undefined =
    filterInitializerHook && filterInitializerHook();

  const residentCitySortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const residentCityColumns: GridColDef<ServiceCityStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('service.ServiceUserView.residentCity.representation', { defaultValue: 'City' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const residentCityRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserManagerCreateUserOutputDefaultServiceUserViewEditAreasLabelWrapperAreasResidencyResidentCityRepresentationFilter',
      attributeName: 'representation',
      label: t('service.ServiceUserView.residentCity.representation', { defaultValue: 'City' }) as string,
      filterType: FilterType.string,
    },
  ];

  const residentCityInitialQueryCustomizer: ServiceCityQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: residentCitySortModel.length
      ? [
          {
            attribute: residentCitySortModel[0].field,
            descending: residentCitySortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const linkViewResidentCityAction = useLinkViewResidentCityAction();

  return (
    <AggregationInput
      name="residentCity"
      id="LinkedemokraciaServiceUserEdemokraciaServiceUserManagerCreateUserOutputDefaultServiceUserViewEditAreasLabelWrapperAreasResidencyResidentCity"
      label={t('service.ServiceUserView.residentCity', { defaultValue: 'Resident city' }) as string}
      labelList={[ownerData.residentCity?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('residentCity')}
      helperText={validation.get('residentCity')}
      icon={<MdiIcon path="city" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(residentCity) => {
        // storeDiff('residentCity', residentCity);
        onChange(residentCity as ServiceCityStored);
      }}
      onView={async () => linkViewResidentCityAction(ownerData, ownerData?.residentCity!, () => fetchOwnerData())}
      onUnset={async () => {
        // storeDiff('residentCity', null);
        onChange(null);
      }}
      onSet={async () => {
        const res = await openRangeDialog<ServiceCityStored, ServiceCityQueryCustomizer>({
          id: 'RelationTypeedemokraciaServiceUserEdemokraciaServiceServiceUserResidentCity',
          columns: residentCityColumns,
          defaultSortField: ([{ field: 'representation', sort: null }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await serviceServiceUserServiceForClassImpl.getRangeForResidentCity(
              ownerData,
              processQueryCustomizer(queryCustomizer),
            ),
          single: true,
          alreadySelectedItems: ownerData.residentCity ? [ownerData.residentCity] : undefined,
          filterOptions: residentCityRangeFilterOptions,
          initialQueryCustomizer: residentCityInitialQueryCustomizer,
          initialFilters: callFilterInitializer && callFilterInitializer(ownerData),
          editMode: editMode,
        });

        if (res === undefined) return;
        // storeDiff('residentCity', res.value as ServiceCityStored);
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
        return await serviceServiceUserServiceForClassImpl.getRangeForResidentCity(
          ownerData,
          processQueryCustomizer(queryCustomizer),
        );
      }}
    />
  );
}
