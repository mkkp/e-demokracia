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
import { serviceUserProfileServiceForClassImpl, serviceDistrictServiceForClassImpl } from '~/generated/data-axios';
import { useLinkViewResidentDistrictAction } from '../actions';

export type ResidentDistrictLinkFilterInitializer = (ownerData: ServiceUserProfileStored) => Filter[] | undefined;

export const RESIDENT_DISTRICT_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'ResidentDistrictLinkFilterInitializerHook';
export type ResidentDistrictLinkFilterInitializerHook = () => ResidentDistrictLinkFilterInitializer;

export interface ResidentDistrictLinkProps {
  ownerData: ServiceUserProfileStored;
  validation: Map<keyof ServiceUserProfileStored, string>;
  fetchOwnerData: () => Promise<void>;
  onChange: (value: ServiceDistrict | ServiceDistrictStored | null) => void;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
}

export function ResidentDistrictLink(props: ResidentDistrictLinkProps) {
  const { ownerData, disabled, readOnly, editMode, fetchOwnerData, onChange, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const { service: filterInitializerHook } = useTrackService<ResidentDistrictLinkFilterInitializerHook>(
    `(${OBJECTCLASS}=${RESIDENT_DISTRICT_LINK_FILTER_INITIALIZER_INTERFACE_KEY})`,
  );
  const callFilterInitializer: ResidentDistrictLinkFilterInitializer | undefined =
    filterInitializerHook && filterInitializerHook();

  const residentDistrictSortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const residentDistrictColumns: GridColDef<ServiceDistrictStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('service.UserProfileView.residentDistrict.representation', { defaultValue: 'District' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const residentDistrictRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasResidencyResidentDistrictRepresentationFilter',
      attributeName: 'representation',
      label: t('service.UserProfileView.residentDistrict.representation', { defaultValue: 'District' }) as string,
      filterType: FilterType.string,
    },
  ];

  const residentDistrictInitialQueryCustomizer: ServiceDistrictQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: residentDistrictSortModel.length
      ? [
          {
            attribute: residentDistrictSortModel[0].field,
            descending: residentDistrictSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const linkViewResidentDistrictAction = useLinkViewResidentDistrictAction();

  return (
    <AggregationInput
      name="residentDistrict"
      id="LinkedemokraciaServiceUserEdemokraciaServiceUserUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasResidencyResidentDistrict"
      label={t('service.UserProfileView.residentDistrict', { defaultValue: 'Resident district' }) as string}
      labelList={[ownerData.residentDistrict?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('residentDistrict')}
      helperText={validation.get('residentDistrict')}
      icon={<MdiIcon path="home-city" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(residentDistrict) => {
        // storeDiff('residentDistrict', residentDistrict);
        onChange(residentDistrict as ServiceDistrictStored);
      }}
      onView={async () =>
        linkViewResidentDistrictAction(ownerData, ownerData?.residentDistrict!, () => fetchOwnerData())
      }
    />
  );
}
