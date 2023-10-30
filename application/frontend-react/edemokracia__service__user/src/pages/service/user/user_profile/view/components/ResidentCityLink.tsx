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
  ServiceUserProfile,
  ServiceUserProfileQueryCustomizer,
  ServiceUserProfileStored,
  _StringOperation,
} from '~/generated/data-api';
import { serviceUserProfileServiceForClassImpl, serviceCityServiceForClassImpl } from '~/generated/data-axios';
import { useLinkViewResidentCityAction } from '../actions';

export type ResidentCityLinkFilterInitializer = (ownerData: ServiceUserProfileStored) => Filter[] | undefined;

export const RESIDENT_CITY_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'ResidentCityLinkFilterInitializerHook';
export type ResidentCityLinkFilterInitializerHook = () => ResidentCityLinkFilterInitializer;

export interface ResidentCityLinkProps {
  ownerData: ServiceUserProfileStored;
  validation: Map<keyof ServiceUserProfileStored, string>;
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
      headerName: t('service.UserProfileView.residentCity.representation', { defaultValue: 'City' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const residentCityRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasResidencyResidentCityRepresentationFilter',
      attributeName: 'representation',
      label: t('service.UserProfileView.residentCity.representation', { defaultValue: 'City' }) as string,
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
      id="LinkedemokraciaServiceUserEdemokraciaServiceUserUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasResidencyResidentCity"
      label={t('service.UserProfileView.residentCity', { defaultValue: 'Resident city' }) as string}
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
    />
  );
}
